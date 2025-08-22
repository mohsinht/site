import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'
import '@fortawesome/fontawesome-svg-core'
import '../styles/main.css'
import { useRouter } from 'next/router'
import * as ga from '../lib/analytics'
import { useEffect } from 'react'

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohsin Hayat",
              "jobTitle": "Senior Software Engineer",
              "description": "Senior Full-Stack Engineer from Lahore, Pakistan. Remote experience with Awell Health (Belgium) and Trafilea. Expertise in healthtech, AI, Next.js, and distributed systems.",
              "url": "https://mohsinht.com",
              "image": "https://mohsinht.com/images/Mohsin_DP.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lahore",
                "addressCountry": "Pakistan"
              },
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Trafilea",
                  "url": "https://trafilea.com"
                },
                {
                  "@type": "Organization", 
                  "name": "Awell Health",
                  "url": "https://awellhealth.com"
                }
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "FAST NUCES",
                "url": "https://nu.edu.pk"
              },
              "sameAs": [
                "https://www.linkedin.com/in/mohsinhayatt/",
                "https://github.com/mohsinht",
                "https://facebook.com/mohsinhayatt"
              ],
              "knowsAbout": [
                "Software Engineering",
                "Healthtech",
                "Artificial Intelligence", 
                "Full-Stack Development",
                "Node.js",
                "Next.js",
                "TypeScript",
                "Microservices",
                "Kubernetes",
                "Remote Development"
              ]
            })
          }}
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/6145703c0a.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      {/* Performance monitoring */}
      <Script
        id="web-vitals"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              // Simple performance monitoring without external dependencies
              const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                  }
                  if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                  }
                  if (entry.entryType === 'layout-shift') {
                    console.log('CLS:', entry.value);
                  }
                }
              });
              
              try {
                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
              } catch (e) {
                console.log('Performance monitoring not supported');
              }
              
              // Log basic performance metrics
              window.addEventListener('load', () => {
                const navigation = performance.getEntriesByType('navigation')[0];
                if (navigation) {
                  console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
                  console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
                }
              });
            }
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
