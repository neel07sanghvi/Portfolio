require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  swcMinify: true,
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
  },
};

module.exports = nextConfig;