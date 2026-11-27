import { siteSchema, toJsonLd } from '@/lib/seo'

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(data) }} />
}

/** Site-wide Physician + Person + WebSite graph (rendered once in the root layout). */
export function StructuredData() {
  return <JsonLd data={siteSchema()} />
}
