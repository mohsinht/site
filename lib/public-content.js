import { profile, siteUrl } from '../data/profile'

export const staticPages = [
  {
    path: '/',
    lastModified: '2026-08-10',
    changeFrequency: 'monthly',
    priority: 1
  },
  {
    path: '/resume',
    lastModified: '2026-08-10',
    changeFrequency: 'monthly',
    priority: 0.9
  },
  {
    path: '/recommendations',
    lastModified: '2026-08-10',
    changeFrequency: 'monthly',
    priority: 0.8
  },
  {
    path: '/posts',
    lastModified: '2026-08-10',
    changeFrequency: 'monthly',
    priority: 0.8
  }
]

export function publicSitemapEntries(posts) {
  const pages = staticPages.map((page) => ({
    ...page,
    url: new URL(page.path, siteUrl).toString()
  }))
  const postEntries = posts.map((post) => ({
    url: new URL(post.route, siteUrl).toString(),
    lastModified: new Date(
      post.frontMatter.dateModified ?? post.frontMatter.date
    ),
    changeFrequency: 'yearly',
    priority: 0.7
  }))
  return [...pages, ...postEntries]
}

function section(title, body) {
  return `## ${title}\n\n${body}\n`
}

export function llmsIndex() {
  return `# ${profile.name}\n\n> ${profile.title}. ${profile.summary}\n\n${section('Website', `- [Portfolio](${siteUrl}/): professional overview, selected work, capabilities, and contact links.\n- [Résumé](${siteUrl}/resume): detailed experience, skills, education, and achievements.`)}${section('Selected projects', profile.projects.map((project) => `- [${project.name}](${project.href ?? `${siteUrl}/`}): ${project.built}`).join('\n'))}${section('Public writing', `- [Engineering Writing](${siteUrl}/posts): dated personal posts about engineering and remote work.`)}${section('Recommendations', `- [Recommendations](${siteUrl}/recommendations): verified LinkedIn recommendation excerpts from engineering leaders.`)}${section('Profiles and contact', `- [GitHub](${profile.links.github}): public code and profile.\n- [LinkedIn](${profile.links.linkedin}): professional profile and recommendations.\n- [Email](${profile.links.email}): public contact method.`)}`
}

export function llmsFull() {
  const roles = profile.roles
    .map(
      (role) =>
        `### ${role.company} — ${role.title}\n${role.period}; ${role.location}\n\n${role.summary}`
    )
    .join('\n\n')
  const metrics = profile.metrics
    .map((metric) => `- **${metric.value}** — ${metric.label}`)
    .join('\n')
  const skills = Object.entries(profile.skills)
    .map(([group, values]) => `- **${group}:** ${values.join(', ')}`)
    .join('\n')
  const projects = profile.projects
    .map(
      (project) =>
        `### ${project.name}\n${project.problem}\n\nBuilt: ${project.built}\n\nContext: ${project.outcome}${project.href ? `\n\nURL: ${project.href}` : ''}`
    )
    .join('\n\n')
  const recommendations = profile.recommendations
    .map((item) => `- **${item.name}**, ${item.role}: “${item.excerpt}”`)
    .join('\n')
  return `# ${profile.name}\n\n> ${profile.title}\n\nLast updated: 2026-08-10\n\n${section('Professional summary', profile.description)}${section('Experience', roles)}${section('Verified engineering context', metrics)}${section('Skills', skills)}${section('Selected projects', projects)}${section('Education and achievements', `${profile.education}\n\n${profile.achievements.map((item) => `- ${item}`).join('\n')}`)}${section('Verified recommendation excerpts', recommendations)}${section('Public contact and profiles', `- Email: ${profile.email}\n- GitHub: ${profile.links.github}\n- LinkedIn: ${profile.links.linkedin}\n- Website: ${siteUrl}`)}`
}
