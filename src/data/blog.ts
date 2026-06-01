// =============================================================================
// Al-Takeef SEO Blog Database (20 Highly Optimized HVAC Articles)
// =============================================================================

export interface BlogPost {
  id: number;
  slug: string;
  category: 'maintenance' | 'tech' | 'commercial' | 'saving';
  categoryAr: string;
  categoryEn: string;
  date: string;
  dateAr: string;
  readTimeAr: string;
  readTimeEn: string;
  image: string;
  authorAr: string;
  authorEn: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  contentAr: string; // Rich HTML content targeting Saudi HVAC keywords
  contentEn: string; // Rich HTML content targeting Saudi HVAC keywords
  keywordsAr: string[];
  keywordsEn: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'ac-maintenance-tips-riyadh',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-05-20',
    dateAr: '٢٠ مايو ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/blog-maintenance.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'أفضل نصائح صيانة المكيفات في الرياض لتجنب حرارة الصيف',
    titleEn: 'Best AC Maintenance Tips in Riyadh to Beat the Summer Heat',
    summaryAr: 'دليل شامل حول صيانة مكيفات الرياض، يوضح كيفية تنظيف الفلاتر وتجنب الأعطال المفاجئة لزيادة كفاءة التبريد في منزلك.',
    summaryEn: 'A comprehensive guide on AC maintenance in Riyadh, showing how to clean filters and prevent sudden failures to improve cooling efficiency.',
    contentAr: `
      <h3>أهمية الصيانة الدورية للمكيفات بالرياض</h3>
      <p>مع بداية فصل الصيف وارتفاع درجات الحرارة الاستثنائي في مدينة الرياض، يصبح جهاز التكييف شريان الحياة الأساسي في كل منزل ومكتب. إن إهمال <strong>صيانة مكيفات الرياض</strong> قبل بداية الصيف يؤدي إلى تراكم الغبار والرمال الصحراوية داخل الوحدات، مما يضعف كفاءة التبريد ويزيد من استهلاك الكهرباء بنسبة تصل إلى ٣٠٪.</p>
      
      <h3>٤ خطوات رئيسية لصيانة مكيفك بنفسك</h3>
      <ul>
        <li><strong>تنظيف الفلاتر الهوائية:</strong> يجب غسل فلاتر الوحدة الداخلية مرة كل أسبوعين في الرياض بسبب كثرة العواصف الرملية.</li>
        <li><strong>فحص مخرج تكثيف المياه:</strong> تأكد من أن أنبوب التصريف سالك ولا يوجد به انسداد يسبب تسريب المياه داخل الغرفة.</li>
        <li><strong>تنظيف الوحدات الخارجية:</strong> إزالة الغبار المتراكم على المروحة الخارجية يزيد من كفاءة تبادل الحرارة.</li>
        <li><strong>الاتصال بفني مختص:</strong> لفحص ضغط الفريون وتنظيف الكويلات الداخلية بمواد متخصصة مرة سنوياً على الأقل.</li>
      </ul>

      <h3>الكلمات الدلالية المستهدفة</h3>
      <p>تتضمن الكلمات الرئيسية الأكثر بحثاً في السعودية مثل: <em>صيانة مكيفات سبليت الرياض</em>، <em>تنظيف مكيفات الرياض</em>، و<em>فني تكييف ممتاز بالرياض</em>.</p>
    `,
    contentEn: `
      <h3>The Importance of AC Maintenance in Riyadh</h3>
      <p>With the onset of summer and soaring temperatures in Riyadh, your air conditioner becomes the most critical appliance in your home. Neglecting periodic <strong>AC repair in Riyadh</strong> leads to dust accumulation, reducing cooling performance and increasing electricity bills by up to 30%.</p>
      
      <h3>4 Vital Steps for DIY AC Maintenance</h3>
      <ul>
        <li><strong>Clean Air Filters:</strong> Wash indoor unit filters every two weeks during dust-heavy periods in Riyadh.</li>
        <li><strong>Check Condensate Drain:</strong> Ensure the drainage tube is clear to prevent internal water leaks.</li>
        <li><strong>Inspect Outdoor Units:</strong> Clean dust from the compressor fan to aid efficient heat transfer.</li>
        <li><strong>Hire a Certified Technician:</strong> Schedule an annual check-up to measure freon pressure and deep-clean coils.</li>
      </ul>
    `,
    keywordsAr: ['صيانة مكيفات الرياض', 'تنظيف مكيفات سبليت', 'فني تكييف الرياض', 'اعطال المكيفات'],
    keywordsEn: ['AC maintenance Riyadh', 'AC repair Riyadh', 'split AC cleaning', 'Riyadh HVAC technician']
  },
  {
    id: 2,
    slug: 'vrf-vs-central-ac-villas',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-05-18',
    dateAr: '١٨ مايو ٢٠٢٦',
    readTimeAr: '٧ دقائق قراءة',
    readTimeEn: '7 min read',
    image: '/images/blog-vrf-vs-central.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'مقارنة بين نظام VRF والتكييف المركزي للفلل بالرياض',
    titleEn: 'VRF System vs Central AC for Modern Villas in Riyadh',
    summaryAr: 'اكتشف الفرق بين نظام VRF الموفر للطاقة والتكييف المركزي التقليدي، أيهما أفضل للفلل السكنية الفاخرة بالرياض والخرج؟',
    summaryEn: 'Explore the differences between energy-efficient VRF systems and traditional central ACs, and which is better for luxury villas in Saudi Arabia.',
    contentAr: `
      <h3>تكييف الفلل في السعودية: تحدي الكفاءة والمساحة</h3>
      <p>عند بناء فيلا جديدة في الرياض أو الخرج، يواجه الملاك قراراً مصيرياً حول نوع التكييف المناسب. الخياران الأبرز هما: <strong>التكييف المركزي</strong> ونظام <strong>VRF (تدفق التبريد المتغير)</strong>. يعد نظام VRF الأحدث تكنولوجياً ويقدم حلولاً ممتازة لترشيد الاستهلاك.</p>
      
      <h3>مقارنة تفصيلية</h3>
      <ul>
        <li><strong>كفاءة الطاقة:</strong> يتفوق نظام VRF بتوفير يصل إلى ٤٠٪ من استهلاك الكهرباء مقارنة بالمركزي لأنه يتحكم بسرعة الكمبروسر بشكل دقيق حسب الحاجة.</li>
        <li><strong>مساحة السقف المستعار:</strong> التكييف المركزي يتطلب مجاري هواء (دكت) ضخمة مما يقلل ارتفاع السقف، بينما VRF يستخدم أنابيب نحاسية صغيرة توفر مساحة السقف.</li>
        <li><strong>التحكم المستقل:</strong> في نظام VRF، يمكن إطفاء التكييف في مجلس الرجال دون التأثير على غرف النوم العليا، بينما المركزي يتحكم بالمبنى ككتلة واحدة أو زونات محدودة.</li>
      </ul>
    `,
    contentEn: `
      <h3>HVAC Selection for Saudi Villas</h3>
      <p>Choosing between <strong>VRF Air Conditioning</strong> and traditional <strong>Central AC</strong> is a major milestone in villa construction. While central AC is traditional and trusted, VRF represents the peak of modern energy efficiency and zone control.</p>
      
      <h3>Key Comparisons</h3>
      <ul>
        <li><strong>Energy Efficiency:</strong> VRF systems save up to 40% in power bills by running compressors at variable speeds.</li>
        <li><strong>Ceiling Height:</strong> VRF uses thin copper refrigerant lines, preserving your gypsum ceiling space compared to bulky central ducts.</li>
        <li><strong>Independent Zone Control:</strong> Turn off AC in unused reception halls while keeping bedrooms cool, which is difficult with single-package central systems.</li>
      </ul>
    `,
    keywordsAr: ['نظام VRF الرياض', 'تكييف مركزي للفلل', 'افضل تكييف للفلل', 'اسعار تكييف VRF'],
    keywordsEn: ['VRF system Riyadh', 'central AC for villas', 'VRF vs central AC', 'smart cooling Saudi']
  },
  {
    id: 3,
    slug: 'how-to-clean-split-ac-home',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-05-15',
    dateAr: '١٥ مايو ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/blog-split-cleaning.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'طريقة تنظيف مكيف سبليت في المنزل بالخطوات والتفصيل',
    titleEn: 'Step-by-Step Guide to Cleaning Your Split AC at Home',
    summaryAr: 'تعلم طريقة تنظيف مكيف سبليت بنفسك لضمان هواء نقي خالٍ من الغبار، ورفع كفاءة تبريد المكيف بدون تكلفة إضافية.',
    summaryEn: 'Learn how to clean your wall-mounted split AC unit on your own to ensure clean air flow and boost cooling efficiency.',
    contentAr: `
      <h3>لماذا يجب تنظيف مكيف السبلت بشكل دوري؟</h3>
      <p>تراكم الغبار على زعانف المبخر (الكويل الداخلي) يمنع انتقال الحرارة ويجبر المكيف على العمل لوقت أطول لتبريد الغرفة. هذا الدليل يوضح خطوات <strong>تنظيف مكيف سبليت</strong> في منزلك بالرياض بكل سهولة لضمان هواء صحي لعائلتك.</p>
      
      <h3>خطوات العمل</h3>
      <ol>
        <li><strong>فصل التيار الكهربائي:</strong> خطوة السلامة الأولى والأهم هي إيقاف المفتاح الرئيسي للمكيف.</li>
        <li><strong>فتح الغطاء الأمامي ونزع الفلاتر:</strong> اغسل الفلاتر بماء وصابون معتدل واتركها لتجف تماماً في الظل.</li>
        <li><strong>استخدام بخاخ تنظيف المكيف:</strong> رش رغوة التنظيف على الكويل المعدني الداخلي واتركها لمدة ٢٠ دقيقة لتذيب الأوساخ.</li>
        <li><strong>مسح الغبار الخارجي:</strong> قم بتنظيف الموجهات البلاستيكية بقطعة قماش ناعمة مبللة.</li>
      </ol>
    `,
    contentEn: `
      <h3>Why Clean Your Split AC?</h3>
      <p>Accumulated dust acts as an insulation layer on the evaporator coil, making the AC work twice as hard. Cleaning your <strong>split AC unit</strong> at home ensures fresh, allergen-free air and reduces power consumption.</p>
      
      <h3>The Step-by-Step Process</h3>
      <ol>
        <li><strong>Disconnect Power:</strong> Always shut off the main circuit breaker before starting.</li>
        <li><strong>Remove and Wash Filters:</strong> Use lukewarm water and let them dry completely in the shade.</li>
        <li><strong>Apply Coil Cleaning Spray:</strong> Spray specialized foaming cleaner onto the metal coils and let it sit for 20 minutes.</li>
        <li><strong>Wipe the Vanes:</strong> Wipe the plastic air louvers with a damp cloth.</li>
      </ol>
    `,
    keywordsAr: ['تنظيف مكيف سبليت', 'طريقة غسيل المكيف', 'فني تنظيف مكيفات', 'صيانة المكيفات المنزلية'],
    keywordsEn: ['clean split AC', 'washing split AC filters', 'DIY AC cleaning', 'home AC maintenance']
  },
  {
    id: 4,
    slug: 'energy-saving-ac-settings-saudi',
    category: 'saving',
    categoryAr: 'توفير الطاقة',
    categoryEn: 'Energy Saving',
    date: '2026-05-12',
    dateAr: '١٢ مايو ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/blog-energy-saving.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'أفضل إعدادات توفير الكهرباء للمكيفات في الصيف السعودي',
    titleEn: 'Best AC Settings to Save Electricity in Saudi Arabia',
    summaryAr: 'نصائح عملية حول كيفية خفض فاتورة الكهرباء في السعودية من خلال ضبط درجة حرارة المكيف المثالية واستخدام وضعيات التشغيل الذكية.',
    summaryEn: 'Practical tips on reducing your Saudi electricity bill by setting the optimal AC temperature and using smart eco modes.',
    contentAr: `
      <h3>تخفيض فاتورة كهرباء المكيف بالرياض والخرج</h3>
      <p>تمثل المكيفات أكثر من ٦٠٪ من قيمة فاتورة الكهرباء في السعودية خلال أشهر الصيف. ببعض التعديلات البسيطة في عادات الاستخدام وضبط الثرموستات، يمكنك توفير ما يصل إلى ٢٥٪ من الفاتورة دون التضحية بالبرودة والراحة.</p>
      
      <h3>أهم الإعدادات الموصى بها</h3>
      <ul>
        <li><strong>اضبط الحرارة على ٢٤ درجة مئوية:</strong> هذا هو الإعداد المثالي الذي تنصح به الشركة السعودية للكهرباء والهيئة السعودية للمواصفات والمقاييس.</li>
        <li><strong>استخدام وضع التوفير (ECO/Sleep):</strong> يقوم هذا الوضع بتعديل مروحة المكيف وضبط درجة الحرارة تلقائياً لتناسب نومك وتوفر الطاقة.</li>
        <li><strong>تجنب وضع المروحة التلقائي (Auto Fan):</strong> تشغيل المروحة على سرعة متوسطة ثابتة أفضل من التغيير المستمر الذي يستهلك طاقة أعلى.</li>
      </ul>
    `,
    contentEn: `
      <h3>Lowering Your AC Energy Bill in Saudi Arabia</h3>
      <p>During the scorching Saudi summer, air conditioning accounts for over 60% of household power bills. Simple adjustments to your thermostat and smart habits can lead to substantial monthly savings.</p>
      
      <h3>Recommended Settings</h3>
      <ul>
        <li><strong>Set Temperature to 24°C:</strong> This is the golden rule endorsed by SASO and Saudi Electricity Company.</li>
        <li><strong>Activate ECO / Sleep Mode:</strong> This mode optimizes fan speeds and adjusts temperature slightly as you sleep.</li>
        <li><strong>Keep Doors & Windows Closed:</strong> Ensure rooms are well-sealed to prevent cool air from escaping and warm desert air from entering.</li>
      </ul>
    `,
    keywordsAr: ['توفير كهرباء المكيف', 'درجة حرارة المكيف المثالية', 'ترشيد استهلاك الكهرباء', 'فاتورة الكهرباء السعودية'],
    keywordsEn: ['save AC electricity Saudi', 'best AC temperature', 'lower utility bill Riyadh', 'eco mode AC']
  },
  {
    id: 5,
    slug: 'why-cassette-ac-ideal-offices',
    category: 'commercial',
    categoryAr: 'تكييف تجاري',
    categoryEn: 'Commercial HVAC',
    date: '2026-05-10',
    dateAr: '١٠ مايو ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/blog-cassette-office.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'لماذا مكيفات الكاسيت السقفية هي الأفضل للمكاتب والمحلات بالرياض؟',
    titleEn: 'Why Ceiling Cassette ACs are Perfect for Riyadh Offices & Shops',
    summaryAr: 'توضيح لمزايا مكيف الكاسيت السقفي وتوزيعه المتميز للهواء بـ 360 درجة، ولماذا يفضله أصحاب المحلات التجارية والمكاتب الإدارية.',
    summaryEn: 'Explaining the benefits of ceiling cassette ACs, their 360-degree air flow, and why retail shop and office owners in Riyadh prefer them.',
    contentAr: `
      <h3>تكييف المكاتب والمحلات التجارية بالرياض</h3>
      <p>تتطلب المساحات الإدارية والمحلات التجارية توزيعاً متساوياً للهواء البارد لضمان راحة الموظفين والزبائن على حد سواء. مكيفات <strong>الكاسيت السقفية</strong> تقدم حلاً جذاباً وعملياً يندمج مباشرة في الأسقف المستعارة دون شغل مساحة على الجدران.</p>
      
      <h3>مزايا مكيفات الكاسيت</h3>
      <ul>
        <li><strong>توزيع الهواء بـ ٤ اتجاهات:</strong> يضمن وصول البرودة لكل زاوية في الغرفة بالتساوي ومنع وجود مناطق حارة.</li>
        <li><strong>مظهر ديكوري أنيق:</strong> لا يظهر من المكيف سوى لوحة الشبك المسطحة الجميلة، مما يتناسق مع السقف الجبسي المستعار.</li>
        <li><strong>هدوء تشغيلي فائق:</strong> بفضل تركيب وحدات الدفع والمراوح داخل السقف، يكون مستوى الضجيج شبه منعدم في المكاتب.</li>
      </ul>
    `,
    contentEn: `
      <h3>HVAC Solutions for Commercial Spaces in Riyadh</h3>
      <p>Office environments and luxury retail boutiques demand clean lines and even cooling. <strong>Ceiling Cassette ACs</strong> deliver powerful cooling directly from the center of the room while staying completely out of sight.</p>
      
      <h3>Advantages of Cassette Units</h3>
      <ul>
        <li><strong>4-Way Balanced Airflow:</strong> Distributes cold air evenly in a 360-degree radius, eliminating hot spots.</li>
        <li><strong>Space Saver:</strong> Leaves wall space free for shelves, branding, or office furniture.</li>
        <li><strong>Whisper-Quiet Performance:</strong> Hidden inside the ceiling grid, keeping office meetings noise-free.</li>
      </ul>
    `,
    keywordsAr: ['مكيف كاسيت الرياض', 'مكيفات سقفية للمحلات', 'تكييف مكاتب الرياض', 'اسعار مكيف كاسيت'],
    keywordsEn: ['ceiling cassette AC Riyadh', 'office air conditioning', 'commercial cassette AC', 'cassette AC installation']
  },
  {
    id: 6,
    slug: 'ac-compressor-failure-signs',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-05-08',
    dateAr: '٨ مايو ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/services/commercial.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'أهم علامات تلف كمبروسر المكيف وكيف تجنبها؟',
    titleEn: 'Key Signs of AC Compressor Failure and How to Avoid It',
    summaryAr: 'تعرف على علامات وأعراض تلف الضاغط (الكمبروسر) في نظام التكييف، وأهم النصائح لتمديد عمره الافتراضي في بيئة الرياض الحارة.',
    summaryEn: 'Learn the primary symptoms of an AC compressor failure and key preventive tips to prolong its lifespan in the Saudi desert climate.',
    contentAr: `
      <h3>كمبروسر المكيف: قلب المنظومة النابض</h3>
      <p>يعد الضاغط أو <strong>الكمبروسر</strong> الجزء الأغلى والأهم في المكيف. يؤدي تلفه غالباً إلى الحاجة لاستبدال المكيف بالكامل أو دفع تكلفة صيانة باهظة. في بيئة الرياض القاسية، يتعرض الضاغط لضغط تشغيل هائل بسبب الحرارة المستمرة.</p>
      
      <h3>أعراض تلف الكمبروسر</h3>
      <ul>
        <li><strong>خروج هواء دافئ من المكيف:</strong> بالرغم من تشغيل وضع التبريد وعمل المروحة بشكل طبيعي.</li>
        <li><strong>أصوات غريبة واهتزاز شديد:</strong> عند بدء تشغيل المكيف تسمع صوت طقطقة أو صرير قوي من الوحدة الخارجية.</li>
        <li><strong>فصل الأمان الكهربائي (القاطع):</strong> يؤدي التماس الكهربائي داخل الضاغط إلى فصل قاطع الكهرباء فوراً عند التشغيل.</li>
      </ul>
    `,
    contentEn: `
      <h3>The AC Compressor: The Heart of the System</h3>
      <p>The <strong>AC compressor</strong> is responsible for pumping refrigerant through the system. If it fails, repairs are costly. Understanding warning signs can save you from complete system breakdowns.</p>
      
      <h3>Common Signs of a Failing Compressor</h3>
      <ul>
        <li><strong>Warm Air Blowing:</strong> The fan works, but the air blowing into the room has no cooling effect.</li>
        <li><strong>Loud Noises:</strong> Shaking or grinding metal sounds coming from the outdoor condensing unit.</li>
        <li><strong>Tripping the Circuit Breaker:</strong> A short circuit inside the compressor motor will trip your electrical panel immediately.</li>
      </ul>
    `,
    keywordsAr: ['كمبروسر المكيف الرياض', 'اعطال كمبروسر المكيف', 'تغيير كمبروسر مكيف', 'ضاغط المكيف'],
    keywordsEn: ['AC compressor failure', 'compressor repair Riyadh', 'air conditioner noises', 'AC compressor replacement']
  },
  {
    id: 7,
    slug: 'importance-duct-cleaning-riyadh',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-05-05',
    dateAr: '٥ مايو ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/services/residential.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'أهمية تنظيف وتعقيم دكت المكيفات المركزية في الرياض',
    titleEn: 'Why Central Duct Cleaning & Sanitization is Essential in Riyadh',
    summaryAr: 'دليل كامل عن تراكم الأتربة والجراثيم داخل مجاري الهواء (الدكت) للمكيفات المركزية بالرياض، وأهمية تنظيفها لضمان صحة عائلتك.',
    summaryEn: 'A guide on dust and bacterial build-up inside central air duct systems, and why regular cleaning protects your family in Riyadh.',
    contentAr: `
      <h3>دكت المكيفات المركزية: الرئة الخفية للمبنى</h3>
      <p>في المكيفات المركزية والتكييف المخفي، يتدفق الهواء عبر مجاري معدنية تسمى <strong>الدكت (Duct)</strong>. بمرور السنين وتأثير العواصف الترابية في الرياض، تتراكم كميات هائلة من الغبار والرماد داخل هذه المجاري، المسببة للحساسية وضيق التنفس.</p>
      
      <h3>فوائد تنظيف دكت التكييف</h3>
      <ul>
        <li><strong>تحسين جودة الهواء الداخلي:</strong> إزالة الميكروبات والغبار تمنع أمراض الجهاز التنفسي والروائح الكريهة.</li>
        <li><strong>زيادة تدفق الهواء وسرعته:</strong> التراكمات الداخلية تعيق مسار الهواء وتقلل من قوة الدفع.</li>
        <li><strong>تقليل فاتورة الطاقة:</strong> مجاري هواء نظيفة تعني مقاومة أقل، مما يسهل عمل مروحة دفع الهواء.</li>
      </ul>
    `,
    contentEn: `
      <h3>The Hidden Air Passages of Your Home</h3>
      <p>Over time, central air ducts accumulate Riyadh desert dust, mold spores, and pet dander. Regular **duct cleaning in Riyadh** ensures you are not breathing in recirculated allergens every single day.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Eliminate Allergens & Odors:</strong> Sanitization kills bacteria and prevents musty smells.</li>
        <li><strong>Restore Airflow Velocity:</strong> Dust piles create airflow resistance, reducing cooling reach.</li>
        <li><strong>Protect Blower Motors:</strong> Cleaner ducts mean less strain on the indoor air handling unit.</li>
      </ul>
    `,
    keywordsAr: ['تنظيف دكت المكيفات الرياض', 'مجاري الهواء التكييف', 'تعقيم دكت التكييف', 'شركات تنظيف مكيفات بالرياض'],
    keywordsEn: ['duct cleaning Riyadh', 'air duct sanitization', 'central AC duct cleaning', 'indoor air quality Saudi']
  },
  {
    id: 8,
    slug: 'vrf-systems-saudi-commercial-buildings',
    category: 'commercial',
    categoryAr: 'تكييف تجاري',
    categoryEn: 'Commercial HVAC',
    date: '2026-05-02',
    dateAr: '٢ مايو ٢٠٢٦',
    readTimeAr: '٧ دقائق قراءة',
    readTimeEn: '7 min read',
    image: '/images/services/maintenance.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'لماذا تزداد شعبية أنظمة VRF في المباني التجارية السعودية؟',
    titleEn: 'Why VRF Systems are Skyrocketing in Saudi Commercial Buildings',
    summaryAr: 'تحليل لتكنولوجيا تكييف VRF المتطورة ومزايا تطبيقها في الأبراج الإدارية والفنادق لخفض التكاليف التشغيلية للمستثمرين.',
    summaryEn: 'Analysis of advanced VRF AC technology and its application in Saudi hotels and towers to cut long-term operational costs.',
    contentAr: `
      <h3>تطور أنظمة التكييف التجاري بالمملكة</h3>
      <p>تبحث الشركات والمستثمرون في السعودية دائماً عن حلول تكييف ذات تكاليف تشغيلية منخفضة وصيانة مرنة. تكنولوجيا <strong>VRF (تدفق التبريد المتغير)</strong> أحدثت ثورة حقيقية في تكييف الفنادق، المستشفيات، والأبراج المكتبية بالرياض.</p>
      
      <h3>مزايا أنظمة VRF للمباني التجارية</h3>
      <ul>
        <li><strong>توفير هائل للمساحات الخارجية:</strong> يمكن توصيل عشرات الوحدات الداخلية بوحدة خارجية واحدة في السطح، مما يترك الارتدادات نظيفة.</li>
        <li><strong>استرداد الحرارة (Heat Recovery):</strong> تتيح هذه الأنظمة تبريد المكاتب المشمسة وتدفئة المكاتب المظللة في نفس الوقت باستخدام طاقة مهدرة.</li>
        <li><strong>تشغيل ذكي ومرن:</strong> ربط النظام بلوحة تحكم مركزية أو نظام BMS لمراقبة الاستهلاك بدقة متناهية.</li>
      </ul>
    `,
    contentEn: `
      <h3>The Commercial HVAC Revolution in Saudi Arabia</h3>
      <p>Saudi commercial property developers prioritize energy savings and low maintenance. **VRF systems** have become the gold standard for shopping malls, office buildings, and hotels in Riyadh.</p>
      
      <h3>Why VRF Beats Central Systems</h3>
      <ul>
        <li><strong>Frees Up Rooftop Space:</strong> One outdoor condenser can power up to 64 indoor evaporators.</li>
        <li><strong>Heat Recovery Tech:</strong> Simultaneously cool servers while warming office spaces, recycling thermal energy.</li>
        <li><strong>Smart Building Integration:</strong> Connects seamlessly with Building Management Systems (BMS).</li>
      </ul>
    `,
    keywordsAr: ['تكييف VRF السعودية', 'مقاول تكييف تجاري', 'انظمة VRF للمباني', 'شركات تكييف الرياض'],
    keywordsEn: ['VRF systems Saudi', 'commercial HVAC contractor', 'VRF installation Riyadh', 'BMS HVAC control']
  },
  {
    id: 9,
    slug: 'chiller-systems-food-factories-alkharj',
    category: 'commercial',
    categoryAr: 'تكييف تجاري',
    categoryEn: 'Commercial HVAC',
    date: '2026-04-28',
    dateAr: '٢٨ أبريل ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/projects/mall.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'أنظمة تكييف الشيلر والمبردات المائية للمصانع بالخرج',
    titleEn: 'Chiller & Chilled Water Piping Systems for Factories in Al-Kharj',
    summaryAr: 'نظرة متخصصة على كيفية عمل مبردات المياه (الشيلر) في تهوية وتبريد المنشآت الصناعية ومصانع الأغذية والألبان بمحافظة الخرج.',
    summaryEn: 'A specialized look into how chilled water systems (chillers) function in cooling large industrial dairy and food plants in Al-Kharj.',
    contentAr: `
      <h3>الصناعة والتبريد بالخرج</h3>
      <p>تعتبر مدينة الخرج العاصمة الزراعية والصناعية للمواد الغذائية والألبان في المنطقة الوسطى. تتطلب هذه المصانع درجات حرارة بالغة الدقة لتخزين ومعالجة المنتجات. أنظمة <strong>الشيلر (Chillers)</strong> هي الحل الأقوى والأكفأ لتلبية متطلبات التبريد الضخمة هذه.</p>
      
      <h3>كيف تعمل مبردات المياه الشيلر؟</h3>
      <p>على عكس المكيفات العادية التي تبرد الهواء مباشرة بالفريون، يقوم الشيلر بتبريد المياه إلى درجات منخفضة (مثل ٤ مئوية)، ثم تضخ المياه عبر أنابيب معزولة إلى وحدات معالجة الهواء (AHU) المنتشرة في صالات الإنتاج بالمصنع.</p>
    `,
    contentEn: `
      <h3>Industrial Cooling in Al-Kharj</h3>
      <p>Al-Kharj houses major dairy and food production factories that demand massive cooling capacities. <strong>Water Chiller Systems</strong> provide chilled water loops to handle heat loads generated by industrial food processors.</p>
      
      <h3>The Working Mechanism</h3>
      <p>Chillers cool water down to 4°C, which is then pumped through heavy-duty insulated steel pipes to large Air Handling Units (AHUs) inside factory lines, ensuring clean and highly regulated cold environments.</p>
    `,
    keywordsAr: ['تكييف شيلر الخرج', 'مبردات المياه للمصانع', 'تمديد انابيب الشيلر', 'تكييف صناعي السعودية'],
    keywordsEn: ['chiller systems Al-Kharj', 'chilled water piping', 'industrial HVAC Saudi', 'factory cooling chillers']
  },
  {
    id: 10,
    slug: 'crac-units-data-center-cooling',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-04-25',
    dateAr: '٢٥ أبريل ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/projects/villa.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'أهمية وحدات CRAC في تبريد مراكز البيانات وغرف السيرفرات بالرياض',
    titleEn: 'Uptime Matters: CRAC Precision Cooling for Riyadh Data Centers',
    summaryAr: 'لماذا لا تكفي المكيفات العادية لحماية غرف السيرفرات الحساسة؟ كل ما تحتاج معرفته عن وحدات التبريد الدقيق CRAC في الرياض.',
    summaryEn: 'Why standard AC units are not enough to protect sensitive server rooms. Learn everything about CRAC precision cooling units in Riyadh.',
    contentAr: `
      <h3>التبريد الدقيق مقابل التبريد المريح</h3>
      <p>السيرفرات في مراكز البيانات تعمل على مدار الساعة وتنتج كميات حرارة هائلة وجافة. إهمال تبريدها يؤدي لتوقف خوادم الشركات وتلف البيانات. هنا يأتي دور وحدات <strong>CRAC (تكييف غرف الحاسب الآلي)</strong> التي توفر تحكماً دقيقاً بالحرارة والرطوبة.</p>
      
      <h3>ميزات وحدات CRAC</h3>
      <ul>
        <li><strong>ثبات الرطوبة لمنع الكهرباء الساكنة:</strong> تحافظ الوحدات على رطوبة نسبية في حدود ٥٠٪ لمنع الشحنات الساكنة أو الصدأ.</li>
        <li><strong>فلترة فائقة الجودة:</strong> فلاتر متطورة تمنع جزيئات الغبار الدقيقة من الوصول للوحات الإلكترونية الحساسة.</li>
        <li><strong>اعتمادية العمل ٢٤/٧:</strong> تصميم يتحمل العمل المتواصل لسنوات بدون توقف مع إمكانية التشغيل التبادلي الاحتياطي.</li>
      </ul>
    `,
    contentEn: `
      <h3>Precision Cooling vs Comfort Cooling</h3>
      <p>Data servers generate concentrated dry heat 24/7. Standard air conditioners cannot handle this load. <strong>CRAC (Computer Room Air Conditioning) units</strong> provide tight temperature control with high sensible cooling ratios.</p>
      
      <h3>Key Advantages</h3>
      <ul>
        <li><strong>Humidity Regulation:</strong> Maintains relative humidity around 50% to prevent static discharges and board corrosion.</li>
        <li><strong>Heavy-Duty Air Filtration:</strong> Eliminates fine dust particles that could settle on motherboard circuits.</li>
        <li><strong>Guaranteed 24/7 Redundancy:</strong> Designed for constant operation with auto-failover capabilities.</li>
      </ul>
    `,
    keywordsAr: ['وحدات CRAC الرياض', 'تبريد غرف السيرفرات', 'تكييف مراكز البيانات', 'مكيفات تبريد دقيق'],
    keywordsEn: ['CRAC units Riyadh', 'server room cooling', 'data center HVAC', 'precision cooling Saudi']
  },
  {
    id: 11,
    slug: 'choose-right-ac-tonnage-room',
    category: 'saving',
    categoryAr: 'توفير الطاقة',
    categoryEn: 'Energy Saving',
    date: '2026-04-20',
    dateAr: '٢٠ أبريل ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/services/commercial.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'كيفية حساب حجم التكييف المناسب لمساحة الغرفة بالطن',
    titleEn: 'How to Calculate the Right AC Tonnage for Your Room Size',
    summaryAr: 'معادلة بسيطة لحساب حجم وسعة التكييف المطلوبة لغرفتك بناءً على المساحة بالمتر المربع لتفادي استهلاك الطاقة أو ضعف البرودة.',
    summaryEn: 'A simple mathematical formula to calculate the correct AC cooling capacity in tons for your room size to optimize comfort.',
    contentAr: `
      <h3>خطورة اختيار مكيف بحجم غير مناسب</h3>
      <p>شراء مكيف بسعة تبريدية أقل من المطلوب يجعله يعمل باستمرار دون الوصول للبرودة المطلوبة، بينما شراء مكيف ضخم جداً يستهلك طاقة فائضة ولا يزيل الرطوبة بشكل جيد. تعلم المعادلة الهندسية الصحيحة لـ <strong>حساب طن التكييف</strong>.</p>
      
      <h3>معادلة حساب السعة التبريدية</h3>
      <p>المعادلة البسيطة المعتمدة في دول الخليج هي:<br><strong>(الطول × العرض × الارتفاع) × ٣٠٠ / ١٢٠٠٠ = السعة التبريدية بالطن.</strong><br>(ملاحظة: نضرب بـ ٣٠٠ للمناطق شديدة الحرارة مثل الرياض والخرج، وبـ ٢٥٠ للمناطق المعتدلة).</p>
    `,
    contentEn: `
      <h3>The Pitfalls of Wrong AC Sizing</h3>
      <p>An undersized AC will run continuously, wasting energy without cooling the room. An oversized AC will cycle off too quickly, leaving the room humid. Calculate the exact tonnage needed for your Saudi home.</p>
      
      <h3>Tonnage Calculation Formula</h3>
      <p>The standard formula used in Saudi Arabia is:<br><strong>(Length × Width × Height) × 300 / 12,000 = Required Tonnage.</strong><br>(Note: 300 is the heat load factor for hot desert climates like Riyadh, while 12,000 converts BTUs to Tons).</p>
    `,
    keywordsAr: ['حساب طن التكييف', 'حجم المكيف المناسب', 'كيف تختار مكيف سبليت', 'سعة التبريد BTU'],
    keywordsEn: ['AC tonnage calculation', 'AC room size calculator', 'calculate BTU Saudi', 'split AC tonnage']
  },
  {
    id: 12,
    slug: 'sand-dust-impact-riyadh-hvac',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-04-18',
    dateAr: '١٨ أبريل ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/services/residential.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'تأثير الغبار والأتربة على كفاءة المكيفات بالرياض وطرق الحماية',
    titleEn: 'The Impact of Sand & Dust on Riyadh AC Systems & Protection Tips',
    summaryAr: 'شرح لكيفية تأثير العواصف الرملية المتكررة في الرياض على الوحدات الخارجية للمكيفات، وخطوات عملية لحماية الكويلات من الانسداد.',
    summaryEn: 'Explaining how recurring dust storms in Riyadh impact outdoor AC condensers, and practical steps to shield coils from clogging.',
    contentAr: `
      <h3>البيئة الصحراوية وتحديات التكييف</h3>
      <p>الرياض مدينة معروفة بتقلباتها الجوية وعواصفها الرملية. الغبار الناعم لا يستقر على النوافذ فحسب، بل يتغلغل داخل زعانف الألمنيوم للوحدة الخارجية للمكيف، مما يشكل طبقة عازلة تمنع التخلص من الحرارة وتتسبب في ارتفاع حرارة الكمبروسر وتوقفه.</p>
      
      <h3>كيف تحمي مكيفك من عواصف الغبار؟</h3>
      <ul>
        <li><strong>الغسيل بالماء الخفيف:</strong> بعد انتهاء العاصفة الرملية، قم برش كويل الوحدة الخارجية بخرطوم مياه لإزالة الأتربة.</li>
        <li><strong>تجنب تغطية الوحدة الخارجية بالبلاستيك أثناء التشغيل:</strong> التغطية تسبب احتباساً حرارياً فورياً وتلفاً للضاغط.</li>
        <li><strong>الاعتماد على واقيات معدنية موجهة:</strong> توجه الهواء الحار للأعلى وتمنع دخول ذرات الرمال الكبيرة للداخل.</li>
      </ul>
    `,
    contentEn: `
      <h3>Desert Climate & AC Stress</h3>
      <p>Riyadh dust storms clog the outdoor condenser coils, blocking heat dissipation. This causes the compressor to overheat, cycle off (thermal trip), and eventually fail prematurely.</p>
      
      <h3>How to Shield Your Condenser</h3>
      <ul>
        <li><strong>Post-Storm Hose Down:</strong> Wash the outdoor coil from behind using low-pressure garden hose water.</li>
        <li><strong>Never Cover Running Units:</strong> Using covers while the AC is on will burn the compressor immediately.</li>
        <li><strong>Schedule Professional Coil Flushing:</strong> Chemical coil washing once a year removes baked-in sand crusts.</li>
      </ul>
    `,
    keywordsAr: ['غبار الرياض المكيف', 'تنظيف المكيف الخارجي', 'انسداد كويل المكيف', 'حماية المكيف من الغبار'],
    keywordsEn: ['dust impact AC Riyadh', 'cleaning outdoor AC condenser', 'desert HVAC maintenance', 'clogged AC coils']
  },
  {
    id: 13,
    slug: 'annual-maintenance-contracts-companies-riyadh',
    category: 'commercial',
    categoryAr: 'تكييف تجاري',
    categoryEn: 'Commercial HVAC',
    date: '2026-04-15',
    dateAr: '١٥ أبريل ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/services/maintenance.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'عقود صيانة التكييف السنوية للشركات والمؤسسات بالرياض',
    titleEn: 'Annual Commercial AC Maintenance Contracts in Riyadh',
    summaryAr: 'لماذا تحتاج مؤسستك أو شركتك لعقد صيانة سنوي للتكييف؟ شرح لعقود الصيانة الوقائية الطارئة وأثرها على استقرار بيئة العمل.',
    summaryEn: 'Why your company needs an annual HVAC maintenance contract. Explaining preventive and emergency visits for office stability.',
    contentAr: `
      <h3>استمرارية العمل وكفاءة التكييف</h3>
      <p>في المباني الإدارية والشركات بالرياض، أي تعطل في نظام التكييف المركزي خلال الصيف يعني توقف العمل بالكامل ومغادرة الموظفين. <strong>عقود صيانة التكييف السنوية</strong> توفر شبكة أمان تضمن الفحص الدوري والاستجابة الطارئة الفورية لحل الأعطال.</p>
      
      <h3>ماذا يشمل عقد الصيانة التجاري؟</h3>
      <ul>
        <li><strong>زيارات وقائية مجدولة:</strong> تنظيف الفلاتر، فحص السيور، تزييت المحركات، وقياس ضغوط التشغيل ٤ مرات سنوياً.</li>
        <li><strong>أولوية الاستجابة للطوارئ:</strong> حضور الفني للموقع خلال ساعتين إلى ٤ ساعات من الإبلاغ عن العطل.</li>
        <li><strong>تقارير فنية وتوصيات:</strong> لتقدير العمر الافتراضي وتجنب المصاريف المفاجئة.</li>
      </ul>
    `,
    contentEn: `
      <h3>HVAC Uptime for Business Productivity</h3>
      <p>For offices in Riyadh, a cooling breakdown can halt operations instantly. An **annual maintenance contract (AMC)** guarantees priority emergency response and scheduled preventive checkups.</p>
      
      <h3>What is Included in an AMC?</h3>
      <ul>
        <li><strong>Quarterly Preventive Inspections:</strong> Belt replacements, blower motor lubrication, and electrical tightens.</li>
        <li><strong>Priority Call-outs:</strong> Emergency technician arrival at your Riyadh facility within 2-4 hours.</li>
        <li><strong>Detailed Health Reports:</strong> Documenting system life expectancy and budgeting replacements.</li>
      </ul>
    `,
    keywordsAr: ['عقود صيانة تكييف الرياض', 'صيانة تكييف شركات', 'عقد صيانة سنوي مكيفات', 'مؤسسة تكييف بالرياض'],
    keywordsEn: ['AC maintenance contract Riyadh', 'commercial HVAC AMC', 'office AC contract', 'preventive maintenance agreement']
  },
  {
    id: 14,
    slug: 'how-smart-thermostats-save-money-saudi',
    category: 'saving',
    categoryAr: 'توفير الطاقة',
    categoryEn: 'Energy Saving',
    date: '2026-04-10',
    dateAr: '١٠ أبريل ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/projects/mall.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'كيف تساعد الثرموستات الذكية في خفض فاتورة الكهرباء بالسعودية؟',
    titleEn: 'How Smart Thermostats Reduce Electricity Bills in Saudi Arabia',
    summaryAr: 'شرح لفوائد الترقية إلى ثرموستات ذكي قابل للبرمجة والربط بالهاتف المحمول، ودوره في إطفاء التكييف تلقائياً عند مغادرة المنزل.',
    summaryEn: 'Explaining the benefits of upgrading to a programmable smart thermostat and its role in auto-turning off AC when you leave home.',
    contentAr: `
      <h3>التحكم الذكي بالمناخ وتوفير الكهرباء</h3>
      <p>إهمال إطفاء التكييف عند الخروج للعمل أو نسيانه مفتوحاً في الصالات الرياضية من أكبر مسببات ارتفاع فواتير الطاقة بالسعودية. الترقية إلى <strong>ثرموستات ذكي</strong> (مثل Nest أو Ecobee) تمنحك تحكماً مطلقاً وبرمجة متطورة عبر الجوال.</p>
      
      <h3>ميزات التحكم الذكي</h3>
      <ul>
        <li><strong>الاستشعار والجدولة الذكية:</strong> يتعلم الثرموستات عاداتك اليومية ويخفض التبريد تلقائياً عند خروجك للعمل.</li>
        <li><strong>التحكم عن بعد عبر الـ WiFi:</strong> تشغيل تكييف الفيلا قبل وصولك بـ ١٥ دقيقة لتدخل منزلاً بارداً دون تركه يعمل طوال اليوم.</li>
        <li><strong>تقارير مفصلة للاستهلاك:</strong> تتبع ساعات تشغيل التكييف ومقارنتها بالشهور السابقة.</li>
      </ul>
    `,
    contentEn: `
      <h3>Smart Climate Control for Saudi Homes</h3>
      <p>Leaving the AC running in empty rooms is a major source of energy waste. Installing a **smart thermostat** in Riyadh allows you to program temperatures according to your daily schedule and control it via smartphone.</p>
      
      <h3>Key Smart Features</h3>
      <ul>
        <li><strong>Geofencing:</strong> Automatically raises the thermostat target when you leave home, and cools it down as you return.</li>
        <li><strong>Remote WiFi Access:</strong> Turn on your split or concealed AC 15 minutes before leaving the office to arrive at a cool villa.</li>
        <li><strong>Energy Tracking:</strong> View monthly insights on how many hours your cooling systems were active.</li>
      </ul>
    `,
    keywordsAr: ['ثرموستات ذكي الرياض', 'توفير كهرباء المكيف', 'تحكم المكيف بالواي فاي', 'ثرموستات نست السعودية'],
    keywordsEn: ['smart thermostat Riyadh', 'Nest thermostat Saudi', 'save AC bill WiFi', 'programmable thermostat AC']
  },
  {
    id: 15,
    slug: 'preventing-water-leakage-split-ac',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-04-05',
    dateAr: '٥ أبريل ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/projects/villa.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'أسباب تنقيط الماء من المكيف السبلت وطرق حلها السريعة',
    titleEn: 'Causes of Split AC Water Leakage and How to Fix It Fast',
    summaryAr: 'لماذا يسرب مكيف السبليت المياه على الجدار والجبس؟ اكتشف الأسباب الشائعة كإنسداد مجرى الصرف أو تجمد الكويل وكيفية معالجتها.',
    summaryEn: 'Why is your wall split AC leaking water on your wall? Learn the primary causes, like clogged drain lines or frozen coils, and fixes.',
    contentAr: `
      <h3>مشكلة تسريب مياه المكيف داخل الغرفة</h3>
      <p>تساقط قطرات الماء من المكيف السبلت مشكلة شائعة ومزعجة جداً، حيث تسبب تلفاً لدهانات الجدران وأثاث الغرفة. يعود السبب الأساسي غالباً لعدم تصريف مياه الرطوبة المتكثفة من الهواء بشكل سليم.</p>
      
      <h3>الأسباب الشائعة لتنقيط الماء</h3>
      <ol>
        <li><strong>انسداد أنبوب التصريف:</strong> تراكم الأتربة والأوساخ المختلطة بالمياه داخل الأنبوب البلاستيكي يشكل مادة طينية تسد المجرى.</li>
        <li><strong>اتساخ الفلاتر وتجمد الكويل:</strong> الفلاتر المتسخة تمنع تدفق الهواء، مما يؤدي لتجمد الرطوبة على ملفات التبريد، وعند ذوبانها تسيل خارج الحوض.</li>
        <li><strong>خطأ في ميلان التركيب:</strong> إذا لم يكن المكيف مركباً بميلان خفيف باتجاه أنبوب الصرف، فسوف تتراكم المياه وتفيض للخارج.</li>
      </ol>
    `,
    contentEn: `
      <h3>The Annoyance of Indoor AC Water Leaks</h3>
      <p>Water dripping from your indoor split AC can damage paint, wallpapers, and wooden floors. It is usually caused by condensation failing to drain properly through the dedicated line.</p>
      
      <h3>Top Causes & Solutions</h3>
      <ol>
        <li><strong>Clogged Condensate Drain:</strong> Dust mixing with water forms slime that blocks the flexible PVC pipe. Flush it with water or vacuum it out.</li>
        <li><strong>Dirty Air Filters causing Coil Ice:</strong> Restricted airflow freezes the evaporator coils. Once turned off, the ice melts and overflows the pan.</li>
        <li><strong>Improper Leveling during Install:</strong> The indoor unit must tilt slightly toward the drain hole to allow gravity drainage.</li>
      </ol>
    `,
    keywordsAr: ['تسريب ماء المكيف', 'تنقيط المكيف السبلت', 'انسداد ليات المكيف', 'تصليح مكيفات سبليت بالرياض'],
    keywordsEn: ['split AC water leak', 'AC dripping water inside', 'unclog AC drain line', 'Riyadh AC leaking fix']
  },
  {
    id: 16,
    slug: 'why-choose-r410a-gas-saudi-climate',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-04-01',
    dateAr: '١ أبريل ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/services/commercial.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'لماذا فريون R410A هو الأفضل للمكيفات في المناخ الصحراوي؟',
    titleEn: 'Why R410A Refrigerant is Superior for Saudi Desert Climate',
    summaryAr: 'مقارنة بين غازات التبريد القديمة R22 والحديثة R410A البيئية، وتأثيرها على سرعة التبريد وعمر ضاغط المكيف في السعودية.',
    summaryEn: 'Comparing old R22 and modern eco-friendly R410A refrigerants, and their impact on cooling speeds and compressor lifespan in Saudi Arabia.',
    contentAr: `
      <h3>تطور غازات التبريد (الفريون) في المكيفات</h3>
      <p>تنفيذاً للأنظمة البيئية الجديدة في المملكة العربية السعودية، تم حظر استخدام غاز R22 القديم في الأجهزة المستوردة واستبداله بغاز <strong>R410A صديق البيئة</strong>. يقدم هذا الغاز أداءً تبريدياً استثنائياً تحت درجات حرارة الصيف المرتفعة بالمنطقة الوسطى.</p>
      
      <h3>مزايا غاز R410A للمستهلك</h3>
      <ul>
        <li><strong>سرعة تبريد أعلى:</strong> يمتص غاز R410A الحرارة ويطلقها بشكل أسرع من الغاز القديم، مما يبرد الغرفة بسرعة فائقة.</li>
        <li><strong>تقليل الجهد على الضاغط:</strong> يعمل الكمبروسر بضغط أقل وحرارة تشغيل منخفضة، مما يطيل عمره الافتراضي ويقلل استهلاك الطاقة.</li>
        <li><strong>حماية طبقة الأوزون:</strong> خالٍ تماماً من الكلور الضار بالغلاف الجوي.</li>
      </ul>
    `,
    contentEn: `
      <h3>Eco-friendly Refrigerant Standards in KSA</h3>
      <p>Under new SASO regulations, older ozone-depleting R22 gases have been phased out. Modern split and central ACs now run on **R410A refrigerant**, which is highly efficient under extreme outdoor temperatures.</p>
      
      <h3>Benefits of R410A</h3>
      <ul>
        <li><strong>Higher Heat Absorption:</strong> R410A absorbs and releases heat more efficiently, resulting in faster cooling.</li>
        <li><strong>Less Compressor Stress:</strong> Systems designed for R410A use synthetic lubricants that reduce friction and extend motor life.</li>
        <li><strong>Ozone Safe:</strong> Contains no chlorine, making it compliant with environmental protection initiatives.</li>
      </ul>
    `,
    keywordsAr: ['شحن فريون الرياض', 'غاز فريون R410A', 'تعبئة فريون مكيف', 'صيانة مكيفات الخرج'],
    keywordsEn: ['R410A gas refill Riyadh', 'freon recharge Saudi', 'AC refrigerant leak', 'eco friendly freon R410a']
  },
  {
    id: 17,
    slug: 'mechanical-ventilation-fresh-air-villas',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-03-28',
    dateAr: '٢٨ مارس ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/services/residential.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'أهمية التهوية الميكانيكية وتجديد الهواء بالفلل السكنية',
    titleEn: 'Fresh Air Intake & Mechanical Ventilation in Saudi Villas',
    summaryAr: 'لماذا يؤدي إغلاق الفيلا المستمر لتراكم الكربون والملوثات؟ تعرف على حلول التهوية الميكانيكية (FAHU) لتجديد الهواء وصحة عائلتك.',
    summaryEn: 'Why keeping your villa fully sealed leads to carbon build-up. Learn about mechanical ventilation (FAHU) solutions for fresh air.',
    contentAr: `
      <h3>مشكلة الهواء الراكد داخل المنازل الحديثة</h3>
      <p>الفلل السكنية الفاخرة بالرياض تبنى بطريقة معزولة ومحكمة الإغلاق لمنع دخول الحرارة والغبار. لكن هذا الإغلاق التام يمنع تجدد الهواء ويراكم غاز ثاني أكسيد الكربون والرطوبة والروائح. <strong>التهوية الميكانيكية</strong> هي الحل الهندسي الصحي لتجديد الهواء.</p>
      
      <h3>حلول تجديد الهواء النقي (Fresh Air)</h3>
      <ul>
        <li><strong>مروحة سحب وتوريد الهواء النقي:</strong> مروحة تدخل هواء خارجي يمر عبر فلتر كربون لتنقيته وتبريده مسبقاً قبل دفعه للمنزل.</li>
        <li><strong>وحدة FAHU المركزية:</strong> وحدة متطورة للمباني الكبيرة تقوم بفلترة وتبريد وإزالة الرطوبة من الهواء الخارجي تماماً.</li>
        <li><strong>مراوح الشفط المستمر:</strong> شفط الهواء الملوث من المطابخ والحمامات يولد ضغطاً سالباً خفيفاً يساعد على تدوير الهواء.</li>
      </ul>
    `,
    contentEn: `
      <h3>The Problem of Stagnant Indoor Air</h3>
      <p>Modern luxury villas in Riyadh are heavily insulated and sealed. While this keeps the heat out, it traps carbon dioxide, humidity, and stale odors. **Mechanical fresh air ventilation** resolves this health issue.</p>
      
      <h3>Fresh Air Solutions</h3>
      <ul>
        <li><strong>Fresh Air Filtered Intake:</strong> A small blower that introduces outdoor air through a multi-stage carbon filter to purify it.</li>
        <li><strong>Fresh Air Handling Unit (FAHU):</strong> Pre-cools and dehumidifies outdoor air before distributing it to villa bedrooms and salons.</li>
        <li><strong>Energy Recovery Ventilator (ERV):</strong> Exchanges temperature between exhaust air and fresh air, preserving energy.</li>
      </ul>
    `,
    keywordsAr: ['تهوية الفلل الرياض', 'تجديد هواء المنزل', 'وحدات FAHU السعودية', 'مراوح شفط مركزي'],
    keywordsEn: ['mechanical ventilation villa', 'fresh air intake Saudi', 'FAHU installation Riyadh', 'ERV energy saving']
  },
  {
    id: 18,
    slug: 'understanding-inverter-ac-technology',
    category: 'saving',
    categoryAr: 'توفير الطاقة',
    categoryEn: 'Energy Saving',
    date: '2026-03-25',
    dateAr: '٢٥ مارس ٢٠٢٦',
    readTimeAr: '٥ دقائق قراءة',
    readTimeEn: '5 min read',
    image: '/images/services/maintenance.png',
    authorAr: 'م. خالد الدوسري',
    authorEn: 'Eng. Khalid Al-Dossary',
    titleAr: 'ما هي تقنية مكيفات الإنفرتر وهل توفر الكهرباء حقاً؟',
    titleEn: 'Understanding Inverter AC Technology: Does It Really Save Money?',
    summaryAr: 'شرح مبسط لكيفية عمل مكيفات الإنفرتر ومقارنتها بالمكيفات التقليدية، وحساب حجم التوفير الحقيقي في فاتورة الكهرباء بالسعودية.',
    summaryEn: 'Simplifying how inverter AC compressors work, comparing them to standard compressors, and calculating actual Saudi electricity savings.',
    contentAr: `
      <h3>الفرق بين ضاغط الإنفرتر والضاغط العادي</h3>
      <p>الضاغط العادي يعمل بطريقة "الكل أو لا شيء" (On/Off)، حيث يشتغل بكامل طاقته حتى تصل الغرفة للحرارة المطلوبة ثم ينطفئ تماماً، وعندما تسخن الغرفة يشتغل مجدداً مسبباً سحب كهرباء عالٍ جداً. أما ضاغط <strong>الإنفرتر (Inverter)</strong> فيعمل بشكل متواصل وبسرعات متغيرة ذكية.</p>
      
      <h3>هل تستحق مكيفات الإنفرتر فارق السعر؟</h3>
      <ul>
        <li><strong>توفير كهرباء يصل لـ ٤٠٪:</strong> التخلص من عملية البدء المتكرر للضاغط (Start-up Current) يوفر نسبة هائلة من الطاقة.</li>
        <li><strong>ثبات برودة الغرفة:</strong> لا تشعر بتغيرات مفاجئة بالحرارة، حيث يحافظ المكيف على درجة الحرارة بدقة تامة.</li>
        <li><strong>هدوء استثنائي:</strong> يعمل الضاغط بسرعات منخفضة وهادئة معظم الوقت، مما يجعله مثالياً لغرف النوم.</li>
      </ul>
    `,
    contentEn: `
      <h3>Inverter Compressor vs Fixed Speed Compressor</h3>
      <p>Standard AC compressors run at full speed and shut off once the target temperature is met, only to turn on again with high start-up currents. **Inverter AC technology** adjusts compressor motor speeds continuously, matching the heat load.</p>
      
      <h3>Why Upgrade to Inverter?</h3>
      <ul>
        <li><strong>Up to 40% Energy Savings:</strong> Variable speed operation eliminates energy-intensive start-up spikes.</li>
        <li><strong>Consistent Room Temperature:</strong> Keeps cooling perfectly stable without the classic hot/cold cycles of old AC units.</li>
        <li><strong>Longer Equipment Uptime:</strong> Running at lower speeds reduces physical wear and tear on compressor bearings.</li>
      </ul>
    `,
    keywordsAr: ['مكيفات انفرتر الرياض', 'افضل مكيف سبليت موفر للطاقة', 'توفير كهرباء المكيف', 'اسعار مكيفات انفرتر قري'],
    keywordsEn: ['inverter AC savings Saudi', 'variable speed compressor', 'eco friendly split AC', 'Gree inverter AC price']
  },
  {
    id: 19,
    slug: 'gree-vs-toshiba-ac-comparison-saudi',
    category: 'tech',
    categoryAr: 'تقنيات التكييف',
    categoryEn: 'HVAC Tech',
    date: '2026-03-20',
    dateAr: '٢٠ مارس ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/projects/mall.png',
    authorAr: 'م. أحمد الحربي',
    authorEn: 'Eng. Ahmed Al-Harbi',
    titleAr: 'مقارنة بين مكيفات قري وتوشيبا للمنازل بالرياض: أيهما تختار؟',
    titleEn: 'Gree vs Toshiba AC Comparison for Riyadh Homes: Which to Choose?',
    summaryAr: 'مقارنة هندسية وعملية بين مكيفات قري (Gree) الصينية وتوشيبا (Toshiba) اليابانية من حيث قوة التبريد، السعر، وتوافر قطع الغيار.',
    summaryEn: 'An engineering comparison between Gree and Japanese Toshiba air conditioners regarding cooling power, pricing, and spare parts.',
    contentAr: `
      <h3>الحيرة بين الماركات التجارية للمكيفات</h3>
      <p>مكيفات <strong>قري (Gree)</strong> ومكيفات <strong>توشيبا (Toshiba)</strong> من أكثر الماركات انتشاراً وثقة في السوق السعودي بالرياض والخرج. كلاهما يقدم جودة ممتازة، ولكن توجد فروقات هامة يجب معرفتها قبل اتخاذ قرار الشراء.</p>
      
      <h3>مقارنة شاملة</h3>
      <ul>
        <li><strong>مكيفات قري (Gree):</strong> خيار اقتصادي متميز بأسعار منافسة وتوفر هائل لقطع الغيار والصيانة في كل مكان. قوتها التبريدية ممتازة وتتحمل درجات حرارة تصل لـ ٥٢ مئوية.</li>
        <li><strong>مكيفات توشيبا (Toshiba):</strong> جودة يابانية متفوقة وعمر افتراضي أطول. مكيفاتها تتميز بالهدوء الشديد ونقاء فلاتر البلازما، ولكنها تأتي بسعر أعلى وتكلفة صيانة مرتفعة قليلاً.</li>
      </ul>
    `,
    contentEn: `
      <h3>Deciding Between Top Brands in KSA</h3>
      <p>Both **Gree** and **Toshiba** are trusted names in Saudi Arabia. Choosing between them depends on your budget, cooling requirements, and preference for Japanese engineering vs Chinese high-value mass production.</p>
      
      <h3>Brand Breakdown</h3>
      <ul>
        <li><strong>Gree Air Conditioners:</strong> The market leader in Saudi Arabia. Affordable pricing, incredibly robust cooling under 52°C ambient heat, and widely available spare parts.</li>
        <li><strong>Toshiba Air Conditioners:</strong> High-end Japanese design. Superior noise insulation, advanced plasma filtration, and longer lifespan, but at a premium price point.</li>
      </ul>
    `,
    keywordsAr: ['مقارنة مكيفات الرياض', 'افضل مكيف سبليت السعودية', 'مكيف قري بولار', 'مكيفات توشيبا الرياض'],
    keywordsEn: ['Gree vs Toshiba AC', 'best split AC brand Saudi', 'Gree Pular vs Toshiba RAS', 'Riyadh AC buyer guide']
  },
  {
    id: 20,
    slug: 'annual-ac-maintenance-contracts-alkharj',
    category: 'maintenance',
    categoryAr: 'الصيانة الوقائية',
    categoryEn: 'Preventive Maintenance',
    date: '2026-03-15',
    dateAr: '١٥ مارس ٢٠٢٦',
    readTimeAr: '٦ دقائق قراءة',
    readTimeEn: '6 min read',
    image: '/images/projects/villa.png',
    authorAr: 'م. فهد العتيبي',
    authorEn: 'Eng. Fahad Al-Otaibi',
    titleAr: 'أهمية عقود الصيانة السنوية للتكييف في الخرج للفلل والمزارع',
    titleEn: 'Why Annual AC Maintenance Contracts are Vital in Al-Kharj',
    summaryAr: 'شرح لأهمية العقود السنوية في حماية التكييف بالمنازل والمزارع والاستراحات بالخرج من تأثير الرطوبة والغبار والحرارة العالية.',
    summaryEn: 'Explaining the importance of annual contracts in shielding ACs in Al-Kharj villas, farms, and resorts from humidity and desert dust.',
    contentAr: `
      <h3>طبيعة المناخ في محافظة الخرج وتحدياته</h3>
      <p>تتميز الخرج بمناخ صحراوي جاف وحار، بالإضافة لوجود مزارع كبيرة تزيد نسبة الرطوبة المحلية أحياناً. الاستخدام المكثف للمكيفات في المنازل والفلل والاستراحات الزراعية بالخرج يتطلب صيانة وقائية دقيقة لمنع تلف كمبروسرات التكييف.</p>
      
      <h3>ما تقدمه عقود الصيانة بالخرج</h3>
      <p>مؤسسة أعمال التكييف توفر <strong>عقود صيانة تكييف بالخرج</strong> مخصصة للمزارع والفلل السكنية، تشمل غسيل الوحدات الخارجية بضغط المياه لإزالة الأتربة، تنظيف الفلاتر الداخلية، تعبئة فريون R410A الأصلي، وضمان فاعلية التكييف طوال أشهر الصيف الساخنة.</p>
    `,
    contentEn: `
      <h3>Environmental HVAC Demands in Al-Kharj</h3>
      <p>Al-Kharj experiences extreme summer heat coupled with local humidity from agricultural projects. This environment requires disciplined AC servicing to keep ventilation and cooling systems running efficiently.</p>
      
      <h3>What Our Al-Kharj Contracts Offer</h3>
      <p>Our tailored annual maintenance programs include high-pressure water washing of outdoor condensers, indoor chemical cleaning, electrical diagnostics, refrigerant top-ups, and guaranteed next-day technician availability.</p>
    `,
    keywordsAr: ['عقود صيانة التكييف الخرج', 'فني مكيفات الخرج', 'تصليح مكيفات الخرج', 'صيانة تكييف مزارع الخرج'],
    keywordsEn: ['AC maintenance contract Al-Kharj', 'HVAC repair Al-Kharj', 'farm villa AC service', 'Al-Kharj AC technician']
  }
];

// Helper functions

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function searchBlogPosts(query: string): BlogPost[] {
  const q = query.toLowerCase();
  return blogPosts.filter((p) => 
    p.titleAr.toLowerCase().includes(q) ||
    p.titleEn.toLowerCase().includes(q) ||
    p.summaryAr.toLowerCase().includes(q) ||
    p.summaryEn.toLowerCase().includes(q)
  );
}
