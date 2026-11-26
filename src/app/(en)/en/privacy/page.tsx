import { PrivacyPage, privacyMetadata } from '@/components/privacy/PrivacyPage'

export const metadata = privacyMetadata('en')

export default function Page() {
  return <PrivacyPage locale="en" />
}
