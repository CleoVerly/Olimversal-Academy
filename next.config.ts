import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // izinkan foto open-source (Unsplash & Pravatar) bila pakai next/image
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
