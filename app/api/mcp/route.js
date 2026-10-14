import { createProfileMcpHandler } from '../../../lib/profile-mcp'
import { getPublicProfile } from '../../../lib/public-profile'
import { siteUrl } from '../../../data/profile'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const handler = createProfileMcpHandler(getPublicProfile)

async function handle(request) {
  const origin = request.headers.get('origin')
  const allowed =
    !origin || origin === new URL(request.url).origin || origin === siteUrl
  if (!allowed) return new Response('Origin not allowed', { status: 403 })
  const response =
    request.method === 'OPTIONS'
      ? new Response(null, { status: 204 })
      : await handler.fetch(request)
  response.headers.set('Access-Control-Allow-Origin', origin ?? '*')
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.headers.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, MCP-Protocol-Version, MCP-Session-Id'
  )
  response.headers.set(
    'Access-Control-Expose-Headers',
    'MCP-Protocol-Version, MCP-Session-Id'
  )
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('X-Robots-Tag', 'noindex, follow')
  return response
}

export const POST = handle
export const GET = handle
export const DELETE = handle
export const OPTIONS = handle
