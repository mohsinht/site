import { markdownForPath } from '../../lib/agent-markdown'
import { contentSignal } from '../../data/profile'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const path =
    request.headers.get('x-agent-markdown-path') ??
    new URL(request.url).searchParams.get('path') ??
    '/'
  const markdown = await markdownForPath(path)
  const headers = {
    'Content-Signal': contentSignal,
    'Content-Type': 'text/markdown; charset=utf-8',
    Vary: 'Accept',
    'X-Robots-Tag': 'noindex, follow'
  }

  if (markdown === null)
    return new Response('Not Found\n', { status: 404, headers })

  return new Response(markdown, { headers })
}
