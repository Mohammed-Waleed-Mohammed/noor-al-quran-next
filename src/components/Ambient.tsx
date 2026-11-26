'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// WebGL backdrops are decorative: they load lazily (never server-rendered),
// mount only once their area nears the viewport, and are skipped entirely
// when the visitor prefers reduced motion. The static CSS backdrop underneath
// carries the look on its own.

const LightRays = dynamic(() => import('@/components/reactbits/LightRays'), { ssr: false })
const Galaxy = dynamic(() => import('@/components/reactbits/Galaxy'), { ssr: false })

function useNearViewport<T extends Element>() {
  const ref = useRef<T>(null)
  const [near, setNear] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, near] as const
}

function saveData() {
  return !!(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData
}

/**
 * Hero moonbeam. Starts only once the page is idle (so it never competes with
 * first paint), and is skipped on small screens and in data-saver mode — the
 * hero photo already carries the moonlight there.
 */
export function MoonRays({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [ref, near] = useNearViewport<HTMLDivElement>()
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (saveData() || window.matchMedia('(max-width: 767px)').matches) return
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(() => setReady(true), 1200)
    return () => window.clearTimeout(t)
  }, [])
  return (
    <div ref={ref} aria-hidden="true" className={className}>
      {near && ready && !reduce && (
        <LightRays
          raysOrigin="top-center"
          raysColor="#BFD3F5"
          raysSpeed={0.35}
          lightSpread={0.7}
          rayLength={1.6}
          intensity={0.55}
          glow={0.4}
          haze={0.2}
          followMouse={false}
          cursorShadow={false}
          clickPulse={false}
          opacity={0.7}
          maxDevicePixelRatio={1.5}
        />
      )}
    </div>
  )
}

export function StarField({ className }: { className?: string }) {
  const reduce = useReducedMotion()
  const [ref, near] = useNearViewport<HTMLDivElement>()
  const [allowed, setAllowed] = useState(false)
  useEffect(() => setAllowed(!saveData()), [])
  return (
    <div ref={ref} aria-hidden="true" className={className}>
      {near && allowed && !reduce && (
        <Galaxy
          transparent
          intro={false}
          density={0.5}
          starSpeed={0.02}
          speed={0.15}
          flareIntensity={0.35}
          starSize={0.8}
          layers={3}
          rotationSpeed={0.02}
          glowIntensity={0.25}
          twinkleIntensity={0.4}
          saturation={0}
          mouseInteraction={false}
          mouseRepulsion={false}
          clickWarp={false}
          starColors={['#E6E8EF', '#BFD3F5', '#7C8CE0']}
          dpr={1.5}
        />
      )}
    </div>
  )
}
