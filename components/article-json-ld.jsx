import { absoluteUrl, profile, siteUrl } from '../data/profile'
import { JsonLd } from './json-ld'

export function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
  tags = Array()
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: absoluteUrl(path),
        mainEntityOfPage: absoluteUrl(path),
        datePublished,
        dateModified,
        image: absoluteUrl('/posts/opengraph-image'),
        author: { '@id': `${siteUrl}/#person`, name: profile.name },
        keywords: tags
      }}
    />
  )
}
