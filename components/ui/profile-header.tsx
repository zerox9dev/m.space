'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TextEffect } from './text-effect'

export function ProfileHeader() {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-sm dark:bg-zinc-900">
      <div className="h-16 w-16 shrink-0 rounded-sm overflow-hidden">
        <Image 
          src="/avatar.png" 
          alt="Vadym's avatar"
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1">
        <Link href="/" className="font-medium text-black dark:text-white">
          <p className="inline font-medium text-black dark:text-white">Hey, I am Vadym</p>
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
      <div className="flex items-center">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-green-600 dark:text-green-500">Available</span>
        </span>
      </div>
    </div>
  )
} 