import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve files from /public as-is. Vercel's image optimizer returns 402 once
    // the account's optimization quota is used up, which broke every image in
    // production. The source images are pre-compressed WebP instead.
    unoptimized: true,
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
