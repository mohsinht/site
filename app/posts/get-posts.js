import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap('/posts'),
    route: '/posts'
  })

  return directories
    .filter((post) => post.name !== 'index')
    .sort(
      (a, b) =>
        new Date(b.frontMatter.date).getTime() -
        new Date(a.frontMatter.date).getTime()
    )
}

export async function getTags() {
  const posts = await getPosts()
  return posts.flatMap((post) => post.frontMatter.tags ?? [])
}

export async function getArticleDetails(route) {
  const post = (await getPosts()).find((item) => item.route === route)
  if (!post) throw new Error(`Missing article metadata for ${route}`)
  return {
    title: post.frontMatter.title,
    description: post.frontMatter.description,
    path: route,
    publishedTime: new Date(post.frontMatter.date).toISOString().slice(0, 10),
    modifiedTime: new Date(
      post.frontMatter.dateModified ?? post.frontMatter.date
    )
      .toISOString()
      .slice(0, 10),
    tags: post.frontMatter.tags ?? []
  }
}
