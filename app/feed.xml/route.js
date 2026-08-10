import { getPosts } from '../posts/get-posts'

const config = {
  title: 'Mohsin Hayat',
  siteUrl: 'https://mohsinht.com',
  description: 'Writing about engineering, remote work, and software careers.',
  language: 'en-us'
}

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export const dynamic = 'force-static'

export async function GET() {
  const posts = await getPosts()
  const items = posts
    .map((post) => {
      const url = `${config.siteUrl}${post.route}`
      return `    <item>
      <title>${escapeXml(post.frontMatter.title ?? post.title)}</title>
      <description>${escapeXml(post.frontMatter.description)}</description>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${config.title}</title>
    <link>${config.siteUrl}</link>
    <description>${config.description}</description>
    <language>${config.language}</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  })
}
