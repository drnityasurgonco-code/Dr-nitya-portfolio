'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { trackEvent } from '@/components/seo/Analytics'
import { WhatsAppIcon } from '@/components/shared/icons'

interface FormData {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

const initialForm: FormData = { name: '', phone: '', email: '', subject: '', message: '' }

const subjects = [
  'Book Consultation',
  'Breast Cancer Surgery',
  'Head & Neck Cancer',
  'Gastrointestinal Cancer',
  'Thyroid & Endocrine Tumors',
  'Sarcoma Surgery',
  'Second Opinion',
  'General Inquiry',
]

/** Appointment form: validates, fires GA4 generate_lead, then opens a pre-filled WhatsApp message (nothing stored on the site). */
export function AppointmentForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[+\d\s-]{8,15}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address'
    if (!form.subject) e.subject = 'Please select a subject'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await new Promise((res) => setTimeout(res, 600))
    const text = `*New Enquiry from Website*\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Email:* ${form.email || 'N/A'}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}`
    const url = `https://wa.me/${siteConfig.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`
    trackEvent('generate_lead', { method: 'whatsapp_form', form_subject: form.subject })
    window.open(url, '_blank')
    setStatus('success')
    setForm(initialForm)
  }

  const err = (field: keyof FormData) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 flex items-center gap-1 text-[0.8125rem] text-red-600" role="alert">
        <AlertCircle size={13} /> {errors[field]}
      </p>
    ) : null

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <CheckCircle2 size={30} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em] text-ink-900">Redirecting to WhatsApp!</h3>
        <p className="mt-2 max-w-sm text-ink-500">Thank you for reaching out. Please complete the message on WhatsApp to send it to Dr. Misra&apos;s team.</p>
        <button type="button" onClick={() => setStatus('idle')} className="link-arrow mt-6">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Full name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" value={form.name} onChange={onChange} placeholder="Your full name" className="form-input" autoComplete="name" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {err('name')}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Phone number <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+91 XXXXX XXXXX" className="form-input" autoComplete="tel" aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
          {err('phone')}
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="form-label">
          Email address <span className="normal-case tracking-normal text-ink-400">(optional)</span>
        </label>
        <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="your@email.com" className="form-input" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
        {err('email')}
      </div>
      <div className="mt-5">
        <label htmlFor="subject" className="form-label">
          Subject <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <select id="subject" name="subject" value={form.subject} onChange={onChange} className="form-input cursor-pointer" aria-required="true" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'subject-error' : undefined}>
          <option value="">Select a subject…</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {err('subject')}
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="form-label">
          Your message <span className="text-red-600" aria-hidden="true">*</span>
        </label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} placeholder="Briefly describe your condition, concerns, or questions…" rows={5} className="form-input" aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
        {err('message')}
      </div>
      <button type="submit" disabled={status === 'loading'} className="btn-primary btn-lg mt-7 w-full" aria-label="Submit contact form">
        {status === 'loading' ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Opening WhatsApp…
          </>
        ) : (
          <>
            <WhatsAppIcon className="h-4 w-4" /> Send via WhatsApp
          </>
        )}
      </button>
      <p className="mt-4 text-center text-sm text-ink-500">
        Or call directly:{' '}
        <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand-700 hover:text-brand-800">
          {siteConfig.phoneDisplay}
        </a>
      </p>
    </form>
  )
}
