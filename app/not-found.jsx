import Link from 'next/link'
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page isn’t here.</h1>
      <p>The link may have changed, or the page may not be public.</p>
      <Link href="/" className="button button-primary">
        Return home
      </Link>
    </main>
  )
}
