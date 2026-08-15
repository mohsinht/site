import { describe, expect, test } from '@jest/globals'
import { GET } from '../app/agent-markdown/route.js'
import { markdownForPath } from '../lib/agent-markdown.js'
import { contentSignal } from '../data/profile.js'

describe('agent Markdown', () => {
  test('generates factual Markdown from the centralized portfolio data', async () => {
    const home = await markdownForPath('/')
    const resume = await markdownForPath('/resume')
    const markdown = await markdownForPath('/recommendations')
    expect(home).toContain('## Professional experience')
    expect(home).toContain('## Verified LinkedIn recommendations')
    expect(home).toContain('Vasilica Coscotin')
    expect(resume).toContain('## Earlier experience')
    expect(resume).toContain('Respond.io')
    expect(resume).toContain('## Selected projects')
    expect(resume).toContain('FirstCustomer')
    expect(markdown).toContain('# Recommendations for Mohsin Hayat')
    expect(markdown).toContain('Tomás Malgarín')
    expect(markdown).toContain('Rocketbots Limited')
    expect(markdown).toContain('GJD Investments Project')
    expect(markdown).toContain('The Complete Node.js Course')
  })

  test('preserves article Markdown and rejects unknown paths', async () => {
    const article = await markdownForPath(
      '/posts/working-remotely-from-pakistan'
    )
    expect(article).toContain(
      '# Working Remotely from Pakistan: A 2022 Retrospective'
    )
    expect(article).toContain('## A personal retrospective')
    await expect(markdownForPath('/private')).resolves.toBeNull()
  })

  test('serves negotiated Markdown with safe cache variation', async () => {
    const response = await GET(
      new globalThis.Request('https://mohsinht.com/agent-markdown?path=/resume')
    )
    expect(response.headers.get('Content-Type')).toBe(
      'text/markdown; charset=utf-8'
    )
    expect(response.headers.get('Vary')).toBe('Accept')
    expect(response.headers.get('Content-Signal')).toBe(contentSignal)
    expect(response.headers.get('X-Robots-Tag')).toBe('noindex, follow')
    expect(await response.text()).toContain('# Mohsin Hayat Resume')
  })
})
