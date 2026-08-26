"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { bookACallHref } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "5+", label: "years building" },
  { value: "6", label: "open-source projects" },
  { value: "3", label: "UK companies served" },
  { value: "10k+", label: "automated executions/day" },
];

const SERVICES = [
  {
    icon: "⚡",
    title: "ETL & Data Pipelines",
    desc: "End-to-end ingestion, transformation, and reporting pipelines. PostgreSQL as system of record, Airflow for orchestration, integrated with accounting and operations APIs.",
    tags: ["Python", "Airflow", "PostgreSQL", "Xero", "HMRC"],
  },
  {
    icon: "🤖",
    title: "AI Agents & Automation",
    desc: "Multi-tenant agent services with persistent memory, MCP-based tool integration, and schema-grounded query planners that write and execute SQL from natural language.",
    tags: ["CrewAI", "MCP", "FastAPI", "Python"],
  },
  {
    icon: "🔌",
    title: "Backend & API Systems",
    desc: "Production-grade FastAPI backends with PostgreSQL, Redis, Docker, and CI/CD pipelines. Payroll modules, license servers, and high-throughput scraping systems.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Go"],
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    desc: "Grafana operational dashboards, Pandas/Seaborn analytics pipelines, and BI systems that turn raw platform data into actionable business reporting.",
    tags: ["Grafana", "Pandas", "Matplotlib", "Seaborn"],
  },
];

const WORK = [
  {
    company: "Jigsol Business Solutions",
    reg: "UK Co. 06342554",
    role: "Software Engineer",
    period: "Oct 2024 – Present",
    type: "Full-time",
    items: [
      "ETL pipelines and data infrastructure for Jigsol OS — ingestion, transformation, and reporting layers with PostgreSQL as system of record",
      "HMRC-compliant payroll module (FPS/CIS submissions) built on FastAPI + Docker",
      "Jagent — a multi-tenant AI agent service with persistent memory, isolated per-session code execution, and a credential vault",
      "MCP host (stdio + streamable-HTTP) and a natural-language query planner that writes and executes SQL against the database, reporting results back in chat",
      "AI agent that turns Jira tickets into feature branches with resumable review sessions",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "MCP", "Docker", "CI/CD"],
  },
  {
    company: "Autari Ltd",
    reg: "UK Co. 17105724",
    role: "Founder & CEO",
    period: "Sep 2025 – Present",
    type: "Founder",
    items: [
      "Done-for-you automation consultancy delivering AI agent and ETL systems for UK and international businesses",
      "CrewAI-based AI agent orchestration platform and a natural-language data query engine",
      "REST API integrations across Xero, WFM, Glofox, Acorn, and JISR — replacing manual data entry and reporting",
      "License and accounts backend: seat management, device-locking, signed activation tokens, and payments",
      "End-to-end client ownership: requirements, architecture, delivery, and account management",
    ],
    tags: ["CrewAI", "Python", "REST APIs", "Xero", "FastAPI"],
  },
  {
    company: "Hybrid Solutions Group",
    reg: "UK Co. 13791780",
    role: "Automation Engineer",
    period: "Jun 2025 – Feb 2026",
    type: "Contract",
    items: [
      "Python/Airflow ETL system integrating BigChange field service platform with Xero accounting — automating job, quote, invoice, and purchase-order workflows end to end",
      "OCR/document pipeline (PyMuPDF, Tesseract, OpenCV) extracting structured data from scanned PDFs",
      "Grafana dashboards for operational monitoring, shared across this engagement and the Jigsol OS platform",
    ],
    tags: ["Python", "Airflow", "Xero", "OCR", "Grafana", "BigChange"],
  },
  {
    company: "Upwork",
    reg: "Top-rated freelancer",
    role: "Automation & Data Engineer",
    period: "2021 – Present",
    type: "Freelance",
    items: [
      "High-throughput telecom portal automation (Python + Go workers) for a major Egyptian DSL/broadband provider — resilient multi-tier proxy pool with automatic failover, session caching cut round-trips from 4 to 1 with per-key concurrency locking",
      "Full automation suite for BigChange field service platform — job scheduling, quoting, invoicing",
      "Stock-monitoring system across 20+ e-commerce stores",
      "Analytics dashboards, web scraping pipelines, and chatbot/AI agent integrations for UK and international clients",
    ],
    tags: ["Python", "Go", "Automation", "Web Scraping", "REST APIs"],
  },
  {
    company: "Fiverr",
    reg: "Data science & analytics",
    role: "Data Scientist & Analytics Engineer",
    period: "Jan 2022 – Sep 2024",
    type: "Freelance",
    items: [
      "Analytics reports, dashboards, and BI systems for e-commerce businesses",
      "Predictive modelling on inventory, sales, and performance data for demand forecasting",
      "Automated reporting pipelines for trend tracking and operational decision support",
    ],
    tags: ["Python", "Pandas", "Seaborn", "Matplotlib", "BI"],
  },
];

