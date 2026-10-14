import {
  ArticleShell,
  metadataForArticle
} from '../../../components/article-layout'

const route = '/posts/standout-in-your-job-application'

export async function generateMetadata() {
  return metadataForArticle(route)
}

export default function ArticleLayout({ children }) {
  return <ArticleShell route={route}>{children}</ArticleShell>
}
