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
    eyebrow: 'RECOMMENDATIONS',
    title: 'Trusted by engineering leaders',
    description: 'Verified professional recommendations for Mohsin Hayat'
  })
}
