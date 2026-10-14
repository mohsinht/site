import { profileMarkdown, publicProfile } from './profile-gateway.js'
import {
  independentProjects,
  publicEndpoints,
  profile,
  siteLastUpdated,
  siteUrl
} from '../data/profile'

export const staticPages = [
  {
    path: '/',
    lastModified: siteLastUpdated
  },
  {
    path: '/resume',
    lastModified: siteLastUpdated
  },
  {
    path: '/recommendations',
    lastModified: siteLastUpdated
  },
  {
    path: '/posts',
    lastModified: siteLastUpdated
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
    )
  }))
  return [...pages, ...postEntries]
}

function section(title, body) {
  return `## ${title}\n\n${body}\n`
}

export function llmsIndex() {
  return `# ${profile.name}\n\n> ${profile.title}. ${profile.summary}\n\n${section('AI access', `- [Full profile Markdown](${siteUrl}${publicEndpoints.markdown}): complete public professional context and supporting sources.\n- [Profile JSON](${siteUrl}${publicEndpoints.profile}): stable record IDs, dates, public FAQs, and scoped evidence links.\n- [JSON Resume](${siteUrl}${publicEndpoints.resume}): portable resume data.\n- [MCP connection guide](${siteUrl}${publicEndpoints.guide}): read-only tools at ${siteUrl}${publicEndpoints.mcp}.`)}${section('Website', `- [Portfolio](${siteUrl}/): professional overview, selected work, capabilities, and contact links.\n- [Resume](${siteUrl}/resume): detailed experience, skills, education, and achievements.`)}${section('Selected projects', independentProjects.map((project) => `- [${project.name}](${project.href ?? `${siteUrl}/`}): ${project.built}`).join('\n'))}${section('Public writing', `- [Engineering Writing](${siteUrl}/posts): dated personal posts about engineering and remote work.`)}${section('Recommendations', `- [Recommendations](${siteUrl}/recommendations): verified LinkedIn recommendation excerpts from engineering leaders.`)}${section('Profiles and contact', `- [GitHub](${profile.links.github}): public code and profile.\n- [LinkedIn](${profile.links.linkedin}): professional profile and recommendations.\n- [Email](${profile.links.email}): public contact method.`)}`
}

export function llmsFull(data = publicProfile()) {
  return profileMarkdown(data)
}
