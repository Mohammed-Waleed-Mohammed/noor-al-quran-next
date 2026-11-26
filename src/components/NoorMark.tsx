'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import { MARK, MARK_SYMBOL_VIEWBOX } from '@/lib/mark'

type Props = {
  /** Draw the indigo tile behind the symbol (use on light surfaces). */
  tile?: boolean
  /** Stroke-draw the arch, then reveal the rest, once on mount. */
  animate?: boolean
  className?: string
  title?: string
}

const ease = [0.42, 0, 0.58, 1] as const

export function NoorMark({ tile = false, animate = false, className, title }: Props) {
  const id = useId().replace(/:/g, '')
  // Always keep the same initial/animate props so the server-rendered first
  // frame resolves on the client; reduced motion just makes it instant.
  const reduce = useReducedMotion()
  const c = MARK.colors
  const timing = (delay: number, duration: number) =>
    reduce ? { duration: 0 } : { delay, duration, ease }

  const reveal = (delay: number) =>
    animate
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: timing(delay, 0.6),
        }
      : {}

  return (
    <svg
      viewBox={tile ? '0 0 1024 1024' : MARK_SYMBOL_VIEWBOX}
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <defs>
        <radialGradient id={`${id}g`} cx="512" cy="650" r="470" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={c.glow[0]} />
          <stop offset="0.3" stopColor={c.glow[1]} />
          <stop offset="0.62" stopColor={c.glow[2]} />
          <stop offset="1" stopColor={c.glow[3]} />
        </radialGradient>
        <clipPath id={`${id}a`}>
          <path d={MARK.arch} />
        </clipPath>
      </defs>
      {tile && <rect width="1024" height="1024" rx="228" fill={MARK.background} />}
      <motion.g {...reveal(0.9)}>
        <path d={MARK.arch} fill={`url(#${id}g)`} />
        <path
          d={MARK.arch}
          fill="none"
          stroke={c.archLine}
          strokeWidth={44}
          clipPath={`url(#${id}a)`}
        />
      </motion.g>
      <motion.path
        d={MARK.arch}
        fill="none"
        stroke={c.archBand}
        strokeWidth={34}
        strokeLinejoin="round"
        {...(animate
          ? {
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: timing(0, 1.4),
            }
          : {})}
      />
      <motion.path d={MARK.crescent} fill={c.crescent} fillRule="evenodd" {...reveal(1.2)} />
      <g fill="none" stroke={c.arcs} strokeWidth={9} strokeLinecap="round">
        {MARK.arcs.map((d, i) => (
          <motion.path key={d} d={d} {...reveal(1.9 - i * 0.2)} />
        ))}
      </g>
      <motion.g strokeLinejoin="round" {...reveal(1.0)}>
        <path d={MARK.cover} fill={MARK.background} stroke={c.pearl} strokeWidth={12} />
        <path d={MARK.pageStack} fill={c.pearl} stroke={c.line} strokeWidth={6} />
        <path d={MARK.pageLeft} fill={c.page} stroke={c.line} strokeWidth={6} />
        <path d={MARK.pageRight} fill={c.page} stroke={c.line} strokeWidth={6} />
        <ellipse cx="512" cy="828" rx="20" ry="11" fill={c.line} />
      </motion.g>
    </svg>
  )
}
