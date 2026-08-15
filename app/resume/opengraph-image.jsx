import {
  OpenGraphImage,
  ogContentType,
  ogSize
} from '../../components/og-image'
export const size = ogSize
export const contentType = ogContentType
export const runtime = 'edge'
export default function Image() {
  return (
    <OpenGraphImage
      eyebrow="Resume"
      title="Mohsin Hayat"
      description="Applied AI and Backend Systems"
    />
  )
}
