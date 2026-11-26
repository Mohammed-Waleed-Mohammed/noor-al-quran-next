import type { Metadata } from 'next'
import Link from 'next/link'

import '@/styles/tailwind.css'

import { NoorMark } from '@/components/NoorMark'
import { fontVariables } from '@/lib/fonts-ar'

export const metadata: Metadata = {
  title: 'الصفحة غير موجودة · Page not found',
}

// Shown for any unknown URL. The locale is unknown here, so the page is
// bilingual: Arabic first, English below.
export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={fontVariables}>
      <body className="flex min-h-svh items-center justify-center bg-night px-6 text-center">
        <main className="max-w-md">
          <NoorMark className="mx-auto h-24 w-auto" />
          <p className="mt-8 font-latin text-sm font-semibold text-periwinkle">404</p>
          <h1 className="mt-2 text-3xl font-semibold">لم نجد هذه الصفحة</h1>
          <p className="mt-3 text-on-night-soft">ربما نُقلت أو حُذفت.</p>
          <p lang="en" dir="ltr" className="mt-6 font-latin text-on-night-soft">
            We couldn’t find this page.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex items-center leading-none rounded-xl bg-periwinkle-ink px-5 py-3 font-medium text-white hover:bg-periwinkle-deep">
              الصفحة الرئيسية
            </Link>
            <Link
              href="/en"
              lang="en"
              className="inline-flex items-center leading-none rounded-xl border border-pearl/20 px-5 py-3 font-latin font-medium text-on-night hover:bg-navy/60"
            >
              Go to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
