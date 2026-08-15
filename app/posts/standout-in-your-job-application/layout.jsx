import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Stand Out in Your Job Application',
  description:
    'Some simple tips from me to stand out in the job application for remote jobs.',
  path: '/posts/standout-in-your-job-application',
  publishedTime: '2022-04-03',
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
