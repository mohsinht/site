import { HomeJsonLd } from '../components/json-ld'
import { PortfolioHome } from '../components/portfolio'
import { pageMetadata } from '../data/profile'

export const metadata = pageMetadata({
  title: 'Mohsin Hayat | Senior Software Engineer, Applied AI',
  description:
    'Mohsin Hayat is a Senior Software Engineer specializing in applied AI and backend systems. He builds reliable AI and backend systems for international teams from Lahore, Pakistan.',
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
