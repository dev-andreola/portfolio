/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.simpleicons.org" },
      { hostname: "res.cloudinary.com" },
      { hostname: "amadine.com" },
    ],
  },
};

export default nextConfig;
