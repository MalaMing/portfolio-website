import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2_592_000,
  },
  experimental: {
    optimizePackageImports: [
      "@iconify/react",
      "lucide-react",
      "motion",
    ],
  },
};

export default nextConfig;
