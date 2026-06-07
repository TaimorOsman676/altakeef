import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui';
import { ServicesGrid, WhyChooseUs, CTABanner } from '@/components/sections';

import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return getMetadata('services', resolvedParams.locale, '/services');
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="services" />
      <div className="pt-12">
        <ServicesGrid />
      </div>
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
