'use client'
// Use the standard imports but with dynamic components for code splitting
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import {
  PROJECTS,
  BLOG_POSTS,
} from './data'
import { useDribbbleShots } from '@/hooks/useDribbbleShots'
import { FaXmark } from 'react-icons/fa6'
import { BlogPostList } from '@/components/ui/blog-post-card'
import { WorkExperience } from '@/components/ui/work-experience-card'
import { ProjectCarousel } from '@/components/ui/project-carousel'
import { TabNavigation } from '@/components/ui/tab-navigation'

import { WhatIDo } from '@/components/ui/what-i-do'
import { ProfileHeader } from '@/components/ui/profile-header'  
import { ConnectLinks } from '@/components/ui/connect-links'
import { useSearchParams } from 'next/navigation'
import { AiCloneChat } from '@/components/ui/ai-clone-chat'
import { Certificates } from '@/components/ui/certificates'

// Dynamically import components that aren't needed on initial load
const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger), { ssr: false })
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent), { ssr: false }) 
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose), { ssr: false })
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer), { ssr: false })


const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}



const TABS = [
  { id: 'about', label: 'About' },
  { id: 'shots', label: 'Shots' },
  { id: 'blog', label: 'Blog' },
]





// Create a wrapper component to use searchParams
function PersonalContent() {
  const { shots, loading, error } = useDribbbleShots();
  const [activeTab, setActiveTab] = useState('about');
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && TABS.some(tab => tab.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onChange={handleTabChange} 
        className="sticky top-0 pb-2 z-10"
      />
      
      <motion.main
        className="flex "
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        suppressHydrationWarning
      >
        {activeTab === 'about' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="flex flex-col gap-4"
          >
                <ProfileHeader />
                <WhatIDo />
                <WorkExperience />
                <ProjectCarousel projects={PROJECTS} />
                <Certificates />
                <ConnectLinks />
                <AiCloneChat />
          </motion.section>
        )}

        {activeTab === 'shots' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="flex flex-col gap-4"
          >
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
              </div>
            ) : error ? (
              <p className="text-center text-zinc-500 dark:text-zinc-400">{error}</p>
            ) : shots && Array.isArray(shots) && shots.length > 0 ? (
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {shots.map((shot) => {
                    // Проверяем наличие всех необходимых полей
                    if (!shot || typeof shot.id === 'undefined' || !shot.images) {
                      return null;
                    }
                    
                    const imageUrl = shot.images?.hidpi || shot.images?.normal || '';
                    if (!imageUrl) {
                      return null;
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
                                <div className="relative w-full max-w-5xl" style={{ 
                                  maxHeight: '80vh',
                                  maxWidth: '90vw'
                                }}>
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p className="text-center text-zinc-500 dark:text-zinc-400">No dribbble shots found.</p>
            )}
          </motion.section>
        )}

        {activeTab === 'blog' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="flex flex-col gap-4"
          >
            <BlogPostList posts={BLOG_POSTS} />
          </motion.section>
        )}
      </motion.main>
    </>
  );
}

// Main component with Suspense boundary
export default function Personal() {
  return (
    <Suspense fallback={
      <div className="flex justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
      </div>
    }>
      <PersonalContent />
    </Suspense>
  );
} 