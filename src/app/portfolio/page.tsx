"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BrandLogo from "@/components/ui/Logo";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { bookACallHref } from "@/lib/constants";

/* ──────────────────────────────────────────────────────────────────── */
/* HaircutPipelineSVG (keep as-is)                                     */
/* ──────────────────────────────────────────────────────────────────── */
function HaircutPipelineSVG() {
  return (
    <svg viewBox="0 0 700 220" width="100%" style={{ display: "block" }} aria-label="Haircut detection illustration">
      <defs>
        <linearGradient id="hc-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0E7C66" />
          <stop offset="100%" stopColor="#19D3A2" />
        </linearGradient>
        <filter id="hc-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="hc-soft" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g transform="translate(42,30) rotate(-4)">
        <rect x="0" y="0" width="110" height="130" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        <ellipse cx="55" cy="58" rx="28" ry="33" fill="none" stroke="rgba(234,242,239,0.5)" strokeWidth="1.5" strokeDasharray="3 2" />
        <ellipse cx="44" cy="50" rx="4" ry="2.5" fill="rgba(234,242,239,0.35)" />
        <ellipse cx="66" cy="50" rx="4" ry="2.5" fill="rgba(234,242,239,0.35)" />
        <path d="M55 55 Q52 64 50 67 Q55 70 60 67 Q58 64 55 55" fill="none" stroke="rgba(234,242,239,0.3)" strokeWidth="1" />
        <path d="M48 72 Q55 77 62 72" fill="none" stroke="rgba(234,242,239,0.4)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M27 42 Q30 20 55 18 Q80 20 83 42" fill="none" stroke="rgba(234,242,239,0.45)" strokeWidth="2" strokeLinecap="round" />
        <text x="55" y="118" textAnchor="middle" fontSize="9" fill="rgba(234,242,239,0.45)" fontFamily="system-ui,sans-serif">your photo</text>
      </g>
      <path d="M162 110 C190 110 200 110 218 110" fill="none" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="218,106 226,110 218,114" fill="rgba(25,211,162,0.5)" />
      <g transform="translate(280,110)">
        <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(25,211,162,0.12)" strokeWidth="18" filter="url(#hc-glow)" />
        <circle cx="0" cy="0" r="40" fill="rgba(14,124,102,0.15)" stroke="rgba(25,211,162,0.35)" strokeWidth="1.5" />
        {[-22,-11,0,11,22].map((y, i) => (<line key={i} x1="-28" y1={y} x2="28" y2={y} stroke="rgba(25,211,162,0.2)" strokeWidth="1" />))}
        {[[0,-24],[16,-14],[-16,-14],[0,0],[12,10],[-12,10],[0,22],[-20,4],[20,4]].map(([x, y], i) => (<circle key={i} cx={x} cy={y} r="2.2" fill="#19D3A2" opacity={0.7} />))}
        <g stroke="rgba(25,211,162,0.2)" strokeWidth="0.8" fill="none">
          <line x1="0" y1="-24" x2="16" y2="-14" /><line x1="0" y1="-24" x2="-16" y2="-14" />
          <line x1="16" y1="-14" x2="-16" y2="-14" /><line x1="16" y1="-14" x2="0" y2="0" />
          <line x1="-16" y1="-14" x2="0" y2="0" /><line x1="0" y1="0" x2="12" y2="10" />
          <line x1="0" y1="0" x2="-12" y2="10" /><line x1="12" y1="10" x2="-12" y2="10" />
          <line x1="12" y1="10" x2="0" y2="22" /><line x1="-12" y1="10" x2="0" y2="22" />
          <line x1="-20" y1="4" x2="-12" y2="10" /><line x1="20" y1="4" x2="12" y2="10" />
        </g>
        <text x="0" y="60" textAnchor="middle" fontSize="8.5" fill="rgba(234,242,239,0.5)" fontFamily="system-ui,sans-serif">AI reading face shape</text>
      </g>
      <path d="M334 110 C362 110 372 110 388 110" fill="none" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="388,106 396,110 388,114" fill="rgba(25,211,162,0.5)" />
      <g transform="translate(405,28)">
        {[{rank:"#1",style:"Textured crop",score:"98%"},{rank:"#2",style:"Undercut fade",score:"91%"},{rank:"#3",style:"Classic side part",score:"84%"}].map((r,i)=>(
          <g key={i} transform={`translate(0,${i*48})`}>
            <rect x="0" y="0" width="230" height="38" rx="8" fill={i===0?"url(#hc-g)":"rgba(14,124,102,0.1)"} stroke={i===0?"none":"rgba(25,211,162,0.2)"} strokeWidth="1" filter={i===0?"url(#hc-soft)":undefined}/>
            <text x="12" y="15" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif" fill={i===0?"#0B0E12":"rgba(25,211,162,0.8)"}>{r.rank}</text>
            <text x="32" y="15" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif" fill={i===0?"#0B0E12":"rgba(234,242,239,0.8)"}>{r.style}</text>
            <rect x="12" y="22" width="180" height="5" rx="3" fill="rgba(255,255,255,0.1)"/>
            <rect x="12" y="22" width={180*parseInt(r.score)/100} height="5" rx="3" fill={i===0?"rgba(11,14,18,0.4)":"rgba(25,211,162,0.5)"}/>
            <text x="200" y="28" fontSize="8" fontFamily="system-ui,sans-serif" fill={i===0?"rgba(11,14,18,0.6)":"rgba(234,242,239,0.45)"}>{r.score}</text>
          </g>
        ))}
        <text x="115" y="164" textAnchor="middle" fontSize="8.5" fill="rgba(234,242,239,0.4)" fontFamily="system-ui,sans-serif">ranked by face-shape match</text>
      </g>
      {[[395,22],[638,18],[640,140],[392,145],[515,8],[515,175]].map(([x,y],i)=>(
        <g key={i}>
          <line x1={x} y1={y-5} x2={x} y2={y+5} stroke="#19D3A2" strokeWidth="1.2" opacity="0.6"/>
          <line x1={x-5} y1={y} x2={x+5} y2={y} stroke="#19D3A2" strokeWidth="1.2" opacity="0.6"/>
          <line x1={x-3} y1={y-3} x2={x+3} y2={y+3} stroke="#19D3A2" strokeWidth="0.8" opacity="0.35"/>
          <line x1={x+3} y1={y-3} x2={x-3} y2={y+3} stroke="#19D3A2" strokeWidth="0.8" opacity="0.35"/>
        </g>
      ))}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/* Carousel                                                             */
/* ──────────────────────────────────────────────────────────────────── */
function Carousel({ images }: { images: { src: string; caption: string }[] }) {
  const [idx, setIdx] = React.useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-ink-800 aspect-video">
      {images.map((img, i) => (
        <div key={img.src} className={`absolute inset-0 transition-opacity duration-300 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <Image src={img.src} alt={img.caption} fill className="object-cover object-top" sizes="100vw" />
        </div>
      ))}
      <button type="button" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-ink/70 backdrop-blur-sm flex items-center justify-center text-fga hover:bg-ink transition-colors">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button type="button" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-ink/70 backdrop-blur-sm flex items-center justify-center text-fga hover:bg-ink transition-colors">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
        {images.map((_, i) => (
          <button type="button" key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all duration-200 ${i === idx ? "w-5 bg-spark" : "w-1.5 bg-white/30"}`} />
        ))}
      </div>
      {images[idx].caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-9 pt-8 pointer-events-none">
          <p className="text-xs text-white font-medium drop-shadow-sm">{images[idx].caption}</p>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/* Design system primitives                                             */
/* ──────────────────────────────────────────────────────────────────── */

/** Backslash-delimited metadata label: `Label\Value` */
function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span className="flex items-baseline gap-1 whitespace-nowrap">
      <span className="text-[11px] uppercase tracking-[0.15em] text-fga/40">{label}</span>
      <span className="text-[11px] text-fga/30">\</span>
      <span className="text-[11px] font-semibold text-fga/80">{value}</span>
    </span>
  );
}

/** Horizontal metadata bar: 4 Meta items separated by dots */
function MetaBar({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
      {items.map((m) => <Meta key={m.label} {...m} />)}
    </div>
  );
}

/** 3-column editorial prose */
function ThreeCol({ cols }: { cols: { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {cols.map((c) => (
        <div key={c.title}>
          <p className="text-[11px] uppercase tracking-[0.15em] text-fga/40 mb-3">{c.title}</p>
          <p className="text-sm leading-relaxed text-fga/65">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

/** Numbered section intro */
function SectionIntro({ number, title, italic, subtitle, accent }: {
  number: string; title: string; italic: string; subtitle: string; accent: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-8 mb-20">
      <div className="shrink-0">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center font-display text-xl font-bold border-2"
          style={{ borderColor: accent, color: accent }}
        >
          {number}
        </div>
      </div>
      <div>
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-[-0.04em] text-fga">
          {title} <em className="not-italic" style={{ color: accent }}>{italic}</em>
        </h2>
        <p className="mt-4 text-base text-fga/50 max-w-xl">{subtitle}</p>
      </div>
    </div>
  );
}

/** Full-width editorial project entry */
function ProjectEntry({
  name,
  hook,
  meta,
  image,
  carouselImages,
  haircutSvg,
  noImage,
  cols,
  accent = "#19D3A2",
}: {
  name: string;
  hook: string;
  meta: { label: string; value: string }[];
  image?: string;
  carouselImages?: { src: string; caption: string }[];
  haircutSvg?: boolean;
  noImage?: boolean;
  cols: { title: string; body: string }[];
  accent?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 border-t border-white/8 first:border-0 first:pt-0"
    >
      {/* Name + hook */}
      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fga leading-tight">
        {name}
      </h3>
      <p className="mt-3 text-lg sm:text-xl text-fga/55 max-w-3xl leading-relaxed">{hook}</p>

      {/* Metadata */}
      <MetaBar items={meta} />

      {/* Image area */}
      {carouselImages && carouselImages.length > 0 && (
        <div className="mt-8">
          <Carousel images={carouselImages} />
        </div>
      )}
      {!carouselImages && image && (
        <div className="relative mt-8 w-full aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover object-top" sizes="100vw" />
        </div>
      )}
      {haircutSvg && (
        <div className="mt-8 bg-ink-800 rounded-xl p-6">
          <HaircutPipelineSVG />
        </div>
      )}
      {noImage && (
        <div className="mt-8 rounded-xl bg-ink-800 h-48 flex items-center justify-center">
          <span className="font-display text-2xl font-bold text-fga/20">{name}</span>
        </div>
      )}

      {/* 3-col prose */}
      <ThreeCol cols={cols} />
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────────── */
/* Page                                                                 */
/* ──────────────────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 glass-strong">
          <a href="/" aria-label="autari home" className="flex items-center pl-1">
            <BrandLogo markClassName="h-7 w-7" />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="/" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">autari.co.uk</a>
            <a href="/#what-we-do" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">What we do</a>
            <a href="/#how-it-works" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">How it works</a>
          </div>
          <Button href={bookACallHref()} className="px-5 py-2.5 text-[11px]">Book a call</Button>
        </div>
      </nav>

      <main className="overflow-x-hidden">

        {/* ════════════════════════════════════════════════════════════
            HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="pt-40 pb-24 mx-auto max-w-6xl px-6">
          <div className="aurora" />

          {/* Intro */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-spark mb-6">Selected work</p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.92] tracking-[-0.04em] text-fga max-w-4xl">
              Work that moves businesses <em className="not-italic text-spark">forward.</em>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-fga/55 max-w-2xl leading-relaxed">
              Automation systems, AI platforms, and data tools — built for teams that are done doing things by hand.
            </p>
          </motion.div>

          {/* Hero projects */}
          <div className="mt-24 flex flex-col gap-0">
            {[
              {
                num: "01",
                name: "Telecom Portal Automation",
                hook: "2.4 million line checks. 99.7% success rate. Zero manual work.",
                image: "/media/portfolio/et-system/dashboard.png",
                meta: [
                  { label: "What", value: "Telecom Automation" },
                  { label: "Scale", value: "2.4M operations" },
                  { label: "How", value: "Handles millions without slowing down" },
                  { label: "Result", value: "99.7% success" },
                ],
              },
              {
                num: "02",
                name: "Enterprise AI Agent",
                hook: "Ask your data a question. Get the answer in the chat — with charts.",
                image: "/media/portfolio/jagent/jagent-dashboard-chat.png",
                meta: [
                  { label: "What", value: "AI Agent Platform" },
                  { label: "For", value: "Enterprise teams" },
                  { label: "When", value: "2024–25" },
                  { label: "Result", value: "Question in. Answer out." },
                ],
              },
              {
                num: "03",
                name: "Field Service Automation",
                hook: "Every job, invoice, and purchase order — done automatically.",
                image: "/media/portfolio/bigchange-xero/bigchange-scheduling.png",
                meta: [
                  { label: "What", value: "Operations Automation" },
                  { label: "Client", value: "UK Field Service Co" },
                  { label: "When", value: "2025" },
                  { label: "Result", value: "End-to-end billing automated" },
                ],
              },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 * i }}
                className="py-16 border-t border-white/8 first:border-0 first:pt-0"
              >
                <div className="flex items-start gap-6 mb-6">
                  <span className="font-display text-lg font-bold text-fga/25 mt-1">{p.num}</span>
                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fga leading-tight">{p.name}</h2>
                    <p className="mt-2 text-lg text-fga/55 max-w-2xl">{p.hook}</p>
                    <MetaBar items={p.meta} />
                  </div>
                </div>
                <div className="relative w-full aspect-video sm:aspect-[21/9] rounded-xl overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover object-top" sizes="100vw" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            01 — AUTOMATION & OPERATIONS
        ════════════════════════════════════════════════════════════ */}
        <section className="py-24 border-t-2 border-[#19D3A2]/20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              number="01"
              title="Automation &"
              italic="Operations"
              subtitle="When work happens by hand, it's slow. These systems make it automatic."
              accent="#19D3A2"
            />

            <ProjectEntry
              name="Field Service Automation"
              hook="Jobs get booked. Work gets done. Invoices go out. Nobody types anything."
              meta={[
                { label: "What", value: "Operations Automation" },
                { label: "Client", value: "Hybrid Solutions Group, UK" },
                { label: "Connected", value: "Job management + accounting" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/bigchange-xero/bigchange-scheduling.png", caption: "Job scheduling — every engineer and job in one view" },
                { src: "/media/portfolio/bigchange-xero/bigchange-invoices.png", caption: "Invoices raised automatically when the job is complete" },
                { src: "/media/portfolio/bigchange-xero/xero-dashboard.jpg", caption: "The books update themselves as jobs flow through" },
              ]}
              cols={[
                { title: "What it does", body: "Every job flows automatically from booking through quoting, invoicing, and purchase orders — with the accounts updated the moment anything changes." },
                { title: "Who it helped", body: "A UK field service company managing dozens of engineers and hundreds of jobs a month. The back-office was drowning in manual work." },
                { title: "What changed", body: "Billing happens the moment a job is marked complete. Purchase orders raise themselves. The office team stopped chasing paperwork." },
              ]}
            />

            <ProjectEntry
              name="Telecom Portal Automation"
              hook="2.4 million line checks. One system. No one sitting at a screen."
              meta={[
                { label: "What", value: "Telecom Automation" },
                { label: "Client", value: "Egyptian internet provider" },
                { label: "Scale", value: "2.4M operations" },
                { label: "Success", value: "99.7%" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/et-system/dashboard.png", caption: "Dashboard: 2.4M numbers processed at 99.7% success rate" },
                { src: "/media/portfolio/et-system/modules.png", caption: "Every task type tracked — successes and errors, live" },
                { src: "/media/portfolio/et-system/scrape.png", caption: "Queue numbers and watch results arrive live" },
              ]}
              cols={[
                { title: "What it does", body: "Checks whether service is available on a line and files the lead — for a major Egyptian internet provider, at a scale and speed no human team could match." },
                { title: "Who it helped", body: "A telecom operations team manually running thousands of searches a day, copying results, and filing leads one by one." },
                { title: "What changed", body: "2.4 million operations processed at 99.7% success. Multiple teams each run their own workspace. Results export to Excel whenever they're ready." },
              ]}
            />

            <ProjectEntry
              name="Gaming Cafe Platform"
              hook="Walk in, pick a console, start playing. The system handles everything else."
              meta={[
                { label: "What", value: "Business Management" },
                { label: "Language", value: "Arabic" },
                { label: "Platform", value: "Works in any browser" },
                { label: "Year", value: "2023" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/ps-platform/ps-012448.png", caption: "Room booking — live session timers, single and multiplayer modes" },
                { src: "/media/portfolio/ps-platform/ps-012504.png", caption: "Device inventory — PS4 and PS5 with per-room pricing" },
                { src: "/media/portfolio/ps-platform/ps-012539.png", caption: "Daily financial reports — one button to close the day" },
              ]}
              cols={[
                { title: "What it does", body: "Manages a PlayStation gaming cafe from a single screen — room booking, live session timers, a cafe menu, stock levels, invoicing, and daily financial reports." },
                { title: "Who it helped", body: "A gaming cafe operator tracking everything manually — writing down session times, calculating bills, managing stock with spreadsheets." },
                { title: "What changed", body: "Every session is tracked live with a countdown. Food and drinks add to the tab. The invoice generates itself. Daily reports close with one button." },
              ]}
            />

            <ProjectEntry
              name="Five Platforms, One Flow"
              hook="Data that used to travel by hand now moves on its own — across accounting, job tracking, memberships, learning, and payroll."
              meta={[
                { label: "What", value: "Connected Systems" },
                { label: "Platforms", value: "Five, working as one" },
                { label: "For", value: "UK + international clients" },
                { label: "Year", value: "2021–present" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/api-app.gif", caption: "Platform Sync — five business platforms connected and updating in real time" },
                { src: "/media/portfolio/api-integrations/automation-trigger-action.jpg", caption: "Every integration follows the same logic: something happens in one system, something happens automatically in another" },
              ]}
              cols={[
                { title: "What it does", body: "Connects five business platforms so data moves on its own — no copy-paste, no re-entry, no waiting for things to catch up." },
                { title: "Who it helped", body: "Businesses running multiple tools that didn't talk to each other. Every update meant opening another tab and doing the same thing twice." },
                { title: "What changed", body: "Invoices land in the accounts the moment they're raised anywhere else. Member records update everywhere at once. Reports pull from live numbers." },
              ]}
            />

            <ProjectEntry
              name="Billing on Autopilot"
              hook="No more chasing invoices. No more raising purchase orders by hand. Jobs complete, billing follows."
              meta={[
                { label: "What", value: "Billing Automation" },
                { label: "Connected", value: "Job management + accounting" },
                { label: "Client", value: "UK businesses" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/invoice-app.gif", caption: "Jobs, invoices, purchase orders, and accounts — the full billing cycle running automatically" },
                { src: "/media/portfolio/bigchange-xero/bigchange-invoices.png", caption: "Invoice raised the moment a job is marked complete" },
              ]}
              cols={[
                { title: "What it does", body: "The moment a job is marked done, an invoice raises in the accounting system. Purchase orders generate from approved quotes. Nothing needs a human to push it through." },
                { title: "Who it helped", body: "Operations and finance teams spending hours each week manually matching jobs to bills." },
                { title: "What changed", body: "Billing backlog cleared. Late invoices stopped. Finance team redirected to actual analysis." },
              ]}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            02 — AI AGENTS & INTELLIGENCE
        ════════════════════════════════════════════════════════════ */}
        <section className="py-24 border-t-2 border-[#7C5CFF]/20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              number="02"
              title="AI Agents &"
              italic="Intelligence"
              subtitle="Systems that think, remember, and get things done — without being told twice."
              accent="#7C5CFF"
            />

            <ProjectEntry
              name="Enterprise AI Agent"
              hook="Ask it anything about your business. It finds the answer and reports back — charts included."
              meta={[
                { label: "What", value: "AI Data Assistant" },
                { label: "For", value: "Enterprise teams" },
                { label: "Data", value: "The same numbers your team sees every day" },
                { label: "Year", value: "2024–25" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/jagent-app.gif", caption: "Jagent in action — ask a question, watch the answer arrive with charts" },
                { src: "/media/portfolio/jagent/jagent-dashboard-chat.png", caption: "Embedded in a live analytics dashboard — ask questions while looking at the data" },
                { src: "/media/portfolio/jagent/jagent-charts.png", caption: "Plain English in, charts out — the agent picks the right visualisation" },
                { src: "/media/portfolio/jagent/jagent-tables.png", caption: "Every answer shows exactly where the numbers came from — no guessing" },
              ]}
              cols={[
                { title: "What it does", body: "A conversational AI that talks directly to your database. Ask a question in plain English — it finds the right records, pulls the answer, and adds charts when they help." },
                { title: "Who it helped", body: "Teams drowning in data they couldn't get answers from — waiting on a developer every time they wanted a business insight." },
                { title: "What changed", body: "Managers get answers in seconds. No technical skills needed. No tickets raised. It remembers what you've asked before and builds on it." },
              ]}
              accent="#7C5CFF"
            />

            <ProjectEntry
              name="Ask in Plain English"
              hook="You describe what you want. It figures out how to get it. Results arrive in the chat."
              meta={[
                { label: "What", value: "AI Data Insights" },
                { label: "How", value: "Talks directly to your database — no exports" },
                { label: "Data", value: "Always current — never a stale export" },
                { label: "Year", value: "2024–25" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mcp-query/nlq-demo.gif", caption: "Type a question, watch the answer arrive" },
                { src: "/media/portfolio/mcp-query/pgadmin-dashboard.webp", caption: "The system watches itself — every question tracked live as it runs" },
              ]}
              cols={[
                { title: "What it does", body: "It learns how your data is organised, works out exactly what to look up, checks the real numbers, and reports back in the chat." },
                { title: "Who it helped", body: "Any business where the answers exist somewhere in the data — but nobody can get at them without a developer." },
                { title: "What changed", body: "Business questions get answered without waiting on anyone. Every answer shows exactly which data it used." },
              ]}
              accent="#7C5CFF"
            />

            <ProjectEntry
              name="AI Employee Orchestration"
              hook="Give each AI a job title. They work together in channels, pick up tasks, and report back."
              meta={[
                { label: "What", value: "AI Team Builder" },
                { label: "How", value: "Each agent has a role and a job" },
                { label: "For", value: "Automation teams" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/auronexus-app.gif", caption: "Auronexus — AI agents working together in channels, each with their own role" },
                { src: "/media/portfolio/auronexus/auronexus-agents-chat.png", caption: "Real conversation between Claude, Codex, and Gemini agents debugging a login issue" },
              ]}
              cols={[
                { title: "What it does", body: "A platform for building teams of AI agents — each with a role, a set of skills, and a channel to work in. They collaborate, complete tasks, and escalate when they need a human." },
                { title: "Who it helped", body: "Teams looking to run AI at scale without wiring up agents from scratch every time." },
                { title: "What changed", body: "New agent 'employees' can be created and deployed in minutes. Tasks that used to require constant human prompting now run autonomously." },
              ]}
              accent="#7C5CFF"
            />

            <ProjectEntry
              name="AI That Asks Before It Acts"
              hook="It drafts the work. You approve it on Telegram. Nothing lands without your say-so."
              meta={[
                { label: "What", value: "AI with Human Approval" },
                { label: "Review via", value: "Telegram" },
                { label: "Triggered by", value: "The work you're already doing" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/gigcopilot-app.gif", caption: "Gig Copilot — AI drafts, you approve on Telegram before anything lands" },
                { src: "/media/portfolio/gig-copilot/telegram-inline-keyboard.png", caption: "Inline Telegram buttons: Approve, Revise, or Reject in one tap" },
              ]}
              cols={[
                { title: "What it does", body: "An AI assistant that watches your work as it happens, drafts case studies and task summaries, then sends them to your Telegram for review — with Approve, Revise, and Reject buttons." },
                { title: "Who it helped", body: "Freelancers and founders who want AI doing the drafting but still want to stay in control." },
                { title: "What changed", body: "Portfolio case studies write themselves. Task outputs get captured automatically. Nothing is published without a deliberate human approval." },
              ]}
              accent="#7C5CFF"
            />

            <ProjectEntry
              name="AI Haircut Advisor"
              hook="Take a selfie. Get a ranked list of the cuts that actually suit your face shape — offline, instant, private."
              meta={[
                { label: "What", value: "AI Photo Analysis" },
                { label: "How", value: "Trained on thousands of real faces" },
                { label: "Platform", value: "Desktop (offline)" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/haircut-app.gif", caption: "AI face shape analysis — landmarks mapped, geometry measured, haircuts ranked" },
              ]}
              cols={[
                { title: "What it does", body: "A desktop app that studies your face shape, takes real measurements, and ranks haircut styles by how well they'd suit you — with celebrity examples so you can see each cut on a real face." },
                { title: "Who it helped", body: "Anyone tired of guessing at a haircut. Runs entirely on your laptop, no internet needed, no data shared." },
                { title: "What changed", body: "Real hair advice without a subscription, an account, or an internet connection. Download, run, find out." },
              ]}
              accent="#7C5CFF"
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            03 — DATA & ANALYTICS
        ════════════════════════════════════════════════════════════ */}
        <section className="py-24 border-t-2 border-[#4479A1]/20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              number="03"
              title="Data &"
              italic="Analytics"
              subtitle="Raw numbers turned into things you can actually use."
              accent="#4479A1"
            />

            <ProjectEntry
              name="Six Years of Market Data, Mapped"
              hook="Who controls California's cannabis market — and how fast is it concentrating? We found out."
              meta={[
                { label: "What", value: "Market Analysis" },
                { label: "Data", value: "6 years, all CA counties" },
                { label: "Method", value: "6 years, county by county" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/cannabis-app.gif", caption: "Canopy Index — six years of California cannabis market concentration, mapped" },
                { src: "/media/portfolio/analytics/metabase-dashboard.webp", caption: "BI dashboard: revenue trends and market data" },
              ]}
              cols={[
                { title: "What it does", body: "Tracks retail market concentration across every California county from 2018 to 2024 — measuring whether the cannabis industry is becoming dominated by a few large players or staying diverse." },
                { title: "Who it helped", body: "Researchers and policymakers who needed hard data on market structure, not guesswork." },
                { title: "What changed", body: "Six years of licensing and sales data — mapped, measured, and visualised. An analysis that once took weeks of hand-work now reruns at the press of a button." },
              ]}
              accent="#4479A1"
            />

            <ProjectEntry
              name="Real-Time Business Monitoring"
              hook="Every connection, every request, every error — one screen, always current."
              meta={[
                { label: "What", value: "Live Monitoring" },
                { label: "Updates", value: "Always current. Refreshes automatically." },
                { label: "Coverage", value: "Every connected platform" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/grafana/grafana-013857.png", caption: "The billing connection — health, speed, and errors at a glance" },
                { src: "/media/portfolio/grafana/grafana-013848.png", caption: "The membership connection — watched live, around the clock" },
                { src: "/media/portfolio/grafana/grafana-013914.png", caption: "Every connection on one screen — nothing runs unwatched" },
              ]}
              cols={[
                { title: "What it does", body: "Dashboards that show the health of every business connection in real time — how much is flowing, how fast it's moving, and what's failing." },
                { title: "Who it helped", body: "Engineering and operations teams who needed to know immediately when something broke, not an hour later when a client complained." },
                { title: "What changed", body: "Issues get spotted and fixed before customers notice. Error patterns become visible. Performance problems get diagnosed in minutes." },
              ]}
              accent="#4479A1"
            />

            <ProjectEntry
              name="20 Stores. Watched Around the Clock."
              hook="The moment stock drops below your threshold, you know — and so does your reorder system."
              meta={[
                { label: "What", value: "Stock Monitoring" },
                { label: "Scale", value: "20+ stores simultaneously" },
                { label: "For", value: "E-commerce businesses" },
                { label: "Year", value: "2021–present" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/stock-app.gif", caption: "Stock Monitor — 20 stores, live inventory levels, alerts firing the moment stock drops" },
              ]}
              cols={[
                { title: "What it does", body: "Watches inventory levels across 20+ e-commerce stores simultaneously. Fires an alert the moment stock drops below your threshold — before the shelf is empty." },
                { title: "Who it helped", body: "E-commerce businesses with multiple stores who found out stock had run out when a customer couldn't find the product." },
                { title: "What changed", body: "Stockouts stopped happening unnoticed. Reorders trigger before anything runs out. The whole operation runs without anyone checking dashboards manually." },
              ]}
              accent="#4479A1"
            />

            <ProjectEntry
              name="Global Intelligence Dashboard"
              hook="Conflict zones, cyber threats, economic shifts — live, on a single map."
              meta={[
                { label: "What", value: "Intelligence Dashboard" },
                { label: "Data", value: "Live global feeds" },
                { label: "AI", value: "Strategic posture analysis" },
                { label: "Year", value: "2025" },
              ]}
              image="/media/portfolio/worldmonitor/dashboard.png"
              cols={[
                { title: "What it does", body: "A real-time geopolitical intelligence dashboard that aggregates live news, maps conflict zones and military activity, tracks country stability scores, and surfaces AI-generated insights." },
                { title: "Who it helped", body: "Analysts, researchers, or anyone who wants to understand global events faster than the news cycle." },
                { title: "What changed", body: "Instead of checking six different news sources and a government risk portal, everything is in one place with AI already doing the analysis." },
              ]}
              accent="#4479A1"
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            04 — PRODUCTS & TOOLS
        ════════════════════════════════════════════════════════════ */}
        <section className="py-24 border-t-2 border-white/10">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              number="04"
              title="Products &"
              italic="Tools"
              subtitle="Things built to be used, not just demoed."
              accent="#EAF2EF"
            />


            <ProjectEntry
              name="Xbox Game Pass, Actually Searchable"
              hook="600+ games. Filter by genre, theme, and tier. Runs offline. AI does the categorisation."
              meta={[
                { label: "What", value: "Desktop App" },
                { label: "Runs on", value: "Your desktop, offline" },
                { label: "AI", value: "Offline, no account needed" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/gamepass/demo.gif", caption: "Full catalog with AI-generated genre and theme tags" },
                { src: "/media/portfolio/gamepass/screenshot-browse.png", caption: "Browse 626 games with filters that actually work" },
                { src: "/media/portfolio/gamepass/screenshot-filter.png", caption: "Include or exclude genres and themes simultaneously" },
              ]}
              cols={[
                { title: "What it does", body: "A desktop app that pulls in the full Xbox Game Pass library, sorts every game by genre and theme, and lets you filter the way a proper game store should." },
                { title: "Who it helped", body: "Anyone who subscribes to Game Pass and gets lost in the catalog. The official app doesn't have real filters." },
                { title: "What changed", body: "Finding something to actually play takes seconds. No internet needed after the first sync. Everything runs on your own machine." },
              ]}
            />

            <ProjectEntry
              name="Upwork Job Finder, With a Brain"
              hook="Syncs your Upwork feed. Scores every job against rules you write. Shows exactly why each one ranked where it did."
              meta={[
                { label: "What", value: "Job Scoring Tool" },
                { label: "Syncs", value: "Jobs automatically" },
                { label: "Shows", value: "Why each job scored how it did" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/upwork-app.gif", caption: "Upwork Job Finder — jobs scored, ranked, and explained automatically" },
              ]}
              cols={[
                { title: "What it does", body: "Signs in to your Upwork account securely, pulls in jobs, profiles, and contract history, and scores every job against rules you set — field by field, rule by rule." },
                { title: "Who it helped", body: "Freelancers spending hours filtering through job listings to find the ones worth applying to." },
                { title: "What changed", body: "The best-fit jobs surface immediately. Each job shows a receipt of exactly which rules made it score high or low. Nothing hidden." },
              ]}
            />

            <ProjectEntry
              name="Scanned Forms, Filled Automatically"
              hook="Upload the blank form. Draw boxes over the fields. Generate hundreds of filled copies from a spreadsheet."
              meta={[
                { label: "What", value: "Document Automation" },
                { label: "Language", value: "Arabic + English" },
                { label: "Bulk", value: "Unlimited from Excel" },
                { label: "Year", value: "2025" },
              ]}
              image="/media/portfolio/formforge/demo.gif"
              cols={[
                { title: "What it does", body: "You give it a scanned paper form and mark where each field is. It fills in the data from your spreadsheet and generates a complete, print-ready copy for every row — handling Arabic and English in the same form." },
                { title: "Who it helped", body: "Anyone who processes paper forms at volume — registration forms, applications, official documents — and was filling them out one by one." },
                { title: "What changed", body: "What took hours became a single click. Arabic right-to-left text is handled automatically, no manual adjustment needed." },
              ]}
            />

            <ProjectEntry
              name="A YouTube Channel That Runs Itself"
              hook="Schedule content, generate descriptions, create thumbnails, upload. No one needs to be at a keyboard."
              meta={[
                { label: "What", value: "Content Automation" },
                { label: "Platform", value: "YouTube" },
                { label: "AI writes", value: "Descriptions and titles" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/youtube-app.gif", caption: "ChannelPilot — upload queue, AI descriptions, thumbnail generation, and analytics" },
                { src: "/media/portfolio/youtube/demo.gif", caption: "YouTube automation in action" },
              ]}
              cols={[
                { title: "What it does", body: "Automates the full production and publishing workflow for a YouTube channel — scheduling, AI-written descriptions, thumbnail creation, and automated uploads." },
                { title: "Who it helped", body: "Content creators and businesses who wanted a consistent YouTube presence without the hours of admin that comes with it." },
                { title: "What changed", body: "The channel posts on schedule without anyone logging in. Descriptions are consistent and optimised. The creator focuses on content, not operations." },
              ]}
            />

            <ProjectEntry
              name="Animated Video Subtitles"
              hook="Add styled, animated captions to any video — ready for TikTok, YouTube Shorts, or Instagram Reels."
              meta={[
                { label: "What", value: "Video Tool" },
                { label: "Output", value: "Captions synced to speech" },
                { label: "Platform", value: "Short-form video" },
                { label: "Year", value: "2025" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/pycaps-app.gif", caption: "pycaps — style picker, timeline editor, and live caption preview" },
                { src: "/media/portfolio/pycaps/demo-1.gif", caption: "Animated styled subtitles on a vertical video" },
                { src: "/media/portfolio/pycaps/demo-2.gif", caption: "Different subtitle style on the same video" },
              ]}
              cols={[
                { title: "What it does", body: "Adds styled, animated captions to any video. Choose a look, hand over the video, and get back a file ready to post — captions moving in time with the speech." },
                { title: "Who it helped", body: "Creators making short-form content who want professional-looking captions without editing software." },
                { title: "What changed", body: "Captions that used to require an editor now generate automatically in seconds." },
              ]}
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            05 — SECURITY
        ════════════════════════════════════════════════════════════ */}
        <section className="py-24 border-t-2 border-[#FF5A50]/20">
          <div className="mx-auto max-w-6xl px-6">
            <SectionIntro
              number="05"
              title="Security &"
              italic="Research"
              subtitle="Finding problems before they're exploited."
              accent="#FF5A50"
            />

            <ProjectEntry
              name="Phishing Filter for Your Inbox"
              hook="It scans every email for suspicious links. Anything malicious goes to trash — automatically."
              meta={[
                { label: "What", value: "Email Security" },
                { label: "How", value: "AI checks every link" },
                { label: "Works with", value: "Gmail" },
                { label: "Year", value: "2024" },
              ]}
              carouselImages={[
                { src: "/media/portfolio/mockups/email-app.gif", caption: "Inbox Guard — phishing emails detected, blocked, and logged before you see them" },
              ]}
              cols={[
                { title: "What it does", body: "Watches incoming email, checks every link against what it has learned about phishing, and moves anything malicious to trash before it can do harm." },
                { title: "Who it helped", body: "Anyone who gets phishing emails and can't always spot them — which is everyone." },
                { title: "What changed", body: "Phishing emails stop reaching the inbox. And it keeps getting sharper — learning what's legitimate and what isn't." },
              ]}
              accent="#FF5A50"
            />

            <ProjectEntry
              name="A Searchable Malware Archive"
              hook="Fresh malware samples arrive every day — collected, unpacked, fingerprinted, and filed automatically."
              meta={[
                { label: "What", value: "Security Research Archive" },
                { label: "Source", value: "Daily public threat feeds" },
                { label: "Verified by", value: "Fingerprints, not guesses" },
                { label: "Year", value: "2024" },
              ]}
              noImage={true}
              cols={[
                { title: "What it does", body: "Collects new malware samples every day, unpacks them, gives every file a unique fingerprint, and files it all into a searchable archive." },
                { title: "Who it helped", body: "Security researchers who need a local collection of samples for analysis and pattern matching." },
                { title: "What changed", body: "Building a research-grade sample collection went from days of manual work to something that simply happens overnight." },
              ]}
              accent="#FF5A50"
            />
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            FOUNDER
        ════════════════════════════════════════════════════════════ */}
        <section className="py-32 border-t border-white/10 bg-ink">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-fga/40 mb-10">Behind the work</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Bio */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-fga leading-tight">
                  Noor Ossama <em className="not-italic text-spark">Zakaria</em>
                </h2>
                <p className="mt-2 text-sm text-fga/40">Cairo, Egypt · 23</p>
                <p className="mt-8 text-base leading-relaxed text-fga/65">
                  Started freelancing in automation in 2021. Within two years was running Autari, delivering automation and AI systems for businesses across the UK.
                </p>
                <p className="mt-4 text-base leading-relaxed text-fga/65">
                  Now working as a software engineer at Jigsol Business Solutions alongside client work — building data systems, AI platforms, and the kind of tools that stop teams from doing things by hand.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:noorossamazakaria@gmail.com" variant="primary">Get in touch</Button>
                  <Button href="https://linkedin.com/in/noor-zakaria" target="_blank" rel="noopener noreferrer" variant="secondary">LinkedIn</Button>
                  <Button href="https://github.com/noorgx" target="_blank" rel="noopener noreferrer" variant="secondary">GitHub</Button>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
                <p className="text-[11px] uppercase tracking-[0.15em] text-fga/40 mb-6">Certifications</p>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "AI Engineer for Developers", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/AIEDA0010363096562" },
                    { label: "Data Visualization with Python", issuer: "IBM / Coursera", url: "https://www.coursera.org/account/accomplishments/certificate/U6HCZ8Q9XA5X" },
                    { label: "Data Analysis with Python", issuer: "IBM / Coursera", url: "https://www.coursera.org/account/accomplishments/certificate/V9GRVQ7DBQMV" },
                    { label: "Applied Data Science Capstone", issuer: "IBM / Coursera", url: "https://www.coursera.org/account/accomplishments/certificate/3QVGKBYTLUWG" },
                    { label: "Python for Data Science, AI & Development", issuer: "IBM / Coursera", url: "https://www.coursera.org/account/accomplishments/certificate/PNA2U45KH689" },
                    { label: "Software Engineering Programme", issuer: "ALX Africa", url: undefined },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start justify-between gap-4 py-3 border-b border-white/8 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-fga">{c.label}</p>
                        <p className="text-xs text-fga/40 mt-0.5">{c.issuer}</p>
                      </div>
                      {c.url && (
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-medium uppercase tracking-[0.1em] text-spark hover:text-mint transition-colors shrink-0">
                          View →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            CTA
        ════════════════════════════════════════════════════════════ */}
        <section className="py-32 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-fga">
              Have something worth <em className="not-italic text-spark">automating?</em>
            </h2>
            <p className="mt-6 text-lg text-fga/55 max-w-xl mx-auto">
              Book a call. You describe the process, we figure out if it can be automated.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href={bookACallHref()} className="px-10 py-4 text-sm">Book a call</Button>
              <Button href="/" variant="secondary" className="px-10 py-4 text-sm">Back to autari.co.uk</Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