const PROJECTS = [
  {
    name: "Best-Fit Haircut Detection",
    desc: "Fine-tuned a Vision Transformer (ViT) face-shape classifier, fused with facial-geometry scoring from MediaPipe. Full training pipeline: dataset acquisition, preprocessing, early-stopping fine-tune, calibration/evaluation grid to gate each new champion.",
    lang: ["Python", "PyTorch", "HuggingFace", "MediaPipe", "OpenCV"],
    url: "https://github.com/noorgx/best-haircut-detection",
  },
  {
    name: "Cannabis Market Concentration",
    desc: "HHI market-concentration pipeline over California cannabis license and sales registries, tracking retail concentration by county and parent company from 2018–2024. Ported from Stata to Python/Pandas with Matplotlib/Seaborn visualisations.",
    lang: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Stata"],
    url: "https://github.com/noorgx/cannabis-market-concentration",
  },
  {
    name: "Gig Copilot",
    desc: "AI-agent task runner with human-in-the-loop review over a Telegram bot. Approve, revise, or reject each drafted artifact before it lands in the database. GitHub-activity watcher auto-drafts portfolio case studies from qualifying commit activity.",
    lang: ["Python", "FastAPI", "Claude Agent SDK", "SQLite", "Telegram"],
    url: "https://github.com/noorgx/gig-copilot",
  },
  {
    name: "FormForge",
    desc: "Desktop tool that fills scanned paper forms from a visual template, with bulk generation from an Excel sheet. Arabic and English in the same field box, with automatic right-to-left shaping and direction detection.",
    lang: ["Python", "Pillow", "pywebview"],
    url: "https://github.com/noorgx/form-forge",
  },
  {
    name: "Game Pass Search",
    desc: "Desktop app syncing the full Xbox Game Pass catalog from Microsoft's API into a local SQLite database. On-device AI genre/tag classification runs fully offline. Steam-style include/exclude tag filters with live counts.",
    lang: ["React", "Electron", "SQLite", "Transformers.js"],
    url: "https://github.com/noorgx/gamepass-search",
  },
  {
    name: "Gig Radar",
    desc: "Full-stack Upwork job intelligence tool. OAuth2 + GraphQL API client syncs jobs, profile, and contracts into SQLite. Editable rule-based scoring engine (field, operator, weight) with a receipt-style breakdown of which rules fired.",
    lang: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "GraphQL"],
    url: "https://github.com/noorgx/gig-radar",
  },
];

