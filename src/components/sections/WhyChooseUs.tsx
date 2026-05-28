'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Shield, Clock, MessageCircle, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Benefit {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
}

const benefits: Benefit[] = [
  {
    icon: <Shield className="h-8 w-8" />,
    titleKey: 'licensed',
    descKey: 'licensedDesc',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    titleKey: 'emergency',
    descKey: 'emergencyDesc',
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    titleKey: 'consultation',
    descKey: 'consultationDesc',
  },
  {
    icon: <Award className="h-8 w-8" />,
    titleKey: 'warranty',
    descKey: 'warrantyDesc',
  },
];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function WhyChooseUs() {
  const t = useTranslations('whyUs');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#1E293B] py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#00E5FF]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#00E5FF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          title={t('title')}
          subtitle={t('subtitle')}
          light
        />

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.titleKey}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular Icon */}
              <div className="relative mb-6">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#1E293B] opacity-30 blur-lg scale-125 group-hover:opacity-50 transition-opacity" />
                {/* Icon container */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#00E5FF]/70 flex items-center justify-center text-white shadow-lg shadow-[#00E5FF]/25 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3">
                {t(benefit.titleKey)}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/60 leading-relaxed max-w-xs">
                {t(benefit.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
