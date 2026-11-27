import Link from 'next/link'
import { siteConfig } from '@/config/site'

/**
 * Answers searches like "acharya harihar cancer hospital cuttack surgical oncology doctor" honestly:
 * states Dr. Misra's faculty role and makes clear this is not the official AHPGIC website.
 */
export function AhpgicSection() {
  return (
    <section aria-labelledby="ahpgic-heading" className="frame section border-t border-line bg-white">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
        <div>
          <p className="flex items-center gap-2 label-mono text-brand-600">
            <span className="h-[7px] w-[7px] bg-brand-500" aria-hidden="true" />
            Faculty · AHPGIC
          </p>
          <h2 id="ahpgic-heading" className="display-md mt-6">
            Surgical Oncologist at AHPGIC <span className="text-brand-600">(Acharya Harihar Cancer Hospital), Cuttack</span>
          </h2>
        </div>
        <div className="prose-clinic">
        <p>
          Dr. Nitya Nutan Misra is an Assistant Professor in the Department of Surgical Oncology at Acharya Harihar Post
          Graduate Institute of Cancer (AHPGIC), Mangalabag, Cuttack. AHPGIC, earlier known as the Acharya Harihar Regional
          Cancer Centre (AHRCC), is Odisha&apos;s government cancer institute, where he treats patients and teaches
          surgical oncology.
        </p>
        <p>
          For private consultations, Dr. Misra sees patients at {siteConfig.hospital}, Kathagola Rd, Mangalabag, Cuttack.
          Appointments can be booked by calling or WhatsApp on {siteConfig.phoneDisplay}, or through the{' '}
          <Link href="/contact" className="text-brand-700 underline underline-offset-2">contact page</Link>.
        </p>
        <p className="!mt-8 border-l-2 border-brand-500 bg-paper p-5 !text-[0.9375rem]">
          This is Dr. Nitya Nutan Misra&apos;s personal website. It is not the official website of AHPGIC. For hospital
          registration, OPD tickets and other hospital services, please contact AHPGIC directly through its official
          website,{' '}
          <a href="https://ahpgic.in" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">ahpgic.in</a>.
        </p>
        </div>
      </div>
    </section>
  )
}
