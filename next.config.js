/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'image.tmdb.com', 'image.tmdb.org'],
  },
};

module.exports = nextConfig;
