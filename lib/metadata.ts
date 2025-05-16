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
  const defaultOgImage = `${WEBSITE_URL}/m.png` // Use existing image.png
  
  return {
    title: title,
    description: description,
    metadataBase,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: title,
      description: description,
      siteName: 'm.space',
      images: [ogImage || defaultOgImage],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogImage || defaultOgImage],
    },
  }
} 