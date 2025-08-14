'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaTelegram, FaRobot } from 'react-icons/fa6'
import { AiCloneChat } from '@/components/ui/ai-clone-chat'

export function CtaDiscuss() {
  const t = useTranslations('cta')

  return (
    <div className="bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 relative">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('title')}</span>
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('subtitle')}</p>

        <div className="flex items-center gap-2">
          <Link
            href="https://t.me/zerox9dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            aria-label={t('telegram')}
          >
            <FaTelegram className="h-4 w-4" />
            <span>{t('telegram')}</span>
          </Link>

          <AiCloneChat
            customTrigger={
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md bg-zinc-200 px-3 py-1.5 text-sm text-zinc-900 transition-colors hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
                aria-label={t('aiAssistant')}
                title={t('aiAssistant')}
              >
                <FaRobot className="h-4 w-4" />
                <span>{t('aiAssistant')}</span>
              </button>
            }
          />
        </div>
      </div>
    </div>
  )
}


