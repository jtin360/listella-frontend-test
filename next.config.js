/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['mars.jpl.nasa.gov']
  },
  reactStrictMode: true
}

module.exports = nextConfig
