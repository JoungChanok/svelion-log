const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'JoungChanok',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'full stack developer',
    bio: '🪖 22.09.27 ~ 24.03.26',
    email: 'chanok9417@kakao.com',
    instagram: '2.406_o',
    github: 'JoungChanok',
  },
  projects: [
    {
      name: `Chanok\'s Blogs`,
      href: 'https://blog.svelion.com'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Chanok\'s Blog',
    description: 'Welcome to Chanok\'s Blog!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://blog.svelion.com',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://omage.svelion.com', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  giscus: {
    enable: true,
    config: {
      repo: 'JoungChanok/svelion-log',
      'mapping': 'og:title',
      label: '💬 Giscus',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
