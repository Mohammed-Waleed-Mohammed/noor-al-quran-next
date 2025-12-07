import clsx from 'clsx'
import Link from 'next/link'
import { FaGooglePlay } from 'react-icons/fa'

type PlayStoreLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string
  variant?: 'default' | 'compact'
}

export function PlayStoreLink({
  className,
  href = '#',
  variant = 'default',
  ...props
}: PlayStoreLinkProps) {
  const sizing =
    variant === 'compact'
      ? {
          wrapper: 'gap-1.5 px-2.5 py-1 rounded-lg',
          icon: 'text-lg',
          eyebrow: 'text-[0.5rem] tracking-[0.15em]',
          headline: 'text-base',
        }
      : {
          wrapper: 'gap-3 px-4 py-2 rounded-xl',
          icon: 'text-3xl',
          eyebrow: 'text-[0.65rem] tracking-[0.25em]',
          headline: 'text-2xl',
        }

  return (
    <Link
      aria-label="Get it on Google Play"
      href={href}
      className={clsx(
        'group inline-flex items-center border border-white/40 bg-black text-white shadow-lg shadow-black/30 transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4932B0]',
        sizing.wrapper,
        className,
      )}
      {...props}
    >
      <FaGooglePlay
        className={clsx(sizing.icon, 'text-white transition group-hover:scale-105')}
        aria-hidden="true"
      />
      <span className="text-left leading-none">
        <span
          className={clsx(
            'block font-semibold uppercase text-white/80',
            sizing.eyebrow,
          )}
        >
          Get it on
        </span>
        <span
          className={clsx(
            'block font-semibold tracking-tight text-white',
            sizing.headline,
          )}
        >
          Google&nbsp;Play
        </span>
      </span>
    </Link>
  )
}

