import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import Script from 'next/script'
import '@fortawesome/fontawesome-svg-core'
import '../styles/main.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script src="https://kit.fontawesome.com/6145703c0a.js" crossOrigin="anonymous" />
      <Component {...pageProps} />
    </>
  )
}
