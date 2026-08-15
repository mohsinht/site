import { pageMetadata } from '../../data/profile'

export const metadata = pageMetadata({
  title: 'Mohsin Hayat Resume | Applied AI and Backend Systems',
  description:
    'Resume of Mohsin Hayat, Senior Software Engineer specializing in applied AI, LLM agents, Python services, and backend systems.',
  path: '/resume',
  image: '/resume/opengraph-image'
})

export default function ResumeLayout({ children }) {
  return children
}
