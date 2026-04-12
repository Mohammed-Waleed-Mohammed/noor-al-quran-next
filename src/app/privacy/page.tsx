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
          Effective Date: April 12, 2026
        </p>
        <p className="mt-6 text-lg text-gray-700">
          Noor Al-Quran helps you listen to, download, and track your Quran
          recitations. This privacy policy explains what data we collect, how we
          use it, and the choices you have. We are committed to transparency and
          safeguarding your privacy.
        </p>

        <article className="mt-10 space-y-10 text-gray-700">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              1. Information You Provide Directly
            </h2>
            <p className="mt-4">
              Account creation is <strong>optional</strong>. If you choose to
              create an account, we collect:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Email address</strong> – used for account
                authentication and password reset.
              </li>
              <li>
                <strong>Password</strong> – securely hashed and stored via
                Firebase Authentication. We never store passwords in plain text.
              </li>
              <li>
                <strong>Display name</strong> – used for identification within
                the app and on leaderboards. If not provided, a random name is
                generated automatically.
              </li>
            </ul>
            <p className="mt-4">
              If you sign in with <strong>Google</strong>, we receive your name,
              email address, and profile photo URL from Google. We do not access
              any other data from your Google account.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              2. Information Collected Automatically
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Country code</strong> – auto-detected from your
                device&apos;s locale settings, used for country-based
                leaderboards and localization. You can change this at any time.
              </li>
              <li>
                <strong>Timezone</strong> – auto-detected from your device, used
                for time-related calculations. You can change this in settings.
              </li>
              <li>
                <strong>Network type</strong> (WiFi, mobile data, or none) –
                checked in real-time to support the WiFi-only download feature.
                This information is not stored or transmitted.
              </li>
              <li>
                <strong>Listening statistics</strong> – daily listening duration
                per calendar date, tracked automatically during audio playback.
                Stored locally on your device.
              </li>
              <li>
                <strong>Achievement points</strong> – points earned based on the
                percentage of each Surah listened to, calculated and stored per
                Surah, per day, with an all-time total.
              </li>
              <li>
                <strong>Bookmarks</strong> – marked positions in Quranic audio
                (reciter, Surah number, playback position, timestamp). Up to 50
                bookmarks stored locally.
              </li>
              <li>
                <strong>Favorites</strong> – your favorite reciters and Surah
                combinations, stored locally.
              </li>
              <li>
                <strong>Playback state</strong> – your position in each audio
                track, playback speed, repeat mode, and last played
                reciter/Surah for the resume feature.
              </li>
              <li>
                <strong>Download records</strong> – metadata about which Surahs
                you have downloaded for offline listening.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              3. Information We Do Not Collect
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>We do not collect your precise geolocation (GPS).</li>
              <li>
                We do not collect device identifiers (IMEI, advertising IDs).
              </li>
              <li>
                We do not use analytics services (Google Analytics, Firebase
                Analytics, Amplitude, Mixpanel, etc.).
              </li>
              <li>
                We do not use crash reporting services (Crashlytics, Sentry,
                etc.).
              </li>
              <li>
                We do not display advertisements or use ad tracking networks.
              </li>
              <li>
                We do not access your contacts, camera, microphone, or phone
                data.
              </li>
              <li>
                We do not perform behavioral tracking or profiling for
                advertising purposes.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              4. How We Use Your Information
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Account authentication</strong> – email, password, or
                Google credentials.
              </li>
              <li>
                <strong>Personalization</strong> – display name, language
                preference, theme, and country.
              </li>
              <li>
                <strong>Audio playback &amp; resume</strong> – playback
                position, last session state, and bookmarks.
              </li>
              <li>
                <strong>Listening progress tracking</strong> – listening
                duration and achievement points.
              </li>
              <li>
                <strong>Leaderboard &amp; rankings</strong> – display name,
                country, and total points.
              </li>
              <li>
                <strong>Cloud backup &amp; sync</strong> – achievement history,
                total points, display name, and country (only if you have an
                account).
              </li>
              <li>
                <strong>Offline listening</strong> – download metadata and audio
                files on your device.
              </li>
              <li>
                <strong>Notifications</strong> – local playback notifications
                only (no push notifications from our servers).
              </li>
              <li>
                <strong>Home screen widget</strong> – currently playing track,
                last session info, and daily athkar.
              </li>
            </ul>
            <p className="mt-4">
              We do not profile users, sell data, or use targeted advertising.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              5. Data Storage
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Local Storage
            </h3>
            <p className="mt-2">
              The majority of your data is stored locally on your device,
              including settings, listening statistics, bookmarks, favorites,
              download metadata, and audio files. Local data is protected by
              your device&apos;s built-in operating system security.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Cloud Storage (Firebase)
            </h3>
            <p className="mt-2">
              If you create an account or sign in, the following data is stored
              on Google Firebase servers:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>Display name</li>
              <li>Country code</li>
              <li>Total achievement points</li>
              <li>
                Daily point history (per-Surah listening fractions and points)
              </li>
              <li>Last backup timestamp</li>
              <li>Ranking position (worldwide and per-country)</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Using the App Without an Account
            </h3>
            <p className="mt-2">
              You can use the app fully{' '}
              <strong>without creating an account</strong>. In this case, all
              data remains on your device only, no personal data is sent to any
              server, and leaderboard features will not be available.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              6. Third-Party Services &amp; Data Sharing
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Firebase (Google)
            </h3>
            <p className="mt-2">
              We use Google Firebase for authentication and database services.
              Firebase processes data in accordance with{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4932B0] underline hover:text-[#6b4fd1]"
              >
                Google&apos;s Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://firebase.google.com/terms/data-processing-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4932B0] underline hover:text-[#6b4fd1]"
              >
                Firebase&apos;s Data Processing Terms
              </a>
              .
            </p>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Google Sign-In
            </h3>
            <p className="mt-2">
              If you choose Google Sign-In, authentication is handled via
              Google&apos;s OAuth 2.0 protocol. We receive only your name,
              email, and profile photo URL.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              External Content Providers
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>QuranicAudio</strong> – for downloading Quran recitation
                audio files. Only standard HTTP request data is shared (IP
                address, user-agent). No personal identifiers are sent.
              </li>
              <li>
                <strong>Al-Quran Cloud API</strong> – for fetching Arabic
                Quranic text. Only the Surah number is sent. No personal data is
                transmitted.
              </li>
              <li>
                <strong>Hisn Muslim API</strong> – for Islamic remembrances
                (Athkar) audio and text. Only the Athkar ID is sent. No personal
                data is transmitted.
              </li>
              <li>
                <strong>Islamic Radio Stations</strong> – embedded radio stream
                URLs. Only standard network connection data is shared with
                stream providers.
              </li>
            </ul>
            <p className="mt-4">
              We do <strong>not sell</strong>, rent, lease, or trade your
              personal information to any third party. The app contains{' '}
              <strong>no advertisements</strong> and we do not share data with
              advertising networks or data brokers.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              7. Leaderboard &amp; Public Visibility
            </h2>
            <p className="mt-4">
              If you have an account and access the Rankings tab, your data may
              appear on public leaderboards. The following information is
              publicly visible:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Display name</li>
              <li>Country</li>
              <li>Total points</li>
              <li>Rank position</li>
            </ul>
            <p className="mt-4">
              Your email address, timezone, listening history details, bookmarks,
              and favorites are <strong>never</strong> publicly visible.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              8. Permissions
            </h2>
            <p className="mt-4">
              The app requests only the permissions necessary for its core
              features:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Internet</strong> – to download audio, sync data, and
                fetch Quran text.
              </li>
              <li>
                <strong>Network State</strong> – to check WiFi connectivity for
                download settings.
              </li>
              <li>
                <strong>Foreground Service</strong> – to continue audio playback
                in the background.
              </li>
              <li>
                <strong>Wake Lock</strong> – to prevent device sleep during
                audio playback.
              </li>
              <li>
                <strong>Notifications</strong> – for local playback and reminder
                notifications (opt-in on iOS).
              </li>
            </ul>
            <p className="mt-4">
              The app does <strong>not</strong> request permissions for camera,
              microphone, contacts, location, phone, SMS, calendar, or storage
              beyond app-specific directories.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              9. Data Security
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                All communications with Firebase and external APIs use
                HTTPS/TLS encryption.
              </li>
              <li>
                Passwords are hashed by Firebase Authentication and never stored
                in plain text.
              </li>
              <li>
                Google Sign-In uses industry-standard OAuth 2.0 protocol.
              </li>
              <li>
                Local data is stored in app-specific directories protected by
                your device&apos;s operating system.
              </li>
              <li>
                Firebase Security Rules restrict database access so each user
                can only read and write their own data.
              </li>
            </ul>
            <p className="mt-4">
              While we take reasonable measures to protect your information, no
              method of electronic transmission or storage is 100% secure.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              10. Data Retention &amp; Deletion
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              Local Data
            </h3>
            <p className="mt-2">
              All locally stored data is retained on your device until you
              manually delete it within the app, clear the app&apos;s data
              through device settings, or uninstall the app.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              Cloud Data
            </h3>
            <p className="mt-2">
              Your cloud data is retained for as long as your account exists.
              When you delete your account, we remove your user profile, ranking
              data, and achievement history from Firebase.
            </p>
            <p className="mt-2">
              After account deletion, any locally stored data (listening
              statistics, bookmarks, favorites, downloaded audio) remains on
              your device and must be cleared separately.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              11. Your Rights &amp; Choices
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <strong>Access &amp; Review</strong> – view your personal data
                at any time through the Profile, Stats, Rankings, and Settings
                pages.
              </li>
              <li>
                <strong>Correction</strong> – update your display name, country,
                language preference, theme, and playback settings at any time.
              </li>
              <li>
                <strong>Deletion</strong> – delete individual bookmarks,
                downloaded content, or use the &quot;Delete Account&quot; option
                to remove all cloud data. Clear all local data via device
                settings or by uninstalling the app.
              </li>
              <li>
                <strong>Opt-out of Cloud Sync</strong> – use the app without
                creating an account, and no data is sent to our servers.
              </li>
              <li>
                <strong>Data Portability</strong> – you may contact us to
                request a copy of your data stored on our servers.
              </li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              12. Children&apos;s Privacy
            </h2>
            <p className="mt-4">
              Noor Al-Quran is suitable for all ages and does not knowingly
              collect personal information from children under the age of 13 (or
              the applicable age in your jurisdiction) without parental consent.
              The app does not contain age-inappropriate content, advertisements,
              or in-app purchases. If you are a parent or guardian and believe
              your child has provided personal information through account
              creation, please contact us and we will take steps to delete that
              information.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              13. International Data Transfers
            </h2>
            <p className="mt-4">
              If you create an account, your data may be processed and stored on
              Firebase servers located outside your country of residence. Google
              Firebase stores data in accordance with Google&apos;s data
              processing agreements and applicable data protection laws. By
              using the app with an account, you consent to the transfer of your
              data to servers that may be located in a different jurisdiction.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              14. Updates to This Policy
            </h2>
            <p className="mt-4">
              We may update this policy to reflect improvements or legal
              requirements. When changes occur, we will update the effective
              date within the app and on our website. Continued use of Noor
              Al-Quran confirms acceptance of the updated policy.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">
              15. Contact Us
            </h2>
            <p className="mt-4">
              If you have questions, concerns, or requests regarding privacy:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                Email:{' '}
                <a
                  href="mailto:mohammed.waleed.mohammed999@gmail.com"
                  className="text-[#4932B0] underline hover:text-[#6b4fd1]"
                >
                  mohammed.waleed.mohammed999@gmail.com
                </a>
              </li>
              <li>
                Website:{' '}
                <a
                  href="https://nooralquran.app/privacy"
                  className="text-[#4932B0] underline hover:text-[#6b4fd1]"
                >
                  https://nooralquran.app/privacy
                </a>
              </li>
            </ul>
          </section>
        </article>
      </Container>
    </main>
  )
}
