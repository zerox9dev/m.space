'use client'

import React from 'react'
import Image from 'next/image'
import { FaGithub, FaXTwitter, FaLinkedin, FaGlobe, FaFilePdf, FaPrint, FaCertificate, FaArrowLeft } from 'react-icons/fa6'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CERTIFICATES, ALL_EXPERIENCE } from './work-experience-card'
import { useTranslations } from 'next-intl'

export function Resume() {
  const router = useRouter()
  
  // Try to use translations, but fall back to direct values if translation fails
  let t;
  try {
    t = useTranslations();
  } catch (e) {
    // Create a fallback function that just returns the key
    t = (key: string) => {
      if (key === 'workExperience.freelancehunt') {
        return 'Working on the internal product design of Freelancehunt platform, focusing on improving user experience and interface design.';
      }
      if (key === 'workExperience.freelance') {
        return 'Created intuitive UX/UI designs for clients in fintech, EdTech, and SaaS sectors, improving performance metrics.';
      }
      return key;
    };
  }
  
  // Информация для резюме
  const personalInfo = {
    name: 'Vadym Mirvald',
    title: 'Product Designer & Developer',
    email: 'mirvald.vadim@icloud.com',
    website: 'mirvald.space',
    summary: 'Product-дизайнер з технічним бекґраундом: UX, фронтенд і AI‑боти.Проєктую прості інтерфейси, запускаю MVP, автоматизую за допомогою GPT. Вірю, що **дані важливіші за припущення** — працюю з Amplitude та GA для прийняття рішень.'
  }

  // Функция для печати резюме через браузер
  const printResume = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }
  
  // Функция для возврата на предыдущую страницу
  const goBack = () => {
    router.back()
  }

  return (
    <>
      <div className="flex items-center mb-4 gap-4 justify-between">
        <button 
          onClick={goBack}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-sm transition-colors flex items-center gap-2 print:hidden"
        >
          <FaArrowLeft /> Back
        </button>
        
        <button 
          onClick={printResume}
          className="px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-sm transition-colors flex items-center gap-2 print:hidden"
        >
          <FaPrint /> Print / Save PDF
        </button>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-zinc-200 p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md relative mt-6 print:bg-white print:dark:bg-white print:text-black print:w-full print:max-w-none print:m-0 print:p-4" id="resume-content">
        <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
          <span>Resume</span>
        </div>

        <div className="print:block">
          <div className="mb-4">
            <div className="text-left">
              <h1 className="text-xl font-bold mb-1 print:text-black">{personalInfo.name}</h1>
              <p className="text-lg mb-2 print:text-black">{personalInfo.title}</p>
              <div className="flex gap-4 text-sm text-gray-600 print:text-gray-800">
                <span>{personalInfo.email}</span>
                <span>•</span>
                <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 print:text-gray-800">
                  {personalInfo.website}
                </a>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">About me</h2>
            <p>
            Product-дизайнер з технічним бекґраундом: UX/UI, фронтенд і AI‑боти.  
Проєктую прості працюючі інтерфейси, запускаю MVP, автоматизую за допомогою GPT.  
Вважаю, що дані важливіші за припущення — працюю з Amplitude та GA для прийняття рішень.

            </p>

          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
              <p>
              <b>UX/UI:</b> wireframes, flows, usability testing, prototypes<br/>  
              <b>Analytics:</b> Amplitude, Google Analytics, JTBD<br/>  
              <b>Dev/AI:</b> HTML/CSS/JS, Tailwind, Next.js, Supabase, GPT, Python<br/>  
              <b>Tools:</b> Figma, FigJam, Notion, Vercel, VS Code<br/>  
              </p>
            
            
          </div>

          <div className="mb-4">
            <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2">Work Experience & Certificates</h2>
            {ALL_EXPERIENCE.map((job, index) => (
              <div key={job.id} className="mb-4">
                <h3 className="text-base font-medium">{job.title}</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-1 print:text-gray-800">
                  <span>{job.link.includes('freelancehunt') ? 'Freelancehunt' : 'Freelancehunt & Upwork'}</span>
                  <span>{job.start} - {job.end}</span>
                </div>
                <p className="text-sm">{t(job.descriptionKey)}</p>
              </div>
            ))}
            
            <h3 className="text-base font-medium mt-6 mb-3">Education / Certifications</h3>
            {CERTIFICATES.map((cert, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between w-full">
                  <div className="flex">
                    <FaCertificate className="text-amber-500 mt-1 mr-2 print:text-gray-800" />
                    <div>
                      <h3 className="text-base font-medium">
                        <Link 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center print:text-gray-800"
                        >
                          {cert.name}
                        </Link>
                      </h3>
                      <span className="text-sm text-gray-600 print:text-gray-800">{cert.logoPath.includes('Google') ? 'Google' : 'Meta'}</span>
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