"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Magnetic } from '@/components/ui/magnetic'
import { FaArrowRight } from 'react-icons/fa6'
import ProjectImage from '@/components/ui/project-image'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type ProjectProps = {
  id: string
  name: string
  description: string
  image: string
  link: string
  slug?: string
}

export function ProjectCard({ name, description, image, link, slug }: Omit<ProjectProps, 'id'>) {
  // If we have a slug, use internal routing, otherwise use external link
  const isInternal = !!slug;
  const router = useRouter();
  
  const LinkWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isInternal) {
      return (
        <Link href={`/projects/${slug}`} className="mb-1.5 block text-base font-medium group hover:text-blue-600 dark:hover:text-blue-400">
          {children}
        </Link>
      );
    }
    
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-1.5 block text-base font-medium group hover:text-black dark:hover:text-zinc-200"
      >
        {children}
      </Link>
    );
  };

  const handleImageClick = () => {
    if (isInternal && slug) {
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <motion.div
      className="relative rounded-sm bg-white p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4 flex flex-col h-full">
        <div className="mb-3">
          <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <LinkWrapper>
              <span className="inline-flex items-center gap-1">
                {name}
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </LinkWrapper>
          </Magnetic>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {description}
          </p>
        </div>
        
        <div 
          className="cursor-pointer mt-auto" 
          onClick={handleImageClick}
          style={{
            height: '200px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f8f8', // Светлый фон для светлой темы
          }}
        >
          <ProjectImage src={image} />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectList({ projects }: { projects: ProjectProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          link={project.link}
          slug={project.id === 'project1' ? 'mou-today' : project.id === 'project2' ? 'holyheld' : undefined}
        />
      ))}
    </div>
  );
}