import { absoluteUrl, profile, siteUrl } from '../data/profile'

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll('<', '\\u003c')
      }}
    />
  )
}

export function HomeJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: profile.name
          },
          {
            '@type': 'ProfilePage',
            '@id': `${siteUrl}/#profile`,
            url: siteUrl,
            name: `${profile.name} | ${profile.shortTitle}`,
            mainEntity: { '@id': `${siteUrl}/#person` }
          },
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: profile.name,
            jobTitle: profile.title,
            description: profile.description,
            url: siteUrl,
            image: absoluteUrl(profile.portrait),
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Lahore',
              addressCountry: 'Pakistan'
            },
            worksFor: { '@type': 'Organization', name: 'OnService.AI' },
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'FAST-NUCES' },
            sameAs: [profile.links.github, profile.links.linkedin],
            knowsAbout: profile.capabilities
          }
        ]
      }}
    />
  )
}
