'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Markdown } from './markdown'

export function WhatIDo() {
  const t = useTranslations();
  
  return (
    <div className="flex flex-col gap-2 bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 relative">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('whatIDo.title')}</span>
      </div>
      <p className="whitespace-pre-line dark:text-zinc-200">
      {t('whatIDo.description')}
      </p>
      <blockquote className="mindset-summary dark:text-zinc-200">
        <b><Markdown>{t('whatIDo.summary')}</Markdown></b>
      </blockquote>
      
    </div>
  )
} 