import { Metadata } from 'next';

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export const siteUrl = 'https://www.altakeefsa.com';

export const seoData: Record<string, { ar: SEOData; en: SEOData }> = {
  home: {
    ar: {
      title: "أعمال التكييف | مقاول تكييف مركزي وأنظمة HVAC بالرياض",
      description: "مؤسسة أعمال التكييف مقاول معتمد لتوريد وتركيب أنظمة التكييف المركزي، VRF، الشيلر، وتفصيل الدكت للمشاريع التجارية والصناعية والمجمعات بالرياض والخرج.",
      keywords: ["مقاول تكييف مركزي الرياض", "توريد وتركيب تكييف VRF", "شركة تكييف تجاري الرياض", "تمديد دكت التكييف المركزي", "مشاريع تكييف صناعي السعودية", "أنظمة HVAC للمباني"]
    },
    en: {
      title: "Al-Takeef HVAC | Commercial Central AC Contractor Riyadh",
      description: "Al-Takeef Contracting is a certified HVAC contractor specializing in supply, design, and installation of Central AC, VRF, Chiller, and Duct fabrication for commercial and industrial projects in Riyadh & Al-Kharj.",
      keywords: ["Commercial HVAC Riyadh", "VRF installation Saudi Arabia", "Central AC contractor Riyadh", "Industrial Chiller installation", "AC duct fabrication", "HVAC engineering contracts"]
    }
  },
  about: {
    ar: {
      title: "من نحن | مؤسسة أعمال التكييف للمشاريع",
      description: "تعرف على أعمال التكييف، الشريك الهندسي المعتمد لتصميم وتوريد وتركيب أنظمة HVAC والتهوية الميكانيكية للمشاريع الإنشائية والمجمعات في المملكة.",
      keywords: ["من نحن أعمال التكييف", "شركة تكييف تجاري الرياض", "مقاول HVAC معتمد", "تاريخ مؤسسة أعمال التكييف"]
    },
    en: {
      title: "About Us | Al-Takeef Commercial HVAC Partner",
      description: "Learn more about Al-Takeef HVAC, the certified engineering partner for design, supply, and installation of large-scale HVAC and ventilation systems in Saudi Arabia.",
      keywords: ["About Al-Takeef HVAC", "Riyadh HVAC contractor", "mechanical engineering partner", "corporate cooling solutions"]
    }
  },
  contact: {
    ar: {
      title: "اتصل بنا | قسم مشاريع التكييف المركزي بالرياض",
      description: "تواصل مع قسم تقدير المشاريع والمناقصات بمؤسسة أعمال التكييف بالرياض والخرج. اتصل بنا على الرقم 0552239595 لتقديم المخططات وطلب الكوتيشن للمشاريع التجارية.",
      keywords: ["تواصل مع أعمال التكييف", "رقم شركة تكييف مركزي الرياض", "مبيعات التكييف المركزي", "تقديم مخططات تكييف"]
    },
    en: {
      title: "Contact Us | Commercial HVAC Estimating Riyadh",
      description: "Get in touch with Al-Takeef project estimation team. Call +966552239595 to submit engineering drawings and request quotations for commercial and industrial HVAC installations.",
      keywords: ["Contact HVAC estimator", "Riyadh AC project number", "HVAC quotation Riyadh", "submit AC drawings"]
    }
  },
  projects: {
    ar: {
      title: "مشاريعنا | سابقة تنفيذ أعمال تكييف المجمعات والأبراج",
      description: "تصفح سابقة تنفيذ مشاريع مؤسسة أعمال التكييف بالرياض والخرج. مشاريع تكييف مركزي، VRF، ومحطات شيلر للمباني التجارية والمستشفيات والمصانع.",
      keywords: ["مشاريع التكييف المركزي", "سابقة أعمال HVAC", "مشاريع تكييف تجاري", "تكييف أبراج ومستشفيات"]
    },
    en: {
      title: "Our Projects | Commercial & Industrial HVAC Portfolio",
      description: "Browse the HVAC projects successfully delivered by Al-Takeef. Featuring central AC, VRF systems, and chiller plants for commercial complexes, malls, and factories.",
      keywords: ["HVAC projects Riyadh", "commercial cooling references", "chiller installation portfolio", "VRF projects Saudi Arabia"]
    }
  },
  blog: {
    ar: {
      title: "المدونة الهندسية | معايير أنظمة التكييف التجاري",
      description: "المدونة الهندسية لمؤسسة أعمال التكييف. مقالات متخصصة في حساب الأحمال الحرارية، تصميم الدكت، مقارنة أنظمة VRF والشيلر للمهندسين والمطورين.",
      keywords: ["مدونة التكييف الهندسي", "تصميم مجاري الهواء", "مقارنة VRF والشيلر", "حساب الأحمال الحرارية للمشاريع"]
    },
    en: {
      title: "Engineering Blog | Commercial HVAC Standards",
      description: "Al-Takeef HVAC Engineering Blog. Professional articles on heat load calculations, duct design, VRF vs Chiller comparisons, and Saudi building code compliance.",
      keywords: ["HVAC engineering blog", "Riyadh duct design standards", "VRF vs chiller HVAC", "cooling load calculations"]
    }
  },
  vrf: {
    ar: {
      title: "تركيب تكييف VRF بالرياض والخرج | أنظمة التدفق المتغير VRV",
      description: "تصميم وتوريد وتركيب أنظمة التكييف المتغير VRF / VRV عالية الكفاءة للمجمعات التجارية والأبراج الإدارية بالرياض والخرج بتنفيذ هندسي متكامل.",
      keywords: ["تركيب تكييف VRF الرياض", "تكييف VRV الخرج", "أنظمة تدفق التكييف المتغير", "مقاول تكييف VRF معتمد"]
    },
    en: {
      title: "VRF/VRV AC Installation Riyadh & Al-Kharj | Al-Takeef",
      description: "Engineering-grade VRF/VRV system design and installation in Riyadh & Al-Kharj. High-efficiency zoning systems for commercial offices and towers.",
      keywords: ["VRF installation Riyadh", "VRF system Al-Kharj", "commercial VRV installation", "multi-split VRF contracting"]
    }
  },
  central: {
    ar: {
      title: "مقاول تكييف مركزي بالرياض والخرج | تصميم وتوريد دكت",
      description: "شركة تكييف مركزي بالرياض والخرج متخصصة في تصميم الأحمال وتوريد وتركيب دكت التكييف المركزي للمنشآت والمشاريع التجارية والصناعية.",
      keywords: ["شركة تكييف مركزي بالرياض", "تكييف مركزي الخرج", "تركيب دكت تكييف مركزي", "مقاول HVAC تجاري"]
    },
    en: {
      title: "Central AC Contractor Riyadh & Al-Kharj | Al-Takeef",
      description: "Leading central AC contractor in Riyadh and Al-Kharj. Specialized in heat load calculation, supply, and installation of commercial packaged and ducted systems.",
      keywords: ["Central AC Riyadh", "Central AC Al-Kharj", "commercial AC ductwork", "HVAC contractor Saudi"]
    }
  },
  'concealed-duct': {
    ar: {
      title: "تكييف مخفي كونسيلد بالرياض والخرج | تصميم الدكت",
      description: "توريد وتركيب أنظمة التكييف المخفي الكونسيلد للمكاتب والمباني الإدارية بالرياض والخرج. تصميم مجاري الهواء وعزلها بمقاييس هندسية عالية.",
      keywords: ["تكييف مخفي كونسيلد الرياض", "مكيفات مخفي دكت", "تركيب تكييف دكت سبليت", "تصميم مجاري الهواء"]
    },
    en: {
      title: "Concealed Duct Split AC Riyadh & Al-Kharj | Al-Takeef",
      description: "Sleek and highly efficient concealed duct split AC systems in Riyadh & Al-Kharj. Professional engineering and installation for commercial office spaces.",
      keywords: ["Concealed duct split AC", "Concealed AC Riyadh", "Duct split installation Al-Kharj", "commercial hidden AC"]
    }
  },
  chiller: {
    ar: {
      title: "تركيب تكييف شيلر بالرياض والخرج | محطات مبردات مياه",
      description: "توريد وتركيب وصيانة أنظمة التبريد بالشيلر ومبردات المياه للمشاريع الصناعية الكبرى والمستشفيات والمصانع بالرياض والخرج. تنفيذ هندسي معتمد.",
      keywords: ["تكييف شيلر الرياض", "محطة تشيلر الخرج", "تركيب مبردات مياه صناعية", "صيانة شيلرات مصانع"]
    },
    en: {
      title: "Chiller AC Riyadh & Al-Kharj | Industrial Cooling Plants",
      description: "Heavy-duty chiller AC systems and cooling towers in Riyadh & Al-Kharj. Professional engineering installation for factories, hospitals, and large complexes.",
      keywords: ["Chiller AC Riyadh", "Chiller plant Al-Kharj", "industrial water chiller installation", "cooling tower installation"]
    }
  },
  crac: {
    ar: {
      title: "تبريد مراكز البيانات CRAC بالرياض والخرج | تكييف دقيق",
      description: "توريد وتركيب وحدات التكييف الدقيق وتبريد مراكز البيانات وغرف السيرفرات CRAC بالرياض والخرج لضمان التحكم الدقيق بالحرارة والرطوبة.",
      keywords: ["تبريد مراكز البيانات", "تبريد CRAC الرياض", "تكييف غرف السيرفرات الخرج", "Precision cooling Saudi"]
    },
    en: {
      title: "CRAC Units & Data Center Precision Cooling | Al-Takeef",
      description: "Precision cooling and CRAC unit installation in Riyadh and Al-Kharj. Secure server room stability with professional temperature and humidity controls.",
      keywords: ["CRAC units Riyadh", "Data center cooling Al-Kharj", "Precision cooling Saudi", "server room AC installation"]
    }
  },
  'split-wall': {
    ar: {
      title: "توريد مكيفات سبليت جدارية للمشاريع بالرياض والخرج",
      description: "توريد وتركيب مكيفات سبليت جدارية بكميات للمشاريع الإنشائية والإسكان والجهات الحكومية بالرياض والخرج من الماركات الرائدة.",
      keywords: ["تركيب مكيف سبليت بالرياض", "مكيفات سبليت مشاريع الخرج", "توريد مكيفات سبليت بالجملة", "مشاريع تكييف سبليت"]
    },
    en: {
      title: "Bulk Split AC Supply & Installation Riyadh | Al-Takeef",
      description: "Bulk supply and installation of wall-mounted split AC units for construction projects, labor camps, and government developments in Riyadh & Al-Kharj.",
      keywords: ["Split AC Riyadh", "Split AC installation Al-Kharj", "bulk split AC supply", "project split AC contracting"]
    }
  },
  cassette: {
    ar: {
      title: "مكيف كاسيت سقفي للمعارض والمكاتب بالرياض والخرج",
      description: "توريد وتركيب مكيفات كاسيت سقفية للمعارض والمحلات التجارية والمكاتب المفتوحة بالرياض والخرج. توزيع هواء دائري وتثبيت احترافي.",
      keywords: ["مكيف كاسيت سقفي بالرياض", "تركيب كاسيت الخرج", "مكيف كاسيت تجاري", "تكييف معارض ومكاتب"]
    },
    en: {
      title: "Cassette Ceiling AC Riyadh & Al-Kharj | Al-Takeef",
      description: "Ceiling cassette AC installation for showrooms, open-plan offices, and commercial spaces in Riyadh and Al-Kharj. Complete 360 air distribution.",
      keywords: ["Cassette AC Riyadh", "Cassette installation Al-Kharj", "Ceiling cassette Saudi", "commercial cassette AC"]
    }
  },
  maintenance: {
    ar: {
      title: "عقود صيانة تكييف سنوية للمنشآت والمجمعات بالرياض",
      description: "عقود صيانة وتشغيل تكييف مركزي وتشيلر سنوية معتمدة للمصانع والجهات التجارية بالرياض والخرج. استجابة سريعة وفرق طوارئ متكاملة.",
      keywords: ["عقود صيانة تكييف سنوية", "صيانة تكييف مركزي الرياض", "صيانة تشيلرات الخرج", "صيانة HVAC للشركات"]
    },
    en: {
      title: "Commercial AC Maintenance & AMC Riyadh | Al-Takeef",
      description: "Annual Maintenance Contracts (AMC) and operation services for central AC, VRF, and chiller systems in commercial complexes and factories across Riyadh.",
      keywords: ["AC maintenance Riyadh", "commercial HVAC AMC", "chiller maintenance contracts", "industrial AC service"]
    }
  },
  ventilation: {
    ar: {
      title: "أنظمة تهوية ميكانيكية ومخارج الدخان بالرياض والخرج",
      description: "تصميم وتنفيذ أنظمة التهوية الميكانيكية، تهوية المستودعات، سحب الدخان، ومراوح الشفط التجارية للمطابخ ومواقف السيارات بالرياض والخرج.",
      keywords: ["أنظمة تهوية ميكانيكية", "تهوية مستودعات بالرياض", "سحب دخان مواقف السيارات", "مراوح شفط تجارية"]
    },
    en: {
      title: "Mechanical Ventilation & Smoke Control Riyadh | Al-Takeef",
      description: "Custom design and installation of mechanical ventilation, warehouse ventilation, smoke exhaust systems, and commercial kitchen hoods in Riyadh & Al-Kharj.",
      keywords: ["Mechanical ventilation Riyadh", "warehouse ventilation Al-Kharj", "smoke control systems", "kitchen hood exhaust"]
    }
  },
  store: {
    ar: {
      title: "توريد أجهزة تكييف ومعدات HVAC للمشاريع بالرياض",
      description: "متجر وقسم مبيعات التكييف المركزي ومعدات HVAC للمقاولين والمطورين بالرياض والخرج. توريد مباشر من المصنع لأكبر العلامات التجارية.",
      keywords: ["توريد أجهزة تكييف الرياض", "أسعار مكيفات مشاريع الخرج", "مبيعات معدات HVAC", "موزع مكيفات معتمد"]
    },
    en: {
      title: "HVAC Equipment & AC Unit Supply Riyadh | Al-Takeef",
      description: "B2B sales and supply of central AC units, VRF systems, and HVAC equipment for contractors and developers in Riyadh & Al-Kharj.",
      keywords: ["HVAC equipment supply Riyadh", "commercial AC unit prices", "bulk AC sales Saudi", "approved HVAC supplier"]
    }
  }
};

