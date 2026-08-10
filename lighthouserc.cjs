module.exports = {
  ci: {
    collect: {
      startServerCommand: 'yarn --ignore-engines start',
      startServerReadyPattern: 'Ready',
      startServerReadyTimeout: 120000,
      url: [
        'http://127.0.0.1:3000/',
        'http://127.0.0.1:3000/resume',
        'http://127.0.0.1:3000/recommendations',
        'http://127.0.0.1:3000/posts'
      ],
      numberOfRuns: 3,
      settings: { chromeFlags: '--no-sandbox' }
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:performance': ['error', { minScore: 0.9 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }]
      }
    },
    upload: { target: 'filesystem', outputDir: '.lighthouseci' }
  }
}
