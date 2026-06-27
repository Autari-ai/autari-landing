import Link from 'next/link'

export default function Success() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="text-4xl">🎉</div>
      <h1 className="mt-5 text-3xl font-bold text-ink">You&rsquo;re a founding customer.</h1>
      <p className="mt-3 max-w-md text-ink/60">
        Your spot is reserved. I&rsquo;ll be in touch within 48 hours to start
        shaping your AI employee. Your deposit is fully refundable before launch.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-pine px-6 py-3 font-semibold text-white"
      >
        Back to autari
      </Link>
    </main>
  )
}
