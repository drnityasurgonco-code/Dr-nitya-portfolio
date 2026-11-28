// Canonical host: Vercel serves www and redirects the apex, so every URL we emit uses www.
export const SITE_URL = 'https://www.drnityanutanmisra.com'

export const siteConfig = {
  name: 'Dr. Nitya Nutan Misra',
  title: 'Best Doctor in Cuttack | Dr. Nitya Nutan Misra | Book Appointment',
  description:
    'Dr. Nitya Nutan Misra, MCh Surgical Oncologist in Cuttack, Odisha, treats breast, head & neck, GI, thyroid cancer and sarcoma. Call or WhatsApp to book.',
  url: SITE_URL,
  phone: '+919438844662',
  phoneDisplay: '+91 94388 44662',
  whatsapp: '919438844662',
  email: 'contact@drnityanutanmisra.com',
  // Single source of truth for NAP. Must match the Google Business Profile exactly.
  hospital: 'Sai Shree Polyclinic',
  address: 'Sai Shree Polyclinic, Kathagola Rd, near Shree Maa Hospital, Mangalabag, Cuttack, Odisha 753001',
  addressParts: {
    streetAddress: 'Sai Shree Polyclinic, Kathagola Rd, near Shree Maa Hospital, Mangalabag',
    addressLocality: 'Cuttack',
    addressRegion: 'Odisha',
    postalCode: '753001',
    addressCountry: 'IN',
  },
  // Google Maps listing for Sai Shree Poly Clinic (place ID ChIJ2TOgzagTGToR7Sbpbc3FlhI).
  geo: { latitude: 20.4770033, longitude: 85.8854868 },
  // Opens the clinic's Google Maps place page (photos, reviews, hours, Directions button).
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sai+Shree+Poly+Clinic&query_place_id=ChIJ2TOgzagTGToR7Sbpbc3FlhI',
  // Turn-by-turn directions to the same listing.
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=20.4770033%2C85.8854868&destination_place_id=ChIJ2TOgzagTGToR7Sbpbc3FlhI',
  // Embed pinned to the same Google listing, with the clinic's name card.
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1868.6!2d85.8854868!3d20.4770033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1913a8cda033d9%3A0x1296c5cd6de926ed!2sSai%20Shree%20Poly%20Clinic!5e0!3m2!1sen!2sin!4v1732780000000!5m2!1sen!2sin',
  // OPD hours shown on the contact page and used in schema.
  hours: [
    { label: 'Monday – Friday', time: '9:00 AM – 4:00 PM', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '16:00' },
    { label: 'Saturday', time: '9:00 AM – 1:00 PM', days: ['Saturday'], opens: '09:00', closes: '13:00' },
    { label: 'Sunday', time: 'Emergency Only', days: [], opens: '', closes: '' },
  ],
  city: 'Cuttack, Odisha 753001',
  specialization: 'Surgical Oncologist',
  designation: 'Assistant Professor',
  employer: 'Acharya Harihar Post Graduate Institute of Cancer',
  tagline: 'Early diagnosis saves lives.',
  doctorImage: '/images/doctor/d-hero-home-1.webp',
  // Google Search Console verification token currently served by the live site.
  googleVerification: 'sSOKGN2s4Y48jL-bR846cMxSoYR3hKxy_dVI8uyfRTM',
}
