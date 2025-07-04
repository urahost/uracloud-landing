/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cp.urahost.fr" },
      { hostname: "images.unsplash.com" },
      { hostname: "assets.aceternity.com" },
    ],
  },
};

export default nextConfig;
