import '@/styles/tailwind.css'

import { RootHtml } from '@/components/RootHtml'
import { fontVariables } from '@/lib/fonts-en'
import { rootMetadata } from '@/lib/metadata'

export { viewport } from '@/lib/metadata'
export const metadata = rootMetadata('en')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="en" fontClass={fontVariables}>{children}</RootHtml>
}
