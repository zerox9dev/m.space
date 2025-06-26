import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Overpass, Overpass_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';
import ClientLayout from '@/components/ClientLayout';
import Script from 'next/script';

// Load the Overpass fonts
const overpass = Overpass({
  variable: '--font-overpass',
  subsets: ['latin'],
});

const overpassMono = Overpass_Mono({
  variable: '--font-overpass-mono',
  subsets: ['latin'],
});

// Define supported locales
export const locales = ['en', 'uk', 'ru'];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // In Next.js 15, we need to await params
  const { locale } = await params;
  
  // Validate that the locale is supported
  if (!locales.includes(locale)) notFound();

  // Load messages for the current locale
  let messages;
  try {
    messages = (await import(`../../messages/${locale}/index.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${overpass.variable} ${overpassMono.variable}`} suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme') || 'system';
                const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const theme = savedTheme === 'system' ? systemTheme : savedTheme;
                document.documentElement.classList.add(theme);
                document.documentElement.style.colorScheme = theme;
              } catch (e) {}
            })()
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ClientLayout
              overpassVariable={overpass.variable}
              overpassMonoVariable={overpassMono.variable}
            >
              {children}
            </ClientLayout>
          </NextIntlClientProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
} 