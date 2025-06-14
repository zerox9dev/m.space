type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
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
    name: 'Mou.today',
    description: 'Your Guide to Ukrainian Medicine.',
    link: '/projects/mou',
    image: '/images/mou/cover.png',
    id: 'project1',
  },
  {
    name: 'Holyheld',
    description: 'One Card for All Crypto Natives',
    link: '/projects/holyheld',
    image: '/images/holyheld/cover.png',
    id: 'project2',
  },
  {
    name: 'CRM TurboWork',
    description: 'CRM for brokerage companies',
    link: '/projects/turbowork',
    image: '/images/turbowork/cover.png',
    id: 'project3',
  },
  {
    name: 'TgROI',
    description: 'Analytics tool for measuring Telegram channel advertising efficiency.',
    link: 'https://github.com/mirvald-space/TgROI',
    image: '/images/tgroi/cover.png',
    id: 'project4',
  },
  {
    name: 'OceanGroup',
    description: 'OceanGroup is a platform for trading cryptocurrencies and other digital assets.',
    link: '/projects/oceangroup',
    image: '/images/oceangroup/cover.png',
    id: 'project5',
  },
  {
    name: 'Vidzilla',
    description: 'This Telegram bot allows users to download videos from various social media platforms including Instagram Reels, TikTok, YouTube, Facebook, Twitter, and Pinterest.',
    link: 'https://github.com/mirvald-space/Vidzilla',
    image: '/images/vidzilla/cover.png',
    id: 'project6',
  },
  {
    name: 'Voicelet',
    description: 'A smart Telegram bot that recognizes voice messages with automatic language detection',
    link: 'https://github.com/mirvald-space/voicelet',
    image: '/images/voicelet/cover.png',
    id: 'project7',
  },
  {
    name: 'PolishDomBot',
    description: 'PolishDom Bot is a multifunctional Telegram bot designed to help users learn the Polish language and prepare for obtaining the Karta Polaka (Polish Card).',
    link: 'https://github.com/mirvald-space/polishdom_bot',
    image: '/images/polishdom_bot/cover.png',
    id: 'project8',
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
    link: 'https://github.com/mirvald-space',
  },
  {
    label: 'X',
    link: 'https://x.com/mirvald_',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mirvald/',
  },
  {
    label: 'Threads',
    link: 'https://www.threads.com/@mirvald_',
  },
]

export const EMAIL = 'mirvald.vadim@icloud.com'
