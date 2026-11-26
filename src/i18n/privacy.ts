import type { Locale } from '@/lib/site'

// Privacy policy content. Verified against the app source
// (quran-noor-mobile @ main, v1.5.0): lib/firebase/*, lib/services/*,
// android/app/src/main/AndroidManifest.xml, pubspec.yaml.
// When the app changes what it collects, update this file AND
// PRIVACY_UPDATED in lib/site.ts.

export type Block =
  | { p: string }
  | { h: string }
  | { ul: string[] }
  | { table: { head: [string, string]; rows: [string, string][] } }
  | { note: string }

export type Section = { id: string; title: string; blocks: Block[] }

type PrivacyDict = {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  title: string
  updated: string
  intro: string
  glanceTitle: string
  glance: string[]
  tocTitle: string
  backHome: string
  sections: Section[]
}

const ar: PrivacyDict = {
  metaTitle: 'سياسة الخصوصية',
  metaDescription:
    'ما البيانات التي يتعامل معها تطبيق نور القرآن، وأين تُحفظ، ومع من تُشارك، وكيف تحذفها.',
  eyebrow: 'نور القرآن',
  title: 'سياسة الخصوصية',
  updated: 'آخر تحديث',
  intro:
    'توضح هذه السياسة البيانات التي يتعامل معها تطبيق «نور القرآن» لأجهزة أندرويد وهذا الموقع، وأين تُحفظ، ومع من تُشارك، وكيف تتحكم فيها. كتبناها بلغة واضحة، وهي تصف ما يفعله التطبيق فعلًا.',
  glanceTitle: 'باختصار',
  glance: [
    'يمكنك استخدام التطبيق كاملًا دون حساب، وتبقى بياناتك حينها على جهازك فقط.',
    'الحساب اختياري، ولا يُرفع منه إلا اسم العرض والبلد والنقاط وسجلها.',
    'يظهر اسم العرض والبلد والنقاط في لوحة الترتيب داخل التطبيق.',
    'لا إعلانات، ولا أدوات تحليلات، ولا تقارير أعطال، ولا بيع للبيانات.',
    'يمكنك حذف حسابك وبياناته من التطبيق في أي وقت، أو طلب ذلك من هذا الموقع.',
  ],
  tocTitle: 'المحتويات',
  backHome: 'العودة إلى الرئيسية',
  sections: [
    {
      id: 'without-account',
      title: 'الاستخدام دون حساب',
      blocks: [
        {
          p: 'كل مزايا الاستماع تعمل دون تسجيل دخول. في هذه الحالة تُحفظ البيانات التالية على جهازك فقط (في مساحة التطبيق الخاصة) ولا تُرسل إلينا:',
        },
        {
          ul: [
            'الإعدادات: اللغة، والمظهر، وسرعة التشغيل، ووضع التكرار، والتنزيل عبر Wi‑Fi فقط، والتذكير اليومي.',
            'القرّاء المفضلون والعلامات المرجعية.',
            'آخر جلسة استماع (القارئ والسورة والموضع) لميزة «تابع الاستماع» وويدجت الشاشة الرئيسية.',
            'إحصاءات الاستماع اليومية، والنقاط وسجلها لكل يوم وسورة.',
            'ملف شخصي محلي: اسم عرض (يُنشأ تلقائيًا مثل muslim12345 إن لم تختر اسمًا)، ورمز البلد المأخوذ من إعدادات لغة ومنطقة جهازك، والمنطقة الزمنية.',
            'الملفات التي تحمّلها: تلاوات وأذكار صوتية، ونسخة مخزنة من فهرس القرّاء والإذاعات.',
          ],
        },
        {
          p: 'إذا اخترت حفظ مقطع مرئي، يُحفظ في معرض الصور على جهازك في ألبوم خاص بالتطبيق.',
        },
      ],
    },
    {
      id: 'account',
      title: 'الحساب الاختياري',
      blocks: [
        {
          p: 'يمكنك إنشاء حساب للظهور في لوحة الترتيب وحفظ نقاطك واستعادتها على جهاز آخر. نستخدم خدمة Firebase Authentication من Google لتسجيل الدخول بإحدى طريقتين:',
        },
        {
          ul: [
            'البريد الإلكتروني وكلمة المرور: تتولى Firebase حفظ كلمة المرور بشكل مشفّر، ولا نطّلع عليها أبدًا.',
            'تسجيل الدخول بحساب Google: تشارك Google معنا اسمك وبريدك الإلكتروني ورابط صورتك. يُستخدم الاسم اسمًا افتراضيًا للعرض، وتُعرض الصورة داخل التطبيق فقط.',
          ],
        },
        {
          p: 'تحتفظ Firebase Authentication بمعرّف الحساب والبريد الإلكتروني وطريقة الدخول وتواريخ الإنشاء وآخر دخول، كما هو معتاد في هذه الخدمة. ولا نكتب بريدك الإلكتروني أو صورتك أو منطقتك الزمنية في قاعدة بياناتنا.',
        },
      ],
    },
    {
      id: 'cloud-data',
      title: 'البيانات المحفوظة في قاعدة البيانات',
      blocks: [
        {
          p: 'عند تسجيل الدخول، يرفع التطبيق ما يلي إلى قاعدة بيانات Firebase Realtime Database تحت معرّف حسابك، بشكل دوري (مثلًا مرة يوميًا وعند فتح صفحة الترتيب):',
        },
        {
          table: {
            head: ['الحقل', 'الغرض'],
            rows: [
              ['اسم العرض', 'يظهر في لوحة الترتيب. يمكنك تغييره في أي وقت.'],
              ['البلد', 'لترتيب بلدك. يُؤخذ من إعدادات الجهاز ويمكنك تغييره.'],
              ['مجموع النقاط', 'لحساب ترتيبك.'],
              ['سجل النقاط اليومي', 'النقاط ونسبة الاستماع لكل سورة في كل يوم، لحفظها واستعادتها.'],
              ['أوقات آخر تحديث ونسخ', 'لمعرفة آخر مزامنة.'],
            ],
          },
        },
      ],
    },
    {
      id: 'leaderboard',
      title: 'لوحة الترتيب',
      blocks: [
        {
          p: 'تعمل مهمة على الخادم مرة يوميًا لحساب الترتيب العالمي (أعلى 10) وترتيب كل بلد (أعلى 100)، وترتيبك الشخصي. تظهر للمستخدمين الآخرين داخل التطبيق المعلومات التالية فقط:',
        },
        { ul: ['اسم العرض', 'البلد', 'مجموع النقاط', 'المركز'] },
        {
          note: 'ننصحك باختيار اسم عرض لا يكشف هويتك إن كنت تفضّل ذلك. لا يظهر بريدك الإلكتروني ولا سجل استماعك ولا مفضلاتك لأحد.',
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'المحتوى والخدمات الخارجية',
      blocks: [
        {
          p: 'يجلب التطبيق المحتوى من مصادر خارجية. كأي طلب عبر الإنترنت، تتلقى هذه الخدمات بيانات الاتصال المعتادة (مثل عنوان IP ونوع الجهاز)، ولا نرسل إليها أي معرّف شخصي. تخضع هذه الخدمات لسياسات الخصوصية الخاصة بها.',
        },
        {
          table: {
            head: ['الخدمة', 'الاستخدام'],
            rows: [
              ['MP3Quran ‏(mp3quran.net)', 'فهرس القرّاء والإذاعات والقنوات والمقاطع، وملفات التلاوات الصوتية.'],
              ['خوادم الصوت (مثل qurango.net)', 'بث التلاوات وتحميلها.'],
              ['حصن المسلم ‏(hisnmuslim.com)', 'صوتيات الأذكار.'],
              ['مزودو الإذاعات والقنوات', 'البث المباشر للإذاعات والقنوات التلفزيونية من مصادرها.'],
              ['Google Firebase', 'تسجيل الدخول وقاعدة البيانات، وقراءة إعداد عام لمعرفة وجود تحديث للتطبيق.'],
              ['Google Play', 'عند فتح صفحة التطبيق في المتجر للتحديث أو المشاركة.'],
            ],
          },
        },
      ],
    },
    {
      id: 'not-collected',
      title: 'ما لا نفعله',
      blocks: [
        {
          ul: [
            'لا نعرض إعلانات ولا نستخدم شبكات إعلانية.',
            'لا نستخدم أدوات تحليلات أو تتبّع، ولا خدمات تقارير الأعطال.',
            'لا نبيع بياناتك ولا نؤجرها ولا نشاركها لأغراض تسويقية.',
            'لا نطلب موقعك الجغرافي؛ البلد يُستنتج من إعدادات لغة الجهاز ومنطقته فقط.',
            'لا نصل إلى جهات الاتصال أو الكاميرا أو الميكروفون.',
            'لا نرسل إشعارات من خوادمنا؛ كل الإشعارات محلية من جهازك.',
          ],
        },
      ],
    },
    {
      id: 'permissions',
      title: 'أذونات أندرويد',
      blocks: [
        {
          table: {
            head: ['الإذن', 'السبب'],
            rows: [
              ['الإنترنت وحالة الشبكة', 'لبث المحتوى وتحميله، ولاحترام خيار التنزيل عبر Wi‑Fi فقط.'],
              ['خدمة في المقدمة لتشغيل الوسائط، ومنع السكون', 'لاستمرار التلاوة في الخلفية وعند إطفاء الشاشة.'],
              ['الإشعارات', 'لأزرار التحكم في التشغيل، وللتذكير اليومي إن فعّلته في الإعدادات.'],
              ['الكتابة في التخزين (أندرويد 10 وما قبله) والوصول إلى موقع الوسائط', 'لحفظ المقاطع المرئية التي تختار حفظها في معرض الصور. لا يقرأ التطبيق بيانات الموقع من صورك أو مقاطعك.'],
            ],
          },
        },
      ],
    },
    {
      id: 'retention',
      title: 'الاحتفاظ بالبيانات وحذفها',
      blocks: [
        {
          p: 'تبقى البيانات المحلية على جهازك حتى تحذفها من التطبيق، أو تمسح بيانات التطبيق من إعدادات الجهاز، أو تحذف التطبيق.',
        },
        {
          p: 'تبقى بيانات الحساب ما دام الحساب موجودًا. لحذفها:',
        },
        {
          ul: [
            'من التطبيق: الملف الشخصي ← حذف الحساب. يحذف ذلك بياناتك من قاعدة البيانات (الملف والنقاط والسجل والترتيب الشخصي) ثم يحذف حساب الدخول نفسه.',
            'دون التطبيق: من صفحة «حذف الحساب» في هذا الموقع، أو بمراسلتنا من البريد المرتبط بحسابك.',
          ],
        },
        {
          note: 'قد يبقى اسمك في جداول الترتيب المنشورة حتى إعادة حسابها في اليوم التالي، ثم يختفي. لا تُحذف البيانات المحلية على جهازك تلقائيًا.',
        },
      ],
    },
    {
      id: 'rights',
      title: 'حقوقك',
      blocks: [
        {
          ul: [
            'الاطلاع: ترى بياناتك في صفحات الملف الشخصي والإنجازات والترتيب.',
            'التصحيح: تغيير اسم العرض والبلد في أي وقت.',
            'الحذف: كما هو موضح أعلاه.',
            'النسخة: راسلنا لطلب نسخة من بياناتك المحفوظة في قاعدة البيانات.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'الأمان',
      blocks: [
        {
          p: 'الاتصال بخدمات Firebase مشفّر، وكلمات المرور تديرها Firebase Authentication. معظم المحتوى يُجلب عبر HTTPS، لكن بعض مزودي الإذاعات والملفات الصوتية يقدّمونها عبر اتصال غير مشفّر. لا توجد طريقة نقل أو تخزين آمنة تمامًا، لكننا نتخذ تدابير معقولة لحماية بياناتك.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'نقل البيانات دوليًا',
      blocks: [
        {
          p: 'تُستضاف قاعدة البيانات وخدمة الحسابات على خوادم Google في الولايات المتحدة، وقد تكون خارج بلدك. تعالج Google هذه البيانات وفق شروط معالجة البيانات الخاصة بـFirebase.',
        },
      ],
    },
    {
      id: 'children',
      title: 'الأطفال',
      blocks: [
        {
          p: 'التطبيق مناسب لكل الأعمار، ولا يحتوي على إعلانات أو مشتريات. الحساب اختياري، ولا نجمع عن قصد بيانات أطفال دون 13 عامًا. إذا أنشأ طفلك حسابًا وتريد حذفه، راسلنا وسنحذفه.',
        },
      ],
    },
    {
      id: 'website',
      title: 'هذا الموقع',
      blocks: [
        {
          p: 'لا يستخدم هذا الموقع ملفات تعريف الارتباط ولا أدوات تحليلات، والخطوط مستضافة عليه مباشرة. تحتفظ منصة الاستضافة (Netlify) بسجلات تقنية معتادة مثل عنوان IP لتشغيل الموقع وحمايته.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'التغييرات على هذه السياسة',
      blocks: [
        {
          p: 'إذا تغيّر ما يفعله التطبيق بالبيانات، سنحدّث هذه الصفحة وتاريخ «آخر تحديث» أعلاها.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'تواصل معنا',
      blocks: [{ p: 'لأي سؤال أو طلب يخص الخصوصية، راسلنا على البريد التالي:' }],
    },
  ],
}

const en: PrivacyDict = {
  metaTitle: 'Privacy policy',
  metaDescription:
    'What data the Noor Al-Quran app handles, where it is stored, who it is shared with, and how to delete it.',
  eyebrow: 'Noor Al-Quran',
  title: 'Privacy policy',
  updated: 'Last updated',
  intro:
    'This policy explains what data the Noor Al-Quran Android app and this website handle, where it is stored, who it is shared with, and how you control it. It is written in plain language and describes what the app actually does.',
  glanceTitle: 'At a glance',
  glance: [
    'You can use the whole app without an account; your data then stays on your device only.',
    'An account is optional. Only your display name, country, points and their history are uploaded.',
    'Your display name, country and points appear on the in-app leaderboard.',
    'No ads, no analytics, no crash reporting, and we never sell data.',
    'You can delete your account and its data in the app at any time, or request it on this site.',
  ],
  tocTitle: 'Contents',
  backHome: 'Back to home',
  sections: [
    {
      id: 'without-account',
      title: 'Using the app without an account',
      blocks: [
        {
          p: 'Every listening feature works without signing in. In that case the following is stored on your device only (in the app’s private storage) and is never sent to us:',
        },
        {
          ul: [
            'Settings: language, theme, playback speed, repeat mode, Wi‑Fi-only downloads and the daily reminder.',
            'Favourite reciters and bookmarks.',
            'Your last listening session (reciter, surah and position) for “Continue listening” and the home-screen widgets.',
            'Daily listening statistics, and points with their per-day, per-surah history.',
            'A local profile: a display name (generated automatically, like muslim12345, if you don’t choose one), a country code taken from your device’s language and region settings, and your time zone.',
            'Files you download: recitations, athkar audio, and a cached copy of the reciter and radio catalog.',
          ],
        },
        {
          p: 'If you choose to save a video, it is saved to your device’s gallery in an album for the app.',
        },
      ],
    },
    {
      id: 'account',
      title: 'The optional account',
      blocks: [
        {
          p: 'You can create an account to appear on the leaderboard and to back up your points and restore them on another device. Sign-in uses Google’s Firebase Authentication, in one of two ways:',
        },
        {
          ul: [
            'Email and password: Firebase stores your password securely (hashed); we never see it.',
            'Google Sign-In: Google shares your name, email address and profile photo URL with us. The name becomes your default display name, and the photo is only shown inside the app.',
          ],
        },
        {
          p: 'Firebase Authentication keeps your account ID, email, sign-in method and account creation and last sign-in times, as is standard for the service. We don’t write your email, photo or time zone to our database.',
        },
      ],
    },
    {
      id: 'cloud-data',
      title: 'What is stored in our database',
      blocks: [
        {
          p: 'When you are signed in, the app periodically (for example once a day and when you open the Rankings tab) uploads the following to Firebase Realtime Database under your account ID:',
        },
        {
          table: {
            head: ['Field', 'Purpose'],
            rows: [
              ['Display name', 'Shown on the leaderboard. You can change it at any time.'],
              ['Country', 'For your country’s ranking. Taken from your device settings; you can change it.'],
              ['Total points', 'To calculate your rank.'],
              ['Daily points history', 'Points and listened share per surah for each day, so they can be backed up and restored.'],
              ['Last update and backup times', 'To know when you last synced.'],
            ],
          },
        },
      ],
    },
    {
      id: 'leaderboard',
      title: 'The leaderboard',
      blocks: [
        {
          p: 'A server job runs once a day to compute the worldwide ranking (top 10), each country’s ranking (top 100), and your own rank. Other app users can see only:',
        },
        { ul: ['Display name', 'Country', 'Total points', 'Rank'] },
        {
          note: 'Pick a display name that doesn’t identify you if you prefer. Your email, listening history and favourites are never shown to anyone.',
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'Content and third-party services',
      blocks: [
        {
          p: 'The app loads content from outside services. Like any internet request, they receive standard connection data (such as your IP address and device type); we send them no personal identifiers. Their own privacy policies apply.',
        },
        {
          table: {
            head: ['Service', 'Used for'],
            rows: [
              ['MP3Quran (mp3quran.net)', 'The catalog of reciters, radios, channels and videos, and recitation audio files.'],
              ['Audio servers (such as qurango.net)', 'Streaming and downloading recitations.'],
              ['Hisn Muslim (hisnmuslim.com)', 'Athkar audio.'],
              ['Radio and TV providers', 'Live radio and TV streams, straight from their sources.'],
              ['Google Firebase', 'Sign-in and the database, and reading a public setting that tells the app whether an update is available.'],
              ['Google Play', 'When you open the app’s store page to update or share it.'],
            ],
          },
        },
      ],
    },
    {
      id: 'not-collected',
      title: 'What we don’t do',
      blocks: [
        {
          ul: [
            'We don’t show ads or use ad networks.',
            'We don’t use analytics, tracking or crash-reporting services.',
            'We don’t sell, rent or share your data for marketing.',
            'We don’t request your location; your country is inferred only from your device’s language and region settings.',
            'We don’t access your contacts, camera or microphone.',
            'We don’t send notifications from our servers; all notifications are created locally on your device.',
          ],
        },
      ],
    },
    {
      id: 'permissions',
      title: 'Android permissions',
      blocks: [
        {
          table: {
            head: ['Permission', 'Why'],
            rows: [
              ['Internet and network state', 'To stream and download content, and to respect the Wi‑Fi-only download option.'],
              ['Media-playback foreground service and wake lock', 'To keep recitation playing in the background and with the screen off.'],
              ['Notifications', 'For playback controls, and the daily reminder if you turn it on in settings.'],
              ['Storage write (Android 10 and older) and media location access', 'To save videos you choose to save to your gallery. The app doesn’t read location data from your photos or videos.'],
            ],
          },
        },
      ],
    },
    {
      id: 'retention',
      title: 'Keeping and deleting data',
      blocks: [
        {
          p: 'Local data stays on your device until you delete it in the app, clear the app’s data in your device settings, or uninstall the app.',
        },
        { p: 'Account data is kept for as long as the account exists. To delete it:' },
        {
          ul: [
            'In the app: Profile → Delete account. This removes your data from the database (profile, points, history and personal rank) and then deletes the sign-in account itself.',
            'Without the app: use the “Delete account” page on this site, or email us from the address linked to your account.',
          ],
        },
        {
          note: 'Your name may remain in the published ranking tables until they are recalculated the next day, after which it disappears. Data stored locally on your device is not removed automatically.',
        },
      ],
    },
    {
      id: 'rights',
      title: 'Your rights',
      blocks: [
        {
          ul: [
            'Access: see your data on the Profile, Achievements and Rankings pages.',
            'Correction: change your display name and country at any time.',
            'Deletion: as described above.',
            'A copy: email us to request a copy of the data stored in our database.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'Security',
      blocks: [
        {
          p: 'Connections to Firebase are encrypted and passwords are managed by Firebase Authentication. Most content is loaded over HTTPS, but some radio and audio providers serve their streams and files over unencrypted connections. No method of transmission or storage is completely secure, but we take reasonable measures to protect your data.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'International transfers',
      blocks: [
        {
          p: 'The database and the account service are hosted on Google’s servers in the United States, which may be outside your country. Google processes this data under the Firebase data processing terms.',
        },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        {
          p: 'The app is suitable for all ages and has no ads or purchases. An account is optional, and we don’t knowingly collect data from children under 13. If your child created an account and you want it removed, email us and we will delete it.',
        },
      ],
    },
    {
      id: 'website',
      title: 'This website',
      blocks: [
        {
          p: 'This website uses no cookies and no analytics, and its fonts are hosted on the site itself. The hosting platform (Netlify) keeps standard technical logs, such as IP addresses, to run and protect the site.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        {
          p: 'If what the app does with data changes, we will update this page and the “Last updated” date at the top.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact us',
      blocks: [{ p: 'For any privacy question or request, email us at:' }],
    },
  ],
}

export const privacyDict: Record<Locale, PrivacyDict> = { ar, en }

type DeleteDict = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  inAppTitle: string
  inAppSteps: string[]
  webTitle: string
  webBody: string
  emailSubject: string
  emailBody: string
  emailButton: string
  removedTitle: string
  removed: string[]
  keptTitle: string
  kept: string[]
}

export const deleteDict: Record<Locale, DeleteDict> = {
  ar: {
    metaTitle: 'حذف الحساب',
    metaDescription: 'كيف تحذف حسابك في تطبيق نور القرآن والبيانات المرتبطة به.',
    title: 'حذف حسابك وبياناته',
    intro:
      'الحساب في نور القرآن اختياري. إذا أنشأت حسابًا، يمكنك حذفه مع كل بياناته المحفوظة لدينا في أي وقت.',
    inAppTitle: 'من التطبيق (الأسرع)',
    inAppSteps: [
      'افتح التطبيق وادخل إلى صفحة الملف الشخصي.',
      'اضغط «حذف الحساب».',
      'أكّد الحذف. إذا طُلب منك، سجّل الدخول مرة أخرى ثم أعد المحاولة.',
    ],
    webTitle: 'دون التطبيق',
    webBody:
      'أرسل إلينا رسالة من البريد الإلكتروني المرتبط بحسابك (أو بحساب Google الذي سجّلت به) واطلب حذف الحساب. سنحذفه مع بياناته ونؤكد لك ذلك بالرد.',
    emailSubject: 'طلب حذف حساب نور القرآن',
    emailBody: 'أرجو حذف حسابي في تطبيق نور القرآن وكل البيانات المرتبطة به.\nالبريد المرتبط بالحساب: ',
    emailButton: 'إرسال طلب الحذف',
    removedTitle: 'ما الذي يُحذف',
    removed: [
      'حساب الدخول (البريد الإلكتروني أو ربط حساب Google).',
      'ملفك في قاعدة البيانات: اسم العرض والبلد ومجموع النقاط.',
      'سجل النقاط اليومي وترتيبك الشخصي.',
    ],
    keptTitle: 'ما يبقى',
    kept: [
      'قد يبقى اسمك في جداول الترتيب المنشورة حتى إعادة حسابها في اليوم التالي.',
      'البيانات المحلية على جهازك (الإعدادات والمفضلة والتنزيلات) تبقى حتى تمسح بيانات التطبيق أو تحذفه.',
    ],
  },
  en: {
    metaTitle: 'Delete your account',
    metaDescription: 'How to delete your Noor Al-Quran account and its associated data.',
    title: 'Delete your account and data',
    intro:
      'An account in Noor Al-Quran is optional. If you created one, you can delete it, together with all the data we store for it, at any time.',
    inAppTitle: 'In the app (fastest)',
    inAppSteps: [
      'Open the app and go to your Profile.',
      'Tap “Delete account”.',
      'Confirm. If asked, sign in again and retry.',
    ],
    webTitle: 'Without the app',
    webBody:
      'Email us from the address linked to your account (or the Google account you signed in with) and ask for your account to be deleted. We will delete it with its data and confirm by reply.',
    emailSubject: 'Noor Al-Quran account deletion request',
    emailBody: 'Please delete my Noor Al-Quran account and all data associated with it.\nEmail linked to the account: ',
    emailButton: 'Send a deletion request',
    removedTitle: 'What is deleted',
    removed: [
      'Your sign-in account (email, or the link to your Google account).',
      'Your database profile: display name, country and total points.',
      'Your daily points history and personal rank.',
    ],
    keptTitle: 'What remains',
    kept: [
      'Your name may remain in the published ranking tables until they are recalculated the next day.',
      'Data stored locally on your device (settings, favourites, downloads) stays until you clear the app’s data or uninstall it.',
    ],
  },
}
