'use client'

import clsx from 'clsx'
import { useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'
import { NoorMark } from '@/components/NoorMark'
import { SectionHeading } from '@/components/home/SectionHeading'
import TiltedCard from '@/components/reactbits/TiltedCard'
import { homeDict } from '@/i18n/home'
import type { Locale } from '@/lib/site'

// Real screenshots go here once provided (raw device captures, unframed,
// per locale). Until then each frame shows a quiet branded placeholder —
// never a mock of app UI.
const SCREENSHOTS: Record<Locale, Partial<Record<string, string>>> = {
  ar: {},
  en: {},
}

function PhoneScreen({ src, title, pending }: { src?: string; title: string; pending: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] border-[7px] border-navy-raised bg-abyss shadow-[0_40px_80px_-30px_rgba(5,8,25,0.9)] ring-1 ring-pearl/10">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={title} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-navy via-night to-abyss px-6 text-center">
          <NoorMark className="h-20 w-auto opacity-90" />
          <div>
            <p className="font-display text-lg font-semibold text-on-night">{title}</p>
            <p className="mt-1 text-xs text-on-night-soft">{pending}</p>
          </div>
        </div>
      )}
      <span className="absolute top-2.5 left-1/2 h-5 w-20 -translate-x-1/2 rounded-full bg-abyss" />
    </div>
  )
}

export function Showcase({ locale }: { locale: Locale }) {
  const t = homeDict[locale].showcase
  const reduce = useReducedMotion()
  return (
    <section id="app" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-periwinkle-deep/20 blur-3xl"
      />
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ul
          role="list"
          className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 sm:justify-center sm:overflow-visible"
        >
          {t.screens.map((s, i) => (
            <li
              key={s.key}
              className={clsx('shrink-0 snap-center', i === 1 && 'sm:-mt-0 lg:-mt-10')}
            >
              <TiltedCard
                containerHeight="540px"
                containerWidth="264px"
                imageHeight="540px"
                imageWidth="264px"
                rotateAmplitude={reduce ? 0 : 7}
                scaleOnHover={reduce ? 1 : 1.03}
                glare={0.18}
                glareColor="#BFD3F5"
                shadow={0.4}
                radius={38}
                showTooltip={false}
                flipOnClick={false}
                gyroscope={false}
                intro={!reduce}
                introDelay={i * 120}
                altText={s.title}
              >
                <PhoneScreen
                  src={SCREENSHOTS[locale][s.key]}
                  title={s.title}
                  pending={t.pending}
                />
              </TiltedCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
