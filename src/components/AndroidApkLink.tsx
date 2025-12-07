import clsx from 'clsx'
import Link from 'next/link'
import { FaAndroid } from 'react-icons/fa'

type AndroidApkLinkProps = React.ComponentPropsWithoutRef<typeof Link> & {
  className?: string
  variant?: 'default' | 'compact'
}

export const AndroidApkLink = ({
  className,
  href = '/noor-al-quran.apk',
  download = true,
  variant = 'default',
  ...props
}: AndroidApkLinkProps) => {
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
      href={href}
      download={download}
      aria-label="Download Noor Al-Quran Android APK"
      className={clsx(
        'group inline-flex items-center border border-white/40 bg-black text-white shadow-lg shadow-black/30 transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#4932B0] focus-visible:outline-none',
        sizing.wrapper,
        className,
      )}
      {...props}
    >
      <FaAndroid
        className={clsx(
          sizing.icon,
          'text-white transition group-hover:scale-105',
        )}
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span
          className={clsx(
            'font-semibold text-white/80 uppercase',
            sizing.eyebrow,
          )}
        >
          Download APK
        </span>
        <span
          className={clsx(
            'font-semibold tracking-tight text-white',
            sizing.headline,
          )}
        >
          android
        </span>
      </span>
    </Link>
  )
}
