'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import Logo from '@/components/ui/Logo';
import { Phone, Mail, Clock, MapPin, Award } from 'lucide-react';
import { services } from '@/data/services';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface FooterLink {
  key: string;
  href: string;
}

const COMPANY_LINKS: FooterLink[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
];

// Simple inline SVG icons for socials to avoid extra deps
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.959-.289.089-.05.19-.078.292-.078.15 0 .291.058.399.165.12.12.184.268.184.42 0 .22-.12.4-.343.511-.3.15-.64.27-.959.36-.12.03-.24.06-.36.1-.21.06-.42.15-.58.3-.18.16-.28.36-.3.57v.03c-.003.04-.004.08-.004.12.3.36.54.69.84.98.48.45 1.02.75 1.5.84.12.03.24.04.35.04.5 0 .84-.19.96-.37a.49.49 0 01.42-.22c.18 0 .36.12.42.3.06.18.12.39.12.57 0 .15-.03.3-.09.42-.48.93-1.77 1.23-2.34 1.35h-.06c-.12.33-.24.66-.39.99-.45.96-1.14 1.89-2.22 2.62C16.06 22.38 14.16 23 12 23c-2.16 0-4.05-.62-5.52-1.8-1.08-.87-1.77-1.8-2.22-2.62-.15-.33-.27-.66-.39-.99h-.06c-.57-.12-1.86-.42-2.34-1.35a1.62 1.62 0 01-.09-.42c0-.18.06-.39.12-.57a.47.47 0 01.42-.3.49.49 0 01.42.22c.12.18.46.37.96.37.11 0 .23-.01.35-.04.48-.09 1.02-.39 1.5-.84.3-.29.54-.62.84-.98.001-.04 0-.08-.003-.12v-.03c-.02-.21-.12-.41-.3-.57-.16-.15-.37-.24-.58-.3-.12-.04-.24-.07-.36-.1-.32-.09-.66-.21-.96-.36-.22-.11-.34-.29-.34-.51 0-.15.06-.3.18-.42a.55.55 0 01.4-.17c.1 0 .2.03.29.08.3.17.66.31.96.29.2 0 .33-.05.4-.09a6.25 6.25 0 01-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.86 1.069 11.216.793 12.206.793z" />
    </svg>
  );
}

const SOCIALS = [
  { name: 'Twitter / X', href: '#', Icon: TwitterIcon },
  { name: 'Instagram', href: '#', Icon: InstagramIcon },
  { name: 'Snapchat', href: '#', Icon: SnapchatIcon },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Footer() {
  const t = useTranslations('footer');
  const tCommon = useTranslations('common');
  const tServices = useTranslations('services');
  const tNav = useTranslations('nav');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const pathname = usePathname();
  if (pathname && (pathname.includes('/studio') || pathname.includes('/studio/'))) {
    return null;
  }

  return (
    <footer dir={isRTL ? 'rtl' : 'ltr'} style={{ backgroundColor: '#1E293B' }}>
      {/* ---- Main footer grid ---- */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ================================================================= */}
          {/* COLUMN 1 – Brand                                                  */}
          {/* ================================================================= */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-10 sm:h-12 w-auto" />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              {t('description')}
            </p>

            {/* Socials */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {tCommon('followUs')}
              </h4>
              <div className="mt-3 flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-[#00E5FF] hover:text-[#0B1120] hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* COLUMN 2 – Services (Quick Links)                                 */}
          {/* ================================================================= */}
          <div>
            <h3 className="text-base font-bold text-white">{t('quickLinks')}</h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-[#00E5FF]" />
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#00E5FF]"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-[#00E5FF] opacity-0 transition-opacity group-hover:opacity-100" />
                    {isRTL ? service.nameAr : service.nameEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================================= */}
          {/* COLUMN 3 – Company Links                                          */}
          {/* ================================================================= */}
          <div>
            <h3 className="text-base font-bold text-white">
              {isRTL ? 'روابط مهمة' : 'Company'}
            </h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-[#00E5FF]" />
            <ul className="mt-5 space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#00E5FF]"
                  >
                    <span className="inline-block h-1 w-1 rounded-full bg-[#00E5FF] opacity-0 transition-opacity group-hover:opacity-100" />
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================================================================= */}
          {/* COLUMN 4 – Contact Info                                           */}
          {/* ================================================================= */}
          <div>
            <h3 className="text-base font-bold text-white">{t('contactInfo')}</h3>
            <div className="mt-1 h-0.5 w-10 rounded-full bg-[#00E5FF]" />
            <ul className="mt-5 space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00E5FF]" />
                <span>
                  {isRTL
                    ? 'الرياض، المملكة العربية السعودية'
                    : 'Riyadh, Saudi Arabia'}
                </span>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+966552239595"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#00E5FF]"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-[#00E5FF]" />
                  <span dir="ltr">+966 55 223 9595</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@altakeefsa.com"
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-[#00E5FF]"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-[#00E5FF]" />
                  <span>info@altakeefsa.com</span>
                </a>
              </li>

              {/* Working hours */}
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00E5FF]" />
                <div className="flex flex-col gap-0.5">
                  <span>{tCommon('workingHoursValue')}</span>
                  <span>{tCommon('fridayClosed')}</span>
                </div>
              </li>
            </ul>

            {/* Vision 2030 Badge */}
            <div className="mt-10 flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {isRTL ? 'توافق تام مع رؤية المملكة' : 'Aligned with Saudi Vision'}
              </span>
              <div className="mt-2 transition-transform hover:scale-105">
                <Image 
                  src="/images/vision2030.png"
                  alt="Vision 2030"
                  width={340}
                  height={170}
                  className="w-auto h-36 sm:h-40 object-contain"
                  style={{ filter: 'invert(1) brightness(2)', mixBlendMode: 'screen' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* BOTTOM BAR                                                        */}
      {/* ================================================================= */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()}{' '}
            {isRTL
              ? 'مؤسسة أعمال التكييف. '
              : 'Al-Takeef Contracting Est. '}
            {tCommon('allRightsReserved')}.
          </p>

          <p className="text-xs text-white/40">
            {isRTL
              ? '❤️ صُنع بحب في المملكة العربية السعودية'
              : 'Made with ❤️ in Saudi Arabia'}
          </p>
        </div>
      </div>
    </footer>
  );
}
