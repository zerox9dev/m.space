import { motion } from 'motion/react'
import Image from 'next/image'

type WorkExperienceProps = {
  id: string
  title: string
  company: string
  link: string
  start: string
  end: string
  logo: string
}

export function WorkExperienceCard({ title, company, link, start, end, logo }: Omit<WorkExperienceProps, 'id'>) {
  return (
    <motion.div
      className="relative rounded-2xl bg-white p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <h4 className="text-base font-medium">{title}</h4>
          <span className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {start} — {end}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center flex-shrink-0 overflow-hidden">
            <Image 
              src={logo} 
              alt={`${company} logo`} 
              width={20} 
              height={20} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
          >
            {company}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function WorkExperienceList({ experiences }: { experiences: WorkExperienceProps[] }) {
  return (
    <div className="space-y-5">
      {experiences.map((work) => (
        <WorkExperienceCard
          key={work.id}
          title={work.title}
          company={work.company}
          link={work.link}
          start={work.start}
          end={work.end}
          logo={work.logo}
        />
      ))}
    </div>
  )
} 