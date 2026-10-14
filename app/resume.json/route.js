import { jsonResume } from '../../lib/profile-gateway'
import { publicDataHeaders } from '../../lib/public-profile'

export const dynamic = 'force-static'
export function GET() {
  return Response.json(jsonResume(), { headers: publicDataHeaders })
}
