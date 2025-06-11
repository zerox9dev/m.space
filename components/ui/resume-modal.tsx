'use client'

import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { Resume } from './resume'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 flex justify-end p-2 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full"
            >
              <FaXmark className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <div className="p-2">
            <Resume />
          </div>
        </div>
      </div>
    </>
  )
} 