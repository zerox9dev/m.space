import React from 'react'
import { cn } from '@/lib/utils'

export type CodeDividerProps = {
  label?: string
  className?: string
}

export function CodeDivider({ label, className }: CodeDividerProps) {
  return (
    <div className={cn('my-6', className)}>
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-gradient-to-l from-zinc-300/60 to-transparent dark:from-zinc-700/70" />
        <span className="select-none font-mono text-[11px] leading-none text-zinc-500 dark:text-zinc-400/70">
          // {label}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-zinc-300/60 to-transparent dark:from-zinc-700/70" />
      </div>
    </div>
  )
}


