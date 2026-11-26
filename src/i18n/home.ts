import type { Locale } from '@/lib/site'

// Home-page and chrome copy. Every claim here is checked against the app
// source (quran-noor-mobile). Don't add counts that can go stale: catalog
// numbers are fetched live from MP3Quran (see lib/catalog.ts).

export type FeatureKey =
  | 'reciters'
  | 'continue'
  | 'favorites'
  | 'radio'
  | 'athkar'
  | 'widgets'
  | 'offline'
  | 'playback'
  | 'points'
  | 'bilingual'

type Dict = {
  meta: { title: string; description: string; ogTagline: string }
  nav: { features: string; app: string; faq: string; privacy: string; menu: string; close: string }
  langSwitch: { label: string; target: string }
  cta: { play: string; playEyebrow: string; apk: string; apkHint: string }
  hero: { eyebrow: string; title: string; lead: string; scroll: string }
  features: {
    eyebrow: string
    title: string
    lead: string
    items: Record<FeatureKey, { title: string; body: string }>
  }
  showcase: {
    eyebrow: string
    title: string
    lead: string
    pending: string
    screens: { key: string; title: string }[]
  }
  numbers: {
    title: string
    surahs: string
    reciters: string
    widgets: string
    languages: string
    source: string
  }
  privacy: { eyebrow: string; title: string; points: string[]; link: string }
  faq: { eyebrow: string; title: string; lead: string; contact: string; items: { q: string; a: string }[] }
  download: { title: string; lead: string; android: string }
  footer: {
    tagline: string
    privacy: string
    deleteAccount: string
    contact: string
    rights: string
    content: string
  }
  skip: string
}

