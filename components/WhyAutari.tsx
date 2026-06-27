const points = [
  {
    title: 'Knows your standards',
    body: 'Built around your firm’s rules, not a generic one-size tool.',
  },
  {
    title: 'Always on',
    body: 'Works while you sleep and picks up tasks the moment they land.',
  },
  {
    title: 'Asks when stuck',
    body: 'Escalates to the right person instead of guessing.',
  },
  {
    title: 'A fraction of a salary',
    body: 'Real output, without the cost and overhead of headcount.',
  },
]

export default function WhyAutari() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
        Not an assistant you have to drive. An employee that owns the job.
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.title} className="rounded-2xl border border-fog bg-white p-6">
            <h3 className="text-lg font-bold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
