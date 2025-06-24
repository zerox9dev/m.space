import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uk', 'ru'],
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
  
  // Automatically detect the user's locale from browser settings
  localeDetection: true
});

export const config = {
  // Match all pathnames except for
  // - ... files in the public folder
  // - ... files with extensions (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 