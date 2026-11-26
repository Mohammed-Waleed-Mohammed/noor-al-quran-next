/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Arabic (/) and English (/en) use separate root layouts, so the 404
    // page needs its own <html> (app/global-not-found.tsx).
    globalNotFound: true,
  },
}

module.exports = nextConfig
