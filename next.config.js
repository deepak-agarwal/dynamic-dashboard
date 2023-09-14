/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter')

const nextConfig = {
  reactStrictMode: true
  // experimental: {
  //   urlImports: 'all'
  // }
}

module.exports = withGluestackUI(nextConfig)
