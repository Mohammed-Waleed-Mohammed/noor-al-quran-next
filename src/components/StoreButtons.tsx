'use client'

import { useSyncExternalStore } from 'react'
import clsx from 'clsx'
import { FaAndroid, FaApple, FaGooglePlay } from 'react-icons/fa'

import StarBorder from '@/components/reactbits/StarBorder'
import { homeDict } from '@/i18n/home'
import { APK_URL, PLAY_URL, PWA_INSTALL_URL, type Locale } from '@/lib/site'

// iPhone/iPad visitors can't use Google Play or the APK, so on iOS the store
// buttons send them to the web app instead, with `?install=1` so it opens
// straight onto its add-to-home-screen steps. Pages are static, so this is
// decided in the browser (the server render shows the Android buttons).
const noop = () => () => {}
function detectIos() {
  const ua = navigator.userAgent
  return /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)
}
export function useIsIos() {
  return useSyncExternalStore(noop, detectIos, () => false)
}

export function PlayButton({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const t = homeDict[locale].cta
  const ios = useIsIos()
  const href = ios ? PWA_INSTALL_URL : PLAY_URL
  const BrandIcon = ios ? FaApple : FaGooglePlay

  // The compact header button is always on screen, so it stays static; the
  // animated StarBorder is kept for in-page CTAs, which pause off-screen.
  if (compact)
    return (
      <a
        href={href}
        {...(ios ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
        className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-ice/25 bg-navy px-3.5 py-2 text-on-night transition-colors hover:border-ice/50"
      >
        <BrandIcon aria-hidden="true" className="text-base" />
        <span className={clsx('text-sm font-semibold', !ios && 'font-latin')}>
          {ios ? t.iosCompact : t.play}
        </span>
      </a>
    )
  return (
    <StarBorder
      as="a"
      href={href}
      {...(ios ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
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
      <BrandIcon aria-hidden="true" className="text-2xl" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[0.7rem] text-on-night-soft">{ios ? t.iosEyebrow : t.playEyebrow}</span>
        <span className={clsx('text-lg font-semibold', !ios && 'font-latin')}>{ios ? t.iosTitle : t.play}</span>
      </span>
    </StarBorder>
  )
}

/** Direct APK download — Android only, so hidden on iPhone/iPad. */
export function ApkLink({ locale, className }: { locale: Locale; className?: string }) {
  const t = homeDict[locale].cta
  if (useIsIos()) return null
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
