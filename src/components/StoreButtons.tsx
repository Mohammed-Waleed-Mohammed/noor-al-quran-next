'use client'

import clsx from 'clsx'
import { FaAndroid, FaGooglePlay } from 'react-icons/fa'

import StarBorder from '@/components/reactbits/StarBorder'
import { homeDict } from '@/i18n/home'
import { APK_URL, PLAY_URL, type Locale } from '@/lib/site'

export function PlayButton({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = homeDict[locale].cta
  // The compact header button is always on screen, so it stays static; the
  // animated StarBorder is kept for in-page CTAs, which pause off-screen.
  if (compact)
    return (
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-ice/25 bg-navy px-3.5 py-2 text-on-night transition-colors hover:border-ice/50"
      >
        <FaGooglePlay aria-hidden="true" className="text-base" />
        <span className="font-latin text-sm font-semibold">{t.play}</span>
      </a>
    )
  return (
    <StarBorder
      as="a"
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      color="#BFD3F5"
      trailColor="#7C8CE0"
      backgroundColor="#1F2A5A"
      textColor="#F1F3FA"
      borderColor="rgba(191, 211, 245, 0.28)"
      radius={16}
      duration={7}
      glow={0.5}
      hover="lap"
      className="shrink-0 px-5! py-3!"
    >
      <FaGooglePlay aria-hidden="true" className="text-2xl" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.7rem] text-on-night-soft">{t.playEyebrow}</span>
        <span className="font-latin text-lg font-semibold">
          {t.play}
        </span>
      </span>
    </StarBorder>
  )
}

export function ApkLink({ locale, className }: { locale: Locale; className?: string }) {
  const t = homeDict[locale].cta
  return (
    <a
      href={APK_URL}
      download
      className={clsx(
        'group inline-flex items-center gap-3 rounded-2xl border border-pearl/15 px-5 py-3 text-on-night transition-colors hover:border-ice/40 hover:bg-navy/50',
        className,
      )}
    >
      <FaAndroid aria-hidden="true" className="text-2xl text-ice" />
      <span className="flex flex-col items-start leading-tight">
        <span className="font-semibold">{t.apk}</span>
        <span className="text-xs text-on-night-soft">{t.apkHint}</span>
      </span>
    </a>
  )
}
