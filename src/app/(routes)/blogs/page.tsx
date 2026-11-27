import type { Metadata } from 'next'
import { BlogsPageContent } from './BlogsPageContent'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  title: 'Cancer Health Blog | Dr. Nitya Nutan Misra',
  description:
    'Plain-language articles on breast, thyroid, head & neck and GI cancer and preparing for surgery, by Surgical Oncologist Dr. Nitya Nutan Misra, Cuttack.',
  path: '/blogs',
})

export default function BlogsPage() {
  return <BlogsPageContent />
}
