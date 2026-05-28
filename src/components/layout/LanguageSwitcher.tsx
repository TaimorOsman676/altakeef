'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/10"
      aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
    </button>
  );
}
