// Single source for links and identity used across pages.

export type Locale = 'ar' | 'en'

/** Canonical origin. The app's About page links to this host. */
export const SITE_URL = 'https://nooralquran.netlify.app'

export const PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.qurannoor.app'

/** The web app (PWA). iPhone/iPad visitors are sent here instead of the
 *  stores; `install=1` makes it open its add-to-home-screen steps. */
export const PWA_URL = 'https://quran-noor-app.netlify.app/'
export const PWA_INSTALL_URL = `${PWA_URL}?install=1`

/** Direct sideload download. Version-agnostic on purpose. */
export const APK_URL = '/noor-al-quran.apk'

export const CONTACT_EMAIL = 'mohammed.waleed.mohammed999@gmail.com'

/** Date the privacy policy text last changed (ISO). */
export const PRIVACY_UPDATED = '2026-11-26'

export const APP_NAME = { ar: 'نور القرآن', en: 'Noor Al-Quran' } as const

/** Path of a page in a given locale. Arabic lives at the root. */
export function localePath(locale: Locale, path: '' | '/privacy' | '/delete-account' = '') {
  if (locale === 'ar') return path || '/'
  return `/en${path}`
}

export function formatDate(locale: Locale, iso: string) {
  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-EG' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
