'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { NoorMark } from '@/components/NoorMark'
import { PlayButton } from '@/components/StoreButtons'
import { homeDict } from '@/i18n/home'
import { APP_NAME, localePath, type Locale } from '@/lib/site'

type Page = '' | '/privacy' | '/delete-account'

export function SiteHeader({ locale, page = '' }: { locale: Locale; page?: Page }) {
  const t = homeDict[locale]
  const home = localePath(locale)
  const other: Locale = locale === 'ar' ? 'en' : 'ar'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const anchor = (hash: string) => (page === '' ? `#${hash}` : `${home}#${hash}`)
  const links = [
    { href: anchor('features'), label: t.nav.features },
    { href: anchor('app'), label: t.nav.app },
    { href: anchor('faq'), label: t.nav.faq },
    { href: localePath(locale, '/privacy'), label: t.nav.privacy },
  ]

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open ? 'glass border-x-0 border-t-0' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="absolute start-4 top-2 z-50 -translate-y-20 rounded-lg bg-ice px-3 py-2 text-ink focus:translate-y-0"
      >
        {t.skip}
      </a>
      <Container className="flex h-18 items-center justify-between gap-6">
        <Link href={home} className="flex items-center gap-3" aria-label={APP_NAME[locale]}>
          <NoorMark animate className="h-10 w-auto" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {APP_NAME[locale]}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.features}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-on-night-soft transition-colors hover:bg-navy/60 hover:text-on-night"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localePath(other, page)}
            hrefLang={other}
            lang={other}
            aria-label={t.langSwitch.target}
            className={clsx(
              'rounded-lg px-3 py-2 text-sm text-on-night-soft transition-colors hover:bg-navy/60 hover:text-on-night',
              other === 'ar' ? 'font-[family-name:var(--font-cairo)]' : 'font-latin',
            )}
          >
            {t.langSwitch.label}
          </Link>
          <div className="hidden sm:block">
            <PlayButton locale={locale} compact />
          </div>
          <button
            type="button"
            className="-me-2 rounded-lg p-2 text-on-night hover:bg-navy/60 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.close : t.nav.menu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" className="border-t border-pearl/10 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-on-night hover:bg-navy/60"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 sm:hidden">
              <PlayButton locale={locale} />
            </div>
          </Container>
        </nav>
      )}
    </header>
  )
}
