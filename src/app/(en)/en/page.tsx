import type { Metadata } from 'next'

import { HomePage } from '@/components/home/HomePage'
import { pageAlternates } from '@/lib/metadata'

export const revalidate = 604800

export const metadata: Metadata = { alternates: pageAlternates('en', '') }

export default function Page() {
  return <HomePage locale="en" />
}
