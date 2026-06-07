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
      title: "مؤسسة أعمال التكييف | تكييف مركزي بالرياض والخرج",
      description: "شركة تكييف مركزي بالرياض والخرج. توريد وتركيب وصيانة أنظمة التكييف المركزي، VRF، والمخفي بأعلى كفاءة وأفضل سعر.",
      keywords: ["شركة تكييف مركزي بالرياض", "تركيب تكييف VRF الخرج", "أفضل شركة تكييف في الرياض", "مقاول تكييف الخرج", "صيانة تكييف مركزي", "توريد وتركيب تكييف"]
    },
    en: {
      title: "Al-Takeef HVAC | Central AC Riyadh & Al-Kharj",
      description: "Leading HVAC contractor in Riyadh and Al-Kharj. Professional installation & maintenance of central AC, VRF, and concealed duct split systems.",
      keywords: ["Central AC Riyadh", "VRF installation Al-Kharj", "HVAC contractor Riyadh", "AC maintenance Al-Kharj", "AC installation"]
    }
  },
  about: {
    ar: {
      title: "من نحن | مؤسسة أعمال التكييف بالرياض",
      description: "تعرف على مؤسسة أعمال التكييف بالرياض والخرج. خبرة ممتدة في تصميم وتوريد وتركيب وصيانة أنظمة التكييف المركزي والتجاري والسكني.",
      keywords: ["من نحن أعمال التكييف", "شركة تكييف الرياض", "مقاول تكييف الخرج", "خبرة التكييف"]
    },
    en: {
      title: "About Us | Al-Takeef HVAC Riyadh",
      description: "Learn more about Al-Takeef Contracting in Riyadh and Al-Kharj. Decades of experience in design, supply, and maintenance of HVAC systems.",
      keywords: ["About Al-Takeef", "HVAC contractor Riyadh", "AC installation company", "our story"]
    }
  },
  contact: {
    ar: {
      title: "اتصل بنا | رقم شركة تكييف بالرياض والخرج",
      description: "تواصل مع مؤسسة أعمال التكييف بالرياض والخرج. اتصل بنا على الرقم 0552239595 لطلب استشارة أو عرض سعر مجاني لجميع مشاريع التكييف.",
      keywords: ["اتصل بنا أعمال التكييف", "رقم شركة تكييف بالرياض", "رقم مقاول تكييف الخرج", "تواصل معنا"]
    },
    en: {
      title: "Contact Us | HVAC Company Phone Riyadh & Al-Kharj",
      description: "Get in touch with Al-Takeef Contracting in Riyadh and Al-Kharj. Call +966552239595 for a free expert consultation and quotation.",
      keywords: ["Contact Al-Takeef", "Riyadh AC company number", "HVAC services phone", "free quote"]
    }
  },
  projects: {
    ar: {
      title: "مشاريعنا | أعمال التكييف المركزي والتجاري",
      description: "تصفح سابقة أعمال ومشاريع مؤسسة أعمال التكييف بالرياض والخرج. مشاريع تكييف مركزي، VRF، وشيلر للفلل والمجمعات والمصانع.",
      keywords: ["مشاريع التكييف الرياض", "سابقة أعمال التكييف", "تركيب تكييف فلل", "تكييف مشاريع تجارية"]
    },
    en: {
      title: "Our Projects | Central & Commercial HVAC Works",
      description: "Browse past projects by Al-Takeef Contracting in Riyadh & Al-Kharj. Successful central AC, VRF, and chiller installations for villas & malls.",
      keywords: ["HVAC projects Riyadh", "our portfolio", "AC installation gallery", "commercial references"]
    }
  },
  blog: {
    ar: {
      title: "المدونة | نصائح صيانة مكيفات الرياض",
      description: "مدونة أعمال التكييف. مقالات ونصائح هامة حول صيانة مكيفات سبليت بالرياض، تنظيف الدكت، توفير طاقة المكيف، وتقنيات VRF.",
      keywords: ["مدونة التكييف", "نصائح صيانة المكيفات", "توفير كهرباء المكيف", "أعطال التكييف بالرياض"]
    },
    en: {
      title: "HVAC Blog | AC Maintenance Tips Riyadh",
      description: "Al-Takeef HVAC Blog. Expert articles and advice on AC repair in Riyadh, energy-saving settings, VRF tech, and duct cleaning.",
      keywords: ["AC blog Saudi", "AC repair tips Riyadh", "save electricity AC", "home cooling advice"]
    }
  },
  vrf: {
    ar: {
      title: "تركيب تكييف VRF الخرج والرياض | أعمال التكييف",
      description: "تركيب تكييف VRF الخرج والرياض بأحدث التقنيات وكفاءة طاقة عالية. حلول تكييف ذكية للمشاريع السكنية والتجارية.",
      keywords: ["تركيب تكييف VRF الخرج", "تكييف VRF الرياض", "نظام VRF السعودية", "مقاول تكييف مركزي"]
    },
    en: {
      title: "VRF AC Installation Riyadh & Al-Kharj | Al-Takeef",
      description: "Professional VRF installation in Riyadh & Al-Kharj. High energy efficiency, zoning control, and maintenance for commercial & residential buildings.",
      keywords: ["VRF installation Riyadh", "VRF installation Al-Kharj", "VRF system Saudi", "commercial HVAC"]
    }
  },
  central: {
    ar: {
      title: "شركة تكييف مركزي بالرياض والخرج | أعمال التكييف",
      description: "شركة تكييف مركزي بالرياض والخرج متخصصة في تصميم وتوريد وتركيب وصيانة مكيفات الدكت والمركزي للمشاريع السكنية والتجارية.",
      keywords: ["شركة تكييف مركزي بالرياض", "تكييف مركزي الخرج", "تركيب مكيف مركزي", "صيانة تكييف مركزي"]
    },
    en: {
      title: "Central AC Riyadh & Al-Kharj | Al-Takeef HVAC",
      description: "Top central AC contractor in Riyadh and Al-Kharj. Design, supply, installation, and maintenance of central cooling systems.",
      keywords: ["Central AC Riyadh", "Central AC Al-Kharj", "Central AC installation", "Central AC contractor"]
    }
  },
  'concealed-duct': {
    ar: {
      title: "تكييف مخفي دكت سبليت بالرياض | أعمال التكييف",
      description: "تركيب تكييف مخفي دكت سبليت بالرياض والخرج بتصميم أنيق وموفر للمساحة. حلول تكييف مثالية للفلل والمكاتب.",
      keywords: ["تكييف مخفي دكت سبليت", "مكيفات مخفي الرياض", "تركيب تكييف دكت", "تكييف مخفي الخرج"]
    },
    en: {
      title: "Concealed Duct Split AC Riyadh & Al-Kharj | Al-Takeef",
      description: "Sleek and efficient concealed duct split AC systems in Riyadh & Al-Kharj. Design and installation for villas and offices.",
      keywords: ["Concealed duct split AC", "Concealed AC Riyadh", "Duct split installation Al-Kharj", "Hidden ceiling AC"]
    }
  },
  chiller: {
    ar: {
      title: "تركيب تكييف شيلر الرياض والخرج | أنظمة تشيلر",
      description: "أنظمة التبريد الشيلر ومبردات المياه للمشاريع الضخمة بالرياض والخرج. توريد وصيانة شيلرات معتمدة للمصانع والمستشفيات.",
      keywords: ["تكييف شيلر الرياض", "نظام تشيلر الخرج", "تركيب شيلر", "صيانة شيلرات"]
    },
    en: {
      title: "Chiller AC Riyadh & Al-Kharj | Al-Takeef HVAC",
      description: "Heavy-duty chiller AC systems and cooling towers in Riyadh & Al-Kharj. Professional installation and maintenance for large commercial sites.",
      keywords: ["Chiller AC Riyadh", "Chiller Al-Kharj", "Central cooling system", "Chiller maintenance"]
    }
  },
  crac: {
    ar: {
      title: "وحدات CRAC تبريد مراكز البيانات بالرياض والخرج",
      description: "توريد وتركيب وحدات تبريد مراكز البيانات CRAC بالرياض والخرج. تحكم دقيق في الحرارة والرطوبة لضمان سلامة الخوادم.",
      keywords: ["وحدات تبريد مراكز البيانات", "تبريد CRAC الرياض", "تبريد دقيق الخرج", "CRAC installation"]
    },
    en: {
      title: "CRAC Units & Data Center Cooling | Al-Takeef",
      description: "Precision cooling and CRAC unit installation in Riyadh and Al-Kharj. Ensure server stability with advanced temperature control.",
      keywords: ["CRAC units Riyadh", "Data center cooling Al-Kharj", "Precision cooling Saudi", "CRAC maintenance"]
    }
  },
  'split-wall': {
    ar: {
      title: "تركيب مكيف سبليت بالرياض والخرج | أعمال التكييف",
      description: "أفضل أسعار وتركيب مكيفات سبليت جدارية بالرياض والخرج. توريد من ماركات رائدة (جري، توشيبا، بيسك) وضمان طويل الأمد.",
      keywords: ["تركيب مكيف سبليت بالرياض", "مكيفات سبليت الخرج", "أفضل مكيف سبليت", "شراء مكيف سبليت"]
    },
    en: {
      title: "Split AC Installation Riyadh & Al-Kharj | Al-Takeef",
      description: "Top-brand wall split AC installation in Riyadh & Al-Kharj. Affordable pricing and expert fitting for home & office.",
      keywords: ["Split AC Riyadh", "Split AC installation Al-Kharj", "Wall split AC Saudi", "Buy split AC"]
    }
  },
  cassette: {
    ar: {
      title: "مكيف كاسيت سقفي بالرياض والخرج | أعمال التكييف",
      description: "تركيب مكيف كاسيت سقفي بالرياض والخرج. توزيع مثالي للهواء 360 درجة، حل مثالي للمحلات التجارية والمكاتب المفتوحة.",
      keywords: ["مكيف كاسيت سقفي بالرياض", "تركيب كاسيت الخرج", "مكيف كاسيت تجاري", "صيانة مكيف كاسيت"]
    },
    en: {
      title: "Cassette Ceiling AC Riyadh & Al-Kharj | Al-Takeef",
      description: "Cassette AC installation & maintenance in Riyadh and Al-Kharj. Sleek design, 360-degree air flow, and professional setup.",
      keywords: ["Cassette AC Riyadh", "Cassette installation Al-Kharj", "Ceiling cassette Saudi", "Cassette AC maintenance"]
    }
  },
  maintenance: {
    ar: {
      title: "صيانة مكيفات بالرياض والخرج | عقود سنوية",
      description: "خدمات صيانة مكيفات فورية وعقود صيانة سنوية بالرياض والخرج. فريق فني متخصص لتصليح التكييف المركزي والسبليت 24/7.",
      keywords: ["صيانة مكيفات بالرياض", "صيانة مكيفات الخرج", "عقود صيانة تكييف سنوية", "تصليح مكيفات"]
    },
    en: {
      title: "AC Maintenance Riyadh & Al-Kharj | Annual Contracts",
      description: "Expert AC repair and annual maintenance contracts in Riyadh and Al-Kharj. Preventative servicing for central, VRF, and split systems.",
      keywords: ["AC maintenance Riyadh", "AC repair Al-Kharj", "Annual HVAC contracts", "AC service Saudi"]
    }
  },
  ventilation: {
    ar: {
      title: "تركيب أنظمة تهوية بالرياض والخرج | أعمال التكييف",
      description: "تصميم وتركيب أنظمة التهوية بالرياض والخرج للمطابخ ومواقف السيارات والمستودعات. سحب الروائح وتجديد الهواء بكفاءة.",
      keywords: ["أنظمة تهوية بالرياض", "تركيب تهوية الخرج", "مروحة شفط تجارية", "تهوية المستودعات"]
    },
    en: {
      title: "Ventilation Systems Riyadh & Al-Kharj | Al-Takeef",
      description: "Commercial ventilation systems in Riyadh & Al-Kharj. Custom design and installation for kitchens, warehouses, and parking areas.",
      keywords: ["Ventilation systems Riyadh", "Exhaust fans Al-Kharj", "Commercial ventilation Saudi", "Air duct ventilation"]
    }
  },
  store: {
    ar: {
      title: "متجر مكيفات بالرياض والخرج | أسعار مكيفات",
      description: "شراء مكيفات بأسعار مخفضة بالرياض والخرج. تكييف سبليت، مركزي، ودكت من أفضل العلامات التجارية مع التوصيل والتركيب.",
      keywords: ["متجر مكيفات بالرياض", "أسعار مكيفات الخرج", "شراء مكيف سبليت", "عروض مكيفات الرياض"]
    },
    en: {
      title: "AC Store Riyadh & Al-Kharj | Best AC Prices",
      description: "Shop top-brand air conditioners in Riyadh & Al-Kharj. Great rates on split, central, and concealed AC units with delivery and setup.",
      keywords: ["AC store Riyadh", "AC prices Al-Kharj", "Buy split AC Saudi", "AC deals Riyadh"]
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
