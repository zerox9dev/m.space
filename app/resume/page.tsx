import dynamic from 'next/dynamic'

const Resume = dynamic(() => import('@/components/ui/resume').then(mod => ({ default: mod.Resume })), { ssr: false })

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <Resume />
    </div>
  )
} 