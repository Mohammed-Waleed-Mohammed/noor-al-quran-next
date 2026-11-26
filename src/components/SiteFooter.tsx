import Link from 'next/link'

import { Container } from '@/components/Container'
import { NoorMark } from '@/components/NoorMark'
import { homeDict } from '@/i18n/home'
import { APP_NAME, CONTACT_EMAIL, PLAY_URL, localePath, type Locale } from '@/lib/site'

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = homeDict[locale].footer
  const links = [
    { href: localePath(locale, '/privacy'), label: t.privacy },
    { href: localePath(locale, '/delete-account'), label: t.deleteAccount },
    { href: `mailto:${CONTACT_EMAIL}`, label: t.contact },
    { href: PLAY_URL, label: 'Google Play', external: true },
  ]
  return (
    <footer className="border-t border-pearl/10 bg-abyss">
      <Container className="flex flex-col gap-10 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          <NoorMark className="h-14 w-auto" />
          <div>
            <p className="font-display text-lg font-semibold">{APP_NAME[locale]}</p>
            <p className="text-sm text-on-night-soft">{t.tagline}</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-on-night-soft transition-colors hover:text-ice"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="flex flex-col gap-2 border-t border-pearl/10 py-6 text-xs text-on-night-soft sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {APP_NAME[locale]}. {t.rights}
        </p>
        <p>{t.content}</p>
      </Container>
    </footer>
  )
}
