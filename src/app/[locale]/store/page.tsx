'use client';

import { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { 
  MessageSquare, 
  Search, 
  SlidersHorizontal, 
  Truck, 
  Wrench, 
  ShieldCheck, 
  BadgePercent,
  Star,
  Activity
} from 'lucide-react';
import Image from 'next/image';
import { products } from '@/data/products';

export default function StorePage() {
  const t = useTranslations('store');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  // Categories list
  const categories = useMemo(() => [
    { key: 'all', labelAr: 'جميع الأنواع', labelEn: 'All Categories' },
    { key: 'split', labelAr: 'سبليت جداري', labelEn: 'Split Wall AC' },
    { key: 'concealed', labelAr: 'دكت سبليت مخفي', labelEn: 'Concealed Duct' },
    { key: 'cassette', labelAr: 'كاسيت سقفي', labelEn: 'Ceiling Cassette' },
    { key: 'central', labelAr: 'تكييف مركزي', labelEn: 'Central AC' },
    { key: 'packages', labelAr: 'باقات التأسيس', labelEn: 'Packages' },
    { key: 'ventilation', labelAr: 'حلول التهوية', labelEn: 'Ventilation' },
    { key: 'crac', labelAr: 'تكييف غرف السيرفرات', labelEn: 'CRAC Units' },
    { key: 'chiller', labelAr: 'المبردات (تشيلر)', labelEn: 'Chillers' },
    { key: 'vrf', labelAr: 'تكييف VRF', labelEn: 'VRF Systems' },
    { key: 'maintenance', labelAr: 'عقود الصيانة', labelEn: 'Maintenance' },
  ], []);

  // Brands list
  const brands = useMemo(() => ['all', 'Gree', 'Toshiba', 'Basic'], []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesSearch = searchQuery === '' || 
          p.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase());
          
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesBrand = selectedBrand === 'all' || p.brand === selectedBrand;
        
        return matchesSearch && matchesCategory && matchesBrand;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') {
          return a.price - b.price;
        }
        if (sortBy === 'price_desc') {
          return b.price - a.price;
        }
        return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedBrand, sortBy]);

  // WhatsApp helper
  const getWhatsAppLink = (product: typeof products[0]) => {
    const waPhone = '966552239595';
    const pName = isRTL ? product.nameAr : product.nameEn;
    const text = isRTL
      ? `مرحباً أعمال التكييف، أود شراء المنتج التالي:\n- الاسم: ${pName}\n- الموديل: ${product.model}\n- السعر: ${product.price} ريال سعودي\nأرجو التواصل لتأكيد الطلب والتوصيل.`
      : `Hello Al-Takeef, I would like to buy this product:\n- Name: ${pName}\n- Model: ${product.model}\n- Price: ${product.price} SAR\nPlease contact me to confirm order and installation.`;
    return `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#0B1120]" dir={isRTL ? 'rtl' : 'ltr'}>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="store" />

      {/* ========================================== */}
      {/* TRUST / GUARANTEES SECTION                */}
      {/* ========================================== */}
      <section className="py-10 bg-[#111827] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1120]/40 border border-[#00E5FF]/10">
              <div className="p-3 bg-[#00E5FF]/10 rounded-xl text-[#00E5FF]">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'توصيل سريع' : 'Fast Delivery'}
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'توصيل للمنزل في الرياض والخرج' : 'Direct home delivery'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1120]/40 border border-[#00E5FF]/10">
              <div className="p-3 bg-[#00E5FF]/10 rounded-xl text-[#00E5FF]">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'تركيب احترافي' : 'Professional Install'}
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'بأيدي مهندسين وفنيين مهرة' : 'By certified HVAC technicians'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1120]/40 border border-[#00E5FF]/10">
              <div className="p-3 bg-[#00E5FF]/10 rounded-xl text-[#00E5FF]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'منتجات أصلية 100%' : '100% Genuine'}
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'موزع معتمد لأفضل الماركات' : 'Authorized dealer for top brands'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1120]/40 border border-[#00E5FF]/10">
              <div className="p-3 bg-[#00E5FF]/10 rounded-xl text-[#00E5FF]">
                <BadgePercent className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'أسعار منافسة' : 'Competitive Prices'}
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'أفضل قيمة وأعلى جودة تبريد' : 'Unbeatable value in Saudi Arabia'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FILTER & PRODUCTS GRID                     */}
      {/* ========================================== */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Layout */}
        <div className="bg-[#111827] rounded-3xl p-6 shadow-sm border border-white/10 mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder={isRTL ? 'ابحث عن مكيف، ماركة، أو موديل...' : 'Search AC, brand, model...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#E0F2FE]/50 text-white pl-10 pr-10 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-[#00E5FF] focus:bg-white transition-all text-sm"
              />
              <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-[#64748B]" />
            </div>

            {/* Sorters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
              
              {/* Brand Filter */}
              <div className="flex items-center gap-1.5 bg-[#E0F2FE]/30 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-xs text-[#94A3B8] font-semibold">{isRTL ? 'الماركة:' : 'Brand:'}</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                >
                  {brands.map((b) => (
                    <option key={b} value={b} className="bg-[#111827]">
                      {b === 'all' ? (isRTL ? 'الكل' : 'All') : b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort filter */}
              <div className="flex items-center gap-1.5 bg-[#E0F2FE]/30 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-xs text-[#94A3B8] font-semibold">{isRTL ? 'ترتيب حسب:' : 'Sort By:'}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-[#111827]">{isRTL ? 'المميز' : 'Featured'}</option>
                  <option value="price_asc" className="bg-[#111827]">{isRTL ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                  <option value="price_desc" className="bg-[#111827]">{isRTL ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                </select>
              </div>

            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-[#1E293B] text-white shadow-md' 
                      : 'bg-[#0B1120]/60 text-[#94A3B8] hover:bg-[#0F172A] hover:text-white'
                  }`}
                >
                  {isRTL ? cat.labelAr : cat.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => {
              const pName = isRTL ? product.nameAr : product.nameEn;
              
              // Determine category color
              let headerColor = "from-blue-500 to-cyan-500";
              if (product.category === 'concealed' || product.category === 'central' || product.category === 'packages') {
                headerColor = "from-purple-500 to-indigo-500";
              } else if (product.category === 'chiller' || product.category === 'vrf') {
                headerColor = "from-red-500 to-orange-500";
              }

              const needsQuote = 
                product.category === 'concealed' || 
                product.category === 'central' || 
                product.category === 'packages' ||
                product.category === 'crac' ||
                product.category === 'chiller' ||
                product.category === 'vrf' ||
                product.category === 'ventilation' ||
                product.category === 'maintenance';

              return (
                <div 
                  key={product.id} 
                  className="bg-[#0F172A] rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/5 flex flex-col group h-full overflow-hidden relative"
                >
                  {/* Colored Header Curve */}
                  <div className={`pt-6 pb-8 px-4 bg-gradient-to-br ${headerColor} flex flex-col items-center justify-center text-center relative`}>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-white/80 mb-1">
                      {isRTL ? categories.find(c => c.key === product.category)?.labelAr : categories.find(c => c.key === product.category)?.labelEn}
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
                        {needsQuote ? (
                          <span className="text-[11px] md:text-sm font-bold text-white">
                            {isRTL ? 'تسعيرة مخصصة' : 'Custom Quote'}
                          </span>
                        ) : (
                          <span className="text-sm md:text-lg font-black text-white">
                            ${product.price.toLocaleString()}
                          </span>
                        )}
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
                        href={`https://wa.me/966552239595?text=${encodeURIComponent(isRTL ? `مرحباً، أود الحصول على تسعيرة للمكيف: ${pName}` : `Hello, I would like to get a quote for the AC: ${pName}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FBBF24] hover:bg-[#F59E0B] text-black py-3 sm:py-3.5 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-wider transition-colors shadow-lg"
                      >
                        {isRTL ? 'أضف للسلة / طلب' : 'Add to Cart / Quote'}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#111827] rounded-3xl p-12 text-center border border-white/10 max-w-xl mx-auto">
            <SlidersHorizontal className="h-12 w-12 text-[#64748B] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              {isRTL ? 'لا توجد منتجات مطابقة' : 'No Products Found'}
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
              {isRTL 
                ? 'جرب تغيير خيارات التصفية أو البحث للعثور على المنتج المطلوب.'
                : 'Try adjusting your filters or search keywords to find what you are looking for.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedBrand('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#00E5FF] text-white font-bold text-xs hover:bg-[#2489ba] transition-all cursor-pointer"
            >
              {isRTL ? 'إعادة ضبط التصفية' : 'Reset Filters'}
            </button>
          </div>
        )}

      </section>

      <CTABanner />
    </div>
  );
}
