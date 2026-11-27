import Link from 'next/link'
import type { ReactNode } from 'react'
import { ECGLine } from './ecg-line'

/** Dark inner-page header: mono breadcrumb, index label, display H1, lead, actions, heartbeat line. */
export function PageHero({
  crumbs,
  label,
  title,
  highlight,
  lead,
  actions,
  aside,
}: {
  crumbs: { name: string; href?: string }[]
  label: string
  title: string
  highlight?: string
  lead?: ReactNode
  actions?: ReactNode
  aside?: ReactNode
}) {
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } })
  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div
        className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="absolute -top-40 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-500/20 blur-[130px]" aria-hidden="true" />
      <div className="container-x relative pb-14 pt-8 md:pb-20 md:pt-10">
        <nav aria-label="Breadcrumb" className="label-mono flex flex-wrap items-center gap-2 text-[0.6875rem] text-ink-400">
          {crumbs.map((c, i) => (
            <span key={c.name} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.name}
                </Link>
              ) : (
                <span className="text-ink-200" aria-current="page">
                  {c.name}
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p {...rise(0)} className="rise mb-6 flex items-center gap-2 label-mono text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              {label}
            </p>
            <h1
              {...rise(0.06)}
              className={
                title.length + (highlight?.length ?? 0) > 44
                  ? 'rise font-display text-[clamp(2rem,4.2vw,3.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white'
                  : 'rise display-lg text-white'
              }
            >
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className="text-brand-400">{highlight}</span>
                </>
              )}
            </h1>
          </div>
          <div {...rise(0.16)} className="rise">
            {lead && <div className="text-lg leading-relaxed text-ink-300">{lead}</div>}
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
            {aside}
          </div>
        </div>
      </div>
      <div className="relative h-12 text-brand-400 md:h-16" aria-hidden="true">
        <ECGLine />
      </div>
    </section>
  )
}
