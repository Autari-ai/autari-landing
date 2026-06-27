export default function Footer() {
  return (
    <footer className="border-t border-fog bg-mist py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-spark animate-pulseSpark" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-spark" />
          </span>
          <span className="font-display text-lg font-bold lowercase text-ink">
            autari
          </span>
        </div>
        <p className="text-sm text-ink/50">Hire work, not headcount.</p>
        <p className="text-xs text-ink/40">
          noor@autari.com · Registered in England &amp; Wales
        </p>
      </div>
    </footer>
  )
}
