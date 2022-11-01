/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
    providerImportSource: '@mdx-js/react',
  },
});

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'mdx'],
});

module.exports = nextConfig;
