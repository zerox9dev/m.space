'use client'

import React from 'react'
import { FiUser, FiCamera, FiBook } from 'react-icons/fi'

type DockTab = {
  id: string
  label: string
  icon?: React.ReactNode
}

interface BottomDockProps {
  tabs: DockTab[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
  rightSlot?: React.ReactNode
}

const defaultIcons: Record<string, React.ReactNode> = {
  about: <FiUser className="h-5 w-5" />,
  shots: <FiCamera className="h-5 w-5" />,
  blog: <FiBook className="h-5 w-5" />,
}

export function BottomDock({ tabs, activeTab, onChange, className, rightSlot }: BottomDockProps) {
  return (
    <div className={`fixed bottom-4 left-1/2 z-50 -translate-x-1/2 ${className ?? ''}`}>
      <div className="flex items-center gap-0 sm:gap-1 rounded-2xl border border-zinc-800/60 bg-black/80 px-2 py-1.5 shadow-lg shadow-black/20 backdrop-blur-md">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          const icon = tab.icon ?? defaultIcons[tab.id] ?? null
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`group flex items-center gap-2 rounded-xl px-2 sm:px-3 py-2 transition-all duration-200 hover:bg-zinc-800/70 ${
                isActive ? 'bg-zinc-800/80' : ''
              }`}
              aria-pressed={isActive}
              aria-label={tab.label}
              title={tab.label}
            >
              <span
                className={`transition-transform duration-200 group-hover:scale-110 ${
                  isActive ? 'text-zinc-100' : 'text-zinc-400'
                }`}
              >
                {icon}
              </span>
              <span className={`text-sm transition-colors ${isActive ? 'inline text-zinc-100' : 'hidden'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
        {rightSlot && (
          <div className="ml-1 sm:ml-2">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  )
}

export default BottomDock


