import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui';
import { ServicesGrid, WhyChooseUs, CTABanner } from '@/components/sections';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'services' });
  return {
    title: `${t('title')} | Al-Takeef`,
    description: t('subtitle'),
  };
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
