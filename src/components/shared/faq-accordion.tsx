/** Numbered FAQ accordion on native <details>: answers stay in the HTML (matches FAQPage schema), no JS needed. */
export function FaqAccordion({ faqs, openFirst = true }: { faqs: { question: string; answer: string }[]; openFirst?: boolean }) {
  return (
    <div className="border-t border-line-strong">
      {faqs.map((f, i) => (
        <details key={f.question} className="group border-b border-line-strong" open={openFirst && i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="flex gap-4 font-display text-lg font-semibold tracking-[-0.025em] text-ink-900 md:text-xl">
              <span className="mt-1.5 font-mono text-[0.6875rem] font-normal tracking-normal text-ink-400">{String(i + 1).padStart(2, '0')}</span>
              {f.question}
            </h3>
            <span className="mt-1 text-2xl leading-none text-brand-600 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="pb-6 pl-9 leading-relaxed text-ink-600">{f.answer}</p>
        </details>
      ))}
    </div>
  )
}
