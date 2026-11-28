'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { blogCategories, blogPosts } from '@/features/blog/blog.data'
import { formatDate } from '@/lib/utils'
import { cn } from '@/lib/utils'

/** Category filter + editorial article grid. Server-rendered with "All", so every article is in the HTML. */
export function ArticleList() {
  const [active, setActive] = useState('All')
  const posts = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active)

  return (
    <>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter articles by category">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              'shrink-0 rounded border px-3.5 py-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.08em] transition-colors',
              active === cat ? 'border-ink-900 bg-ink-900 text-white' : 'border-line-strong bg-white text-ink-600 hover:border-ink-900 hover:text-ink-900',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 border-l border-t border-line md:grid-cols-2">
        {posts.map((post, i) => (
          <article key={post.id} aria-labelledby={`blog-${post.id}-title`} className="border-b border-r border-line">
            <Link href={`/blogs/${post.slug}`} className="group relative flex h-full flex-col p-7 transition-colors hover:bg-paper md:p-9" aria-label={`Read full article: ${post.title}`}>
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand-600 transition-all duration-500 group-hover:w-full" aria-hidden="true" />
              <span className="flex items-center justify-between gap-4 label-mono text-[0.6875rem]">
                <span className="text-brand-600">
                  {String(i + 1).padStart(2, '0')} · {post.category}
                </span>
                <span className="text-ink-400">{post.readTime}</span>
              </span>
              <h3 id={`blog-${post.id}-title`} className="mt-8 font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink-900 transition-colors group-hover:text-brand-700 md:text-[1.75rem]">
                {post.title}
              </h3>
              <p className="mt-4 line-clamp-3 leading-relaxed text-ink-500">{post.excerpt}</p>
              <span className="mt-auto flex items-center justify-between gap-4 pt-8">
                <span className="label-mono text-[0.6875rem] text-ink-400">{formatDate(post.date)}</span>
                <span className="link-arrow">
                  Read <ArrowRight size={14} />
                </span>
              </span>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && <p className="py-16 text-center text-ink-500">No articles in this category yet.</p>}
    </>
  )
}
