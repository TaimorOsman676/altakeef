'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { services, type ServiceCategory } from '@/data/services';
import {
  Building2,
  Wind,
  EyeOff,
  Snowflake,
  Server,
  AirVent,
  LayoutGrid,
  Wrench,
  Fan,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ------------------------------------------------------------------ */
/*  Icon map                                                           */
/* ------------------------------------------------------------------ */

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-7 w-7" />,
  Wind: <Wind className="h-7 w-7" />,
  EyeOff: <EyeOff className="h-7 w-7" />,
  Snowflake: <Snowflake className="h-7 w-7" />,
  Server: <Server className="h-7 w-7" />,
  AirVent: <AirVent className="h-7 w-7" />,
  LayoutGrid: <LayoutGrid className="h-7 w-7" />,
  Wrench: <Wrench className="h-7 w-7" />,
  Fan: <Fan className="h-7 w-7" />,
};

/* ------------------------------------------------------------------ */
/*  Category tabs                                                      */
/* ------------------------------------------------------------------ */

type FilterCategory = 'all' | ServiceCategory;

const categoryColors: Record<FilterCategory, string> = {
  all: 'from-[#00E5FF] to-[#1E293B]',
  commercial: 'from-[#00E5FF] to-[#1E293B]',
  residential: 'from-[#00E5FF] to-[#00E5FF]',
  support: 'from-[#D42B2B] to-[#b51f1f]',
};

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function ServicesGrid() {
  const t = useTranslations('services');
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [activeTab, setActiveTab] = useState<FilterCategory>('all');

  const isRTL = locale === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const tabs: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: locale === 'ar' ? 'الكل' : 'All' },
    { key: 'commercial', label: t('commercial') },
    { key: 'residential', label: t('residential') },
    { key: 'support', label: t('support') },
  ];

  const filtered =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.category === activeTab);

  return (
    <section ref={ref} className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#09090B] via-[#020617] to-[#020813] py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle neon glowing orb in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00E5FF]/10 blur-[120px] pointer-events-none rounded-[100%]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={[
                  'relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer',
                  isActive
                    ? `bg-gradient-to-r ${categoryColors[tab.key]} text-white shadow-lg`
                    : 'bg-[#111827] text-[#94A3B8] hover:text-white hover:shadow-md border border-white/10',
                ].join(' ')}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                exit="exit"
                layout
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-[400px] rounded-[40%_5%_40%_5%] bg-[#111827]/80 backdrop-blur-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-white/10 hover:border-[#00E5FF]/40 relative flex flex-col"
                >
                  {/* Dynamic Image Section (70% Height) */}
                  <div className="relative w-full h-[70%] bg-[#0B1120] overflow-hidden shrink-0">
                    <Image 
                      src={service.image} 
                      alt={locale === 'ar' ? service.nameAr : service.nameEn} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" 
                      sizes="(max-w-7xl) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10"></div>
                    
                    {/* Floating Icon inside image area */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[service.category]} text-white shadow-lg`}>
                        {iconMap[service.icon] || <Building2 className="h-6 w-6" />}
                      </div>
                    </div>
                  </div>

                  {/* Text Content Area (30% Height) */}
                  <div className="p-5 flex flex-col flex-grow bg-[#111827] relative z-20 justify-center">
                    {/* Name */}
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                      {locale === 'ar' ? service.nameAr : service.nameEn}
                    </h3>

                    {/* Smooth fading Description */}
                    <div className="relative overflow-hidden h-10 w-full">
                      <p className="absolute inset-0 text-xs text-[#94A3B8] leading-relaxed line-clamp-2 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500">
                        {locale === 'ar' ? service.descriptionAr : service.descriptionEn}
                      </p>
                      
                      {/* Learn More (Slides up on hover) */}
                      <span className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        {t('viewAllServices').split(' ')[0]}
                        <Arrow className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
