// =============================================================================
// Al-Takeef Company Data
// =============================================================================

export interface WorkingHours {
  dayAr: string;
  dayEn: string;
  hoursAr: string;
  hoursEn: string;
  isClosed: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  labelAr: string;
  labelEn: string;
}

export interface CompanyStats {
  projects: number;
  years: number;
  satisfaction: number;
  clients: number;
}

export interface Brand {
  name: string;
  slug: string;
  logo: string;
  nameAr: string;
}

export interface CompanyInfo {
  name: {
    ar: string;
    en: string;
    short: {
      ar: string;
      en: string;
    };
  };
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: {
    ar: string;
    en: string;
    street: {
      ar: string;
      en: string;
    };
    city: {
      ar: string;
      en: string;
    };
    zip: string;
  };
  areas: {
    ar: string[];
    en: string[];
  };
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  workingHours: WorkingHours[];
  socialLinks: SocialLink[];
  stats: CompanyStats;
  brands: Brand[];
  crNumber: string;
  vatNumber: string;
}

export const companyInfo: CompanyInfo = {
  name: {
    ar: 'مؤسسة أعمال التكييف',
    en: 'Al-Takeef Contracting Establishment',
    short: {
      ar: 'أعمال التكييف',
      en: 'Al-Takeef',
    },
  },

  phone: '+966552239595',
  phoneDisplay: '0552239595',
  whatsapp: 'https://wa.me/966552239595?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A3%D8%B9%D9%85%D8%A7%D9%84%20%D8%A5%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D9%88%D9%84%20%D8%B9%D9%84%D9%8A%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%85%D8%B4%D8%B1%D9%85%D8%B9%D9%8A.',
  email: 'info@altakeefsa.com',

  address: {
    ar: 'البركة، 7234، الخرج 16245',
    en: 'Al Barakah, 7234, Al-Kharj 16245',
    street: {
      ar: 'حي البركة',
      en: 'Al Barakah District',
    },
    city: {
      ar: 'الخرج',
      en: 'Al-Kharj',
    },
    zip: '16245',
  },

  areas: {
    ar: ['الرياض', 'الخرج'],
    en: ['Riyadh', 'Al-Kharj'],
  },

  rating: 5.0,
  reviewCount: 17,
  googleMapsUrl: 'https://maps.google.com/?cid=PLACEHOLDER',

  workingHours: [
    { dayAr: 'السبت', dayEn: 'Saturday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الأحد', dayEn: 'Sunday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الإثنين', dayEn: 'Monday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الثلاثاء', dayEn: 'Tuesday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الأربعاء', dayEn: 'Wednesday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الخميس', dayEn: 'Thursday', hoursAr: '8:00 ص - 6:00 م', hoursEn: '8:00 AM - 6:00 PM', isClosed: false },
    { dayAr: 'الجمعة', dayEn: 'Friday', hoursAr: 'مغلق', hoursEn: 'Closed', isClosed: true },
  ],

  socialLinks: [
    {
      platform: 'twitter',
      url: 'https://twitter.com/altakeef',
      icon: 'Twitter',
      labelAr: 'تويتر',
      labelEn: 'Twitter',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com/altakeef',
      icon: 'Instagram',
      labelAr: 'انستقرام',
      labelEn: 'Instagram',
    },
    {
      platform: 'snapchat',
      url: 'https://snapchat.com/add/altakeef',
      icon: 'Camera',
      labelAr: 'سناب شات',
      labelEn: 'Snapchat',
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com/@altakeef',
      icon: 'Music',
      labelAr: 'تيك توك',
      labelEn: 'TikTok',
    },
  ],

  stats: {
    projects: 500,
    years: 10,
    satisfaction: 100,
    clients: 300,
  },

  brands: [
    { name: 'Gree', slug: 'gree', logo: '/images/brands/gree.webp', nameAr: 'قري' },
    { name: 'Toshiba', slug: 'toshiba', logo: '/images/brands/toshiba.webp', nameAr: 'توشيبا' },
    { name: 'Basic', slug: 'basic', logo: '/images/brands/basic.webp', nameAr: 'بيسك' },
    { name: 'Elite', slug: 'elite', logo: '/images/brands/elite.webp', nameAr: 'إيليت' },
  ],

  crNumber: 'XXXXXXXXXX',
  vatNumber: 'XXXXXXXXXXXXXXX',
};

// ─── Helper exports ────────────────────────────────────────────────────────────

export const { phone, phoneDisplay, whatsapp, email, stats, brands } = companyInfo;

export function getWorkingHoursToday(): WorkingHours {
  const dayIndex = new Date().getDay();
  // JS: 0=Sun, 1=Mon ... 6=Sat → our array: 0=Sat, 1=Sun ... 6=Fri
  const mappedIndex = dayIndex === 6 ? 0 : dayIndex; // Sat=0 in our array
  return companyInfo.workingHours[mappedIndex];
}

export function isOpenNow(): boolean {
  const today = getWorkingHoursToday();
  if (today.isClosed) return false;
  const hour = new Date().getHours();
  return hour >= 8 && hour < 18;
}
