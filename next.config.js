/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
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
                destination: '/genres/movie/popular',
                permanent: false,
            },
        ];
    },
    images: {
        domains: ['image.tmdb.com', 'image.tmdb.org'],
    },
};

module.exports = withPlaiceholder(nextConfig);
