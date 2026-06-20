import { getMetadata } from '@/data/seo';
import { Link } from '@/i18n/navigation';
import { MapPin, ArrowLeft, ArrowRight, Building2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getMetadata('home', locale, '/locations', {
    title: locale === 'ar' 
      ? 'مناطق خدمة مؤسسة أعمال التكييف | الرياض وجدة والدمام'
      : 'Al-Takeef HVAC Service Areas | Riyadh, Jeddah & Dammam',
    description: locale === 'ar'
      ? 'نغطي كبرى مناطق المملكة العربية السعودية بخدمات توريد وتركيب التكييف المركزي وVRF والشيلر للمشاريع التجارية والصناعية.'
      : 'Al-Takeef covers major Saudi regions with commercial HVAC supply and installation services for large-scale projects.',
  });
}

const cities = [
  {
    slug: 'riyadh-commercial',
    nameAr: 'الرياض — المشاريع التجارية',
    nameEn: 'Riyadh — Commercial Projects',
    descAr: 'تغطية كاملة للأحياء التجارية: العليا، الملقا، الياسمين، البحيرة، وشمال الرياض.',
    descEn: 'Full coverage of commercial districts: Al-Olaya, Al-Malqa, Al-Yasmeen, Al-Buhaira, and North Riyadh.',
    icon: Building2,
  },
  {
    slug: 'jeddah-projects',
    nameAr: 'جدة — مشاريع التكييف',
    nameEn: 'Jeddah — HVAC Projects',
    descAr: 'خدمة مشاريع التكييف في جدة: الروضة، المحمدية، الشاطئ، والمدينة الاقتصادية.',
    descEn: 'HVAC project services in Jeddah: Al-Rawdah, Al-Muhammadiyah, Al-Shatih, and Economic City.',
    icon: Building2,
  },
  {
    slug: 'khobar-industrial',
    nameAr: 'الخبر والدمام — المنشآت الصناعية',
    nameEn: 'Khobar & Dammam — Industrial Facilities',
    descAr: 'حلول التكييف الصناعي للمنشآت البترولية والمستودعات والمجمعات الصناعية في المنطقة الشرقية.',
    descEn: 'Industrial HVAC solutions for petroleum facilities, warehouses, and industrial complexes in the Eastern Province.',
    icon: Building2,
  },
];

export default async function LocationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-24 min-h-screen bg-[#F0F2F5]" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <section className="bg-[#1877F2] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-sm font-bold mb-6">
            <MapPin className="h-4 w-4" />
            {isRTL ? 'مناطق الخدمة' : 'Service Regions'}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-white">
            {isRTL ? 'نغطي كبرى مناطق المملكة العربية السعودية' : 'Covering Major Saudi Arabian Regions'}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
            {isRTL
              ? 'خدمات توريد وتركيب التكييف المركزي وVRF والشيلر للمشاريع التجارية والصناعية في الرياض وجدة والمنطقة الشرقية.'
              : 'Central AC, VRF, and Chiller supply and installation services for commercial and industrial projects in Riyadh, Jeddah, and the Eastern Province.'}
          </p>
        </div>
      </section>

      {/* City Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city) => {
            const Icon = city.icon;
            return (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-white border border-[#E4E6EB] rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-[#1877F2]/30 transition-all duration-300 asymmetric-card"
              >
                <div className="w-14 h-14 rounded-xl bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] mb-5 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="text-lg font-bold text-[#050505] mb-3 group-hover:text-[#1877F2] transition-colors">
                  {isRTL ? city.nameAr : city.nameEn}
                </h2>
                <p className="text-[#65676B] text-sm leading-relaxed mb-4">
                  {isRTL ? city.descAr : city.descEn}
                </p>
                <div className="flex items-center gap-2 text-[#1877F2] font-bold text-sm">
                  {isRTL ? 'تصفح الخدمات' : 'View Services'}
                  <Arrow className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
