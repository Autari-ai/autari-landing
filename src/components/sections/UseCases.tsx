"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBg from "@/components/ui/SectionBg";
import VideoLoop from "@/components/ui/VideoLoop";
import IndexMarker from "@/components/ui/IndexMarker";
import { USE_CASES } from "@/lib/constants";

export default function UseCases() {
  return (
    <section id="what-we-do" className="relative isolate py-24 sm:py-32">
      <SectionBg src="/media/bg-automate.mp4" opacity={0.24} />
      <div className="aurora opacity-40" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <SectionLabel>WHAT WE AUTOMATE</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-5xl">
            The busywork, across your whole business.
          </h2>
          <p className="mt-4 max-w-xl text-fga/60">
            Not one field, not one tool. If your team does it every week by hand,
            it’s a candidate for automation.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => (
            <AnimatedSection key={u.slug} delay={(i % 3) * 0.08}>
              <div className="glass glass-hover group h-full overflow-hidden rounded-3xl">
                <div className="relative h-44 overflow-hidden">
                  <VideoLoop
                    src={`/media/uc-${u.slug}.mp4`}
                    poster={`/media/uc-${u.slug}.jpg`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/20 to-transparent" />
                </div>
                <div className="p-6">
                  <IndexMarker n={i + 1} total={USE_CASES.length} className="mb-5" />
                  <h3 className="font-display text-xl font-bold text-fga">
                    {u.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fga/60">
                    {u.blurb}
                  </p>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-fga/35">
                    {u.tools}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
