/* global document, window */
import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = [
  '/',
  '/resume',
  '/recommendations',
  '/posts',
  '/posts/firstcustomer-from-weekend-project-to-feedback',
  '/posts/zaati-os-tiny-control-room',
  '/posts/working-remotely-from-pakistan',
  '/posts/shortlisting-remote-companies',
  '/posts/apply-for-remote-jobs',
  '/posts/standout-in-your-job-application',
  '/posts/advises-from-my-mentors'
]

for (const route of routes) {
  test(`${route} has readable structure, no overflow or accessibility violations`, async ({
    page
  }) => {
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto(route)
    expect(response?.status()).toBe(200)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('main')).toHaveCount(1)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth + 1
      )
    ).toBe(true)
    // The embedded YouTube player is third-party content; test our titled iframe separately.
    const result = await new AxeBuilder({ page })
      .exclude('.video-embed')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze()
    expect(result.violations).toEqual([])
    expect(errors).toEqual([])
  })
}

test('FirstCustomer appears in the writing index and has an accessible demo', async ({
  page,
  request
}) => {
  await page.goto('/posts')
  await expect(
    page
      .getByRole('link', { name: /FirstCustomer: From a Weekend Project/i })
      .first()
  ).toBeVisible()
  await page
    .getByRole('link', { name: /FirstCustomer: From a Weekend Project/i })
    .first()
    .click()
  await expect(
    page.getByRole('link', { name: /Watch the FirstCustomer demo on YouTube/i })
  ).toHaveAttribute('href', 'https://www.youtube.com/watch?v=_9TQfAzmIPE')
  await expect(
    page.locator('iframe[title="FirstCustomer AI demo video"]')
  ).toHaveAttribute('src', /youtube-nocookie\.com\/embed\/_9TQfAzmIPE/)
  await expect(
    page.getByRole('img', { name: /FirstCustomer landing page/i })
  ).toBeVisible()
  const response = await request.get(
    '/posts/firstcustomer-from-weekend-project-to-feedback',
    { headers: { Accept: 'text/markdown' } }
  )
  await expect(response).toBeOK()
  expect(await response.text()).toContain('more than 20 signals')
})

test('resume download contains the current FirstCustomer description', async ({
  request
}) => {
  const response = await request.get('/downloads/MohsinHayatResume.pdf')
  await expect(response).toBeOK()
  expect(response.headers()['content-type']).toContain('application/pdf')
  expect((await response.body()).subarray(0, 4).toString()).toBe('%PDF')
})

test('primary navigation stays consistent and local links resolve', async ({
  page,
  request
}) => {
  for (const route of [
    '/',
    '/resume',
    '/recommendations',
    '/posts/firstcustomer-from-weekend-project-to-feedback'
  ]) {
    await page.goto(route)
    for (const name of ['Home', 'Resume', 'Recommendations', 'Writing']) {
      await expect(
        page.getByRole('link', { name, exact: true }).first()
      ).toBeVisible()
    }
  }
  for (const route of ['/', '/resume', '/recommendations', '/posts']) {
    await page.goto(route)
    const links = await page
      .locator('a[href^="/"]')
      .evaluateAll((nodes) => [
        ...new Set(
          nodes
            .map((node) => node.getAttribute('href').split('#')[0])
            .filter(Boolean)
        )
      ])
    for (const path of links) {
      const response = await request.get(path)
      expect(response.status(), `Broken link ${route} → ${path}`).toBeLessThan(
        400
      )
    }
  }
})
