type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  logo: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
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
    link: 'https://holyheld.com',
    image: '/images/holyheld/cover.png',
    id: 'project2',
  },
  {
    name: 'Mou.today',
    description: 'Your Guide to Ukrainian Medicine.',
    link: 'https://mou.today',
    image: '/images/mou/cover.png',
    id: 'project1',
  },
  {
    name: 'CRM TurboWork',
    description: 'CRM for brokerage companies',
    link: '/projects/turbowork',
    image: '/images/turbowork/cover.png',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelancehunt',
    title: 'Full-time Product UX/UI Designer',
    start: '2023',
    end: 'Present',
    link: 'https://freelancehunt.com/',
    logo: '/Freelancehunt_favicon.ico',
    id: 'work2',
  },
  {
    company: 'Freelancing Freelancehunt & Upwork',
    title: 'UI/UX Designer',
    start: '2019',
    end: '2023',
    link: '/',
    logo: '/Upwork.svg',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Vidzilla: My Telegram Bot for Downloading Social Media Videos',
    description: "A deep dive into creating a Telegram bot that allows users to easily download videos from multiple social media platforms including Instagram, TikTok, YouTube, and more.",
    link: '/blog/vidzilla-telegram-bot-for-downloading-social-media-videos',
    uid: 'blog-4',
  },
  {
    title: 'Welcome to My Digital Space',
    description: "I'm glad you've visited my site. Here I'll share my thoughts on design, development, and everything in between. Let's build something exceptional together!",
    link: '/blog/welcome-to-my-digital-space',
    uid: 'blog-1',
  },
  {
    title: 'WebNinja: AI Assistant for Web Research',
    description:
      "Hi! I want to share my small hobby project — WebNinja. Inspired by AI Manus (and the community's playful \"anus\" 😄), I decided to create my own mini-version of a web research agent.",
    link: '/blog/webninja-ai-assistant-for-web-research',
    uid: 'blog-2',
  },
  {
    title: "Metrics That Deceive: Why Numbers Aren't Always the Truth",
    description:
      "Metrics aren't everything. But they sure look pretty, right? 🙂 In this post, I'll share some common metrics and why they might not be telling the whole story.",
    link: '/blog/metrics-that-deceive-why-numbers-arent-always-the-truth',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mirvald-space',
  },
  {
    label: 'Twitter',
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
