// =============================================================================
// Al-Takeef Navigation Data
// =============================================================================

export interface NavChild {
  labelAr: string;
  labelEn: string;
  href: string;
  descriptionAr?: string;
  descriptionEn?: string;
  icon?: string;
}

export interface NavItem {
  id: string;
  labelAr: string;
  labelEn: string;
  href: string;
  children?: NavChild[];
}

export const mainNavigation: NavItem[] = [
  {
    id: 'home',
    labelAr: 'الرئيسية',
    labelEn: 'Home',
    href: '/',
  },
  {
    id: 'services',
    labelAr: 'خدماتنا',
    labelEn: 'Services',
    href: '/services',
    children: [
      {
        labelAr: 'تكييف VRF',
        labelEn: 'VRF Air Conditioning',
        href: '/services/vrf',
        descriptionAr: 'حلول تكييف VRF للمباني التجارية',
        descriptionEn: 'VRF solutions for commercial buildings',
        icon: 'Building2',
      },
      {
        labelAr: 'تكييف مركزي',
        labelEn: 'Central Air Conditioning',
        href: '/services/central',
        descriptionAr: 'أنظمة تكييف مركزي للفلل والقصور',
        descriptionEn: 'Central AC systems for villas and palaces',
        icon: 'Wind',
      },
      {
        labelAr: 'تكييف مخفي',
        labelEn: 'Concealed Duct Split AC',
        href: '/services/concealed-duct',
        descriptionAr: 'تكييف مخفي داخل السقف المستعار',
        descriptionEn: 'Concealed AC within false ceilings',
        icon: 'EyeOff',
      },
      {
        labelAr: 'تكييف شيلر',
        labelEn: 'Chiller AC Systems',
        href: '/services/chiller',
        descriptionAr: 'أنظمة شيلر للمشاريع الضخمة',
        descriptionEn: 'Chiller systems for mega projects',
        icon: 'Snowflake',
      },
      {
        labelAr: 'وحدات CRAC',
        labelEn: 'CRAC Units',
        href: '/services/crac',
        descriptionAr: 'تكييف مراكز البيانات',
        descriptionEn: 'Data center cooling solutions',
        icon: 'Server',
      },
      {
        labelAr: 'مكيف جداري سبليت',
        labelEn: 'Split Wall AC',
        href: '/services/split-wall',
        descriptionAr: 'مكيفات سبليت بأفضل الأسعار',
        descriptionEn: 'Split ACs at the best prices',
        icon: 'AirVent',
      },
      {
        labelAr: 'مكيف كاسيت',
        labelEn: 'Cassette AC',
        href: '/services/cassette',
        descriptionAr: 'مكيفات كاسيت سقفية',
        descriptionEn: 'Ceiling cassette air conditioners',
        icon: 'LayoutGrid',
      },
      {
        labelAr: 'صيانة التكييف',
        labelEn: 'AC Maintenance',
        href: '/services/maintenance',
        descriptionAr: 'صيانة دورية وإصلاح أعطال',
        descriptionEn: 'Periodic maintenance and repairs',
        icon: 'Wrench',
      },
      {
        labelAr: 'حلول التهوية',
        labelEn: 'Ventilation Solutions',
        href: '/services/ventilation',
        descriptionAr: 'أنظمة تهوية ميكانيكية',
        descriptionEn: 'Mechanical ventilation systems',
        icon: 'Fan',
      },
    ],
  },
  {
    id: 'products',
    labelAr: 'المنتجات',
    labelEn: 'Products',
    href: '/products',
    children: [
      {
        labelAr: 'مكيفات سبليت',
        labelEn: 'Split ACs',
        href: '/products?category=split',
        descriptionAr: 'مكيفات جدارية من أفضل الماركات',
        descriptionEn: 'Wall-mounted ACs from top brands',
        icon: 'AirVent',
      },
      {
        labelAr: 'مكيفات كاسيت',
        labelEn: 'Cassette ACs',
        href: '/products?category=cassette',
        descriptionAr: 'مكيفات سقفية للمحلات والمكاتب',
        descriptionEn: 'Ceiling ACs for shops and offices',
        icon: 'LayoutGrid',
      },
      {
        labelAr: 'مكيفات مخفي',
        labelEn: 'Concealed ACs',
        href: '/products?category=concealed',
        descriptionAr: 'دكت سبليت مخفي',
        descriptionEn: 'Concealed duct split',
        icon: 'EyeOff',
      },
      {
        labelAr: 'تكييف مركزي',
        labelEn: 'Central ACs',
        href: '/products?category=central',
        descriptionAr: 'وحدات تكييف مركزي',
        descriptionEn: 'Central AC units',
        icon: 'Wind',
      },
    ],
  },
  {
    id: 'projects',
    labelAr: 'مشاريعنا',
    labelEn: 'Projects',
    href: '/projects',
  },
  {
    id: 'about',
    labelAr: 'من نحن',
    labelEn: 'About',
    href: '/about',
  },
  {
    id: 'contact',
    labelAr: 'تواصل معنا',
    labelEn: 'Contact',
    href: '/contact',
  },
];

// ─── Footer Navigation ────────────────────────────────────────────────────────

export interface FooterSection {
  titleAr: string;
  titleEn: string;
  links: {
    labelAr: string;
    labelEn: string;
    href: string;
  }[];
}

export const footerNavigation: FooterSection[] = [
  {
    titleAr: 'خدماتنا',
    titleEn: 'Our Services',
    links: [
      { labelAr: 'تكييف VRF', labelEn: 'VRF AC', href: '/services/vrf' },
      { labelAr: 'تكييف مركزي', labelEn: 'Central AC', href: '/services/central' },
      { labelAr: 'تكييف مخفي', labelEn: 'Concealed Duct', href: '/services/concealed-duct' },
      { labelAr: 'تكييف شيلر', labelEn: 'Chiller AC', href: '/services/chiller' },
      { labelAr: 'وحدات CRAC', labelEn: 'CRAC Units', href: '/services/crac' },
      { labelAr: 'صيانة التكييف', labelEn: 'AC Maintenance', href: '/services/maintenance' },
    ],
  },
  {
    titleAr: 'المنتجات',
    titleEn: 'Products',
    links: [
      { labelAr: 'مكيفات سبليت', labelEn: 'Split ACs', href: '/products?category=split' },
      { labelAr: 'مكيفات كاسيت', labelEn: 'Cassette ACs', href: '/products?category=cassette' },
      { labelAr: 'مكيفات مخفي', labelEn: 'Concealed ACs', href: '/products?category=concealed' },
      { labelAr: 'تكييف مركزي', labelEn: 'Central ACs', href: '/products?category=central' },
    ],
  },
  {
    titleAr: 'الشركة',
    titleEn: 'Company',
    links: [
      { labelAr: 'من نحن', labelEn: 'About Us', href: '/about' },
      { labelAr: 'مشاريعنا', labelEn: 'Projects', href: '/projects' },
      { labelAr: 'تواصل معنا', labelEn: 'Contact Us', href: '/contact' },
    ],
  },
  {
    titleAr: 'الدعم',
    titleEn: 'Support',
    links: [
      { labelAr: 'سياسة الخصوصية', labelEn: 'Privacy Policy', href: '/privacy' },
      { labelAr: 'الشروط والأحكام', labelEn: 'Terms & Conditions', href: '/terms' },
      { labelAr: 'الأسئلة الشائعة', labelEn: 'FAQ', href: '/faq' },
    ],
  },
];
