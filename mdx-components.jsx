import { useMDXComponents as getBlogMDXComponents } from 'nextra-theme-blog'

const blogComponents = getBlogMDXComponents({
  DateFormatter: ({ date }) =>
    date.toLocaleDateString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
})

export function useMDXComponents(components) {
  return {
    ...blogComponents,
    ...components
  }
}
