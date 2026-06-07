'use client';

import { useState, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Search, Calendar, Clock, User, ArrowRight, ArrowLeft, SlidersHorizontal, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { type BlogPost } from '@/data/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  // Search & Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Categories list
  const categories = useMemo(() => [
    { key: 'all', labelAr: 'الكل', labelEn: 'All Posts' },
    { key: 'maintenance', labelAr: 'صيانة وقائية', labelEn: 'Maintenance' },
    { key: 'tech', labelAr: 'تقنيات التكييف', labelEn: 'HVAC Tech' },
    { key: 'commercial', labelAr: 'تكييف تجاري', labelEn: 'Commercial' },
    { key: 'saving', labelAr: 'توفير الطاقة', labelEn: 'Energy Saving' },
  ], []);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = searchQuery === '' ||
        post.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summaryAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summaryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywordsAr.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
        post.keywordsEn.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  // Featured post (latest post when filters are cleared)
  const featuredPost = useMemo(() => {
    if (searchQuery !== '' || selectedCategory !== 'all') return null;
    return posts[0] || null;
  }, [posts, searchQuery, selectedCategory]);

  // Grid posts (excludes featured post)
  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="space-y-12">
      
      {/* ========================================== */}
      {/* FILTER & SEARCH BAR                        */}
      {/* ========================================== */}
      <div className="bg-[#111827] rounded-3xl p-6 shadow-sm border border-white/10 space-y-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-96">
            <input
              type="text"
              placeholder={isRTL ? 'ابحث عن مقالات، كلمات مفتاحية...' : 'Search articles, keywords...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#E0F2FE]/50 text-white pl-10 pr-10 py-3 rounded-2xl border border-white/10 focus:outline-none focus:border-[#00E5FF] focus:bg-white transition-all text-sm"
            />
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-[#94A3B8]" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start lg:justify-end">
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
      </div>

      {/* ========================================== */}
      {/* FEATURED POST HERO                         */}
      {/* ========================================== */}
      {featuredPost && (
        <article className="group bg-[#111827] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Cover image */}
          <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] bg-[#0B1120] overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={isRTL ? `${featuredPost.titleAr} - مدونة أعمال التكييف بالرياض` : `${featuredPost.titleEn} - Al-Takeef HVAC Blog Riyadh`}
              fill
              className="object-cover transition-transform duration-750 group-hover:scale-102"
              sizes="(max-width: 1280px) 100vw, 600px"
              priority
            />
          </div>
          
          {/* Post info */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-3 text-xs font-bold text-[#00E5FF]">
              <span className="bg-[#0B1120] px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                {isRTL ? featuredPost.categoryAr : featuredPost.categoryEn}
              </span>
              <span className="flex items-center gap-1 text-[#94A3B8]">
                <Calendar className="h-3.5 w-3.5" />
                {isRTL ? featuredPost.dateAr : featuredPost.date}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white group-hover:text-[#00E5FF] transition-colors leading-tight">
              <Link href={`/blog/${featuredPost.slug}`}>
                {isRTL ? featuredPost.titleAr : featuredPost.titleEn}
              </Link>
            </h2>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
              {isRTL ? featuredPost.summaryAr : featuredPost.summaryEn}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#94A3B8] font-bold">
                <User className="h-4.5 w-4.5 text-[#00E5FF]" />
                <span>{isRTL ? featuredPost.authorAr : featuredPost.authorEn}</span>
              </div>
              
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00E5FF] hover:gap-3 transition-all duration-300"
              >
                {isRTL ? 'اقرأ المقال كاملاً' : 'Read Full Article'}
                <Arrow className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      )}

      {/* ========================================== */}
      {/* ARTICLE GRID                               */}
      {/* ========================================== */}
      {gridPosts.length > 0 ? (
        <div className="space-y-6">
          <h2 className="sr-only">{isRTL ? "باقي مقالات التكييف وأدلة الصيانة" : "More AC Installation & Maintenance Articles"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => {
              const pTitle = isRTL ? post.titleAr : post.titleEn;
              const pSummary = isRTL ? post.summaryAr : post.summaryEn;
              const pCategory = isRTL ? post.categoryAr : post.categoryEn;
              const pDate = isRTL ? post.dateAr : post.date;

              return (
                <article 
                  key={post.id}
                  className="group bg-[#111827] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 flex flex-col h-full"
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 bg-[#0B1120] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={isRTL ? `${pTitle} - مقال من مدونة أعمال التكييف` : `${pTitle} - Al-Takeef HVAC blog post`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1280px) 100vw, 400px"
                    />
                    <span className="absolute top-4 left-4 bg-[#111827]/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm z-10">
                      {pCategory}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    {/* Meta date / readtime */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#94A3B8]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {pDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {isRTL ? post.readTimeAr : post.readTimeEn}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug line-clamp-2 group-hover:text-[#00E5FF] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {pTitle}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-2">
                      {pSummary}
                    </p>

                    {/* Footer links */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                      <span className="text-xs text-[#94A3B8] flex items-center gap-1.5 font-medium">
                        <User className="h-3.5 w-3.5 text-[#00E5FF]" />
                        {isRTL ? post.authorAr : post.authorEn}
                      </span>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#00E5FF] hover:gap-2 transition-all duration-300"
                      >
                        {isRTL ? 'تفاصيل' : 'Details'}
                        <Arrow className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="bg-[#111827] rounded-3xl p-12 text-center border border-white/10 max-w-xl mx-auto">
          <BookOpen className="h-12 w-12 text-[#94A3B8] mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">
            {isRTL ? 'لا توجد مقالات مطابقة' : 'No Articles Found'}
          </h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] mb-6 leading-relaxed">
            {isRTL 
              ? 'جرب البحث بكلمات أخرى أو تصفح الأقسام المختلفة.'
              : 'Try search terms like "Riyadh", "Maintenance", "VRF" or change filters.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#00E5FF] text-white font-bold text-xs hover:bg-[#2489ba] transition-all cursor-pointer"
          >
            {isRTL ? 'إعادة ضبط البحث' : 'Clear Filters'}
          </button>
        </div>
      )}

    </div>
  );
}
