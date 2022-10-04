/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/genres/top-rated',
        permanent: false,
      },
    ];
  },
  images: {
    domains: ['image.tmdb.com', 'image.tmdb.org'],
  },
};

module.exports = withPlaiceholder(nextConfig);
