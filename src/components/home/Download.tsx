import { StarField } from '@/components/Ambient'
import { Container } from '@/components/Container'
import { NoorMark } from '@/components/NoorMark'
import { ApkLink, PlayButton } from '@/components/StoreButtons'
import { homeDict } from '@/i18n/home'
import type { Locale } from '@/lib/site'

export function Download({ locale }: { locale: Locale }) {
  const t = homeDict[locale].download
  return (
    <section
      id="download"
      className="relative isolate overflow-hidden bg-gradient-to-b from-night via-navy-deep to-abyss py-28 sm:py-36"
    >
      <StarField className="pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-periwinkle-deep/25 blur-3xl"
      />
      <Container className="text-center">
        <NoorMark className="mx-auto h-28 w-auto drop-shadow-[0_0_40px_rgba(124,140,224,0.35)]" />
        <h2 className="mt-8 text-3xl font-semibold text-balance sm:text-5xl">{t.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-on-night-soft">{t.lead}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PlayButton locale={locale} />
          <ApkLink locale={locale} />
        </div>
      </Container>
    </section>
  )
}
