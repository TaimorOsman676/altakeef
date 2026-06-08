import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  
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

  if (response) {
    response.headers.set("Content-Security-Policy", cspHeader);
  }
  return response;
}

export const config = {
  // Match all pathnames except internals and static files
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
