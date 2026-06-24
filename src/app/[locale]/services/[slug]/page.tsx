import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { services, getServicesByCategory } from '@/data/services';
import { SectionHeading } from '@/components/ui';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { 
  Phone, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  Wind, 
  EyeOff, 
  Snowflake, 
  Server, 
  AirVent, 
  LayoutGrid, 
  Wrench, 
  Fan,
  ChevronRight,
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, React.ComponentType<any>> = {
  Building2,
  Wind,
  EyeOff,
  Snowflake,
  Server,
  AirVent,
  LayoutGrid,
  Wrench,
  Fan,
};

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  routing.locales.forEach((locale) => {
    services.forEach((service) => {
      params.push({ locale, slug: service.slug });
    });
  });
  return params;
}

import { getMetadata } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  if (!service) return { title: 'Service Not Found' };
  
  const isRTL = resolvedParams.locale === 'ar';
  const fallbackTitle = `${isRTL ? service.nameAr : service.nameEn} | Al-Takeef`;
  const fallbackDescription = isRTL ? service.descriptionAr : service.descriptionEn;
  
  return getMetadata(
    service.slug,
    resolvedParams.locale,
    `/services/${service.slug}`,
    {
      title: fallbackTitle,
      description: fallbackDescription.length > 155 ? fallbackDescription.substring(0, 151) + '...' : fallbackDescription,
      image: service.image,
    }
  );
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    notFound();
  }

  const isRTL = locale === 'ar';
  const name = isRTL ? service.nameAr : service.nameEn;
  const description = isRTL ? service.descriptionAr : service.descriptionEn;
  const categoryLabel = isRTL 
    ? (service.category === 'commercial' ? 'تكييف تجاري' : service.category === 'residential' ? 'تكييف سكني' : 'خدمات الدعم')
    : (service.category === 'commercial' ? 'Commercial HVAC' : service.category === 'residential' ? 'Residential AC' : 'Support & Services');

  const IconComponent = iconMap[service.icon] || Building2;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  // Related services
  const relatedServices = services.filter(s => s.category === service.category && s.slug !== service.slug);

  // Pre-filled WhatsApp message link
  const waPhone = '966552239595';
  const whatsappUrl = isRTL
    ? `https://wa.me/${waPhone}?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%20%D9%88%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81.`
    : `https://wa.me/${waPhone}?text=${encodeURIComponent(`Hello, I would like to inquire about: ${name}`)}`;

  return (
    <div className="pt-24 min-h-screen bg-[#0B1120]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="relative overflow-hidden bg-[#0B1120] text-white py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={isRTL ? `خلفية هندسية لخدمة ${name} بالرياض والخرج` : `Engineering background of ${name} in Riyadh and Al-Kharj`}
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/70 to-[#0B1120]"></div>
          {/* Subtle grid patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Category Badge */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#00E5FF]/20 border border-[#00E5FF]/40 text-[#00E5FF] mb-6">
              <IconComponent className="h-4.5 w-4.5" />
              {categoryLabel}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {name}
            </h1>
            
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MAIN CONTENT AREA                          */}
      {/* ========================================== */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ---- LEFT COLUMN: Content (2 cols) ---- */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image & Main Info Card */}
            <div className="bg-[#111827] rounded-3xl overflow-hidden shadow-sm border border-white/10 p-6 md:p-8 space-y-6">
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E293B]/10 to-[#00E5FF]/10 border border-white/10 flex items-center justify-center">
                <Image
                  src={service.image}
                  alt={isRTL ? `تقديم خدمات ${name} الاحترافية بالرياض والخرج - مؤسسة أعمال التكييف` : `Professional ${name} services in Riyadh and Al-Kharj - Al-Takeef Contracting`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 800px"
                  priority
                />
              </div>

              <div className="prose prose-blue max-w-none text-[#94A3B8]">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {isRTL ? 'نظرة عامة على الخدمة' : 'Service Overview'}
                </h2>
                <p className="leading-relaxed mb-6">
                  {isRTL 
                    ? `نحن نقدم في مؤسسة أعمال التكييف حلولاً متكاملة وخبرة رائدة في ${name} لتلبية احتياجات المشاريع التجارية والصناعية الكبرى بالرياض والخرج. يتم تنفيذ أعمالنا بواسطة مهندسين وفنيين مهرة مدربين على أعلى مستوى لضمان الجودة، السلامة، الكفاءة، ورضا العملاء التام.`
                    : `At Al-Takeef, we provide fully integrated solutions and leading expertise in ${name} to meet the needs of large-scale commercial and industrial projects in Riyadh and Al-Kharj. All projects are implemented by highly skilled engineers and technicians trained to guarantee quality, safety, efficiency, and complete client satisfaction.`}
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#111827] rounded-3xl p-6 md:p-8 shadow-sm border border-white/10 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                {isRTL ? 'مميزات الخدمة والفوائد' : 'Service Features & Benefits'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[#0B1120]/60 hover:bg-[#1E293B]/80 backdrop-blur-sm transition-all duration-300 border border-white/5 hover:border-[#00E5FF]/30 shadow-sm hover:shadow-lg">
                    <CheckCircle2 className="h-6 w-6 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-sm md:text-base mb-1">
                        {isRTL ? feature.titleAr : feature.titleEn}
                      </h3>
                      <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                        {isRTL ? feature.descriptionAr : feature.descriptionEn}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================== */}
            {/* COMPLIANCE & SCOPE DECLARATION              */}
            {/* ========================================== */}
            <div className="bg-[#1e293b]/40 border border-[#00E5FF]/20 rounded-3xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-[#00E5FF]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {isRTL ? 'نطاق خدماتنا — مشاريع التوريد والتركيب الكبيرة فقط' : 'Our Service Scope — Large-Scale Supply & Installation Projects Only'}
                  </h2>
                  <p className="text-[#94A3B8] leading-relaxed text-sm md:text-base">
                    {isRTL 
                      ? 'مؤسسة أعمال التكييف متخصصة بنسبة 100% في التوريد المباشر والتركيب الاحترافي لمشاريع التكييف الكبرى تحت إشراف مهندسي الميكانيك. نخدم المجمعات التجارية، الأبراج، المستشفيات، والمنشآت الصناعية. نحن لا نقدم خدمات الصيانة الخفيفة، تنظيف المكيفات، شحن الفريون، أو إصلاح الوحدات المنزلية الصغيرة.'
                      : 'Al-Takeef Contracting specializes 100% in direct supply and professional installation for large-scale HVAC projects under mechanical engineering supervision. We serve commercial complexes, towers, hospitals, and industrial facilities. We do NOT offer light maintenance, AC cleaning, refrigerant charging, or small residential unit repair.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Specs Section */}
            {service.specs && service.specs.length > 0 && (
              <div className="bg-[#111827] rounded-3xl p-6 md:p-8 shadow-sm border border-white/10 space-y-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {isRTL ? 'المواصفات الفنية للخدمة' : 'Technical Specifications'}
                </h2>
                
                <div className="overflow-hidden border border-white/10 rounded-2xl">
                  <table className="w-full text-sm text-left rtl:text-right text-[#94A3B8]">
                    <thead className="bg-[#1E293B]/5 text-white font-bold text-xs uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">{isRTL ? 'المواصفة' : 'Specification'}</th>
                        <th className="px-6 py-4">{isRTL ? 'القيمة' : 'Details'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {service.specs.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[#111827]' : 'bg-[#0B1120]/50 backdrop-blur-sm'}>
                          <td className="px-6 py-4 font-semibold text-white/90">{isRTL ? spec.labelAr : spec.labelEn}</td>
                          <td className="px-6 py-4 text-[#00E5FF] font-bold">{isRTL ? spec.valueAr : spec.valueEn}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* ---- RIGHT COLUMN: Side Info & Action Widgets (1 col) ---- */}
          <div className="space-y-6">
            
            {/* Conversion Lead Capture Widget */}
            <div className="bg-[#1E293B] text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
              
              <h2 className="text-lg md:text-xl font-bold mb-3">
                {isRTL ? 'طلب عرض سعر سريع' : 'Get a Quick Quote'}
              </h2>
              <p className="text-xs md:text-sm text-white/80 mb-6 leading-relaxed">
                {isRTL 
                  ? 'هل ترغب في مناقشة تفاصيل مشروعك؟ تواصل معنا مباشرة عبر واتساب للحصول على استشارة وعرض سعر مجاني.'
                  : 'Interested in this service? Contact us directly via WhatsApp for a free expert consultation and custom quote.'}
              </p>

              <div className="space-y-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 active:scale-95 font-bold transition-all duration-300 shadow-md text-sm md:text-base text-white"
                >
                  <MessageSquare className="h-5 w-5" />
                  {isRTL ? 'مراسلة عبر واتساب' : 'Chat via WhatsApp'}
                </a>
                
                <a 
                  href="tel:+966552239595"
                  onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_three) { (window as any).gtag_report_conversion_three('tel:+966552239595'); } }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/20 font-bold transition-all duration-300 text-sm md:text-base text-white"
                >
                  <Phone className="h-4 w-4" />
                  {isRTL ? 'اتصل بنا الآن' : 'Call Support Now'}
                </a>
              </div>

              {/* Quality Badges */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="h-6 w-6 text-[#00E5FF] mb-1" />
                  <span className="text-[10px] text-white/70">{isRTL ? 'ضمان معتمد' : 'Warranty'}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Calendar className="h-6 w-6 text-[#00E5FF] mb-1" />
                  <span className="text-[10px] text-white/70">{isRTL ? 'دعم فني سريع' : 'Fast Response'}</span>
                </div>
              </div>
            </div>

            {/* Other services sidebar list */}
            {relatedServices.length > 0 && (
              <div className="bg-[#111827] rounded-3xl p-6 shadow-sm border border-white/10">
                <h2 className="text-base md:text-lg font-bold text-white mb-4">
                  {isRTL ? 'خدمات ذات صلة' : 'Related Services'}
                </h2>
                <ul className="space-y-3">
                  {relatedServices.map((rService) => (
                    <li key={rService.id}>
                      <Link 
                        href={`/services/${rService.slug}`}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#0F172A] transition-colors border border-transparent hover:border-[#00E5FF]/20"
                      >
                        <span className="text-sm font-semibold text-[#94A3B8] group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                          {isRTL ? rService.nameAr : rService.nameEn}
                        </span>
                        <Arrow className="h-4 w-4 text-[#64748B] group-hover:text-[#00E5FF] transition-colors" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </div>
  );
}
