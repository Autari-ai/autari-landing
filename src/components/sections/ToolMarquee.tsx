import { TOOLS } from "@/lib/constants";

export default function ToolMarquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-10">
      <p className="mb-6 text-center text-[11px] uppercase tracking-[0.24em] text-fga/40">
        Works inside the tools you already use
      </p>
      <div className="relative">
        <div className="marquee-track gap-3">
          {row.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="glass shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-fga/70"
            >
              {tool}
            </span>
          ))}
        </div>
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>
    </section>
  );
}
