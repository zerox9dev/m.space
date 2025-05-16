import type { Metadata, Viewport } from 'next'
import { Overpass, Overpass_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { WEBSITE_URL } from '@/lib/constants'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  ...generateSiteMetadata({
    title: 'm.space - from design to finished product',
    description: 'I will create a design for your project and then develop it into a finished product.',
    path: '/',
  }),
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { 
        rel: 'apple-touch-icon',
        url: '/icons/apple-icon-180.png',
      },
      { 
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/apple-icon-180.png',
      },
    ],
  },
}

const overpass = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
})

const overpassMono = Overpass_Mono({
  variable: '--font-overpass-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${overpass.variable} ${overpassMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-overpass)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
