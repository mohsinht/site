import { llmsFull } from '../../lib/public-content'
export const dynamic = 'force-static'
export function GET() {
  return new Response(llmsFull(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' }
  })
}
