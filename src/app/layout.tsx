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
    'Noor Al-Quran lets you stream, download, and share beautiful Quran recitations with smart reminders, offline access, and curated playlists.',
  keywords: [
    'Noor Al-Quran',
    'Quran app',
    'Quran recitation',
    'Islamic app',
    'Offline Quran',
    'Prayer reminders',
  ],
  authors: [{ name: 'Noor Al-Quran' }],
  openGraph: {
    title: 'Noor Al-Quran · Your companion for daily recitation',
    description:
      'Stream, download, and share Quran recitations with Noor Al-Quran. Enjoy curated playlists, offline listening, and smart reminders on any device.',
    url: '/',
    siteName: 'Noor Al-Quran',
    images: [
      {
        url: '/icon1.png',
        width: 512,
        height: 512,
        alt: 'Noor Al-Quran logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Al-Quran · Listen to the Quran anytime, anywhere',
    description:
      'The Noor Al-Quran app delivers high-quality recitations, offline downloads, and prayer-time reminders. Perfect for daily listening and family sharing.',
    images: ['/icon1.png'],
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
