"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import StatChip from "@/components/ui/StatChip";
import VideoLoop from "@/components/ui/VideoLoop";
import { HERO, STATS, bookACallHref } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Core video background */}
      <motion.div
        style={{ y: reduce ? 0 : videoY }}
        className="absolute inset-0 z-0"
      >
        <VideoLoop
          src="/media/hero.mp4"
          poster="/media/hero-human.jpg"
          className="h-full w-full object-cover object-center"
          style={{ filter: "brightness(1.4) saturate(1.05)" }}
        />
        {/* legibility scrims keep the left readable, the scene shows on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/40" />
      </motion.div>
      <div className="aurora" />

      <motion.div
        style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : fade }}
        className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-20 lg:grid-cols-[1.618fr_1fr]"
      >
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>{HERO.label}</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 max-w-2xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-fga text-glow sm:text-6xl lg:text-7xl"
          >
            {HERO.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-fga/65 sm:text-lg"
          >
            {HERO.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={bookACallHref()} className="px-8 py-4 text-sm">
              {HERO.cta}
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              className="px-8 py-4 text-sm"
            >
              {HERO.secondary}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-6 text-xs text-fga/40"
          >
            UK-registered · Done for you · Built around your process
          </motion.p>
        </div>

        {/* Floating stat chips */}
        <div className="relative hidden h-[320px] lg:block">
          <StatChip
            stat={STATS[0]}
            floatDelay={0}
            className="absolute right-8 top-2 w-52"
          />
          <StatChip
            stat={STATS[1]}
            floatDelay={1.2}
            className="absolute right-28 top-32 w-44"
          />
          <StatChip
            stat={STATS[2]}
            floatDelay={2.1}
            className="absolute right-6 top-56 w-52"
          />
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-fga/40">
        Scroll
      </div>
    </section>
  );
}
