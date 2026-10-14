import { profileMarkdown } from '../../lib/profile-gateway'
import { getPublicProfile, publicDataHeaders } from '../../lib/public-profile'

export const dynamic = 'force-static'
export async function GET() {
  return new Response(profileMarkdown(await getPublicProfile()), {
    headers: {
      ...publicDataHeaders,
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  })
}