const ar: Dict = {
  meta: {
    title: 'نور القرآن · استمع إلى القرآن الكريم بسكينة',
    description:
      'تطبيق مجاني للاستماع إلى القرآن الكريم بأصوات مئات القرّاء، مع التحميل للاستماع دون إنترنت، وإذاعات القرآن، والأذكار، وويدجت الشاشة الرئيسية. بلا إعلانات.',
    ogTagline: 'استمع إلى القرآن الكريم بسكينة',
  },
  nav: {
    features: 'المزايا',
    app: 'التطبيق',
    faq: 'الأسئلة الشائعة',
    privacy: 'الخصوصية',
    menu: 'فتح القائمة',
    close: 'إغلاق القائمة',
  },
  langSwitch: { label: 'English', target: 'Switch to English' },
  cta: {
    play: 'Google Play',
    playEyebrow: 'متوفر على',
    apk: 'تنزيل ملف APK',
    apkHint: 'لأجهزة أندرويد دون متجر Google Play',
  },
  hero: {
    eyebrow: 'رفيقك اليومي مع كتاب الله',
    title: 'استمع إلى القرآن الكريم في سكينة الليل وضوء النهار',
    lead: 'نور القرآن يجمع لك تلاوات مئات القرّاء، وإذاعات القرآن، والأذكار في تطبيق هادئ وبسيط — مجانًا وبلا إعلانات.',
    scroll: 'اكتشف المزايا',
  },
  features: {
    eyebrow: 'المزايا',
    title: 'كل ما تحتاجه للاستماع، في مكان واحد',
    lead: 'صُمّم التطبيق ليبقى هادئًا وسهلًا: تفتحه فتجد تلاوتك حيث تركتها.',
    items: {
      reciters: {
        title: 'مئات القرّاء',
        body: 'مكتبة واسعة من موقع MP3Quran، بثًّا مباشرًا أو تحميلًا، مع أكثر من رواية ومصحف لكثير من القرّاء.',
      },
      continue: {
        title: 'تابع من حيث توقفت',
        body: 'يتذكر التطبيق القارئ والسورة وموضع الاستماع، فتعود إلى تلاوتك بلمسة واحدة.',
      },
      favorites: {
        title: 'قرّاؤك المفضلون أولًا',
        body: 'أضف القرّاء إلى المفضلة لتظهر في أعلى القائمة دائمًا.',
      },
      radio: {
        title: 'إذاعات وبث مباشر',
        body: 'إذاعات القرآن الكريم على مدار الساعة، وقنوات تلفزيونية مباشرة، ومقاطع مرئية للتلاوات.',
      },
      athkar: {
        title: 'أذكار في وقتها',
        body: 'أذكار الصباح والمساء والنوم وغيرها بالصوت والنص، مع اقتراح يناسب الوقت الحالي وذكر لكل يوم.',
      },
      widgets: {
        title: 'على شاشتك الرئيسية',
        body: 'ويدجت للتشغيل الحالي، ومتابعة الاستماع، وذكر اليوم، والإجراءات السريعة، مع اختصارات للتطبيق.',
      },
      offline: {
        title: 'استماع دون إنترنت',
        body: 'حمّل سورة واحدة أو مصحف القارئ كاملًا، واستمع في السفر أو حين يضعف الاتصال.',
      },
      playback: {
        title: 'تحكم في الاستماع',
        body: 'سرعة من ‎0.5×‎ إلى ‎2×‎، والتكرار، والتشغيل في الخلفية مع أزرار التحكم في الإشعار.',
      },
      points: {
        title: 'نقاط وترتيب',
        body: 'اكسب نقاطًا على وقت استماعك الفعلي، وانضم اختياريًا إلى الترتيب العالمي وترتيب بلدك.',
      },
      bilingual: {
        title: 'العربية أولًا',
        body: 'واجهة عربية كاملة من اليمين إلى اليسار، وواجهة إنجليزية، مع وضعين فاتح وداكن.',
      },
    },
  },
  showcase: {
    eyebrow: 'من داخل التطبيق',
    title: 'تصميم ليلي هادئ يريح العين',
    lead: 'ألوان النيلي وضوء القمر في كل شاشة، في الوضع الداكن والفاتح.',
    pending: 'لقطة الشاشة قريبًا',
    screens: [
      { key: 'home', title: 'الرئيسية' },
      { key: 'player', title: 'المشغّل' },
      { key: 'athkar', title: 'الأذكار' },
    ],
  },
  numbers: {
    title: 'بالأرقام',
    surahs: 'سورة',
    reciters: 'قارئ في المكتبة',
    widgets: 'ويدجت للشاشة الرئيسية',
    languages: 'لغتان للواجهة',
    source: 'عدد القرّاء من مكتبة MP3Quran ويُحدَّث تلقائيًا.',
  },
  privacy: {
    eyebrow: 'الخصوصية',
    title: 'تطبيق يحترم خصوصيتك',
    points: [
      'يعمل التطبيق كاملًا دون إنشاء حساب.',
      'الحساب اختياري، ويُستخدم للترتيب وحفظ نقاطك فقط.',
      'لا إعلانات، ولا أدوات تحليلات أو تتبّع.',
      'يمكنك حذف حسابك وبياناته في أي وقت.',
    ],
    link: 'اقرأ سياسة الخصوصية',
  },
  faq: {
    eyebrow: 'الأسئلة الشائعة',
    title: 'أسئلة يطرحها المستمعون',
    lead: 'لم تجد إجابتك؟',
    contact: 'راسلنا',
    items: [
      {
        q: 'هل التطبيق مجاني؟',
        a: 'نعم. نور القرآن مجاني بالكامل، دون إعلانات أو مشتريات داخل التطبيق.',
      },
      {
        q: 'هل أحتاج إلى حساب؟',
        a: 'لا. كل مزايا الاستماع تعمل دون حساب. تسجيل الدخول بحساب Google أو بالبريد الإلكتروني اختياري، ويلزم فقط للظهور في الترتيب وحفظ نقاطك.',
      },
      {
        q: 'هل يمكنني الاستماع دون إنترنت؟',
        a: 'نعم. حمّل السور أو مصحف القارئ كاملًا، وكذلك صوتيات الأذكار، وستُشغَّل من جهازك دون اتصال.',
      },
      {
        q: 'من أين تأتي التلاوات؟',
        a: 'من مكتبة MP3Quran المفتوحة، وتُبث من خوادمها. وتأتي الإذاعات من مصادرها المباشرة.',
      },
      {
        q: 'كيف تُحسب النقاط؟',
        a: 'تُحسب على وقت الاستماع الفعلي، ويختلف وزنها حسب السورة. ولا تُحتسب الجلسة إذا رُفعت سرعة التشغيل فوق ‎1×‎.',
      },
      {
        q: 'متى يُحدَّث الترتيب؟',
        a: 'يُعاد حساب الترتيب العالمي وترتيب كل بلد مرة يوميًا.',
      },
      {
        q: 'على أي الأجهزة يعمل؟',
        a: 'على أجهزة أندرويد، من متجر Google Play أو بتنزيل ملف APK مباشرة من هذا الموقع.',
      },
      {
        q: 'كيف أحذف حسابي؟',
        a: 'من التطبيق: الملف الشخصي ← حذف الحساب. أو اطلب الحذف عبر صفحة «حذف الحساب» في هذا الموقع.',
      },
    ],
  },
  download: {
    title: 'ابدأ الاستماع الليلة',
    lead: 'نزّل نور القرآن مجانًا، واجعل القرآن رفيقك في كل وقت.',
    android: 'لأجهزة أندرويد',
  },
  footer: {
    tagline: 'رفيقك اليومي مع القرآن الكريم.',
    privacy: 'سياسة الخصوصية',
    deleteAccount: 'حذف الحساب',
    contact: 'تواصل معنا',
    rights: 'جميع الحقوق محفوظة.',
    content: 'التلاوات من مكتبة MP3Quran.',
  },
  skip: 'تخطَّ إلى المحتوى',
}

