import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Intercept and redirect un-localized /studio requests to default locale (/ar/studio)
  if (pathname === '/studio') {
    return NextResponse.redirect(new URL('/ar/studio', request.url));
  }
  if (pathname.startsWith('/studio/')) {
    const subPath = pathname.substring(7); // Extract path following "/studio"
    return NextResponse.redirect(new URL(`/ar/studio${subPath}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/studio", "/studio/:path*"],
};
