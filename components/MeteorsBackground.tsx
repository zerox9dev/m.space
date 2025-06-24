'use client'

import React from 'react'
import { Meteors } from '@stianlarsen/meteors'

export default function MeteorsBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Meteors
        speed={3}
        size={50}
        amount={20}
        colorLightmode="black"
        colorDarkmode="white"
        fallingSide="right"
      />
    </div>
  )
} 