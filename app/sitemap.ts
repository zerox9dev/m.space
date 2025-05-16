import { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  // Base routes
  const routes = [
    {
      url: WEBSITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${WEBSITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamically get blog posts
  try {
    const blogDir = path.join(process.cwd(), 'app/blog')
    
    if (fs.existsSync(blogDir)) {
      const blogFolders = fs
        .readdirSync(blogDir, { withFileTypes: true })
        .filter(dirent => 
          dirent.isDirectory() && 
          dirent.name !== 'node_modules' && 
          !dirent.name.startsWith('_') &&
          !dirent.name.startsWith('.') &&
          dirent.name !== '[slug]' // Exclude dynamic route folder
        )
        .map(dirent => dirent.name)

      // Add blog posts to sitemap
      const blogPosts = blogFolders.map(slug => ({
        url: `${WEBSITE_URL}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))

      return [...routes, ...blogPosts]
    }
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
  
  // Return just base routes if there was an error
  return routes
} 