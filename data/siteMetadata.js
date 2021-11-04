const siteMetadata = {
  title: 'Nix Blog',
  author: 'Nix',
  headerTitle: 'Nix的博客',
  description: '写点随笔，记录下生活',
  language: 'zh-CN',
  siteUrl: 'https://feiwanle.com',
  siteRepo: 'https://github.com/yangxin9527/',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yangheroxin@gmail.com',
  github: 'https://github.com/yangxin9527/',
  bilibili: 'https://space.bilibili.com/51996404',
  twitter: 'https://twitter.com/yangheroxin',
  facebook: 'https://facebook.com/nix.sun.china',
  yuque: 'https://www.yuque.com/morningstar-fnspp',
  zhihu: 'https://www.zhihu.com/people/yang-xin-87-63',
  telegram: 'https://t.me/nix_888',
  qq: 'http://wpa.qq.com/msgrd?v=3&uin=364332625&site=qq&menu=yes',
  wechat: 'https://t.me/nix_888',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  locale: 'zh-CN',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    // provider: 'giscus', // supported providers: giscus, utterances, disqus
    // giscusConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://giscus.app/
    //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    //   mapping: 'pathname', // supported options: pathname, url, title
    //   reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
    //   // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
    //   metadata: '0',
    //   // theme example: light, dark, dark_dimmed, dark_high_contrast
    //   // transparent_dark, preferred_color_scheme, custom
    //   theme: 'light',
    //   // theme when dark mode
    //   darkTheme: 'transparent_dark',
    //   // If the theme option above is set to 'custom`
    //   // please provide a link below to your custom theme css file.
    //   // example: https://giscus.app/themes/custom_example.css
    //   themeURL: '',
    // }
  },
}

module.exports = siteMetadata
