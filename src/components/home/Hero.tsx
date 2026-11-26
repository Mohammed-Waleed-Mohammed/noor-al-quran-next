import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

import { MoonRays } from '@/components/Ambient'
import { Container } from '@/components/Container'
import { ApkLink, PlayButton } from '@/components/StoreButtons'
import BlurText from '@/components/reactbits/BlurText'
import ShinyText from '@/components/reactbits/ShinyText'
import { homeDict } from '@/i18n/home'
import type { Locale } from '@/lib/site'
import heroImage from '../../../public/home-hero.jpg'

export function Hero({ locale }: { locale: Locale }) {
  const t = homeDict[locale].hero
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24">
      {/* The app's own home artwork: a moonlit lake under a crescent. */}
      <Image
        src={heroImage}
        alt=""
        priority
        placeholder="blur"
        sizes="100vw"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[50%_30%]"
      />
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-night/70 via-night/50 to-night" />
      <MoonRays className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[75%] mix-blend-screen" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <ShinyText
            text={t.eyebrow}
            color="#B4BCDB"
            shineColor="#F1F3FA"
            speed={4}
            className="text-sm font-medium tracking-wide sm:text-base"
          />
          <BlurText
            as="h1"
            text={t.title}
            animateBy="words"
            direction="bottom"
            delay={90}
            stepDuration={0.45}
            trigger="load"
            className="mt-5 justify-center font-display text-4xl leading-[1.25] font-semibold text-balance text-on-night sm:text-5xl lg:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-on-night-soft sm:text-xl">{t.lead}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PlayButton locale={locale} />
            <ApkLink locale={locale} />
          </div>
        </div>
      </Container>

      <a
        href="#features"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-on-night-soft transition-colors hover:text-ice"
      >
        {t.scroll}
        <ChevronDown aria-hidden="true" className="h-5 w-5 motion-safe:animate-bounce" />
      </a>
    </section>
  )
}
