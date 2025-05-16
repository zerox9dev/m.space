import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  eslint: {
    // Disable ESLint checking during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during build
    ignoreBuildErrors: true,
  },
  // Add compiler optimization to tree-shake and optimize JS
  compiler: {
    // Remove all console.* calls and debugger statements in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Specify some modules to be transpiled by Next.js
  transpilePackages: [],
  // Configure modularizeImports to prevent importing unused code from libraries
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
      preventFullImport: true,
    },
  },
  // Optimize production build
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Image configuration
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
