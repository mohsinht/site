import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const pages = [
  ['/', 'Mohsin Hayat'],
  ['/resume', 'Mohsin Hayat'],
  ['/recommendations', 'Recommendations for Mohsin Hayat'],
  ['/posts', 'Engineering Writing'],
  [
    '/posts/working-remotely-from-pakistan',
    'Working Remotely from Pakistan: A 2022 Retrospective'
  ]
]

for (const [path, heading] of pages) {
  test(`${path} has page metadata, a single meaningful H1, and no console errors`, async ({
    page
  }) => {
    const errors = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    await page.goto(path)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toContainText(heading)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      new RegExp(`^https://mohsinht\\.com${path === '/' ? '/?$' : `${path}$`}`)
    )
    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1)
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image'
    )
    expect(errors).toEqual([])
  })
}

test('homepage accessibility', async ({ page }) => {
  await page.goto('/')
  await expect(
    page.getByRole('link', { name: 'Skip to content' })
  ).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' })
  ).toBeFocused()
  const results = await new AxeBuilder({ page }).include('main').analyze()
  expect(results.violations).toEqual([])
})

test('navigation, feed discovery, and internal routes work', async ({
  page
}) => {
  await page.goto('/')
  await page.getByRole('link', { name: /Read my résumé/i }).click()
  await expect(page).toHaveURL(/\/resume$/)
  await page.goto('/posts')
  await expect(
    page.locator('link[type="application/rss+xml"]')
  ).toHaveAttribute('href', 'https://mohsinht.com/feed.xml')
  await expect(
    page.getByRole('link', { name: /Working Remotely from Pakistan/i }).first()
  ).toBeVisible()
})

test('utility endpoints and redirects have expected search behavior', async ({
  request
}) => {
  const [robots, sitemap, feed, llms, full, earlier, redirect, missing] =
    await Promise.all([
      request.get('/robots.txt'),
      request.get('/sitemap.xml'),
      request.get('/feed.xml'),
      request.get('/llms.txt'),
      request.get('/llms-full.txt'),
      request.get('/earlier-work'),
      request.get('/llm.txt', { maxRedirects: 0 }),
      request.get('/not-a-public-page')
    ])
  await expect(robots).toBeOK()
  await expect(sitemap).toBeOK()
  await expect(feed).toBeOK()
  await expect(llms).toBeOK()
  await expect(full).toBeOK()
  expect(await robots.text()).toContain(
    'Sitemap: https://mohsinht.com/sitemap.xml'
  )
  expect(await sitemap.text()).not.toContain('earlier-work')
  expect(await feed.text()).toContain('xmlns:atom')
  expect(await llms.text()).toContain('# Mohsin Hayat')
  expect(await full.text()).toContain('Last updated:')
  expect(await earlier.text()).toContain('Earlier Work')
  expect(redirect.status()).toBe(308)
  expect(redirect.headers().location).toBe('/llms.txt')
  expect(missing.status()).toBe(404)
})
