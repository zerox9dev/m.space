'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useDribbbleShots } from '@/hooks/useDribbbleShots'
import { FaXmark } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger), { ssr: false })
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent), { ssr: false })
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose), { ssr: false })
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer), { ssr: false })

export function DribbbleShots() {
  const t = useTranslations()
  const { shots, loading, error } = useDribbbleShots()

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-zinc-500 dark:text-zinc-400">{error}</p>
  }

  if (!shots || !Array.isArray(shots) || shots.length === 0) {
    return <p className="text-center text-zinc-500 dark:text-zinc-400">{t('shots.empty')}</p>
  }

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-sm dark:bg-zinc-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {shots.map((shot) => {
            if (!shot || typeof shot.id === 'undefined' || !shot.images) {
              return null
            }

            const imageUrl = shot.images?.hidpi || shot.images?.normal || ''
            if (!imageUrl) {
              return null
            }

            return (
              <div key={shot.id} className="h-full">
                <div className="h-full relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <MorphingDialog
                    transition={{
                      type: 'spring',
                      bounce: 0,
                      duration: 0.3,
                    }}
                  >
                    <MorphingDialogTrigger>
                      <div 
                        className="w-full cursor-zoom-in rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative"
                        style={{ 
                          aspectRatio: '4/3',
                          height: 'auto'
                        }}
                      >
                        <Image
                          src={imageUrl}
                          alt={shot.title || 'Dribbble shot'}
                          className="object-cover w-full h-auto"
                          width={800}
                          height={600}
                          priority
                          unoptimized={false}
                        />
                      </div>
                    </MorphingDialogTrigger>
                    <MorphingDialogContainer>
                      <MorphingDialogContent className="fixed inset-0 flex items-center justify-center bg-zinc-50/90 dark:bg-zinc-950/90 p-6">
                        <div className="relative w-full max-w-5xl" style={{ maxHeight: '80vh', maxWidth: '90vw' }}>
                          <Image
                            src={imageUrl}
                            alt={shot.title || 'Dribbble shot'}
                            className="object-contain max-h-[80vh] w-auto h-auto"
                            width={1600}
                            height={1200}
                            unoptimized={true}
                          />
                        </div>
                      </MorphingDialogContent>
                      <MorphingDialogClose
                        className="fixed top-6 right-6 z-50 h-fit w-fit rounded-full bg-white p-1.5 shadow-md"
                        variants={{
                          initial: { opacity: 0 },
                          animate: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
                          exit: { opacity: 0, transition: { duration: 0 } },
                        }}
                      >
                        <FaXmark className="h-5 w-5 text-zinc-500" />
                      </MorphingDialogClose>
                    </MorphingDialogContainer>
                  </MorphingDialog>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DribbbleShots


