import { ReactNode } from 'react';
import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return getMetadata('contact', resolvedParams.locale, '/contact');
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
