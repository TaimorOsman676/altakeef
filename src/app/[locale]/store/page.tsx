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
    if (isRTL) {
      return `https://wa.me/${waPhone}?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A5%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%8A%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%85%D8%B9%D9%8A.`;
    }
    const text = `Hello Al-Takeef, I would like to get a quote for the AC: ${pName} (Model: ${product.model})`;
    return `https://wa.me/${waPhone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-brand-dark" dir={isRTL ? 'rtl' : 'ltr'}>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="store" />

      {/* ========================================== */}
      {/* TRUST / GUARANTEES SECTION                */}
      {/* ========================================== */}
      <section className="py-10 bg-brand-dark-blue border-b border-white/10">
        <h2 className="sr-only">{isRTL ? "خدمات وضمانات مؤسسة أعمال التكييف بالرياض والخرج" : "Al-Takeef HVAC services and warranties in Riyadh and Al-Kharj"}</h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark/40 border border-brand-blue/20">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'توصيل سريع' : 'Fast Delivery'}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'توصيل للمنزل في الرياض والخرج' : 'Direct home delivery'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark/40 border border-brand-blue/20">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'تركيب احترافي' : 'Professional Install'}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'بأيدي مهندسين وفنيين مهرة' : 'By certified HVAC technicians'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark/40 border border-brand-blue/20">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'منتجات أصلية 100%' : '100% Genuine'}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {isRTL ? 'موزع معتمد لأفضل الماركات' : 'Authorized dealer for top brands'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark/40 border border-brand-blue/20">
              <div className="p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <BadgePercent className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm md:text-base">
                  {isRTL ? 'أسعار منافسة' : 'Competitive Prices'}
                </h3>
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
        <h2 className="sr-only">{isRTL ? "مكيفات وأنظمة تكييف متوفرة بالرياض والخرج" : "AC Units and Cooling Systems Available in Riyadh and Al-Kharj"}</h2>
        
        {/* Controls Layout */}
        <div className="bg-brand-dark-blue rounded-3xl p-6 shadow-sm border border-white/10 mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder={isRTL ? 'ابحث عن مكيف، ماركة، أو موديل...' : 'Search AC, brand, model...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-dark text-white pl-10 pr-10 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-sm"
              />
              <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-[#94A3B8]" />
            </div>

            {/* Sorters */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
              
              {/* Brand Filter */}
              <div className="flex items-center gap-1.5 bg-brand-dark/60 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-xs text-[#94A3B8] font-semibold">{isRTL ? 'الماركة:' : 'Brand:'}</span>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                >
                  {brands.map((b) => (
                    <option key={b} value={b} className="bg-brand-dark-blue">
                      {b === 'all' ? (isRTL ? 'الكل' : 'All') : b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort filter */}
              <div className="flex items-center gap-1.5 bg-brand-dark/60 px-3 py-1.5 rounded-xl border border-white/10">
                <span className="text-xs text-[#94A3B8] font-semibold">{isRTL ? 'ترتيب حسب:' : 'Sort By:'}</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-brand-dark-blue">{isRTL ? 'المميز' : 'Featured'}</option>
                  <option value="price_asc" className="bg-brand-dark-blue">{isRTL ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                  <option value="price_desc" className="bg-brand-dark-blue">{isRTL ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
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
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isActive 
                      ? 'bg-brand-card text-brand-blue border-brand-blue shadow-md' 
                      : 'bg-brand-dark/60 text-[#94A3B8] hover:bg-brand-card hover:text-white border-transparent'
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
              const headerColor = "bg-brand-dark-blue";

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
                  className="bg-brand-card rounded-[5%_0%_5%_0%] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 flex flex-col group h-[380px] overflow-hidden relative"
                >
                  {/* Top Section (70% Height) */}
                  <div className="relative w-full h-[70%] flex flex-col overflow-hidden shrink-0">
                    {/* Colored Header Curve */}
                    <div className={`pt-4 pb-5 px-4 ${headerColor} flex flex-col items-center justify-center text-center relative z-20`}>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-blue/80 mb-0.5">
                        {isRTL ? categories.find(c => c.key === product.category)?.labelAr : categories.find(c => c.key === product.category)?.labelEn}
                      </span>
                      <h3 className="text-xs md:text-sm font-bold text-white line-clamp-1 leading-tight">
                        {pName}
                      </h3>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex-grow w-full bg-brand-dark/40 flex items-center justify-center p-4">
                      <Image 
                        src={product.image} 
                        alt={isRTL ? `${pName} بالرياض والخرج - مؤسسة أعمال التكييف` : `${pName} in Riyadh & Al-Kharj - Al-Takeef`}
                        fill
                        className="object-contain p-6 group-hover:scale-110 transition-transform duration-500 z-10 mix-blend-screen"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px"
                      />
                    </div>
                  </div>

                  {/* Details Section (30% Height) */}
                  <div className="px-4 py-3 flex flex-col flex-grow bg-brand-card justify-center relative z-20">
                    
                    {/* Price and Stars */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-brand-blue">
                        {isRTL ? 'احصل على تسعيرة' : 'Get Quotation'}
                      </span>
                      <div className="flex items-center gap-0.5 text-yellow-400 text-[10px]">
                        ★ ★ ★ ★ <span className="text-white/20">★</span>
                      </div>
                    </div>
                    
                    {/* Key-Value Specs */}
                    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-1 text-[9px] mb-2">
                      <span className="text-[#94A3B8] font-medium uppercase">{isRTL ? 'الماركة' : 'Brand'}</span>
                      <span className="text-white font-semibold text-right">{product.brand}</span>
                      
                      <span className="text-[#94A3B8] font-medium uppercase">{isRTL ? 'السعة' : 'Capacity'}</span>
                      <span className="text-white font-semibold text-right">{product.capacity.toLocaleString()} BTU</span>
                    </div>

                    {/* Bottom Full Width Action Button */}
                    <div className="mt-auto">
                      <a 
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center bg-[#FBBF24] hover:bg-[#FBBF24]/90 text-[#121212] py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-colors shadow-lg active:scale-95 duration-150"
                        aria-label={isRTL ? `احصل على تسعيرة لـ ${pName} عبر الواتساب` : `Get quotation for ${pName} via WhatsApp`}
                      >
                        {isRTL ? 'احصل على تسعيرة' : 'Get Quotation'}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-brand-dark-blue rounded-3xl p-12 text-center border border-white/10 max-w-xl mx-auto">
            <SlidersHorizontal className="h-12 w-12 text-[#94A3B8] mx-auto mb-4" />
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
              className="px-5 py-2.5 rounded-xl bg-brand-blue text-[#121212] font-black text-xs hover:bg-brand-blue/90 transition-all cursor-pointer shadow-lg active:scale-95 duration-150"
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
