import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Zaati OS: A Tiny Control Room for Your Life',
  description:
    'A friendly, no-jargon guide to turning the AI you already use into a private daily dashboard.',
  path: '/posts/zaati-os-tiny-control-room',
  publishedTime: '2026-08-24',
  modifiedTime: '2026-08-24',
  tags: ['artificial intelligence', 'open source', 'personal tools']
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
