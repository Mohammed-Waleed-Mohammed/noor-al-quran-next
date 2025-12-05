import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How many reciters are available?',
      answer:
        'We add new reciters regularly. You can submit requests through in-app feedback so we know who to prioritize.',
    },
    {
      question: 'Can I listen offline?',
      answer:
        'Yes, download individual surahs or entire playlists and listen without an internet connection.',
    },
    {
      question: 'Is the app free?',
      answer:
        'Core features are free. Optional subscriptions help us cover hosting costs and bring new recitations to Noor Al-Quran.',
    },
    {
      question: 'What audio quality do you provide?',
      answer:
        'High-quality 128 kbps MP3 is the default, with adaptive bitrate options for slower networks.',
    },
  ],
  [
    {
      question: 'Will you add translations?',
      answer:
        'Yes, translations and tafsir audio are on our roadmap. Join our newsletter for updates.',
    },
    {
      question: 'How do I report an issue?',
      answer:
        'Use the in-app Support tab or email support@nooralquran.app and our team will reply quickly.',
    },
    {
      question: 'Is my data private?',
      answer:
        'We don’t sell or share personal listening data. See our privacy policy in the app for full details.',
    },
    {
      question: 'What devices are supported?',
      answer:
        'Noor Al-Quran is available on Android (Play Store) and coming soon to iOS.',
    },
  ],
  [
    {
      question: 'Can families share playlists?',
      answer:
        'Yes, invite family members to follow your playlists or upgrade to the Family plan for shared libraries.',
    },
    {
      question: 'How often do you add new recitations?',
      answer:
        'We publish new reciters and curated playlists every week based on community requests.',
    },
    {
      question: 'Do you offer prayer-time reminders?',
      answer:
        'Smart reminders can alert you before salah or when new recitations from your favorite qaris are released.',
    },
    {
      question: 'Can I use Noor Al-Quran while traveling?',
      answer:
        'Absolutely. Download surahs ahead of time or use adaptive streaming for smooth playback on slow connections.',
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

