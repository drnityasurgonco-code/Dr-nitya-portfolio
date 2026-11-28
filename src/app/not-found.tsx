import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { ECGLine } from '@/components/shared/ecg-line'

export default function NotFound() {
  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" aria-hidden="true" />
      <div className="container-x relative flex min-h-[calc(100svh-5rem)] flex-col justify-center py-20">
        <p className="label-mono text-brand-300">Error 404</p>
        <h1 className="display-xl mt-6 text-white">
          Page not found. <span className="text-brand-400">Let&apos;s get you back.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg">The page you are looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary btn-lg">
            Back to home <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="btn-ghost-light btn-lg">
            Contact
          </Link>
        </div>
        <ul className="mt-14 flex flex-wrap gap-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="block rounded border border-white/15 px-3 py-2 text-sm text-ink-200 transition-colors hover:border-white/40 hover:text-white">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-14 text-brand-400" aria-hidden="true">
        <ECGLine />
      </div>
    </section>
  )
}
