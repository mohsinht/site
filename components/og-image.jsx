import { ImageResponse } from 'next/og'
import { profile } from '../data/profile'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

export function OpenGraphImage({
  eyebrow = 'MOHSINHAYAT.COM',
  title = profile.name,
  description = profile.title
} = {}) {
  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a1020',
        color: '#f8fafc',
        padding: '68px',
        fontFamily: 'sans-serif',
        backgroundImage:
          'radial-gradient(circle at 86% 12%, #243b55, transparent 30%)'
      }}
    >
      <div
        style={{
          display: 'flex',
          color: '#f4b942',
          fontSize: 22,
          letterSpacing: 4
        }}
      >
        {eyebrow}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 950 }}>
        <div
          style={{
            display: 'flex',
            fontSize: 78,
            lineHeight: 1.04,
            fontWeight: 700,
            letterSpacing: -3
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 26,
            color: '#cbd5e1',
            fontSize: 32,
            lineHeight: 1.3
          }}
        >
          {description}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '1px solid #334155',
          paddingTop: 24,
          color: '#94a3b8',
          fontSize: 22
        }}
      >
        <span>Applied AI · Backend Systems</span>
        <span>Lahore, Pakistan</span>
      </div>
    </div>,
    ogSize
  )
}
