export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fog bg-white px-4 py-1.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-spark animate-pulseSpark" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-spark" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-pine">
            AI Employees · Always on
          </span>
        </div>

        <h1 className="text-5xl font-bold leading-[1.05] text-ink sm:text-6xl">
          Hire work,
          <br />
          not headcount.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-ink/70">
          An AI employee for the role you need. It works inside your tools, does
          the job end-to-end, and only comes to you when it&rsquo;s genuinely
          stuck — like a junior teammate, at a fraction of the cost.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#roles"
            className="rounded-xl bg-pine px-7 py-3.5 text-base font-semibold text-white transition hover:bg-pine/90"
          >
            Reserve your AI employee →
          </a>
          <a
            href="#how"
            className="px-4 py-3.5 text-base font-semibold text-ink/70 transition hover:text-ink"
          >
            See how it works
          </a>
        </div>

        <p className="mt-5 text-sm text-ink/45">
          Early access · Fully refundable deposit · You shape the build
        </p>
      </div>
    </section>
  )
}
