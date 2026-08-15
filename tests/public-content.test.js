import { describe, expect, test } from '@jest/globals'
import { contentSignal, profile, siteUrl } from '../data/profile.js'
import {
  llmsFull,
  llmsIndex,
  publicSitemapEntries
} from '../lib/public-content.js'
import { GET as robotsGet } from '../app/robots.txt/route.js'

describe('public discovery content', () => {
  test('uses the one canonical host everywhere', () => {
    expect(siteUrl).toBe('https://mohsinht.com')
    const content = `${llmsIndex()}\n${llmsFull()}`
    expect(content).not.toContain('www.mohsinht.com')
    expect(content).not.toContain('/drafts')
  })

  test('sitemap has public HTML pages without speculative fields or utility routes', () => {
    const entries = publicSitemapEntries([
      { route: '/posts/example', frontMatter: { date: '2022-01-01' } }
    ])
    const urls = entries.map((entry) => entry.url)
    expect(urls).toEqual(
      expect.arrayContaining([
        'https://mohsinht.com/',
        'https://mohsinht.com/resume',
        'https://mohsinht.com/recommendations',
        'https://mohsinht.com/posts/example'
      ])
    )
    expect(urls.join('\n')).not.toMatch(
      /earlier-work|feed\.xml|llms|tags|about/
    )
    expect(
      entries.every(
        (entry) =>
          entry.lastModified instanceof Date ||
          /^\d{4}-\d{2}-\d{2}$/.test(entry.lastModified)
      )
    ).toBe(true)
    expect(entries.every((entry) => !('changeFrequency' in entry))).toBe(true)
    expect(entries.every((entry) => !('priority' in entry))).toBe(true)
  })

  test('robots exposes the content signal as a response header and only a canonical sitemap', async () => {
    const result = robotsGet()
    const body = await result.text()
    expect(result.headers.get('Content-Signal')).toBe(contentSignal)
    expect(body).not.toContain('Content-Signal:')
    expect(body).toContain('Sitemap: https://mohsinht.com/sitemap.xml')
    expect(body).not.toMatch(/feed\.xml|llm\.txt/)
  })

  test('centralized projects and recommendations are complete and factual interfaces are linked', () => {
    expect(profile.projects.map((project) => project.name)).toEqual(
      expect.arrayContaining([
        'SnippetGraph',
        'FirstCustomer',
        'Production AI and backend systems'
      ])
    )
    expect(profile.recommendations.map((item) => item.name)).toEqual(
      expect.arrayContaining([
        'Tomás Malgarín',
        'Etienne Bömcke',
        'Jonathan Belanger',
        'Vasilica Coscotin'
      ])
    )
    expect(profile.employerRecommendations).toHaveLength(3)
    expect(profile.clientTestimonials).toHaveLength(7)
    expect(profile.certifications).toHaveLength(4)
    for (const item of [
      ...profile.employerRecommendations,
      ...profile.clientTestimonials
    ])
      expect(item.name && item.role && item.excerpt).toBeTruthy()
    for (const project of profile.projects)
      expect(
        project.problem &&
          project.built &&
          project.outcome &&
          project.technologies.length
      ).toBeTruthy()
    expect(llmsIndex()).toContain('Recommendations')
    expect(llmsFull()).toContain('Last updated: 2026-08-15')
  })
})
