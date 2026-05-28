'use client';

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
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dynamic Background subtle glow */}
      <circle cx="60" cy="60" r="40" fill="url(#glowGradient)" opacity="0.15" />

      {/* Hexagon/Cube Base */}
      <path 
        d="M60 20L94.641 40V80L60 100L25.359 80V40L60 20Z" 
        fill="url(#primaryGradient)" 
        fillOpacity="0.1" 
        stroke="url(#primaryGradient)" 
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Stylized Airflow/Wind Lines */}
      <path 
        d="M35 50C45 40 65 40 85 50" 
        stroke="#00E5FF" 
        strokeWidth="4" 
        strokeLinecap="round" 
      />
      <path 
        d="M35 60C50 55 70 55 85 60" 
        stroke="#FFFFFF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.8"
      />
      <path 
        d="M45 70C55 68 65 68 75 70" 
        stroke="#00E5FF" 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.6"
      />

      {/* Snowflake / Cooling Center Element */}
      <circle cx="60" cy="60" r="6" fill="#FFFFFF" />
      <path d="M60 48V54M60 66V72M48 60H54M66 60H72" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M51.5 51.5L55.7 55.7M68.5 68.5L64.3 64.3M68.5 51.5L64.3 55.7M51.5 68.5L55.7 64.3" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Text Group */}
      <g transform={isRTL ? "translate(380, 0)" : "translate(120, 0)"} textAnchor={isRTL ? "end" : "start"}>
        {/* Main Title */}
        <text 
          x="0" 
          y="65" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="46" 
          fill="#FFFFFF"
          letterSpacing="0.02em"
        >
          {isRTL ? 'أعمال التكييف' : 'Aamal Al-Takeef'}
        </text>
        
        {/* Subtitle */}
        <text 
          x="0" 
          y="95" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="600" 
          fontSize="18" 
          fill="#00E5FF"
          letterSpacing={isRTL ? "0em" : "0.3em"}
          opacity="0.9"
        >
          {isRTL ? 'لأنظمة التبريد والتكييف' : 'HVAC SOLUTIONS'}
        </text>
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="primaryGradient" x1="25" y1="20" x2="95" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#0B4272" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(40)">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#00E5FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
