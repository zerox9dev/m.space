'use client'

import { Magnetic } from './magnetic'
import { SOCIAL_LINKS, EMAIL } from '@/app/data'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <Link
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-sm bg-white px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
      </Link>
    </Magnetic>
  )
}

export function ConnectLinks() {
  const t = useTranslations();
  
  return (
    <div className="bg-white p-4 border-[#F4F4F5] dark:border-zinc-800 border-3 rounded-md dark:bg-zinc-900 relative">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>{t('connect.title', {defaultMessage: 'Let\'s connect'})}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        <MagneticSocialLink link="https://t.me/mirvaId">
          TG
        </MagneticSocialLink>

        {SOCIAL_LINKS.map((social) => (
          <MagneticSocialLink key={social.label} link={social.link}>
            {social.label}
          </MagneticSocialLink>
        ))}
        <MagneticSocialLink link={`mailto:${EMAIL}`}>
          Email
        </MagneticSocialLink>
      </div>
    </div>
  )
} 