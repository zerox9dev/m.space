import { generateMetadata } from '@/lib/metadata'
import { Metadata } from 'next'
import { PROJECTS } from '../data'
import { ProjectList } from '@/components/ui/project-card'

export const metadata: Metadata = generateMetadata({
  title: 'Projects | m.space',
  description: 'My design and development projects',
  path: '/projects',
})

export default function ProjectsIndexPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-6">Projects</h1>
      <ProjectList projects={PROJECTS} />
    </div>
  )
} 