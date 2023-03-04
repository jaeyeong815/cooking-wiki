/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'cooking-wiki';

const nextConfig = {
  reactStrictMode: false,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
  env: {
    API_KEY: process.env.OPENAI_API_KEY,
  },
};

module.exports = nextConfig;
