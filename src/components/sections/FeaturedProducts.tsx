'use client';

import { useTranslations, useLocale } from 'next-intl';
import { products } from '@/data/products';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function FeaturedProducts() {
  const t = useTranslations('store'); // assuming we reuse store translations
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // Select a few major products
  const featuredIds = [18, 24, 23, 21]; // Concealed, VRF, Chiller, Ventilation
  const featured = products.filter(p => featuredIds.includes(p.id));

  // WhatsApp helper
  const getWhatsAppLink = (product: typeof products[0]) => {
    const waPhone = '966552239595';
    const pName = isRTL ? product.nameAr : product.nameEn;
    const text = isRTL
      ? `مرحباً أعمال التكييف، أود الاستفسار عن تسعيرة للمشروع التالي:\n- النظام: ${pName}\n- الموديل: ${product.model}\nأرجو التواصل معي.`
      : `Hello Al-Takeef, I would like to request a quote for:\n- System: ${pName}\n- Model: ${product.model}\nPlease contact me.`;
    return `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-[#0B1120] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#00E5FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {isRTL ? 'المنتجات والأنظمة المميزة' : 'Featured Systems'}
            </h2>
            <p className="text-[#94A3B8] max-w-2xl">
              {isRTL 
                ? 'نقدم أحدث أنظمة التبريد والتهوية التجارية والصناعية بأعلى المواصفات والمعايير العالمية.' 
                : 'We provide the latest commercial and industrial cooling and ventilation systems with the highest global standards.'}
            </p>
          </div>
          
          <Link 
            href="/store"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[#00E5FF] hover:text-[#0B1120] transition-all"
          >
            {isRTL ? 'تصفح المتجر بالكامل' : 'View Full Store'}
            {isRTL ? <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> : <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => {
            const pName = isRTL ? product.nameAr : product.nameEn;
            
            // Determine category color
            let headerColor = "from-blue-500 to-cyan-500";
            if (product.category === 'concealed' || product.category === 'central' || product.category === 'packages') {
              headerColor = "from-purple-500 to-indigo-500";
            } else if (product.category === 'chiller' || product.category === 'vrf') {
              headerColor = "from-red-500 to-orange-500";
            }

            return (
              <div 
                key={product.id} 
                className="bg-[#0F172A] rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 flex flex-col group h-full overflow-hidden relative"
              >
                {/* Colored Header Curve */}
                <div className={`pt-6 pb-8 px-4 bg-gradient-to-br ${headerColor} flex flex-col items-center justify-center text-center relative`}>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/80 mb-1">
                    {product.brand}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 leading-tight">
                    {pName}
                  </h3>
                  {/* Curve clip */}
                  <div className="absolute -bottom-6 left-0 right-0 h-12 bg-[#0F172A] rounded-t-[50%] scale-110" />
                </div>

                {/* Image Section */}
                <div className="relative h-40 sm:h-48 w-full flex items-center justify-center mt-2 px-4">
                  <div className="relative w-full h-full bg-[#1E293B] rounded-2xl overflow-hidden flex items-center justify-center">
                    <Image 
                      src={product.image} 
                      alt={pName}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 z-10 mix-blend-screen"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>

                {/* Details Section */}
                <div className="px-4 py-4 flex flex-col flex-grow">
                  
                  {/* Price and Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] md:text-sm font-bold text-white">
                        {isRTL ? 'تسعيرة مخصصة' : 'Custom Quote'}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 text-yellow-400 text-[10px] sm:text-xs">
                      ★ ★ ★ ★ <span className="text-white/20">★</span>
                    </div>
                  </div>
                  
                  {/* Key-Value Specs */}
                  <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1.5 text-[9px] md:text-[10px] mb-4">
                    <span className="text-[#64748B] font-medium uppercase">{isRTL ? 'الماركة' : 'Brand'}</span>
                    <span className="text-white font-semibold text-right">{product.brand}</span>
                    
                    <span className="text-[#64748B] font-medium uppercase">{isRTL ? 'السعة' : 'Capacity'}</span>
                    <span className="text-white font-semibold text-right">{product.capacity.toLocaleString()} BTU</span>
                  </div>

                  {/* Bottom Full Width Action Button */}
                  <div className="mt-auto pt-2">
                    <a 
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center bg-[#FBBF24] hover:bg-[#F59E0B] text-black py-3 sm:py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-wider transition-colors shadow-lg"
                    >
                      {isRTL ? 'طلب تسعيرة' : 'Request Quote'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
