import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'

export async function generateMetadata({ params }) {
  const { tag } = await params
  return {
    title: `Posts Tagged with “${decodeURIComponent(tag)}”`,
    robots: { index: false, follow: true }
  }
}

export async function generateStaticParams() {
  const tags = await getTags()
  return [...new Set(tags)].map((tag) => ({ tag }))
}

export default async function TagPage({ params }) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = await getPosts()

  return (
    <>
      <h1>Posts Tagged with “{decodedTag}”</h1>
      {posts
        .filter((post) => post.frontMatter.tags?.includes(decodedTag))
        .map((post) => (
          <PostCard key={post.route} post={post} />
        ))}
    </>
  )
}
