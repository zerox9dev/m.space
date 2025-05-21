'use client'
// Use the standard imports but with dynamic components for code splitting
import { motion } from 'motion/react'
import { Magnetic } from '@/components/ui/magnetic'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from './data'
import { useDribbbleShots } from '@/hooks/useDribbbleShots'
import { FaTelegram, FaXmark, FaArrowUpRightFromSquare, FaArrowRight, FaRobot } from 'react-icons/fa6'
import { BlogPostList } from '@/components/ui/blog-post-card'
import { WorkExperienceList } from '@/components/ui/work-experience-card'
import { ProjectList } from '@/components/ui/project-card'
import { TabNavigation } from '@/components/ui/tab-navigation'
import { TextEffect } from '@/components/ui/text-effect'

// Dynamically import components that aren't needed on initial load
const Spotlight = dynamic(() => import('@/components/ui/spotlight').then(mod => mod.Spotlight), { ssr: false })
const AnimatedBackground = dynamic(() => import('@/components/ui/animated-background').then(mod => mod.AnimatedBackground), { ssr: false })
const MorphingDialog = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialog), { ssr: false })
const MorphingDialogTrigger = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogTrigger))
const MorphingDialogContent = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContent)) 
const MorphingDialogClose = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogClose))
const MorphingDialogContainer = dynamic(() => import('@/components/ui/morphing-dialog').then(mod => mod.MorphingDialogContainer))
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
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export default function Personal() {
  const { shots, loading, error } = useDribbbleShots();
  const [activeTab, setActiveTab] = useState('about');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <TabNavigation 
        tabs={TABS} 
        activeTab={activeTab} 
        onChange={handleTabChange} 
        className="sticky top-0 pt-6 pb-2 z-10"
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
              <div className="text-zinc-600 dark:text-zinc-400">
              <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <p className="inline font-medium text-black dark:text-white">Vadym</p>
        </Link>
        <TextEffect
          as="h1"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 mb-4"
          delay={0.5}
        >
          Digital Product UX/UI Designer & Developer
        </TextEffect>
      </div>
                
                <p className="mb-4">Founder, Startup or Agency?
Let's collaborate to design your vision
into solutions that drive customer
and business growth.</p>
                <p className="mb-4">
                  I create end-to-end digital products that combine design excellence with automation power:
                </p>

                <p className="mb-3">
                  <strong>DESIGN:</strong> Research-driven UX/UI for fintech, EdTech & SaaS (Figma, design systems, wireframes) and AI Vibe Coding.
                </p>

                <p className="mb-4">
                  <strong>DEVELOPMENT:</strong> Telegram bots with AI integration, web scrapers, workflow automation (Python, Aiogram)
                </p>

                <p className="mb-4">
                  My dual expertise delivers complete solutions — beautiful interfaces backed by intelligent automation that increases metrics by 15-30% while reducing manual operations by 90%.
                </p>

                <p className="font-medium">
                  Let's build something exceptional together!
                </p>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                  <a
                    href="https://t.me/mirvaId" 
                    className="group inline-flex items-center gap-2 rounded-full bg-[#0088cc] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0077b5]"
                  >
                    <FaTelegram className="h-4 w-4" />
                    Chat telegram
                  </a>
                </Magnetic>
                
                <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                  <AiCloneChat 
                    floatingButton={false}
                    customTrigger={
                      <div className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#0088cc] hover:text-white">
                        <FaRobot className="h-4 w-4" />
                        Ask AI Assistant
                      </div>
                    }
                  />
                </Magnetic>
              </div>
            </div>
          </motion.section>
        )}

        {activeTab === 'portfolio' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 text-lg font-medium">Dribbble Shots</h3>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-600 dark:border-t-zinc-100"></div>
              </div>
            ) : error ? (
              <p className="text-center text-zinc-500 dark:text-zinc-400">{error}</p>
            ) : shots && shots.length > 0 ? (
              <div className="relative">
                <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x">
                  {shots.map((shot) => (
                    <div key={shot.id} className="flex-none w-80 snap-start first:ml-4 last:mr-4">
                      <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 h-full">
                        <div 
                          className="relative cursor-pointer"
                          onClick={() => window.open(shot.html_url, '_blank', 'noopener,noreferrer')}
                        >
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
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Image
                                  src={shot.images.normal}
                                  alt={shot.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  className="object-cover"
                                  priority
                                />
                              </div>
                            </MorphingDialogTrigger>
                            <MorphingDialogContainer>
                              <MorphingDialogContent className="relative aspect-[4/3] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={shot.images.normal}
                                    alt={shot.title}
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
                        </div>
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

        {activeTab === 'work' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 text-lg font-medium">Recent Work</h3>
            <ProjectList projects={PROJECTS} />
          </motion.section>
        )}

        {activeTab === 'experience' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
            <WorkExperienceList experiences={WORK_EXPERIENCE} />
          </motion.section>
        )}

        {activeTab === 'blog' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 text-lg font-medium">Latest Posts</h3>
            <BlogPostList posts={BLOG_POSTS} />
          </motion.section>
        )}

        {activeTab === 'contact' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
          >
            <h3 className="mb-5 text-lg font-medium">Let's Connect</h3>
            <div className="flex gap-2 flex-wrap">
              {SOCIAL_LINKS.map((social) => (
                <MagneticSocialLink key={social.label} link={social.link}>
                  {social.label}
                </MagneticSocialLink>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                {EMAIL} <FaArrowRight className="h-3 w-3" />
              </a>
            </div>
          </motion.section>
        )}
      </motion.main>
    </>
  )
} 