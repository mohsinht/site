import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="robots" content="follow, index" />
        <meta name="description" content="Mohsin Hayat - Senior Software Engineer specializing in applied AI, LLM agents, and backend systems. Currently building conversational AI for airline platforms at OnService.AI." />
        <meta name="keywords" content="Mohsin Hayat, Senior Software Engineer, Applied AI Engineer, Backend Engineer, LLM Agents, LangGraph, Python, Node.js, TypeScript, Airline Technology, Remote Developer, Lahore Pakistan" />
        <meta name="author" content="Mohsin Hayat" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohsin Hayat | Senior Software Engineer, Applied AI & Backend Systems" />
        <meta property="og:description" content="Senior Software Engineer specializing in applied AI, LLM agents, and backend systems across airline, e-commerce, and healthcare platforms." />
        <meta property="og:url" content="https://mohsinht.com" />
        <meta property="og:site_name" content="Mohsin Hayat" />
        <meta property="og:image" content="https://mohsinht.com/images/Mohsin_DP.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mohsin Hayat - Senior Software Engineer" />
        <meta name="twitter:description" content="Senior Software Engineer specializing in applied AI, LLM agents, and backend systems." />
        <meta name="twitter:image" content="https://mohsinht.com/images/Mohsin_DP.jpg" />
        
        {/* Google Fonts - optimized for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Additional SEO */}
        <link rel="canonical" href="https://mohsinht.com" />
        <meta name="theme-color" content="#121212" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://kit.fontawesome.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com https://ka-f.fontawesome.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';" />
      </Head>
      <body className='dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
