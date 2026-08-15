import {
  OpenGraphImage,
  ogContentType,
  ogSize
} from '../../components/og-image'
export const size = ogSize
export const contentType = ogContentType
export const runtime = 'edge'
export default function Image() {
  return OpenGraphImage({
    eyebrow: 'ENGINEERING WRITING',
    title: 'Notes and retrospectives',
    description: 'Public writing by Mohsin Hayat'
  })
}
