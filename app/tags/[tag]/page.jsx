import { notFound } from 'next/navigation'
import { PortfolioPostCard } from '../../../components/post-card'
import { getPosts, getTags } from '../../posts/get-posts'

export const dynamicParams = false

async function validTag(params) {
  const { tag } = await params
  let decodedTag
  try {
    decodedTag = decodeURIComponent(tag)
  } catch {
    notFound()
  }
  if (!(await getTags()).includes(decodedTag)) notFound()
  return decodedTag
}

export async function generateMetadata({ params }) {
  const tag = await validTag(params)
  return {
    title: `Posts Tagged with “${tag}”`,
    robots: { index: false, follow: true }
  }
}

export async function generateStaticParams() {
  const tags = await getTags()
  return [...new Set(tags)].map((tag) => ({ tag }))
}

export default async function TagPage({ params }) {
  const tag = await validTag(params)
  const posts = await getPosts()

  return (
    <main id="main-content" className="writing-list" tabIndex={-1}>
      <h1>Posts Tagged with “{tag}”</h1>
      {posts
        .filter((post) => post.frontMatter.tags?.includes(tag))
        .map((post) => (
          <PortfolioPostCard key={post.route} post={post} />
        ))}
    </main>
  )
}
