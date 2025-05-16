import { generateMetadata } from '@/lib/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generateMetadata({
  title: 'Blog | m.space',
  description: 'Articles about design, development, and automation',
  path: '/blog',
})

// Import your blog listing component here
// This is a placeholder - implement your actual blog index page
export default function BlogIndexPage() {
  return (
    <div>
      <h1>Blog</h1>
      {/* Your blog listing content */}
    </div>
  )
} 