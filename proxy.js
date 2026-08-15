import { NextResponse } from 'next/server'

const markdownPaths = new Set(['/', '/resume', '/recommendations', '/posts'])

export function proxy(request) {
  const accept = request.headers.get('accept') ?? ''
  const pathname = request.nextUrl.pathname
  const isPublicArticle = /^\/posts\/[a-z0-9-]+$/.test(pathname)
  const supportsMarkdown = markdownPaths.has(pathname) || isPublicArticle

  if (!supportsMarkdown) return NextResponse.next()

  if (!accept.includes('text/markdown')) return NextResponse.next()

  const destination = new URL('/agent-markdown', request.url)
  destination.searchParams.set('path', pathname)
  const requestHeaders = new globalThis.Headers(request.headers)
  requestHeaders.set('x-agent-markdown-path', pathname)
  return NextResponse.rewrite(destination, {
    request: { headers: requestHeaders }
  })
}

export const config = {
  matcher: ['/', '/resume', '/recommendations', '/posts/:path*']
}
