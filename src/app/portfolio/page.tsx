"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { bookACallHref } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/* Haircut Detection Pipeline SVG                                      */
/* ------------------------------------------------------------------ */

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

      {/* ── LEFT: face photo ── */}
      {/* polaroid-style frame (sketchy, slightly rotated) */}
      <g transform="translate(42,30) rotate(-4)">
        <rect x="0" y="0" width="110" height="130" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
        {/* face outline — oval */}
        <ellipse cx="55" cy="58" rx="28" ry="33" fill="none" stroke="rgba(234,242,239,0.5)" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* eyes */}
        <ellipse cx="44" cy="50" rx="4" ry="2.5" fill="rgba(234,242,239,0.35)" />
        <ellipse cx="66" cy="50" rx="4" ry="2.5" fill="rgba(234,242,239,0.35)" />
        {/* nose */}
        <path d="M55 55 Q52 64 50 67 Q55 70 60 67 Q58 64 55 55" fill="none" stroke="rgba(234,242,239,0.3)" strokeWidth="1" />
        {/* mouth */}
        <path d="M48 72 Q55 77 62 72" fill="none" stroke="rgba(234,242,239,0.4)" strokeWidth="1.2" strokeLinecap="round" />
        {/* hair */}
        <path d="M27 42 Q30 20 55 18 Q80 20 83 42" fill="none" stroke="rgba(234,242,239,0.45)" strokeWidth="2" strokeLinecap="round" />
        {/* label under */}
        <text x="55" y="118" textAnchor="middle" fontSize="9" fill="rgba(234,242,239,0.45)" fontFamily="system-ui,sans-serif">your photo</text>
      </g>

      {/* ── ARROW 1 → brain/scan area ── */}
      <path d="M162 110 C190 110 200 110 218 110" fill="none" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="218,106 226,110 218,114" fill="rgba(25,211,162,0.5)" />

      {/* ── MIDDLE: AI scan burst ── */}
      <g transform="translate(280,110)">
        {/* glow ring */}
        <circle cx="0" cy="0" r="52" fill="none" stroke="rgba(25,211,162,0.12)" strokeWidth="18" filter="url(#hc-glow)" />
        <circle cx="0" cy="0" r="40" fill="rgba(14,124,102,0.15)" stroke="rgba(25,211,162,0.35)" strokeWidth="1.5" />
        {/* scan lines */}
        {[-22,-11,0,11,22].map((y, i) => (
          <line key={i} x1="-28" y1={y} x2="28" y2={y} stroke="rgba(25,211,162,0.2)" strokeWidth="1" />
        ))}
        {/* landmark dots */}
        {[[0,-24],[16,-14],[-16,-14],[0,0],[12,10],[-12,10],[0,22],[-20,4],[20,4]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.2" fill="#19D3A2" opacity={0.7} />
        ))}
        {/* connecting mesh lines */}
        <g stroke="rgba(25,211,162,0.2)" strokeWidth="0.8" fill="none">
          <line x1="0" y1="-24" x2="16" y2="-14" /><line x1="0" y1="-24" x2="-16" y2="-14" />
          <line x1="16" y1="-14" x2="-16" y2="-14" /><line x1="16" y1="-14" x2="0" y2="0" />
          <line x1="-16" y1="-14" x2="0" y2="0" /><line x1="0" y1="0" x2="12" y2="10" />
          <line x1="0" y1="0" x2="-12" y2="10" /><line x1="12" y1="10" x2="-12" y2="10" />
          <line x1="12" y1="10" x2="0" y2="22" /><line x1="-12" y1="10" x2="0" y2="22" />
          <line x1="-20" y1="4" x2="-12" y2="10" /><line x1="20" y1="4" x2="12" y2="10" />
        </g>
        {/* centre label */}
        <text x="0" y="60" textAnchor="middle" fontSize="8.5" fill="rgba(234,242,239,0.5)" fontFamily="system-ui,sans-serif">AI reading face shape</text>
      </g>

      {/* ── ARROW 2 → results ── */}
      <path d="M334 110 C362 110 372 110 388 110" fill="none" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="388,106 396,110 388,114" fill="rgba(25,211,162,0.5)" />

      {/* ── RIGHT: ranked haircut results ── */}
      <g transform="translate(405,28)">
        {[
          { rank: "#1", style: "Textured crop", score: "98%" },
          { rank: "#2", style: "Undercut fade", score: "91%" },
          { rank: "#3", style: "Classic side part", score: "84%" },
        ].map((r, i) => (
          <g key={i} transform={`translate(0, ${i * 48})`}>
            <rect x="0" y="0" width="230" height="38" rx="8"
              fill={i === 0 ? "url(#hc-g)" : "rgba(14,124,102,0.1)"}
              stroke={i === 0 ? "none" : "rgba(25,211,162,0.2)"} strokeWidth="1"
              filter={i === 0 ? "url(#hc-soft)" : undefined}
            />
            <text x="12" y="15" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif"
              fill={i === 0 ? "#0B0E12" : "rgba(25,211,162,0.8)"}>{r.rank}</text>
            <text x="32" y="15" fontSize="10" fontWeight="600" fontFamily="system-ui,sans-serif"
              fill={i === 0 ? "#0B0E12" : "rgba(234,242,239,0.8)"}>{r.style}</text>
            {/* score bar */}
            <rect x="12" y="22" width="180" height="5" rx="3" fill="rgba(255,255,255,0.1)" />
            <rect x="12" y="22" width={180 * parseInt(r.score) / 100} height="5" rx="3"
              fill={i === 0 ? "rgba(11,14,18,0.4)" : "rgba(25,211,162,0.5)"} />
            <text x="200" y="28" fontSize="8" fontFamily="system-ui,sans-serif"
              fill={i === 0 ? "rgba(11,14,18,0.6)" : "rgba(234,242,239,0.45)"}>{r.score}</text>
          </g>
        ))}
        <text x="115" y="164" textAnchor="middle" fontSize="8.5" fill="rgba(234,242,239,0.4)" fontFamily="system-ui,sans-serif">ranked by face-shape match</text>
      </g>

      {/* ── sparkles around result ── */}
      {[[395,22],[638,18],[640,140],[392,145],[515,8],[515,175]].map(([x,y],i) => (
        <g key={i}>
          <line x1={x} y1={y-5} x2={x} y2={y+5} stroke="#19D3A2" strokeWidth="1.2" opacity="0.6" />
          <line x1={x-5} y1={y} x2={x+5} y2={y} stroke="#19D3A2" strokeWidth="1.2" opacity="0.6" />
          <line x1={x-3} y1={y-3} x2={x+3} y2={y+3} stroke="#19D3A2" strokeWidth="0.8" opacity="0.35" />
          <line x1={x+3} y1={y-3} x2={x-3} y2={y+3} stroke="#19D3A2" strokeWidth="0.8" opacity="0.35" />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "5+", label: "years building" },
  { value: "6", label: "open-source projects" },
  { value: "3", label: "UK companies served" },
  { value: "10k+", label: "automated executions/day" },
];


const ALL_WORK_CATEGORIES = [
  {
    title: "Telecom & ISP Systems",
    items: [
      { name: "ET System", desc: "Full DSL customer inquiry portal automation for a major Egyptian ISP — Python FastAPI backend, Go Windows tray proxy agent, React/TS frontend with 8 views, queue worker, smart discovery, proxy pool failover, session caching cut round-trips from 4 to 1" },
    ],
  },
  {
    title: "Field Service & Operations Automation",
    items: [
      { name: "BigChange + Xero ETL", desc: "Airflow pipeline integrating BigChange field service platform with Xero accounting — job, quote, invoice, and PO workflows end to end (Hybrid Solutions Group)" },
      { name: "BigChange Automation Suite", desc: "Job scheduling, quoting, and invoicing automation for a UK field service company (Upwork)" },
      { name: "OCR Document Pipeline", desc: "PyMuPDF, Tesseract, and OpenCV pipeline extracting structured data from scanned PDFs into the workflow (Hybrid Solutions Group)" },
    ],
  },
  {
    title: "Accounting & Finance Automation",
    items: [
      { name: "Multi-Platform API Integrations", desc: "Automation across Xero, WFM, Glofox, Acorn, and JISR — replacing manual data entry and reporting for UK and international clients (Autari)" },
      { name: "Invoice, PO & Quote Automation", desc: "End-to-end billing and purchase-order workflow automation (Hybrid Solutions Group)" },
    ],
  },
  {
    title: "AI Agent Platforms",
    items: [
      { name: "Jagent", desc: "Headless multi-tenant AI agent service — persistent memory, isolated per-session code execution, credential vault that keeps secrets out of the LLM context" },
      { name: "MCP Host + Query Planner", desc: "MCP host (stdio + streamable-HTTP) and a schema-grounded query planner that turns natural language into a validated SQL/Python execution plan, runs it, and reports results in chat" },
      { name: "Auronexus", desc: "CrewAI-based visual agent orchestration platform for building and running AI employee workflows" },
      { name: "Autari Brain", desc: "AI query engine (MindsDB fork) — natural-language queries over connected data sources via HTTP and MySQL interfaces" },
      { name: "Gig Copilot", desc: "AI task runner with human-in-the-loop review over Telegram — approve, revise, or reject each artifact; GitHub-activity watcher auto-drafts case studies" },
    ],
  },
  {
    title: "Developer & Engineering Tools",
    items: [
      { name: "claude-ops-bot", desc: "AI agent that converts Jira tickets into feature branches with resumable, AI-assisted review sessions and documented cutover/deploy runbooks" },
      { name: "jigsolos_systemdeployer", desc: "Ansible-based deployment automation across production, staging, and testing environments on AWS Lightsail, with Grafana task monitoring" },
      { name: "job-ops", desc: "DevOps principles applied to job hunting — a self-hosted pipeline to track, analyse, and assist the application process" },
      { name: "OffensiveSET", desc: "MCP server for generating high-quality pentesting conversation datasets for LLM fine-tuning" },
    ],
  },
  {
    title: "Data & Analytics Platforms",
    items: [
      { name: "Cannabis Market Concentration", desc: "HHI market-concentration pipeline over California cannabis license and sales registries 2018–2024, ported from Stata to Python with Matplotlib/Seaborn visualisations" },
      { name: "jigsolos_intelligence", desc: "Celery-backed analytics and intelligence service with its own REST API (Jigsol)" },
      { name: "jigsolos_analytics", desc: "Python analytics service for Jigsol OS data" },
      { name: "mda-analytics", desc: "Laravel/Vue management analytics dashboard" },
      { name: "Jigsol OS ETL", desc: "End-to-end data ingestion, transformation, and reporting pipeline with PostgreSQL as system of record" },
      { name: "E-commerce BI & Forecasting", desc: "Analytics reports, dashboards, predictive modelling on inventory and sales data, and automated demand-forecasting pipelines for e-commerce clients (Fiverr)" },
      { name: "Stock Monitoring System", desc: "Automated stock monitoring across 20+ e-commerce stores" },
      { name: "Image Data Pipeline", desc: "Excel-driven Google image search pipeline that filters and ranks results by resolution and colour" },
    ],
  },
  {
    title: "SaaS & Products (Autari)",
    items: [
      { name: "autari-landing", desc: "Next.js validation landing page with a conversational survey, Stripe refundable deposit flow, and Google Sheets capture — deployed at autari.co.uk" },
      { name: "autari-web-portal", desc: "Customer + staff web portal — account dashboard, billing, device-locked license management, staff admin with fulfill/revoke/refund/seat-adjust flows" },
      { name: "autari-license-server", desc: "License backend — seat management, device-locking, signed activation tokens, payments" },
      { name: "autari-desktop", desc: "Tauri + React desktop app with per-device activation" },
      { name: "autari-employee", desc: "Packaging, installer (NSIS), and backend sidecar for the desktop product" },
    ],
  },
  {
    title: "Consumer & Personal Tools",
    items: [
      { name: "Best-Fit Haircut Detection", desc: "Take a selfie, get ranked haircut suggestions — fine-tuned ViT face-shape classifier fused with MediaPipe facial geometry, full training pipeline, celebrity star-match database" },
      { name: "Game Pass Search", desc: "Desktop app syncing the Xbox Game Pass catalog into SQLite with on-device AI genre/tag classification and Steam-style faceted filters" },
      { name: "Gig Radar", desc: "Upwork job intelligence tool — OAuth2/GraphQL sync, editable rule-based scoring engine, React frontend with receipt-style score breakdown" },
      { name: "FormForge", desc: "Desktop form filler for scanned paper templates — bulk generation from Excel, Arabic RTL + English in the same field box" },
      { name: "pycaps", desc: "Animated video subtitle generator with Python and CSS" },
      { name: "worldmonitor", desc: "Real-time global intelligence dashboard — AI-powered news aggregation and geopolitical monitoring" },
      { name: "youtube-automation", desc: "YouTube channel and content automation system" },
      { name: "metaai-api", desc: "FastAPI wrapper for Meta AI with chat, image generation, and video generation via cookie-based auth" },
    ],
  },
  {
    title: "PlayStation Platform",
    items: [
      { name: "PlayStation Backend + Frontend", desc: "Full-stack PlayStation platform — Node.js/JavaScript backend and frontend application" },
    ],
  },
  {
    title: "Cybersecurity & Reverse Engineering",
    items: [
      { name: "NoPhishyZeta", desc: "Phishing email scanner that uses an ML model to classify URLs and moves malicious emails to trash automatically" },
      { name: "MalwareDB", desc: "Automated malware sample download, extraction, and SHA-256 hashing pipeline from Malware Bazaar with multithreading and multiprocessing" },
    ],
  },
  {
    title: "Infrastructure & Monitoring",
    items: [
      { name: "Grafana Dashboards", desc: "Operational monitoring dashboards for Jigsol OS (Celery tasks, system metrics) and Hybrid Solutions Group" },
      { name: "F5 VPN Container", desc: "Containerised F5 VPN setup" },
    ],
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
      "ETL pipelines and data infrastructure for Jigsol OS — ingestion, transformation, and reporting with PostgreSQL; third-party API layer (jigsolos_data) documented in Confluence",
      "HMRC-compliant payroll module (FPS/CIS submissions) on FastAPI + Docker (jigsolOS_payroll)",
      "Jagent — headless, multi-tenant AI agent service (jigsolos_agent): persistent memory, isolated per-session code execution, credential vault, MCP host with stdio + streamable-HTTP transports",
      "Schema-grounded query planner: natural-language question → validated SQL/Python execution plan → runs against the database → results reported back in chat",
      "jigsolos_intelligence: Celery-backed analytics and intelligence service with its own REST API",
      "jigsolos_systemdeployer: Ansible deployment automation across production, staging, and testing environments on AWS Lightsail; Grafana dashboards for Celery task and system monitoring",
      "claude-ops-bot: AI agent that converts Jira tickets into feature branches with resumable, AI-assisted review sessions and documented cutover/deploy runbooks",
      "mda-analytics: Laravel/Vue analytics dashboard for management data",
    ],
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "MCP", "Docker", "Ansible", "AWS", "TypeScript"],
  },
  {
    company: "Autari Ltd",
    reg: "UK Co. 17105724",
    role: "Founder & CEO",
    period: "Sep 2025 – Present",
    type: "Founder",
    items: [
      "Built and run an automation consultancy delivering AI agent and ETL systems for UK and international businesses",
      "autari-landing: Next.js 15 validation landing page with Stripe deposit flow and Google Sheets survey capture — deployed on Netlify at autari.co.uk",
      "autari-web-portal: Customer + staff web portal (Next.js BFF) — account dashboard, billing, device-locked license management, staff admin console with fulfill/revoke/refund flows",
      "autari-license-server: Python license backend — seat management, device-locking, signed activation tokens, payments",
      "autari-desktop: Tauri + React desktop app with per-device activation",
      "autari-brain: AI Query Engine (MindsDB fork) — natural-language queries over connected data sources via HTTP :47334 and MySQL :47335",
      "auronexus: CrewAI-based visual agent orchestration platform for building and running AI employee workflows",
      "REST API integrations across Xero, WFM, Glofox, Acorn, and JISR for client automation",
    ],
    tags: ["Python", "FastAPI", "Next.js", "React", "Tauri", "CrewAI", "Stripe", "REST APIs"],
  },
  {
    company: "ET System (Etisalat / TE Data)",
    reg: "Contract · Private",
    role: "Backend & Automation Engineer",
    period: "Apr 2026 – May 2026",
    type: "Contract",
    items: [
      "Built a high-throughput DSL/broadband customer-inquiry portal automation system for a major Egyptian ISP",
      "Python FastAPI backend with a queue worker system, smart discovery, and a lead/request-details scraping pipeline",
      "Go tray agent (et-proxy-agent): a Windows residential-proxy agent that registers at startup, connects to the coordinator via WebSocket, executes HTTP requests from the user's egress IP, and auto-reconnects with exponential backoff",
      "Multi-tier proxy pool with automatic failover; session/state caching cut network round-trips per lookup from 4 to 1 with per-key concurrency locking",
      "React/TypeScript frontend with Dashboard, Queue, Results, Stats, Proxy Pool, Scheduler, and TE Inquiry views",
    ],
    tags: ["Python", "Go", "FastAPI", "React", "TypeScript", "WebSocket", "Proxy Pool"],
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
      "ET System (above) — telecom portal automation with Go+Python worker split and resilient proxy pool",
      "Full automation suite for the BigChange field service platform — job scheduling, quoting, invoicing",
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
    desc: "Take a selfie, get a ranked list of the haircuts that actually suit your face. No sign-up, no cloud, runs entirely on your laptop. Under the hood it detects your face, measures your bone structure, runs it through a fine-tuned AI model, and cross-references a celebrity database to show you who pulls off each style.",
    lang: ["Python", "PyTorch", "HuggingFace", "MediaPipe", "OpenCV"],
    url: "https://github.com/noorgx/best-haircut-detection",
    featured: true,
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <SectionLabel>Work & Projects</SectionLabel>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-fga sm:text-6xl lg:text-7xl"
            >
              Five years of work that ships.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-fga/60 sm:text-lg"
            >
              Automation systems, AI agents, ETL pipelines, and full-stack products — built for UK and international clients since 2021.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }}
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

        {/* Screenshots moved into All Work section */}

        {/* ── All work by category ── */}
        <section className="py-24 border-t border-white/8">
          <div className="mx-auto max-w-6xl px-6">
            <SectionLabel>Everything built</SectionLabel>
            <div className="mt-12 flex flex-col gap-10">
              {ALL_WORK_CATEGORIES.map((cat, ci) => (
                <motion.div
                  key={cat.title}
                  custom={ci}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-spark">{cat.title}</span>
                    <span className="flex-1 h-px bg-gradient-to-r from-spark/30 to-transparent" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.items.map((item) => (
                      <div key={item.name} className="glass glass-hover rounded-xl px-5 py-4">
                        <div className="text-sm font-semibold text-fga mb-1">{item.name}</div>
                        <div className="text-xs leading-relaxed text-fga/50">{item.desc}</div>
                      </div>
                    ))}
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
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">Every engagement.</h2>
            <div className="mt-12 flex flex-col gap-6">
              {WORK.map((w, i) => (
                <motion.div
                  key={w.company} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
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
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">Projects on GitHub.</h2>

            {/* Featured: Best-Fit Haircut Detection */}
            {(() => {
              const featured = PROJECTS.find((p) => p.featured);
              if (!featured) return null;
              return (
                <motion.a
                  href={featured.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-10 block glass glass-hover rounded-2xl overflow-hidden group cursor-pointer"
                >
                  {/* illustration */}
                  <div className="bg-ink-800 px-6 pt-8 pb-2">
                    <HaircutPipelineSVG />
                  </div>
                  {/* copy */}
                  <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-xl font-bold text-fga group-hover:text-spark transition-colors">{featured.name}</h3>
                        <span className="rounded-full bg-spark/15 border border-spark/30 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-spark">Featured</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-fga/60 max-w-2xl">{featured.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {featured.lang.map((l) => <Tag key={l} label={l} />)}
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-spark group-hover:text-mint transition-colors">
                      View on GitHub
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              );
            })()}

            {/* Rest of projects */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.filter((p) => !p.featured).map((p, i) => (
                <motion.a
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  key={p.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-6 flex flex-col gap-4 group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold text-fga group-hover:text-spark transition-colors">{p.name}</h3>
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
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">Noor Ossama Zakaria</h2>
                <p className="mt-1 text-sm text-fga/45">23 · Cairo, Egypt</p>
                <p className="mt-5 text-base leading-relaxed text-fga/65">
                  Started freelancing in automation and data engineering on Upwork in 2021. Over five years that grew from scripts and dashboards into full ETL systems, AI agent services, and a consultancy — Autari — that runs production automation for businesses across the UK.
                </p>
                <p className="mt-4 text-base leading-relaxed text-fga/65">
                  Currently also a software engineer at Jigsol Business Solutions, building the data infrastructure and AI tools inside Jigsol OS.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:noorossamazakaria@gmail.com" variant="primary">Get in touch</Button>
                  <Button href="https://linkedin.com/in/noor-zakaria" target="_blank" rel="noopener noreferrer" variant="secondary">LinkedIn</Button>
                  <Button href="https://github.com/noorgx" target="_blank" rel="noopener noreferrer" variant="secondary">GitHub</Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-3"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/40">Certifications</p>
                {CERTS.map((c) => (
                  <div key={c.name} className="glass glass-hover rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-fga">{c.name}</div>
                      <div className="mt-0.5 text-xs text-fga/45">{c.issuer}{c.date ? ` · ${c.date}` : ""}</div>
                    </div>
                    {c.url && (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[10px] font-medium uppercase tracking-[0.1em] text-spark hover:text-mint transition-colors">
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
            <h2 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-fga sm:text-4xl">Have a process worth automating?</h2>
            <p className="mt-4 text-base text-fga/55 max-w-lg mx-auto">
              Book a call. You walk us through the repetitive work, we scope it and show you it working before anything goes live.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={bookACallHref()} className="px-8 py-3.5">Book a call</Button>
              <Button href="/" variant="secondary" className="px-8 py-3.5">Back to autari.co.uk</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
