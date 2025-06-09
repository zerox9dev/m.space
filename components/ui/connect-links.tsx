'use client'

import { Magnetic } from './magnetic'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import dynamic from 'next/dynamic'
import { SOCIAL_LINKS, EMAIL } from '@/app/data'

// Dynamically import AiCloneChat
const AiCloneChat = dynamic(() => import('@/components/ui/ai-clone-chat').then(mod => mod.AiCloneChat), { ssr: false })

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-white px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <FaArrowUpRightFromSquare className="h-3 w-3" />
      </a>
    </Magnetic>
  )
}

export function ConnectLinks() {
  return (
    <div className="mt-8">
      <h3 className="mb-5 text-lg font-medium">Let's Connect</h3>
      <div className="flex gap-2 flex-wrap">
        <MagneticSocialLink link="https://t.me/mirvaId">
          Telegram
        </MagneticSocialLink>
        <div className="relative inline-block">
          <AiCloneChat 
            floatingButton={false}
            customTrigger={
              <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                <div className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-white px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                  AI Assistant
                  <FaArrowUpRightFromSquare className="h-3 w-3" />
                </div>
              </Magnetic>
            }
          />
        </div>
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