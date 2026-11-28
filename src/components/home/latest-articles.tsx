import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogPosts } from '@/features/blog/blog.data'
import { formatDate } from '@/lib/utils'
import { SectionHeader } from '@/components/shared/section-header'

/** Newest articles as an editorial list: category · date in mono, large title, excerpt. */
export function LatestArticles() {
  const posts = blogPosts.slice(0, 4)
  return (
    <section className="frame section bg-white">
      <div className="container-x">
        <SectionHeader
          index={6}
          eyebrow="Articles"
          meta={
            <Link href="/blogs" className="hover:text-ink-900">
              All articles →
            </Link>
          }
          title="Plain answers"
          titleHighlight="to cancer questions."
        />
        <ul className="mt-14 grid grid-cols-1 border-l border-t border-line md:mt-20 md:grid-cols-2">
          {posts.map((p) => (
            <li key={p.slug} className="border-b border-r border-line">
              <Link href={`/blogs/${p.slug}`} className="group relative flex h-full flex-col p-7 transition-colors hover:bg-paper md:p-9">
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
                <span className="flex items-center justify-between label-mono text-[0.6875rem]">
                  <span className="text-brand-600">{p.category}</span>
                  <span className="text-ink-400">{formatDate(p.date)}</span>
                </span>
                <span className="mt-8 block font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 md:text-[1.75rem]">
                  {p.title}
                </span>
                <span className="mt-4 block leading-relaxed text-ink-500">{p.excerpt}</span>
                <span className="link-arrow mt-auto self-start pt-8">
                  Read <ArrowRight size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
