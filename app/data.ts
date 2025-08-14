type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
  category: 'UX/UI' | 'Front & MVP' | 'Bots & AI'
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

type SocialLink = {
  label: string
  link: string
}

export type DribbbleShot = {
  id: number
  title: string
  description: string | null
  images: {
    normal: string
    hidpi?: string
    [key: string]: string | undefined
  }
  html_url: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Holyheld',
    description: 'One Card for All Crypto Natives',
    link: '/projects/holyheld',
    image: '/images/holyheld/cover.png',
    id: 'project2',
    category: 'UX/UI',
  },
  {
    name: 'CRM TurboWork',
    description: 'CRM for brokerage companies',
    link: '/projects/turbowork',
    image: '/images/turbowork/cover.png',
    id: 'project3',
    category: 'UX/UI',
  },
  {
    name: 'OceanGroup',
    description: 'OceanGroup is a platform for trading cryptocurrencies and other digital assets.',
    link: '/projects/oceangroup',
    image: '/images/oceangroup/cover.png',
    id: 'project5',
    category: 'UX/UI',
  },
  {
    name: 'Mou.today',
    description: 'Your Guide to Ukrainian Medicine.',
    link: '/projects/mou',
    image: '/images/mou/cover.png',
    id: 'project1',
    category: 'UX/UI',
  },
  {
    name: 'TgROI',
    description: 'Analytics tool for measuring Telegram channel advertising efficiency.',
    link: 'https://github.com/zerox9dev-space/TgROI',
    image: '/images/tgroi/cover.png',
    id: 'project4',
    category: 'Front & MVP',
  },
  {
    name: 'Vidzilla Bot',
    description: 'This Telegram bot allows users to download videos from various social media platforms including Instagram Reels, TikTok, YouTube, Facebook, Twitter, and Pinterest.',
    link: 'https://github.com/zerox9dev-space/Vidzilla',
    image: '/images/vidzilla/cover.png',
    id: 'project6',
    category: 'Bots & AI',
  },
  {
    name: 'Vidzilla Web',
    description: "A powerful web application that allows you to download videos from various social media platforms. Simply paste a link, and get your video instantly!",
    link: 'https://github.com/zerox9dev-space/vidzilla_app',
    image: '/images/vidzilla-app/cover.png',
    id: 'project11',
    category: 'Front & MVP',
  },
  {
    name: 'Voicelet',
    description: 'A smart Telegram bot that recognizes voice messages with automatic language detection',
    link: 'https://github.com/zerox9dev-space/voicelet',
    image: '/images/voicelet/cover.png',
    id: 'project7',
    category: 'Bots & AI',
  },
  {
    name: 'PolishDomBot',
    description: 'PolishDom Bot is a multifunctional Telegram bot designed to help users learn the Polish language and prepare for obtaining the Karta Polaka (Polish Card).',
    link: 'https://github.com/zerox9dev-space/polishdom_bot',
    image: '/images/polishdom_bot/cover.png',
    id: 'project8',
    category: 'Bots & AI',
  },
  {
    name: 'ChatGPT+Claude',
    description: 'Telegram bot with multiple AI models (GPT-4O, Grok) for convenient work with neural networks.',
    link: 'https://github.com/zerox9dev-space/Grok-ChatGPT',
    image: '/images/grok-chatgpt/cover.png',
    id: 'project9',
    category: 'Bots & AI',
  },
  {
    name: 'NinjaTranslate',
    description: 'A Telegram translator bot that uses X.AI API to translate between multiple languages.',
    link: 'https://github.com/zerox9dev-space/NinjaTranslate',
    image: '/images/ninja-translate/cover.png',
    id: 'project10',
    category: 'Bots & AI',
  },
  {
    name: 'TeleForge',
    description: 'A flexible and powerful template for creating Telegram bots of any complexity.',
    link: 'https://github.com/zerox9dev-space/TeleForge',
    image: '/images/teleforge/cover.png',
    id: 'project12',
    category: 'Bots & AI',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Vidzilla: My Telegram Bot for Downloading Social Media Videos',
    description: "A deep dive into creating a Telegram bot that allows users to easily download videos from multiple social media platforms including Instagram, TikTok, YouTube, and more.",
    link: '/blog/vidzilla-telegram-bot-for-downloading-social-media-videos',
    uid: 'blog-4',
    date: 'June 2, 2025'
  },
  {
    title: 'Welcome to My Digital Space',
    description: "I'm glad you've visited my site. Here I'll share my thoughts on design, development, and everything in between. Let's build something exceptional together!",
    link: '/blog/welcome-to-my-digital-space',
    uid: 'blog-1',
    date: 'June 1, 2025'
  },
  {
    title: 'WebNinja: AI Assistant for Web Research',
    description:
      "Hi! I want to share my small hobby project — WebNinja. Inspired by AI Manus (and the community's playful \"anus\" 😄), I decided to create my own mini-version of a web research agent.",
    link: '/blog/webninja-ai-assistant-for-web-research',
    uid: 'blog-2',
    date: 'June 3, 2025'
  },
  {
    title: "Metrics That Deceive: Why Numbers Aren't Always the Truth",
    description:
      "Metrics aren't everything. But they sure look pretty, right? 🙂 In this post, I'll share some common metrics and why they might not be telling the whole story.",
    link: '/blog/metrics-that-deceive-why-numbers-arent-always-the-truth',
    uid: 'blog-3',
    date: 'June 5, 2025'
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/zerox9dev',
  },
  {
    label: 'X',
    link: 'https://x.com/zerox9dev',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/zerox9dev/',
  },
  {
    label: 'Threads',
    link: 'https://www.threads.com/@zerox9dev_',
  },
  {
    label: 'Dribbble',
    link: 'https://dribbble.com/zerox9dev',
  },
]

export const EMAIL = 'zerox9dev.work@icloud.com'
