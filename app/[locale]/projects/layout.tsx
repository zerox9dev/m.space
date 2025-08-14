'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState, Suspense } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa6'
import { TabNavigation } from '@/components/ui/tab-navigation'
import { useSearchParams, useParams, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'

function CopyButton() {
  const t = useTranslations('Common')
  const [text, setText] = useState(t('copy'))
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText(t('copy'))
    }, 2000)
  }, [text, t])

  return (
    <button
      onClick={() => {
        setText(t('copied'))
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

// Tabs for Projects section (Dribbble removed)
const TABS = [
  { id: 'projects', label: 'Projects' },
]

function SearchParamsHandler({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam && TABS.some(tab => tab.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams, setActiveTab])
  
  return null
}

function ProjectLayout({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const locale = params.locale as string
  const t = useTranslations('Projects')
  const [activeTab, setActiveTab] = useState('projects')
  const router = useRouter()
  
  const handleTabChange = (tabId: string) => {
    router.push(`/${locale}/projects?tab=${tabId}`)
  }

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <Suspense fallback={null}>
        <SearchParamsHandler setActiveTab={setActiveTab} />
      </Suspense>

      <TabNavigation 
        tabs={TABS.map(tab => ({ ...tab, label: t(`tabs.${tab.id}`) }))}
        activeTab={activeTab} 
        onChange={handleTabChange} 
        className="sticky top-0 pt-6 pb-2 z-10"
      />

      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>
      
      <div className="absolute left-4 top-24">
        <Link href={`/${locale}/projects?tab=projects`} className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
          <FaArrowLeft className="h-3 w-3" />
          <span>{t('backToProjects')}</span>
        </Link>
      </div>
      
      <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium">
        {children}
      </main>
    </>
  )
}

export default function LayoutProject({
  children,
}: {
  children: React.ReactNode
}) {
  return <ProjectLayout>{children}</ProjectLayout>
} 