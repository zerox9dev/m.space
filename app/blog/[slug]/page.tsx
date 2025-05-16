import { Metadata } from 'next'
import { generateBlogMetadata } from '../generateBlogMetadata'
import { notFound } from 'next/navigation'

// This page handles the metadata for blog posts
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params?.slug

  try {
    // Dynamically import the blog post to get its metadata
    const post = await import(`../${slug}/page.mdx`)
    const { title, description } = post.metadata || { 
      title: "Blog Post", 
      description: "A blog post on m.space" 
    }
    
    return generateBlogMetadata({
      title,
      description,
      slug,
      ogImage: post.metadata?.ogImage,
    })
  } catch (error) {
    return generateBlogMetadata({
      title: "Blog Post",
      description: "A blog post on m.space",
      slug,
    })
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This is a server component that exists only to handle metadata
  // The actual content comes from the MDX files
  return null
} 