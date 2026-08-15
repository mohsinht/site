export default {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  collectCoverageFrom: [
    'app/posts/get-posts.js',
    'app/feed.xml/route.js',
    'app/robots.js',
    'data/profile.js',
    'lib/public-content.js',
    'next.config.js'
  ]
}