const en: Dict = {
  meta: {
    title: 'Noor Al-Quran · Listen to the Holy Quran in peace',
    description:
      'A free app to listen to the Holy Quran from hundreds of reciters, with offline downloads, Quran radio, athkar and home-screen widgets. No ads.',
    ogTagline: 'Listen to the Holy Quran in peace',
  },
  nav: {
    features: 'Features',
    app: 'The app',
    faq: 'FAQ',
    privacy: 'Privacy',
    menu: 'Open menu',
    close: 'Close menu',
  },
  langSwitch: { label: 'العربية', target: 'التبديل إلى العربية' },
  cta: {
    play: 'Google Play',
    playEyebrow: 'Get it on',
    apk: 'Download the APK',
    apkHint: 'For Android devices without Google Play',
  },
  hero: {
    eyebrow: 'Your daily companion with the Quran',
    title: 'Listen to the Holy Quran, by moonlight or daylight',
    lead: 'Noor Al-Quran brings together hundreds of reciters, Quran radio and athkar in one calm, simple app — free, and without ads.',
    scroll: 'Explore the features',
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need to listen, in one place',
    lead: 'Built to stay calm and simple: open it and your recitation is right where you left it.',
    items: {
      reciters: {
        title: 'Hundreds of reciters',
        body: 'A wide library from MP3Quran, streamed or downloaded, with several riwayat and mushafs for many reciters.',
      },
      continue: {
        title: 'Continue where you left off',
        body: 'The app remembers the reciter, the surah and your position, so you can resume with one tap.',
      },
      favorites: {
        title: 'Favourites first',
        body: 'Add reciters to your favourites and they stay pinned to the top of the list.',
      },
      radio: {
        title: 'Radio and live channels',
        body: 'Quran radio around the clock, live TV channels, and recitation videos.',
      },
      athkar: {
        title: 'Athkar at the right time',
        body: 'Morning, evening, bedtime and more, with audio and text, a suggestion that fits the time of day, and a thikr for every day.',
      },
      widgets: {
        title: 'On your home screen',
        body: 'Now Playing, Continue Listening, Daily Athkar and Quick Actions widgets, plus app shortcuts.',
      },
      offline: {
        title: 'Listen offline',
        body: 'Download a single surah or a reciter’s whole mushaf, and listen while travelling or on a weak connection.',
      },
      playback: {
        title: 'Playback your way',
        body: 'Speed from 0.5× to 2×, repeat, and background playback with controls in the notification.',
      },
      points: {
        title: 'Points and rankings',
        body: 'Earn points for real listening time, and optionally join the worldwide and country leaderboards.',
      },
      bilingual: {
        title: 'Arabic first',
        body: 'A complete right-to-left Arabic interface and an English one, in light and dark themes.',
      },
    },
  },
  showcase: {
    eyebrow: 'Inside the app',
    title: 'A calm, night-sky design that is easy on the eyes',
    lead: 'Indigo and moonlight on every screen, in dark and light themes.',
    pending: 'Screenshot coming soon',
    screens: [
      { key: 'home', title: 'Home' },
      { key: 'player', title: 'Player' },
      { key: 'athkar', title: 'Athkar' },
    ],
  },
  numbers: {
    title: 'By the numbers',
    surahs: 'surahs',
    reciters: 'reciters in the library',
    widgets: 'home-screen widgets',
    languages: 'interface languages',
    source: 'The reciter count comes live from the MP3Quran library.',
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'An app that respects your privacy',
    points: [
      'Everything works without creating an account.',
      'An account is optional, used only for rankings and backing up your points.',
      'No ads, no analytics, no tracking.',
      'You can delete your account and its data at any time.',
    ],
    link: 'Read the privacy policy',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions listeners ask',
    lead: 'Can’t find your answer?',
    contact: 'Email us',
    items: [
      {
        q: 'Is the app free?',
        a: 'Yes. Noor Al-Quran is completely free, with no ads and no in-app purchases.',
      },
      {
        q: 'Do I need an account?',
        a: 'No. Every listening feature works without one. Signing in with Google or email is optional and only needed to appear on the leaderboard and back up your points.',
      },
      {
        q: 'Can I listen offline?',
        a: 'Yes. Download surahs or a reciter’s whole mushaf, as well as athkar audio, and they play from your device without a connection.',
      },
      {
        q: 'Where do the recitations come from?',
        a: 'From the open MP3Quran library, streamed from its servers. Radio stations stream from their own sources.',
      },
      {
        q: 'How are points calculated?',
        a: 'From your real listening time, weighted by surah. A session doesn’t count if playback speed is raised above 1×.',
      },
      {
        q: 'When are rankings updated?',
        a: 'The worldwide and per-country rankings are recalculated once a day.',
      },
      {
        q: 'Which devices are supported?',
        a: 'Android phones, through Google Play or by downloading the APK directly from this site.',
      },
      {
        q: 'How do I delete my account?',
        a: 'In the app: Profile → Delete account. Or request deletion on the “Delete account” page of this site.',
      },
    ],
  },
  download: {
    title: 'Start listening tonight',
    lead: 'Download Noor Al-Quran for free, and keep the Quran with you at every moment.',
    android: 'For Android',
  },
  footer: {
    tagline: 'Your daily companion with the Holy Quran.',
    privacy: 'Privacy policy',
    deleteAccount: 'Delete account',
    contact: 'Contact',
    rights: 'All rights reserved.',
    content: 'Recitations from the MP3Quran library.',
  },
  skip: 'Skip to content',
}

export const homeDict: Record<Locale, Dict> = { ar, en }
export type HomeDict = Dict
