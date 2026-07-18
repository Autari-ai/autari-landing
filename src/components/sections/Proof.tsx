"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Counter = { value: number; suffix?: string; prefix?: string; label: string };

const COUNTERS: Counter[] = [
  { value: 40, suffix: "+", label: "hours a month handed back" },
  { value: 24, suffix: "/7", label: "runs without you" },
  { value: 3, suffix: " wk", label: "typical time to live" },
  { value: 0, label: "manual steps left for you" },
];

function CountUp({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (to === 0) { setN(0); return; }
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function Proof() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {COUNTERS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-fga sm:text-5xl">
                <CountUp to={c.value} suffix={c.suffix} prefix={c.prefix} />
              </div>
              <div className="mt-2 text-xs text-fga/55">{c.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