const CERTS = [
  { name: "AI Engineer for Developers — Associate", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/AIEDA0010363096562" },
  { name: "Data Visualization with Python", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/U6HCZ8Q9XA5X" },
  { name: "Data Analysis with Python", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/V9GRVQ7DBQMV" },
  { name: "Applied Data Science Capstone", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/3QVGKBYTLUWG" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM / Coursera", date: "Jul 2020", url: "https://www.coursera.org/account/accomplishments/certificate/PNA2U45KH689" },
  { name: "Software Engineering Programme", issuer: "ALX Africa", date: "2023", url: undefined },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-spark/20 bg-spark/8 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-spark">
      {label}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-fga/50">
      {type}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative flex min-h-[70vh] items-center pb-24 pt-36">
          <div className="aurora" />
          <div className="mx-auto max-w-6xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Work & Projects</SectionLabel>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-fga sm:text-6xl lg:text-7xl"
            >
              Five years of work that ships.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-fga/60 sm:text-lg"
            >
              Automation systems, AI agents, ETL pipelines, and full-stack products — built for UK and international clients since 2021.
            </motion.p>

            {/* Stat row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-5 py-3.5">
                  <div className="font-display text-2xl font-bold text-fga">{s.value}</div>
                  <div className="mt-0.5 text-[11px] text-fga/50">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionLabel>What Autari builds</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
              Four areas, one result.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-fga">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fga/55">{s.desc}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {s.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Work history ── */}
        <section className="py-24 border-t border-white/8">
          <div className="mx-auto max-w-6xl px-6">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
              Every engagement.
            </h2>
            <div className="mt-12 flex flex-col gap-6">
              {WORK.map((w, i) => (
                <motion.div
                  key={w.company}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-lg font-semibold text-fga">{w.company}</h3>
                        <TypeBadge type={w.type} />
                      </div>
                      <div className="mt-1 text-xs text-fga/45">{w.reg}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-spark">{w.role}</div>
                      <div className="mt-0.5 text-xs text-fga/40">{w.period}</div>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-col gap-2">
                    {w.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-fga/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-spark/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open-source projects ── */}
        <section className="py-24 border-t border-white/8">
          <div className="mx-auto max-w-6xl px-6">
            <SectionLabel>Open source</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
              Projects on GitHub.
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={p.name}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-fga group-hover:text-spark transition-colors">
                      {p.name}
                    </h3>
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-fga/30 group-hover:text-spark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-fga/55 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.lang.map((l) => <Tag key={l} label={l} />)}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Founder / About ── */}
        <section className="py-24 border-t border-white/8">
          <div className="mx-auto max-w-6xl px-6">
            <SectionLabel>Founder</SectionLabel>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] items-start">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
                  Noor Ossama Zakaria
                </h2>
                <p className="mt-1 text-sm text-fga/45">23 · Cairo, Egypt</p>
                <p className="mt-5 text-base leading-relaxed text-fga/65">
                  Started freelancing in automation and data engineering on Upwork in 2021. Over five years that grew from scripts and dashboards into full ETL systems, AI agent services, and a consultancy — Autari — that runs production automation for businesses across the UK.
                </p>
                <p className="mt-4 text-base leading-relaxed text-fga/65">
                  Currently also a software engineer at Jigsol Business Solutions, building the data infrastructure and AI tools inside Jigsol OS.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:noorossamazakaria@gmail.com" variant="primary">
                    Get in touch
                  </Button>
                  <Button href="https://linkedin.com/in/noor-zakaria" target="_blank" rel="noopener noreferrer" variant="secondary">
                    LinkedIn
                  </Button>
                  <Button href="https://github.com/noorgx" target="_blank" rel="noopener noreferrer" variant="secondary">
                    GitHub
                  </Button>
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-3"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/40">Certifications</p>
                {CERTS.map((c) => (
                  <div key={c.name} className="glass glass-hover rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-fga">{c.name}</div>
                      <div className="mt-0.5 text-xs text-fga/45">
                        {c.issuer}{c.date ? ` · ${c.date}` : ""}
                      </div>
                    </div>
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[10px] font-medium uppercase tracking-[0.1em] text-spark hover:text-mint transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 border-t border-white/8">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <SectionLabel className="justify-center">Work with Autari</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">
              Have a process worth automating?
            </h2>
            <p className="mt-4 text-base text-fga/55 max-w-lg mx-auto">
              Book a call. You walk us through the repetitive work, we scope it and show you it working before anything goes live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={bookACallHref()} className="px-8 py-3.5">
                Book a call
              </Button>
              <Button href="/" variant="secondary" className="px-8 py-3.5">
                Back to autari.co.uk
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
