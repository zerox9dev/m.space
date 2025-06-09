'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  logo: string
  id: string
}

// Work experience data moved from app/data.ts
const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelancehunt',
    title: 'Full-time Product UX/UI Designer',
    start: '2023',
    end: 'Present',
    link: 'https://freelancehunt.com/',
    logo: '/Freelancehunt_favicon.ico',
    id: 'work2',
  },
  {
    company: 'Freelancehunt & Upwork',
    title: 'Freelance UI/UX Designer',
    start: '2019',
    end: '2023',
    link: '/',
    logo: '/Upwork.svg',
    id: 'work1',
  },
]

export function WorkExperience() {
  return (

      <div className="bg-white p-4 rounded-sm">
        <h2>Work experience</h2>
        {WORK_EXPERIENCE.map((work, index) => (
          <div key={work.id} className={index !== 0 ? "mt-4" : ""}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="relative w-6 h-6">
                  <Image 
                    src={work.logo} 
                    alt={`${work.company} logo`} 
                    width={20} 
                    height={20} 
                    className="object-contain"
                  />
                </div>
                <p>{work.title}</p>
              </div>
              <span className="text-sm text-gray-500">{work.start} — {work.end}</span>
            </div>
            <div>
              <Link
                href={work.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-gray-500 dark:text-white dark:hover:text-white"
              >
                {work.company}
              </Link>
            </div>
            {index !== WORK_EXPERIENCE.length - 1 && <hr className="my-3" />}
          </div>
        ))}
      </div>
  )
} 