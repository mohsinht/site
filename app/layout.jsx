import Script from 'next/script'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'

const siteUrl = 'https://mohsinht.com'
const title =
  'Mohsin Hayat | Senior Software Engineer, Applied AI & Backend Systems'
const description =
  'Mohsin Hayat, Senior Software Engineer from Lahore building production AI agents and backend systems across airlines, e-commerce, and healthcare. Currently at OnService.AI.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Mohsin Hayat'
  },
  description,
  keywords: [
    'Mohsin Hayat',
    'Senior Software Engineer',
    'Applied AI Engineer',
    'Backend Engineer',
    'LLM Agents',
    'LangGraph',
    'Python',
    'Node.js',
    'TypeScript',
    'Airline Technology',
    'Remote Developer',
    'Lahore Pakistan'
  ],
  authors: [{ name: 'Mohsin Hayat', url: siteUrl }],
  creator: 'Mohsin Hayat',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    title,
    description:
      'Senior Software Engineer specializing in applied AI, LLM agents, and backend systems across airline, e-commerce, and healthcare platforms.',
    url: siteUrl,
    siteName: 'Mohsin Hayat',
    images: [
      {
        url: '/images/Mohsin_DP.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohsin Hayat'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohsin Hayat - Senior Software Engineer',
    description:
      'Senior Software Engineer specializing in applied AI, LLM agents, and backend systems.',
    images: ['/images/Mohsin_DP.jpg']
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export const viewport = {
  themeColor: '#121212',
  colorScheme: 'dark'
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mohsin Hayat',
  jobTitle: 'Senior Software Engineer',
  description:
    'Senior Software Engineer from Lahore building production AI agents and backend systems across airline, e-commerce, and healthcare platforms.',
  url: siteUrl,
  image: `${siteUrl}/images/Mohsin_DP.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressCountry: 'Pakistan'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'OnService.AI'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'FAST NUCES',
    url: 'https://nu.edu.pk'
  },
  sameAs: [
    'https://www.linkedin.com/in/mohsinhayatt/',
    'https://github.com/mohsinht',
    'https://facebook.com/mohsinhayatt'
  ],
  knowsAbout: [
    'Applied AI',
    'LLM Agents',
    'LangGraph',
    'RAG',
    'NL-to-SQL',
    'Python',
    'Backend Systems',
    'Node.js',
    'TypeScript',
    'Microservices',
    'Event Sourcing',
    'CQRS',
    'Kubernetes',
    'Airline Technology'
  ]
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#121212', light: '#121212' }} />
      <body>
        <Script
          id="font-awesome"
          src="https://kit.fontawesome.com/6145703c0a.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <Layout nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>
          <Navbar pageMap={await getPageMap()} />

          {children}

          <Footer>
            <time>{new Date().getFullYear()}</time> © Mohsin Hayat.
            <span className="social-links">
              <a className="icon-link" href="/feed.xml" aria-label="RSS feed">
                <i className="fa fa-solid fa-rss" aria-hidden="true" />
              </a>
              <a
                className="icon-link"
                href="https://facebook.com/mohsinhayatt"
                aria-label="Facebook"
              >
                <i className="fa fa-brands fa-facebook" aria-hidden="true" />
              </a>
              <a
                className="icon-link"
                href="https://github.com/mohsinht"
                aria-label="GitHub"
              >
                <i className="fa fa-brands fa-github" aria-hidden="true" />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/mohsinhayatt/"
                aria-label="LinkedIn"
              >
                <i className="fa fa-brands fa-linkedin" aria-hidden="true" />
              </a>
            </span>
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
