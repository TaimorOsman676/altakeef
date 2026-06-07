import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blog';
import { SectionHeading, PortableTextRenderer } from '@/components/ui';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { client, isSanityConfigured } from '@/lib/sanity';
import { postBySlugQuery } from '@/lib/sanity.queries';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  MessageSquare, 
  Phone,
  Bookmark,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Image from 'next/image';

// Revalidate the blog details page cache every hour automatically (ISR)
export const revalidate = 3600;

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  
  // 1. Add static fallback slugs
  routing.locales.forEach((locale) => {
    blogPosts.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  });

  // 2. Fetch live Sanity slugs if configured
  if (isSanityConfigured && client) {
    try {
      const sanitySlugs = await client.fetch<string[]>(`*[_type == "post"].slug.current`);
      if (Array.isArray(sanitySlugs)) {
        routing.locales.forEach((locale) => {
          sanitySlugs.forEach((slug) => {
            // Avoid adding duplicates
            if (!blogPosts.some(p => p.slug === slug)) {
              params.push({ locale, slug });
            }
          });
        });
      }
    } catch (e) {
      console.error("Error pre-rendering static Sanity pages:", e);
    }
  }

  return params;
}

import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;
  
  let post = null;
  if (isSanityConfigured && client) {
    try {
      post = await client.fetch(postBySlugQuery, { slug });
    } catch (e) {
      console.error('Error fetching blog post metadata from Sanity:', e);
    }
  }

  if (!post) {
    post = getPostBySlug(slug);
  }
  
  if (!post) return { title: 'Post Not Found' };
  
  const isRTL = resolvedParams.locale === 'ar';
  const fallbackTitle = `${isRTL ? post.titleAr : post.titleEn} | Al-Takeef Blog`;
  const fallbackDescription = isRTL ? post.summaryAr : post.summaryEn;
  
  return getMetadata(
    slug,
    resolvedParams.locale,
    `/blog/${slug}`,
    {
      title: fallbackTitle,
      description: fallbackDescription.length > 155 ? fallbackDescription.substring(0, 151) + '...' : fallbackDescription,
      image: post.image,
      type: 'article',
    }
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;
  
  let post = null;
  if (isSanityConfigured && client) {
    try {
      post = await client.fetch(postBySlugQuery, { slug });
    } catch (e) {
      console.error('Error fetching blog post details from Sanity:', e);
    }
  }

  if (!post) {
    post = getPostBySlug(slug);
  }
  
  if (!post) {
    notFound();
  }

  const isRTL = locale === 'ar';
  const title = isRTL ? post.titleAr : post.titleEn;
  const summary = isRTL ? post.summaryAr : post.summaryEn;
  const content = isRTL ? post.contentAr : post.contentEn;
  const date = isRTL ? post.dateAr : post.date;
  const readTime = isRTL ? post.readTimeAr : post.readTimeEn;
  const author = isRTL ? post.authorAr : post.authorEn;
  const categoryLabel = isRTL ? post.categoryAr : post.categoryEn;

  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  // Prefilled WhatsApp message
  const waPhone = '966552239595';
  const waText = isRTL 
    ? `مرحباً، أود استشارة خبير بخصوص مقال المدونة: "${title}"`
    : `Hello, I would like to consult an expert regarding the blog post: "${title}"`;
  const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(waText)}`;

  // Related posts (same category, max 3)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="pt-24 min-h-screen bg-[#0B1120]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ========================================== */}
      {/* ARTICLE HEADER / BREADCRUMBS               */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs font-bold text-[#94A3B8] mb-6">
          <Link href="/" className="hover:text-[#00E5FF] transition-colors">
            {isRTL ? 'الرئيسية' : 'Home'}
          </Link>
          <Chevron className="h-3.5 w-3.5" />
          <Link href="/blog" className="hover:text-[#00E5FF] transition-colors">
            {isRTL ? 'حلول وأفكار التكييف' : 'Blog'}
          </Link>
          <Chevron className="h-3.5 w-3.5" />
          <span className="text-[#00E5FF] truncate max-w-[200px] sm:max-w-none">
            {title}
          </span>
        </nav>
      </div>

      {/* ========================================== */}
      {/* MAIN CONTAINER                             */}
      {/* ========================================== */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ---- LEFT COLUMN: Article Content (2 cols) ---- */}
          <article className="lg:col-span-2 bg-[#111827] rounded-3xl overflow-hidden shadow-sm border border-white/10 p-6 md:p-10 space-y-8">
            
            {/* Category badge & Title */}
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-lg bg-[#0B1120] text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
                {categoryLabel}
              </span>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                {title}
              </h1>
              
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-[#94A3B8] font-bold border-b border-white/5 pb-6">
                <span className="flex items-center gap-1.5 text-[#94A3B8]">
                  <User className="h-4 w-4 text-[#00E5FF]" />
                  {author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readTime}
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#0F172A]">
              <Image
                src={post.image || '/images/blog-placeholder.png'}
                alt={isRTL ? `${title} - مقال ودليل فني من مؤسسة أعمال التكييف بالرياض والخرج` : `${title} - Technical guide from Al-Takeef HVAC in Riyadh & Al-Kharj`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 800px"
                priority
              />
            </div>

            {/* Summary Highlight box */}
            <div className="p-5 rounded-2xl bg-[#E0F2FE]/50 border-r-4 border-l-4 border-[#00E5FF] text-[#94A3B8] italic text-sm md:text-base leading-relaxed">
              {summary}
            </div>

            {/* Rich Text HTML Content or PortableText Content */}
            {typeof content === 'string' ? (
              <div 
                className="prose prose-blue max-w-none text-[#94A3B8] leading-relaxed space-y-6 
                  prose-headings:text-white prose-headings:font-bold 
                  prose-h3:text-lg prose-h3:md:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-sm prose-p:md:text-base prose-p:leading-relaxed
                  prose-ul:list-disc prose-ul:ps-5 prose-ul:space-y-2 prose-ul:text-sm prose-ul:md:text-base
                  prose-li:text-[#94A3B8]
                  prose-strong:text-white prose-strong:font-bold"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="prose prose-blue max-w-none text-[#94A3B8] leading-relaxed">
                <PortableTextRenderer value={content} />
              </div>
            )}

            {/* Keyword tags */}
            <div className="pt-8 border-t border-gray-150">
              <h2 className="text-xs font-bold text-white mb-3 uppercase tracking-wider">
                {isRTL ? 'الكلمات المفتاحية للموضوع:' : 'SEO Keywords:'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {((isRTL ? post.keywordsAr : post.keywordsEn) || []).map((tag: string, idx: number) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#0B1120] border border-gray-200/60 text-xs font-semibold text-[#94A3B8]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </article>

          {/* ---- RIGHT COLUMN: Sidebar (1 col) ---- */}
          <div className="space-y-6 lg:sticky lg:top-24">
            
            {/* Consultation Widget */}
            <div className="bg-[#1E293B] text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <Bookmark className="h-8 w-8 text-[#00E5FF] mb-4" />
              
              <h2 className="text-lg md:text-xl font-bold mb-3">
                {isRTL ? 'هل لديك سؤال أو استفسار؟' : 'Have a Question?'}
              </h2>
              
              <p className="text-xs md:text-sm text-white/80 mb-6 leading-relaxed">
                {isRTL
                  ? 'خبرائنا في مؤسسة أعمال التكييف جاهزون للإجابة على جميع تساؤلاتك ومساعدتك في اختيار أنظمة التكييف الأفضل لمشروعك.'
                  : 'Our HVAC engineering experts are ready to answer your questions and assist in designing the best systems for your building.'}
              </p>

              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs md:text-sm transition-all active:scale-95 text-white"
                >
                  <MessageSquare className="h-4.5 w-4.5" />
                  {isRTL ? 'استشارة مجانية عبر واتساب' : 'Consult via WhatsApp'}
                </a>
                
                <a 
                  href="tel:+966552239595"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 font-bold text-xs md:text-sm transition-all active:scale-95 text-white"
                >
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا الآن' : 'Call Support'}
                </a>
              </div>
            </div>

            {/* Related posts in sidebar */}
            {relatedPosts.length > 0 && (
              <div className="bg-[#111827] rounded-3xl p-6 shadow-sm border border-white/10">
                <h2 className="text-base md:text-lg font-bold text-white mb-4">
                  {isRTL ? 'مقالات ذات صلة' : 'Related Articles'}
                </h2>
                
                <div className="space-y-4">
                  {relatedPosts.map((rPost) => {
                    const rTitle = isRTL ? rPost.titleAr : rPost.titleEn;
                    const rDate = isRTL ? rPost.dateAr : rPost.date;
                    
                    return (
                      <Link 
                        key={rPost.id}
                        href={`/blog/${rPost.slug}`}
                        className="group flex gap-3 p-2 rounded-xl hover:bg-[#0F172A] transition-all border border-transparent"
                      >
                        {/* Tiny image */}
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#0B1120] flex-shrink-0">
                          <Image 
                            src={rPost.image || '/images/blog-placeholder.png'} 
                            alt={isRTL ? `صورة المقال ذو الصلة: ${rTitle}` : `Related article thumbnail: ${rTitle}`}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        
                        {/* Title and date */}
                        <div className="flex flex-col justify-center min-w-0">
                          <h3 className="text-xs font-bold text-[#94A3B8] group-hover:text-[#00E5FF] transition-colors line-clamp-2 leading-snug mb-1">
                            {rTitle}
                          </h3>
                          <span className="text-[10px] text-[#94A3B8] font-semibold">
                            {rDate}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </div>
  );
}

