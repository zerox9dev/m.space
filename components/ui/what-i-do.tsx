'use client'

import React from 'react'
import Link from 'next/link'

export function WhatIDo() {
  return (
    <div className="bg-white p-4 rounded-sm dark:bg-zinc-900">
      <div className="flex justify-between items-center mb-2">
        <h2>What I Do</h2>
      </div>
      <p>
        For Founders, Startups & Agencies: Full-cycle digital product creation from intuitive UX/UI 
        for fintech, EdTech, and SaaS (using Figma and design systems) to AI-integrated Telegram bots, 
        web scrapers, and business automation solutions (Python, Aiogram). My solutions typically boost performance metrics by 15-30% while reducing manual operations by 80%.
        Ready to create something remarkable?
      </p>
      <div className="mt-3">
        <Link href="/resume" className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-black text-sm rounded-sm transition-colors">
          Resume
        </Link>
      </div>
    </div>
  )
} 