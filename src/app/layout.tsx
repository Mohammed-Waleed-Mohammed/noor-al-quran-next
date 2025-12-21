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
    default: 'Noor Al-Quran · Recite, reflect, and stay connected.',
  },
  description:
    'Noor Al-Quran is the modern Quran recitation companion with curated reciters, AI-assisted playlists, offline downloads, and gentle prayer reminders for every moment.',
  keywords: [
    'Noor Al-Quran',
    'Quran app',
    'Quran recitation',
    'Islamic app',
    'Offline Quran',
    'Prayer reminders',
    'Quran playlists',
    'Muslim app',
  ],
  authors: [{ name: 'Noor Al-Quran' }],
  openGraph: {
    title: 'Noor Al-Quran · Your companion for daily recitation',
    description:
      'Stream calming recitations, save offline favorites, and stay on track with smart reminders in the Noor Al-Quran app.',
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
    title: 'Noor Al-Quran · Recite on any schedule',
    description:
      'A beautifully crafted Quran recitation app with curated reciters, offline downloads, and mindful reminders.',
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
