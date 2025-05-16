import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export function generateBlogMetadata({
  title,
  description,
  slug,
  ogImage,
}: {
  title: string
  description: string
  slug: string
  ogImage?: string
}): Metadata {
  return generateMetadata({
    title: `${title} | m.space blog`,
    description,
    path: `/blog/${slug}`,
    ogImage,
  })
} 