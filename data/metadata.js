const metadata = {
  title: 'DevelopersLife',
  author: 'MichMurabito',
  headerTitle: 'DevelopersLife',
  description: 'DevelopersLife la community degli sviluppatori software',
  language: 'it-EU',
  theme: 'system', // system, dark or light
  siteUrl: 'https://developerslife.dev/',
  siteRepo: 'https://github.com/DevelopersLife/DevelopersLife.github.io',
  siteLogo: '/static/images/developerslife_logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'developerslife@gmail.com',
  github: 'https://github.com/DevelopersLife',
  twitter: '',
  facebook: '',
  youtube: 'https://www.youtube.com/c/DevelopersLifeChannel',
  linkedin: '',
  locale: 'it-EU',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: 'G-CD0S46T51S',
    posthogAnalyticsId: '',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comment: {
    provider: '',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = metadata
