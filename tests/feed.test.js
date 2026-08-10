import { beforeAll, describe, expect, jest, test } from '@jest/globals'

const getPosts = jest.fn()
jest.unstable_mockModule('../app/posts/get-posts.js', () => ({ getPosts }))

let GET

beforeAll(async () => {
  ;({ GET } = await import('../app/feed.xml/route.js'))
})

describe('RSS feed', () => {
  test('renders valid RSS metadata and escapes post content', async () => {
    getPosts.mockResolvedValue([
      {
        route: '/posts/testing',
        title: 'Fallback title',
        frontMatter: {
          title: 'Testing < &',
          description: 'A "quoted" & useful description',
          date: '2025-04-10T00:00:00.000Z'
        }
      }
    ])

    const response = await GET()
    const xml = await response.text()

    expect(response.headers.get('Content-Type')).toBe(
      'application/rss+xml; charset=utf-8'
    )
    expect(xml).toContain('<title>Mohsin Hayat</title>')
    expect(xml).toContain('<title>Testing &lt; &amp;</title>')
    expect(xml).toContain(
      '<description>A &quot;quoted&quot; &amp; useful description</description>'
    )
    expect(xml).toContain('<link>https://mohsinht.com/posts/testing</link>')
    expect(xml).toContain('<pubDate>Thu, 10 Apr 2025 00:00:00 GMT</pubDate>')
  })
})
