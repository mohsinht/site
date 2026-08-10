import { siteUrl } from '../data/profile'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`
  }
}
