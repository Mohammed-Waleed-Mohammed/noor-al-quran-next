import { Plus } from 'lucide-react'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/home/SectionHeading'
import { homeDict } from '@/i18n/home'
import { CONTACT_EMAIL, type Locale } from '@/lib/site'

export function Faq({ locale }: { locale: Locale }) {
  const t = homeDict[locale].faq
  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <SectionHeading eyebrow={t.eyebrow} title={t.title} align="start" />
          <p className="mt-4 text-on-night-soft">
            {t.lead}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ice underline-offset-4 hover:underline">
              {t.contact}
            </a>
          </p>
        </div>
        <div className="divide-y divide-pearl/10 border-y border-pearl/10">
          {t.items.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 text-start text-lg font-medium text-on-night [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-periwinkle transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 text-on-night-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
