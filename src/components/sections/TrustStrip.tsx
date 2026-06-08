'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Clock, Wrench, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const trustItems = [
    {
      icon: Clock,
      title: isRTL ? 'استجابة سريعة' : 'Fast Response',
      desc: isRTL ? 'استجابة سريعة للمشاريع والصيانة' : 'Fast Response for Projects & Maintenance',
    },
    {
      icon: Wrench,
      title: isRTL ? 'طاقم فني متخصص' : 'Specialized Team',
      desc: isRTL ? 'طاقم فني متخصص متاح 24/7' : 'Specialized Technical Team Available 24/7',
    },
    {
      icon: ShieldCheck,
      title: isRTL ? 'الالتزام بالكود السعودي' : 'SBC Compliance',
      desc: isRTL ? 'خبرة طويلة في السوق السعودي والالتزام بالكود المحلي' : 'Long Experience in the Saudi Market & Local Code Compliance',
    },
  ];

  return (
    <section className="relative z-20 w-full max-w-[90rem] mx-auto px-4 lg:px-8 mb-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <h2 className="sr-only">{isRTL ? "عوامل الموثوقية والأمان" : "Trust and Reliability Factors"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#111827]/60 hover:bg-[#1E293B]/60 border border-white/5 hover:border-[#00E5FF]/20 transition-all duration-300 group"
            >
              <div className="p-3.5 bg-[#00E5FF]/10 rounded-xl text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-[#0B1120] transition-colors shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-white text-sm md:text-base group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
