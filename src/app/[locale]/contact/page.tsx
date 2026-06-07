'use client';

import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/ui';
import LeadForm from '@/components/ui/LeadForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const tForm = useTranslations('form');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <>
      <PageHeader titleKey="title" subtitleKey="subtitle" namespace="contact" />

      <section className="py-20 lg:py-32 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('infoTitle')}</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B1120] p-4 rounded-2xl text-[#00E5FF]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tCommon('phone')}</h3>
                    <p className="text-[#94A3B8]" dir="ltr">0552239595</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B1120] p-4 rounded-2xl text-[#00E5FF]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tCommon('email')}</h3>
                    <p className="text-[#94A3B8]">info@altakeefsa.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B1120] p-4 rounded-2xl text-[#00E5FF]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tCommon('workingHours')}</h3>
                    <p className="text-[#94A3B8]">{tCommon('workingHoursValue')}</p>
                    <p className="text-[#94A3B8] mt-1">{tCommon('fridayClosed')}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#0B1120] p-4 rounded-2xl text-[#00E5FF]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{tCommon('address')}</h3>
                    <p className="text-[#94A3B8]">
                      {isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="flex items-center justify-center">
              <LeadForm className="!max-w-lg lg:!ms-0" />
            </div>
            
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-[#0F172A] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115933.22055628522!2d46.73858639999999!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
          title={isRTL ? "موقع مؤسسة أعمال التكييف للمقاولات على خريطة جوجل بالرياض" : "Al-Takeef Contracting Est. Location on Google Maps in Riyadh"}
        ></iframe>
      </section>
    </>
  );
}
