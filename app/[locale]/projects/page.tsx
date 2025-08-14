import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { ProjectList } from '@/components/ui/project-card'
import { PROJECTS } from '../../data'
import { Suspense } from 'react'

export const generateMetadata = ({ params }: { params: { locale: string } }): Metadata => {
  return generateSiteMetadata({
    title: 'Projects | m.space',
    description: 'My design and development projects',
    path: `/${params.locale}/projects`,
  })
}

export default function ProjectsIndexPage({ searchParams }: { searchParams: { tab?: string } }) {
  const t = useTranslations('Projects')

  return (
    <div>
      <h1 className="text-2xl font-medium mb-6">{t('title')}</h1>
      <Suspense fallback={null}>
        <ProjectList projects={PROJECTS} />
      </Suspense>
    </div>
  )
}