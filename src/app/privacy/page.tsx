import type { Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Noor Al-Quran protects your privacy while you listen and download Quran recitations.',
}

export default function PrivacyPolicy() {
  return (
    <main className="py-16 sm:py-24">
      <Container className="max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-[#4932B0] transition-colors hover:text-[#6b4fd1] focus-visible:outline-hidden"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
        <p className="mt-6 text-sm font-semibold tracking-tight text-[#4932B0]">
          Noor Al-Quran – Privacy Policy
        </p>
        <h1 className="mt-2 text-4xl font-medium tracking-tight text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Effective Date: December 4, 2025
        </p>
        <p className="mt-6 text-lg text-gray-700">
          Noor Al-Quran is built solely to help you listen to and download Quran
          recitations. We do not collect personal data, create user accounts,
          track behavior, or share information with advertisers. This privacy
          policy explains our minimal data practices.
        </p>
        <article className="mt-10 space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information We Do Not Collect
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>We do not ask you to register or log in.</li>
              <li>
                We do not collect names, email addresses, phone numbers, or
                payment details.
              </li>
              <li>
                We do not record audio, access contacts, or track location.
              </li>
              <li>
                We do not use advertising IDs or analytics that identify you
                personally.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Limited Information We Use
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Local settings on your device (favorites, downloads, last played
                surah). These stay on your device unless you uninstall the app.
              </li>
              <li>
                Basic device diagnostics (e.g., crash reports, anonymous
                performance data) to improve stability. These logs never include
                personal information and cannot identify you.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Permissions
            </h2>
            <p className="mt-4">
              All permissions are optional and solely for listening features:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Storage – to save downloaded surahs for offline playback.</li>
              <li>
                Network access – to stream audio and check for new recitations.
              </li>
              <li>
                Notifications – only if you enable them, for reminders or
                download completion.
              </li>
            </ul>
            <p className="mt-4">
              We never use permissions for tracking or unrelated purposes.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. How We Use Information
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Stream Quran audio.</li>
              <li>Manage downloads and offline playback.</li>
              <li>
                Remember your last played surah and favorite reciters locally.
              </li>
            </ul>
            <p className="mt-4">
              We do not profile users, sell data, or use targeted advertising.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Data Security
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Downloaded files and preferences stay on your device storage.
              </li>

              <li>
                If you uninstall the app, all locally stored data is deleted
                automatically.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Data Retention
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                Local data remains until you delete it or uninstall the app.
              </li>
              <li>
                Anonymous crash logs are retained only as long as needed for
                troubleshooting.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Children’s Privacy
            </h2>
            <p className="mt-4">
              Noor Al-Quran is suitable for all ages. We do not collect data
              from children or adults. Parents and guardians remain in control
              of device permissions and downloads.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. International Use
            </h2>
            <p className="mt-4">
              The app may use servers hosted in different regions to deliver
              audio files quickly, but no personal data is transmitted.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Third-Party Links
            </h2>
            <p className="mt-4">
              If the app references external Quran resources or websites, those
              sites have their own privacy policies. We do not share data with
              them.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Updates to This Policy
            </h2>
            <p className="mt-4">
              We may update this policy to reflect improvements or legal
              requirements. When changes occur, we will update the effective
              date within the app and on our website. Continued use of Noor
              Al-Quran confirms acceptance of the updated policy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Contact Us
            </h2>
            <p className="mt-4">
              If you have questions or requests regarding privacy:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Email: mohammed.waleed.mohammed999@gmail.com</li>
              <li>Website: https://nooralquran.app/privacy</li>
            </ul>
          </section>
        </article>
      </Container>
    </main>
  )
}
