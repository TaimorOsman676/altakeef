import { notFound } from 'next/navigation';
import { getMetadata } from '@/data/seo';
import { Link } from '@/i18n/navigation';
import { Phone, MapPin, CheckCircle2, ArrowLeft, ArrowRight, MessageSquare, Building2 } from 'lucide-react';

const cityData: Record<string, {
  nameAr: string; nameEn: string;
  regionAr: string; regionEn: string;
  descAr: string; descEn: string;
  districtsAr: string[]; districtsEn: string[];
  servicesAr: string[]; servicesEn: string[];
  lat: number; lng: number;
}> = {
  'riyadh-commercial': {
    nameAr: 'الرياض — مشاريع التكييف التجاري',
    nameEn: 'Riyadh — Commercial HVAC Projects',
    regionAr: 'منطقة الرياض',
    regionEn: 'Riyadh Region',
    descAr: 'نغطي جميع أحياء الرياض التجارية بخدمات توريد وتركيب التكييف المركزي وVRF للمشاريع الكبرى.',
    descEn: 'We cover all commercial districts of Riyadh with Central AC and VRF supply and installation for major projects.',
    districtsAr: ['حي الملقا', 'حي الياسمين', 'حي العليا', 'حي البحيرة', 'حي النرجس', 'شمال الرياض'],
    districtsEn: ['Al-Malqa', 'Al-Yasmeen', 'Al-Olaya', 'Al-Buhaira', 'Al-Narjis', 'North Riyadh'],
    servicesAr: ['توريد وتركيب التكييف المركزي للأبراج', 'أنظمة VRF للمجمعات التجارية', 'تفصيل دكت التكييف المجلفن', 'محطات الشيلر للمستشفيات'],
    servicesEn: ['Central AC supply & installation for towers', 'VRF systems for commercial complexes', 'Galvanized duct fabrication', 'Chiller plants for hospitals'],
    lat: 24.7136, lng: 46.6753,
  },
  'jeddah-projects': {
    nameAr: 'جدة — مشاريع التكييف الهندسي',
    nameEn: 'Jeddah — Engineering HVAC Projects',
    regionAr: 'منطقة مكة المكرمة',
    regionEn: 'Makkah Region',
    descAr: 'فريق هندسي متخصص لتنفيذ مشاريع التكييف في جدة، من الأبراج السكنية إلى المنشآت الصناعية.',
    descEn: 'Specialized engineering team for HVAC projects in Jeddah, from residential towers to industrial facilities.',
    districtsAr: ['حي الروضة', 'حي المحمدية', 'حي الشاطئ', 'حي الأمواج', 'مدينة الملك عبدالله الاقتصادية'],
    districtsEn: ['Al-Rawdah', 'Al-Muhammadiyah', 'Al-Shatih', 'Al-Amwaj', 'King Abdullah Economic City'],
    servicesAr: ['تكييف مركزي للمجمعات السكنية الكبيرة', 'أنظمة VRF وVRV للمكاتب التجارية', 'تمديد وعزل مجاري الهواء', 'صيانة عقود المشاريع'],
    servicesEn: ['Central AC for large residential compounds', 'VRF/VRV for commercial offices', 'Duct extension and insulation', 'Project AMC contracts'],
    lat: 21.5433, lng: 39.1728,
  },
  'khobar-industrial': {
    nameAr: 'الخبر والدمام — التكييف الصناعي',
    nameEn: 'Khobar & Dammam — Industrial HVAC',
    regionAr: 'المنطقة الشرقية',
    regionEn: 'Eastern Province',
    descAr: 'حلول تكييف صناعية متخصصة للمستودعات والمصانع والمنشآت البترولية في المنطقة الشرقية.',
    descEn: 'Specialized industrial HVAC solutions for warehouses, factories, and petroleum facilities in the Eastern Province.',
    districtsAr: ['المنطقة الصناعية بالدمام', 'حي الخبر الشمالي', 'رأس تنورة', 'الجبيل الصناعية', 'حي العزيزية'],
    districtsEn: ['Dammam Industrial Area', 'North Khobar', 'Ras Tanura', 'Jubail Industrial', 'Al-Aziziyyah'],
    servicesAr: ['تكييف صناعي للمستودعات الكبيرة', 'شيلر تبريد للمصانع والمنشآت', 'تهوية صناعية متخصصة', 'أنظمة CRAC لمراكز البيانات'],
    servicesEn: ['Industrial AC for large warehouses', 'Chiller cooling for factories', 'Specialized industrial ventilation', 'CRAC systems for data centers'],
    lat: 26.2172, lng: 50.1971,
  },
};

