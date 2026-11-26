import Link from 'next/link'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react'

import { Container } from '@/components/Container'
import { homeDict } from '@/i18n/home'
import { localePath, type Locale } from '@/lib/site'

export function PrivacyGlance({ locale }: { locale: Locale }) {
  const t = homeDict[locale].privacy
  const Arrow = locale === 'ar' ? ArrowLeft : ArrowRight
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-4xl bg-moonlight p-8 text-ink sm:p-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-periwinkle-deep">
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            </span>
            <p className="mt-6 text-sm font-semibold text-periwinkle-deep">{t.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-balance">{t.title}</h2>
            <Link
              href={localePath(locale, '/privacy')}
              className="mt-6 inline-flex items-center gap-2 font-semibold text-periwinkle-ink underline-offset-4 hover:underline"
            >
              {t.link}
              <Arrow aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ul role="list" className="grid gap-3 sm:grid-cols-2">
            {t.points.map((p) => (
              <li key={p} className="rounded-2xl bg-white p-5 text-ink-soft shadow-sm ring-1 ring-divider">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
