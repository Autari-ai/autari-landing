const steps = [
  {
    n: '1',
    title: 'Reserve',
    body: 'Pick the role and put down a small, fully-refundable deposit. You become a founding customer.',
  },
  {
    n: '2',
    title: 'We build it to your firm',
    body: 'Your standards, your tools (Microsoft Teams + Jira to start), your rules. You help shape it.',
  },
  {
    n: '3',
    title: 'It starts working',
    body: 'It does the job, posts its own updates, and @mentions the right person only when it is blocked.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-ink py-20 text-mist">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Built to fit, working in weeks
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-spark font-display text-lg font-bold text-ink">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/70">
                {s.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-2xl rounded-xl border border-white/10 bg-white/5 p-5 text-center text-sm leading-relaxed text-mist/80">
          autari is in early access. The role you reserve is launching soon, and
          your deposit is <strong className="text-white">100% refundable</strong>{' '}
          if we don&rsquo;t deliver. You&rsquo;re funding and shaping something
          built for you — not buying a finished box.
        </p>
      </div>
    </section>
  )
}