export function getMetadata(
  key: string,
  locale: string,
  pathname: string = '',
  overrides?: Partial<Metadata> & { title?: string; description?: string; image?: string; type?: 'website' | 'article' }
): Metadata {
  const currentLocale = locale === 'ar' ? 'ar' : 'en';
  const data = seoData[key]?.[currentLocale] || seoData.home[currentLocale];
  
  const cleanPath = pathname ? (pathname.startsWith('/') ? pathname : `/${pathname}`) : '';
  const pathnameWithoutLocale = cleanPath.replace(/^\/(ar|en)/, '');
  const normalizedPath = pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale;
  
  const url = `${siteUrl}/${currentLocale}${normalizedPath}`;
  const arUrl = `${siteUrl}/ar${normalizedPath}`;
  const enUrl = `${siteUrl}/en${normalizedPath}`;

  const title = overrides?.title || data.title;
  const description = overrides?.description || data.description;
  const imageUrl = overrides?.image || `${siteUrl}/images/company_logo.png`;
  const type = overrides?.type || 'website';

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords: data.keywords,
    alternates: {
      canonical: url,
      languages: {
        'ar': arUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: url,
      siteName: currentLocale === 'ar' ? 'مؤسسة أعمال التكييف' : 'Al-Takeef Contracting Establishment',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: currentLocale === 'ar' ? 'ar_SA' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@altakeef',
    },
    ...overrides,
  };
}
