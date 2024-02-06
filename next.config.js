/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "cdn.dsmcdn.com" },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;