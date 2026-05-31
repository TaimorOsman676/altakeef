'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Phone, ArrowRight, ShieldCheck, Users, BadgeDollarSign } from 'lucide-react';
import LeadForm from '@/components/ui/LeadForm';
import { services } from '@/data/services';

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};



/* ------------------------------------------------------------------ */
/*  Feature Cards                                                      */
/* ------------------------------------------------------------------ */

function FeatureCards() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const features = [
    {
      id: 1,
      icon: Users,
      title: isRTL ? 'دعم المحترفين المحليين' : 'Supporting Local Pros',
      desc: isRTL ? 'نحن ندعم الكفاءات المحلية بأفضل المعايير.' : 'We support local talent with the best standards.',
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: isRTL ? 'جودة عمل مضمونة' : 'Quality Work Guaranteed',
      desc: isRTL ? 'نضمن لك جودة العمل بنسبة 100٪.' : 'We guarantee 100% quality work for every project.',
    },
    {
      id: 3,
      icon: BadgeDollarSign,
      title: isRTL ? 'أسعار تنافسية' : 'Affordable Financing',
      desc: isRTL ? 'نقدم أفضل الأسعار التنافسية لجميع الخدمات.' : 'We offer the most competitive pricing for all services.',
    }
  ];

  return (
    <div className="relative -mt-16 sm:-mt-24 z-20 w-full max-w-[90rem] mx-auto px-4 lg:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 + 0.4 }}
              className="bg-[#111827]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl flex flex-col gap-4 group hover:-translate-y-1 hover:border-[#00E5FF]/40 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#0B1120] transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{f.title}</h4>
                <p className="text-sm text-[#94A3B8] leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-32 sm:pb-40"
      >
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0B1120]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-air-conditioner-blowing-air-4081-large.mp4" type="video/mp4" />
          </video>
          {/* Flat 30% Overlay for Readability and Styling */}
          <div className="absolute inset-0 bg-[#0B1120]/30"></div>
          <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay pointer-events-none"></div>

          {/* Decorative Glowing Elements */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#00E5FF]/20 blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#5B6BF9]/10 blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
        </div>

        {/* 2-Column Content */}
        <motion.div
          className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Buttons */}
            <div className={`flex flex-col gap-5 lg:gap-8 ${isRTL ? 'lg:pl-12' : 'lg:pr-12'} text-center lg:text-start`}>
              <motion.div variants={slideUp} className="flex flex-col gap-3 lg:gap-4">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                  {isRTL ? 'شريكك الموثوق' : 'Your Trusted Partner'} <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00B4D8]">
                    {isRTL ? 'للتميز في التكييف' : 'for HVAC Excellence'}
                  </span>
                </h1>
                <h2 className="text-lg sm:text-xl font-bold text-white/90">
                  {isRTL ? 'خبراء التكييف الموثوق بهم' : 'Your Trusted HVAC Experts'}
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  {t('subtitle')}
                </p>
              </motion.div>

              <motion.div variants={slideUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4 mt-2 w-full sm:w-auto">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3.5 sm:px-8 text-sm font-bold text-[#0B1120] transition-all hover:bg-[#2489ba] hover:text-white hover:shadow-lg hover:shadow-[#00E5FF]/25 active:scale-95"
                >
                  {isRTL ? 'خدماتنا' : 'OUR SERVICES'}
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3.5 sm:px-8 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
                >
                  {isRTL ? 'احصل على عرض سعر مجاني' : 'GET A FREE ESTIMATE'}
                  <ArrowRight className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </motion.div>


            </div>

            {/* Right Column: Floating Form */}
            <div className="w-full">
              <LeadForm className="lg:ms-auto" />
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Feature Cards Overlapping */}
      <FeatureCards />
    </>
  );
}
