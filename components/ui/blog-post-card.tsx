import Link from 'next/link'
import { motion } from 'motion/react'

type BlogPostProps = {
  title: string
  description: string
  link: string
  uid: string
  date: string
}

export function BlogPostCard({ title, description, link, date }: BlogPostProps) {
  return (
    <motion.div
      className="relative rounded-sm bg-white p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-4">
        <Link
          href={link}
          className="mb-2 block text-base font-medium hover:text-black dark:hover:text-white"
        >
          {title}
        </Link>
        <div className="mb-2 text-xs text-zinc-500 dark:text-zinc-500">
          {date}
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export function BlogPostList({ posts }: { posts: BlogPostProps[] }) {
  return (
    <div className="flex flex-col gap-1">
      {posts.map((post) => (
        <BlogPostCard
          key={post.uid}
          title={post.title}
          description={post.description}
          link={post.link}
          uid={post.uid}
          date={post.date}
        />
      ))}
    </div>
  )
} 