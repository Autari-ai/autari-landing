'use client'

import { useState } from 'react'
import { roles, type Role, type Question } from '@/lib/roles'

export default function RolesSection() {
  const [active, setActive] = useState<Role | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [posted, setPosted] = useState(false)

  function open(r: Role) {
    setActive(r)
    setAnswers({})
    setEmail('')
    setErr('')
    setPosted(false)
  }
  function close() {
    setActive(null)
  }
  function setAns(id: string, val: string) {
    setAnswers((a) => ({ ...a, [id]: val }))
  }

  async function captureLead(intent: string) {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: active?.slug, intent, email, answers }),
      })
    } catch {
      /* non-blocking */
    }
  }

  async function reserve() {
    if (!active) return
    if (!email) {
      setErr('Please add your email so we can reach you.')
      return
    }
    setLoading(true)
    setErr('')
    await captureLead('reserve')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ roleSlug: active.slug, email, answers }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
        return
      }
      setErr(data.error || 'Could not start checkout.')
    } catch {
      setErr('Could not start checkout. Check your connection.')
    }
    setLoading(false)
  }

  async function keepPosted() {
    await captureLead('keep_posted')
    setPosted(true)
  }

  return (
    <section id="roles" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-ink sm:text-4xl">
          Pick the role you need
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink/60">
          Each AI employee is built for <em>your</em> firm — your tools, your
          standards, your way of working.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {roles.map((r) => (
          <button
            key={r.slug}
            onClick={() => open(r)}
            className={`group relative rounded-2xl border bg-white p-6 text-left transition hover:-translate-y-0.5 hover:shadow-lg ${
              r.featured ? 'border-pine ring-1 ring-pine/20' : 'border-fog'
            }`}
          >
            {r.featured && (
              <span className="absolute right-5 top-5 rounded-full bg-spark/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-pine">
                Most requested
              </span>
            )}
            <div className="text-3xl">{r.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-ink">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {r.tagline}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-pine">
              Reserve this role →
            </span>
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-ink/40">
        Prices shown at checkout are example founding rates — set per agreement.
      </p>

      {active && (
        <Modal onClose={close} title={active.title}>
          {posted ? (
            <div className="py-8 text-center">
              <div className="text-3xl">✅</div>
              <p className="mt-3 font-semibold text-ink">You&rsquo;re on the list.</p>
              <p className="mt-1 text-sm text-ink/60">
                We&rsquo;ll be in touch as it launches.
              </p>
              <button
                onClick={close}
                className="mt-6 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6">
                {active.survey.map((q) => (
                  <QuestionField
                    key={q.id}
                    q={q}
                    value={answers[q.id]}
                    onChange={(v) => setAns(q.id, v)}
                  />
                ))}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-ink">
                    Your email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@firm.com"
                    className="w-full rounded-xl border border-fog bg-mist px-4 py-3 text-ink outline-none focus:border-pine"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-mist p-4 text-sm text-ink/70">
                Reserve a founding spot for{' '}
                <strong className="text-ink">£{active.depositGBP}</strong> —
                fully refundable. Founder rate{' '}
                <strong className="text-ink">£{active.monthlyGBP}/mo</strong> at
                launch <span className="text-ink/40">(example)</span>.
              </div>

              {err && <p className="mt-3 text-sm text-red-600">{err}</p>}

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={reserve}
                  disabled={loading}
                  className="flex-1 rounded-xl bg-pine px-6 py-3.5 font-semibold text-white transition hover:bg-pine/90 disabled:opacity-60"
                >
                  {loading ? 'Starting…' : `Reserve my spot — £${active.depositGBP} →`}
                </button>
                <button
                  onClick={keepPosted}
                  className="rounded-xl border border-fog px-6 py-3.5 font-semibold text-ink/70 transition hover:text-ink"
                >
                  Not yet, keep me posted
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-ink/40">
                autari is in early access — launching soon. Deposit refundable
                anytime before launch.
              </p>
            </>
          )}
        </Modal>
      )}
    </section>
  )
}

function QuestionField({
  q,
  value,
  onChange,
}: {
  q: Question
  value?: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink">{q.label}</p>
      {q.type === 'scale' && (
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <Chip
              key={n}
              active={value === String(n)}
              onClick={() => onChange(String(n))}
            >
              {n}
            </Chip>
          ))}
        </div>
      )}
      {q.type === 'yesno' && (
        <div className="flex gap-2">
          {['Yes', 'No'].map((o) => (
            <Chip key={o} active={value === o} onClick={() => onChange(o)}>
              {o}
            </Chip>
          ))}
        </div>
      )}
      {q.type === 'single' && (
        <div className="flex flex-wrap gap-2">
          {q.options!.map((o) => (
            <Chip key={o} active={value === o} onClick={() => onChange(o)}>
              {o}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-3.5 py-2 text-sm transition ${
        active
          ? 'border-pine bg-pine text-white'
          : 'border-fog bg-white text-ink/70 hover:border-pine/40'
      }`}
    >
      {children}
    </button>
  )
}

function Modal({
  title,
  onClose,
  children,
}: {
  title: string
  onClose: () => void
  children: React.ReactNode
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/40 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg animate-fadeIn rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-ink">{title}</h3>
          <button
            onClick={onClose}
            className="text-2xl leading-none text-ink/40 hover:text-ink"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
