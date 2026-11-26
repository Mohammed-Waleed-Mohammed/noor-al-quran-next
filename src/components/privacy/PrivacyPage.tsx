import type { Metadata } from 'next'
import { Info, Mail } from 'lucide-react'

import { Container } from '@/components/Container'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { Toc } from '@/components/privacy/Toc'
import { privacyDict, type Block } from '@/i18n/privacy'
import { pageAlternates } from '@/lib/metadata'
import { CONTACT_EMAIL, PRIVACY_UPDATED, formatDate, type Locale } from '@/lib/site'

export function privacyMetadata(locale: Locale): Metadata {
  const t = privacyDict[locale]
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: pageAlternates(locale, '/privacy'),
  }
}

function BlockView({ block }: { block: Block }) {
  if ('p' in block) return <p>{block.p}</p>
  if ('h' in block) return <h3 className="text-lg font-semibold text-ink">{block.h}</h3>
  if ('ul' in block)
    return (
      <ul className="list-disc space-y-2 ps-6 marker:text-periwinkle-deep">
        {block.ul.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )
  if ('note' in block)
    return (
      <p className="flex gap-3 rounded-2xl bg-mist p-4 text-ink">
        <Info aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-periwinkle-deep" />
        <span>{block.note}</span>
      </p>
    )
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-divider">
      <table className="w-full text-start text-sm">
        <thead className="bg-mist text-ink">
          <tr>
            {block.table.head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 text-start font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-divider bg-white">
          {block.table.rows.map(([a, b]) => (
            <tr key={a} className="align-top">
              <th scope="row" className="w-2/5 px-4 py-3 text-start font-medium text-ink">
                {a}
              </th>
              <td className="px-4 py-3">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = privacyDict[locale]
  return (
    <>
      <SiteHeader locale={locale} page="/privacy" />
      <main id="main" className="flex-auto">
        <div className="relative overflow-hidden bg-gradient-to-b from-navy-deep to-night pt-36 pb-20">
          <div
            aria-hidden="true"
            className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-periwinkle-deep/25 blur-3xl"
          />
          <Container className="relative">
            <p className="text-sm font-semibold text-periwinkle">{t.eyebrow}</p>
            <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{t.title}</h1>
            <p className="mt-4 text-sm text-on-night-soft">
              {t.updated}: <time dateTime={PRIVACY_UPDATED}>{formatDate(locale, PRIVACY_UPDATED)}</time>
            </p>
            <p className="mt-6 max-w-3xl text-lg text-on-night-soft">{t.intro}</p>
          </Container>
        </div>

        <div className="bg-moonlight text-ink-soft">
          <Container className="grid gap-12 py-16 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Toc title={t.tocTitle} items={t.sections.map(({ id, title }) => ({ id, title }))} />
            </aside>

            <article className="max-w-3xl text-base leading-8 sm:text-[1.05rem]">
              <section aria-labelledby="glance" className="rounded-3xl bg-white p-6 ring-1 ring-divider sm:p-8">
                <h2 id="glance" className="text-xl font-semibold text-ink">
                  {t.glanceTitle}
                </h2>
                <ul className="mt-4 space-y-3">
                  {t.glance.map((g) => (
                    <li key={g} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-periwinkle-deep" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {t.sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="mt-14 scroll-mt-28">
                  <h2 id={`${s.id}-h`} className="flex items-baseline gap-3 text-2xl font-semibold text-ink">
                    <span className="font-latin text-base text-periwinkle-deep">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </h2>
                  <div className="mt-5 space-y-5">
                    {s.blocks.map((b, j) => (
                      <BlockView key={j} block={b} />
                    ))}
                    {s.id === 'contact' && (
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-periwinkle-ink px-4 py-2.5 font-latin text-sm font-medium break-all text-white hover:bg-periwinkle-deep"
                      >
                        <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                        {CONTACT_EMAIL}
                      </a>
                    )}
                  </div>
                </section>
              ))}
            </article>
          </Container>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
