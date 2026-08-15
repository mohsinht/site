export const siteUrl = 'https://mohsinht.com'

export const profile = {
  name: 'Mohsin Hayat',
  title:
    'Senior Software Engineer specializing in Applied AI and Backend Systems',
  shortTitle: 'Senior Software Engineer, Applied AI',
  description:
    'Mohsin Hayat is a Senior Software Engineer specializing in applied AI and backend systems. Based in Lahore, Pakistan, he builds reliable Python services and conversational AI experiences for international teams.',
  summary:
    'I build production AI and backend systems where reliable engineering matters: conversational experiences, data-intensive agents, and the services around them.',
  location: 'Lahore, Pakistan',
  email: 'mohsinhayat104@gmail.com',
  portrait: '/images/Mohsin_DP.jpg',
  links: {
    github: 'https://github.com/mohsinht',
    linkedin: 'https://www.linkedin.com/in/mohsinhayatt/',
    email: 'mailto:mohsinhayat104@gmail.com',
    snippetGraph: 'https://snippetgraph.com',
    firstCustomer: 'https://firstcustomer.ai'
  },
  metrics: [
    {
      value: '30+',
      label: 'campaign-data tables used by a production NL-to-SQL agent'
    },
    {
      value: '~$5M/month',
      label: 'advertising-spend context for a LangGraph budget copilot'
    },
    {
      value: '100K+',
      label: 'clinical workflows per month supported at Awell'
    },
    { value: '6+ years', label: 'international remote engineering experience' }
  ],
  roles: [
    {
      company: 'OnService.AI',
      title: 'Senior Software Engineer',
      period: 'July 2026 – Present',
      location: 'Remote (United States)',
      summary:
        'Building Python services and conversational AI experiences for airline systems, including workflows for World2Fly and LASER Airlines.'
    },
    {
      company: 'Trafilea Tech E-commerce Group',
      title: 'AI Engineer',
      period: 'June 2025 – July 2026',
      location: 'Remote (United States)',
      summary:
        'Built a production NL-to-SQL agent across 30+ campaign-data tables and architected a hierarchical LangGraph budget copilot in the context of approximately $5M in monthly advertising spend.'
    },
    {
      company: 'Awell Health',
      title: 'Senior Software Engineer',
      period: 'April 2021 – May 2025',
      location: 'Remote (Belgium)',
      summary:
        'Owned core APIs and event-driven systems that helped scale the platform to 100K+ clinical workflows per month.'
    }
  ],
  capabilities: [
    'Applied AI and LLM agents',
    'Python and backend services',
    'Multi-agent orchestration',
    'NL-to-SQL and RAG',
    'Distributed and event-driven systems',
    'Data pipelines and analytical systems',
    'Production reliability and developer tooling'
  ],
  skills: {
    languages: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
    ai: [
      'LangGraph',
      'LangChain',
      'NL-to-SQL',
      'RAG',
      'model routing',
      'OpenAI API',
      'Anthropic Claude',
      'Pinecone'
    ],
    backend: [
      'Node.js',
      'FastAPI',
      'Express.js',
      'GraphQL',
      'REST',
      'PostgreSQL',
      'MongoDB',
      'ArangoDB',
      'ClickHouse',
      'Redis'
    ],
    platform: [
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'GitLab CI/CD',
      'microservices',
      'event sourcing',
      'CQRS'
    ]
  },
  projects: [
    {
      name: 'SnippetGraph',
      homepageSummary:
        'I built SnippetGraph to give AI teams a more dependable way to manage the context their agents use.',
      homepageDetail:
        'Instead of leaving knowledge scattered across documents and tools, SnippetGraph lets teams compose reusable snippets into pages and publish versioned, hash-verified releases through GitHub. This makes changes reviewable, traceable, and easier to use in production AI workflows.',
      problem:
        'AI teams need governed, dependable context instead of unversioned knowledge scattered across tools.',
      built:
        'A versioned knowledge-base authoring and publishing platform that composes snippets into pages and publishes immutable, hash-verified Git release artifacts through the GitHub GraphQL API.',
      technologies: [
        'GitHub GraphQL API',
        'versioned content',
        'release artifacts'
      ],
      outcome:
        'Designed for governed context publishing for AI-agent workflows.',
      href: 'https://snippetgraph.com'
    },
    {
      name: 'FirstCustomer',
      homepageSummary:
        'FirstCustomer is a CI-native browser agent built around a problem I have seen repeatedly in software teams: a pull request can pass its automated tests and still break an important customer journey.',
      homepageDetail:
        'It connects code changes with the product flows they may affect, exercises those flows using browser agents and realistic personas, and produces a release-risk assessment before the change reaches customers.',
      problem:
        'Product teams need a practical way to connect pull-request changes with the user flows they could affect.',
      built:
        'A CI-native browser agent that maps pull-request changes to affected user flows, tests real product paths with personas, and returns a confidence-scored release-risk assessment.',
      technologies: ['CI', 'browser agents', 'release risk assessment'],
      outcome:
        'Connects code changes to user-facing verification before release.',
      href: 'https://firstcustomer.ai'
    },
    {
      name: 'Production AI and backend systems',
      problem:
        'Operational AI needs dependable services, data boundaries, and understandable workflows—not just a model call.',
      built:
        'Conversational airline experiences, a production NL-to-SQL agent, a hierarchical budget copilot, and event-driven healthcare systems.',
      technologies: [
        'Python',
        'LangGraph',
        'KIU PSS',
        'AWS SNS/SQS',
        'ClickHouse',
        'CQRS'
      ],
      outcome:
        'Includes systems operating across 30+ tables, approximately $5M/month of planning context, and 100K+ monthly workflows.'
    }
  ],
  recommendations: [
    {
      name: 'Tomás Malgarín',
      role: 'Data Analytics, Trafilea',
      excerpt:
        'One of those hires you notice from day one. Adapted incredibly fast, brought fresh technical perspectives, and consistently went beyond what was required.'
    },
    {
      name: 'Etienne Bömcke',
      role: 'Head of Technology, Awell Health',
      excerpt:
        'Over this time he consistently proved his value as a smart, capable, autonomous and reliable software engineer.'
    },
    {
      name: 'Jonathan Belanger',
      role: 'Head of Engineering, Awell Health',
      excerpt:
        'Mohsin is a thoughtful, diligent, hard-working, and methodical engineer — a strong “slow thinker” (in a Kahneman/Tversky way).'
    },
    {
      name: 'Vasilica Coscotin',
      role: 'Head of Technology & Engineering, Awell Health',
      excerpt:
        'Mohsin is a great person, a passionate developer and a hard working team member. He is not afraid of taking responsibility in difficult situations and always tries to raise the bar for himself.'
    }
  ],
  education:
    'Bachelor of Science in Computer Science, National University of Computer and Emerging Sciences (FAST-NUCES), Lahore, Pakistan (2016–2020).',
  achievements: [
    'FAST-NUCES Bronze Medalist and Dean’s List honoree',
    'First place in an ACM programming competition',
    '11th place at ICPC Asia Regionals 2019',
    'Delivered 15+ MVPs and achieved Top Rated status on Upwork'
  ]
}

export const recommendationUrl = `${profile.links.linkedin}details/recommendations/`

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

export function pageMetadata({
  title,
  description,
  path,
  image = '/opengraph-image'
}) {
  const url = absoluteUrl(path)
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      siteName: profile.name,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${title} — ${profile.name}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)]
    }
  }
}

export function articleMetadata({
  title,
  description,
  path,
  publishedTime,
  modifiedTime,
  tags = Array()
}) {
  const url = absoluteUrl(path)
  return {
    ...pageMetadata({
      title,
      description,
      path,
      image: '/posts/opengraph-image'
    }),
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      siteName: profile.name,
      publishedTime,
      modifiedTime,
      tags,
      images: [
        {
          url: absoluteUrl('/posts/opengraph-image'),
          width: 1200,
          height: 630,
          alt: `${title} — ${profile.name}`
        }
      ]
    }
  }
}
