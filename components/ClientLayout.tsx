'use client'

import React, { useEffect, useState } from 'react'
import MeteorsBackground from './MeteorsBackground'
import { Footer } from '@/app/footer'
import { ThemeScript } from './ThemeScript'

interface ClientLayoutProps {
  children: React.ReactNode
  overpassVariable: string
  overpassMonoVariable: string
}

export default function ClientLayout({ children, overpassVariable, overpassMonoVariable }: ClientLayoutProps) {
  // Use this to prevent hydration mismatch
  const [mounted, setMounted] = useState(false)
  
  // Only show the UI after first render on the client
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Use a consistent layout structure for both mounted and unmounted states
  // to avoid hydration mismatches
  return (
    <div className={`${overpassVariable} ${overpassMonoVariable} flex min-h-screen w-full flex-col font-[family-name:var(--font-overpass)] relative`}>
      {/* Theme initialization script */}
      <ThemeScript />
      
      <div className="relative mx-auto w-full max-w-lg flex-1 px-4 pt-4 flex flex-col">
        <main className="flex-1">
          {mounted ? children : <div aria-hidden="true" />}
        </main>
        {mounted && <Footer />}
      </div>
      {mounted && <MeteorsBackground />}
    </div>
  )
} 