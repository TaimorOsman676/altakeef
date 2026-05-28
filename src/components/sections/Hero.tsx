'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Phone, Send } from 'lucide-react';
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
/*  Star Rating Badge                                                  */
/* ------------------------------------------------------------------ */

function RatingBadge({ rating, reviews }: { rating: string; reviews: string }) {
  return (
    <motion.div
      variants={slideUp}
      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20"
    >
      <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
      <span className="text-white font-semibold text-sm">5.0</span>
      <span className="text-white/60 text-sm">•</span>
      <span className="text-white/70 text-sm">{rating} — {reviews}</span>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Lead Capture Form                                                  */
/* ------------------------------------------------------------------ */

function LeadForm() {
  const t = useTranslations('form');
  const locale = useLocale();

  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const nameRef = React.useRef<HTMLInputElement>(null);
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const serviceRef = React.useRef<HTMLSelectElement>(null);

  const serviceOptions = services.map((s) => ({
    value: s.slug,
    label: locale === 'ar' ? s.nameAr : s.nameEn,
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const service = serviceRef.current?.value;
    
    if (!name || !phone || !service) return; // Basic validation

    setStatus('loading');
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@altakeef.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Service: serviceOptions.find(s => s.value === service)?.label || service,
          _subject: "New Website Request - Aamal Al-Takeef",
        })
      });
      if (res.ok) {
        setStatus('success');
        // Reset form
        if (nameRef.current) nameRef.current.value = '';
        if (phoneRef.current) phoneRef.current.value = '';
        if (serviceRef.current) serviceRef.current.value = '';
        // Revert to idle after 4 seconds
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch(err) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      variants={slideUp}
      className="w-full max-w-3xl mx-auto mt-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row items-stretch gap-2 rounded-2xl bg-white/10 backdrop-blur-md p-2 border border-white/20 shadow-2xl relative">
        {/* Name */}
        <input
          ref={nameRef}
          type="text"
          required
          disabled={status === 'loading'}
          placeholder={t('namePlaceholder')}
          className="flex-1 min-w-0 rounded-xl bg-[#111827]/90 px-4 py-3 text-white placeholder:text-[#64748B] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition disabled:opacity-50"
          aria-label={t('name')}
        />
        {/* Phone */}
        <input
          ref={phoneRef}
          type="tel"
          required
          disabled={status === 'loading'}
          placeholder={t('phonePlaceholder')}
          dir="ltr"
          className="flex-1 min-w-0 rounded-xl bg-[#111827]/90 px-4 py-3 text-white placeholder:text-[#64748B] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition disabled:opacity-50"
          aria-label={t('phone')}
        />
        {/* Service Select */}
        <select
          ref={serviceRef}
          required
          disabled={status === 'loading'}
          className="flex-1 min-w-0 rounded-xl bg-[#111827]/90 px-4 py-3 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#00E5FF]/50 transition appearance-none cursor-pointer disabled:opacity-50"
          aria-label={t('service')}
          defaultValue=""
        >
          <option value="" disabled>
            {t('selectService')}
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white font-semibold text-sm shadow-lg transition-all cursor-pointer whitespace-nowrap
            ${status === 'success' 
              ? 'bg-green-500 shadow-green-500/25' 
              : status === 'error'
              ? 'bg-red-500 shadow-red-500/25'
              : 'bg-gradient-to-r from-[#D42B2B] to-[#b51f1f] hover:shadow-xl hover:shadow-[#D42B2B]/35 shadow-[#D42B2B]/25'}
            disabled:opacity-70
          `}
        >
          {status === 'loading' ? (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : status === 'success' ? (
            <span>{locale === 'ar' ? 'تم الإرسال!' : 'Sent!'}</span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              {status === 'error' ? (locale === 'ar' ? 'خطأ' : 'Error') : t('submit')}
            </>
          )}
        </motion.button>
      </div>
      {status === 'success' && (
        <p className="text-green-400 text-xs mt-2 text-center">
          {locale === 'ar' ? 'سيتم التواصل معك قريباً. يرجى التحقق من بريدك الإلكتروني.' : 'We will contact you soon. (Please check info@altakeef.com to activate first).'}
        </p>
      )}
    </motion.form>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const t = useTranslations('hero');
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Stunning Image Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0B1120]">
        <img
          src="/images/page-header-bg.png"
          alt="Hero Background"
          className="absolute min-w-full min-h-full object-cover opacity-50 mix-blend-overlay"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/40 to-[#0B1120]"></div>
      </div>

      {/* Decorative Glowing Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-screen">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00E5FF]/20 blur-[100px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#5B6BF9]/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Rating Badge */}
        <motion.div
          variants={slideUp}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/20 mb-2"
        >
          <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
          <span className="text-white font-semibold text-sm">5.0</span>
          <span className="text-white/60 text-sm">•</span>
          <span className="text-white/70 text-sm">{t('rating')} — {t('reviewCount')}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={slideUp}
          className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
        >
          {t('title')}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={slideUp}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* Lead Capture Form */}
        <LeadForm />

        {/* CTA Buttons */}
        <motion.div
          variants={slideUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="tel:+966552239595"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-6 py-3 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {t('cta1')}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-xl bg-[#D42B2B] px-6 py-3 text-white font-semibold text-sm shadow-lg shadow-[#D42B2B]/30 hover:shadow-xl hover:shadow-[#D42B2B]/40 transition-shadow"
          >
            {t('cta2')}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </section>
  );
}
