import Link from 'next/link'
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react'
import type { BlogPost } from '@/types'
import { formatDate } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { ECGLine } from '@/components/shared/ecg-line'
import { CTABand } from '@/components/shared/cta-band'

interface Props {
  post: BlogPost
  related: BlogPost[]
  service?: { title: string; slug: string }
}

/** Inline markdown: **bold** and [text](/internal-path) links. */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((p, pi) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return (
        <strong key={pi} className="font-semibold text-ink-900">
          {p.slice(2, -2)}
        </strong>
      )
    }
    const link = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      const cls = 'font-medium text-brand-700 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-700'
      return href.startsWith('/') ? (
        <Link key={pi} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={pi} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      )
    }
    return p
  })
}

function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="mb-4 mt-12 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.035em] text-ink-900">
          {line.slice(3)}
        </h2>,
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="mb-3 mt-8 font-display text-xl font-semibold tracking-[-0.025em] text-ink-900">
          {line.slice(4)}
        </h3>,
      )
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="mb-2 mt-6 font-semibold text-ink-900">
          {line.slice(2, -2)}
        </p>,
      )
    } else if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="mb-6 border-t border-line">
          {items.map((item, j) => (
            <li key={j} className="flex gap-3 border-b border-line py-3 text-[1.0625rem] leading-relaxed text-ink-700">
              <span className="mt-2.5 h-[6px] w-[6px] shrink-0 bg-brand-500" aria-hidden="true" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>,
      )
      continue
    } else if (line.trim()) {
      elements.push(
        <p key={i} className="mb-5 text-[1.0625rem] leading-[1.8] text-ink-600">
          {renderInline(line)}
        </p>,
      )
    }
    i++
  }
  return elements
}

export function BlogContent({ post, related, service }: Props) {
  return (
    <div>
      {/* Header */}
      <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300" aria-label="Article header">
        <div className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
        <div className="container-x relative pb-14 pt-8 md:pb-20 md:pt-10">
          <nav aria-label="Breadcrumb" className="label-mono flex flex-wrap items-center gap-2 text-[0.6875rem] text-ink-400">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/blogs" className="hover:text-white">
              Articles
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[16rem] truncate text-ink-200" aria-current="page">
              {post.title}
            </span>
          </nav>
          <div className="mx-auto mt-14 max-w-3xl md:mt-20">
            <p className="flex items-center gap-2 label-mono text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              {post.category}
            </p>
            <h1 className="rise mt-6 font-display text-[clamp(2.1rem,4.6vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.045em] text-white">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed">{post.excerpt}</p>
            <dl className="mt-10 grid grid-cols-3 border-y border-white/10">
              <div className="flex flex-col-reverse py-4 pr-3">
                <dt className="mt-1 label-mono text-[0.625rem] text-ink-500">Written by</dt>
                <dd className="text-sm font-medium text-white">{post.author}</dd>
              </div>
              <div className="flex flex-col-reverse border-l border-white/10 py-4 pl-4 pr-3">
                <dt className="mt-1 label-mono text-[0.625rem] text-ink-500">Published</dt>
                <dd className="text-sm font-medium text-white">{formatDate(post.date)}</dd>
              </div>
              <div className="flex flex-col-reverse border-l border-white/10 py-4 pl-4">
                <dt className="mt-1 label-mono text-[0.625rem] text-ink-500">Reading</dt>
                <dd className="text-sm font-medium text-white">{post.readTime}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="relative h-12 text-brand-400 md:h-14" aria-hidden="true">
          <ECGLine />
        </div>
      </section>

      {/* Body */}
      <section className="frame bg-white">
        <div className="container-x grid grid-cols-1 gap-14 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <article className="mx-auto w-full max-w-3xl">
            {renderMarkdown(post.content)}

            <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-6">
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>

            {service && (
              <Link
                href={`/services/${service.slug}`}
                className="fx-fill group mt-10 flex items-center justify-between gap-6 border border-ink-900 p-6 text-ink-900 hover:text-white [--fx-fill:var(--color-ink-900)]"
              >
                <span>
                  <span className="block label-mono text-[0.6875rem] text-brand-600 group-hover:text-brand-300">Treatment for this condition in Cuttack</span>
                  <span className="mt-2 block font-display text-xl font-semibold tracking-[-0.03em]">{service.title} with Dr. Misra</span>
                </span>
                <ArrowRight size={20} className="shrink-0 transition-transform group-hover:-rotate-45" />
              </Link>
            )}

            {/* Author */}
            <div className="mt-10 flex items-start gap-5 border-y border-line py-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-brand-600 font-display text-lg font-semibold text-white">NM</span>
              <div>
                <p className="font-display text-lg font-semibold tracking-[-0.025em] text-ink-900">{post.author}</p>
                <p className="label-mono mt-1 text-[0.625rem] text-ink-500">Surgical Oncologist · AHPGIC, Cuttack</p>
                <p className="mt-3 leading-relaxed text-ink-600">
                  Dr. Misra writes to educate patients and families about cancer — empowering them with knowledge that supports early detection and informed
                  treatment decisions.
                </p>
              </div>
            </div>

            <Link href="/blogs" className="link-arrow mt-8">
              <ArrowLeft size={14} /> All articles
            </Link>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Sidebar">
            <div className="panel-dark dark-scope p-6 text-ink-300">
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">Need a Consultation?</h3>
              <p className="mt-3 text-sm leading-relaxed">If you have concerns about cancer symptoms or diagnosis, consult Dr. Misra for expert evaluation.</p>
              <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-primary mt-5 w-full">
                <Phone size={15} /> Call Now
              </a>
              <p className="mt-3 text-center label-mono text-[0.6875rem] text-ink-400">{siteConfig.phoneDisplay}</p>
            </div>
            {related.length > 0 && (
              <div className="card p-6">
                <h3 className="label-mono text-ink-500">Related Articles</h3>
                <ul className="mt-4">
                  {related.map((r) => (
                    <li key={r.id} className="border-t border-line first:border-t-0">
                      <Link href={`/blogs/${r.slug}`} className="group block py-4">
                        <span className="label-mono text-[0.625rem] text-brand-600">{r.category}</span>
                        <span className="mt-1 block font-medium leading-snug text-ink-900 group-hover:text-brand-700">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CTABand />
    </div>
  )
}
