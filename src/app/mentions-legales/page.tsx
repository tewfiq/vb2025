"use client";

import { BackButton } from '@/components/ui/back-button';
import { useTranslation } from '@/hooks/use-translation';

export default function LegalNoticePage() {
  const t = useTranslation();
  return (
    <div className="container mx-auto px-4 py-16">
      <BackButton />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline mb-4">
            {t.legal.title}
          </h1>
          <p className="text-lg text-accent font-semibold mb-2">
            {t.legal.subtitle}
          </p>
          <p className="text-sm text-muted-foreground">
            {t.legal.lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.editor.title}</h2>
            <p className="mb-4">{t.legal.sections.editor.content.description}</p>
            <div className="bg-muted/30 rounded-lg p-4 mb-4">
              <p className="mb-2"><strong>{t.legal.sections.editor.content.name}</strong></p>
              <p className="mb-2">{t.legal.sections.editor.content.organization}</p>
              <p className="mb-2">{t.legal.sections.editor.content.address1}</p>
              <p className="mb-2">{t.legal.sections.editor.content.address2}</p>
              <p className="mb-2">Email : {t.legal.sections.editor.content.email}</p>
            </div>
            <p className="mb-2">{t.legal.sections.editor.content.status}</p>
            <p className="mb-2">{t.legal.sections.editor.content.siret}</p>
            <p>{t.legal.sections.editor.content.tva}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.director.title}</h2>
            <p>{t.legal.sections.director.content}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.hosting.title}</h2>
            <p className="mb-3">{t.legal.sections.hosting.content.description}</p>
            <div className="bg-muted/30 rounded-lg p-4">
              <p className="mb-2"><strong>{t.legal.sections.hosting.content.name}</strong></p>
              <p className="mb-2">Adresse : <a href={t.legal.sections.hosting.content.address} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.legal.sections.hosting.content.address}</a></p>
              <p>Site web : <a href={t.legal.sections.hosting.content.website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.legal.sections.hosting.content.website}</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.intellectual.title}</h2>
            <p className="mb-3">{t.legal.sections.intellectual.content.para1}</p>
            <p>{t.legal.sections.intellectual.content.para2}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.privacy.title}</h2>
            <p className="mb-3">{t.legal.sections.privacy.content.para1}</p>
            <p className="mb-3">{t.legal.sections.privacy.content.para2}</p>
            <p className="mb-3">{t.legal.sections.privacy.content.para3}</p>
            <p>{t.legal.sections.privacy.content.para4} <a href="mailto:tewfiqonline@gmail.com" className="text-accent hover:underline">tewfiqonline@gmail.com</a></p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.cookies.title}</h2>
            <p className="mb-3">{t.legal.sections.cookies.content.para1}</p>
            <p>{t.legal.sections.cookies.content.para2}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.liability.title}</h2>
            <p className="mb-3">{t.legal.sections.liability.content.para1}</p>
            <p>{t.legal.sections.liability.content.para2}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-headline">{t.legal.sections.law.title}</h2>
            <p className="mb-3">{t.legal.sections.law.content.para1}</p>
            <p>{t.legal.sections.law.content.para2}</p>
          </section>

        </div>
      </div>
    </div>
  );
}