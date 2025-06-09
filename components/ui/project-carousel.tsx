"use client"

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ProjectCard } from './project-card'

type ProjectProps = {
  id: string
  name: string
  description: string
  image: string
  link: string
  slug?: string
}

export function ProjectCarousel({ projects }: { projects: ProjectProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxVisibleProjects, setMaxVisibleProjects] = useState(2)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  // Update visible projects based on screen width
  useEffect(() => {
    const updateVisibleProjects = () => {
      if (window.innerWidth < 640) {
        setMaxVisibleProjects(1)
      } else {
        setMaxVisibleProjects(2)
      }
    }

    updateVisibleProjects()
    window.addEventListener('resize', updateVisibleProjects)
    return () => window.removeEventListener('resize', updateVisibleProjects)
  }, [])

  // Calculate total number of pages
  const totalPages = useMemo(() => {
    return Math.ceil(projects.length / maxVisibleProjects)
  }, [projects.length, maxVisibleProjects])

  // Generate array of page indices
  const pageIndices = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i)
  }, [totalPages])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex + maxVisibleProjects >= projects.length ? 0 : prevIndex + maxVisibleProjects
    )
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, projects.length - maxVisibleProjects) : prevIndex - maxVisibleProjects
    )
  }

  const visibleProjects = projects.slice(
    currentIndex,
    Math.min(currentIndex + maxVisibleProjects, projects.length)
  )

  const goToSlide = (pageIndex: number) => {
    setDirection(pageIndex * maxVisibleProjects > currentIndex ? 1 : -1)
    setCurrentIndex(pageIndex * maxVisibleProjects)
  }

  // Add automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [currentIndex, maxVisibleProjects])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-sm pb-2">
        <AnimatePresence initial={false} mode="wait">
          <motion.div 
            key={currentIndex}
            className="flex gap-6"
            initial={{ x: direction * 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {visibleProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="w-full sm:w-[calc(50%-12px)] flex-shrink-0"
                style={{ minHeight: '280px' }}
              >
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  slug={project.slug || (project.id === 'project1' ? 'mou-today' : project.id === 'project2' ? 'holyheld' : undefined)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mt-4 flex justify-center gap-2">
        <div className="flex gap-3 items-center py-1">
          {pageIndices.map((pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => goToSlide(pageIdx)}
              className={`rounded-sm transition-all ${
                currentIndex === pageIdx * maxVisibleProjects
                  ? 'bg-black dark:bg-white scale-110' 
                  : 'bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
              }`}
              style={{ width: '8px', height: '8px' }}
              aria-label={`Go to page ${pageIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 