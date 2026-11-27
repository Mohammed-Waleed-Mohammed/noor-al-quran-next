'use client'

import Image from 'next/image'
import { useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'
import { NoorMark } from '@/components/NoorMark'
import { SectionHeading } from '@/components/home/SectionHeading'
import TiltedCard from '@/components/reactbits/TiltedCard'
import { homeDict } from '@/i18n/home'
import screenshots from '@/lib/screenshots.json'
import type { Locale } from '@/lib/site'

// Images come from public/screenshots/{ar,en}/ (see the README there), listed
// by scripts/screenshots.mjs. They're shown as-is on rounded cards, so
// store-listing graphics work too. With no images, a row of quiet branded
// placeholders is shown instead — never a mock of app UI.
const SHOTS = screenshots as Record<Locale, string[]>

// Store graphics are 768×1376; cards keep that portrait shape.
const W = 240
const H = Math.round((W * 1376) / 768)

function Placeholder({ title, pending }: { title: string; pending: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-[2.4rem] border-[7px] border-navy-raised bg-gradient-to-b from-navy via-night to-abyss px-6 text-center ring-1 ring-pearl/10">
      <NoorMark className="h-20 w-auto opacity-90" />
      <div>
        <p className="font-display text-lg font-semibold text-on-night">{title}</p>
        <p className="mt-1 text-xs text-on-night-soft">{pending}</p>
      </div>
    </div>
  )
}

export function Showcase({ locale }: { locale: Locale }) {
  const t = homeDict[locale].showcase
  const reduce = useReducedMotion()
  const shots = SHOTS[locale] ?? []
  const items = shots.length
    ? shots.map((src, i) => ({ key: src, src, alt: `${t.shotAlt} ${i + 1}` }))
    : t.screens.map((s) => ({ key: s.key, src: null, alt: s.title }))

  return (
    <section id="app" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-periwinkle-deep/20 blur-3xl"
      />
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
      </Container>
      {/* Scrolls sideways on narrow screens; centred when everything fits. */}
      <ul
        role="list"
        className="mx-auto mt-16 flex max-w-7xl snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 [scrollbar-width:none] lg:justify-center lg:px-8"
      >
        {items.map((item, i) => (
          <li key={item.key} className="shrink-0 snap-center">
            <TiltedCard
              containerHeight={`${H}px`}
              containerWidth={`${W}px`}
              imageHeight={`${H}px`}
              imageWidth={`${W}px`}
              rotateAmplitude={reduce ? 0 : 6}
              scaleOnHover={reduce ? 1 : 1.03}
              glare={0.15}
              glareColor="#BFD3F5"
              shadow={0.45}
              radius={28}
              showTooltip={false}
              flipOnClick={false}
              gyroscope={false}
              intro={!reduce}
              introDelay={i * 110}
              altText={item.alt}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={W}
                  height={H}
                  sizes={`${W}px`}
                  quality={90}
                  className="h-full w-full rounded-[28px] object-cover ring-1 ring-pearl/10"
                />
              ) : (
                <Placeholder title={item.alt} pending={t.pending} />
              )}
            </TiltedCard>
          </li>
        ))}
      </ul>
    </section>
  )
}
