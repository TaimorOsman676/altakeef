import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Script from 'next/script';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import MobileCTAOverlay from '@/components/layout/MobileCTAOverlay';
import { IBM_Plex_Sans_Arabic, Inter } from 'next/font/google';
import '../styles.css';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans-arabic',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

import { getMetadata } from '@/data/seo';
import { headers } from 'next/headers';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const currentLocale = resolvedParams.locale === 'en' ? 'en' : 'ar';
  return getMetadata('home', currentLocale, '/');
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

  // Get current pathname from headers
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  
  // The homepage matches "", "/", "/ar", "/en", "/ar/", "/en/"
  const isHomepage = !pathname || pathname === '/' || pathname === '/ar' || pathname === '/en' || pathname === '/ar/' || pathname === '/en/';

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://www.clarity.ms; script-src-elem 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://www.clarity.ms; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://api.web3forms.com https://*.api.sanity.io https://*.apicdn.sanity.io https://*.clarity.ms; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com https://images.unsplash.com https://cdn.salla.sa https://cdn.files.salla.network https://cdn.sanity.io https://*.clarity.ms; style-src 'self' 'unsafe-inline'; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' https://www.google.com https://www.googletagmanager.com; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P83P7HJC');`
          }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xall2x6zm3");
            `
          }}
        />
        
        {isHomepage && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HVACBusiness",
                "name": "مؤسسة أعمال التكييف | Al-Takeef Contracting Establishment",
                "image": "https://www.altakeefsa.com/images/company_logo.png",
                "url": "https://www.altakeefsa.com",
                "telephone": "+966552239595",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "حي البركة",
                  "addressLocality": "الخرج",
                  "addressRegion": "منطقة الرياض",
                  "postalCode": "16245",
                  "addressCountry": "SA"
                },
                "geo": [
                  {
                    "@type": "GeoCoordinates",
                    "name": "Al-Kharj Head Office",
                    "latitude": 24.1500,
                    "longitude": 47.3000
                  },
                  {
                    "@type": "GeoCoordinates",
                    "name": "Riyadh Branch",
                    "latitude": 24.7136,
                    "longitude": 46.6753
                  }
                ],
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "Riyadh"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Al-Kharj"
                  }
                ],
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Saturday",
                      "Sunday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                  }
                ]
              })
            }}
          />
        )}
        {/* Enterprise Multi-Entity JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "HVACBusiness",
                  "@id": "https://www.altakeefsa.com/ar/#corporate-identity",
                  "name": "أعمال التكييف للتوريد والتركيب",
                  "alternateName": "Aamal Al-Takeef Commercial HVAC Contracting",
                  "url": "https://www.altakeefsa.com/ar",
                  "logo": "https://www.altakeefsa.com/images/company_logo.png",
                  "image": "https://www.altakeefsa.com/images/hero-fallback.png",
                  "telephone": "+966552239595",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "حي البركة",
                    "addressLocality": "الخرج",
                    "addressRegion": "منطقة الرياض",
                    "postalCode": "16245",
                    "addressCountry": "SA"
                  },
                  "geo": [
                    { "@type": "GeoCoordinates", "name": "Al-Kharj Head Office", "latitude": 24.1500, "longitude": 47.3000 },
                    { "@type": "GeoCoordinates", "name": "Riyadh Branch", "latitude": 24.7136, "longitude": 46.6753 }
                  ],
                  "areaServed": [
                    { "@type": "AdministrativeArea", "name": "الرياض" },
                    { "@type": "AdministrativeArea", "name": "جدة" },
                    { "@type": "AdministrativeArea", "name": "الدمام" },
                    { "@type": "AdministrativeArea", "name": "الخرج" }
                  ],
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
                    "opens": "08:00",
                    "closes": "18:00"
                  },
                  "sameAs": [
                    "https://www.altakeefsa.com"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://www.altakeefsa.com/ar/#central-ac-service",
                  "serviceType": "HVAC Supply and Installation",
                  "provider": { "@id": "https://www.altakeefsa.com/ar/#corporate-identity" },
                  "areaServed": { "@type": "AdministrativeArea", "name": "منطقة الرياض" },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "خدمات التكييف المركزي للمشاريع",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "توريد وتركيب التكييف المركزي للمباني",
                          "description": "تصميم هندسي متكامل، حساب الأحمال الحرارية وتوريد أنظمة تكييف المنشآت الضخمة والمجمعات والأبراج التجارية."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "تنفيذ أنظمة VRF للمشاريع التجارية",
                          "description": "تصميم وتركيب أنظمة التدفق المتغير عالية الكفاءة للمراكز التجارية والمستشفيات والأبراج."
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "تفصيل وتمديد دكت التكييف (Duct Fabrication)",
                          "description": "تصنيع وتركيب مجاري الهواء المجلفنة بأعلى معايير العزل الحراري والصوتي للمشاريع الإنشائية."
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
        <Script
          id="suppress-hydration-errors"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const originalError = console.error;
              console.error = (...args) => {
                if (
                  typeof args[0] === 'string' &&
                  (args[0].includes('hydration') ||
                   args[0].includes('Hydration') ||
                   args[0].includes('data-new-gr-c-s-check-loaded') ||
                   args[0].includes('data-gr-ext-installed'))
                ) {
                  return;
                }
                originalError(...args);
              };
            `
          }}
        />
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased text-white bg-[#111827] min-h-screen flex flex-col ${ibmPlexSansArabic.variable} ${inter.variable} ${locale === 'ar' ? 'font-arabic' : 'font-english'}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P83P7HJC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-KBPQPH631G"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KBPQPH631G');
              gtag('config', 'AW-18010504865');
              gtag('config', 'AW-18012327894');

              // Click to call (2) - Conversion Function
              window.gtag_report_conversion_two = function(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18012327894/2Gt0CMr_tcEcENaf-YxD',
                    'value': 1.0,
                    'currency': 'SAR',
                    'event_callback': callback
                });
                return false;
              };

              // Click to call (3) - Conversion Function
              window.gtag_report_conversion_three = function(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                    'send_to': 'AW-18012327894/lB4GCPGNuMEcENaf-YxD',
                    'value': 1.0,
                    'currency': 'SAR',
                    'event_callback': callback
                });
                return false;
              };
            `
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <MobileCTAOverlay />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
