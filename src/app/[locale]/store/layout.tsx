import { ReactNode } from 'react';
import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return getMetadata('store', resolvedParams.locale, '/store');
}

export default function StoreLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
