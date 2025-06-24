'use client'

import React from 'react'
import Link from 'next/link'

export function WhatIDo() {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 border-[#F4F4F5] border-3 rounded-md dark:bg-zinc-900 relative mt-6">
      <div className="absolute -top-4 left-4 bg-white dark:bg-zinc-900 px-2 py-1 text-sm">
        <span>Коротко про мене</span>
      </div>
      <p>
      Починав як UI/UX-дизайнер. Згодом став продуктовим дизайнером — мислив системно, вчився метрикам. Потім — кодинг: збирав інтерфейси, писав Telegram-ботів, працював із API. З приходом AI почав автоматизувати задачі, писати GPT-промти і працювати швидше.
      </p>
      <blockquote>
        <b>Сьогодні — працюю на перетині дизайн → код → AI. Сам запускаю проєкти, MVP і експерименти.</b>
      </blockquote>
      <div className="mt-3">
        <Link href="/resume" className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-black text-sm rounded-sm transition-colors">
          Resume
        </Link>
      </div>
    </div>
  )
} 