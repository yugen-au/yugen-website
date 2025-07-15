/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output export for development
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // API routes for backend communication
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*' // Proxy to backend
      }
    ]
  }
}

module.exports = nextConfig
