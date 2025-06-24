const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.dribbble.com',
      'media.graphassets.com',
      'media.graphcms.com',
    ],
  },
}

module.exports = withNextIntl(nextConfig); 