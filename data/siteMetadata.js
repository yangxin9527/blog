const siteMetadata = {
  title: 'Nix Blog',
  author: 'Nix',
  headerTitle: 'Nix的博客',
  description: '写点随笔，记录下生活',
  language: 'zh-CN',
  siteUrl: 'https://feiwanle.com',
  siteRepo: 'https://github.com/yangxin9527/blog/',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yangheroxin@gmail.com',
  github: 'https://github.com/yangxin9527/',
  bilibili: 'https://space.bilibili.com/51996404',
  // twitter: 'https://twitter.com/yangheroxin',
  // facebook: 'https://facebook.com/nix.sun.china',
  yuque: 'https://www.yuque.com/morningstar-fnspp',
  zhihu: 'https://www.zhihu.com/people/yang-xin-87-63',
  // telegram: 'https://t.me/nix_888',
  qq: 'http://wpa.qq.com/msgrd?v=3&uin=364332625&site=qq&menu=yes',
  // wechat: 'https://t.me/nix_888',
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
    provider: '',
  },
  comment: {
    clientID: '20ba6389d19d60888824',
    clientSecret: 'fd78f1e958843208bb2105fda8ee37a8b5b7fa22',
    repo: 'blog',
    owner: 'yangxin9527',
    admin: ['yangxin9527'],
    language: 'zh-CN',
    distractionFreeMode: false,
  },
}

module.exports = siteMetadata
