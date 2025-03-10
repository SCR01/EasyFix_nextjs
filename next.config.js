/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  env: {
    HELLO: process.env.HELLO || 'World',
  },
};

module.exports = nextConfig; 