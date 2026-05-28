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
      {/* TOP UTILITY BAR                                                   */}
      {/* ================================================================= */}
      <div
        className={`hidden xl:block transition-all duration-500 ${
          isScrolled
            ? 'h-0 opacity-0 overflow-hidden'
            : 'h-auto opacity-100'
        }`}
        style={{ backgroundColor: '#1E293B' }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white/90">
          {/* Left side – contact details */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+966552239595"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="h-3.5 w-3.5" />
              <span dir="ltr">0552239595</span>
            </a>
            <a
              href="mailto:info@altakeef.com"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>info@altakeef.com</span>
            </a>
          </div>

          {/* Right side – working hours */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {tCommon('workingHoursValue')}
            </span>
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
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-4 lg:px-6 py-3 gap-4">
          {/* ---- Logo ---- */}
          <Link href="/" className="relative flex-shrink-0" aria-label="Al-Takeef Home">
            <Logo className="h-10 sm:h-12 w-[120px] sm:w-[140px] xl:w-[160px] object-contain" />
          </Link>

          {/* ---- Desktop Nav Links ---- */}
          <ul className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 rounded-lg px-2 2xl:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap
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
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        activeDropdown === item.key ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  {/* Active indicator line */}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 2xl:inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#00E5FF]"
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
                              <span className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
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
          <div className="hidden xl:flex items-center gap-2 2xl:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <div className="w-px h-6 bg-white/10 mx-1 hidden 2xl:block"></div> {/* Separator */}
            <a
              href="tel:+966552239595"
              className="hidden 2xl:inline-flex items-center gap-2 rounded-xl bg-[#00E5FF] px-4 2xl:px-5 py-2 2xl:py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#2489ba] hover:shadow-lg hover:shadow-[#00E5FF]/25 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              {tCommon('callNow')}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D42B2B] px-4 2xl:px-5 py-2 2xl:py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#b82424] hover:shadow-lg hover:shadow-[#D42B2B]/25 active:scale-95"
            >
              {tCommon('getQuote')}
            </Link>
          </div>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 rounded-xl p-2 text-white transition-colors hover:bg-[#0F172A] xl:hidden"
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
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
              } z-40 w-[85vw] max-w-sm bg-[#111827] shadow-2xl xl:hidden overflow-y-auto`}
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
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#2489ba] active:scale-95"
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
                  <a href="tel:+966552239595" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span dir="ltr">0552239595</span>
                  </a>
                  <a href="mailto:info@altakeef.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>info@altakeef.com</span>
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
