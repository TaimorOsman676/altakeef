import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.salla.sa",
      },
      {
        protocol: "https",
        hostname: "cdn.files.salla.network",
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
    webpackBuildWorker: false,
    webpackMemoryOptimizations: true,
  },
};

export default withNextIntl(nextConfig);
