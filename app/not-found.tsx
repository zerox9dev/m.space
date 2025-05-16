import Link from 'next/link';
import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Page Not Found | m.space',
  description: 'The page you were looking for could not be found.',
  path: '/404',
});

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </div>
  );
} 