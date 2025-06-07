'use client'
// Use the standard imports but with dynamic components for code splitting
import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { useDribbbleShots } from '@/hooks/useDribbbleShots'
import { FaXmark, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { BlogPostList } from '@/components/ui/blog-post-card'
import { WorkExperienceList } from '@/components/ui/work-experience-card'
import { ProjectCarousel } from '@/components/ui/project-carousel'
import { TabNavigation } from '@/components/ui/tab-navigation'
import { TextEffect } from '@/components/ui/text-effect'
import { useSearchParams } from 'next/navigation'

// Dynamically import components that aren't needed on initial load
const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger), { ssr: false })
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent), { ssr: false }) 
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose), { ssr: false })
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer), { ssr: false })
const AiCloneChat = dynamic(() => import('@/components/ui/ai-clone-chat').then(mod => mod.AiCloneChat), { ssr: false })

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

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-white px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <FaArrowUpRightFromSquare className="h-3 w-3" />
      </a>
    </Magnetic>
  )
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
        className="space-y-12 my-8"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        {activeTab === 'about' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <div className="flex-1">
              <div className="text-zinc-600 dark:text-zinc-400 ">
                <div className="flex items-center gap-4 mb-4 bg-white p-4 rounded-2xl">
                  <div className="h-16 w-16 shrink-0 rounded-full overflow-hidden">
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
                  <div className="flex items-center">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-sm font-medium text-green-600 dark:text-green-500">Available</span>
                    </span>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-2xl">
                  <strong>Founder, Startup or Agency?</strong> Creating end-to-end digital products:
                  <br /><strong>DESIGN:</strong> UX/UI for fintech, EdTech, SaaS (Figma, design systems) + AI Vibe Coding
                  <br /><strong>DEVELOPMENT:</strong> Telegram bots with AI, web scrapers, automation (Python, Aiogram)
                  <br /><strong>Result:</strong> +15-30% metrics, -80% manual. <br />
                  <br /><strong>Let's build something exceptional together!</strong>
                </div>
              </div>
              

            </div>
            
            <div className="mt-8">
              <h3 className="mb-5 text-lg font-medium">Projects</h3>
              <ProjectCarousel projects={PROJECTS} />
            </div>
            
            <div className="mt-8">
              <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
              <WorkExperienceList experiences={WORK_EXPERIENCE} />
            </div>
            
                          <div className="mt-8">
              <h3 className="mb-5 text-lg font-medium">Let's Connect</h3>
              <div className="flex gap-2 flex-wrap">
                <MagneticSocialLink link="https://t.me/mirvaId">
                  Telegram
                </MagneticSocialLink>
                <div className="relative inline-block">
                  <AiCloneChat 
                    floatingButton={false}
                    customTrigger={
                      <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                        <div className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-white px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700">
                          AI Assistant
                          <FaArrowUpRightFromSquare className="h-3 w-3" />
                        </div>
                      </Magnetic>
                    }
                  />
                </div>
                {SOCIAL_LINKS.map((social) => (
                  <MagneticSocialLink key={social.label} link={social.link}>
                    {social.label}
                  </MagneticSocialLink>
                ))}
                <MagneticSocialLink link={`mailto:${EMAIL}`}>
                  Email
                </MagneticSocialLink>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'shots' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
              </div>
            ) : error ? (
              <p className="text-center text-zinc-500 dark:text-zinc-400">{error}</p>
            ) : shots && shots.length > 0 ? (
              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {shots.map((shot) => (
                    <div key={shot.id}>
                      <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 h-full">
                        <MorphingDialog
                          transition={{
                            type: 'spring',
                            bounce: 0,
                            duration: 0.3,
                          }}
                        >
                          <MorphingDialogTrigger>
                            <div 
                              className="aspect-[4/3] w-full cursor-zoom-in rounded-xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative"
                            >
                              <Image
                                src={shot.images.hidpi || shot.images.normal}
                                alt={shot.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                                unoptimized={false}
                              />
                            </div>
                          </MorphingDialogTrigger>
                          <MorphingDialogContainer>
                            <MorphingDialogContent className="fixed inset-0 flex items-center justify-center bg-zinc-50/90 dark:bg-zinc-950/90 p-6">
                              <div className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3]">
                                <Image
                                  src={shot.images.hidpi || shot.images.normal}
                                  alt={shot.title}
                                  fill
                                  sizes="100vw"
                                  className="object-contain"
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
                  ))}
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
      <div className="flex justify-center py-8">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
      </div>
    }>
      <PersonalContent />
    </Suspense>
  );
} 