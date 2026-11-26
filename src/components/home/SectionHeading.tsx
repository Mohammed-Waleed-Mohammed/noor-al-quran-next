import clsx from 'clsx'

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'night',
}: {
  eyebrow: string
  title: string
  lead?: string
  align?: 'center' | 'start'
  tone?: 'night' | 'light'
}) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={clsx(
          'text-sm font-semibold tracking-wide',
          tone === 'night' ? 'text-periwinkle' : 'text-periwinkle-deep',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={clsx(
          'mt-3 text-3xl leading-tight font-semibold text-balance sm:text-4xl',
          tone === 'night' ? 'text-on-night' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={clsx('mt-4 text-lg', tone === 'night' ? 'text-on-night-soft' : 'text-ink-soft')}>
          {lead}
        </p>
      )}
    </div>
  )
}
