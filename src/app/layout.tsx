import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nooralquran.app'),
  title: {
    template: '%s · Noor Al-Quran',
    default: 'Noor Al-Quran · Listen to the Quran anytime, anywhere.',
  },
  description:
    'Noor Al-Quran is a comprehensive Quran listening app featuring 13 renowned reciters, offline downloads, live radio stations, Athkar, sleep timer, and bilingual Arabic-English support.',
  keywords: [
    'Noor Al-Quran',
    'Quran app',
    'Quran recitation',
    'Islamic app',
    'Offline Quran',
    'Quran radio',
    'Athkar',
    'Muslim app',
    'Quran reciters',
    'Quran audio',
  ],
  authors: [{ name: 'Noor Al-Quran' }],
  openGraph: {
    title: 'Noor Al-Quran · Your companion for daily recitation',
    description:
      'Listen to 13 world-renowned reciters, download surahs for offline listening, tune into live Quran radio, and track your listening habits — all for free.',
    url: '/',
    siteName: 'Noor Al-Quran',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Noor Al-Quran hero preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Al-Quran · 13 Reciters, Offline Downloads, Live Radio',
    description:
      'A beautifully crafted Quran listening app with 13 reciters, offline downloads, 30+ radio stations, Athkar, and listening stats — completely free.',
    images: ['/twitter-image'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/manifest.json',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
