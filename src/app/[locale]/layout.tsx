import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import '../styles.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { seoData } from '@/data/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const currentLocale = resolvedParams.locale === 'ar' ? 'ar' : 'en';
  return {
    title: seoData.home[currentLocale].title,
    description: seoData.home[currentLocale].description,
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased text-white bg-[#111827] min-h-screen flex flex-col ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
