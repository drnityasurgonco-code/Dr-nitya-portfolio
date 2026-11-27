import Link from 'next/link'
import { siteConfig } from '@/config/site'

/**
 * Answers searches like "acharya harihar cancer hospital cuttack surgical oncology doctor" honestly:
 * states Dr. Misra's faculty role and makes clear this is not the official AHPGIC website.
 */
export function AhpgicSection() {
  return (
    <section aria-labelledby="ahpgic-heading" className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h2 id="ahpgic-heading" className="font-display text-3xl font-bold text-neutral-900 mb-5">
          Surgical Oncologist at AHPGIC (Acharya Harihar Cancer Hospital), Cuttack
        </h2>
        <p className="font-body text-neutral-600 leading-relaxed mb-4">
          Dr. Nitya Nutan Misra is an Assistant Professor in the Department of Surgical Oncology at Acharya Harihar Post
          Graduate Institute of Cancer (AHPGIC), Mangalabag, Cuttack. AHPGIC, earlier known as the Acharya Harihar Regional
          Cancer Centre (AHRCC), is Odisha&apos;s government cancer institute, where he treats patients and teaches
          surgical oncology.
        </p>
        <p className="font-body text-neutral-600 leading-relaxed mb-4">
          For private consultations, Dr. Misra sees patients at {siteConfig.hospital}, Kathagola Rd, Mangalabag, Cuttack.
          Appointments can be booked by calling or WhatsApp on {siteConfig.phoneDisplay}, or through the{' '}
          <Link href="/contact" className="text-primary-700 underline">contact page</Link>.
        </p>
        <p className="font-body text-sm text-neutral-500 leading-relaxed bg-neutral-50 border border-neutral-100 rounded-xl p-4">
          This is Dr. Nitya Nutan Misra&apos;s personal website. It is not the official website of AHPGIC. For hospital
          registration, OPD tickets and other hospital services, please contact AHPGIC directly through its official
          website,{' '}
          <a href="https://ahpgic.in" target="_blank" rel="noopener noreferrer" className="underline">ahpgic.in</a>.
        </p>
      </div>
    </section>
  )
}
