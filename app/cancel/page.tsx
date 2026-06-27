import Link from 'next/link'

export default function Cancel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-ink">No worries — nothing was charged.</h1>
      <p className="mt-3 max-w-md text-ink/60">
        If something held you back, I&rsquo;d genuinely love to hear it — reply to
        any email or reach me at noor@autari.com. That feedback shapes the build.
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
