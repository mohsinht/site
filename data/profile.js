export const siteUrl = 'https://mohsinht.com'
export const siteLastUpdated = '2026-10-14'
export const contentSignal =
  'search=yes, ai-input=yes, ai-train=no, use=reference'

const publicLocation = {
  city: 'Lahore',
  country: 'Pakistan',
  countryCode: 'PK'
}

const educationRecord = {
  institution:
    'National University of Computer and Emerging Sciences (FAST-NUCES)',
  studyType: 'Bachelor of Science',
  area: 'Computer Science',
  startDate: '2016',
  endDate: '2020'
}

export const profile = {
  name: 'Mohsin Hayat',
  title:
    'Senior Software Engineer specializing in Applied AI and Backend Systems',
  shortTitle: 'Senior Software Engineer, Applied AI',
  description:
    'Mohsin Hayat is a Senior Software Engineer specializing in applied AI and backend systems. Based in Lahore, Pakistan, he builds reliable Python services and conversational AI experiences for international teams.',
  summary:
    'I build production AI and backend systems where reliable engineering matters: conversational experiences, data-intensive agents, and the services around them.',
  resumeSummary:
    'Senior Software Engineer with 6+ years of international remote experience building production backend and applied AI systems across airline, ecommerce, and healthcare platforms. I focus on dependable services, useful agents, and the data and workflows around them.',
  learningApproach:
    'I’m a confident, curious engineer who learns something new every day. The tools listed here reflect my experience so far, not the limits of what I can build or learn. I choose technologies to fit the problem and enjoy getting comfortable with unfamiliar systems.',
  timezone: 'Asia/Karachi',
  utcOffset: '+05:00',
  locationDetails: publicLocation,
  location: `${publicLocation.city}, ${publicLocation.country}`,
  email: 'mohsinhayat104@gmail.com',
  portrait: '/images/Mohsin_DP.jpg',
  links: {
    github: 'https://github.com/mohsinht',
    linkedin: 'https://www.linkedin.com/in/mohsinhayatt/',
    email: 'mailto:mohsinhayat104@gmail.com',
    snippetGraph: 'https://snippetgraph.com',
    firstCustomer: 'https://firstcustomer.ai'
  },
  roles: [
    {
      id: 'onservice',
      company: 'OnService.AI',
      focusTitle: 'Airline conversational systems',
      title: 'Senior Software Engineer',
      period: 'July 2026 – Present',
      location: 'Remote (United States)',
      summary:
        'I build Python services and conversational AI experiences for airline systems, including workflows for World2Fly and LASER Airlines.',
      highlights: [
        'Building production conversational AI experiences for World2Fly and LASER Airlines across Python services, LLM agents, and airline booking workflows.',
        'Integrating conversational agents with KIU PSS and related airline workflows for booking information, payments, check-in, flight changes, ancillary services, and passenger support.'
      ]
    },
    {
      id: 'trafilea',
      recommendationIds: ['tomas-malgarin'],
      company: 'Trafilea Tech E-commerce Group',
      focusTitle: 'AI for ecommerce analytics',
      title: 'AI Engineer',
      period: 'June 2025 – July 2026',
      location: 'Remote (United States)',
      summary:
        'Built a production NL-to-SQL agent across 30+ campaign-data tables and architected a hierarchical LangGraph budget copilot in the context of approximately $5M in monthly advertising spend.',
      highlights: [
        'Built a production NL-to-SQL agent used by leadership and marketing teams to query campaign data across 30+ tables in plain English, with schema-aware retrieval, table allowlists, date-bound queries, structured outputs, and validation checks.',
        'Architected a three-level hierarchical LangGraph budget copilot reasoning in the context of approximately $5M/month in advertising spend across brands, countries, and channels.',
        'Built an AI ingestion pipeline from AWS SNS through SQS to ClickHouse for multi-gigabyte advertising datasets and long-running LangGraph recommendation workflows.'
      ]
    },
    {
      id: 'awell',
      recommendationIds: [
        'etienne-bomcke',
        'jonathan-belanger',
        'vasilica-coscotin'
      ],
      publicWork: [
        {
          name: 'hosted-pages',
          url: 'https://github.com/awell-health/hosted-pages'
        },
        {
          name: 'ui-library',
          url: 'https://github.com/awell-health/ui-library'
        },
        {
          name: 'awell-extensions',
          url: 'https://github.com/awell-health/awell-extensions'
        }
      ],
      company: 'Awell Health',
      focusTitle: 'Event-driven healthcare platforms',
      title: 'Senior Software Engineer',
      period: 'April 2021 – May 2025',
      location: 'Remote (Belgium)',
      summary:
        'Owned core APIs and event-driven systems that helped scale the platform to 100K+ clinical workflows per month.',
      highlights: [
        'Owned core APIs across orchestration, task management, and workflow design, helping scale the platform to 100K+ clinical workflows per month.',
        'Designed event-driven systems using CQRS, added 100+ Cypress end-to-end tests, helped reduce deployment time by about 50%, and contributed to hosted-pages, ui-library, and awell-extensions.'
      ]
    }
  ],
  earlierRoles: [
    {
      id: 'tintash',
      referenceId: 'tintash',
      company: 'Tintash',
      title: 'Software Engineer',
      period: 'July 2020 – April 2021',
      summary:
        'Built full-stack interactive and booking products with Node.js and React.'
    },
    {
      id: 'solutioninn',
      referenceId: 'solutioninn',
      company: 'SolutionInn',
      title: 'Web Developer Intern',
      period: 'June 2019 – October 2019',
      summary:
        'Built real-time tutoring features across Node.js, React, Socket.io, PHP, MySQL, and iOS.'
    },
    {
      id: 'respondio',
      referenceId: 'respondio',
      company: 'Respond.io (formerly Rocketbots Limited)',
      title: 'Frontend Developer Intern',
      period: 'July 2018 – September 2018',
      summary:
        'Built Vue and Vuex product features, a Preact webchat plugin, Socket.io integrations, and Node.js APIs.'
    },
    {
      id: 'freelance',
      company: 'Upwork & Fiverr',
      title: 'Freelance Product Engineer',
      period: 'July 2016 – September 2018',
      summary:
        'Delivered 15+ MVPs for international clients and achieved Top Rated status on Upwork.'
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
      id: 'snippetgraph',
      kind: 'independent',
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
      href: 'https://snippetgraph.com',
      sourceHref: 'https://github.com/mohsinht/SnippetGraph',
      status: 'Independent proof of concept'
    },
    {
      id: 'firstcustomer',
      kind: 'independent',
      name: 'FirstCustomer',
      homepageSummary:
        'A weekend project that gives landing pages an honest first impression and practical fixes, shaped by feedback from people who tried its first version.',
      homepageDetail:
        'The current version checks 20+ website signals in milliseconds with negligible analysis cost, then uses an LLM to turn structured findings into a readable report. Five customer personas bring different perspectives to the review.',
      problem:
        'Founders need actionable feedback on a landing page before their first customers see it.',
      built:
        'A landing-page review tool that evaluates 20+ deterministic signals and synthesizes a human-readable report with an LLM.',
      technologies: ['TypeSafe AI', 'structured analysis', 'LLM synthesis'],
      outcome:
        'Iterated after early users tried the weekend prototype and shared feedback.',
      href: 'https://firstcustomer.ai',
      status: 'Independent project',
      demoHref: 'https://www.youtube.com/watch?v=_9TQfAzmIPE',
      storyHref: '/posts/firstcustomer-from-weekend-project-to-feedback'
    },
    {
      id: 'zaati-os',
      kind: 'independent',
      name: 'Zaati OS',
      homepageSummary:
        'I built Zaati OS to turn the AI tools I already use into one private place to catch up on my day.',
      homepageDetail:
        'It brings calendar, inbox, work, finances, and goals into a personal dashboard. The AI prepares the information, files keep the history, and I stay in control of the data.',
      problem:
        'Useful personal information is scattered across tools and short-lived AI conversations.',
      built:
        'An open-source personal dashboard that combines AI-prepared information with files stored under the user’s control.',
      technologies: ['JavaScript', 'file-based data', 'AI tools'],
      outcome:
        'A working personal dashboard with a synthetic-data tutorial for trying the complete loop before connecting real sources.',
      href: 'https://github.com/mohsinht/zaati-os',
      status: 'Independent open-source project',
      storyHref: '/posts/zaati-os-tiny-control-room'
    },
    {
      id: 'professional-systems',
      kind: 'professional',
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
        'Work that made complex data and operational workflows more useful to the people relying on them.'
    }
  ],
  recommendations: [
    {
      company: 'Trafilea',
      id: 'tomas-malgarin',
      name: 'Tomás Malgarín',
      role: 'Data Analytics, Trafilea',
      excerpt:
        'One of those hires you notice from day one. Adapted incredibly fast, brought fresh technical perspectives, and consistently went beyond what was required.',
      homepageExcerpt:
        'One of those hires you notice from day one. Adapted incredibly fast, brought fresh technical perspectives, and consistently went beyond what was required.'
    },
    {
      company: 'Awell Health',
      id: 'etienne-bomcke',
      name: 'Etienne Bömcke',
      role: 'Head of Technology, Awell Health',
      excerpt:
        'I worked with Mohsin for four years at Awell. Over this time he consistently proved his value as a smart, capable, autonomous and reliable software engineer. He particularly impressed me with his ability to intuitively pick sound technical and architectural decisions even when he did not necessarily have first hand experience with the technology involved.',
      homepageExcerpt:
        'Over this time he consistently proved his value as a smart, capable, autonomous and reliable software engineer.'
    },
    {
      company: 'Awell Health',
      id: 'jonathan-belanger',
      name: 'Jonathan Belanger',
      role: 'Head of Engineering, Awell Health',
      excerpt:
        'Mohsin is a thoughtful, diligent, hard-working, and methodical engineer — a strong “slow thinker” (in a Kahneman/Tversky way). He is happy to jump in and tackle difficult problems, and when he does, he does so with humility and a desire to learn. At Awell, he has been able to contribute to our code base across the stack.'
    },
    {
      company: 'Awell Health',
      id: 'vasilica-coscotin',
      name: 'Vasilica Coscotin',
      role: 'Head of Technology & Engineering, Awell Health',
      additionalRole: 'ex Software Architect, Voxbone ($1B+)',
      excerpt:
        'Mohsin is a great person, a passionate developer and a hard working team member. He is not afraid of taking responsibility in difficult situations and always tries to raise the bar for himself. From a technical perspective he is quite skilled, but his most important skill is the desire to constantly improve.'
    }
  ],
  employerRecommendations: [
    {
      id: 'tintash',
      company: 'Tintash',
      name: 'Salman Mughal',
      role: 'HR Manager, Tintash',
      excerpt:
        'Mohsin always demonstrated excellence in professionalism and strong technical skills. He was a valued and dedicated member of our organization and we always found him to be a committed team player with effective analytical skills. He was very focused hard-working dedicated and result-oriented.',
      editedExcerpt:
        'Mohsin always demonstrated excellence in professionalism and strong technical skills. He was a valued and dedicated member of our organization and we always found him to be a committed team player with effective analytical skills. He was very focused, hard-working, dedicated, and result-oriented.',
      href: '/downloads/Tintash_certificate.pdf',
      linkLabel: 'View Tintash certificate'
    },
    {
      id: 'solutioninn',
      company: 'SolutionInn LLC',
      name: 'Rahman Gul',
      role: 'HR Manager, SolutionInn',
      excerpt:
        'Mohsin was a motivated, devoted, professional, hard-working and innovative person. He contributed much to our organization’s goals and targets and his performance was proven to be among the most efficient employees of our organization.',
      href: '/downloads/SolutionInn_Certificate.pdf',
      linkLabel: 'View SolutionInn certificate'
    },
    {
      id: 'respondio',
      company: 'Rocketbots Limited (now Respond.io)',
      name: 'Hassan Ahmed',
      role: 'Executive Director, Rocketbots',
      excerpt:
        'During his time, Mohsin produced excellent results in all the assigned tasks. We found him to be hardworking, devoted and a diligent person. For these reasons, I believe that he will prove himself to be an asset to any organization. If you have any question, do not hesitate to contact me.',
      editedExcerpt:
        'During his time, Mohsin produced excellent results in all the assigned tasks. We found him to be hardworking, devoted and a diligent person. For these reasons, I believe that he will prove himself to be an asset to any organization. If you have any questions, do not hesitate to contact me.',
      href: '/downloads/Letter%20of%20Recommendation%20-%20Mohsin.pdf',
      linkLabel: 'View Rocketbots letter'
    }
  ],
  clientTestimonials: [
    {
      project: 'GJD Investments Project',
      name: 'Georgia Hampton',
      role: 'Client feedback · Fiverr',
      excerpt:
        'I can’t tell you how much I LOVE my new website! If anyone has a question about hiring you have them contact me; you were a pleasure to work with and you took great attention to detail. I look forward to working w/you in the future.'
    },
    {
      project: 'Marymount LLC Project',
      name: 'Vibhav Mishra',
      role: 'Client feedback · Upwork',
      excerpt:
        'I hired Mohsin for developing a website for my real estate company from scratch. Mohsin’s biggest strength is his available and his patience. He is willing to work as long as it takes.',
      editedExcerpt:
        'I hired Mohsin for developing a website for my real estate company from scratch. Mohsin’s biggest strength is his availability and his patience. He is willing to work as long as it takes.'
    },
    {
      project: 'Bizsavvy Affiliates Project',
      name: 'Bizsavvy',
      role: 'Client feedback · Fiverr',
      excerpt:
        'I loved working with Mohsinhayat. He did exactly what he said he would do and even more. Communication was great and he responded in a professional and timely matter. We transferred a site from Wix to Wordpress and he was able to duplicate the site into Wordpress way ahead of schedule.',
      editedExcerpt:
        'I loved working with Mohsinhayat. He did exactly what he said he would do and even more. Communication was great and he responded in a professional and timely manner. We transferred a site from Wix to WordPress and he was able to duplicate the site into WordPress way ahead of schedule.'
    },
    {
      project: 'Aavant Backdrops Project',
      name: 'Aavant',
      role: 'Client feedback · Fiverr',
      excerpt:
        'Knows Wordpress like the back of his hand. Does good and fast work. You just can depend on him and sit back. He will deliver. Wonderful job.',
      editedExcerpt:
        'Knows WordPress like the back of his hand. Does good and fast work. You just can depend on him and sit back. He will deliver. Wonderful job.'
    },
    {
      project: 'Skin Swim Project',
      name: 'Skin Swim',
      role: 'Client feedback · Upwork',
      excerpt:
        'Great experience with Mohsin. Easy to communicate and completed the job successfully. Very pleased with my website, I will use him in the future!'
    },
    {
      project: 'Smile-Fashion Project',
      name: 'Lamar Williams',
      role: 'Client feedback · Upwork',
      excerpt:
        'Work completed on time and done perfectly. Always a pleasure working with Mohsin.'
    },
    {
      project: 'Quick House Canada Project',
      name: 'QuickHouseCA',
      role: 'Client feedback · Upwork',
      excerpt: 'Thanks again Mohsin! Looking forward to working together again!'
    }
  ],
  certifications: [
    {
      name: 'The Complete Node.js Course',
      issuer: 'Code With Mosh',
      date: 'October 2020',
      href: '/downloads/certificate-of-completion-for-the-complete-node-js-course.pdf',
      linkLabel: 'View Node.js course certificate'
    },
    {
      name: 'The Ultimate JavaScript Mastery Series - Part 1',
      issuer: 'Code With Mosh',
      date: 'June 2019',
      href: '/downloads/certificate-of-completion-for-javascript-basics.pdf',
      linkLabel: 'View JavaScript course certificate'
    },
    {
      name: 'Learn React.js: Part I',
      issuer: 'Codecademy',
      date: 'June 2019',
      href: '/downloads/Mohsin%20Hayat%20_%20Codecademy_Part1.pdf',
      linkLabel: 'View React.js course certificate'
    },
    {
      name: 'Learn React.js: Part II',
      issuer: 'Codecademy',
      date: 'June 2018',
      href: '/downloads/Mohsin%20Hayat%20_%20Codecademy_Part2.pdf',
      linkLabel: 'View React.js Part II certificate'
    }
  ],
  educationRecord,
  education: `${educationRecord.studyType} in ${educationRecord.area}, ${educationRecord.institution}, Lahore, Pakistan (${educationRecord.startDate}–${educationRecord.endDate}).`,
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
    alternates: {
      canonical: url,
      types: {
        ...(['/', '/resume', '/recommendations', '/posts'].includes(path) ||
        path.startsWith('/posts/')
          ? {
              'text/markdown': [
                {
                  url: absoluteUrl(
                    `/agent-markdown?path=${encodeURIComponent(path)}`
                  ),
                  title: `${title} (Markdown)`
                }
              ]
            }
          : {}),
        ...(path === '/'
          ? {
              'application/json': [
                {
                  url: absoluteUrl(publicEndpoints.profile),
                  title: 'Public profile JSON'
                }
              ]
            }
          : {}),
        ...(path === '/resume'
          ? {
              'application/json': [
                {
                  url: absoluteUrl(publicEndpoints.resume),
                  title: 'JSON Resume'
                }
              ]
            }
          : {})
      }
    },
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

export const independentProjects = profile.projects.filter(
  (project) => project.kind === 'independent'
)

export const publicEndpoints = {
  guide: '/ai',
  index: '/llms.txt',
  markdown: '/profile.md',
  fullMarkdown: '/llms-full.txt',
  profile: '/profile.json',
  resume: '/resume.json',
  mcp: '/api/mcp'
}

export const publicFaq = [
  {
    id: 'timezone',
    question: 'Where is Mohsin based, and what is his timezone?',
    answer: `${profile.location}. His timezone is ${profile.timezone} (UTC${profile.utcOffset}). Specific working hours and overlap should be confirmed directly.`,
    keywords: [
      'timezone',
      'time zone',
      'hours',
      'overlap',
      'location',
      'based',
      'pakistan',
      'lahore'
    ]
  },
  {
    id: 'collaboration',
    question: 'How can I discuss a role or collaboration with Mohsin?',
    answer: `Contact Mohsin at ${profile.email} or through his LinkedIn profile. Current availability, working arrangements, and contract terms need to be confirmed directly with him.`,
    keywords: [
      'hire',
      'hiring',
      'available',
      'availability',
      'contract',
      'eor',
      'contact',
      'salary',
      'rate',
      'collaboration'
    ]
  },
  {
    id: 'learning',
    question: 'Is Mohsin limited to the technologies listed on his resume?',
    answer: profile.learningApproach,
    keywords: [
      'learn',
      'learning',
      'adapt',
      'unfamiliar',
      'limited',
      'technologies',
      'new tools'
    ]
  },
  {
    id: 'evidence',
    question: 'How should I assess the statements in this profile?',
    answer:
      'The career history and project descriptions are self-reported. Linked recommendations, employer letters, repositories, and demos provide supporting context. A repository or recommendation does not independently verify every contribution or numerical claim.',
    keywords: [
      'verify',
      'verification',
      'proof',
      'evidence',
      'recommendation',
      'reference'
    ]
  }
]

export const skillGroupLabels = {
  languages: 'Languages',
  ai: 'Applied AI',
  backend: 'Backend and data',
  platform: 'Cloud and architecture'
}
