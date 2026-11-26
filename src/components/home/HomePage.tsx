import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { Download } from '@/components/home/Download'
import { Faq } from '@/components/home/Faq'
import { Features } from '@/components/home/Features'
import { Hero } from '@/components/home/Hero'
import { Numbers } from '@/components/home/Numbers'
import { PrivacyGlance } from '@/components/home/PrivacyGlance'
import { Showcase } from '@/components/home/Showcase'
import { getReciterCount } from '@/lib/catalog'
import type { Locale } from '@/lib/site'

export async function HomePage({ locale }: { locale: Locale }) {
  const reciters = await getReciterCount()
  return (
    <>
      <SiteHeader locale={locale} />
      <main id="main" className="flex-auto">
        <Hero locale={locale} />
        <Features locale={locale} />
        <Numbers locale={locale} reciters={reciters} />
        <Showcase locale={locale} />
        <PrivacyGlance locale={locale} />
        <Faq locale={locale} />
        <Download locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </>
  )
}
