type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
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

export const PROJECTS: Project[] = [
  {
    name: 'Mou.today',
      description:
        'Your Guide to Ukrainian Medicine.',
    link: 'https://mou.today',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Holyheld',
    description: 'One Card for All Crypto Natives',
    link: 'https://holyheld.com',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelancehunt',
    title: 'Product Designer',
    start: '2023',
    end: 'Present',
    link: 'https://freelancehunt.com/',
    id: 'work2',
  },
  {
    company: 'Freelancing Freelancehunt & Upwork',
    title: 'UI/UX Designer',
    start: '2019',
    end: '2023',
    link: '/',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
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
