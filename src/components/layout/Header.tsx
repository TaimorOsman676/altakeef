'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import Logo from '@/components/ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, Mail, Clock } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { services } from '@/data/services';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface NavItem {
  key: string;
  href: string;
  hasDropdown?: boolean;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services', hasDropdown: true },
  { key: 'store', href: '/store' },
  { key: 'projects', href: '/projects' },
  { key: 'blog', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Header() {
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const tServices = useTranslations('services');
  const locale = useLocale();
  const pathname = usePathname();
  const isRTL = locale === 'ar';

  if (pathname && (pathname.includes('/studio') || pathname.includes('/studio/'))) {
    return null;
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // ---- scroll listener ----
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---- lock body scroll when drawer open ----
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  // ---- helpers ----
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  // -----------------------------------------------------------------------
  // JSX
  // -----------------------------------------------------------------------

  return (
    <header className="fixed inset-x-0 top-0 z-50" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ================================================================= */}
      {/* TOP UTILITY BAR (SUB HEADER)                                      */}
      {/* ================================================================= */}
      <div
        className={`transition-all duration-500 bg-[#1E293B] ${
          isScrolled
            ? 'h-0 opacity-0 overflow-hidden'
            : 'h-auto opacity-100'
        }`}
      >
        <div className="mx-auto flex flex-col sm:flex-row items-center justify-between max-w-[90rem] px-4 py-2 gap-2 sm:gap-4 text-xs text-white/90">
          
          {/* Left / Top Mobile: Greeting Message & Social */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="font-semibold text-[#00E5FF] tracking-wide">
              {isRTL ? 'مرحباً بكم في مؤسسة أعمال التكييف للمقاولات' : 'Welcome to Al-Takeef Contracting Est.'}
            </span>
            <div className="hidden md:flex items-center gap-3 border-s border-white/20 ps-4">
              <a href="#" className="hover:text-[#00E5FF] transition-colors" aria-label={isRTL ? "إنستغرام مؤسسة أعمال التكييف" : "Al-Takeef Instagram"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="hover:text-[#00E5FF] transition-colors" aria-label={isRTL ? "تويتر / إكس مؤسسة أعمال التكييف" : "Al-Takeef Twitter / X"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="hover:text-[#00E5FF] transition-colors" aria-label={isRTL ? "فيسبوك مؤسسة أعمال التكييف" : "Al-Takeef Facebook"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Right / Bottom Mobile: Email, Phone & Button */}
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="mailto:info@altakeefsa.com" className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>info@altakeefsa.com</span>
            </a>
            <a 
              href="tel:+966552239595" 
              onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_two) { (window as any).gtag_report_conversion_two('tel:+966552239595'); } }}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors" 
              aria-label={isRTL ? "اتصل بنا على الرقم 966552239595+" : "Call us at +966552239595"}
            >
              <Phone className="h-3.5 w-3.5" />
              <span dir="ltr">0552239595</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#D42B2B] px-4 py-1.5 text-[11px] sm:text-xs font-bold text-white transition-all hover:bg-[#b82424] shadow-lg shadow-[#D42B2B]/20 active:scale-95 whitespace-nowrap"
            >
              {tCommon('getQuote')}
            </Link>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* MAIN NAVIGATION BAR                                               */}
      {/* ================================================================= */}
      <nav
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-[#111827]/80 backdrop-blur-xl shadow-lg shadow-black/5'
            : 'bg-[#111827] shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 lg:px-4 xl:px-6 py-3 gap-2 xl:gap-4">
          {/* ---- Logo ---- */}
          <Link href="/" className="relative flex-shrink-0" aria-label="Al-Takeef Home">
            <Logo className="h-10 sm:h-12 w-[110px] sm:w-[130px] xl:w-[160px] object-contain" />
          </Link>

          {/* ---- Desktop Nav Links ---- */}
          <ul className="hidden lg:flex items-center gap-0 xl:gap-0.5 2xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-0.5 xl:gap-1 rounded-lg px-1.5 xl:px-2 2xl:px-3 py-2 text-[12px] xl:text-[13px] 2xl:text-sm font-medium transition-colors whitespace-nowrap
                    ${
                      isActive(item.href)
                        ? 'text-[#00E5FF]'
                        : 'text-white hover:text-[#00E5FF]'
                    }
                  `}
                >
                  {t(item.key)}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`h-3 w-3 xl:h-3.5 xl:w-3.5 transition-transform duration-300 ${
                        activeDropdown === item.key ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {/* Active indicator line */}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-1.5 2xl:inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#00E5FF]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>

                {/* ---- Services Dropdown ---- */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} z-50 mt-2 w-[420px] rounded-2xl border border-white/10 bg-[#111827] p-4 shadow-xl shadow-black/10`}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              className="group flex flex-col gap-1 rounded-xl p-3 transition-colors hover:bg-[#0F172A]"
                            >
                              <span className="text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors">
                                {isRTL ? service.nameAr : service.nameEn}
                              </span>
                              <span className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                                {isRTL ? service.descriptionAr : service.descriptionEn}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* View all link */}
                        <div className="mt-3 border-t border-white/10 pt-3">
                          <Link
                            href="/services"
                            className="flex items-center justify-center gap-1 text-sm font-semibold text-[#00E5FF] transition-colors hover:text-white"
                          >
                            {tServices('viewAllServices')}
                            <ChevronDown
                              className={`h-3.5 w-3.5 ${isRTL ? 'rotate-90' : '-rotate-90'}`}
                            />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* ---- Desktop CTA Buttons & Lang Switcher ---- */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <div className="w-px h-6 bg-white/10 mx-1 hidden 2xl:block"></div> {/* Separator */}
            <a
              href="tel:+966552239595"
              onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_two) { (window as any).gtag_report_conversion_two('tel:+966552239595'); } }}
              className="hidden xl:inline-flex items-center gap-1.5 xl:gap-2 rounded-xl bg-[#00E5FF] px-2 xl:px-4 2xl:px-5 py-1.5 xl:py-2 2xl:py-2.5 text-[11px] xl:text-[13px] 2xl:text-sm font-bold text-white transition-all duration-300 hover:bg-[#2489ba] hover:shadow-lg hover:shadow-[#00E5FF]/25 active:scale-95"
              aria-label={isRTL ? "اتصل بمؤسسة أعمال التكييف" : "Call Al-Takeef"}
            >
              <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
              {tCommon('callNow')}
            </a>
          </div>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 rounded-xl p-2 text-white transition-colors hover:bg-[#0F172A] lg:hidden"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ================================================================= */}
      {/* MOBILE DRAWER                                                     */}
      {/* ================================================================= */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className={`fixed inset-y-0 ${
                isRTL ? 'left-0' : 'right-0'
              } z-40 w-[85vw] max-w-sm bg-[#111827] shadow-2xl lg:hidden overflow-y-auto`}
            >
              <div className="flex flex-col p-6 pt-20">
                {/* Nav links */}
                <nav className="flex flex-col gap-1">
                  {NAV_ITEMS.map((item, i) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() =>
                              setActiveDropdown(
                                activeDropdown === item.key ? null : item.key
                              )
                            }
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors
                              ${
                                isActive(item.href)
                                  ? 'bg-[#0B1120] text-[#00E5FF]'
                                  : 'text-white hover:bg-[#0F172A]'
                              }
                            `}
                          >
                            {t(item.key)}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                activeDropdown === item.key ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeDropdown === item.key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-1 py-2 ps-4">
                                  {services.map((service) => (
                                    <Link
                                      key={service.id}
                                      href={`/services/${service.slug}`}
                                      onClick={closeMobile}
                                      className="rounded-lg px-4 py-2.5 text-sm text-[#94A3B8] transition-colors hover:bg-[#0F172A] hover:text-[#00E5FF]"
                                    >
                                      {isRTL ? service.nameAr : service.nameEn}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMobile}
                          className={`flex items-center rounded-xl px-4 py-3 text-base font-medium transition-colors
                            ${
                              isActive(item.href)
                                ? 'bg-[#0B1120] text-[#00E5FF]'
                                : 'text-white hover:bg-[#0F172A]'
                            }
                          `}
                        >
                          {t(item.key)}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="tel:+966552239595"
                    onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_two) { (window as any).gtag_report_conversion_two('tel:+966552239595'); } }}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#2489ba] active:scale-95"
                    aria-label={isRTL ? "اتصل بمؤسسة أعمال التكييف" : "Call Al-Takeef"}
                  >
                    <Phone className="h-5 w-5" />
                    {tCommon('callNow')}
                  </a>
                  <Link
                    href="/contact"
                    onClick={closeMobile}
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#D42B2B] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#b82424] active:scale-95"
                  >
                    {tCommon('getQuote')}
                  </Link>
                </div>

                {/* Mobile utility info */}
                <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-[#94A3B8]">
                  <a 
                    href="tel:+966552239595" 
                    onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag_report_conversion_two) { (window as any).gtag_report_conversion_two('tel:+966552239595'); } }}
                    className="flex items-center gap-2" 
                    aria-label={isRTL ? "اتصل بنا على الرقم 966552239595+" : "Call us at +966552239595"}
                  >
                    <Phone className="h-4 w-4" />
                    <span dir="ltr">0552239595</span>
                  </a>
                  <a href="mailto:info@altakeefsa.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>info@altakeefsa.com</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{tCommon('workingHoursValue')}</span>
                  </div>
                </div>

                {/* Language switcher (mobile) */}
                <div className="mt-6">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
