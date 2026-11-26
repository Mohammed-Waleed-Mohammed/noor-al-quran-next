import type { Metadata, Viewport } from 'next'

import { homeDict } from '@/i18n/home'
import { APP_NAME, SITE_URL, localePath, type Locale } from '@/lib/site'

type Path = '' | '/privacy' | '/delete-account'

export const viewport: Viewport = {
  themeColor: '#141B3D',
  colorScheme: 'dark',
}

/** Root metadata for a locale's layout. */
export function rootMetadata(locale: Locale): Metadata {
  const t = homeDict[locale].meta
  return {
    metadataBase: new URL(SITE_URL),
    title: { template: `%s · ${APP_NAME[locale]}`, default: t.title },
    description: t.description,
    applicationName: APP_NAME[locale],
    openGraph: {
      siteName: APP_NAME[locale],
      locale: locale === 'ar' ? 'ar_AR' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_AR',
      type: 'website',
      images: [{ url: `/og/og-${locale}.png`, width: 1200, height: 630, alt: t.ogTagline }],
    },
    twitter: { card: 'summary_large_image', images: [`/og/og-${locale}.png`] },
    other: { 'google-play-app': 'app-id=com.qurannoor.app' },
  }
}

/** Per-page canonical + hreflang alternates. */
export function pageAlternates(locale: Locale, path: Path): Metadata['alternates'] {
  return {
    canonical: localePath(locale, path),
    languages: {
      ar: localePath('ar', path),
      en: localePath('en', path),
      'x-default': localePath('ar', path),
    },
  }
}
