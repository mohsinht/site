import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { profile, recommendationUrl, siteUrl } from '../data/profile'

const rootDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..'
)

function markdownLink(label, href) {
  return `[${label}](${href})`
}

function roleMarkdown(role) {
  const highlights = role.highlights
    ? `\n\n${role.highlights.map((highlight) => `- ${highlight}`).join('\n')}`
    : ''
  return `### ${role.company} — ${role.title}\n\n${role.period}${role.location ? `; ${role.location}` : ''}\n\n${role.summary}${highlights}`
}

function projectMarkdown(project) {
  return `### ${project.name}\n\n**Problem:** ${project.problem}\n\n**Built:** ${project.built}\n\n**Technologies:** ${project.technologies.join(', ')}\n\n**Context:** ${project.outcome}${project.href ? `\n\n${markdownLink(`Visit ${project.name}`, project.href)}` : ''}`
}

function linkedinRecommendationMarkdown(item) {
  return `### ${item.company}\n\n> ${item.excerpt}\n>\n> — ${item.name}, ${item.role}${item.additionalRole ? `; ${item.additionalRole}` : ''}\n\n${markdownLink('View LinkedIn recommendation', recommendationUrl)}`
}

function homeMarkdown() {
  return `# ${profile.name}

> ${profile.title}

${profile.summary}

Based in ${profile.location}, I have more than six years of international remote engineering experience. I currently work at OnService.AI on Python services and conversational AI for airline workflows.

## Professional experience

${profile.roles.map(roleMarkdown).join('\n\n')}

## Selected work

${profile.projects.map(projectMarkdown).join('\n\n')}

## Verified LinkedIn recommendations

${profile.recommendations.map(linkedinRecommendationMarkdown).join('\n\n')}

## Capabilities

${profile.capabilities.map((capability) => `- ${capability}`).join('\n')}

## Professional links

- ${markdownLink('Resume', `${siteUrl}/resume`)}
- ${markdownLink('Recommendations', `${siteUrl}/recommendations`)}
- ${markdownLink('Engineering writing', `${siteUrl}/posts`)}
- ${markdownLink('GitHub', profile.links.github)}
- ${markdownLink('LinkedIn', profile.links.linkedin)}
- ${markdownLink('Email', profile.links.email)}
`
}

function resumeMarkdown() {
  const roles = profile.roles.map(roleMarkdown).join('\n\n')
  const earlierRoles = profile.earlierRoles.map(roleMarkdown).join('\n\n')
  const skills = Object.entries(profile.skills)
    .map(([group, values]) => `- **${group}:** ${values.join(', ')}`)
    .join('\n')

  return `# ${profile.name} Resume

> ${profile.title}

${profile.location}

## Summary

${profile.description}

## Experience

${roles}

## Earlier experience

${earlierRoles}

## Selected projects

${profile.projects.map(projectMarkdown).join('\n\n')}

## Skills

${skills}

## Education and achievements

${profile.education}

${profile.achievements.map((achievement) => `- ${achievement}`).join('\n')}

## Recommendations

${markdownLink('Read verified recommendations', `${siteUrl}/recommendations`)} from engineering leaders and collaborators.
`
}

function recommendationsMarkdown() {
  const linkedinRecommendations = profile.recommendations
    .map(
      (item) =>
        `### ${item.company}\n\n> ${item.excerpt}\n>
> — ${item.name}, ${item.role}${item.additionalRole ? `; ${item.additionalRole}` : ''}\n\n${markdownLink('View LinkedIn recommendation', recommendationUrl)}`
    )
    .join('\n\n')
  const employerReferences = profile.employerRecommendations
    .map(
      (item) =>
        `### ${item.company}\n\n> ${item.excerpt}\n>
> — ${item.name}, ${item.role}\n\n${markdownLink(item.linkLabel, `${siteUrl}${item.href}`)}`
    )
    .join('\n\n')
  const testimonials = profile.clientTestimonials
    .map(
      (item) =>
        `### ${item.project}\n\n> ${item.excerpt}\n>
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
  if (pathname === '/') return homeMarkdown()
  if (pathname === '/resume') return resumeMarkdown()
  if (pathname === '/recommendations') return recommendationsMarkdown()
  if (pathname === '/posts') return postsMarkdown()
  if (pathname.startsWith('/posts/'))
    return articleMarkdown(pathname.slice('/posts/'.length))
  return null
}
