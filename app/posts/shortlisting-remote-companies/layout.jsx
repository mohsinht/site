import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Shortlisting Remote Companies to Apply',
  description:
    'Comprehensive guide from start to end on how to find remote companies.',
  path: '/posts/shortlisting-remote-companies',
  publishedTime: '2022-05-21',
  modifiedTime: '2026-08-10',
  tags: ['engineering', 'remote work']
}
export const metadata = articleMetadata(details)
export default function ArticleLayout({ children }) {
  return (
    <>
      <ArticleJsonLd
        {...details}
        datePublished={details.publishedTime}
        dateModified={details.modifiedTime}
      />
      {children}
    </>
  )
}