export async function generateStaticParams() {
  return ['ar', 'en'].flatMap(locale =>
    Object.keys(cityData).map(city => ({ locale, city }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; city: string }> }) {
  const { locale, city } = await params;
  const data = cityData[city];
  if (!data) return { title: 'Not Found' };
  const isAr = locale === 'ar';
  return getMetadata('home', locale, `/locations/${city}`, {
    title: isAr
      ? `${data.nameAr} | أعمال التكييف للتوريد والتركيب`
      : `${data.nameEn} | Al-Takeef HVAC Contracting`,
    description: isAr ? data.descAr : data.descEn,
  });
}

export default async function CityPage({ params }: { params: Promise<{ locale: string; city: string }> }) {
  const { locale, city } = await params;
  const data = cityData[city];
  if (!data) notFound();

  const isRTL = locale === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const waUrl = `https://wa.me/966552239595?text=${encodeURIComponent(isRTL ? `مرحباً، أود الاستفسار عن مشروع تكييف في ${data.nameAr}` : `Hello, I want to inquire about an HVAC project in ${data.nameEn}`)}`;

  return (
    <div className="pt-24 min-h-screen bg-[#F0F2F5]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="relative bg-[#1877F2] text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            <MapPin className="h-4 w-4" />
            {isRTL ? data.regionAr : data.regionEn}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white max-w-3xl">
            {isRTL ? data.nameAr : data.nameEn}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-8">
            {isRTL ? data.descAr : data.descEn}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+966552239595"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1877F2] hover:bg-[#F0F2F5] font-bold px-6 py-3 rounded-xl transition-all">
              <Phone className="h-5 w-5" />
              {isRTL ? 'اتصل الآن' : 'Call Now'}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#25D366]/90 font-bold px-6 py-3 rounded-xl transition-all">
              <MessageSquare className="h-5 w-5" />
              {isRTL ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Services */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-[#E4E6EB] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#050505] mb-6">
              {isRTL ? 'خدماتنا في هذه المنطقة' : 'Our Services in This Region'}
            </h2>
            <ul className="space-y-3">
              {(isRTL ? data.servicesAr : data.servicesEn).map((service, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1877F2] flex-shrink-0 mt-0.5" />
                  <span className="text-[#65676B]">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E4E6EB] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#050505] mb-4">
              {isRTL ? 'الأحياء التي نغطيها' : 'Districts We Cover'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {(isRTL ? data.districtsAr : data.districtsEn).map((d, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F0F2F5] border border-[#E4E6EB] rounded-full text-sm text-[#65676B]">
                  <MapPin className="h-3.5 w-3.5 text-[#1877F2]" />
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Compliance Box */}
          <div className="bg-[#EBF3FF] border border-[#1877F2]/20 rounded-2xl p-6">
            <h2 className="text-base font-bold text-[#050505] mb-2">
              {isRTL ? 'نطاق خدماتنا — مشاريع كبيرة فقط' : 'Our Scope — Large Projects Only'}
            </h2>
            <p className="text-[#65676B] text-sm leading-relaxed">
              {isRTL
                ? 'نحن لا نقدم خدمات الصيانة الخفيفة، غسيل المكيفات، شحن الفريون، أو إصلاح الوحدات الصغيرة. نطاق عملنا محدد بالمشاريع الهندسية الكبرى والتوريد والتركيب الاحترافي.'
                : 'We do not provide light maintenance, AC washing, refrigerant recharging, or small unit repair. Our scope is limited to large-scale engineering projects, professional supply and installation.'}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-[#1877F2] text-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-3">{isRTL ? 'طلب عرض سعر للمشروع' : 'Request Project Quote'}</h2>
            <p className="text-white/90 text-sm mb-5 leading-relaxed">
              {isRTL ? 'تواصل معنا لمناقشة تفاصيل مشروع التكييف وتلقي عرض سعر مجاني.' : 'Contact us to discuss your HVAC project details and receive a free quote.'}
            </p>
            <div className="space-y-3">
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold rounded-xl transition-all">
                <MessageSquare className="h-5 w-5" />
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
              <a href="tel:+966552239595"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold rounded-xl transition-all">
                <Phone className="h-4 w-4" />
                {isRTL ? 'اتصل بنا' : 'Call Us'}
              </a>
            </div>
          </div>

          <div className="bg-white border border-[#E4E6EB] rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-bold text-[#050505] mb-3">
              {isRTL ? 'مناطق أخرى' : 'Other Regions'}
            </h2>
            <ul className="space-y-2">
              {Object.entries(cityData).filter(([k]) => k !== city).map(([slug, c]) => (
                <li key={slug}>
                  <Link href={`/locations/${slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-[#F0F2F5] transition-colors group">
                    <span className="text-sm text-[#65676B] group-hover:text-[#1877F2] transition-colors">
                      {isRTL ? c.nameAr : c.nameEn}
                    </span>
                    <Arrow className="h-4 w-4 text-[#65676B] group-hover:text-[#1877F2]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
