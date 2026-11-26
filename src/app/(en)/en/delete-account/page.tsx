import { DeleteAccountPage, deleteAccountMetadata } from '@/components/privacy/DeleteAccountPage'

export const metadata = deleteAccountMetadata('en')

export default function Page() {
  return <DeleteAccountPage locale="en" />
}
