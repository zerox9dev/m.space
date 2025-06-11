'use client'

import React from 'react'
import Link from 'next/link'
import { FaCertificate } from 'react-icons/fa6'
import { motion } from 'motion/react'

export function Certificates() {
  // Данные сертификатов (такие же, как в резюме)
  const certificates = [
    {
      name: 'Foundations of User Experience (UX) Design',
      issuer: 'Google',
      year: '2025',
      url: 'https://coursera.org/verify/VNNIVIRP71V3'
    },
    {
      name: 'Principles of UX/UI Design',
      issuer: 'Meta',
      year: '2025',
      url: 'https://coursera.org/verify/5HSHNXKESE4G'
    }
  ]

  return (
    <motion.div
      className="relative rounded-sm bg-white p-4 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="">Certificates</h3>
      <div className="space-y-4">
        {certificates.map((cert, index) => (
          <div key={index} className="group">
            <div className="flex justify-between w-full">
              <div className="flex">
                <FaCertificate className="text-amber-500 mt-1 mr-2 shrink-0" />
                <div>
                  <p className="">
                    <Link 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-blue-600 flex items-center"
                    >
                      {cert.name}
                    </Link>
                  </p>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</span>
                </div>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 