"use client";

import { BackButton } from '@/components/ui/back-button';
import { useTranslation } from '@/hooks/use-translation';

export default function TermsOfServicePage() {
  const t = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            {t.terms.title}<br />{t.terms.subtitle}
          </h1>
          <p className="text-lg text-accent font-semibold mb-2">
            Vibe Coding Paris — Masterclass & Formations
          </p>
          <p className="text-sm text-muted-foreground">
            {t.terms.lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.object.title}</h2>
            <p className="mb-4">
              {t.terms.sections.object.content.para1}
            </p>
            <p>
              {t.terms.sections.object.content.para2}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.registration.title}</h2>
            <p className="mb-3">{t.terms.sections.registration.content.para1}</p>
            <p className="mb-3">{t.terms.sections.registration.content.para2}</p>
            <p className="mb-3">{t.terms.sections.registration.content.para3}</p>
            <p>{t.terms.sections.registration.content.para4}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.pricing.title}</h2>
            <p className="mb-4">{t.terms.sections.pricing.content.para1}</p>
            <p className="mb-4">{t.terms.sections.pricing.content.para2}</p>
            <ul className="mb-4 space-y-2">
              <li><strong>{t.terms.sections.pricing.content.pricing.starter}</strong></li>
              <li><strong>{t.terms.sections.pricing.content.pricing.standard}</strong></li>
              <li><strong>{t.terms.sections.pricing.content.pricing.enterprise}</strong></li>
            </ul>
            <p className="mb-3">{t.terms.sections.pricing.content.para3}</p>
            <p>{t.terms.sections.pricing.content.para4}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.withdrawal.title}</h2>
            <p className="mb-3">{t.terms.sections.withdrawal.content.para1}</p>
            <p className="mb-3">{t.terms.sections.withdrawal.content.para2}</p>
            <p className="mb-3">{t.terms.sections.withdrawal.content.para3}</p>
            <p className="mb-4">{t.terms.sections.withdrawal.content.para4}</p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                <span className="font-semibold">⚠️ Attention :</span> {t.terms.sections.withdrawal.content.warning}
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.cancellation.title}</h2>
            <p className="mb-3">{t.terms.sections.cancellation.content.para1}</p>
            <p className="mb-3">{t.terms.sections.cancellation.content.para2}</p>
            <p>{t.terms.sections.cancellation.content.para3}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.training.title}</h2>
            <p className="mb-3">{t.terms.sections.training.content.para1}</p>
            <p className="mb-3">{t.terms.sections.training.content.para2}</p>
            <p className="mb-3">{t.terms.sections.training.content.para3}</p>
            <p>{t.terms.sections.training.content.para4}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.intellectual.title}</h2>
            <p className="mb-3">{t.terms.sections.intellectual.content.para1}</p>
            <p className="mb-3">{t.terms.sections.intellectual.content.para2}</p>
            <p>{t.terms.sections.intellectual.content.para3}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.liability.title}</h2>
            <p className="mb-3">{t.terms.sections.liability.content.para1}</p>
            <p className="mb-3">{t.terms.sections.liability.content.para2}</p>
            <p>{t.terms.sections.liability.content.para3}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.privacy.title}</h2>
            <p className="mb-3">{t.terms.sections.privacy.content.para1}</p>
            <p className="mb-3">{t.terms.sections.privacy.content.para2}</p>
            <p>{t.terms.sections.privacy.content.para3}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.law.title}</h2>
            <p className="mb-3">{t.terms.sections.law.content.para1}</p>
            <p>{t.terms.sections.law.content.para2}</p>
          </section>

          <section className="mt-12">
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.terms.sections.acceptance.title}</h2>
              <p className="text-foreground font-medium">
                {t.terms.sections.acceptance.content}
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}