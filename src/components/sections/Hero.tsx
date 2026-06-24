'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Phone, ShieldCheck, Users, BadgeDollarSign } from 'lucide-react';

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
      title: isRTL ? 'تصميم وتركيب التكييف المركزي' : 'Commercial Central AC',
      desc: isRTL ? 'تصميم وتنفيذ أنظمة التكييف المركزي وVRF للمجمعات والأبراج التجارية والمنشآت الصناعية.' : 'Precision design and installation of Central AC and VRF systems for commercial buildings.',
      image: '/images/projects/real_residential_ac_1779986080889.png',
    },
    {
      id: 2,
      icon: ShieldCheck,
      title: isRTL ? 'مقاول معتمد ومطابق للمواصفات SASO' : 'Certified Quality & SASO Units',
      desc: isRTL ? 'توريد مباشر من أكبر العلامات العالمية بضمان المصنع ومطابقة المواصفات السعودية القياسية.' : 'Authorized supplier of top global brands fully compliant with Saudi SASO engineering standards.',
      image: '/images/projects/real_commercial_ac_1779986043958.png',
    },
    {
      id: 3,
      icon: BadgeDollarSign,
      title: isRTL ? 'دكت تكييف وشيلر للمشاريع الضخمة' : 'Chillers & Duct Fabrication',
      desc: isRTL ? 'تفصيل وتمديد مجاري الهواء المجلفنة وتركيب محطات الشيلر للمستشفيات والمراكز التجارية.' : 'High-capacity chiller plant installation and galvanized duct fabrication for large-scale facilities.',
      image: '/images/projects/professional_ac_maintenance_1779926297502.png',
    }
  ];

  return (
    <section className="relative -mt-16 sm:-mt-24 z-20 w-full max-w-[90rem] mx-auto px-4 lg:px-8 mb-16">
      <h2 className="sr-only">{isRTL ? "مزايا وخدمات مؤسسة أعمال التكييف للمقاولات" : "Al-Takeef HVAC Contracting Key Advantages"}</h2>
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
              className="bg-[#111827]/90 backdrop-blur-sm border border-white/10 rounded-[5%_0%_5%_0%] overflow-hidden shadow-2xl flex flex-col group hover:-translate-y-1 hover:border-[#00E5FF]/40 transition-all h-[360px]"
            >
              {/* Image Section (70% Height) */}
              <div className="relative w-full h-[70%] bg-[#0B1120] overflow-hidden shrink-0">
                <Image 
                  src={f.image} 
                  alt={isRTL ? `${f.title} بالرياض والخرج - مؤسسة أعمال التكييف` : `${f.title} in Riyadh & Al-Kharj - Al-Takeef`} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10"></div>
                
                {/* Floating Icon inside image area */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#0B1120] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Text Section (30% Height) */}
              <div className="p-5 flex flex-col flex-grow bg-[#111827] justify-center relative z-20">
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors line-clamp-1">{f.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
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

  // Only load background video on desktop viewports to optimize mobile LCP bandwidth
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setShowVideo(true);
    }
  }, []);

  return (
    <>
      <section
        ref={ref}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-32 sm:pb-40 group"
      >
        {/* Full Screen Background: Video on Desktop, Premium Image on Mobile */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0B1120]">
          {/* Background Image: Always rendered as base/fallback layer */}
          <Image
            src="/images/hero-fallback.png"
            alt="Al-Takeef HVAC systems villa background"
            fill
            priority
            className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700"
            sizes="100vw"
          />

          {showVideo && (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              tabIndex={-1}
              className="absolute w-full h-full object-cover hidden lg:block opacity-30 group-hover:opacity-60 transition-opacity duration-700"
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          )}
          {/* Flat 70% Overlay for Readability and Styling */}
          <div className="absolute inset-0 bg-[#0B1120]/70"></div>
          <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay pointer-events-none"></div>

          {/* Decorative Glowing Elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        {/* Center-aligned typographic content */}
        <motion.div
          className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-6 sm:gap-8">
            
            <motion.div variants={slideUp} className="flex flex-col gap-4 sm:gap-5">
              {/* Main H1 Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-normal tracking-tight drop-shadow-lg">
                {isRTL 
                  ? 'مقاول تكييف مركزي معتمد للمشاريع التجارية والصناعية بالرياض' 
                  : 'Certified Commercial HVAC Contractor for Industrial & Project-Scale Installations in Riyadh'}
              </h1>
              
              {/* H2 Sub-headline */}
              <p className="text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed max-w-3xl mx-auto">
                {isRTL 
                  ? 'نتخصص في توريد وتركيب أنظمة التكييف المركزي وVRF والشيلر للمجمعات التجارية والمستشفيات والأبراج الكبرى. نطاق خدماتنا: المشاريع الكبيرة فقط.'
                  : 'Specialists in supply and installation of Central AC, VRF, and Chiller systems for commercial complexes, hospitals, and major towers. We serve large-scale projects only.'}
              </p>

              {/* Saudi SCE & SBC Trust Badges */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm md:text-base font-bold text-emerald-400">
                <span className="flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  {isRTL ? '✓ جميع مهندسينا معتمدون من الهيئة السعودية للمهندسين' : '✓ All our engineers are certified by Saudi Council of Engineers'}
                </span>
                <span className="flex items-center gap-1.5 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                  {isRTL ? '✓ تنفيذ كامل مطابق لمواصفات كود البناء السعودي (SBC)' : '✓ Full implementation matching the Saudi Building Code (SBC)'}
                </span>
              </div>
            </motion.div>

            {/* CRO High-Intent CTAs */}
            <motion.div 
              variants={slideUp} 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto"
            >
              {/* Primary Call Button (Amber) */}
              <a
                href="tel:+966552239595"
                onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_two) { (window as any).gtag_report_conversion_two('tel:+966552239595'); } }}
                className="w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#FBBF24] text-[#121212] hover:bg-[#FBBF24]/90 px-6 py-2.5 text-sm sm:text-base font-black transition-all hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 active:scale-95 duration-200"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 fill-current shrink-0" />
                <span>{isRTL ? 'اتصل بمشرف المشاريع' : 'Call Project Supervisor'}</span>
              </a>

              {/* Secondary WhatsApp Button (Glass/Green style) */}
              <a
                href={isRTL ? 'https://wa.me/966552239595?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%20%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81.' : `https://wa.me/966552239595?text=${encodeURIComponent('Hello, I would like to request a free consultation for my HVAC project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white hover:bg-[#25D366]/90 px-6 py-2.5 text-sm sm:text-base font-black transition-all hover:-translate-y-0.5 active:scale-95 duration-200"
              >
                {/* WhatsApp SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{isRTL ? 'استشارة مجانية عبر واتساب' : 'Free WhatsApp Consultation'}</span>
              </a>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Feature Cards Overlapping */}
      <FeatureCards />
    </>
  );
}
