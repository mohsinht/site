import {
  absoluteUrl,
  independentProjects,
  profile,
  publicEndpoints,
  publicFaq,
  recommendationUrl,
  siteLastUpdated,
  skillGroupLabels
} from '../data/profile.js'

export const evidencePolicy =
  'Career and project statements are self-reported. Supporting sources provide context and must be assessed independently; they do not automatically verify each contribution, metric, or outcome.'
export const unknownAnswer =
  'That information is not established in this public profile. Please contact Mohsin directly rather than infer it.'

function dates(period) {
  const [start, end] = period.split(' – ')
  const iso = (value) => {
    if (!value || value === 'Present') return undefined
    const date = new Date(`${value} 1 UTC`)
    return Number.isNaN(+date) ? undefined : date.toISOString().slice(0, 7)
  }
  return { startDate: iso(start), ...(iso(end) ? { endDate: iso(end) } : {}) }
}

function roleSources(role) {
  const recommendations = (role.recommendationIds ?? []).map((id) => {
    const item = profile.recommendations.find((entry) => entry.id === id)
    if (!item) throw new Error(`Unknown recommendation ${id}`)
    return {
      id: `recommendation.${id}`,
      kind: 'colleague_recommendation',
      title: `${item.name}, ${item.role}`,
      url: recommendationUrl,
      supports:
        'A colleague’s assessment of the work relationship; not independent verification of every career claim.'
    }
  })
  const reference = profile.employerRecommendations.find(
    (item) => item.id === role.referenceId
  )
  if (reference)
    recommendations.push({
      id: `reference.${reference.id}`,
      kind: 'employer_letter',
      title: reference.linkLabel,
      url: absoluteUrl(reference.href),
      supports: 'The statements contained in the linked employer letter.'
    })
  return recommendations.concat(
    (role.publicWork ?? []).map((item) => ({
      id: `repository.${role.id}.${item.name}`,
      kind: 'repository_context',
      title: item.name,
      url: item.url,
      supports:
        'Public repository context. The repository alone does not establish authorship, tenure, or operating scale.'
    }))
  )
}

export function publicProfile(posts = []) {
  return {
    schemaVersion: '1.0',
    canonicalUrl: absoluteUrl(publicEndpoints.profile),
    updatedAt: siteLastUpdated,
    evidencePolicy,
    identity: {
      name: profile.name,
      title: profile.title,
      summary: profile.summary,
      location: profile.location,
      timezone: profile.timezone,
      utcOffset: profile.utcOffset,
      email: profile.email,
      website: absoluteUrl('/'),
      profiles: {
        github: profile.links.github,
        linkedin: profile.links.linkedin
      }
    },
    resumeSummary: profile.resumeSummary,
    learningApproach: profile.learningApproach,
    capabilities: profile.capabilities,
    skills: profile.skills,
    experience: [...profile.roles, ...profile.earlierRoles].map((role) => ({
      id: `experience.${role.id}`,
      sourceType: 'self_reported',
      url: absoluteUrl(`/resume#experience-${role.id}`),
      company: role.company,
      title: role.title,
      period: role.period,
      ...dates(role.period),
      ...(role.location ? { location: role.location } : {}),
      summary: role.summary,
      highlights: role.highlights ?? [],
      sources: roleSources(role)
    })),
    projects: independentProjects.map((project) => ({
      id: `project.${project.id}`,
      sourceType: 'self_reported',
      name: project.name,
      status: project.status,
      summary: project.homepageSummary,
      description: project.built,
      technologies: project.technologies,
      url: project.href,
      sources: [
        {
          id: `project-page.${project.id}`,
          kind: project.sourceHref ? 'project_site' : 'project_link',
          url: project.href,
          title: project.name,
          supports:
            'The linked project; availability alone does not verify authorship or performance claims.'
        },
        ...(project.sourceHref
          ? [
              {
                id: `project-source.${project.id}`,
                kind: 'source_repository',
                url: project.sourceHref,
                title: `${project.name} source`,
                supports: 'Published source and repository history.'
              }
            ]
          : []),
        ...(project.storyHref
          ? [
              {
                id: `project-story.${project.id}`,
                kind: 'first_person_account',
                url: absoluteUrl(project.storyHref),
                title: `${project.name} story`,
                supports: 'Mohsin’s account of building the project.'
              }
            ]
          : []),
        ...(project.demoHref
          ? [
              {
                id: `project-demo.${project.id}`,
                kind: 'demo',
                url: project.demoHref,
                title: `${project.name} demo`,
                supports: 'Demonstrated behavior at the time of recording.'
              }
            ]
          : [])
      ]
    })),
    education: profile.educationRecord,
    achievements: profile.achievements,
    recommendations: profile.recommendations.map((item) => ({
      id: `recommendation.${item.id}`,
      name: item.name,
      role: item.role,
      company: item.company,
      excerpt: item.excerpt,
      url: recommendationUrl
    })),
    writing: posts.map((post) => ({
      id: `article.${post.route.split('/').at(-1)}`,
      title: post.frontMatter.title,
      description: post.frontMatter.description,
      publishedAt: new Date(post.frontMatter.date).toISOString().slice(0, 10),
      updatedAt: new Date(
        post.frontMatter.dateModified ?? post.frontMatter.date
      )
        .toISOString()
        .slice(0, 10),
      tags: post.frontMatter.tags ?? [],
      url: absoluteUrl(post.route),
      markdownUrl: absoluteUrl(
        `/agent-markdown?path=${encodeURIComponent(post.route)}`
      )
    })),
    faq: publicFaq.map(({ id, question, answer }) => ({
      id: `faq.${id}`,
      question,
      answer,
      url: absoluteUrl(`/ai#${id}`)
    })),
    endpoints: Object.fromEntries(
      Object.entries(publicEndpoints).map(([key, path]) => [
        key,
        absoluteUrl(path)
      ])
    )
  }
}

