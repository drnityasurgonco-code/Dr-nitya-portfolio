/**
 * Unique content for each location page, written around the queries Google Autocomplete shows
 * for Cuttack, Bhubaneswar and Odisha (Nov 2026): "cancer specialist / oncologist / surgical
 * oncologist in <city>", "thyroid doctor in <city>", "oral cancer doctor in <city>",
 * "breast cancer doctor in <city>", "cancer treatment cost in odisha", "biopsy test in <city>".
 */
type Section = { heading: string; paragraphs: string[]; links?: { label: string; href: string }[] }

const conditionLinks = [
  { label: 'Breast cancer surgery', href: '/services/breast-cancer-surgery' },
  { label: 'Mouth (oral), head & neck cancer surgery', href: '/services/head-neck-cancer-surgery' },
  { label: 'Thyroid nodule and thyroid cancer surgery', href: '/services/thyroid-endocrine-tumors' },
  { label: 'Stomach, colon, gallbladder and other GI cancer surgery', href: '/services/gastrointestinal-cancer-surgery' },
  { label: 'Sarcoma and soft tissue tumour surgery', href: '/services/sarcoma-surgery' },
]

export const locationSections: Record<string, Section[]> = {
  '/doctor-in-cuttack': [
    {
      heading: 'Cancer Specialist and Surgical Oncologist in Cuttack',
      paragraphs: [
        'A surgical oncologist is a surgeon who specialises in operating on cancer: taking the right biopsy, removing tumours with safe margins, and removing lymph nodes where needed. Dr. Nitya Nutan Misra holds an MCh in Surgical Oncology and is an Assistant Professor in the surgical oncology department at Acharya Harihar Post Graduate Institute of Cancer (AHPGIC), Cuttack.',
        'For private consultations he sees patients at Sai Shree Polyclinic in Mangalabag, Cuttack. The cancers he most often treats are listed below; each link explains the condition, warning signs and treatment.',
      ],
      links: conditionLinks,
    },
    {
      heading: 'Thyroid, Breast and Oral Cancer Doctor in Cuttack',
      paragraphs: [
        'Many people in Cuttack search for a "thyroid doctor", a "breast cancer doctor" or an "oral cancer doctor". For a thyroid nodule or swelling that may need an operation, a breast lump, or a mouth ulcer or patch that is not healing, a surgical oncologist is the right specialist to assess whether surgery is needed, and to plan the biopsy if it is not yet clear.',
        'Medical thyroid problems such as an under- or over-active thyroid are usually treated by an endocrinologist with tablets; Dr. Misra sees thyroid nodules, large swellings and thyroid cancer that need surgery.',
      ],
    },
    {
      heading: 'Biopsy and Diagnosis in Cuttack',
      paragraphs: [
        'Scans can show that a lump looks suspicious, but only a biopsy confirms cancer and its type. Depending on the site, this may be an FNAC, a core needle biopsy, or a small biopsy from the mouth or skin. Dr. Misra advises which test is appropriate and plans treatment once the report is ready.',
      ],
      links: [{ label: 'Read: Biopsy for suspected cancer, types and reports', href: '/blogs/biopsy-for-cancer-types-reports-guide' }],
    },
    {
      heading: 'Visiting the Clinic in Mangalabag, Cuttack',
      paragraphs: [
        'Sai Shree Polyclinic is on Kathagola Rd, near Shree Maa Hospital, Mangalabag, Cuttack 753001. OPD runs Monday to Friday, 9:00 AM to 4:00 PM, and Saturday, 9:00 AM to 1:00 PM. Please call or WhatsApp +91 94388 44662 before visiting to book a slot.',
        'Bring all previous reports, scan CDs or films, biopsy reports and slides or blocks, and a list of the medicines you take.',
      ],
    },
  ],
  '/doctor-in-bhubaneswar': [
    {
      heading: 'Surgical Oncologist for Patients from Bhubaneswar',
      paragraphs: [
        'Bhubaneswar and Cuttack are twin cities about 30 km apart, and many patients from Bhubaneswar, Khordha and nearby areas consult Dr. Nitya Nutan Misra at Sai Shree Polyclinic in Mangalabag, Cuttack. He is an MCh Surgical Oncologist and Assistant Professor at AHPGIC, Cuttack.',
        'If you are looking for a cancer specialist, oncologist or cancer surgeon in Bhubaneswar for a breast lump, a thyroid nodule, a mouth ulcer that will not heal, or a confirmed cancer, a single consultation with all your reports is usually enough to understand the diagnosis and the treatment options.',
      ],
      links: conditionLinks,
    },
    {
      heading: 'Planning Your Visit from Bhubaneswar',
      paragraphs: [
        'Call or WhatsApp +91 94388 44662 before travelling to confirm your appointment time. OPD runs Monday to Friday, 9:00 AM to 4:00 PM, and Saturday, 9:00 AM to 1:00 PM.',
        'To make the most of one visit, bring every report you have: ultrasound, mammogram, CT or MRI (with the CD), FNAC or biopsy reports, and the biopsy slides or blocks if a biopsy was done elsewhere. A written list of current medicines and any earlier operations also helps.',
      ],
    },
    {
      heading: 'Surgical, Medical or Radiation Oncologist?',
      paragraphs: [
        'Bhubaneswar has many oncology departments, and it can be confusing to know which specialist to see. For a lump, an ulcer or a solid tumour that may need an operation, a surgical oncologist is usually the right first specialist. Chemotherapy and radiotherapy are planned with medical and radiation oncologists as part of a team.',
      ],
      links: [{ label: 'Read: Which cancer doctor should you see?', href: '/blogs/surgical-vs-medical-vs-radiation-oncologist' }],
    },
  ],
  '/clinic-in-odisha': [
    {
      heading: 'Patients from Across Odisha',
      paragraphs: [
        'Cuttack is home to Odisha’s major government cancer institute, and patients travel here from every part of the state. Dr. Nitya Nutan Misra sees patients from Cuttack, Bhubaneswar, Jajpur, Kendrapara, Jagatsinghpur, Puri, Khordha, Dhenkanal, Angul, Balasore, Bhadrak and beyond at Sai Shree Polyclinic in Mangalabag, Cuttack.',
        'If you are travelling from a district, call or WhatsApp +91 94388 44662 first, and bring all your reports so that the diagnosis and treatment plan can be discussed in one visit.',
      ],
      links: conditionLinks,
    },
    {
      heading: 'Cancer Treatment Cost and Government Schemes in Odisha',
      paragraphs: [
        'The cost of cancer treatment depends on the type and stage of cancer and on whether surgery, chemotherapy or radiotherapy are needed. Odisha’s Gopabandhu Jan Arogya Yojana (GJAY, earlier BSKY), combined with Ayushman Bharat PM-JAY since 2025, provides cashless treatment for eligible families at government and empanelled hospitals. Check the current limits and eligibility with the scheme help desk before admission.',
      ],
      links: [{ label: 'Read: Cancer treatment cost in Odisha and government schemes', href: '/blogs/cancer-treatment-cost-odisha-gjay-ayushman-bharat' }],
    },
    {
      heading: 'Second Opinion on a Cancer Treatment Plan',
      paragraphs: [
        'Many patients come for a second opinion after being diagnosed elsewhere. This is normal in cancer care. Bring the biopsy report, slides or blocks, and scan CDs, and Dr. Misra will review whether surgery is the right step and in what order treatments should be given.',
      ],
      links: [{ label: 'Multidisciplinary cancer treatment', href: '/services/multidisciplinary-cancer-treatment' }],
    },
  ],
}
