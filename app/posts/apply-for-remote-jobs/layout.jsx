import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Applying for a Remote Job (from Scratch)',
  description: 'Guide to find remote jobs if you are completely blank.',
  path: '/posts/apply-for-remote-jobs',
  publishedTime: '2022-04-03',
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
