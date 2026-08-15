import { pageMetadata } from '../../data/profile'
export const metadata = pageMetadata({
  title: 'Recommendations for Mohsin Hayat',
  description:
    'Verified LinkedIn recommendations for Mohsin Hayat from engineering leaders and collaborators.',
  path: '/recommendations',
  image: '/recommendations/opengraph-image'
})
export default function RecommendationsLayout({ children }) {
  return children
}
