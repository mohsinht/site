import { JsonLd } from '../../components/json-ld'
import {
  absoluteUrl,
  pageMetadata,
  publicEndpoints,
  publicFaq,
  profile
} from '../../data/profile'
import { evidencePolicy } from '../../lib/profile-gateway'

export const metadata = pageMetadata({
  title: 'AI access',
  description:
    'Public profile data, source context, and read-only MCP access for Mohsin Hayat.',
  path: '/ai'
})

export default function AiAccessPage() {
  return (
    <main id="main-content" className="writing-list" tabIndex={-1}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: publicFaq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer }
          }))
        }}
      />
      <h1>AI access</h1>
      <p>
        Using an AI tool to learn about {profile.name}? These public interfaces
        share the same professional profile data as this site and resume.
      </p>
      <ul>
        <li>
          <a href={publicEndpoints.profile}>Profile JSON</a>: stable record IDs,
          public facts, FAQs, and source links.
        </li>
        <li>
          <a href={publicEndpoints.resume}>JSON Resume</a>: a portable career
          summary.
        </li>
        <li>
          <a href={publicEndpoints.markdown}>Full profile in Markdown</a>:
          readable context, including writing and supporting sources.
        </li>
        <li>
          <a href={publicEndpoints.index}>llms.txt</a>: a compact resource
          index.
        </li>
      </ul>
      <h2>Connect through MCP</h2>
      <p>Use this Streamable HTTP URL in a compatible client’s MCP settings:</p>
      <p>
        <code>{absoluteUrl(publicEndpoints.mcp)}</code>
      </p>
      <p>
        The read-only tools are <code>get_profile</code>,{' '}
        <code>verify_claim</code>, and <code>ask_followup</code>. They retrieve
        public information without calling an LLM or storing conversations.
        Profile and resume resources are also available. Server-to-server
        clients and same-origin browser requests are supported.
      </p>
      <h2>Sources and limits</h2>
      <p>{evidencePolicy}</p>
      <p>
        Responses include publication dates, record IDs, and source URLs where
        available. Unpublished details and commitments should be confirmed
        directly with Mohsin. Listed technologies describe experience; they are
        not limits on what he can learn.
      </p>
      <h2>Common follow-up questions</h2>
      {publicFaq.map((item) => (
        <section key={item.id} id={item.id}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </section>
      ))}
    </main>
  )
}
