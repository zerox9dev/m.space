'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/app/[locale]/layout';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  
  // Remove the current locale from the pathname
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';

  // Function to get the display label for each locale
  const getLocaleLabel = (l: string) => {
    switch (l) {
      case 'en': return 'EN';
      case 'uk': return 'UK';
      case 'ru': return 'RU';
      default: return l.toUpperCase();
    }
  };

  return (
    <div className="flex gap-2 items-center">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}${pathnameWithoutLocale}`}
          className={`px-2 py-1 rounded text-sm ${
            locale === l
              ? 'bg-zinc-200 dark:bg-zinc-800 font-medium'
              : 'hover:bg-zinc-100 dark:hover:bg-zinc-900'
          }`}
        >
          {getLocaleLabel(l)}
        </Link>
      ))}
    </div>
  );
} 