export function jsonResume() {
  return {
    $schema:
      'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: profile.name,
      label: profile.title,
      image: absoluteUrl(profile.portrait),
      email: profile.email,
      url: absoluteUrl('/'),
      summary: `${profile.resumeSummary} ${profile.learningApproach}`,
      location: {
        city: profile.locationDetails.city,
        countryCode: profile.locationDetails.countryCode
      },
      profiles: [
        {
          network: 'GitHub',
          username: new URL(profile.links.github).pathname.slice(1),
          url: profile.links.github
        },
        { network: 'LinkedIn', url: profile.links.linkedin }
      ]
    },
    work: [...profile.roles, ...profile.earlierRoles].map((role) => ({
      name: role.company,
      position: role.title,
      ...dates(role.period),
      summary: role.summary,
      highlights: role.highlights ?? []
    })),
    education: [profile.educationRecord],
    skills: Object.entries(profile.skills).map(([name, keywords]) => ({
      name: skillGroupLabels[name],
      keywords
    })),
    projects: independentProjects.map((project) => ({
      name: project.name,
      description: project.built,
      url: project.href,
      keywords: project.technologies
    })),
    references: profile.recommendations.map((item) => ({
      name: `${item.name}, ${item.role}`,
      reference: item.excerpt
    })),
    meta: {
      canonical: absoluteUrl(publicEndpoints.resume),
      version: 'v1.0.0',
      lastModified: siteLastUpdated
    }
  }
}

