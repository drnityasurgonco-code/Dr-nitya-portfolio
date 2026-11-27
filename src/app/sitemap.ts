import { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/site'
import { blogPosts } from '@/features/blog/blog.data'
import { services } from '@/features/services/services.data'

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  })

  return [
    page('/', 1.0, 'weekly'),
    page('/about', 0.9),
    page('/services', 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page('/doctor-in-cuttack', 0.8),
    page('/doctor-in-bhubaneswar', 0.8),
    page('/clinic-in-odisha', 0.8),
    page('/blogs', 0.8, 'weekly'),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blogs/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    page('/patient-corner', 0.7),
    page('/contact', 0.7),
    page('/privacy-policy', 0.2, 'yearly'),
  ]
}
