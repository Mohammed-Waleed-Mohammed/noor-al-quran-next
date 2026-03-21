import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How many reciters are available?',
      answer:
        'Noor Al-Quran features 13 world-renowned reciters including Mishary Al-Afasy, Abdul Basit, Maher Al-Muaiqly, Abdurrahman As-Sudais, Saad Al-Ghamdi, and more — many with multiple recitation styles like Mujawwad, Murattal, and teaching modes.',
    },
    {
      question: 'Can I listen offline?',
      answer:
        'Yes. Download individual surahs or entire reciter catalogs to your device. You can manage your downloads, track progress, and listen without any internet connection.',
    },
    {
      question: 'Is the app free?',
      answer:
        'Noor Al-Quran is completely free — no subscriptions, no in-app purchases, no ads. Every feature is available to all users at no cost.',
    },
    {
      question: 'What are the radio stations?',
      answer:
        'The app includes 30+ live radio stations streaming Quran recitations, Tafseer (interpretation), Fatwas, Islamic lectures, and Prophet biography channels from trusted sources worldwide.',
    },
  ],
  [
    {
      question: 'What are Athkar?',
      answer:
        'Athkar are Islamic supplications for daily life. The app includes 50+ Athkar with Arabic text and audio — covering morning, evening, sleep, travel, prayer, and more.',
    },
    {
      question: 'How do I report an issue?',
      answer:
        'Email us at support@nooralquran.app and our team will reply as quickly as possible.',
    },
    {
      question: 'Is my data private?',
      answer:
        'Absolutely. Noor Al-Quran collects no personal data whatsoever. All your favorites, downloads, and listening history stay entirely on your device.',
    },
    {
      question: 'What devices are supported?',
      answer:
        'Noor Al-Quran is available on Android via the Google Play Store and as a direct APK download. iOS support is coming soon.',
    },
  ],
  [
    {
      question: 'Does the app support Arabic and English?',
      answer:
        'Yes. The entire app is fully bilingual with Arabic and English interfaces, including full RTL (right-to-left) support for Arabic.',
    },
    {
      question: 'What playback features are available?',
      answer:
        'You can adjust playback speed (0.5x to 2.0x), set repeat modes (single surah or all), use a sleep timer (10–60 minutes), save bookmarks, and access an audio equalizer on Android.',
    },
    {
      question: 'Does the app track my listening?',
      answer:
        'Yes, locally. The app tracks your daily, weekly, and all-time listening statistics — all stored on your device, never sent anywhere.',
    },
    {
      question: 'Can I use Noor Al-Quran while traveling?',
      answer:
        'Absolutely. Download surahs before your trip for offline listening, or stream directly. The app also supports background playback with notification controls.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@nooralquran.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

