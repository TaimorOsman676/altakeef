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

  // Mutate request headers to add current pathname
  request.headers.set('x-pathname', pathname);

  const response = intlMiddleware(request);

  // Set x-pathname on the response headers as well
  response.headers.set('x-pathname', pathname);

  return response;
}

export const config = {
  // Match only internationalized pathnames, studio, and all un-localized pages
  matcher: [
    '/',
    '/(ar|en)/:path*',
    '/studio',
    '/studio/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
