/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const repository = 'cooking-wiki';

const nextConfig = {
  reactStrictMode: false,
  assetPrefix: !debug ? `/${repository}/` : '',
  trailingSlash: true,
};

module.exports = nextConfig;
