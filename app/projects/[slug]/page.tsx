import { Metadata } from 'next'
import { generateProjectMetadata } from '../generateProjectMetadata'
import { notFound } from 'next/navigation'

// This page handles the metadata for project posts
export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    // Dynamically import the project post to get its metadata
    const project = await import(`../${slug}/page.mdx`)
    const { title, description } = project.metadata || { 
      title: 'Project', 
      description: 'A project on m.space' 
    }
    
    return generateProjectMetadata({
      title,
      description,
      slug,
      ogImage: project.metadata?.ogImage,
    })
  } catch (error: unknown) {
    return generateProjectMetadata({
      title: 'Project',
      description: 'A project on m.space',
      slug,
    })
  }
}

// Define page as an async function to match the PageProps constraint in Next.js
export default async function ProjectPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Try to dynamically import the project post
  try {
    await import(`../${slug}/page.mdx`)
    // If we reach here, the post exists
    return null
  } catch (error: unknown) {
    // If the post doesn't exist, return a 404
    notFound()
  }
} 