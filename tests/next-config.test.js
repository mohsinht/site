import { describe, expect, test } from '@jest/globals'
import config from '../next.config.js'

describe('production configuration', () => {
  test('applies a strict production security policy and keeps downloads out of search', async () => {
    const rules = await config.headers()
    const globalHeaders = rules.find(
      (rule) => rule.source === '/:path*'
    ).headers
    const headers = Object.fromEntries(
      globalHeaders.map(({ key, value }) => [key, value])
    )

    expect(headers['X-Content-Type-Options']).toBe('nosniff')
    expect(headers['Content-Security-Policy']).toContain("default-src 'self'")
    expect(headers['Content-Security-Policy']).toContain(
      "frame-ancestors 'none'"
    )
    expect(headers['Content-Security-Policy']).not.toContain('unsafe-eval')
    expect(headers['Content-Security-Policy']).not.toContain('fontawesome')
    expect(headers['Strict-Transport-Security']).toContain('max-age=31536000')
    expect(headers['Referrer-Policy']).toBe('strict-origin-when-cross-origin')

    const downloads = rules.find((rule) => rule.source === '/downloads/:path*')
    expect(downloads.headers).toContainEqual({
      key: 'X-Robots-Tag',
      value: 'noindex, follow'
    })
  })

  test('keeps legacy URLs compatible without a www canonical', async () => {
    const redirects = await config.redirects()
    expect(redirects).toContainEqual({
      source: '/llm.txt',
      destination: '/llms.txt',
      permanent: true
    })
    expect(redirects).toContainEqual({
      source: '/more',
      destination: '/recommendations',
      permanent: true
    })
  })
})
