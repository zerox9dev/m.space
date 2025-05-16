import { WEBSITE_URL } from './constants'
import { Metadata } from 'next'

interface GenerateMetadataProps {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}

export function generateMetadata({
  title,
  description,
  path = '/',
  ogImage,
}: GenerateMetadataProps): Metadata {
  const metadataBase = new URL(WEBSITE_URL)
  const canonicalUrl = `${WEBSITE_URL}${path}`
  
  return {
    title: title,
    description: description,
    metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: ogImage ? {
      images: [ogImage],
    } : undefined,
  }
} 