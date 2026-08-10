import { describe, expect, test } from '@jest/globals'
import { profile, siteUrl } from '../data/profile.js'
import {
  llmsFull,
  llmsIndex,
  publicSitemapEntries
} from '../lib/public-content.js'
import robots from '../app/robots.js'

describe('public discovery content', () => {
  test('uses the one canonical host everywhere', () => {
    expect(siteUrl).toBe('https://mohsinht.com')
    const content = `${llmsIndex()}\n${llmsFull()}`
    expect(content).not.toContain('www.mohsinht.com')
    expect(content).not.toContain('/drafts')
  })

  test('sitemap has public HTML pages and excludes utility or archive routes', () => {
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
  })

  test('robots only advertises the canonical sitemap', () => {
    const result = robots()
    expect(result.rules).toEqual({ userAgent: '*', allow: '/' })
    expect(result.sitemap).toBe('https://mohsinht.com/sitemap.xml')
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
    for (const project of profile.projects)
      expect(
        project.problem &&
          project.built &&
          project.outcome &&
          project.technologies.length
      ).toBeTruthy()
    expect(llmsIndex()).toContain('Recommendations')
    expect(llmsFull()).toContain('Last updated: 2026-08-10')
  })
})
