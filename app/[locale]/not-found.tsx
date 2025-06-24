'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">
        {t('description')}
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md transition-colors"
      >
        {t('goHome')}
      </Link>
    </div>
  )
} 