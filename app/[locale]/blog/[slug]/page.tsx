import { Metadata } from 'next'
import { generateMetadata as generateSiteMetadata } from '@/lib/metadata'
import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

// Helper function to check if a blog post exists
function blogPostExists(slug: string): boolean {
  const mdxPath = path.join(process.cwd(), 'app', 'blog', slug, 'page.mdx')
  return fs.existsSync(mdxPath)
}

// Define a type for the metadata
interface BlogMetadata {
  title: string;
  description: string;
  ogImage?: string;
}

// Custom MDX components
const components = {
  Cover: ({
    src,
    alt,
    caption,
  }: {
    src: string
    alt: string
    caption: string
  }) => {
    return (
      <figure>
        <img src={src} alt={alt} className="rounded-xl" />
        <figcaption className="text-center">{caption}</figcaption>
      </figure>
    )
  },
}

// This page handles the metadata for blog posts
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params

  if (!blogPostExists(slug)) {
    notFound()
  }

  try {
    // Read the MDX file to extract metadata
    const mdxPath = path.join(process.cwd(), 'app', 'blog', slug, 'page.mdx')
    const source = fs.readFileSync(mdxPath, 'utf8')
    
    // Extract metadata using regex
    const metadataMatch = source.match(/export const metadata = ({[\s\S]*?});/)
    let metadata: BlogMetadata = { title: 'Blog Post', description: 'A blog post on m.space' }
    
    if (metadataMatch && metadataMatch[1]) {
      try {
        // Convert the string to a JavaScript object
        // This is a simple approach and might not work for complex metadata
        const metadataStr = metadataMatch[1]
          .replace(/(\w+):/g, '"$1":')  // Convert property names to strings
          .replace(/'/g, '"')           // Convert single quotes to double quotes
        
        const parsedMetadata = JSON.parse(metadataStr) as Partial<BlogMetadata>
        metadata = { ...metadata, ...parsedMetadata }
      } catch (e) {
        console.error('Failed to parse metadata:', e)
      }
    }
    
    return generateSiteMetadata({
      title: metadata.title,
      description: metadata.description,
      path: `/${locale}/blog/${slug}`,
      ogImage: metadata.ogImage,
    })
  } catch (error: unknown) {
    return generateSiteMetadata({
      title: 'Blog Post',
      description: 'A blog post on m.space',
      path: `/${locale}/blog/${slug}`,
    })
  }
}

// Define page as an async function
export default async function BlogPost({
  params
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  
  if (!blogPostExists(slug)) {
    notFound()
  }

  try {
    // Read the MDX file content
    const mdxPath = path.join(process.cwd(), 'app', 'blog', slug, 'page.mdx')
    const source = fs.readFileSync(mdxPath, 'utf8')
    
    // Remove any metadata export from the content for rendering
    const contentWithoutMetadata = source.replace(/export const metadata = {[\s\S]*?};/, '')
    
    return (
      <div className="mdx-content">
        <MDXRemote source={contentWithoutMetadata} components={components} />
      </div>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
} 