'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Zap } from 'lucide-react';

interface BrandItem {
  name: string;
  taglineAr: string;
  taglineEn: string;
  image: string;
  badgeAr: string;
  badgeEn: string;
}

export default function BrandsGrid() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const globalBrands: BrandItem[] = [
    {
      name: 'Carrier',
      taglineAr: 'أمريكي - أنظمة مبردات ومناولة الهواء العملاقة للمباني الشاهقة',
      taglineEn: 'American - Chiller & Air Handling systems for high-rise buildings',
      image: '/images/projects/chiller_rooftop_real_1780822934475.png',
      badgeAr: 'ريادة تقنية',
      badgeEn: 'Tech Leader',
    },
    {
      name: 'Trane',
      taglineAr: 'أمريكي - كفاءة صناعية عالية وتبريد فائق للمصانع والمنشآت',
      taglineEn: 'American - Industrial grade cooling for factories and large facilities',
      image: '/images/projects/real_chiller_pipe_1779986146518.png',
      badgeAr: 'قوة صناعية',
      badgeEn: 'Heavy Duty',
    },
    {
      name: 'Samsung',
      taglineAr: 'كوري - ريادة أنظمة VRF الذكية DVM-S بتوفير طاقة فائق',
      taglineEn: 'Korean - Smart VRF DVM-S leader with premium energy savings',
      image: '/images/projects/service_vrf_1779960557737.png',
      badgeAr: 'تحكم ذكي',
      badgeEn: 'Smart VRF',
    },
    {
      name: 'Daikin',
      taglineAr: 'ياباني - التقنية الأدق عالمياً في التكييف المركزي وتبريد الفلل',
      taglineEn: 'Japanese - Global precision standard in central HVAC & villas',
      image: '/images/projects/service_concealed_1779960626744.png',
      badgeAr: 'دقة فائقة',
      badgeEn: 'Precision',
    },
    {
      name: 'Hitachi',
      taglineAr: 'ياباني - حلول تبريد موفرة للمساحة والكهرباء مع موثوقية ممتازة',
      taglineEn: 'Japanese - Space-saving, highly efficient, and reliable cooling',
      image: '/images/projects/real_server_room_ac_1779986105105.png',
      badgeAr: 'أعلى اعتمادية',
      badgeEn: 'High Reliability',
    },
    {
      name: 'York',
      taglineAr: 'أمريكي - أنظمة الباكج وتشيلرات الخدمة الشاقة للمشاريع الكبرى',
      taglineEn: 'American - Heavy-duty package systems & chillers for major complexes',
      image: '/images/projects/real_rooftop_ac_1779986166896.png',
      badgeAr: 'خدمة شاقة',
      badgeEn: 'Industrial',
    },
    {
      name: 'LG',
      taglineAr: 'كوري - تكنولوجيا العاكس الذكي Multi V للمشاريع التجارية',
      taglineEn: 'Korean - Smart Inverter Multi V tech built for commercial hubs',
      image: '/images/projects/service_cassette_1779960673921.png',
      badgeAr: 'انفيرتر ذكي',
      badgeEn: 'Smart Inverter',
    },
  ];

  const popularBrands: BrandItem[] = [
    {
      name: 'Gree',
      taglineAr: 'الصين - العلامة الأكثر طلباً وموثوقية في السوق السعودي للفيلات والمنازل',
      taglineEn: 'China - Most popular and trusted in Saudi market for villas & homes',
      image: '/images/projects/service_split_1779960656216.png',
      badgeAr: 'الأكثر مبيعاً',
      badgeEn: 'Best Seller',
    },
    {
      name: 'Midea',
      taglineAr: 'الصين - الخيار الذكي والاقتصادي الكفاءة العالية لتكييف الدكت المخفي',
      taglineEn: 'China - Smart and economical choice combining efficiency with great pricing',
      image: '/images/projects/real_residential_ac_1779986080889.png',
      badgeAr: 'قيمة ممتازة',
      badgeEn: 'Best Value',
    },
    {
      name: 'Zamil',
      taglineAr: 'سعودي - فخر الصناعة الوطنية المصممة لتحمل أقسى درجات الحرارة الصحراوية',
      taglineEn: 'Saudi - National pride engineered to withstand extreme desert heat',
      image: '/images/projects/real_commercial_ac_1779986043958.png',
      badgeAr: 'صناعة وطنية',
      badgeEn: 'Local Pride',
    },
    {
      name: 'O General',
      taglineAr: 'ياباني - الأقوى أداءً وتبريداً تحت درجات الحرارة الاستوائية المرتفعة',
      taglineEn: 'Japanese - Legendary cooling performance under extreme tropical heat',
      image: '/images/projects/service_central_1779960591768.png',
      badgeAr: 'أقوى تبريد',
      badgeEn: 'Extreme Cooling',
    },
    {
      name: 'Fuji Electric',
      taglineAr: 'ياباني - هدوء متناهٍ وكفاءة طاقة ممتازة تناسب غرف النوم والمجالس',
      taglineEn: 'Japanese - Extreme quiet operation and excellent energy ratings',
      image: '/images/projects/indoor_concealed_ac_1779968198770.png',
      badgeAr: 'تشغيل صامت',
      badgeEn: 'Super Silent',
    },
    {
      name: 'SKM',
      taglineAr: 'إماراتي - مصمم بجودة ومواصفات خليجية مطابقة لأعلى معايير الخليج',
      taglineEn: 'UAE - High-quality Gulf-engineered systems matching ultimate standards',
      image: '/images/projects/factory_chiller_piping_1779985905424.png',
      badgeAr: 'مواصفات خليجية',
      badgeEn: 'Gulf Specs',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F172A] to-[#0B1120] relative border-t border-white/5 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm font-bold mb-4"
          >
            <Award className="w-4 h-4 shrink-0" />
            {isRTL ? 'موزع معتمد وشريك معتمد لكبرى الشركات' : 'Authorized Distributor & Success Partner'}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
          >
            {isRTL ? 'دليل العلامات التجارية المعتمدة للتكييف' : 'Authorized HVAC Brand Directory'}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 text-base sm:text-lg leading-relaxed"
          >
            {isRTL 
              ? 'نوفر ونركب أفضل العلامات التجارية العالمية والوطنية المتوافقة مع كود البناء السعودي والهيئة السعودية للمواصفات والمقاييس (SASO).'
              : 'We supply and install top global and local brands fully compliant with the Saudi Building Code (SBC) and SASO standards.'}
          </motion.p>
        </div>

        {/* Brand Group 1: Global Central & Smart Systems */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <div className="w-2.5 h-6 bg-cyan-400 rounded-full" />
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isRTL ? 'الأنظمة المركزية والذكية العالمية' : 'Global Central & Smart VRF Systems'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalBrands.map((brand, idx) => (
              <BrandCard key={brand.name} brand={brand} isRTL={isRTL} index={idx} />
            ))}
          </div>
        </div>

        {/* Brand Group 2: Popular & Package Systems */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <div className="w-2.5 h-6 bg-emerald-400 rounded-full" />
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isRTL ? 'الأنظمة الأكثر طلباً ووحدات الباكج' : 'Popular & Package Systems'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBrands.map((brand, idx) => (
              <BrandCard key={brand.name} brand={brand} isRTL={isRTL} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function BrandCard({ brand, isRTL, index }: { brand: BrandItem; isRTL: boolean; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group bg-[#1E293B]/60 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 rounded-2xl overflow-hidden flex flex-col shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Responsive Image Section */}
      <div className="relative w-full h-[180px] sm:h-[200px] overflow-hidden bg-slate-900 shrink-0">
        <Image
          src={brand.image}
          alt={isRTL ? `أنظمة تكييف ${brand.name} في السعودية - أعمال التكييف` : `${brand.name} HVAC systems in Saudi Arabia - Al-Takeef`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover opacity-70 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
        />
        
        {/* Floating Category Badge */}
        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} z-20`}>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0F172A]/85 backdrop-blur-md border border-white/10 text-cyan-400 text-xs font-bold shadow-md">
            <Zap className="w-3.5 h-3.5 shrink-0" />
            {isRTL ? brand.badgeAr : brand.badgeEn}
          </span>
        </div>

        {/* Vignette Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/10 to-transparent z-10" />
      </div>

      {/* Text Info Section */}
      <div className="p-5 flex flex-col flex-grow bg-[#0F172A]/70 relative z-20 justify-between">
        <div>
          <h4 className="text-xl font-extrabold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
            {brand.name}
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-2 line-clamp-3">
            {isRTL ? brand.taglineAr : brand.taglineEn}
          </p>
        </div>
        
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400/80 font-semibold">
          <span>{isRTL ? 'ضمان المصنع المعتمد' : 'Official Warranty'}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        </div>
      </div>
    </motion.div>
  );
}
