import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/ui';
import { StatsCounter, WhyChooseUs, CTABanner } from '@/components/sections';
import { Target, Eye, ShieldCheck } from 'lucide-react';

import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  return getMetadata('about', resolvedParams.locale, '/about');
}

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="about" />

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-32 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="bg-[#0B1120] rounded-2xl p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-[#00E5FF] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#00E5FF]/20">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('mission')}</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                {t('missionDesc')}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0B1120] rounded-2xl p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-[#1E293B] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#1E293B]/20">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('vision')}</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                {t('visionDesc')}
              </p>
            </div>

            {/* Values */}
            <div className="bg-[#0B1120] rounded-2xl p-8 transition-transform hover:-translate-y-2 duration-300">
              <div className="bg-[#D42B2B] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#D42B2B]/20">
                <ShieldCheck className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('values')}</h2>
              <p className="text-[#94A3B8] leading-relaxed">
                {t('valuesDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse homepage sections */}
      <StatsCounter />
      <WhyChooseUs />
      <CTABanner />
    </>
  );
}
