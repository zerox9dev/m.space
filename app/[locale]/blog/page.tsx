import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  return generateSiteMetadata({
    title: 'Blog | m.space',
    description: 'Articles about design, development, and automation',
    path: `/${params.locale}/blog`,
  })
}

export default function BlogIndexPage() {
  const t = useTranslations('Blog')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      {/* Your blog listing content */}
    </div>
  )
} 