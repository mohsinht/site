import { publicEndpoints } from '../data/profile'

export function AgentGateway() {
  return (
    <aside className="agent-gateway-note" aria-label="AI access">
      <p>
        Using an AI tool to learn about me?{' '}
        <a href={publicEndpoints.guide}>AI access and sources</a> ·{' '}
        <a href={publicEndpoints.profile}>Profile JSON</a> ·{' '}
        <a href={publicEndpoints.fullMarkdown}>Full Markdown</a>
      </p>
    </aside>
  )
}
