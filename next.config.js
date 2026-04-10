/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'hi'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig