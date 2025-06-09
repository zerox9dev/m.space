'use client'

import { Magnetic } from './magnetic'
import { SOCIAL_LINKS, EMAIL } from '@/app/data'
import Link from 'next/link'

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
  return (
    <div className="">
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