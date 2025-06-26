'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from './text-effect'
import { useTranslations } from 'next-intl'
import { RiVerifiedBadgeFill } from "react-icons/ri";

export function ProfileHeader() {
  const t = useTranslations();
  
  return (
    <div className="flex items-center bg-white gap-4 border-[#F4F4F5] dark:border-zinc-800 border-3 p-4 rounded-md dark:bg-zinc-900">
      <div className="h-16 w-16 shrink-0 rounded-md relative">
        <Image 
          src="/avatar.png" 
          alt="Vadym's avatar"
          width={64}
          height={64}
          className="h-full w-full object-cover rounded-md"
        />
        <div className="absolute -right-1 -bottom-1 text-blue-500 bg-white dark:bg-zinc-900 rounded-full p-0.5 border-2 border-white dark:border-zinc-900">
          <RiVerifiedBadgeFill className="h-4 w-4" />
        </div>
        <div className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-zinc-900"></span>
        </div>
      </div>
      <div className="flex-1">
        <div>
          <p className=" text-black dark:text-zinc-200">
            {t('profile.greeting', {defaultMessage: 'Привіт, я Вадим'})}
            {' '}
            <TextEffect
              as="span"
              preset="fade"
              per="char"
              className="italic"
              delay={1}
              style={{ display: 'inline' }}
            >
              {t('profile.tagline', {defaultMessage: 'Проектую UX/UI, пишу фронтенд, створюю AI-ботів. Допоможу запустити MVP, заощадити час і ресурси.'})}
            </TextEffect>
          </p>
        </div>
      </div>
    </div>
  )
} 