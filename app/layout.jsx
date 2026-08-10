import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Footer, Layout, Navbar } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'
import '../styles/main.css'
import { profile, siteUrl } from '../data/profile'
import { SocialLinks } from '../components/portfolio'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Mohsin Hayat | Senior Software Engineer, Applied AI',
    template: '%s | Mohsin Hayat'
  },
  description: profile.description,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: 'Mohsin Hayat' }]
    }
  }
}

export const viewport = { themeColor: '#0a1020', colorScheme: 'dark' }

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Head backgroundColor={{ dark: '#0a1020', light: '#0a1020' }}>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Mohsin Hayat"
          href={`${siteUrl}/feed.xml`}
        />
      </Head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Layout nextThemes={{ defaultTheme: 'dark', forcedTheme: 'dark' }}>
          <Navbar pageMap={await getPageMap()} />
          {children}
          <Footer>
            <time>{new Date().getFullYear()}</time> © {profile.name}.{' '}
            <SocialLinks />
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
