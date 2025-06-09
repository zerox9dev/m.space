"use client"

import Image from 'next/image'
import { FaXmark } from 'react-icons/fa6'
import dynamic from 'next/dynamic'

// Dynamically import MorphingDialog components
const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger), { ssr: false })
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent), { ssr: false })
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose), { ssr: false })
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer), { ssr: false })

type ProjectImageProps = {
  src: string
}

export default function ProjectImage({ src }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <div className="aspect-[4/3] w-full flex items-center justify-center rounded-sm overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={src}
              alt="Project screenshot"
              width={280}
              height={210}
              className="max-h-full max-w-full object-contain rounded-sm"
              priority
            />
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="fixed inset-0 flex items-center justify-center bg-zinc-50/90 dark:bg-zinc-950/90 p-6">
          <div className="relative w-full max-w-4xl aspect-[4/3] max-h-[80vh]">
            <Image
              src={src}
              alt="Project screenshot"
              width={1200}
              height={900}
              className="max-h-[80vh] max-w-full object-contain"
              style={{ 
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            />
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 z-50 h-fit w-fit rounded-sm bg-white p-1.5 shadow-md"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <FaXmark className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
} 