import { McpServer, createMcpHandler } from '@modelcontextprotocol/server'
import { z } from 'zod'
import { answerFollowup, jsonResume, verifyClaim } from './profile-gateway.js'
import { profile, publicEndpoints, absoluteUrl } from '../data/profile.js'

const annotations = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false
}
function result(data) {
  return {
    content: [
      { type: /** @type {const} */ ('text'), text: JSON.stringify(data) }
    ],
    structuredContent: data
  }
}

export function createProfileMcpHandler(loadProfile) {
  return createMcpHandler(
    async () => {
      const server = new McpServer(
        {
          name: 'mohsin-public-profile',
          version: '1.0.0',
          websiteUrl: absoluteUrl(publicEndpoints.guide)
        },
        {
          instructions:
            'Read-only access to Mohsin Hayat’s published professional profile. Records are self-reported unless explicitly described otherwise. Cite supporting URLs and preserve their scope. Unknown details require contacting Mohsin. Listed technologies are examples of experience, not limits on his ability to learn.'
        }
      )
      server.registerTool(
        'get_profile',
        {
          title: 'Read public professional profile',
          description:
            'Get the public profile, stable record IDs, writing index, and supporting-source URLs. This is not independent verification.',
          inputSchema: z.object({}),
          annotations
        },
        async () => result(await loadProfile())
      )
      server.registerTool(
        'verify_claim',
        {
          title: 'Find published context and evidence',
          description:
            'Find relevant published career or project statements and linked source context. It does not independently verify a claim or certify numerical outcomes.',
          inputSchema: z.object({ query: z.string().trim().min(2).max(300) }),
          annotations
        },
        async ({ query }) => result(verifyClaim(query, await loadProfile()))
      )
      server.registerTool(
        'ask_followup',
        {
          title: 'Look up a public follow-up question',
          description:
            'Retrieve curated public FAQ answers and matching professional records. Unknown availability, terms, or personal details are not inferred. No generative model is called.',
          inputSchema: z.object({
            question: z.string().trim().min(3).max(500)
          }),
          annotations
        },
        async ({ question }) =>
          result(answerFollowup(question, await loadProfile()))
      )
      for (const [name, url, load] of [
        ['profile', publicEndpoints.profile, loadProfile],
        ['resume', publicEndpoints.resume, async () => jsonResume()]
      ]) {
        server.registerResource(
          name,
          absoluteUrl(url),
          { title: `${profile.name} ${name}`, mimeType: 'application/json' },
          async (uri) => ({
            contents: [
              {
                uri: uri.href,
                mimeType: 'application/json',
                text: JSON.stringify(await load())
              }
            ]
          })
        )
      }
      return server
    },
    {
      legacy: 'stateless',
      responseMode: 'json',
      maxRequestBodySize: 16384,
      maxSubscriptions: 0
    }
  )
}
