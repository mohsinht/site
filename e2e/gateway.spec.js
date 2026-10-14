import { expect, test } from '@playwright/test'
import {
  Client,
  StreamableHTTPClientTransport
} from '@modelcontextprotocol/client'

const headers = {
  Accept: 'application/json, text/event-stream',
  'Content-Type': 'application/json'
}

test('AI discovery is visible and structured outputs agree with the rendered resume', async ({
  page,
  request
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('complementary', { name: 'AI access' })
  ).toBeVisible()
  await expect(page.locator('link[rel="describedby"]')).toHaveAttribute(
    'href',
    'https://mohsinht.com/llms.txt'
  )
  const [
    profileResponse,
    resumeResponse,
    markdownResponse,
    fullResponse,
    indexResponse
  ] = await Promise.all(
    [
      '/profile.json',
      '/resume.json',
      '/profile.md',
      '/llms-full.txt',
      '/llms.txt'
    ].map((path) => request.get(path))
  )
  for (const response of [
    profileResponse,
    resumeResponse,
    markdownResponse,
    fullResponse,
    indexResponse
  ])
    await expect(response).toBeOK()
  const data = await profileResponse.json()
  const resume = await resumeResponse.json()
  expect(resume.basics.name).toBe(data.identity.name)
  expect(resume.work.map((item) => item.name)).toEqual(
    data.experience.map((item) => item.company)
  )
  expect(await markdownResponse.text()).toBe(await fullResponse.text())
  expect(await indexResponse.text()).toContain('/api/mcp')
  expect(data.writing.length).toBeGreaterThan(0)
  expect(data.faq.some((item) => item.id === 'faq.learning')).toBe(true)
  expect(profileResponse.headers().link).toContain('/llms.txt')
  await page.goto('/resume')
  await expect(page.locator('main')).toContainText(data.resumeSummary)
  await expect(page.locator('main')).toContainText(data.learningApproach)
  for (const project of data.projects)
    await expect(page.locator('main')).toContainText(project.name)
  await page.goto('/ai')
  for (const faq of data.faq)
    await expect(page.locator('main')).toContainText(faq.answer)
})

for (const [name, mode] of [
  ['legacy', 'legacy'],
  ['modern', { pin: '2026-07-28' }]
]) {
  test(`real MCP SDK client uses ${name} tools and resources`, async ({
    baseURL,
    request
  }) => {
    const client = new Client(
      { name: 'profile-integration-test', version: '1.0.0' },
      { versionNegotiation: { mode } }
    )
    try {
      await client.connect(
        new StreamableHTTPClientTransport(new URL('/api/mcp', baseURL))
      )
      const { tools } = await client.listTools()
      expect(tools.map((tool) => tool.name).sort()).toEqual([
        'ask_followup',
        'get_profile',
        'verify_claim'
      ])
      expect(tools.every((tool) => tool.annotations.readOnlyHint)).toBe(true)
      const profile = await client.callTool({
        name: 'get_profile',
        arguments: {}
      })
      const expected = await (await request.get('/profile.json')).json()
      expect(profile.structuredContent).toEqual(expected)
      const evidence = await client.callTool({
        name: 'verify_claim',
        arguments: { query: 'Awell' }
      })
      expect(evidence.structuredContent.matches[0].id).toBe('experience.awell')
      expect(evidence.structuredContent.evidencePolicy).toContain(
        'self-reported'
      )
      const learning = await client.callTool({
        name: 'ask_followup',
        arguments: { question: 'Can Mohsin learn unfamiliar tools?' }
      })
      expect(learning.structuredContent.answers[0].answer).toBe(
        expected.learningApproach
      )
      const unknown = await client.callTool({
        name: 'ask_followup',
        arguments: { question: 'What is his favourite dessert?' }
      })
      expect(unknown.structuredContent.status).toBe('not_established')
      const { resources } = await client.listResources()
      expect(resources).toHaveLength(2)
      const resource = await client.readResource({
        uri: 'https://mohsinht.com/profile.json'
      })
      expect(JSON.parse(resource.contents[0].text)).toEqual(expected)
      const invalid = await client.callTool({
        name: 'verify_claim',
        arguments: { query: 'x'.repeat(301) }
      })
      expect(invalid.isError).toBe(true)
    } finally {
      await client.close()
    }
  })
}

test('MCP rejects malformed input, oversized bodies, and untrusted origins', async ({
  request
}) => {
  const malformed = await request.post('/api/mcp', {
    headers,
    data: '{invalid'
  })
  expect(malformed.status()).toBe(400)
  const tooLarge = await request.post('/api/mcp', {
    headers,
    data: JSON.stringify({ value: 'x'.repeat(17000) })
  })
  expect(tooLarge.status()).toBe(413)
  const foreign = await request.post('/api/mcp', {
    headers: { ...headers, Origin: 'https://untrusted.example' },
    data: { jsonrpc: '2.0', id: 1, method: 'tools/list' }
  })
  expect(foreign.status()).toBe(403)
  expect((await request.get('/api/mcp')).status()).toBe(405)
  expect(
    (await request.fetch('/api/mcp', { method: 'OPTIONS' })).status()
  ).toBe(204)
})

test('article metadata follows the same frontmatter as the public writing catalog', async ({
  request
}) => {
  const profile = await (await request.get('/profile.json')).json()
  for (const article of profile.writing) {
    const response = await request.get(new URL(article.url).pathname)
    await expect(response).toBeOK()
    const html = await response.text()
    const schemas = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
      )
    ].map((match) => JSON.parse(match[1]))
    const schema = schemas.find((item) => item['@type'] === 'BlogPosting')
    expect(schema.headline).toBe(article.title)
    expect(schema.datePublished).toBe(article.publishedAt)
    expect(schema.dateModified).toBe(article.updatedAt)
    expect(html).toContain(
      `path=${encodeURIComponent(new URL(article.url).pathname)}`
    )
  }
})
