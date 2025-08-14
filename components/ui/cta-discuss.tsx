'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FaTelegram, FaRobot } from 'react-icons/fa6'
import { AiCloneChat } from '@/components/ui/ai-clone-chat'
import Script from 'next/script'

export function CtaDiscuss() {
  const t = useTranslations('cta')

  return (
    <div className="bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900">
      <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js" strategy="afterInteractive" />

      <div className="flex items-center gap-4">
        {/* Sun on the left */}
        <div className="shrink-0 h-20 w-20 sm:h-24 sm:w-24">
          <div className="relative h-full w-full rounded-full overflow-hidden">
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/3sjNdfyCygTCuZNPyWxI8SMMA10.png?scale-down-to=512"
              alt=""
              className="absolute inset-0 h-full w-full rounded-full object-cover"
            />
            <div
              className="absolute inset-0"
              dangerouslySetInnerHTML={{
                __html:
                  '<dotlottie-player src="https://lottie.host/eb2ab27a-1a14-47b0-aeff-c2cd33d51e30/jIhjgwmYGO.json" autoplay loop background="rgba(255, 255, 255, 0)" speed="1" style="height: 100%; width: 100%;"></dotlottie-player>',
              }}
            />
          </div>
        </div>

        {/* Text with buttons below */}
        <div className="flex-1">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{t('subtitle')}</p>
          <div className="mt-3 flex items-center gap-2">
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
    </div>
  )
}


