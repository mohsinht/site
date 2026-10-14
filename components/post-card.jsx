import Link from 'next/link'

export function PortfolioPostCard({ post }) {
  const { title, description, date, tags = [] } = post.frontMatter
  return (
    <article className="portfolio-post-card">
      <h2>
        <Link href={post.route}>{title}</Link>
      </h2>
      <p className="post-date">
        <time dateTime={date}>
          {new Date(`${date}T00:00:00Z`).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC'
          })}
        </time>
      </p>
      <p>{description}</p>
      <div className="post-card-links">
        <Link href={post.route} aria-label={`Read ${title}`}>
          Read article →
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${encodeURIComponent(tag)}`}
            className="nextra-tag"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  )
}
