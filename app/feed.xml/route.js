import { getPosts } from '../posts/get-posts'
import { profile, siteUrl } from '../../data/profile'

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
  const latest = posts.reduce(
    (newest, post) =>
      Math.max(
        newest,
        new Date(
          post.frontMatter.dateModified ?? post.frontMatter.date
        ).getTime()
      ),
    0
  )
  const items = posts
    .map((post) => {
      const url = new URL(post.route, siteUrl).toString()
      const categories = (post.frontMatter.tags ?? [])
        .map((tag) => `<category>${escapeXml(tag)}</category>`)
        .join('')
      return `    <item>\n      <title>${escapeXml(post.frontMatter.title ?? post.title)}</title>\n      <description>${escapeXml(post.frontMatter.description)}</description>\n      <link>${url}</link>\n      <guid isPermaLink="true">${url}</guid>\n      <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>\n      <author>${escapeXml(profile.email)} (${escapeXml(profile.name)})</author>${categories}\n    </item>`
    })
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>${escapeXml(profile.name)}</title>\n    <link>${siteUrl}</link>\n    <description>Engineering writing by ${escapeXml(profile.name)}.</description>\n    <language>en</language>\n    <lastBuildDate>${new Date(latest || Date.now()).toUTCString()}</lastBuildDate>\n    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>\n${items}\n  </channel>\n</rss>`
  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' }
  })
}
