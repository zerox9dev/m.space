'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaBriefcase, FaCode, FaCertificate, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

type WorkExperience = {
  title: string
  start: string
  end: string
  link: string
  logo: string
  id: string
  description?: string
  type?: 'work' | 'additional'
  icon?: 'briefcase' | 'code'
}

type Certificate = {
  name: string
  year: string
  url: string
  logoPath: string
}

const ALL_EXPERIENCE: WorkExperience[] = [
  {
    title: 'Full-Time Product UX/UI Designer',
    start: '2023',
    end: 'Present',
    link: 'https://freelancehunt.com/',
    logo: '/Freelancehunt_favicon.ico',
    id: 'work2',
    type: 'work',
    description: 'Працюю над продуктом, UX-дизайном, фічами, користувацькими сценаріями, дизайн-системою.',
  },
  {
    title: 'Freelance UI/UX Designer',
    start: '2019',
    end: 'Present',
    link: '/',
    logo: '/Upwork.svg',
    id: 'work1',
    type: 'work',
    description: 'UX/UI для стартапів та бізнесу: понад 20+ проектов мобільних та веб-продуктів, повний цикл від ідеї до кінцевого UI.',
  },
]

const CERTIFICATES: Certificate[] = [
  {
    name: 'Foundations of User Experience (UX) Design', 
    year: '2025',
    url: 'https://coursera.org/verify/VNNIVIRP71V3',
    logoPath: '/images/companies/Google.svg'
  },
  {
    name: 'Principles of UX/UI Design',
    year: '2025',
    url: 'https://coursera.org/verify/5HSHNXKESE4G',
    logoPath: '/images/companies/Meta.svg'
  }
]

const ExperienceCard = ({ experience, isExpanded, onToggle, showDivider, alwaysExpanded = false, isFirst = false, hideMoreButton = false }: {
  experience: WorkExperience
  isExpanded: boolean
  onToggle: () => void
  showDivider: boolean
  alwaysExpanded?: boolean
  isFirst?: boolean
  hideMoreButton?: boolean
}) => {
  const { title, start, end, link, logo, description, type, icon } = experience

  // Helper to get first 3 lines of description
  const getFirst3Lines = (text: string) => {
    const lines = text.split(/\r?\n/);
    if (lines.length <= 3) return text;
    return lines.slice(0, 3).join('\n');
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="relative w-6 h-6">
            {type === 'work' ? (
              <Image 
                src={logo} 
                alt={`${title} logo`} 
                width={20} 
                height={20} 
                className="object-contain"
              />
            ) : (
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                {icon === 'briefcase' && <FaBriefcase size={16} />}
                {icon === 'code' && <FaCode size={16} />}
              </div>
            )}
          </div>
          {type === 'work' ? (
            <Link
              href={link}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-md font-medium text-black hover:text-gray-500 dark:text-white dark:hover:text-white"
            >
              {title}
            </Link>
          ) : (
            <p>{title}</p>
          )}
        </div>
        <span className="text-sm text-gray-500">{start} — {end}</span>
      </div>
      
      {description && (
        <>
          <p className={`text-md text-black dark:text-gray-300 mt-2`}>
            {isFirst && !alwaysExpanded
              ? getFirst3Lines(description)
              : description}
          </p>
        </>
      )}
      
      {showDivider && <hr className="my-3" />}
    </>
  )
}

const CertificateCard = ({ certificate, showDivider }: { 
  certificate: Certificate, 
  showDivider: boolean 
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <div className="relative w-6 h-6">
            {certificate.logoPath ? (
              <Image 
                src={certificate.logoPath}
                alt={`${certificate.name} logo`} 
                width={20}
                height={20}
                className="object-contain"
              />
            ) : (
              <FaCertificate className="text-amber-500" />
            )}
          </div>
          <Link
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-500 dark:text-white dark:hover:text-white flex items-center gap-1"
          >
            {certificate.name}
            <FaArrowUpRightFromSquare className="inline-block w-3 h-3 text-gray-400" />
          </Link>
        </div>
        <span className="text-sm text-gray-500">{certificate.year}</span>
      </div>
      {showDivider && <hr className="my-3" />}
    </>
  )
}

export function WorkExperience() {
  const [showAdditional, setShowAdditional] = useState(false)
  const t = useTranslations()

  // Сортируем опыт: сначала work, потом additional (если нужно)
  const sortedExperience = ALL_EXPERIENCE.filter(exp => exp.type === 'work').concat(
    ALL_EXPERIENCE.filter(exp => exp.type === 'additional')
  )

  // Первый опыт всегда показываем
  const firstExperience = sortedExperience[0] ? [sortedExperience[0]] : []
  // Остальные — под кнопкой
  const restExperience = sortedExperience.slice(1)

  return (
    <div className="bg-white p-4 border-[#F4F4F5] border-3 rounded-md dark:bg-zinc-900 relative mt-6">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('workExperience.title')} & {t('certificates.title')}</span>
      </div>
      
      {/* Always visible work experience */}
      {!showAdditional && firstExperience.map((experience, index) => (
        <div key={experience.id}>
          <ExperienceCard
            experience={experience}
            isExpanded={false}
            onToggle={() => {}}
            showDivider={false}
            alwaysExpanded={false}
            isFirst={index === 0}
          />
        </div>
      ))}

      {/* Additional content shown when "More" is clicked */}
      {showAdditional && (
        <>
          {/* All work experience */}
          {sortedExperience.map((experience, index) => (
            <div key={experience.id} className={index !== 0 ? "mt-4" : ""}>
              <ExperienceCard
                experience={experience}
                isExpanded={true}
                onToggle={() => {}}
                showDivider={index !== sortedExperience.length - 1}
                alwaysExpanded={true}
                isFirst={false}
              />
            </div>
          ))}
          
          {/* Certificates section */}
          <div className="mt-6">
            <h3 className="text-md font-medium mb-3">{t('certificates.title')}</h3>
            {CERTIFICATES.map((certificate, index) => (
              <div key={index} className={index !== 0 ? "mt-4" : ""}>
                <CertificateCard
                  certificate={certificate}
                  showDivider={index !== CERTIFICATES.length - 1}
                />
              </div>
            ))}
          </div>
        </>
      )}

      {/* More/Less button */}
      <button 
        onClick={() => setShowAdditional(!showAdditional)}
        className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-black text-sm rounded-sm transition-colors mt-3"
      >
        {showAdditional ? t('workExperience.less', {defaultMessage: 'Less'}) : t('workExperience.more', {defaultMessage: 'More'})}
      </button>
    </div>
  )
} 