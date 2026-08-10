import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Working Remotely from Pakistan: A 2022 Retrospective',
  description:
    'A dated personal retrospective on early remote work, mentorship, and learning from Pakistan.',
  path: '/posts/working-remotely-from-pakistan',
  publishedTime: '2022-04-02',
  modifiedTime: '2026-08-10',
  tags: ['remote work']
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
