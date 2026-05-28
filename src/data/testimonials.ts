// =============================================================================
// Al-Takeef Testimonials / Reviews Data
// =============================================================================

export interface Testimonial {
  id: number;
  nameAr: string;
  nameEn: string;
  rating: number;
  textAr: string;
  textEn: string;
  date: string;
  source: 'google';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    nameAr: 'أحمد الشمري',
    nameEn: 'Ahmed Al-Shamri',
    rating: 5,
    textAr: 'خدمة ممتازة وسرعة في التنفيذ. تم تركيب التكييف المركزي في الفيلا بكل احترافية. أنصح بهم بشدة.',
    textEn: 'Excellent service and quick execution. The central AC was installed in the villa with great professionalism. Highly recommended.',
    date: '2025-03-15',
    source: 'google',
  },
  {
    id: 2,
    nameAr: 'محمد العتيبي',
    nameEn: 'Mohammed Al-Otaibi',
    rating: 5,
    textAr: 'أفضل مقاول تكييف تعاملت معه. الأسعار مناسبة والجودة عالية جداً. فريق العمل محترف ومنظم.',
    textEn: 'Best HVAC contractor I have dealt with. Reasonable prices and very high quality. The team is professional and organized.',
    date: '2025-02-20',
    source: 'google',
  },
  {
    id: 3,
    nameAr: 'عبدالله الغامدي',
    nameEn: 'Abdullah Al-Ghamdi',
    rating: 5,
    textAr: 'تم تنفيذ مشروع التكييف في المكتب بشكل ممتاز. التزام بالمواعيد وجودة عالية في التركيب والتشطيب.',
    textEn: 'The office AC project was executed excellently. On-time delivery with high quality installation and finishing.',
    date: '2025-01-10',
    source: 'google',
  },
  {
    id: 4,
    nameAr: 'خالد الدوسري',
    nameEn: 'Khaled Al-Dosari',
    rating: 5,
    textAr: 'صيانة دورية ممتازة. فريق الصيانة محترف ويصل في الموعد المحدد. الأسعار معقولة مقارنة بالجودة.',
    textEn: 'Excellent periodic maintenance. The maintenance team is professional and arrives on time. Prices are reasonable for the quality.',
    date: '2024-12-05',
    source: 'google',
  },
  {
    id: 5,
    nameAr: 'فهد السبيعي',
    nameEn: 'Fahad Al-Subai',
    rating: 5,
    textAr: 'تعاملت معهم في مشروع تجاري كبير. النتيجة فاقت التوقعات. تصنيع مجاري الهواء بجودة عالية جداً.',
    textEn: 'Worked with them on a large commercial project. Results exceeded expectations. Duct manufacturing at very high quality.',
    date: '2024-11-18',
    source: 'google',
  },
  {
    id: 6,
    nameAr: 'سعد القحطاني',
    nameEn: 'Saad Al-Qahtani',
    rating: 5,
    textAr: 'خدمة عملاء ممتازة واستجابة سريعة. تم إصلاح العطل في نفس اليوم. شكراً لفريق أعمال التكييف.',
    textEn: 'Excellent customer service and fast response. The fault was fixed the same day. Thanks to the Al-Takeef team.',
    date: '2024-10-22',
    source: 'google',
  },
];
