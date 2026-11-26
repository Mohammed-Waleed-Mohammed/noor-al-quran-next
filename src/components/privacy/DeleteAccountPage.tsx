import type { Metadata } from 'next'
import { CircleCheck, CircleDashed, Mail, Smartphone } from 'lucide-react'

import { Container } from '@/components/Container'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { deleteDict } from '@/i18n/privacy'
import { pageAlternates } from '@/lib/metadata'
import { CONTACT_EMAIL, type Locale } from '@/lib/site'

export function deleteAccountMetadata(locale: Locale): Metadata {
  const t = deleteDict[locale]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, '/delete-account'),
  }
}

export function DeleteAccountPage({ locale }: { locale: Locale }) {
  const t = deleteDict[locale]
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)}`
  return (
    <>
      <SiteHeader locale={locale} page="/delete-account" />
      <main id="main" className="flex-auto">
        <div className="bg-gradient-to-b from-navy-deep to-night pt-36 pb-16">
          <Container className="max-w-3xl">
            <h1 className="text-4xl font-semibold sm:text-5xl">{t.title}</h1>
            <p className="mt-5 text-lg text-on-night-soft">{t.intro}</p>
          </Container>
        </div>
        <div className="bg-moonlight py-16 text-ink-soft">
          <Container className="grid max-w-3xl gap-6">
            <section className="rounded-3xl bg-white p-7 ring-1 ring-divider">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-ink">
                <Smartphone aria-hidden="true" className="h-5 w-5 text-periwinkle-deep" />
                {t.inAppTitle}
              </h2>
              <ol className="mt-4 list-decimal space-y-2 ps-6 marker:font-latin marker:text-periwinkle-deep">
                {t.inAppSteps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </section>

            <section className="rounded-3xl bg-white p-7 ring-1 ring-divider">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-ink">
                <Mail aria-hidden="true" className="h-5 w-5 text-periwinkle-deep" />
                {t.webTitle}
              </h2>
              <p className="mt-4">{t.webBody}</p>
              <a
                href={mailto}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-periwinkle-ink px-5 py-3 font-medium text-white hover:bg-periwinkle-deep"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {t.emailButton}
              </a>
              <p className="mt-3 font-latin text-sm break-all">{CONTACT_EMAIL}</p>
            </section>

            <div className="grid gap-6 sm:grid-cols-2">
              <section className="rounded-3xl bg-white p-7 ring-1 ring-divider">
                <h2 className="text-lg font-semibold text-ink">{t.removedTitle}</h2>
                <ul className="mt-4 space-y-3">
                  {t.removed.map((r) => (
                    <li key={r} className="flex gap-3">
                      <CircleCheck aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-periwinkle-deep" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="rounded-3xl bg-white p-7 ring-1 ring-divider">
                <h2 className="text-lg font-semibold text-ink">{t.keptTitle}</h2>
                <ul className="mt-4 space-y-3">
                  {t.kept.map((r) => (
                    <li key={r} className="flex gap-3">
                      <CircleDashed aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-ink-soft" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </Container>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
