import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/shared/icons'
import { ECGLine } from '@/components/shared/ecg-line'
import { OpenStatus } from '@/components/shared/open-status'

// Verifiable credentials only: no ratings or patient counts.
const CREDENTIALS = [
  { value: '10+', unit: ' yrs', label: 'Surgical experience' },
  { value: 'MCh', label: 'Surgical oncology' },
  { value: 'AHPGIC', label: 'Assistant professor' },
  { value: '6', label: 'Cancer specialities' },
]

const whatsapp = getWhatsAppUrl('Hello Dr. Misra, I would like to book a consultation.')

export function HeroSection() {
  /** Movement-only entrance (CSS): the text is visible in the server HTML from the first frame. */
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } })

  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div
        className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="absolute -top-40 right-[-8%] h-[38rem] w-[38rem] rounded-full bg-brand-500/25 blur-[140px]" aria-hidden="true" />

      {/* First screen: fills the viewport below the 5rem header */}
      <div className="relative flex min-h-[calc(100svh-5rem)] flex-col">
        <div className="container-x pt-5 md:pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 label-mono">
            <p className="hidden items-center gap-2 text-brand-300 md:flex">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              Mangalabag · Cuttack, Odisha
            </p>
            <OpenStatus className="max-md:rounded-full max-md:border max-md:border-white/10 max-md:bg-white/[0.04] max-md:px-3 max-md:py-[0.4375rem] max-md:text-[0.6875rem]" />
          </div>
        </div>

        <div className="container-x grid flex-1 grid-cols-1 items-end gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
          <div className="flex flex-col justify-center self-center py-7 md:py-10">
            <h1 {...rise(0.05)} className="rise text-white">
              <span className="mb-5 block w-fit font-display text-[0.8125rem] font-medium tracking-[-0.02em] text-brand-300 max-md:flex max-md:items-center max-md:gap-2 max-md:rounded-full max-md:border max-md:border-brand-400/25 max-md:bg-brand-500/10 max-md:px-3 max-md:py-1.5 md:text-2xl">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 md:hidden" aria-hidden="true" />
                Surgical oncologist in Cuttack
              </span>
              <span className="display-xl block text-[clamp(2.5rem,12vw,4.5rem)] md:text-[clamp(2.75rem,min(5.1vw,10svh),5.75rem)]">
                Precision cancer surgery.
                <br />
                <span className="text-brand-400">Compassionate care.</span>
              </span>
            </h1>

            <p
              {...rise(0.18)}
              className="rise mt-6 max-w-2xl font-display text-[1.1875rem] font-medium leading-[1.4] tracking-[-0.02em] text-ink-300 md:mt-8 md:text-[clamp(1.25rem,min(2.2vw,3.8svh),1.875rem)] md:leading-[1.2] md:tracking-[-0.03em]"
            >
              {siteConfig.name}, MCh Surgical Oncologist and Assistant Professor at AHPGIC, Cuttack.
              <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] animate-blink bg-brand-400" aria-hidden="true" />
            </p>

            {/* Mobile: trust card + actions stay inside the first screen */}
            <div {...rise(0.3)} className="rise mt-7 md:hidden">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-sm">
                <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-500/60 bg-ink-800">
                  <Image src="/images/doctor/d-hero-teal.webp" alt="" fill sizes="56px" className="origin-[50%_20%] scale-[2.1] object-cover object-[50%_20%]" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">MBBS · MS · MCh (Surgical Oncology)</p>
                  <p className="mt-0.5 text-[0.8125rem] leading-snug text-ink-400">Breast · Head &amp; neck · Thyroid · GI · Sarcoma</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link href="/contact" className="btn-primary btn-lg col-span-2 w-full">
                  Book consultation <ArrowRight size={16} />
                </Link>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost-light h-12 w-full px-3">
                  <WhatsAppIcon className="h-4 w-4 text-pulse" /> WhatsApp
                </a>
                <a href={`tel:${siteConfig.phone}`} className="fx-phone btn-ghost-light h-12 w-full px-3">
                  <Phone size={15} aria-hidden="true" /> Call
                </a>
              </div>
            </div>
          </div>

          {/* Desktop portrait: cut-out photo rising from the heartbeat line */}
          <div {...rise(0.12)} className="rise relative hidden self-end lg:block">
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/25 blur-[90px]" aria-hidden="true" />
            <Image
              src="/images/doctor/d-hero-teal.webp"
              alt={`${siteConfig.name}, Surgical Oncologist in Cuttack`}
              width={760}
              height={760}
              priority
              sizes="(min-width: 1024px) 40vw, 0px"
              className="relative mx-auto h-auto max-h-[min(66svh,38rem)] w-full max-w-[34rem] select-none object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Heartbeat */}
        <div className="relative h-14 shrink-0 text-brand-400 md:h-[clamp(3.5rem,9svh,7rem)]" aria-hidden="true">
          <ECGLine />
        </div>
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 py-10 md:py-14 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
          <p {...rise(0.3)} className="rise max-w-xl text-lg leading-relaxed">
            Surgery for breast, head &amp; neck, thyroid, gastrointestinal cancers and sarcoma, with every complex case planned at a
            multidisciplinary tumour board. Private OPD at {siteConfig.hospital}, Mangalabag.
          </p>
          <div {...rise(0.38)} className="rise flex flex-wrap gap-3 max-md:hidden lg:justify-end">
            <Link href="/contact" className="btn-primary btn-lg">
              Book consultation <ArrowRight size={16} />
            </Link>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost-light btn-lg">
              <WhatsAppIcon className="h-4 w-4 text-pulse" /> WhatsApp
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {CREDENTIALS.map((c, i) => (
            <div
              key={c.label}
              className={[
                'flex flex-col-reverse py-8 pr-4 md:py-10',
                i % 2 === 1 ? 'border-l border-white/10 pl-6' : '',
                i >= 2 ? 'border-t border-white/10 lg:border-t-0' : '',
                i === 2 ? 'lg:border-l lg:pl-6' : '',
              ].join(' ')}
            >
              <dt className="mt-3 label-mono text-[0.6875rem] text-ink-400">{c.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                {c.value}
                {c.unit && <span className="text-ink-500">{c.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
