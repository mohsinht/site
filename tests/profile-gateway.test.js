import { describe, expect, test } from '@jest/globals'
import {
  answerFollowup,
  jsonResume,
  profileMarkdown,
  publicProfile,
  verifyClaim
} from '../lib/profile-gateway.js'
import { independentProjects, profile, publicFaq } from '../data/profile.js'

describe('public profile projections', () => {
  test('uses shared facts, stable IDs, dates, and explicit evidence scope', () => {
    const data = publicProfile()
    expect(data.identity.name).toBe(profile.name)
    expect(data.learningApproach).toBe(profile.learningApproach)
    expect(data.experience[0].startDate).toBe('2026-07')
    expect(data.experience[0]).not.toHaveProperty('endDate')
    expect(new Set(data.experience.map((item) => item.id)).size).toBe(
      data.experience.length
    )
    const awell = data.experience.find((item) => item.id === 'experience.awell')
    expect(awell.sourceType).toBe('self_reported')
    expect(
      awell.sources.some((item) => item.kind === 'colleague_recommendation')
    ).toBe(true)
    expect(
      awell.sources.find((item) => item.kind === 'repository_context').supports
    ).toContain('does not establish authorship')
    expect(
      data.experience.find((item) => item.id === 'experience.tintash')
        .sources[0].kind
    ).toBe('employer_letter')
    expect(data.projects.map((item) => item.name)).toEqual(
      independentProjects.map((item) => item.name)
    )
  })

  test('keeps the public identity projection small and the resume consistent', () => {
    const data = publicProfile()
    expect(Object.keys(data.identity).sort()).toEqual(
      [
        'email',
        'location',
        'name',
        'profiles',
        'summary',
        'timezone',
        'title',
        'utcOffset',
        'website'
      ].sort()
    )
    for (const key of [
      'phone',
      'birthDate',
      'homeAddress',
      'compensation',
      'family',
      'availability'
    ])
      expect(data).not.toHaveProperty(key)
    const resume = jsonResume()
    expect(resume.work).toHaveLength(data.experience.length)
    expect(resume.projects.map((item) => item.name)).toEqual(
      data.projects.map((item) => item.name)
    )
    expect(resume.basics.summary).toBe(
      `${profile.resumeSummary} ${profile.learningApproach}`
    )
    expect(resume.education).toEqual([profile.educationRecord])
    expect(profileMarkdown(data)).toContain(profile.learningApproach)
    expect(profileMarkdown(data)).toContain('experience.awell')
  })

  test('retrieves context without inventing verification, private details, or skills', () => {
    const evidence = verifyClaim('Awell')
    expect(evidence.status).toBe('published_context_found')
    expect(evidence.matches[0].id).toBe('experience.awell')
    expect(evidence.evidencePolicy).toContain('self-reported')
    expect(verifyClaim('education').matches[0].id).toBe('profile.education')
    expect(verifyClaim('skills').matches[0].id).toBe('profile.skills')
    expect(
      answerFollowup('Can Mohsin learn unfamiliar tools?').answers[0].answer
    ).toBe(profile.learningApproach)
    expect(answerFollowup('What is his salary?').answers[0].answer).toContain(
      'confirmed directly'
    )
    expect(answerFollowup('What is his favourite dessert?').status).toBe(
      'not_established'
    )
    expect(verifyClaim('Does Mohsin know Rust?').status).toBe('not_established')
    expect(
      answerFollowup('What hours can he overlap?').answers[0].answer
    ).toContain('confirmed directly')
    expect(publicFaq.every((item) => item.answer.length > 0)).toBe(true)
  })
})
