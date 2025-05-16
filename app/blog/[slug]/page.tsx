import { Metadata } from 'next'
import { generateBlogMetadata } from '../generateBlogMetadata'
import { notFound } from 'next/navigation'

// This page handles the metadata for blog posts
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    // Dynamically import the blog post to get its metadata
    const post = await import(`../${slug}/page.mdx`)
    const { title, description } = post.metadata || { 
      title: 'Blog Post', 
      description: 'A blog post on m.space' 
    }
    
    return generateBlogMetadata({
      title,
      description,
      slug,
      ogImage: post.metadata?.ogImage,
    })
  } catch (error: unknown) {
    return generateBlogMetadata({
      title: 'Blog Post',
      description: 'A blog post on m.space',
      slug,
    })
  }
}

// Define page as an async function to match the PageProps constraint in Next.js 15
export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Try to dynamically import the blog post
  try {
    await import(`../${slug}/page.mdx`)
    // If we reach here, the post exists
    return null
  } catch (error: unknown) {
    // If the post doesn't exist, return a 404
    notFound()
  }
} 