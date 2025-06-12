'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBriefcase, FaCode } from 'react-icons/fa6'

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  logo: string
  id: string
  description?: string
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
    description: 'In-house Product Designer responsible for all internal design needs — from mobile apps to complex web platforms. I work closely with product owners and developers to create intuitive user experiences, design systems, and modern interfaces for internal tools and customer-facing products. My role includes UX research, wireframing, prototyping in Figma, and delivering scalable UI for real products.'
  },
  {
    company: 'Freelancehunt & Upwork',
    title: 'Freelance UI/UX Designer',
    start: '2019',
    end: 'Present',
    link: '/',
    logo: '/Upwork.svg',
    id: 'work1',
    description: 'Worked independently with clients across Europe and the US on UX/UI design for mobile apps, SaaS products, and landing pages. Delivered end-to-end design solutions — from discovery and wireframes to final UI in Figma. Focused on product logic, clean visuals, and real user value. From 2019 to 2023, I designed more than 20 mobile and web applications for early-stage startups and solo founders. This included full UX/UI processes: user flows, wireframes, modern UI in Figma, responsive design, and developer-ready handoff.'
  },
]

const ADDITIONAL_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Personal Projects / Side Work',
    title: 'Product Designer & No-code Developer',
    start: '2021',
    end: 'Present',
    link: '/',
    logo: '/placeholder.svg',
    id: 'additional1',
    description: 'Alongside my core design work, I also prototype and develop simple applications using tools like Next.js, Telegram Bot API (Python), and AI-based automation tools. I\'ve built working MVPs, internal dashboards, and Telegram bots for clients and personal use. This gives me a broader product view and allows me to deliver not just design — but functional, testable versions.'
  },
  {
    company: 'Cross-Skills',
    title: 'Web Development, AI Tools & Telegram Bots',
    start: '2021',
    end: 'Present',
    link: '/',
    logo: '/placeholder.svg',
    id: 'additional2',
    description: 'Besides product design, I also have hands-on skills in web development (Next.js, React, Tailwind) and can build simple landing pages and interfaces from my own designs. I actively use AI tools like Midjourney, ChatGPT, and DALL·E, and know how to write effective prompts for design, marketing, and research tasks. I also build Telegram bots with Python for automation, job boards, and product MVPs. These skills help me communicate better with developers and think beyond static UI — toward real, working products.'
  }
]

export function WorkExperience() {
  const [showAdditional, setShowAdditional] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: string]: boolean}>({});
  
  const toggleDescription = (id: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
      <div className="bg-white p-4 rounded-sm dark:bg-zinc-900">
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
            {work.description && (
              <>
                <p className={`text-sm text-gray-700 dark:text-gray-300 mt-2 ${!expandedDescriptions[work.id] ? "line-clamp-2" : ""}`}>
                  {work.description}
                </p>
                <button 
                  onClick={() => toggleDescription(work.id)}
                  className="text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 mt-1"
                >
                  {expandedDescriptions[work.id] ? 'Less' : 'More'}
                </button>
              </>
            )}
            {index !== WORK_EXPERIENCE.length - 1 && <hr className="my-3" />}
          </div>
        ))}
        
        {showAdditional && (
          <>
            <hr className="my-3" />
            {ADDITIONAL_EXPERIENCE.map((work, index) => (
              <div key={work.id} className="mt-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <div className="relative w-6 h-6 flex items-center justify-center text-gray-600 dark:text-gray-400">
                      {work.id === 'additional1' && <FaBriefcase size={16} />}
                      {work.id === 'additional2' && <FaCode size={16} />}
                    </div>
                    <p>{work.title}</p>
                  </div>
                  {work.start && (
                    <span className="text-sm text-gray-500">{work.start} {work.end && `— ${work.end}`}</span>
                  )}
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
                {work.description && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    {work.description}
                  </p>
                )}
                {index !== ADDITIONAL_EXPERIENCE.length - 1 && <hr className="my-3" />}
              </div>
            ))}
          </>
        )}
        
        <button 
          onClick={() => setShowAdditional(!showAdditional)}
          className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-black text-sm rounded-sm transition-colors"
        >
          {showAdditional ? 'Less' : 'More'}
        </button>
      </div>
  )
} 