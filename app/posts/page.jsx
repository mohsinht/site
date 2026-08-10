import Link from 'next/link'
import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from './get-posts'
import { pageMetadata } from '../../data/profile'

export const metadata = pageMetadata({
  title: 'Engineering Writing | Mohsin Hayat',
  description:
    'Dated personal writing by Mohsin Hayat on engineering, remote work, and software careers.',
  path: '/posts',
  image: '/posts/opengraph-image'
})

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
      <h1>Engineering Writing</h1>
      <div
        className="not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(tagCounts).map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="nextra-tag"
          >
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
