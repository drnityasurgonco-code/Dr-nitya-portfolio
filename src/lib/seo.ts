import type { Metadata } from 'next'
import { SITE_URL, siteConfig } from '@/config/site'

export const ids = {
  website: `${SITE_URL}/#website`,
  physician: `${SITE_URL}/#physician`,
  person: `${SITE_URL}/#person`,
}

export const absoluteUrl = (path = '/') => (path === '/' ? SITE_URL : `${SITE_URL}${path}`)

/**
 * Per-page metadata with a self-referencing canonical and a complete Open Graph block.
 * `title` is used as-is (absolute) so the brand never appears twice.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
}: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
}): Metadata {
  const url = absoluteUrl(path)
  // Page-level openGraph replaces the parent's, so the generated image is attached explicitly.
  const images = [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${siteConfig.name} – Surgical Oncologist, Cuttack` }]
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'en_IN',
      url,
      siteName: siteConfig.name,
      title,
      description,
      images,
      ...(publishedTime ? { publishedTime, authors: [siteConfig.name] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: images.map((i) => i.url) },
  }
}

/** Escape `<` so content can never close the surrounding <script> tag. */
export const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Site-wide entity graph: the practice (Physician), the doctor (Person) and the WebSite. */
export function siteSchema() {
  const { addressParts, hours } = siteConfig
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        '@id': ids.physician,
        name: `${siteConfig.name} – Surgical Oncologist`,
        url: SITE_URL,
        image: absoluteUrl(siteConfig.doctorImage),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        medicalSpecialty: 'Oncologic',
        address: { '@type': 'PostalAddress', ...addressParts },
        openingHoursSpecification: hours
          .filter((h) => h.days.length > 0)
          .map((h) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        areaServed: ['Cuttack', 'Bhubaneswar', 'Odisha'],
        employee: { '@id': ids.person },
      },
      {
        '@type': 'Person',
        '@id': ids.person,
        name: siteConfig.name,
        honorificPrefix: 'Dr.',
        jobTitle: `${siteConfig.specialization}, ${siteConfig.designation}`,
        url: absoluteUrl('/about'),
        image: absoluteUrl(siteConfig.doctorImage),
        knowsAbout: [
          'Surgical oncology',
          'Breast cancer surgery',
          'Head and neck cancer surgery',
          'Gastrointestinal cancer surgery',
          'Thyroid and endocrine tumour surgery',
          'Sarcoma surgery',
        ],
        worksFor: [
          { '@id': ids.physician },
          {
            '@type': 'Hospital',
            name: siteConfig.employer,
            address: { '@type': 'PostalAddress', addressLocality: 'Cuttack', addressRegion: 'Odisha', addressCountry: 'IN' },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': ids.website,
        name: siteConfig.name,
        url: SITE_URL,
        inLanguage: 'en-IN',
        publisher: { '@id': ids.physician },
      },
    ],
  }
}
