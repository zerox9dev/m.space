'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaXTwitter, FaLinkedin, FaGlobe, FaFilePdf, FaPrint, FaCertificate, FaArrowLeft } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Resume() {
  const router = useRouter()
  
  // Информация для резюме
  const personalInfo = {
    name: 'Vadym Mirvald',
    title: 'Product Designer & Developer',
    email: 'mirvald.vadim@icloud.com',
    website: 'mirvald.space',
    summary: 'Product-дизайнер з технічним бекґраундом: UX, фронтенд і AI‑боти.Проєктую прості інтерфейси, запускаю MVP, автоматизую за допомогою GPT. Вірю, що **дані важливіші за припущення** — працюю з Amplitude та GA для прийняття рішень.'
  }



  const experience = [
    {
      position: 'Full-time Product UX/UI Designer',
      company: 'Freelancehunt',
      period: '2023 - Present',
      description: 'Working on the internal product design of Freelancehunt platform, where I previously found projects as a freelancer since 2019. Currently leading design initiatives for the main service and other brand products, focusing on improving user experience and interface design.'
    },
    {
      position: 'Freelance Telegram Bot Developer',
      company: 'Freelancehunt & Upwork',
      period: '2023 - Present',
      description: 'Developing custom Telegram bots using Python and Aiogram, implementing data parsing solutions, and integrating AI automation features for various clients.'
    },
    {
      position: 'Freelance UI/UX Designer',
      company: 'Freelancehunt & Upwork',
      period: '2019 - 2023',
      description: 'Worked on various NDA and public projects acquired through multiple freelance platforms and word of mouth. Created intuitive UX/UI designs for clients in fintech, EdTech, and SaaS sectors, improving performance metrics by 15-30% through thoughtful design solutions.'
    }
  ]

  const projects = [
    {
      name: 'Holyheld',
      description: 'One Card for All Crypto Natives',
      link: 'https://holyheld.com'
    },
    {
      name: 'Mou.today',
      description: 'Your Guide to Ukrainian Medicine',
      link: 'https://mou.today'
    },
    {
      name: 'CRM TurboWork',
      description: 'CRM for brokerage companies',
      link: '-'
    }
  ]
  
  const certificates = [
    {
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'Google',
      year: '2025',
      url: 'https://coursera.ora/verifv/VNNIVIRP71V3'
    },
    {
      name: 'Principles of UX/UI Design',
      issuer: 'Meta',
      year: '2025',
      url: 'https://coursera.org/verify/5HSHNXKESE4G'
    }
  ]

  const socialLinks = [
    {
      name: 'Website',
      url: 'https://mirvald.space',
      icon: <FaGlobe className="inline mr-1" />
    },
    {
      name: 'Github',
      url: 'https://github.com/mirvald-space',
      icon: <FaGithub className="inline mr-1" />
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/mirvald_',
      icon: <FaXTwitter className="inline mr-1" />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mirvald/',
      icon: <FaLinkedin className="inline mr-1" />
    }
  ]

  // Функция для печати резюме через браузер
  const printResume = () => {
    window.print()
  }
  
  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    router.back()
  }

  return (
    <>
      <button 
        onClick={goBack}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-sm transition-colors flex items-center gap-2 print:hidden"
      >
        <FaArrowLeft /> Back
      </button>
      
      <div id="resume-content" className="bg-white dark:bg-zinc-900 text-black dark:text-zinc-200 p-4 rounded-sm ring-3 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 print:bg-white print:dark:bg-white print:text-black print:w-full print:max-w-none print:m-0 print:p-4">
        <div className="flex justify-between items-center mb-6 print:hidden">
          <h2 className="text-2xl font-bold">Resume</h2>
          <button 
            onClick={printResume}
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-sm transition-colors flex items-center gap-2"
          >
            <FaPrint /> Print / Save PDF
          </button>
        </div>

        <div className="print:block">
          <div className="mb-6">
            <div className="text-left">
              <h1 className="text-3xl font-bold mb-1 print:text-black">{personalInfo.name}</h1>
              <p className="text-xl mb-2 print:text-black">{personalInfo.title}</p>
              <div className="flex gap-4 text-sm text-gray-600 print:text-gray-800">
                <span>{personalInfo.email}</span>
                <span>•</span>
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 print:text-gray-800">
                  {personalInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">About me</h2>
            <p>
            Product-дизайнер з технічним бекґраундом: UX/UI, фронтенд і AI‑боти.  
Проєктую прості працюючі інтерфейси, запускаю MVP, автоматизую за допомогою GPT.  
Вважаю, що дані важливіші за припущення — працюю з Amplitude та GA для прийняття рішень.

            </p>

          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
              <p>
              UX / Product: wireframes, flows, usability testing, MVP-логіка  
              Analytics: Amplitude, Google Analytics, JTBD, event design  
              Dev / AI: HTML/CSS, Tailwind, Next.js, Supabase, GPT, Telegram Bots  
              Інструменти: Figma, FigJam, Notion, Vercel, VS Code
              </p>
            
            
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Work Experience & Certificates</h2>
            {experience.map((job, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-medium">{job.position}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-1 print:text-gray-800">
                  <span>{job.company}</span>
                  <span>{job.period}</span>
                </div>
                <p className="text-sm">{job.description}</p>
              </div>
            ))}
            
            <h3 className="text-lg font-medium mt-6 mb-3">Education / Certifications</h3>
            {certificates.map((cert, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between w-full">
                  <div className="flex">
                    <FaCertificate className="text-amber-500 mt-1 mr-2 print:text-gray-800" />
                    <div>
                      <h3 className="text-lg font-medium">
                        <Link 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center print:text-gray-800"
                        >
                          {cert.name}
                        </Link>
                      </h3>
                      <span className="text-sm text-gray-600 print:text-gray-800">{cert.issuer}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 print:text-gray-800">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 