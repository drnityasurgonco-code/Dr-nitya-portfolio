import Link from 'next/link'
import { Activity, ArrowRight, Bone, Ribbon, ScanFace, Stethoscope, Users, type LucideIcon } from 'lucide-react'
import { services } from '@/features/services/services.data'
import { SectionHeader } from '@/components/shared/section-header'

const icons: Record<string, LucideIcon> = {
  ribbon: Ribbon,
  'scan-face': ScanFace,
  stethoscope: Stethoscope,
  activity: Activity,
  bone: Bone,
  users: Users,
}

const tags: Record<string, string[]> = {
  'breast-cancer-surgery': ['Lumpectomy', 'Mastectomy', 'Sentinel node biopsy'],
  'head-neck-cancer-surgery': ['Mouth cancer', 'Neck dissection', 'Salivary glands'],
  'gastrointestinal-cancer-surgery': ['Stomach', 'Colorectal', 'Gallbladder'],
  'thyroid-endocrine-tumors': ['Thyroid nodule', 'Thyroidectomy', 'Parathyroid'],
  'sarcoma-surgery': ['Limb salvage', 'Soft tissue', 'Wide excision'],
  'multidisciplinary-cancer-treatment': ['Tumour board', 'Second opinion', 'Treatment planning'],
}

/** Numbered editorial rows: index · name (icon slides in on hover) · summary + tags · arrow. */
export function SpecialtyRows() {
  return (
    <section className="frame section bg-paper">
      <div className="container-x">
        <SectionHeader
          index={2}
          eyebrow="Specialities"
          meta={
            <Link href="/services" className="hover:text-ink-900">
              All specialities →
            </Link>
          }
          title="Six areas of cancer surgery,"
          titleHighlight="one surgeon you can talk to."
          action={
            <Link href="/services" className="btn-outline">
              Explore specialities <ArrowRight size={16} />
            </Link>
          }
        />
        <ul className="mt-14 border-t border-line-strong md:mt-20">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Stethoscope
            return (
              <li key={s.slug} className="border-b border-line-strong">
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[4rem_1.15fr_minmax(0,1fr)_2.5rem] md:items-start md:gap-6 md:py-10"
                >
                  <span className="label-mono pt-2 text-ink-400">{String(i + 1).padStart(2, '0')}</span>
                  {/*
                    The icon is absolutely positioned and the title moves with a transform, so the hover
                    never changes layout: no re-wrapping, no row-height jump. The title's width is capped
                    at the column minus the icon + gap (3.5rem + 1.25rem), so it wraps the same way at rest
                    and on hover.
                  */}
                  <span className="relative flex items-center">
                    <span
                      className="absolute left-0 top-1/2 hidden h-14 w-0 -translate-y-1/2 items-center justify-center overflow-hidden rounded bg-brand-600 text-white transition-[width] duration-500 ease-out md:flex md:group-hover:w-14"
                      aria-hidden="true"
                    >
                      <Icon size={24} strokeWidth={1.75} className="shrink-0" />
                    </span>
                    <span className="block font-display text-3xl font-semibold leading-none tracking-[-0.045em] text-ink-900 [transition:color_150ms_cubic-bezier(0.4,0,0.2,1),translate_500ms_cubic-bezier(0,0,0.2,1)] group-hover:text-brand-600 md:max-w-[calc(100%-4.75rem)] md:text-[2.75rem] md:group-hover:translate-x-[4.75rem]">
                      {s.title}
                    </span>
                  </span>
                  <span className="block">
                    <span className="block leading-relaxed text-ink-600">{s.shortDesc}</span>
                    <span className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 label-mono text-[0.6875rem] text-ink-500">
                      {(tags[s.slug] ?? []).map((t, j) => (
                        <span key={t} className="flex items-center gap-2">
                          {j > 0 && <span aria-hidden="true">·</span>}
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="hidden justify-end pt-2 md:flex">
                    <ArrowRight size={22} className="text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
