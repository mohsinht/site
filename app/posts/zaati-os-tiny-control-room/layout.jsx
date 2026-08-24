import { ArticleJsonLd } from '../../../components/article-json-ld'
import { articleMetadata } from '../../../data/profile'

const details = {
  title: 'Why I Built Zaati OS',
  description:
    'Zaati OS turns the AI tools you already use into a private dashboard for your calendar, inbox, work, finances, news, and goals.',
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
