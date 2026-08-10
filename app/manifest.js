import { profile } from '../data/profile'

export default function manifest() {
  return {
    name: profile.name,
    short_name: 'Mohsin Hayat',
    description: profile.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1020',
    theme_color: '#0a1020',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }]
  }
}
