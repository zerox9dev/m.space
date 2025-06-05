import { Metadata } from 'next'
import { generateMetadata } from '@/lib/metadata'

export function generateProjectMetadata({
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
    title: `${title} | m.space projects`,
    description,
    path: `/projects/${slug}`,
    ogImage,
  })
} 