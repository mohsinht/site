import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
  DateFormatter: ({ date }) =>
    date.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
})

function PortfolioMdxWrapper({ children, metadata }) {
  if (metadata.filePath?.startsWith('app/posts/')) {
    const BlogWrapper = blogComponents.wrapper
    return <BlogWrapper metadata={metadata}>{children}</BlogWrapper>
  }

  const heading = metadata.filePath?.startsWith('app/resume/')
    ? 'Mohsin Hayat Resume'
    : metadata.filePath?.startsWith('app/recommendations/')
      ? 'Recommendations for Mohsin Hayat'
      : metadata.title

  return (
    <>
      <h1>{heading}</h1>
      {children}
    </>
  )
}

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    wrapper: PortfolioMdxWrapper,
    ...components
  }
}
