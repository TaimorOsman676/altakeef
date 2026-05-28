'use client';

import { useLocale } from 'next-intl';

const brands = [
  'Gree',
  'Toshiba',
  'Basic',
  'Elite',
  'Carrier',
  'Daikin',
  'LG',
  'Midea',
  'Gree',
  'Toshiba',
  'Basic',
  'Elite',
  'Carrier',
  'Daikin',
  'LG',
  'Midea'
];

export default function BrandsSlider() {
  const locale = useLocale();

  return (
    <section className="py-12 bg-[#111827] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider">
          {locale === 'ar' ? 'شركاء النجاح والعلامات التجارية المعتمدة' : 'Our Partners & Authorized Brands'}
        </h3>
      </div>
      
      {/* Infinite slider container */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {brands.map((brand, index) => (
            <div 
              key={`brand-1-${index}`}
              className="mx-8 md:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">
                {brand}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless infinite scrolling */}
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused] absolute top-0" style={{ transform: 'translateX(100%)' }}>
          {brands.map((brand, index) => (
            <div 
              key={`brand-2-${index}`}
              className="mx-8 md:mx-12 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
