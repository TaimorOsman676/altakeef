'use client';

import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ className = '', width = 160, height = 48 }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image 
        src="/images/company_logo.png" 
        alt="Aamal Al-Takeef Logo" 
        width={typeof width === 'number' ? width + 60 : 220} 
        height={typeof height === 'number' ? height + 20 : 75} 
        className="object-contain w-full h-full scale-[1.25]"
        priority
      />
    </div>
  );
}
