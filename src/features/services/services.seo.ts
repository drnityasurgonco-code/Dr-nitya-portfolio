/**
 * Local-SEO content for each /services/[slug] page.
 * Keywords come from Google Autocomplete research (Nov 2026) for Cuttack, Bhubaneswar and Odisha.
 * Medical statements are general patient information; they must be reviewed by Dr. Misra before publishing.
 */
export interface ServiceSeo {
  h1: string
  title: string
  description: string
  intro: string
  signsHeading: string
  signs: string[]
  localNote: string
  blogCategory?: string
  faqs: { question: string; answer: string }[]
}

const LOCAL =
  'Dr. Misra sees patients at Sai Shree Polyclinic in Mangalabag, Cuttack. Patients come from across Cuttack, from Bhubaneswar (about 30 km away) and from districts such as Jajpur, Kendrapara, Jagatsinghpur, Puri, Dhenkanal and Balasore.'

export const serviceSeo: Record<string, ServiceSeo> = {
  'breast-cancer-surgery': {
    h1: 'Breast Cancer Surgery in Cuttack',
    title: 'Breast Cancer Surgery in Cuttack | Dr. Nitya Nutan Misra',
    description:
      'Breast cancer doctor in Cuttack for patients from Bhubaneswar and Odisha: lumpectomy, mastectomy, sentinel node biopsy and oncoplastic surgery. Book a consult.',
    intro:
      'If you have found a breast lump or have been told your mammogram or biopsy is abnormal, a breast cancer surgeon can explain what the findings mean and what the options are. Dr. Nitya Nutan Misra, MCh Surgical Oncologist, treats breast cancer in Cuttack, from the first evaluation through surgery and follow-up, with treatment planned alongside medical and radiation oncologists.',
    signsHeading: 'When to see a breast cancer specialist',
    signs: [
      'A new lump in the breast or armpit, even if it is painless',
      'A change in the size or shape of one breast',
      'Dimpling, puckering or an orange-peel look of the skin',
      'Nipple turning inward, or bloody discharge from the nipple',
      'An abnormal mammogram, ultrasound or biopsy report',
    ],
    localNote: LOCAL,
    blogCategory: 'Breast Cancer',
    faqs: [
      {
        question: 'Is every breast lump cancer?',
        answer:
          'No. Most breast lumps, especially in young women, are benign, such as fibroadenomas or cysts. But a lump cannot be judged by touch alone, so every new lump should be examined and, where needed, checked with ultrasound or mammography and a needle biopsy.',
      },
      {
        question: 'Will I need my whole breast removed?',
        answer:
          'Not always. Many women are suitable for breast-conserving surgery (lumpectomy), where only the tumour with a margin of normal tissue is removed, usually followed by radiotherapy. Whether this is possible depends on tumour size, its position, the breast size and the biopsy results.',
      },
      {
        question: 'What is a sentinel lymph node biopsy?',
        answer:
          'It is a way to check the first lymph nodes in the armpit that drain the breast. If they are clear, removing all the armpit nodes can often be avoided, which lowers the risk of arm swelling (lymphoedema).',
      },
      {
        question: 'Where can I consult a breast cancer doctor in Cuttack?',
        answer:
          'Dr. Nitya Nutan Misra sees patients at Sai Shree Polyclinic, Kathagola Rd, Mangalabag, Cuttack. Call or WhatsApp +91 94388 44662 to book. Patients from Bhubaneswar (about 30 km away) are seen at the same clinic.',
      },
    ],
  },
  'head-neck-cancer-surgery': {
    h1: 'Oral (Mouth) Cancer & Head and Neck Cancer Surgery in Cuttack',
    title: 'Mouth Cancer Surgeon in Cuttack | Head & Neck Cancer Surgery',
    description:
      'Mouth cancer doctor in Cuttack: surgery for tongue, cheek, jaw, throat, voice box and salivary gland cancers, for patients from Bhubaneswar and Odisha.',
    intro:
      'Mouth cancer is among the most common cancers in Odisha, largely because of chewing tobacco, gutkha, gudakhu, betel quid and smoking. Caught early, it is often curable with surgery. Dr. Nitya Nutan Misra performs surgery for cancers of the tongue, cheek, gums, jaw, throat, voice box and salivary glands, aiming for complete removal while protecting speech and swallowing.',
    signsHeading: 'Warning signs of mouth and throat cancer',
    signs: [
      'A mouth ulcer or sore that has not healed in 2–3 weeks',
      'A white or red patch inside the mouth (leukoplakia or erythroplakia)',
      'A lump in the cheek, on the tongue or in the neck',
      'Difficulty opening the mouth, chewing or swallowing',
      'A change in voice or hoarseness lasting more than 3 weeks',
      'Loose teeth or a denture that no longer fits, without a dental cause',
    ],
    localNote: LOCAL,
    blogCategory: 'Head & Neck Cancer',
    faqs: [
      {
        question: 'Is mouth cancer curable?',
        answer:
          'Early mouth cancer is often curable, mainly with surgery, sometimes followed by radiotherapy. The outcome depends heavily on the stage at diagnosis, which is why a non-healing ulcer or patch should be checked without delay.',
      },
      {
        question: 'What does mouth cancer surgery involve?',
        answer:
          'The tumour is removed with a margin of healthy tissue, and lymph nodes in the neck are often removed (neck dissection). Where a large area is removed, it can be rebuilt using tissue from elsewhere in the body so that eating and speaking are preserved as far as possible.',
      },
      {
        question: 'I chew tobacco or gudakhu. Should I get checked?',
        answer:
          'Yes. Regular tobacco users should look inside the mouth every month and see a doctor for any patch, ulcer or lump that does not heal. Stopping tobacco at any age lowers the risk.',
      },
      {
        question: 'Where can I consult an oral cancer doctor in Cuttack?',
        answer:
          'Dr. Nitya Nutan Misra sees patients at Sai Shree Polyclinic, Mangalabag, Cuttack. Call or WhatsApp +91 94388 44662 and bring any biopsy report, scan or slides you have.',
      },
    ],
  },
  'gastrointestinal-cancer-surgery': {
    h1: 'GI Cancer Surgery in Cuttack: Stomach, Colon, Gallbladder & Pancreas',
    title: 'GI Cancer Surgery in Cuttack | Dr. Nitya Nutan Misra',
    description:
      'Surgery for stomach, colorectal, gallbladder, liver, pancreatic and oesophageal cancer in Cuttack, Odisha, including laparoscopic options. Book a consultation.',
    intro:
      'Cancers of the digestive system, including the food pipe, stomach, colon, rectum, liver, gallbladder and pancreas, often need major surgery as part of treatment. Gallbladder cancer in particular is more common in eastern and northern India than in most parts of the world. Dr. Nitya Nutan Misra performs open and laparoscopic GI cancer surgery in Cuttack, planned together with chemotherapy and radiotherapy where needed.',
    signsHeading: 'Symptoms that need a GI cancer check',
    signs: [
      'Difficulty swallowing, or food sticking in the chest',
      'Unexplained weight loss or loss of appetite',
      'Blood in the stool, black stools, or a lasting change in bowel habit',
      'Yellowing of the eyes or skin (jaundice), with itching or dark urine',
      'A lump or persistent pain in the abdomen',
      'Gallbladder wall thickening or a polyp reported on ultrasound',
    ],
    localNote: LOCAL,
    blogCategory: 'Gastrointestinal Cancer',
    faqs: [
      {
        question: 'Do gallstones cause gallbladder cancer?',
        answer:
          'Most people with gallstones never develop cancer, but long-standing gallstones are the most important risk factor for gallbladder cancer. Gallbladder polyps above about 1 cm, and a thickened or calcified gallbladder wall, also need specialist review.',
      },
      {
        question: 'Can GI cancer surgery be done laparoscopically?',
        answer:
          'Many stomach and colorectal cancer operations can be done by keyhole (laparoscopic) surgery, which usually means less pain and a quicker recovery. The choice depends on the tumour stage and the patient, and some operations are safer done open.',
      },
      {
        question: 'Will I need chemotherapy as well as surgery?',
        answer:
          'Often, yes. For many GI cancers, chemotherapy is given before and/or after surgery. Each plan is decided after reviewing scans and biopsy results, ideally at a multidisciplinary tumour board.',
      },
    ],
  },
  'thyroid-endocrine-tumors': {
    h1: 'Thyroid Surgeon in Cuttack: Thyroid Nodule & Thyroid Cancer Surgery',
    title: 'Thyroid Surgeon in Cuttack | Thyroid Cancer & Nodule Surgery',
    description:
      'Thyroid surgeon in Cuttack for thyroid nodules, swellings and thyroid cancer: FNAC review, thyroidectomy and neck dissection. Serving Bhubaneswar and Odisha.',
    intro:
      'A swelling in the front of the neck, or a thyroid nodule found on ultrasound, is very common, and most are not cancer. A thyroid surgeon helps decide which nodules can simply be watched and which need surgery. Dr. Nitya Nutan Misra performs thyroid surgery in Cuttack, including hemithyroidectomy, total thyroidectomy and neck dissection for thyroid cancer, as well as surgery for parathyroid and adrenal tumours. Medical thyroid problems such as an under- or over-active thyroid are usually managed by an endocrinologist; surgery is needed for suspicious nodules, cancer, or large swellings causing pressure symptoms.',
    signsHeading: 'When a thyroid swelling needs a surgeon',
    signs: [
      'A thyroid nodule reported as suspicious (TI-RADS 4–5) on ultrasound',
      'An FNAC report of Bethesda category III–VI',
      'A swelling that is growing, hard, or fixed',
      'Hoarseness, difficulty swallowing or breathing due to the swelling',
      'Enlarged lymph nodes in the neck along with a thyroid nodule',
    ],
    localNote: LOCAL,
    blogCategory: 'Thyroid Cancer',
    faqs: [
      {
        question: 'Are most thyroid nodules cancerous?',
        answer:
          'No. The large majority of thyroid nodules are benign. An ultrasound scan and, if needed, a fine-needle aspiration (FNAC) test show which nodules need treatment.',
      },
      {
        question: 'Is thyroid cancer curable?',
        answer:
          'The most common types, papillary and follicular thyroid cancer, usually have an excellent outlook with surgery, sometimes followed by radioactive iodine treatment. Rarer types need more intensive treatment.',
      },
      {
        question: 'Will I need tablets after thyroid surgery?',
        answer:
          'After total thyroidectomy, a daily thyroid hormone tablet is needed for life. After removal of one half (hemithyroidectomy), many patients do not need tablets, but thyroid levels are checked.',
      },
      {
        question: 'Will my voice change after thyroidectomy?',
        answer:
          'The nerves that control the voice box run close to the thyroid and are carefully identified and protected during surgery. Temporary hoarseness can occur; permanent voice change is uncommon.',
      },
      {
        question: 'Where can I see a thyroid surgeon in Cuttack?',
        answer:
          'Dr. Nitya Nutan Misra sees patients at Sai Shree Polyclinic, Mangalabag, Cuttack. Bring your ultrasound, FNAC report and thyroid blood tests. Call or WhatsApp +91 94388 44662 to book.',
      },
    ],
  },
  'sarcoma-surgery': {
    h1: 'Sarcoma & Soft Tissue Tumour Surgery in Cuttack',
    title: 'Sarcoma Surgery in Cuttack | Dr. Nitya Nutan Misra',
    description:
      'Limb-salvage and wide-excision surgery for soft tissue and bone sarcoma in Cuttack, Odisha, planned with the tumour board. Consult Dr. Nitya Nutan Misra.',
    intro:
      'Sarcomas are rare cancers of muscle, fat, nerves, blood vessels or bone. Because they are uncommon, they are sometimes removed without proper planning, which makes later treatment harder. Any deep lump, or a lump larger than about 5 cm, should be assessed with imaging and a planned biopsy before surgery. Dr. Nitya Nutan Misra performs wide excision and limb-salvage surgery in Cuttack, planned with radiation and medical oncologists.',
    signsHeading: 'Lumps that need a sarcoma check',
    signs: [
      'A lump larger than about 5 cm (golf-ball size)',
      'A lump that is growing',
      'A lump that lies deep, under the muscle layer',
      'A lump that has come back after being removed',
    ],
    localNote: LOCAL,
    faqs: [
      {
        question: 'Should a lump be removed before a biopsy?',
        answer:
          'For a suspected sarcoma, no. An MRI and a planned core-needle biopsy should come first, so that the final operation removes the tumour with clear margins in one go.',
      },
      {
        question: 'Will I lose my arm or leg?',
        answer:
          'Today most limb sarcomas are treated with limb-salvage surgery, often combined with radiotherapy. Amputation is needed only in a small number of cases.',
      },
    ],
  },
  'multidisciplinary-cancer-treatment': {
    h1: 'Multidisciplinary Cancer Treatment in Cuttack',
    title: 'Multidisciplinary Cancer Care in Cuttack | Dr. N. N. Misra',
    description:
      'Tumour board-planned cancer care in Cuttack combining surgery, chemotherapy, radiation and supportive care. Book a consultation with Dr. Nitya Nutan Misra.',
    intro:
      'Most cancers are best treated by a team. A surgical oncologist, medical oncologist, radiation oncologist, pathologist and radiologist review the case together and agree a single plan. This avoids patients being sent from one doctor to another, and makes sure treatments are given in the right order. Dr. Nitya Nutan Misra plans cancer surgery in Cuttack within this multidisciplinary approach.',
    signsHeading: 'When a team review helps most',
    signs: [
      'A new cancer diagnosis, before any treatment starts',
      'Cancer that may need surgery plus chemotherapy or radiotherapy',
      'A second opinion on a treatment plan you have been given',
      'Cancer that has come back after earlier treatment',
    ],
    localNote: LOCAL,
    blogCategory: 'Patient Guide',
    faqs: [
      {
        question: 'Can I get a second opinion on my cancer treatment plan?',
        answer:
          'Yes. Bring all your reports, scans (CDs or films), biopsy report and slides or blocks. A second opinion is common practice in cancer care and helps you feel confident about the plan.',
      },
      {
        question: 'What is a tumour board?',
        answer:
          'A meeting where specialists from surgery, medical oncology, radiation oncology, pathology and radiology review a patient together and agree the best order and type of treatment.',
      },
    ],
  },
}
