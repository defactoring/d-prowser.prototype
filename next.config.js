const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/d-prowser.prototype',
  reactStrictMode: true,
  swcMinify: true,
  compiler: { emotion: true },
}

module.exports = withPWA(nextConfig)
