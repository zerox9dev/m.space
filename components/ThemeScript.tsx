'use client'

import { useEffect } from 'react'
import { useTheme } from 'next-themes'

// This component prevents flickering during initial page load
// by setting the theme before hydration
export function ThemeScript() {
  const { setTheme, theme } = useTheme()
  
  useEffect(() => {
    // This ensures consistent theme application
    const savedTheme = localStorage.getItem('theme') || 'system'
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])
  
  return null
} 