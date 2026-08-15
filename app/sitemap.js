import { getPosts } from './posts/get-posts'
import { publicSitemapEntries } from '../lib/public-content'

export default async function sitemap() {
  return publicSitemapEntries(await getPosts())
}
