import Image from 'next/image'
import { FaXmark } from 'react-icons/fa6'
import dynamic from 'next/dynamic'

// Dynamically import MorphingDialog components
const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger))
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent))
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose))
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer))

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
        <div 
          className="aspect-video w-full cursor-zoom-in rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative"
        >
          <Image
            src={src}
            alt="Project screenshot"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt="Project screenshot"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
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