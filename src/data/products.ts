// =============================================================================
// Al-Takeef Product Catalog
// =============================================================================

export type ProductCategory = 'split' | 'concealed' | 'cassette' | 'central' | 'packages' | 'ventilation' | 'crac' | 'chiller' | 'vrf' | 'maintenance';
export type ProductBrand = 'Gree' | 'Toshiba' | 'Basic' | 'Elite';

export interface ProductFeature {
  ar: string;
  en: string;
}

export interface Product {
  id: number;
  slug: string;
  brand: ProductBrand;
  category: ProductCategory;
  model: string;
  capacity: number; // BTU
  price: number; // SAR
  originalPrice?: number; // SAR (for showing discounts)
  features: ProductFeature[];
  image: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  energyRating?: number; // 1-5 stars
  inverter: boolean;
  inStock: boolean;
  badge?: {
    ar: string;
    en: string;
  };
}

export const products: Product[] = [
  {
    "id": 1,
    "slug": "basic-30000-dsa30ch",
    "brand": "Basic",
    "category": "split",
    "model": "DSA30CH",
    "capacity": 30000,
    "price": 3933,
    "originalPrice": 5506,
    "nameAr": "مكيف دانسات سبليت 30 حار / بارد DSA30CH WIFI",
    "nameEn": "Dansat Split AC 30,000 BTU Hot/Cold DSA30CH WIFI",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/1c039225-faae-484d-b16c-c72fffe9cca7-500x243-ygV0pUe1Vjj87dssgu75uIDl5oJvKDyfHwQjApsu.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 2,
    "slug": "elite-18000-18000",
    "brand": "Elite",
    "category": "split",
    "model": "18000",
    "capacity": 18000,
    "price": 1260,
    "originalPrice": 1764,
    "nameAr": "مكيف شباك جنرال 18 تيربو بارد روتاري سعة 18000 GS1834C",
    "nameEn": "General Window AC 18 Turbo Cold Rotary 18,000 BTU GS1834C",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/3bea3bd1-0046-4ccc-92a7-b30744a10230-500x500-0JHjXvsxX3kun4NiEvQYcBkptr7sTsEwjn3OtB9i.webp",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 3,
    "slug": "gree-18000-gwc24avexf-s6dta",
    "brand": "Gree",
    "category": "split",
    "model": "GWC24AVEXF-S6DTA",
    "capacity": 18000,
    "price": 3848,
    "originalPrice": 5387,
    "nameAr": "مكيف جري جداري اسبليت بارد فقط GWC24AVEXF-S6DTA",
    "nameEn": "Gree Split AC Cool Only GWC24AVEXF-S6DTA",
    "descriptionAr": "مكيف جري سبليت جداري يتميز بتقنية تبريد سريعة وهادئة مع فلتر هواء عالي الجودة لتنقية الغرفة وتوفير الطاقة.",
    "descriptionEn": "Gree wall split AC featuring fast, silent cooling technology and high-quality air filters to purify the room and save energy.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/07fba468-a08f-4a8e-8122-4a97bfeca3e1-500x389.5-5m4xKz82utcdMkswpff6szWCqBrlU0STQwv5SvZ9.jpg",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 4,
    "slug": "basic-24000-24000",
    "brand": "Basic",
    "category": "split",
    "model": "24000",
    "capacity": 24000,
    "price": 2349,
    "originalPrice": 3289,
    "nameAr": "مكيف LG اسبليت 24000 وحدة وطني سعودي LC242C0.NK0",
    "nameEn": "LG Split AC 24000 BTU وطني سعودي LC242C0.NK0",
    "descriptionAr": "مكيف ال جي سبليت ذو كفاءة تبريد فائقة بفضل محرك الإنفرتر الذكي الموفر للطاقة مع فلتر مضاد للبكتيريا والغبار.",
    "descriptionEn": "LG split AC featuring superior cooling efficiency powered by smart energy-saving inverter compressor and anti-dust filter.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/d17148d5-61ce-4a2f-bceb-59232feda9f0-500x500-gbRFCONaGzsECw6MRF1NXt4LoCCJPwuhPWSgfLrx.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 5,
    "slug": "basic-22000-21500",
    "brand": "Basic",
    "category": "split",
    "model": "21500",
    "capacity": 22000,
    "price": 2723,
    "originalPrice": 3812,
    "nameAr": "مكيف LG اسبليت سمارت انفرتر 21500 وحدة NS242O3",
    "nameEn": "LG Split AC Smart Inverter 21500 BTU NS242O3",
    "descriptionAr": "مكيف ال جي سبليت ذو كفاءة تبريد فائقة بفضل محرك الإنفرتر الذكي الموفر للطاقة مع فلتر مضاد للبكتيريا والغبار.",
    "descriptionEn": "LG split AC featuring superior cooling efficiency powered by smart energy-saving inverter compressor and anti-dust filter.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/be82f8c5-2f4c-41bc-8a8a-3d5cbfc02180-500x500-1Bbee2SgAPtAsFyCujNJXFCDgBrTP4TRMZhLhTnj.jpg",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 6,
    "slug": "toshiba-27000-27400",
    "brand": "Toshiba",
    "category": "split",
    "model": "27400",
    "capacity": 27000,
    "price": 3480,
    "originalPrice": 4872,
    "nameAr": "مكيف فيشر انفرتر 27400 وحدة بارد FSACCA-XF30CIB",
    "nameEn": "AC فيشر انفرتر 27400 BTU Cool FSACCA-XF30CIB",
    "descriptionAr": "مكيف فيشر جداري مزود بتقنية الإنفرتر لتوفير استهلاك الكهرباء، وتوزيع هواء ذكي للمساحات المتوسطة والكبيرة.",
    "descriptionEn": "Fisher wall AC equipped with inverter technology to reduce power consumption, with intelligent air distribution for medium to large spaces.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/3c9a3126-cea2-4658-9bb1-a02bec9ebac4-500x500-JjHfG20qs27O0KbUe54DgGfQdtt16dBePgmlAG4K.jpg",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 7,
    "slug": "toshiba-18000-18000",
    "brand": "Toshiba",
    "category": "split",
    "model": "18000",
    "capacity": 18000,
    "price": 1976,
    "originalPrice": 2766,
    "nameAr": "مكيف فيشر جداري انفرتر 18000وحدة حار بارد FSACME-XC18HIB",
    "nameEn": "Fisher Inverter Split AC 18000BTU Hot Cool FSACME-XC18HIB",
    "descriptionAr": "مكيف فيشر جداري مزود بتقنية الإنفرتر لتوفير استهلاك الكهرباء، وتوزيع هواء ذكي للمساحات المتوسطة والكبيرة.",
    "descriptionEn": "Fisher wall AC equipped with inverter technology to reduce power consumption, with intelligent air distribution for medium to large spaces.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/f75e122c-75f1-480f-888c-78519fa13119-500x500-puS97B6dmdF6DuaJOKZzPY0tjYd5yGCHNJVQ5Pin.jpg",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 8,
    "slug": "basic-24000-dsa24mch",
    "brand": "Basic",
    "category": "split",
    "model": "DSA24MCH",
    "capacity": 24000,
    "price": 2011,
    "originalPrice": 2815,
    "nameAr": "مكيف دانسات جداري 24 حار بارد DSA24MCH",
    "nameEn": "AC Dansat Wall 24 Hot Cold DSA24MCH",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/3022daf7-3ca4-4fe4-9954-8fd5026f4f87-500x500-ZPzdc3zBia2M263xchYLBqkLOWo9b1jN4xPPW6Pe.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 9,
    "slug": "toshiba-22000-22000",
    "brand": "Toshiba",
    "category": "split",
    "model": "22000",
    "capacity": 22000,
    "price": 2268,
    "originalPrice": 3175,
    "nameAr": "مكيف فيشر جداري انفرتر 22000وحدة بارد FSACME-XC24CIB",
    "nameEn": "Fisher Inverter Split AC 22000BTU Cool FSACME-XC24CIB",
    "descriptionAr": "مكيف فيشر جداري مزود بتقنية الإنفرتر لتوفير استهلاك الكهرباء، وتوزيع هواء ذكي للمساحات المتوسطة والكبيرة.",
    "descriptionEn": "Fisher wall AC equipped with inverter technology to reduce power consumption, with intelligent air distribution for medium to large spaces.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/e87cdc6e-0dbc-4dde-8b6e-657f7d57844a-500x500-WXMEylMtRH4xbgicxCLdcjQURZ2Raf8JUbKlKt5t.jpg",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 10,
    "slug": "basic-36000-31400",
    "brand": "Basic",
    "category": "split",
    "model": "31400",
    "capacity": 36000,
    "price": 4250,
    "originalPrice": 5950,
    "nameAr": "مكيف اسبليت ماندو بارد 31400وحدة - MPSER-36C AC-MP-SER-36C",
    "nameEn": "AC اSplit ماندو Cold 31400BTU - MPSER-36C AC-MP-SER-36C",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/728ea99c-6a26-464b-9f54-9c481a566099-500x500-4Vr1nfSW8jCpAOZnNBOmgDz72X7Tlt4sXmIlcyyr.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 11,
    "slug": "basic-18000-1800",
    "brand": "Basic",
    "category": "split",
    "model": "1800",
    "capacity": 18000,
    "price": 1495,
    "originalPrice": 2093,
    "nameAr": "مكيف اسبليت ميلنج 1800وحد واي فاي بارد MSAC-18CO",
    "nameEn": "AC اSplit ميلنج 1800وحد واي فاي Cold MSAC-18CO",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/7fad9322-5722-4f28-963d-ccb555253f8e-500x500-49ofK0RPa1n9Wm2pxBlNDm9x79grSDGdDIEXHCse.webp",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 12,
    "slug": "basic-18000-21200",
    "brand": "Basic",
    "category": "split",
    "model": "21200",
    "capacity": 18000,
    "price": 2125,
    "originalPrice": 2975,
    "nameAr": "مكيف اسبليت ميلنج 21200وحدة واي فاي بارد MSAC-24CO",
    "nameEn": "AC اSplit ميلنج 21200BTU واي فاي Cold MSAC-24CO",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/6ddd14de-43df-49b9-9f94-dd9d7e07378f-500x500-Hsl9dXxlSGk9A9JVZ0QyrAKNGoBBsVOgcI6aJUyP.jpg",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 13,
    "slug": "basic-18000-18000",
    "brand": "Basic",
    "category": "split",
    "model": "18000",
    "capacity": 18000,
    "price": 1549,
    "originalPrice": 2799,
    "nameAr": "مكيف اسبليت فالكون 18000 وحدة – بارد FCS18C5",
    "nameEn": "AC اSplit Falcon 18000 BTU – Cold FCS18C5",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/1726e426-ae08-4d84-9223-24e66555baf4-500x500-1t28HeqkqaPR6vlmWuSJ4PizJ1P1oWztToUwdWPz.jpg",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 14,
    "slug": "basic-18000-18400",
    "brand": "Basic",
    "category": "split",
    "model": "18400",
    "capacity": 18000,
    "price": 1899,
    "originalPrice": 2532,
    "nameAr": "مكيف LG سبليت، 18400 وحدة, فلتر مضاد للبكتيريا, بارد فقط، ابيض - LO182C0",
    "nameEn": "AC LG Split، 18400 BTU, Filter Anti للبكتيريا, Cold Only، ابيض - LO182C0",
    "descriptionAr": "مكيف ال جي سبليت ذو كفاءة تبريد فائقة بفضل محرك الإنفرتر الذكي الموفر للطاقة مع فلتر مضاد للبكتيريا والغبار.",
    "descriptionEn": "LG split AC featuring superior cooling efficiency powered by smart energy-saving inverter compressor and anti-dust filter.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/0cee7eb4-49f8-43a0-a569-4a75c17b8fc4-500x500-AraSxBzW2ybMSU9nAtYUusLWCE5PHI40nXosN9Yn.webp",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 15,
    "slug": "basic-22000-21000",
    "brand": "Basic",
    "category": "split",
    "model": "21000",
    "capacity": 22000,
    "price": 3619,
    "originalPrice": 4858,
    "nameAr": "مكيف اسبلت ال جي 21000 وحدة سمارت – انفرتر – حار/بارد",
    "nameEn": "AC اسبلت LG 21000 BTU Smart – انفرتر – Hot/Cold",
    "descriptionAr": "مكيف سبليت جداري ذو كفاءة تبريد عالية وجودة ممتازة، متوافق مع شروط المواصفات السعودية SASO ومناسب للمناخ الصحراوي الحار.",
    "descriptionEn": "High-efficiency wall-mounted split AC with excellent cooling performance, compliant with SASO standards and built for hot desert climates.",
    "features": [
      {
        "ar": "كفاءة تبريد عالية في درجات الحرارة المرتفعة",
        "en": "High cooling efficiency in high ambient temperatures"
      },
      {
        "ar": "موفر للطاقة ومتوافق مع مواصفات SASO",
        "en": "Energy saving and fully compliant with SASO standards"
      },
      {
        "ar": "توزيع هواء رباعي الاتجاهات",
        "en": "4-way auto swing air distribution"
      },
      {
        "ar": "فلتر متطور لتنقية الهواء من الغبار والبكتيريا",
        "en": "Advanced anti-dust and anti-bacterial air filter"
      },
      {
        "ar": "هدوء تام أثناء التشغيل",
        "en": "Ultra-quiet operation for maximum comfort"
      }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/645d70f2-a713-413c-a890-fae7e59ce768-500x500-Di7MBw25yD9u6JbAn97ZfpO6iCBcOwJZcPvfgRBd.webp",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 16,
    "slug": "hipla-midea-18000-inverter",
    "brand": "Gree",
    "category": "split",
    "model": "Midea 18K",
    "capacity": 18000,
    "price": 2150,
    "originalPrice": 2800,
    "nameAr": "مكيف ميديا سبليت انفرتر 18000 وحدة حار/بارد",
    "nameEn": "Midea Split Inverter AC 18000 BTU Hot/Cold",
    "descriptionAr": "مكيف ميديا سبليت مع تقنية الإنفرتر الموفرة للطاقة وتبريد فائق الهدوء.",
    "descriptionEn": "Midea split AC with energy-saving inverter technology and ultra-quiet cooling.",
    "features": [
      { "ar": "توفير الطاقة", "en": "Energy Saving" },
      { "ar": "هدوء تام", "en": "Ultra Quiet" }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/TWUSRyIAL8VhC3fcsXjBnRl0mUA8ACCJKho5mxIc.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 17,
    "slug": "hipla-carrier-24000-window",
    "brand": "Elite",
    "category": "split",
    "model": "Carrier Window",
    "capacity": 24000,
    "price": 1450,
    "nameAr": "مكيف شباك كارير 24000 وحدة بارد",
    "nameEn": "Carrier Window AC 24000 BTU Cold",
    "descriptionAr": "مكيف شباك كارير عالي الكفاءة بتبريد سريع.",
    "descriptionEn": "High efficiency Carrier window AC with rapid cooling.",
    "features": [
      { "ar": "تبريد سريع", "en": "Fast Cooling" }
    ],
    "image": "https://cdn.salla.sa/ePpVAO/GdhbhGr6VL7mS8bV3Kd2C1GlH6oEIRh5mGxhIOel.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 18,
    "slug": "gree-concealed-inverter",
    "brand": "Gree",
    "category": "concealed",
    "model": "Gree Duct",
    "capacity": 36000,
    "price": 0,
    "nameAr": "مكيف جري مخفي انفرتر مع التركيب والتأسيس",
    "nameEn": "Gree Concealed Inverter AC with Installation",
    "descriptionAr": "مكيف مخفي انفرتر عالي الكفاءة يتكامل بسلاسة مع الديكور الداخلي.",
    "descriptionEn": "High-efficiency concealed inverter AC that integrates seamlessly with interior design.",
    "features": [
      { "ar": "تكامل مع الديكور", "en": "Seamless Integration" },
      { "ar": "يتطلب تسعيرة", "en": "Custom Quote" }
    ],
    "image": "/images/projects/real_residential_ac_1779986080889.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 19,
    "slug": "carrier-central-package",
    "brand": "Elite",
    "category": "central",
    "model": "Carrier Package",
    "capacity": 120000,
    "price": 0,
    "nameAr": "تكييف مركزي متكامل للمشاريع التجارية",
    "nameEn": "Complete Central AC for Commercial Projects",
    "descriptionAr": "حلول تكييف مركزية للمشاريع الكبيرة والمجمعات التجارية بأسعار منافسة.",
    "descriptionEn": "Central AC solutions for large projects and commercial complexes at competitive prices.",
    "features": [
      { "ar": "قدرة تبريد ضخمة", "en": "Massive Cooling Capacity" }
    ],
    "image": "/images/projects/real_commercial_ac_1779986043958.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 20,
    "slug": "installation-package-villa",
    "brand": "Basic",
    "category": "packages",
    "model": "Villa Package",
    "capacity": 0,
    "price": 0,
    "nameAr": "باقة تأسيس وتمديد نحاس لفيلا متكاملة",
    "nameEn": "Complete Villa Copper Extension & Installation Package",
    "descriptionAr": "باقة متكاملة لتأسيس وتمديد النحاس الأمريكي لجميع غرف الفيلا قبل البدء بالتشطيب.",
    "descriptionEn": "Complete package for American copper piping extension for all villa rooms before finishing.",
    "features": [
      { "ar": "نحاس أمريكي أصلي", "en": "Genuine American Copper" },
      { "ar": "ضمان على التمديد", "en": "Warranty on Extension" }
    ],
    "image": "/images/projects/real_residential_ac_1779986080889.png",
    "inverter": false,
    "inStock": true
  },
  {
    "id": 21,
    "slug": "commercial-ventilation-system",
    "brand": "Elite",
    "category": "ventilation",
    "model": "AirPro 5000",
    "capacity": 0,
    "price": 0,
    "nameAr": "نظام تهوية مركزي متقدم للمشاريع",
    "nameEn": "Advanced Central Ventilation System",
    "descriptionAr": "حلول تهوية مخصصة للمطاعم، المستشفيات، والمجمعات التجارية لضمان تجديد الهواء بأعلى كفاءة.",
    "descriptionEn": "Custom ventilation solutions for restaurants, hospitals, and commercial complexes.",
    "features": [
      { "ar": "تجديد هواء مستمر", "en": "Continuous Air Renewal" },
      { "ar": "فلاتر تنقية متقدمة", "en": "Advanced Purification Filters" }
    ],
    "image": "/images/projects/real_kitchen_exhaust_1779986128258.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 22,
    "slug": "crac-precision-cooling",
    "brand": "Toshiba",
    "category": "crac",
    "model": "DataCool X1",
    "capacity": 150000,
    "price": 0,
    "nameAr": "تكييف غرف السيرفرات (CRAC)",
    "nameEn": "Precision Cooling CRAC Unit",
    "descriptionAr": "وحدات تكييف دقيقة مخصصة لغرف الخوادم ومراكز البيانات لضمان درجات حرارة ورطوبة مثالية على مدار الساعة.",
    "descriptionEn": "Precision cooling units for server rooms and data centers ensuring optimal temperature and humidity 24/7.",
    "features": [
      { "ar": "تحكم دقيق بالرطوبة", "en": "Precise Humidity Control" },
      { "ar": "تشغيل متواصل 24/7", "en": "24/7 Continuous Operation" }
    ],
    "image": "/images/projects/real_server_room_ac_1779986105105.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 23,
    "slug": "chiller-air-cooled",
    "brand": "Elite",
    "category": "chiller",
    "model": "AirChiller Max",
    "capacity": 300000,
    "price": 0,
    "nameAr": "نظام تبريد مياه (تشيلر) هواء",
    "nameEn": "Air Cooled Chiller System",
    "descriptionAr": "أنظمة تبريد مركزية عملاقة (تشيلر) لتلبية احتياجات التبريد الصناعي والتجاري بأعلى مستويات توفير الطاقة.",
    "descriptionEn": "Massive central cooling systems (Chillers) for industrial and commercial needs with extreme energy efficiency.",
    "features": [
      { "ar": "توفير طاقة فائق", "en": "Super Energy Efficient" },
      { "ar": "قدرات تبريد هائلة", "en": "Massive Cooling Capacities" }
    ],
    "image": "/images/projects/chiller_ac_unit.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 24,
    "slug": "vrf-system-multi",
    "brand": "Gree",
    "category": "vrf",
    "model": "GMV6",
    "capacity": 250000,
    "price": 0,
    "nameAr": "نظام تكييف VRF متطور",
    "nameEn": "Advanced VRF Air Conditioning System",
    "descriptionAr": "أنظمة تدفق المبرد المتغير (VRF) المثالية للأبراج والمباني المتعددة الطوابق بمرونة عالية في التمديدات.",
    "descriptionEn": "Variable Refrigerant Flow (VRF) systems perfect for high-rise buildings offering extreme installation flexibility.",
    "features": [
      { "ar": "تدفق هواء ذكي", "en": "Smart Airflow" },
      { "ar": "توفير مساحات خارجية", "en": "Space-saving Outdoor Units" }
    ],
    "image": "/images/projects/vrf_product_real.png",
    "inverter": true,
    "inStock": true
  },
  {
    "id": 25,
    "slug": "commercial-maintenance-contract",
    "brand": "Basic",
    "category": "maintenance",
    "model": "Annual Service",
    "capacity": 0,
    "price": 0,
    "nameAr": "عقود الصيانة الدورية الشاملة",
    "nameEn": "Comprehensive Annual Maintenance Contract",
    "descriptionAr": "عقود صيانة مخصصة للمشاريع الكبيرة والمنشآت التجارية لضمان عمل أجهزة التكييف بكفاءة عالية طوال العام.",
    "descriptionEn": "Customized maintenance contracts for commercial facilities ensuring high-efficiency operation year-round.",
    "features": [
      { "ar": "استجابة سريعة للأعطال", "en": "Rapid Breakdown Response" },
      { "ar": "فريق فني متخصص", "en": "Specialized Technical Team" }
    ],
    "image": "/images/projects/real_commercial_ac_1779986043958.png",
    "inverter": false,
    "inStock": true
  }
];
