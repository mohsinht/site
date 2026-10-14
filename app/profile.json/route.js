import { getPublicProfile, publicDataHeaders } from '../../lib/public-profile'

export const dynamic = 'force-static'
export async function GET() {
  return Response.json(await getPublicProfile(), { headers: publicDataHeaders })
}
