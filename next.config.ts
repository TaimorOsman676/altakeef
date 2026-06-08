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
  async headers() {
    const cspHeader = [
      "default-src 'self';",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;",
      "script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://api.web3forms.com https://*.api.sanity.io https://*.apicdn.sanity.io;",
      "img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://images.unsplash.com https://cdn.salla.sa https://cdn.files.salla.network https://cdn.sanity.io;",
      "style-src 'self' 'unsafe-inline';",
      "font-src 'self' data: https://fonts.gstatic.com;",
      "frame-src 'self' https://www.google.com https://www.googletagmanager.com;",
      "object-src 'none';",
      "base-uri 'self';",
      "form-action 'self';",
      "frame-ancestors 'none';",
      "upgrade-insecure-requests;"
    ].join(" ").replace(/\s{2,}/g, " ").trim();

    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
