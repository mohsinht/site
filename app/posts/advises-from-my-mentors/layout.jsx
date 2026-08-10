import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Advice from My Mentors',
  description:
    'Some suggestions from my mentors at Awell Health to become a better engineer.',
  path: '/posts/advises-from-my-mentors',
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
