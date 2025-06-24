'use client'

import React from 'react'
import MeteorsBackground from './MeteorsBackground'
import { Footer } from '@/app/footer'

interface ClientLayoutProps {
  children: React.ReactNode
  overpassVariable: string
  overpassMonoVariable: string
}

export default function ClientLayout({ children, overpassVariable, overpassMonoVariable }: ClientLayoutProps) {
  return (
    <div className={`${overpassVariable} ${overpassMonoVariable} flex min-h-screen w-full flex-col font-[family-name:var(--font-overpass)] relative`}>
      <div className="relative mx-auto w-full max-w-lg flex-1 px-4 pt-4 flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <MeteorsBackground />
    </div>
  )
} 