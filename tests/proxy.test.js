import { describe, expect, test } from '@jest/globals'
import { NextRequest } from 'next/server'
import { proxy } from '../proxy.js'

describe('Markdown negotiation proxy', () => {
  test('rewrites only requested public Markdown routes', () => {
    const markdownRequest = new NextRequest(
      'https://mohsinht.com/posts/working-remotely-from-pakistan',
      { headers: { Accept: 'text/markdown' } }
    )
    const response = proxy(markdownRequest)
    expect(response.headers.get('x-middleware-rewrite')).toContain(
      '/agent-markdown?path=%2Fposts%2Fworking-remotely-from-pakistan'
    )

    const htmlRequest = new NextRequest('https://mohsinht.com/recommendations')
    expect(proxy(htmlRequest).headers.get('x-middleware-rewrite')).toBeNull()
  })
})
