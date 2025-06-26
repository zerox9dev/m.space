'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { AiCloneChat } from './ai-clone-chat'
import { Markdown } from './markdown'

export function WhatIDo() {
  const t = useTranslations();
  
  return (
    <div className="flex flex-col gap-2 bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 relative mt-6">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('whatIDo.title')}</span>
      </div>
      <p className="whitespace-pre-line dark:text-zinc-200">
      {t('whatIDo.description')}
      </p>
      <blockquote className="dark:text-zinc-200">
        <b><Markdown>{t('whatIDo.summary')}</Markdown></b>
      </blockquote>
      <div className="mt-3 flex gap-2">
        <Link 
          href="/resume" 
          className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-black dark:text-zinc-200 text-sm rounded-sm transition-colors"
        >
          {t('whatIDo.resume')}
        </Link>
        <AiCloneChat customTrigger={
          <button className="px-3 py-1.5 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white text-sm rounded-sm transition-colors">
            {t('whatIDo.askAssistant')}
          </button>
        } />
      </div>
    </div>
  )
} 