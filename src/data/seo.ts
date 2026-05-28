export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export const seoData: Record<string, { ar: SEOData; en: SEOData }> = {
  home: {
    ar: {
      title: "مؤسسة أعمال التكييف | أفضل مقاول تكييف في الرياض والخرج",
      description: "نقدم حلول التكييف المتكاملة للمشاريع السكنية والتجارية والحكومية في الرياض والخرج. تركيب، صيانة، وتوريد أنظمة التكييف المركزي، VRF، والمخفي.",
      keywords: ["تكييف مركزي", "أفضل شركة تكييف في الرياض", "مقاول تكييف الخرج", "صيانة تكييف مركزي", "توريد وتركيب تكييف"]
    },
    en: {
      title: "Al-Takeef Contracting | Best HVAC Contractor in Riyadh & Al-Kharj",
      description: "Integrated air conditioning solutions for residential, commercial, and government projects in Riyadh and Al-Kharj. Installation, maintenance, and supply of central AC, VRF, and concealed systems.",
      keywords: ["Central AC", "Best HVAC contractor Riyadh", "AC company Al-Kharj", "Central AC maintenance", "AC supply and installation"]
    }
  },
  vrf: {
    ar: {
      title: "تركيب تكييف VRF الرياض | مؤسسة أعمال التكييف",
      description: "تركيب وصيانة أنظمة التكييف VRF للمشاريع التجارية. كفاءة عالية في استهلاك الطاقة وتحكم مستقل في كل منطقة.",
      keywords: ["تركيب تكييف VRF الرياض", "نظام VRF السعودية", "تكييف VRF"]
    },
    en: {
      title: "VRF Installation Riyadh | Al-Takeef Contracting",
      description: "Installation and maintenance of VRF air conditioning systems for commercial projects. High energy efficiency and independent zone control.",
      keywords: ["VRF installation Riyadh", "VRF system Saudi", "VRF air conditioning"]
    }
  },
  central: {
    ar: {
      title: "تكييف مركزي الرياض | تركيب مكيف مركزي | أعمال التكييف",
      description: "حلول التكييف المركزي للمشاريع الكبيرة. توريد وتركيب وصيانة أجهزة التكييف المركزي بأعلى معايير الجودة.",
      keywords: ["تكييف مركزي الرياض", "تركيب مكيف مركزي", "صيانة تكييف مركزي"]
    },
    en: {
      title: "Central AC Riyadh | Central AC Installation | Al-Takeef",
      description: "Central air conditioning solutions for large projects. Supply, installation, and maintenance of central AC units with the highest quality standards.",
      keywords: ["Central AC Riyadh", "Central air conditioning install", "Central AC maintenance"]
    }
  },
  concealed: {
    ar: {
      title: "تكييف مخفي دكت سبليت | أعمال التكييف",
      description: "تركيب أنظمة التكييف المخفي (دكت سبليت) للمنازل والفلل والمكاتب. تصميم أنيق يندمج مع الديكور الداخلي وتوزيع هواء مثالي.",
      keywords: ["تكييف مخفي دكت سبليت", "مكيف سقف مخفي", "تركيب تكييف مخفي"]
    },
    en: {
      title: "Concealed Duct Split AC | Al-Takeef",
      description: "Installation of concealed AC systems (duct split) for homes, villas, and offices. Elegant design integrating with interior decor and ideal air distribution.",
      keywords: ["Concealed duct split AC", "Hidden ceiling AC", "Concealed AC installation"]
    }
  },
  chiller: {
    ar: {
      title: "تكييف شيلر الرياض | نظام تبريد مركزي",
      description: "أنظمة التبريد الشيلر للمشاريع الضخمة، المجمعات التجارية، والمستشفيات. حلول تبريد فعالة وموثوقة.",
      keywords: ["تكييف شيلر الرياض", "نظام تبريد مركزي", "صيانة الشيلر"]
    },
    en: {
      title: "Chiller AC Riyadh | Central Cooling System",
      description: "Chiller cooling systems for mega projects, commercial complexes, and hospitals. Efficient and reliable cooling solutions.",
      keywords: ["Chiller AC Riyadh", "Central cooling system", "Chiller maintenance"]
    }
  },
  crac: {
    ar: {
      title: "وحدات CRAC لمراكز البيانات | التبريد الدقيق",
      description: "تركيب وحدات تبريد مراكز البيانات (CRAC). تحكم دقيق في درجة الحرارة والرطوبة لضمان استقرار الخوادم.",
      keywords: ["وحدات تبريد مراكز البيانات", "التبريد الدقيق", "CRAC السعودية"]
    },
    en: {
      title: "CRAC Units for Data Centers | Precision Cooling",
      description: "Installation of data center cooling units (CRAC). Precise temperature and humidity control to ensure server stability.",
      keywords: ["CRAC units data center Saudi", "Precision cooling", "CRAC installation"]
    }
  },
  split: {
    ar: {
      title: "مكيف جداري سبليت | أفضل مكيف سبليت",
      description: "توريد وتركيب مكيفات سبليت جدارية من أفضل العلامات التجارية (جري، توشيبا، بيسك). خيارات متعددة تناسب جميع الاحتياجات.",
      keywords: ["مكيف جداري سبليت", "أفضل مكيف سبليت", "تركيب مكيف سبليت"]
    },
    en: {
      title: "Wall Split AC | Best Split Air Conditioner",
      description: "Supply and installation of wall split ACs from top brands (Gree, Toshiba, Basic). Multiple options to suit all needs.",
      keywords: ["Wall split AC", "Best split air conditioner", "Split AC installation"]
    }
  },
  cassette: {
    ar: {
      title: "مكيف كاسيت سقفي | تركيب كاسيت | أعمال التكييف",
      description: "تركيب مكيفات كاسيت للمكاتب والمحلات التجارية. توزيع هواء 360 درجة وتصميم يتناسب مع الأسقف المستعارة.",
      keywords: ["مكيف كاسيت سقفي", "تركيب كاسيت", "صيانة مكيف كاسيت"]
    },
    en: {
      title: "Cassette Ceiling AC | Cassette Installation",
      description: "Cassette AC installation for offices and retail shops. 360-degree air distribution and design suitable for false ceilings.",
      keywords: ["Cassette ceiling AC", "Cassette installation", "Cassette AC maintenance"]
    }
  },
  maintenance: {
    ar: {
      title: "صيانة مكيفات الرياض | عقود صيانة تكييف سنوية",
      description: "خدمات صيانة لجميع أنواع المكيفات في الرياض والخرج. عقود صيانة سنوية للمباني التجارية والسكنية وفريق طوارئ 24/7.",
      keywords: ["صيانة مكيفات الرياض", "صيانة تكييف مركزي", "عقود صيانة تكييف سنوية"]
    },
    en: {
      title: "AC Maintenance Riyadh | Annual Maintenance Contracts",
      description: "Maintenance services for all AC types in Riyadh and Al-Kharj. Annual maintenance contracts for commercial and residential buildings with 24/7 emergency team.",
      keywords: ["AC maintenance Riyadh", "HVAC maintenance", "Annual AC maintenance contracts"]
    }
  },
  ventilation: {
    ar: {
      title: "حلول تهوية المباني | نظام تهوية",
      description: "تصميم وتركيب أنظمة التهوية للمطابخ التجارية، مواقف السيارات، والمستودعات. تحسين جودة الهواء الداخلي.",
      keywords: ["حلول تهوية المباني", "نظام تهوية", "تركيب مراوح شفط"]
    },
    en: {
      title: "Building Ventilation Solutions | Ventilation System",
      description: "Design and installation of ventilation systems for commercial kitchens, parking lots, and warehouses. Improving indoor air quality.",
      keywords: ["Building ventilation", "Ventilation system", "Exhaust fan installation"]
    }
  },
  store: {
    ar: {
      title: "متجر التكييف | أسعار مكيفات الرياض",
      description: "استعرض أحدث أسعار ومواصفات المكيفات من جري، توشيبا، وبيسك. اطلب عرض سعر للكميات والمشاريع الكبيرة.",
      keywords: ["متجر مكيفات الرياض", "أسعار مكيفات", "شراء مكيف سبليت"]
    },
    en: {
      title: "AC Store | Air Conditioner Prices Riyadh",
      description: "Browse the latest prices and specs of ACs from Gree, Toshiba, and Basic. Request a quote for bulk orders and large projects.",
      keywords: ["AC store Riyadh", "Air conditioner prices", "Buy split AC"]
    }
  }
};
