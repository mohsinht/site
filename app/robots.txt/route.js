import { contentSignal, siteUrl } from '../../data/profile'

export const dynamic = 'force-static'

export function GET() {
  return new Response(
    `User-agent: *\nContent-Signal: ${contentSignal}\nAllow: /\nDisallow: /agent-markdown\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
    {
      headers: {
        'Content-Signal': contentSignal,
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  )
}
