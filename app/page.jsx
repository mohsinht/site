import { HomeJsonLd } from '../components/json-ld'
import { PortfolioHome } from '../components/portfolio'
import { pageMetadata } from '../data/profile'

export const metadata = pageMetadata({
  title: 'Mohsin Hayat | Senior Software Engineer in Applied AI',
  description:
    'Mohsin Hayat is a senior software engineer in Lahore building applied AI, Python services, and reliable backend systems for international teams.',
  path: '/'
})

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <PortfolioHome />
    </>
  )
}
