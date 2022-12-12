/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
    localeDetection: false
  },
  images: {
    domains: ["images.unsplash.com"]
  }
}

module.exports = nextConfig
