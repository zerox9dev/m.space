import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import { FaArrowRight } from 'react-icons/fa6'
import ProjectImage from '@/components/ui/project-image'

type ProjectProps = {
  id: string
  name: string
  description: string
  image: string
  link: string
}

export function ProjectCard({ name, description, image, link }: Omit<ProjectProps, 'id'>) {
  return (
    <motion.div
      className="relative rounded-2xl bg-white p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4">
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1.5 block text-base font-medium group hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span className="inline-flex items-center gap-1">
              {name}
              <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
        </Magnetic>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <ProjectImage src={image} />
      </div>
    </motion.div>
  )
}

export function ProjectList({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  )
} 