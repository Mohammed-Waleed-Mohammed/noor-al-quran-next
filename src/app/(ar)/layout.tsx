import '@/styles/tailwind.css'

import { RootHtml } from '@/components/RootHtml'
import { fontVariables } from '@/lib/fonts-ar'
import { rootMetadata } from '@/lib/metadata'

export { viewport } from '@/lib/metadata'
export const metadata = rootMetadata('ar')

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="ar" fontClass={fontVariables}>{children}</RootHtml>
}
