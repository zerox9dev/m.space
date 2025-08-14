'use client'
// Use the standard imports but with dynamic components for code splitting
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState, useEffect, Suspense } from 'react'
import {
  PROJECTS,
  BLOG_POSTS,
} from '../data'
// Removed Dribbble shots from the home tabs; moved to Projects page
 
import { BlogPostList } from '@/components/ui/blog-post-card'
import { BottomDock } from '@/components/ui/bottom-dock'

import { WhatIDo } from '@/components/ui/what-i-do'
import { ProfileHeader } from '@/components/ui/profile-header'  
import { ConnectLinks } from '@/components/ui/connect-links'
import { useSearchParams } from 'next/navigation'
 
import { RecentWork } from '@/components/ui/recent-work'
  import { ServicesPricing } from '@/components/ui/services-pricing'
import { useTranslations } from 'next-intl'
import { CtaDiscuss } from '@/components/ui/cta-discuss'
import { CodeDivider } from '@/components/ui/code-divider'

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

// Create a wrapper component to use searchParams
function PersonalContent() {
  const [activeTab, setActiveTab] = useState('about');
  const searchParams = useSearchParams();
  const t = useTranslations();
  
  // Define tabs using translations
  const TABS = [
    { id: 'about', label: t('tabs.about') },
    { id: 'blog', label: t('tabs.blog') },
  ];
  
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && TABS.some(tab => tab.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams, TABS]);
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
      
      <motion.main
        className="flex"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
        suppressHydrationWarning
      >
        {activeTab === 'about' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="flex flex-col gap-4 w-full"
          >
                <ProfileHeader />
                <CodeDivider label={t('whatIDo.title')} />
                <WhatIDo />
                <CodeDivider label={t('services.title')} />
                <ServicesPricing />
                <CodeDivider label={t('recentWork.title')} />
                <RecentWork />
                <CodeDivider label={t('cta.title')} />
                <CtaDiscuss />
                <CodeDivider label={t('connect.title')} />
                <ConnectLinks />
          </motion.section>
        )}

        

        {activeTab === 'blog' && (
          <motion.section
            variants={VARIANTS_SECTION}
            transition={TRANSITION_SECTION}
            className="flex flex-col gap-4 w-full"
          >
            <BlogPostList posts={BLOG_POSTS} />
          </motion.section>
        )}
      </motion.main>

      <BottomDock 
        tabs={TABS} 
        activeTab={activeTab} 
        onChange={handleTabChange}
      />
    </div>
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