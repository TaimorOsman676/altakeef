'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { SectionHeading } from '@/components/ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = {
  ar: [
    {
      q: 'ما هي أنواع أجهزة التكييف التي تقومون بتركيبها؟',
      a: 'نقوم بتوريد وتركيب جميع أنواع أنظمة التكييف بما في ذلك التكييف المركزي، أنظمة VRF، التكييف المخفي (دكت سبليت)، الشيلر، والمكيفات الجدارية والكاسيت.'
    },
    {
      q: 'هل تقدمون ضمان على أعمال التركيب؟',
      a: 'نعم، نقدم ضماناً شاملاً على جميع أعمال التركيب بالإضافة إلى ضمان الوكيل على أجهزة التكييف نفسها والذي يمتد عادة من 5 إلى 7 سنوات على الكمبريسور.'
    },
    {
      q: 'هل تقومون بتصنيع مجاري الهواء (الدكت)؟',
      a: 'نعم، نمتلك مصنعاً مجهزاً بأحدث ماكينات CNC لتصنيع مجاري الهواء وفقاً لأعلى المواصفات العالمية (SMACNA) لضمان جودة تدفق الهواء وعدم تسريبه.'
    },
    {
      q: 'هل تقدمون عقود صيانة سنوية للمباني والمجمعات؟',
      a: 'بالتأكيد، نقدم عقود صيانة وقائية وعلاجية سنوية بأسعار تنافسية للمباني السكنية، المجمعات التجارية، والمرافق الحكومية مع فريق طوارئ متاح 24/7.'
    },
    {
      q: 'ما هي المناطق التي تغطيها خدماتكم؟',
      a: 'المركز الرئيسي لعملياتنا هو في الرياض والخرج، ونغطي جميع المناطق المجاورة لتلبية احتياجات عملائنا.'
    }
  ],
  en: [
    {
      q: 'What types of AC systems do you install?',
      a: 'We supply and install all types of HVAC systems including Central AC, VRF systems, Concealed Duct Split, Chillers, Wall-mounted Splits, and Cassette ACs.'
    },
    {
      q: 'Do you provide a warranty on installation work?',
      a: 'Yes, we provide a comprehensive warranty on all our installation works, in addition to the manufacturer\'s warranty on the AC units which usually extends from 5 to 7 years on the compressor.'
    },
    {
      q: 'Do you manufacture air ducts?',
      a: 'Yes, we have our own factory equipped with the latest CNC machines to manufacture air ducts according to the highest international standards (SMACNA) to ensure quality airflow and prevent leaks.'
    },
    {
      q: 'Do you offer annual maintenance contracts for buildings and complexes?',
      a: 'Absolutely, we offer preventive and corrective annual maintenance contracts at competitive prices for residential buildings, commercial complexes, and government facilities with a 24/7 emergency team.'
    },
    {
      q: 'What areas do your services cover?',
      a: 'Our main operations are based in Riyadh and Al-Kharj, and we cover all neighboring areas to meet our clients\' needs.'
    }
  ]
};

export default function FAQAccordion() {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  
  const currentFaqs = locale === 'ar' ? faqs.ar : faqs.en;

  return (
    <section className="py-20 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title={locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'} 
          subtitle={locale === 'ar' ? 'إجابات على أكثر الأسئلة شيوعاً حول خدماتنا' : 'Answers to the most common questions about our services'} 
          centered 
        />
        
        <div className="mt-12 space-y-4">
          {currentFaqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                openIndex === index ? 'border-amber-500 bg-amber-900/30' : 'border-white/10 hover:border-gray-300/30 bg-transparent'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full p-6 text-start focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-white' : 'text-[#94A3B8]'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                  openIndex === index ? 'bg-amber-500 text-white' : 'bg-white/5 text-[#94A3B8]'
                }`}>
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-[#94A3B8] leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
