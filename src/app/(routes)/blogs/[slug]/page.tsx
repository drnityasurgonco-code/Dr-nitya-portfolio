import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/features/blog/blog.data'
import { services } from '@/features/services/services.data'
import { absoluteUrl, breadcrumbSchema, ids, pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/StructuredData'
import { BlogContent } from './BlogContent'

interface Props {
  params: { slug: string }
}

// Blog category -> the service page that treats it.
const categoryToService: Record<string, string> = {
  'Breast Cancer': 'breast-cancer-surgery',
  'Thyroid Cancer': 'thyroid-endocrine-tumors',
  'Head & Neck Cancer': 'head-neck-cancer-surgery',
  'GI Cancer': 'gastrointestinal-cancer-surgery',
  'Patient Guide': 'multidisciplinary-cancer-treatment',
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blogs/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)
  const service = services.find((s) => s.slug === categoryToService[post.category])
  const url = absoluteUrl(`/blogs/${post.slug}`)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: absoluteUrl('/opengraph-image'),
          datePublished: post.date,
          dateModified: post.date,
          author: { '@id': ids.person },
          publisher: { '@id': ids.physician },
          mainEntityOfPage: url,
          url,
          inLanguage: 'en-IN',
          keywords: post.tags.join(', '),
          articleSection: post.category,
        }}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Blogs', path: '/blogs' }, { name: post.title, path: `/blogs/${post.slug}` }])} />
      <BlogContent post={post} related={related} service={service ? { title: service.title, slug: service.slug } : undefined} />
    </>
  )
}
