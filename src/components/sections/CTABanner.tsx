'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';

export default function CTABanner() {
  const t = useTranslations('cta');

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0F172A] to-[#1E3A8A] border-y border-white/5 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[60%] rounded-full bg-[#3B82F6] blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#1E40AF] blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="phone" size="lg" className="w-full sm:w-auto min-w-[200px]" />
            <Button variant="primary" size="lg" href="/contact" className="w-full sm:w-auto min-w-[200px] bg-[#111827] text-white hover:bg-[#0F172A] border-none">
              {t('button')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
