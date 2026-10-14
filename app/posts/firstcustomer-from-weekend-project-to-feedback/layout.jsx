import {
  ArticleShell,
  metadataForArticle
} from '../../../components/article-layout'

const route = '/posts/firstcustomer-from-weekend-project-to-feedback'

export async function generateMetadata() {
  return metadataForArticle(route)
}

export default function ArticleLayout({ children }) {
  return <ArticleShell route={route}>{children}</ArticleShell>
}
