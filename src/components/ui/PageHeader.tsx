import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface PageHeaderProps {
  titleKey: string;
  subtitleKey: string;
  namespace: string;
}

export default function PageHeader({ titleKey, subtitleKey, namespace }: PageHeaderProps) {
  const t = useTranslations(namespace);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0B1120]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/page-header-bg.png" 
          alt="Header Background" 
          fill 
          priority
          className="object-cover opacity-50 mix-blend-overlay"
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/90 via-[#0B1120]/60 to-[#0B1120]"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1.5px,transparent_1.5px)] [background-size:24px_24px] bg-repeat opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          {t(titleKey)}
        </h1>
        <p className="text-lg md:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
          {t(subtitleKey)}
        </p>
      </div>
    </section>
  );
}
