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
      company: 'Trafilea',
      name: 'Tomás Malgarín',
      role: 'Data Analytics, Trafilea',
      excerpt:
        'One of those hires you notice from day one. Adapted incredibly fast, brought fresh technical perspectives, and consistently went beyond what was required.',
      homepageExcerpt:
        'One of those hires you notice from day one. Adapted incredibly fast, brought fresh technical perspectives, and consistently went beyond what was required.'
    },
    {
      company: 'Awell Health',
      name: 'Etienne Bömcke',
      role: 'Head of Technology, Awell Health',
      excerpt:
        'I worked with Mohsin for four years at Awell. Over this time he consistently proved his value as a smart, capable, autonomous and reliable software engineer. He particularly impressed me with his ability to intuitively pick sound technical and architectural decisions even when he did not necessarily have first hand experience with the technology involved.',
      homepageExcerpt:
        'Over this time he consistently proved his value as a smart, capable, autonomous and reliable software engineer.'
    },
    {
      company: 'Awell Health',
      name: 'Jonathan Belanger',
      role: 'Head of Engineering, Awell Health',
      excerpt:
        'Mohsin is a thoughtful, diligent, hard-working, and methodical engineer — a strong “slow thinker” (in a Kahneman/Tversky way). He is happy to jump in and tackle difficult problems, and when he does, he does so with humility and a desire to learn. At Awell, he has been able to contribute to our code base across the stack.'
    },
    {
      company: 'Awell Health',
      name: 'Vasilica Coscotin',
      role: 'Head of Technology & Engineering, Awell Health',
      additionalRole: 'ex Software Architect, Voxbone ($1B+)',
      excerpt:
        'Mohsin is a great person, a passionate developer and a hard working team member. He is not afraid of taking responsibility in difficult situations and always tries to raise the bar for himself. From a technical perspective he is quite skilled, but his most important skill is the desire to constantly improve.'
    }
  ],
  employerRecommendations: [
    {
      company: 'Tintash',
      name: 'Salman Mughal',
      role: 'HR Manager, Tintash',
      excerpt:
        'Mohsin always demonstrated excellence in professionalism and strong technical skills. He was a valued and dedicated member of our organization and we always found him to be a committed team player with effective analytical skills. He was very focused hard-working dedicated and result-oriented.',
      href: '/downloads/Tintash_certificate.pdf',
      linkLabel: 'View Tintash certificate'
    },
    {
      company: 'SolutionInn LLC',
      name: 'Rahman Gul',
      role: 'HR Manager, SolutionInn',
      excerpt:
        'Mohsin was a motivated, devoted, professional, hard-working and innovative person. He contributed much to our organization’s goals and targets and his performance was proven to be among the most efficient employees of our organization.',
      href: '/downloads/SolutionInn_Certificate.pdf',
      linkLabel: 'View SolutionInn certificate'
    },
    {
      company: 'Rocketbots Limited',
      name: 'Hassan Ahmed',
      role: 'Executive Director, Rocketbots',
      excerpt:
        'During his time, Mohsin produced excellent results in all the assigned tasks. We found him to be hardworking, devoted and a diligent person. For these reasons, I believe that he will prove himself to be an asset to any organization. If you have any question, do not hesitate to contact me.',
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
        'I hired Mohsin for developing a website for my real estate company from scratch. Mohsin’s biggest strength is his available and his patience. He is willing to work as long as it takes.'
    },
    {
      project: 'Bizsavvy Affiliates Project',
      name: 'Bizsavvy',
      role: 'Client feedback · Fiverr',
      excerpt:
        'I loved working with Mohsinhayat. He did exactly what he said he would do and even more. Communication was great and he responded in a professional and timely matter. We transferred a site from Wix to Wordpress and he was able to duplicate the site into Wordpress way ahead of schedule.'
    },
    {
      project: 'Aavant Backdrops Project',
      name: 'Aavant',
      role: 'Client feedback · Fiverr',
      excerpt:
        'Knows Wordpress like the back of his hand. Does good and fast work. You just can depend on him and sit back. He will deliver. Wonderful job.'
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
