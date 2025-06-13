'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaCertificate } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'motion/react'

export function Certificates() {
  // Данные сертификатов (такие же, как в резюме)
  const certificates = [
    {
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'Google',
      year: '2025',
      url: 'https://coursera.org/verify/VNNIVIRP71V3',
      logoPath: '/images/companies/Google.svg'
    },
    {
      name: 'Principles of UX/UI Design',
      issuer: 'Meta',
      year: '2025',
      url: 'https://coursera.org/verify/5HSHNXKESE4G',
      logoPath: '/images/companies/Meta.svg'
    }
  ]

  return (
    <motion.div
      className="bg-white p-4 rounded-sm dark:bg-zinc-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2>Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index} className={index !== 0 ? "mt-4" : ""}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="relative w-6 h-6">
                {cert.logoPath ? (
                  <Image 
                    src={cert.logoPath}
                    alt={`${cert.issuer} logo`} 
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : (
                  <FaCertificate className="text-amber-500" />
                )}
              </div>
              <p>
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-500 dark:text-white dark:hover:text-white flex items-center gap-1"
                >
                  {cert.name}
                  <FaExternalLinkAlt className="inline-block w-3 h-3 text-gray-400" />
                </Link>
              </p>
            </div>
            <span className="text-sm text-gray-500">{cert.year}</span>
          </div>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {cert.issuer}
            </span>
          </div>
          {index !== certificates.length - 1 && <hr className="my-3" />}
        </div>
      ))}
    </motion.div>
  )
} 