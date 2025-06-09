'use client'

import React from 'react'

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
    company: 'Freelancing Freelancehunt & Upwork',
    title: 'UI/UX Designer',
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
              <strong>{work.title}</strong>
              <span className="text-sm text-gray-500">{work.start} — {work.end}</span>
            </div>
            <div>
              <a 
                href={work.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                {work.company}
              </a>
            </div>
            {index !== WORK_EXPERIENCE.length - 1 && <hr className="my-3" />}
          </div>
        ))}
      </div>
  )
} 