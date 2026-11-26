import type { Locale } from '@/lib/site'

// Each locale's layout passes its own font classes (lib/fonts-{ar,en}.ts) so
// only that locale's preloads end up in its pages.
export function RootHtml({
  locale,
  fontClass,
  children,
}: {
  locale: Locale
  fontClass: string
  children: React.ReactNode
}) {
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={fontClass}>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  )
}
