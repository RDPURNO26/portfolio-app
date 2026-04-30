import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
