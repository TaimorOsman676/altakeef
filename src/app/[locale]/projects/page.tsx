'use client';

import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/ui';
import { CTABanner } from '@/components/sections';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Workflow, 
  Settings, 
  ClipboardCheck,
  Hammer,
  Eye,
  Award
} from 'lucide-react';

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [filter, setFilter] = useState('all');

  // Dynamic bilingual project database
  const projectsData = useMemo(() => [
    { 
      id: 1, 
      titleAr: 'تكييف مركزي لمجمع تجاري بالرياض', 
      titleEn: 'Riyadh Commercial Mall Central HVAC', 
      category: 'commercial', 
      image: '/images/projects/real_commercial_ac_1779986043958.png',
      detailsAr: 'تركيب نظام تكييف مركزي متكامل مع شبكة مجاري هواء بطول 2000 متر.',
      detailsEn: 'Complete central HVAC system installation with 2,000 meters of ductwork.'
    },
    { 
      id: 2, 
      titleAr: 'مجمع فلل سكنية فاخرة بالخرج', 
      titleEn: 'Al-Kharj Luxury Villa Complex', 
      category: 'residential', 
      image: '/images/projects/real_residential_ac_1779986080889.png',
      detailsAr: 'تركيب أنظمة تكييف مخفي (دكت سبليت) ومكيفات جدارية لأكثر من 15 فيلا.',
      detailsEn: 'Installation of concealed split duct systems and wall split ACs for 15+ villas.'
    },
    { 
      id: 3, 
      titleAr: 'غرفة خوادم وزارة التعليم بالرياض', 
      titleEn: 'Ministry of Education Data Center Cooling', 
      category: 'government', 
      image: '/images/projects/real_server_room_ac_1779986105105.png',
      detailsAr: 'تثبيت وحدات CRAC متطورة للتحكم الدقيق بالرطوبة والحرارة على مدار الساعة.',
      detailsEn: 'Installation of high-precision CRAC units for round-the-clock temperature and humidity control.'
    },
    { 
      id: 4, 
      titleAr: 'نظام تكييف VRF لبرج إداري بالرياض', 
      titleEn: 'Riyadh Office Tower VRF AC System', 
      category: 'commercial', 
      image: '/images/projects/real_commercial_ac_1779986043958.png',
      detailsAr: 'تصميم وتشغيل نظام VRF ذكي بسعة 400 طن تبريد لتوفير الطاقة.',
      detailsEn: 'Design and commissioning of a 400 TR smart VRF system for energy savings.'
    },
    { 
      id: 5, 
      titleAr: 'أنظمة تكييف مخفية لقصر سكني خاص بالخرج', 
      titleEn: 'Private Residential Mansion HVAC Installation', 
      category: 'residential', 
      image: '/images/projects/real_residential_ac_1779986080889.png',
      detailsAr: 'تصميم تكييف مخفي يتماشى مع الديكور الداخلي الجبس والأسقف المستعارة.',
      detailsEn: 'Custom concealed duct AC system aligned with luxury interior gypsum ceiling designs.'
    },
    { 
      id: 6, 
      titleAr: 'نظام تهوية وشفط مركزي لمطابخ حكومية بالرياض', 
      titleEn: 'Government Industrial Kitchen Exhaust Ventilation', 
      category: 'government', 
      image: '/images/projects/real_kitchen_exhaust_1779986128258.png',
      detailsAr: 'تركيب أنظمة شفط غازات وروائح متكاملة مع معالجة الهواء وفلاتر كربون.',
      detailsEn: 'Installation of kitchen exhaust fans, gas hoods, and carbon filter air treatment units.'
    },
    { 
      id: 7, 
      titleAr: 'أنظمة مبردات (شيلر) لمصنع الخرج الغذائي', 
      titleEn: 'Al-Kharj Food Factory Chiller Piping System', 
      category: 'commercial', 
      image: '/images/projects/chiller_piping_system.png',
      detailsAr: 'تمديد وتركيب أنابيب مياه مبردة معزولة بسعات تبريد ضخمة للإنتاج الغذائي.',
      detailsEn: 'Piping installation of chilled water chiller loop for food production machinery.'
    },
    { 
      id: 8, 
      titleAr: 'تحديث نظام تكييف مبنى بلدية الخرج', 
      titleEn: 'Al-Kharj Municipality Building AC Retrofitting', 
      category: 'government', 
      image: '/images/projects/real_rooftop_ac_1779986166896.png',
      detailsAr: 'استبدال الوحدات القديمة بنظام تكييف مركزي موفر للطاقة وصيانة مجاري الهواء.',
      detailsEn: 'Replacement of old packages with energy-saving central systems and duct maintenance.'
    }
  ], []);

  const filteredProjects = useMemo(() => {
    return filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);
  }, [filter, projectsData]);

  // Our Process steps
  const processSteps = useMemo(() => [
    {
      id: '01',
      icon: ClipboardCheck,
      titleAr: 'الدراسة والتصميم',
      titleEn: 'Design & Planning',
      descAr: 'نقوم بحساب الأحمال الحرارية واختيار سعة التكييف ومواقع فتحات الهواء بدقة هندسية.',
      descEn: 'We calculate thermal loads and design custom air outlet distributions with engineering precision.',
      image: '/images/projects/step_design_1779985607867.png'
    },
    {
      id: '02',
      icon: Settings,
      titleAr: 'تصنيع مجاري الهواء',
      titleEn: 'Duct Manufacturing',
      descAr: 'تصنيع مجاري الهواء (الدكت) في ورشنا الخاصة باستخدام أحدث ماكينات القص والتشكيل.',
      descEn: 'We manufacture duct pieces in our specialized workshops utilizing advanced cutting CNC machinery.',
      image: '/images/projects/step_manufacturing_1779985623333.png'
    },
    {
      id: '03',
      icon: Hammer,
      titleAr: 'التركيب الميداني',
      titleEn: 'Professional Installation',
      descAr: 'يقوم فنيونا بتركيب المكيفات، شبكة الدكت، أنابيب النحاس، والعوازل بأعلى مستويات الاحترافية.',
      descEn: 'Our technicians install AC equipment, copper pipes, insulation, and duct grids at highest standards.',
      image: '/images/projects/step_installation_1779985636919.png'
    },
    {
      id: '04',
      icon: Eye,
      titleAr: 'الاختبار والتشغيل',
      titleEn: 'Testing & Commissioning',
      descAr: 'نقوم باختبار ضغط النحاس وموازنة تدفق الهواء (TAB) لضمان برودة مثالية خالية من الضجيج.',
      descEn: 'We conduct copper pressure testing, air balancing, and noise testing to ensure smooth cooling.',
      image: '/images/projects/step_testing_1779985657104.png'
    }
  ], []);

  return (
    <div className="bg-[#0B1120]" dir={isRTL ? 'rtl' : 'ltr'}>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="projects" />

      {/* ========================================== */}
      {/* SECTION 1: OUR ENGINEERING PROCESS        */}
      {/* ========================================== */}
      <section className="py-16 md:py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#00E5FF]/10 text-[#00E5FF] mb-3">
              <Workflow className="h-4.5 w-4.5" />
              {isRTL ? 'منهجية العمل' : 'Our Workflow'}
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">
              {isRTL ? 'كيف ننفذ مشاريع التكييف؟' : 'How We Deliver HVAC Projects'}
            </h2>
            <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
              {isRTL 
                ? 'نحن نتبع خطوات هندسية مدروسة وموثقة لضمان حصولك على أعلى كفاءة تبريد ممكنة مع أقصى توفير في استهلاك الكهرباء.'
                : 'We follow structured, documented engineering steps to ensure you receive maximum cooling efficiency and optimal electrical savings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.id} className="relative rounded-[40%_5%_40%_5%] p-6 border border-white/10 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group min-h-[300px] flex flex-col justify-end">
                {/* Animated Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={step.image} 
                    alt={step.titleEn}
                    fill
                    className="object-cover transition-all duration-700 opacity-30 group-hover:opacity-70 group-hover:scale-110"
                  />
                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent z-10" />
                </div>

                <div className="relative z-20">
                  <div className="absolute -top-32 right-0 text-5xl font-black text-white/10 group-hover:text-white/20 transition-colors duration-500">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00E5FF] text-white flex items-center justify-center mb-4 shadow-lg shadow-[#00E5FF]/20 group-hover:bg-white group-hover:text-[#00E5FF] transition-colors duration-500">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-white mb-3">
                    {isRTL ? step.titleAr : step.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {isRTL ? step.descAr : step.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 2: QUALITY ASSURANCE & STANDARDS  */}
      {/* ========================================== */}
      <section className="py-16 bg-[#1E293B] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-[#00E5FF]/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-[#00E5FF] border border-white/5">
                <Award className="h-4.5 w-4.5" />
                {isRTL ? 'معايير الجودة' : 'Quality Standards'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {isRTL ? 'ملتزمون بأعلى المعايير العالمية في التكييف' : 'Committed to Global HVAC Engineering Standards'}
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {isRTL 
                  ? 'نحرص في مؤسسة أعمال التكييف على مطابقة وتطبيق أكواد الجمعية الأمريكية لمهندسي التبريد والتدفئة وتكييف الهواء (ASHRAE) في جميع مراحل التصميم والتنفيذ لضمان العمر الافتراضي الطويل للمعدات.'
                  : 'At Al-Takeef, we align and implement design and installation codes from the American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) to guarantee durability and high operational life.'}
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{isRTL ? 'اختبار تسريب وضغط النيتروجين' : 'Nitrogen Leak Pressure Testing'}</h4>
                    <p className="text-xs sm:text-sm text-white/70">{isRTL ? 'نختبر أنابيب النحاس بضغط نيتروجين 450 PSI للتأكد من خلو المنظومة من التسريب تماماً.' : 'We pressure test copper pipes with 450 PSI Nitrogen to completely ensure leak-free operation.'}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="h-6 w-6 text-[#00E5FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{isRTL ? 'عزل مجاري الهواء بأفضل المواد' : 'Premium Duct Insulation'}</h4>
                    <p className="text-xs sm:text-sm text-white/70">{isRTL ? 'نستخدم عوازل فايبرجلاس معتمدة بسماكة 1 بوصة وكثافة 24 كجم لمنع تكثف المياه أو فقد البرودة.' : 'We use certified 1-inch, 24kg density fiberglass insulation to prevent condensation and cooling loss.'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality badge side illustration */}
            <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center p-8">
              <div className="text-center space-y-4 max-w-sm">
                <div className="w-20 h-20 bg-[#00E5FF]/20 rounded-full flex items-center justify-center mx-auto text-[#00E5FF] animate-pulse">
                  <ShieldCheck className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold">{isRTL ? 'ضمان 100% على الأعمال' : '100% Installation Warranty'}</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  {isRTL
                    ? 'نقدم ضماناً شاملاً يصل إلى سنتين على مجاري الهواء وأعمال التركيب والربط النحاسي لراحة بالك.'
                    : 'We offer up to 2 years of comprehensive installation warranty on copper joints and ductwork for your peace of mind.'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SECTION 3: PROJECT GALLERY                 */}
      {/* ========================================== */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            {isRTL ? 'معرض مشاريعنا المنفذة' : 'Our Executed Projects Gallery'}
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {isRTL
              ? 'تصفح بعضاً من أعمالنا السكنية والتجارية والحكومية التي نفتخر بها في الرياض والخرج.'
              : 'Browse through our residential, commercial, and government HVAC accomplishments across Riyadh and Al-Kharj.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'commercial', 'residential', 'government'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                filter === cat 
                  ? 'bg-[#00E5FF] text-white shadow-md' 
                  : 'bg-[#111827] text-[#94A3B8] hover:bg-[#0F172A] hover:text-white border border-white/10'
              }`}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#111827] rounded-[40%_5%_40%_5%] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 flex flex-col h-[380px]"
            >
              {/* Image box (70% Height) */}
              <div className="relative w-full h-[70%] overflow-hidden bg-[#0B1120] shrink-0">
                <Image 
                  src={project.image} 
                  alt={isRTL ? project.titleAr : project.titleEn}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-w-7xl) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent z-10" />
              </div>
              
              {/* Content box (30% Height) */}
              <div className="p-5 flex flex-col flex-grow bg-[#111827] justify-center relative z-20">
                <span className="text-[#00E5FF] text-[9px] font-bold uppercase tracking-wider mb-1 block">
                  {t(`categories.${project.category}`)}
                </span>
                
                <h3 className="text-sm font-bold text-white mb-1 leading-snug group-hover:text-[#00E5FF] transition-colors line-clamp-1">
                  {isRTL ? project.titleAr : project.titleEn}
                </h3>
                
                <p className="text-[11px] text-[#94A3B8] leading-relaxed line-clamp-2">
                  {isRTL ? project.detailsAr : project.detailsEn}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      <CTABanner />
    </div>
  );
}
