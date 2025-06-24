import type { Metadata, Viewport } from 'next'
import { Overpass, Overpass_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import ClientLayout from '@/components/ClientLayout'

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
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { 
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
      },
      { 
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
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
        className="bg-white tracking-tight antialiased dark:bg-zinc-950"
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <ClientLayout 
            overpassVariable={overpass.variable} 
            overpassMonoVariable={overpassMono.variable}
          >
            {children}
          </ClientLayout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
