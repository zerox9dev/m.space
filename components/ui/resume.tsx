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
    title: 'Digital Product UX/UI Designer & Developer',
    email: 'mirvald.vadim@icloud.com',
    website: 'mirvald.space',
    photoUrl: '/avatar.png', // Путь к фотографии
    summary: '👋 Привет! Я Product UI/UX дизайнер, объединяющий в себе страсть к минимализму и созданию дизайн-систем с базовыми знаниями front-end и back-end разработки. Мой опыт и умения позволяют мне выявлять и раскрывать весь потенциал больших проектов, но я также открыт для меньших задач, внося свой вклад и помощь. Я ценю долгосрочные отношения с клиентами и стремлюсь к совместному росту и успеху.'
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
      
      <div id="resume-content" className="bg-white dark:bg-zinc-900 text-black dark:text-zinc-200 p-4 rounded-sm print:bg-white print:dark:bg-white print:text-black print:w-full print:max-w-none print:m-0 print:p-4">
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
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex justify-center mb-4 md:mb-0 md:mr-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                <Image 
                  src={personalInfo.photoUrl} 
                  alt={personalInfo.name} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-1 print:text-black">{personalInfo.name}</h1>
              <p className="text-xl mb-2 print:text-black">{personalInfo.title}</p>
              <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-600 print:text-gray-800">
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
            I have 6+ years of experience in a freelance role on various projects, including NDA work. During this time, gained an understanding of product numbers and learned how to effectively work with analytical tools like Amplitude to make informed design decisions.
            </p>
            
            <p className="mt-4">
            I actively use AI to accelerate workflows and increase productivity when creating products. This allows me to offer innovative solutions and optimize the user experience with modern technologies.
            </p>
            
            <p className="mt-4">
            I am also learning coding, as I believe that a product designer should understand the technical aspects of implementing their solutions. This helps me create interfaces that not only meet business requirements but are also realistic in technical implementation.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Skills</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Design</h3>
              <p>
              I specialize in UX audits for iOS/Android applications and MVP development for startups. My experience includes designing dashboards, SaaS solutions, and various platforms. I create effective websites and landing pages with a focus on marketing goals. One of my strengths is conducting deep UX/UI audits with recommendations for improvement and detailed feedback.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Development</h3>
              <p>
              In the development field, I focus on creating Telegram bots on Python, implementing data parsing solutions, and AI automation (including working with OpenAI and web scraping). I also work on frontend development using Next.js, React, and Tailwind, which allows me to turn design concepts into working products.
              </p>
            </div>
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
            
            <h3 className="text-lg font-medium mt-6 mb-3">Certificates</h3>
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
          
          <div>
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">Contact</h2>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center print:text-gray-800"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 