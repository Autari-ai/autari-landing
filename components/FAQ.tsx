const faqs = [
  {
    q: 'Is it built yet?',
    a: 'It’s in early access. The role you reserve launches soon. We’re transparent: you’re a founding customer shaping it, and your deposit is fully refundable.',
  },
  {
    q: 'Is my data safe?',
    a: 'Each AI employee runs isolated, with access only to what you explicitly grant — nothing more.',
  },
  {
    q: 'How is this different from Copilot?',
    a: 'Copilot is an assistant you have to drive. An autari employee owns a task end-to-end and only comes to you when it’s blocked.',
  },
  {
    q: 'What if it gets something wrong?',
    a: 'Early on, a human reviews its output. It improves as it learns your standards.',
  },
  {
    q: 'Can I cancel?',
    a: 'Your deposit is fully refundable before launch. After launch it’s monthly — cancel anytime.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-fog/50 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">
          Questions
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-fog bg-white p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
                <span className="flex items-center justify-between">
                  {f.q}
                  <span className="text-pine transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
