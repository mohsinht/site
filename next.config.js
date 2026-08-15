import nextra from 'nextra'

const withNextra = nextra({ readingTime: true })
const developmentScriptSource =
  process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `default-src 'self'; script-src 'self' 'unsafe-inline'${developmentScriptSource}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'`
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' }
]

export default withNextra({
  reactStrictMode: true,
  agentRules: false,
  turbopack: {
    resolveAlias: { 'next-mdx-import-source-file': './mdx-components.jsx' }
  },
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  async redirects() {
    return [
      { source: '/more', destination: '/recommendations', permanent: true },
      {
        source: '/earlier-work',
        destination: '/recommendations#earlier-recommendations',
        permanent: true
      },
      { source: '/llm.txt', destination: '/llms.txt', permanent: true },
      {
        source: '/www/:path*',
        destination: 'https://mohsinht.com/:path*',
        permanent: true
      }
    ]
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/downloads/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }]
      }
    ]
  }
})
