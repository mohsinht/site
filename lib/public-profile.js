import { getPosts } from '../app/posts/get-posts'
import { publicProfile } from './profile-gateway'

export async function getPublicProfile() {
  return publicProfile(await getPosts())
}

export const publicDataHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Cache-Control': 'public, max-age=0, s-maxage=3600',
  'X-Robots-Tag': 'noindex, follow'
}
