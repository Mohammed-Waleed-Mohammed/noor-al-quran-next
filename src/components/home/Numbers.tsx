import { Container } from '@/components/Container'
import CountUp from '@/components/reactbits/CountUp'
import { homeDict } from '@/i18n/home'
import type { Locale } from '@/lib/site'

// Only true, checkable numbers. The reciter count is fetched live from
// MP3Quran (lib/catalog.ts) and the tile is dropped if that fails.
export function Numbers({ locale, reciters }: { locale: Locale; reciters: number | null }) {
  const t = homeDict[locale].numbers
  const stats = [
    { value: 114, label: t.surahs },
    ...(reciters ? [{ value: reciters, label: t.reciters }] : []),
    { value: 4, label: t.widgets },
    { value: 2, label: t.languages },
  ]
  return (
    <section aria-labelledby="numbers-title" className="py-16">
      <Container>
        <h2 id="numbers-title" className="sr-only">
          {t.title}
        </h2>
        <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-3xl bg-pearl/10 ring-1 ring-pearl/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 bg-navy-deep px-6 py-9 text-center">
              <dt className="text-sm text-on-night-soft">{s.label}</dt>
              <dd className="order-first font-latin text-4xl font-semibold text-on-night sm:text-5xl">
                <CountUp to={s.value} duration={1.6} separator="," trigger="view" />
              </dd>
            </div>
          ))}
        </dl>
        {reciters && <p className="mt-4 text-center text-xs text-on-night-soft">{t.source}</p>}
      </Container>
    </section>
  )
}
