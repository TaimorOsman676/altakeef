'use client';

import { useTranslations, useLocale } from 'next-intl';
import { PageHeader } from '@/components/ui';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tCommon = useTranslations('common');
  const tForm = useTranslations('form');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

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
                    <p className="text-[#94A3B8]">info@altakeef.com</p>
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
                      {isRTL ? 'المملكة العربية السعودية، الرياض' : 'Saudi Arabia, Riyadh'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-[#111827] rounded-3xl p-8 lg:p-12 shadow-2xl shadow-black/5 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-8">{t('formTitle')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-2">{tForm('name')}</label>
                  <input
                    type="text"
                    required
                    placeholder={tForm('namePlaceholder')}
                    className="w-full rounded-xl border-white/10 bg-[#0B1120] px-4 py-3 text-white focus:border-[#00E5FF] focus:bg-white focus:ring-[#00E5FF] transition-colors outline-none border"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">{tForm('phone')}</label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      placeholder={tForm('phonePlaceholder')}
                      className="w-full rounded-xl border-white/10 bg-[#0B1120] px-4 py-3 text-white focus:border-[#00E5FF] focus:bg-white focus:ring-[#00E5FF] transition-colors outline-none border text-left"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#94A3B8] mb-2">{tForm('service')}</label>
                    <select
                      required
                      className="w-full rounded-xl border-white/10 bg-[#0B1120] px-4 py-3 text-white focus:border-[#00E5FF] focus:bg-white focus:ring-[#00E5FF] transition-colors outline-none border appearance-none"
                    >
                      <option value="" disabled selected>{tForm('selectService')}</option>
                      <option value="commercial">Commercial HVAC</option>
                      <option value="residential">Residential HVAC</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#94A3B8] mb-2">{tForm('message')}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={tForm('messagePlaceholder')}
                    className="w-full rounded-xl border-white/10 bg-[#0B1120] px-4 py-3 text-white focus:border-[#00E5FF] focus:bg-white focus:ring-[#00E5FF] transition-colors outline-none border resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#2489ba] hover:shadow-lg hover:shadow-[#00E5FF]/25 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    tCommon('loading')
                  ) : (
                    <>
                      <Send className={`w-5 h-5 ${isRTL ? '-scale-x-100' : ''}`} />
                      {tForm('submit')}
                    </>
                  )}
                </button>

                {isSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium">
                    {tForm('success')}
                  </div>
                )}
              </form>
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
        ></iframe>
      </section>
    </>
  );
}
