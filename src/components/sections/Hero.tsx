'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Phone, Send, ArrowRight, ShieldCheck, Users, BadgeDollarSign } from 'lucide-react';
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

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Lead Capture Form (Vertical layout)                                */
/* ------------------------------------------------------------------ */

function LeadForm() {
  const t = useTranslations('form');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const serviceRef = React.useRef<HTMLSelectElement>(null);
  const messageRef = React.useRef<HTMLInputElement>(null);

  const serviceOptions = services.map((s) => ({
    value: s.slug,
    label: isRTL ? s.nameAr : s.nameEn,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const service = serviceRef.current?.value;
    const message = messageRef.current?.value || "No additional message";
    
    if (!name || !phone || !service) return;

    setStatus('loading');
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: "6e386de1-3e23-455f-8e04-4450f87e3236",
          Name: name,
          Phone: phone,
          Service: serviceOptions.find(s => s.value === service)?.label || service,
          Message: message,
          from_name: "Al-Takeef Website",
          subject: "New Website Request - Aamal Al-Takeef",
        })
      });
      if (res.ok) {
        setStatus('success');
        if (nameRef.current) nameRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (serviceRef.current) serviceRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch(err) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      variants={slideInRight}
      className="w-full max-w-[24rem] mx-auto lg:ms-auto rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120]/60 to-[#00E5FF]/5 -z-10" />
      
      <div className="mb-5 text-center">
        <h3 className="text-xl font-bold text-white mb-1">
          {isRTL ? 'احجز خدمتك الآن' : 'Book Our Service'}
        </h3>
        <p className="text-sm text-[#94A3B8]">
          {isRTL ? 'نحن هنا لخدمتك بأفضل المعايير. تواصل معنا اليوم.' : 'We are here to serve you with the best standards. Contact us today.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          ref={nameRef}
          type="text"
          required
          disabled={status === 'loading'}
          placeholder={t('namePlaceholder')}
          className="w-full rounded-xl bg-white/90 px-4 py-3 text-[#0B1120] placeholder:text-[#64748B] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition disabled:opacity-50 shadow-inner"
          aria-label={t('name')}
        />
        <input
          ref={phoneRef}
          type="tel"
          required
          disabled={status === 'loading'}
          placeholder={t('phonePlaceholder')}
          dir="ltr"
          className="w-full rounded-xl bg-white/90 px-4 py-3 text-[#0B1120] placeholder:text-[#64748B] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition disabled:opacity-50 shadow-inner"
          aria-label={t('phone')}
        />
        <select
          ref={serviceRef}
          required
          disabled={status === 'loading'}
          className="w-full rounded-xl bg-white/90 px-4 py-3 text-[#0B1120] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition cursor-pointer disabled:opacity-50 shadow-inner"
          aria-label={t('service')}
          defaultValue=""
        >
          <option value="" disabled>{t('selectService')}</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <input
          ref={messageRef}
          type="text"
          disabled={status === 'loading'}
          placeholder={isRTL ? 'تفاصيل إضافية عن طلبك...' : 'Additional details...'}
          className="w-full rounded-xl bg-white/90 px-4 py-3 text-[#0B1120] placeholder:text-[#64748B] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF] transition disabled:opacity-50 shadow-inner"
        />

        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3 text-white font-bold text-sm shadow-lg transition-all cursor-pointer
            ${status === 'success' ? 'bg-green-500' : status === 'error' ? 'bg-red-500' : 'bg-[#00E5FF] hover:bg-[#2489ba] hover:shadow-xl hover:shadow-[#00E5FF]/25 text-[#0B1120]'}
            disabled:opacity-70
          `}
        >
          {status === 'loading' ? (
            <span className="w-5 h-5 border-2 border-[#0B1120]/40 border-t-[#0B1120] rounded-full animate-spin" />
          ) : status === 'success' ? (
            <span className="text-white">{isRTL ? 'تم الإرسال بنجاح!' : 'Sent Successfully!'}</span>
          ) : (
            <span className="flex items-center gap-2 text-[#0B1120]">
              <Send className="h-4 w-4" />
              <span>{status === 'error' ? (isRTL ? 'خطأ' : 'Error') : t('submit')}</span>
            </span>
          )}
        </motion.button>

        <div className="h-4 mt-1">
          {status === 'success' && (
            <p className="text-green-400 text-xs text-center font-medium">
              {isRTL ? 'سيتم التواصل معك قريباً' : 'We will contact you shortly'}
            </p>
          )}
        </div>
      </form>
    </motion.div>
  );
}

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
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl shadow-black/5 flex flex-col gap-4 group hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0B1120] mb-2">{f.title}</h4>
                <p className="text-sm text-[#64748B] leading-relaxed">{f.desc}</p>
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
        {/* Split Background Image & Overlays */}
        <div className="absolute inset-0 flex flex-col lg:flex-row w-full h-full overflow-hidden">
          {/* Left 50% - Solid Theme Color */}
          <div className="w-full lg:w-1/2 h-full bg-[#0B1120] relative z-0">
             {/* Decorative Glowing Element on the left */}
             <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#00E5FF]/10 blur-[100px] animate-pulse pointer-events-none" />
          </div>
          
          {/* Right 50% - Stunning Image/Video */}
          <div className="w-full lg:w-1/2 h-full relative z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-air-conditioner-blowing-air-4081-large.mp4" type="video/mp4" />
            </video>
            {/* Gradient Overlay to blend with the dark theme and make form readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 lg:via-[#0B1120]/40 to-[#0B1120]/80"></div>
            <div className="absolute inset-0 bg-[#00E5FF]/5 mix-blend-overlay"></div>
          </div>
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
            <LeadForm />
            
          </div>
        </motion.div>
      </section>

      {/* Feature Cards Overlapping */}
      <FeatureCards />
    </>
  );
}
