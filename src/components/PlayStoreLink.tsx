import clsx from 'clsx'
import Link from 'next/link'
import { FaGooglePlay } from 'react-icons/fa'

type PlayStoreLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string
}

export function PlayStoreLink({
  className,
  href = '#',
  ...props
}: PlayStoreLinkProps) {
  return (
    <Link
      aria-label="Get it on Google Play"
      href={href}
      className={clsx(
        'inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-white shadow-lg shadow-gray-900/30 transition-colors hover:bg-gray-800 focus-visible:outline-hidden',
        className,
      )}
      {...props}
    >
      <FaGooglePlay className="h-6 w-6 flex-none" aria-hidden="true" />
      <span className="ml-3 text-left leading-none">
        <span className="block text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
          Get it on
        </span>
        <span className="block text-base font-semibold leading-tight">
          Google Play
        </span>
      </span>
    </Link>
  )
}

