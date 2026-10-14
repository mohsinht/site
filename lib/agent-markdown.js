import { profileMarkdown } from './profile-gateway'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { profile, recommendationUrl, siteUrl } from '../data/profile'

const rootDirectory = process.cwd()

function markdownLink(label, href) {
  return `[${label}](${href})`
}

function recommendationsMarkdown() {
  const linkedinRecommendations = profile.recommendations
    .map(
      (item) =>
        `### ${item.company}\n\n> ${item.editedExcerpt ?? item.excerpt}\n>
> — ${item.name}, ${item.role}${item.additionalRole ? `; ${item.additionalRole}` : ''}\n\n${markdownLink('View LinkedIn recommendation', recommendationUrl)}`
    )
    .join('\n\n')
  const employerReferences = profile.employerRecommendations
    .map(
      (item) =>
        `### ${item.company}\n\n> ${item.editedExcerpt ?? item.excerpt}\n>
> — ${item.name}, ${item.role}\n\n${markdownLink(item.linkLabel, `${siteUrl}${item.href}`)}`
    )
    .join('\n\n')
  const testimonials = profile.clientTestimonials
    .map(
      (item) =>
        `### ${item.project}\n\n> ${item.editedExcerpt ?? item.excerpt}\n>
> — ${item.name} (${item.role.replace('Client feedback · ', '')})`
    )
    .join('\n\n')

  return `# Recommendations for ${profile.name}

## Verified LinkedIn recommendations

${linkedinRecommendations}

## Employer references

${employerReferences}

## Clients’ testimonials

${testimonials}

## Certifications

${profile.certifications
  .map(
    (item) =>
      `- **${item.name}** — ${item.issuer}, ${item.date}. ${markdownLink(item.linkLabel, `${siteUrl}${item.href}`)}`
  )
  .join('\n')}
`
}

async function postsMarkdown() {
  const { getPosts } = await import('../app/posts/get-posts')
  const posts = await getPosts()
  return `# Engineering Writing | ${profile.name}

Dated personal writing by ${profile.name} on engineering, remote work, and software careers.

${posts
  .map(
    (post) =>
      `- ${markdownLink(post.frontMatter.title, `${siteUrl}${post.route}`)} — ${post.frontMatter.description}`
  )
  .join('\n')}
`
}

async function articleMarkdown(slug) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null

  try {
    const source = await readFile(
      path.join(rootDirectory, 'app', 'posts', slug, 'page.md'),
      'utf8'
    )
    const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
    if (!match) return null
    const title = match[1].match(/^title:\s*['"]?(.+?)['"]?$/m)?.[1]
    if (!title) return null
    return `# ${title}\n\n${match[2].trim()}\n`
  } catch {
    return null
  }
}

export async function markdownForPath(requestPath) {
  const pathname = requestPath.split('?')[0].replace(/\/$/, '') || '/'
  if (pathname === '/' || pathname === '/resume') return profileMarkdown()
  if (pathname === '/recommendations') return recommendationsMarkdown()
  if (pathname === '/posts') return postsMarkdown()
  if (pathname.startsWith('/posts/'))
    return articleMarkdown(pathname.slice('/posts/'.length))
  return null
}
