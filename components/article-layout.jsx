import { getArticleDetails } from '../app/posts/get-posts'
import { articleMetadata } from '../data/profile'
import { ArticleJsonLd } from './article-json-ld'

export async function metadataForArticle(route) {
  return articleMetadata(await getArticleDetails(route))
}

export async function ArticleShell({ route, children }) {
  const details = await getArticleDetails(route)
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
