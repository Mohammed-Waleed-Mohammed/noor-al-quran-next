'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

/** Sticky table of contents that highlights the section in view. */
export function Toc({ title, items }: { title: string; items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [items])

  return (
    <nav aria-label={title}>
      <p className="text-sm font-semibold text-ink">{title}</p>
      <ol className="mt-4 space-y-1 border-s border-divider text-sm">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
              className={clsx(
                '-ms-px block border-s-2 py-1.5 ps-4 transition-colors',
                active === item.id
                  ? 'border-periwinkle-deep font-semibold text-periwinkle-ink'
                  : 'border-transparent text-ink-soft hover:text-ink',
              )}
            >
              <span className="font-latin me-2 text-xs">{i + 1}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
