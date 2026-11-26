import {
  AudioLines,
  Globe2,
  Heart,
  History,
  LayoutGrid,
  Radio,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  WifiOff,
  type LucideIcon,
} from 'lucide-react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import SpotlightCard from '@/components/reactbits/SpotlightCard'
import { SectionHeading } from '@/components/home/SectionHeading'
import { homeDict, type FeatureKey } from '@/i18n/home'
import type { Locale } from '@/lib/site'

// Bento order and spans (12-col on large screens). Larger tiles go to the
// features the app is built around.
const TILES: { key: FeatureKey; icon: LucideIcon; span: string }[] = [
  { key: 'reciters', icon: AudioLines, span: 'lg:col-span-7' },
  { key: 'continue', icon: History, span: 'lg:col-span-5' },
  { key: 'athkar', icon: Sparkles, span: 'lg:col-span-5' },
  { key: 'radio', icon: Radio, span: 'lg:col-span-7' },
  { key: 'offline', icon: WifiOff, span: 'lg:col-span-4' },
  { key: 'favorites', icon: Heart, span: 'lg:col-span-4' },
  { key: 'playback', icon: SlidersHorizontal, span: 'lg:col-span-4' },
  { key: 'widgets', icon: LayoutGrid, span: 'lg:col-span-4' },
  { key: 'points', icon: Trophy, span: 'lg:col-span-4' },
  { key: 'bilingual', icon: Globe2, span: 'lg:col-span-4' },
]

export function Features({ locale }: { locale: Locale }) {
  const t = homeDict[locale].features
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        <ul role="list" className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {TILES.map(({ key, icon: Icon, span }, i) => {
            const item = t.items[key]
            const large = i < 4
            return (
              <li key={key} className={clsx('flex', span)}>
                <SpotlightCard
                  spotlightColor="rgba(124, 140, 224, 0.28)"
                  intensity={0.8}
                  spotlightSize={large ? 420 : 320}
                  borderGlow={0.6}
                  style={
                    {
                      '--spotlight-card-surface': '#18204A',
                      '--spotlight-card-border': 'rgba(230, 232, 239, 0.09)',
                      '--spotlight-card-shadow': '0 24px 48px -28px rgba(5, 8, 25, 0.8)',
                    } as React.CSSProperties
                  }
                  className={clsx('w-full p-7!', large && 'sm:p-9!')}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-periwinkle/15 text-ice ring-1 ring-periwinkle/30">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className={clsx('mt-5 font-semibold text-on-night', large ? 'text-xl' : 'text-lg')}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-on-night-soft">{item.body}</p>
                </SpotlightCard>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
