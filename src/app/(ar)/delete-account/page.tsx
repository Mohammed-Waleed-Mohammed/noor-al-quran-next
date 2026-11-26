import { DeleteAccountPage, deleteAccountMetadata } from '@/components/privacy/DeleteAccountPage'

export const metadata = deleteAccountMetadata('ar')

export default function Page() {
  return <DeleteAccountPage locale="ar" />
}
