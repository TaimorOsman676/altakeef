'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ className = '', width = 160, height = 48 }: LogoProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image 
        src="/images/company_logo.png" 
        alt={isRTL ? "شعار مؤسسة أعمال التكييف للمقاولات بالرياض والخرج" : "Al-Takeef HVAC Contracting in Riyadh & Al-Kharj - Logo"} 
        width={typeof width === 'number' ? width + 60 : 220} 
        height={typeof height === 'number' ? height + 20 : 75} 
        className="object-contain w-full h-full scale-[1.25]"
        priority
      />
    </div>
  );
}
