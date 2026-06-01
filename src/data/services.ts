// =============================================================================
// Al-Takeef HVAC Services Data
// =============================================================================

export interface BilingualText {
  ar: string;
  en: string;
}

export interface ServiceFeature {
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ServiceSpec {
  labelAr: string;
  labelEn: string;
  valueAr: string;
  valueEn: string;
}

export type ServiceCategory = 'commercial' | 'residential' | 'support';

export interface Service {
  id: number;
  slug: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: ServiceCategory;
  icon: string;
  features: ServiceFeature[];
  specs: ServiceSpec[];
  keywords: {
    ar: string[];
    en: string[];
  };
  image: string;
}

export const services: Service[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. VRF Air Conditioning
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: 'vrf',
    nameAr: 'تكييف VRF',
    nameEn: 'VRF Air Conditioning',
    descriptionAr:
      'نقدم حلول تكييف VRF المتطورة للمباني التجارية والمنشآت الكبيرة في الرياض والخرج. تعتمد أنظمة VRF على تقنية التدفق المتغير لغاز التبريد مما يوفر كفاءة طاقة استثنائية تصل إلى 30% مقارنة بالأنظمة التقليدية. فريقنا المتخصص يقوم بالتصميم والتركيب والبرمجة لضمان أداء مثالي لكل وحدة داخلية بشكل مستقل.',
    descriptionEn:
      'We provide advanced VRF air conditioning solutions for commercial buildings and large facilities in Riyadh and Al-Kharj. VRF systems utilize variable refrigerant flow technology, delivering exceptional energy efficiency of up to 30% compared to conventional systems. Our specialized team handles design, installation, and programming to ensure optimal independent performance for every indoor unit.',
    category: 'commercial',
    icon: 'Building2',
    features: [
      {
        titleAr: 'تحكم مستقل بكل منطقة',
        titleEn: 'Independent Zone Control',
        descriptionAr: 'إمكانية التحكم بدرجة حرارة كل غرفة أو منطقة بشكل مستقل لتحقيق أقصى راحة',
        descriptionEn: 'Control the temperature of each room or zone independently for maximum comfort',
      },
      {
        titleAr: 'كفاءة طاقة عالية',
        titleEn: 'High Energy Efficiency',
        descriptionAr: 'توفير يصل إلى 30% من استهلاك الطاقة مقارنة بأنظمة التكييف المركزي التقليدية',
        descriptionEn: 'Up to 30% energy savings compared to traditional central AC systems',
      },
      {
        titleAr: 'تصميم مرن',
        titleEn: 'Flexible Design',
        descriptionAr: 'إمكانية توصيل حتى 64 وحدة داخلية بوحدة خارجية واحدة مع تنوع في أنواع الوحدات',
        descriptionEn: 'Connect up to 64 indoor units to a single outdoor unit with diverse unit types',
      },
      {
        titleAr: 'تشغيل هادئ',
        titleEn: 'Quiet Operation',
        descriptionAr: 'مستوى صوت منخفض للغاية يناسب المكاتب والمستشفيات والفنادق',
        descriptionEn: 'Extremely low noise level suitable for offices, hospitals, and hotels',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '8 - 72 طن تبريد', valueEn: '8 - 72 TR' },
      { labelAr: 'معامل الأداء', labelEn: 'COP Rating', valueAr: 'حتى 4.5', valueEn: 'Up to 4.5' },
      { labelAr: 'وحدات داخلية', labelEn: 'Indoor Units', valueAr: 'حتى 64 وحدة', valueEn: 'Up to 64 units' },
      { labelAr: 'طول الأنابيب', labelEn: 'Piping Length', valueAr: 'حتى 1000 متر', valueEn: 'Up to 1000m' },
    ],
    keywords: {
      ar: ['تكييف VRF', 'نظام VRF الرياض', 'تكييف مباني تجارية', 'تركيب VRF', 'صيانة VRF'],
      en: ['VRF air conditioning', 'VRF system Riyadh', 'commercial HVAC', 'VRF installation', 'VRF maintenance'],
    },
    image: '/images/services/vrf-v3.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. Central Air Conditioning
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: 'central',
    nameAr: 'تكييف مركزي',
    nameEn: 'Central Air Conditioning',
    descriptionAr:
      'نتخصص في تصميم وتركيب أنظمة التكييف المركزي للفلل والقصور والمجمعات التجارية في الرياض والخرج. نوفر حلولاً متكاملة تشمل مجاري الهواء والعزل الحراري وأنظمة التحكم الذكية. نضمن توزيع هواء متساوي في جميع الغرف مع أعلى معايير الجودة والكفاءة في استهلاك الطاقة.',
    descriptionEn:
      'We specialize in designing and installing central air conditioning systems for villas, palaces, and commercial complexes in Riyadh and Al-Kharj. We provide integrated solutions including ductwork, thermal insulation, and smart control systems. We ensure even air distribution across all rooms with the highest standards of quality and energy efficiency.',
    category: 'commercial',
    icon: 'Wind',
    features: [
      {
        titleAr: 'تغطية شاملة',
        titleEn: 'Complete Coverage',
        descriptionAr: 'تبريد موحد لجميع أنحاء المبنى عبر شبكة مجاري هواء مصممة بدقة',
        descriptionEn: 'Uniform cooling throughout the entire building via precisely designed ductwork',
      },
      {
        titleAr: 'تحكم ذكي',
        titleEn: 'Smart Control',
        descriptionAr: 'أنظمة ثرموستات ذكية مع إمكانية التحكم عن بعد عبر الهاتف المحمول',
        descriptionEn: 'Smart thermostat systems with remote control capability via mobile phone',
      },
      {
        titleAr: 'جودة هواء متميزة',
        titleEn: 'Superior Air Quality',
        descriptionAr: 'فلاتر متعددة المراحل لتنقية الهواء من الغبار والبكتيريا والروائح',
        descriptionEn: 'Multi-stage filters to purify air from dust, bacteria, and odors',
      },
      {
        titleAr: 'عمر افتراضي طويل',
        titleEn: 'Long Lifespan',
        descriptionAr: 'أنظمة مصممة لتدوم أكثر من 15 عاماً مع الصيانة الدورية المناسبة',
        descriptionEn: 'Systems designed to last over 15 years with proper periodic maintenance',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '3 - 50 طن تبريد', valueEn: '3 - 50 TR' },
      { labelAr: 'كفاءة الطاقة', labelEn: 'Energy Efficiency', valueAr: 'EER حتى 12', valueEn: 'EER up to 12' },
      { labelAr: 'مجاري الهواء', labelEn: 'Ductwork', valueAr: 'مجلفن معزول', valueEn: 'Insulated galvanized' },
      { labelAr: 'التحكم', labelEn: 'Control', valueAr: 'ثرموستات رقمي', valueEn: 'Digital thermostat' },
    ],
    keywords: {
      ar: ['تكييف مركزي', 'تكييف مركزي الرياض', 'تركيب تكييف مركزي', 'صيانة تكييف مركزي', 'تكييف فلل'],
      en: ['central AC', 'central air conditioning Riyadh', 'ducted AC installation', 'central HVAC', 'villa AC'],
    },
    image: '/images/services/central-v3.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. Concealed Duct Split AC
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: 'concealed-duct',
    nameAr: 'تكييف مخفي',
    nameEn: 'Concealed Duct Split AC',
    descriptionAr:
      'نقدم خدمات تركيب وصيانة أنظمة التكييف المخفي (الدكت سبليت) التي تجمع بين الأناقة والأداء العالي. يتم إخفاء الوحدة الداخلية بالكامل داخل السقف المستعار مع ظهور فتحات التوزيع فقط. الحل المثالي للمنازل والمكاتب التي تبحث عن تصميم داخلي نظيف دون التأثير على ديكور المكان.',
    descriptionEn:
      'We provide installation and maintenance services for concealed duct split AC systems that combine elegance with high performance. The indoor unit is completely hidden within the false ceiling with only distribution grilles visible. The ideal solution for homes and offices seeking a clean interior design without affecting the décor.',
    category: 'commercial',
    icon: 'EyeOff',
    features: [
      {
        titleAr: 'تصميم مخفي بالكامل',
        titleEn: 'Fully Concealed Design',
        descriptionAr: 'الوحدة الداخلية مخفية بالكامل داخل السقف المستعار للحفاظ على جمالية الديكور',
        descriptionEn: 'Indoor unit completely hidden within false ceiling to maintain décor aesthetics',
      },
      {
        titleAr: 'توزيع هواء مرن',
        titleEn: 'Flexible Air Distribution',
        descriptionAr: 'إمكانية توجيه الهواء لعدة غرف من وحدة واحدة عبر مجاري هواء',
        descriptionEn: 'Direct air to multiple rooms from a single unit through ductwork',
      },
      {
        titleAr: 'تشغيل هادئ جداً',
        titleEn: 'Ultra-Quiet Operation',
        descriptionAr: 'مستوى ضوضاء منخفض للغاية بفضل العزل الصوتي داخل السقف',
        descriptionEn: 'Extremely low noise level thanks to sound insulation within the ceiling',
      },
      {
        titleAr: 'صيانة سهلة',
        titleEn: 'Easy Maintenance',
        descriptionAr: 'فتحات صيانة مخصصة تسمح بالوصول السريع للوحدة دون التأثير على السقف',
        descriptionEn: 'Dedicated maintenance openings allow quick access without affecting the ceiling',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '18,000 - 60,000 BTU', valueEn: '18,000 - 60,000 BTU' },
      { labelAr: 'الضغط الساكن', labelEn: 'Static Pressure', valueAr: 'حتى 120 باسكال', valueEn: 'Up to 120 Pa' },
      { labelAr: 'مستوى الصوت', labelEn: 'Noise Level', valueAr: 'من 28 ديسيبل', valueEn: 'From 28 dB' },
      { labelAr: 'التركيب', labelEn: 'Installation', valueAr: 'داخل السقف المستعار', valueEn: 'Within false ceiling' },
    ],
    keywords: {
      ar: ['تكييف مخفي', 'دكت سبليت', 'تكييف مخفي الرياض', 'تركيب تكييف مخفي', 'تكييف سقف مستعار'],
      en: ['concealed duct AC', 'ducted split AC', 'hidden AC Riyadh', 'concealed AC installation', 'false ceiling AC'],
    },
    image: '/images/services/concealed-duct.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. Chiller AC Systems
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: 'chiller',
    nameAr: 'تكييف شيلر',
    nameEn: 'Chiller AC Systems',
    descriptionAr:
      'نوفر أنظمة تكييف الشيلر (المبردات) للمشاريع الضخمة والمجمعات التجارية والصناعية في المنطقة الوسطى. أنظمة الشيلر تعتمد على تبريد المياه لتوصيل التبريد عبر شبكة أنابيب إلى وحدات معالجة الهواء في جميع أنحاء المبنى. نتولى التصميم الهندسي والتوريد والتركيب والتشغيل بأعلى المعايير.',
    descriptionEn:
      'We provide chiller AC systems for mega projects, commercial complexes, and industrial facilities in the Central Region. Chiller systems rely on water cooling to deliver refrigeration through a piping network to air handling units throughout the building. We handle engineering design, supply, installation, and commissioning to the highest standards.',
    category: 'commercial',
    icon: 'Snowflake',
    features: [
      {
        titleAr: 'سعات تبريد ضخمة',
        titleEn: 'Massive Cooling Capacities',
        descriptionAr: 'مناسب للمشاريع الكبيرة التي تتطلب سعات تبريد تتجاوز 100 طن',
        descriptionEn: 'Suitable for large projects requiring cooling capacities exceeding 100 tons',
      },
      {
        titleAr: 'كفاءة اقتصادية',
        titleEn: 'Economic Efficiency',
        descriptionAr: 'تكلفة تشغيل أقل للمشاريع الكبيرة مقارنة بأنظمة التكييف الأخرى',
        descriptionEn: 'Lower operating costs for large projects compared to other AC systems',
      },
      {
        titleAr: 'عمر تشغيلي طويل',
        titleEn: 'Long Operational Life',
        descriptionAr: 'تدوم أنظمة الشيلر حتى 25 عاماً مع الصيانة الدورية المناسبة',
        descriptionEn: 'Chiller systems last up to 25 years with proper periodic maintenance',
      },
      {
        titleAr: 'مراقبة مركزية',
        titleEn: 'Centralized Monitoring',
        descriptionAr: 'نظام BMS متكامل لمراقبة والتحكم بجميع مكونات المنظومة',
        descriptionEn: 'Integrated BMS system for monitoring and controlling all system components',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '30 - 2000 طن تبريد', valueEn: '30 - 2000 TR' },
      { labelAr: 'نوع التبريد', labelEn: 'Cooling Type', valueAr: 'مبرد بالماء / بالهواء', valueEn: 'Water / Air cooled' },
      { labelAr: 'غاز التبريد', labelEn: 'Refrigerant', valueAr: 'R-134a / R-410A', valueEn: 'R-134a / R-410A' },
      { labelAr: 'التحكم', labelEn: 'Control', valueAr: 'نظام BMS', valueEn: 'BMS System' },
    ],
    keywords: {
      ar: ['تكييف شيلر', 'شيلر الرياض', 'نظام تبريد مركزي', 'مبردات مياه', 'تكييف مجمعات تجارية'],
      en: ['chiller AC', 'chiller system Riyadh', 'central cooling', 'water chiller', 'commercial complex HVAC'],
    },
    image: '/images/services/chiller-v4.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. CRAC Units Data Centers
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 5,
    slug: 'crac',
    nameAr: 'وحدات CRAC',
    nameEn: 'CRAC Units Data Centers',
    descriptionAr:
      'نوفر وحدات تكييف غرف الحاسب الآلي (CRAC) المصممة خصيصاً لمراكز البيانات وغرف السيرفرات. هذه الوحدات تضمن التحكم الدقيق بدرجة الحرارة والرطوبة على مدار الساعة لحماية المعدات الحساسة. نقدم حلولاً متكاملة تشمل التصميم والتركيب والصيانة الوقائية مع ضمان وقت تشغيل يصل إلى 99.99%.',
    descriptionEn:
      'We provide Computer Room Air Conditioning (CRAC) units specifically designed for data centers and server rooms. These units ensure precise temperature and humidity control around the clock to protect sensitive equipment. We offer integrated solutions including design, installation, and preventive maintenance with guaranteed uptime of up to 99.99%.',
    category: 'commercial',
    icon: 'Server',
    features: [
      {
        titleAr: 'تحكم دقيق بالحرارة',
        titleEn: 'Precise Temperature Control',
        descriptionAr: 'دقة تحكم ±0.5 درجة مئوية للحفاظ على بيئة مثالية للسيرفرات',
        descriptionEn: '±0.5°C control accuracy to maintain an ideal server environment',
      },
      {
        titleAr: 'تحكم بالرطوبة',
        titleEn: 'Humidity Control',
        descriptionAr: 'نظام ترطيب وإزالة رطوبة مدمج للحفاظ على المستوى المثالي',
        descriptionEn: 'Built-in humidification and dehumidification system to maintain optimal levels',
      },
      {
        titleAr: 'تشغيل 24/7',
        titleEn: '24/7 Operation',
        descriptionAr: 'مصممة للعمل المتواصل على مدار الساعة مع نظام احتياطي تلقائي',
        descriptionEn: 'Designed for continuous operation with automatic backup system',
      },
      {
        titleAr: 'مراقبة عن بعد',
        titleEn: 'Remote Monitoring',
        descriptionAr: 'نظام إنذار وإشعارات فورية عند حدوث أي خلل في الأداء',
        descriptionEn: 'Instant alert and notification system for any performance anomalies',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '5 - 200 كيلوواط', valueEn: '5 - 200 kW' },
      { labelAr: 'دقة الحرارة', labelEn: 'Temperature Accuracy', valueAr: '±0.5°C', valueEn: '±0.5°C' },
      { labelAr: 'دقة الرطوبة', labelEn: 'Humidity Accuracy', valueAr: '±5% RH', valueEn: '±5% RH' },
      { labelAr: 'وقت التشغيل', labelEn: 'Uptime', valueAr: '99.99%', valueEn: '99.99%' },
    ],
    keywords: {
      ar: ['وحدات CRAC', 'تكييف مراكز بيانات', 'تكييف غرف سيرفرات', 'تبريد دقيق', 'تكييف حاسب آلي'],
      en: ['CRAC units', 'data center cooling', 'server room AC', 'precision cooling', 'computer room AC'],
    },
    image: '/images/services/crac.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. Split Wall AC
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: 'split-wall',
    nameAr: 'مكيف جداري سبليت',
    nameEn: 'Split Wall AC',
    descriptionAr:
      'نوفر أفضل المكيفات الجدارية السبليت من ماركات عالمية مثل قري وتوشيبا وبيسك مع خدمة التركيب الاحترافي. المكيفات الجدارية هي الخيار الأمثل للغرف والصالات بأسعار مناسبة وكفاءة عالية في التبريد. نقدم استشارة مجانية لاختيار السعة المناسبة لمساحتك مع ضمان شامل على التركيب.',
    descriptionEn:
      'We provide the best split wall air conditioners from global brands like Gree, Toshiba, and Basic with professional installation service. Wall-mounted split ACs are the optimal choice for rooms and halls at affordable prices with high cooling efficiency. We offer free consultation to choose the right capacity for your space with comprehensive installation warranty.',
    category: 'residential',
    icon: 'AirVent',
    features: [
      {
        titleAr: 'تركيب سريع',
        titleEn: 'Quick Installation',
        descriptionAr: 'تركيب احترافي خلال ساعتين فقط مع تشطيب نظيف وأنيق',
        descriptionEn: 'Professional installation within just 2 hours with clean, elegant finishing',
      },
      {
        titleAr: 'ماركات موثوقة',
        titleEn: 'Trusted Brands',
        descriptionAr: 'نوفر أفضل الماركات العالمية مع ضمان المصنع الرسمي',
        descriptionEn: 'We provide top global brands with official manufacturer warranty',
      },
      {
        titleAr: 'توفير الطاقة',
        titleEn: 'Energy Saving',
        descriptionAr: 'مكيفات بتقنية الإنفرتر لتوفير حتى 40% من فاتورة الكهرباء',
        descriptionEn: 'Inverter technology ACs saving up to 40% on electricity bills',
      },
      {
        titleAr: 'تنقية الهواء',
        titleEn: 'Air Purification',
        descriptionAr: 'فلاتر متطورة لتنقية الهواء من الغبار والبكتيريا والفيروسات',
        descriptionEn: 'Advanced filters to purify air from dust, bacteria, and viruses',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '12,000 - 36,000 BTU', valueEn: '12,000 - 36,000 BTU' },
      { labelAr: 'كفاءة الطاقة', labelEn: 'Energy Efficiency', valueAr: 'حتى 5 نجوم', valueEn: 'Up to 5 stars' },
      { labelAr: 'غاز التبريد', labelEn: 'Refrigerant', valueAr: 'R-410A صديق للبيئة', valueEn: 'R-410A eco-friendly' },
      { labelAr: 'الضمان', labelEn: 'Warranty', valueAr: '5 سنوات كمبروسر', valueEn: '5 years compressor' },
    ],
    keywords: {
      ar: ['مكيف سبليت', 'مكيف جداري', 'تركيب مكيف سبليت الرياض', 'أفضل مكيف سبليت', 'مكيف انفرتر'],
      en: ['split AC', 'wall mount AC', 'split AC installation Riyadh', 'best split AC', 'inverter AC'],
    },
    image: '/images/services/split-wall.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. Cassette AC
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 7,
    slug: 'cassette',
    nameAr: 'مكيف كاسيت',
    nameEn: 'Cassette AC',
    descriptionAr:
      'نقدم حلول مكيفات الكاسيت السقفية المثالية للمحلات التجارية والمكاتب والمطاعم. يتميز مكيف الكاسيت بتوزيع الهواء من أربع اتجاهات لتغطية مساحات واسعة بشكل متساوٍ. تصميمه الأنيق يندمج مع السقف المستعار ولا يشغل أي مساحة من الجدران مما يمنح حرية كاملة في التصميم الداخلي.',
    descriptionEn:
      'We provide ceiling cassette AC solutions ideal for retail shops, offices, and restaurants. Cassette ACs feature 4-way air distribution to cover large areas evenly. Their elegant design integrates with the false ceiling and takes no wall space, giving complete freedom in interior design.',
    category: 'residential',
    icon: 'LayoutGrid',
    features: [
      {
        titleAr: 'توزيع هواء 360°',
        titleEn: '360° Air Distribution',
        descriptionAr: 'توزيع الهواء من أربع اتجاهات لتغطية متساوية في المساحات الكبيرة',
        descriptionEn: '4-way air distribution for even coverage in large spaces',
      },
      {
        titleAr: 'تصميم سقفي أنيق',
        titleEn: 'Elegant Ceiling Design',
        descriptionAr: 'يندمج بشكل مثالي مع السقف المستعار بلوحة أنيقة فقط',
        descriptionEn: 'Integrates perfectly with false ceiling showing only an elegant panel',
      },
      {
        titleAr: 'مساحة جدران حرة',
        titleEn: 'Free Wall Space',
        descriptionAr: 'لا يشغل أي مساحة من الجدران مما يتيح حرية تصميم الديكور',
        descriptionEn: 'Takes no wall space allowing complete freedom in décor design',
      },
      {
        titleAr: 'مناسب للمساحات الكبيرة',
        titleEn: 'Suitable for Large Spaces',
        descriptionAr: 'قدرة تبريد عالية تغطي مساحات تصل إلى 80 متر مربع',
        descriptionEn: 'High cooling capacity covering areas up to 80 square meters',
      },
    ],
    specs: [
      { labelAr: 'السعة التبريدية', labelEn: 'Cooling Capacity', valueAr: '18,000 - 60,000 BTU', valueEn: '18,000 - 60,000 BTU' },
      { labelAr: 'اتجاهات الهواء', labelEn: 'Air Directions', valueAr: '4 اتجاهات', valueEn: '4-way' },
      { labelAr: 'أبعاد اللوحة', labelEn: 'Panel Size', valueAr: '570 × 570 مم', valueEn: '570 × 570 mm' },
      { labelAr: 'التحكم', labelEn: 'Control', valueAr: 'ريموت لاسلكي + سلكي', valueEn: 'Wireless + wired remote' },
    ],
    keywords: {
      ar: ['مكيف كاسيت', 'مكيف سقفي', 'تركيب كاسيت الرياض', 'مكيف محلات تجارية', 'كاسيت سقفي'],
      en: ['cassette AC', 'ceiling AC', 'cassette AC installation Riyadh', 'commercial shop AC', 'ceiling cassette'],
    },
    image: '/images/services/cassette.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. AC Maintenance
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 8,
    slug: 'maintenance',
    nameAr: 'صيانة التكييف',
    nameEn: 'AC Maintenance',
    descriptionAr:
      'نقدم خدمات صيانة شاملة لجميع أنواع أنظمة التكييف في الرياض والخرج. تشمل خدماتنا الصيانة الوقائية الدورية وإصلاح الأعطال وتعبئة الفريون وتنظيف المكيفات وتبديل القطع. فريقنا الفني المعتمد يضمن تشخيص دقيق وإصلاح سريع مع استخدام قطع غيار أصلية وضمان على جميع الأعمال.',
    descriptionEn:
      'We provide comprehensive maintenance services for all types of AC systems in Riyadh and Al-Kharj. Our services include periodic preventive maintenance, fault repair, refrigerant recharging, AC cleaning, and parts replacement. Our certified technical team ensures accurate diagnosis and quick repair using genuine spare parts with warranty on all work.',
    category: 'support',
    icon: 'Wrench',
    features: [
      {
        titleAr: 'صيانة وقائية دورية',
        titleEn: 'Periodic Preventive Maintenance',
        descriptionAr: 'برامج صيانة مجدولة لمنع الأعطال وإطالة عمر المكيف',
        descriptionEn: 'Scheduled maintenance programs to prevent breakdowns and extend AC lifespan',
      },
      {
        titleAr: 'إصلاح الأعطال',
        titleEn: 'Fault Repair',
        descriptionAr: 'تشخيص دقيق وإصلاح سريع لجميع أعطال التكييف بقطع غيار أصلية',
        descriptionEn: 'Accurate diagnosis and quick repair of all AC faults with genuine parts',
      },
      {
        titleAr: 'تنظيف شامل',
        titleEn: 'Deep Cleaning',
        descriptionAr: 'تنظيف عميق للوحدات الداخلية والخارجية وتعقيمها بمواد آمنة',
        descriptionEn: 'Deep cleaning and sanitization of indoor and outdoor units with safe materials',
      },
      {
        titleAr: 'عقود صيانة سنوية',
        titleEn: 'Annual Maintenance Contracts',
        descriptionAr: 'عقود صيانة سنوية بأسعار مخفضة مع أولوية في الاستجابة للطوارئ',
        descriptionEn: 'Annual maintenance contracts at discounted rates with priority emergency response',
      },
    ],
    specs: [
      { labelAr: 'وقت الاستجابة', labelEn: 'Response Time', valueAr: 'خلال 24 ساعة', valueEn: 'Within 24 hours' },
      { labelAr: 'ضمان الصيانة', labelEn: 'Maintenance Warranty', valueAr: '90 يوم', valueEn: '90 days' },
      { labelAr: 'التغطية', labelEn: 'Coverage', valueAr: 'الرياض والخرج', valueEn: 'Riyadh & Al-Kharj' },
      { labelAr: 'فريق العمل', labelEn: 'Team', valueAr: 'فنيون معتمدون', valueEn: 'Certified technicians' },
    ],
    keywords: {
      ar: ['صيانة مكيفات', 'صيانة تكييف الرياض', 'تنظيف مكيفات', 'إصلاح مكيفات', 'فني تكييف'],
      en: ['AC maintenance', 'AC repair Riyadh', 'AC cleaning', 'HVAC maintenance', 'AC technician'],
    },
    image: '/images/services/maintenance.png',
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9. Ventilation Solutions
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: 'ventilation',
    nameAr: 'حلول التهوية',
    nameEn: 'Ventilation Solutions',
    descriptionAr:
      'نقدم حلول تهوية متكاملة للمباني التجارية والصناعية والسكنية تشمل أنظمة شفط الهواء والتهوية الميكانيكية واستخلاص الهواء النقي. نصمم أنظمة تهوية تلبي متطلبات الصحة والسلامة مع الحفاظ على كفاءة الطاقة. حلولنا تضمن بيئة داخلية صحية خالية من الرطوبة والروائح والملوثات.',
    descriptionEn:
      'We provide integrated ventilation solutions for commercial, industrial, and residential buildings including exhaust systems, mechanical ventilation, and fresh air intake. We design ventilation systems that meet health and safety requirements while maintaining energy efficiency. Our solutions ensure a healthy indoor environment free from humidity, odors, and pollutants.',
    category: 'support',
    icon: 'Fan',
    features: [
      {
        titleAr: 'تهوية ميكانيكية',
        titleEn: 'Mechanical Ventilation',
        descriptionAr: 'أنظمة تهوية ميكانيكية متطورة لضمان تدفق هواء نقي مستمر',
        descriptionEn: 'Advanced mechanical ventilation systems ensuring continuous fresh air flow',
      },
      {
        titleAr: 'شفط وطرد الهواء',
        titleEn: 'Air Exhaust Systems',
        descriptionAr: 'أنظمة شفط فعالة للمطابخ والحمامات والمناطق الصناعية',
        descriptionEn: 'Effective exhaust systems for kitchens, bathrooms, and industrial areas',
      },
      {
        titleAr: 'استرداد الطاقة',
        titleEn: 'Energy Recovery',
        descriptionAr: 'وحدات استرداد الحرارة لتوفير الطاقة أثناء تجديد الهواء',
        descriptionEn: 'Heat recovery units for energy savings during air renewal',
      },
      {
        titleAr: 'تصميم مجاري الهواء',
        titleEn: 'Ductwork Design',
        descriptionAr: 'تصميم وتركيب مجاري هواء بمقاسات مخصصة حسب المشروع',
        descriptionEn: 'Custom-sized ductwork design and installation per project requirements',
      },
    ],
    specs: [
      { labelAr: 'تدفق الهواء', labelEn: 'Air Flow', valueAr: 'حتى 50,000 CFM', valueEn: 'Up to 50,000 CFM' },
      { labelAr: 'كفاءة الاسترداد', labelEn: 'Recovery Efficiency', valueAr: 'حتى 80%', valueEn: 'Up to 80%' },
      { labelAr: 'مادة المجاري', labelEn: 'Duct Material', valueAr: 'مجلفن / فايبر جلاس', valueEn: 'Galvanized / Fiberglass' },
      { labelAr: 'المعايير', labelEn: 'Standards', valueAr: 'ASHRAE 62.1', valueEn: 'ASHRAE 62.1' },
    ],
    keywords: {
      ar: ['تهوية', 'أنظمة تهوية', 'شفط هواء', 'تهوية مباني', 'مجاري هواء'],
      en: ['ventilation', 'HVAC ventilation', 'air exhaust', 'building ventilation', 'ductwork'],
    },
    image: '/images/services/ventilation-v2.png',
  },
];

// ─── Helper functions ──────────────────────────────────────────────────────────

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

export const commercialServices = services.filter((s) => s.category === 'commercial');
export const residentialServices = services.filter((s) => s.category === 'residential');
export const supportServices = services.filter((s) => s.category === 'support');
