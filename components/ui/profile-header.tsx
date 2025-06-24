'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from './text-effect'
import { useTranslations } from 'next-intl'

export function ProfileHeader() {
  const t = useTranslations();
  
  return (
    <div className="flex items-center bg-white gap-4 border-[#F4F4F5] border-3 p-4 rounded-md dark:bg-zinc-900">
      <div className="h-16 w-16 shrink-0 rounded-md overflow-hidden">
        <Image 
          src="/avatar.png" 
          alt="Vadym's avatar"
          width={64}
          height={64}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1">
        <Link href="/" className="font-medium text-black dark:text-white">
          <p className="inline font-medium text-black dark:text-white">
            {t('profile.greeting', {defaultMessage: 'Привіт, я Вадим'})}
          </p>
        </Link>
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-black dark:text-white"
          delay={0.5}
        >
          {t('profile.tagline', {defaultMessage: 'Дизайн, код і автоматизація. Все, що потрібно для продукту.'})}
        </TextEffect>
      </div>
    </div>
  )
} 