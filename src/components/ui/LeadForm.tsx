'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Send } from 'lucide-react';
import { services } from '@/data/services';

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function LeadForm({ className = "" }: { className?: string }) {
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
      className={`w-full max-w-[24rem] mx-auto rounded-3xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-2xl relative overflow-hidden ${className}`}
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
