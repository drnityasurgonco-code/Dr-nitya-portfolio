import { siteConfig } from '@/config/site'

export function StructuredData() {
  const doctorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.og.image}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sai shree polyclinic, At- Kathagola, Ring Rd, near Shree Maa Hospital',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      postalCode: '753001',
      addressCountry: 'IN',
    },
    medicalSpecialty: 'Surgical Oncology',
    worksFor: {
      '@type': 'Hospital',
      name: 'Acharya Harihar Post Graduate Institute of Cancer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cuttack',
        addressRegion: 'Odisha',
        addressCountry: 'IN',
      },
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Dr. Nitya Nutan Misra Clinic',
    image: `${siteConfig.url}${siteConfig.og.image}`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sai shree polyclinic, At- Kathagola, Ring Rd, near Shree Maa Hospital',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      postalCode: '753001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.4625, // Approx coordinates for Cuttack, can be updated
      longitude: 85.8830,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [siteConfig.social.twitter, siteConfig.social.linkedin],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
