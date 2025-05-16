'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <p className="inline font-medium text-black dark:text-white">Vadym</p>
        </Link>
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Digital Product UX/UI Designer & Developer
        </TextEffect>
      </div>
    </header>
  )
}
