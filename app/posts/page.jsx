import Link from 'next/link'
import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from './get-posts'

export const metadata = {
  title: 'Posts',
  description: 'Writing about engineering, remote work, and software careers.'
}

export default async function PostsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  const tagCounts = Object.create(null)

  for (const tag of tags) {
    tagCounts[tag] ??= 0
    tagCounts[tag] += 1
  }

  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title}</h1>
      <div
        className="not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(tagCounts).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map((post) => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}
