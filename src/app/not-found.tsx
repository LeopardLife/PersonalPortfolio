import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}
async function getSiteData(domain: string | null) {
  if (!domain) {
    throw new Error('Domain is required to fetch site data.')
  }

  // Simulate fetching data from an API or database
  const response = await fetch(`https://${domain}/api/site-data`)
  if (!response.ok) {
    throw new Error('Failed to fetch site data.')
  }

  const data = await response.json()
  return data
}
