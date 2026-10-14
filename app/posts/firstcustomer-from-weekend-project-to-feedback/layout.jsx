import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'FirstCustomer: From a Weekend Project to Real Feedback',
  description:
    'How an experiment in roasting landing pages became a structured website review tool after its first users sent feedback.',
  path: '/posts/firstcustomer-from-weekend-project-to-feedback',
  publishedTime: '2026-10-14',
  modifiedTime: '2026-10-14',
  tags: [
    'artificial intelligence',
    'independent projects',
    'product development'
  ]
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