export function profileMarkdown(data = publicProfile()) {
  const link = (label, url) => `[${label}](${url})`
  const sources = (items) =>
    items
      .map(
        (source) =>
          `- ${link(source.title, source.url)} (${source.kind}): ${source.supports}`
      )
      .join('\n')
  return `# ${data.identity.name}\n\n> ${data.identity.title}\n\nLast updated: ${data.updatedAt}\nCanonical data: ${data.canonicalUrl}\n\n${data.evidencePolicy}\n\n## Summary\n\n${data.resumeSummary}\n\n${data.learningApproach}\n\n## Contact\n\n${data.identity.location}; ${data.identity.timezone} (UTC${data.identity.utcOffset}).\n\n${link(data.identity.email, `mailto:${data.identity.email}`)} · ${link('GitHub', data.identity.profiles.github)} · ${link('LinkedIn', data.identity.profiles.linkedin)}\n\n## Experience\n\n${data.experience.map((role) => `### ${role.company} · ${role.title}\n\nRecord: ${role.id} (${role.sourceType})\n${role.period}\n\n${role.summary}\n\n${role.highlights.map((item) => `- ${item}`).join('\n')}\n\n${sources(role.sources)}`).join('\n\n')}\n\n## Skills and learning\n\nThese are examples of experience, not an exhaustive list or a restriction on future work.\n\n${Object.entries(
    data.skills
  )
    .map(([name, values]) => `- **${name}:** ${values.join(', ')}`)
    .join(
      '\n'
    )}\n\n## Independent projects\n\n${data.projects.map((project) => `### ${project.name}\n\nRecord: ${project.id} (${project.sourceType})\n${project.description}\n\n${sources(project.sources)}`).join('\n\n')}\n\n## Education\n\n${profile.education}\n\n${data.achievements.map((item) => `- ${item}`).join('\n')}\n\n## Recommendations\n\n${data.recommendations.map((item) => `> ${item.excerpt}\n\n${link(`${item.name}, ${item.role}`, item.url)}`).join('\n\n')}\n\n## Follow-up questions\n\n${data.faq.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n')}\n\n## Writing\n\n${data.writing.map((post) => `- ${link(post.title, post.markdownUrl)} (${post.publishedAt}): ${post.description}`).join('\n')}\n\n## Interfaces\n\n${Object.entries(
    data.endpoints
  )
    .map(([key, url]) => `- ${link(key, url)}`)
    .join('\n')}\n`
}

const stopWords = new Set([
  'mohsin',
  'hayat',
  'what',
  'where',
  'when',
  'does',
  'have',
  'with',
  'that',
  'this',
  'about',
  'verify',
  'claim',
  'please',
  'could',
  'would',
  'which',
  'tell',
  'work',
  'worked',
  'working',
  'experience',
  'engineering',
  'engineer',
  'software'
])
function tokens(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9+#]+/g, ' ')
    .split(' ')
    .filter((token) => token.length > 2 && !stopWords.has(token))
}

export function verifyClaim(query, data = publicProfile()) {
  const terms = tokens(query)
  const records = [
    ...data.experience,
    ...data.projects,
    ...data.writing,
    {
      id: 'profile.skills',
      sourceType: 'self_reported',
      url: absoluteUrl('/resume#skills'),
      skills: data.skills,
      capabilities: data.capabilities,
      learningApproach: data.learningApproach
    },
    {
      id: 'profile.education',
      sourceType: 'self_reported',
      url: absoluteUrl('/resume#education'),
      education: data.education,
      achievements: data.achievements
    }
  ]
  const matches = terms.length
    ? records
        .map((record) => {
          const text = new Set(tokens(JSON.stringify(record)))
          return {
            record,
            score: terms.filter((term) => text.has(term)).length
          }
        })
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(({ record }) => record)
    : []
  return {
    status: matches.length ? 'published_context_found' : 'not_established',
    evidencePolicy,
    query,
    matches,
    ...(matches.length ? {} : { answer: unknownAnswer })
  }
}

export function answerFollowup(question, data = publicProfile()) {
  const normalized = ` ${question.toLowerCase().replace(/[^a-z0-9]+/g, ' ')} `
  const answers = publicFaq
    .filter((item) =>
      item.keywords.some((word) => normalized.includes(` ${word} `))
    )
    .map((item) => data.faq.find((entry) => entry.id === `faq.${item.id}`))
  const context = verifyClaim(question, data)
  return {
    status:
      answers.length || context.matches.length
        ? 'published_context_found'
        : 'not_established',
    question,
    answers,
    context: context.matches,
    evidencePolicy,
    learningApproach: profile.learningApproach,
    ...(!answers.length && !context.matches.length
      ? { answer: unknownAnswer }
      : {})
  }
}
