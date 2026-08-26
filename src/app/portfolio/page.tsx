"use client";

import React from "react";
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
        {/* face outline. oval */}
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
      {
        name: "DSL Manager",
        desc: "Automation tool for DSL teams. Paste numbers, pick the task, come back to results. 2.4 million numbers processed at 99.7% success.",
        images: [
          { src: "/media/portfolio/et-system/dashboard.png", caption: "2.4M numbers processed, 99.7% success rate" },
          { src: "/media/portfolio/et-system/modules.png", caption: "Task modules with live counts" },
          { src: "/media/portfolio/et-system/scrape.png", caption: "Queue numbers and watch results live" },
          { src: "/media/portfolio/et-system/lead-old.png", caption: "Lead submission with Excel export" },
          { src: "/media/portfolio/et-system/proxy-pool.png", caption: "Residential proxy pool management" },
          { src: "/media/portfolio/et-system/admin-users.png", caption: "User and access management" },
          { src: "/media/portfolio/et-system/admin-access.png", caption: "Per-user per-app access control" },
          { src: "/media/portfolio/et-system/applications.png", caption: "Isolated workspaces per team" },
          { src: "/media/portfolio/et-system/login.png", caption: "Login" },
        ],
      },
    ],
  },
  {
    title: "Field Service & Operations Automation",
    items: [
      {
        name: "Hybrid Solutions Group",
        subtitle: "UK Co. 13791780",
        desc: "Every job, quote, invoice and purchase order that used to be done by hand now runs automatically between BigChange and Xero. Scanned documents get read and filed. Dashboards stay up to date.",
        customComponent: "bigchange-xero",
      },
      {
        name: "BigChange Automation Suite",
        desc: "Jobs flow through scheduling, quoting, and invoicing without anyone having to move them manually.",
        customComponent: "bigchange-flow",
      },
      {
        name: "OCR Document Pipeline",
        desc: "Scanned paper forms and PDFs go in, structured data comes out. Built to stop people retyping information from documents by hand.",
        customComponent: "ocr-flow",
      },
    ],
  },
  {
    title: "Accounting & Finance Automation", cols: 2,
    items: [
      { name: "Multi-Platform API Integrations", desc: "Xero, WorkflowMax, Glofox, Acorn, and JISR all connected. Every piece of data that used to be moved by hand between systems now moves on its own.", customComponent: "api-platforms" },
      { name: "Invoice, PO & Quote Automation", desc: "Jobs complete, invoices go out. POs get raised. Quotes get sent. All without anyone triggering it manually.", customComponent: "invoice-po-flow" },
    ],
  },
  {
    title: "AI Agent Platforms",
    items: [
      {
        name: "Jagent",
        desc: "Ask it anything about your data. It queries the database, picks the right chart, and reports back in the chat. No dashboards to learn, no SQL to write.",
        customComponent: "jagent-flow",
      },
      { name: "MCP Host + Query Planner", desc: "You type a question. It reads the database schema, plans exactly which queries to run, runs them, and writes the answer back in the chat with charts if they help.", customComponent: "mcp-query-flow" },
      { name: "Auronexus", desc: "Give each AI agent a role and a channel. They pick up jobs, collaborate in chat, and get things done. No code to write, just define what each agent does.", customComponent: "auronexus-flow" },
      { name: "Gig Copilot", desc: "The AI drafts the artifact. You get a Telegram message with approve, revise, or reject buttons. Your GitHub activity gets turned into portfolio case studies automatically.", customComponent: "gig-copilot-flow" },
    ],
  },
  {
    title: "Data & Analytics Platforms",
    items: [
      { name: "Cannabis Market Concentration", desc: "HHI market-concentration pipeline over California cannabis license and sales data 2018–2024, ported from Stata to Python. Shows which counties and parent companies are consolidating the market.", customComponent: "cannabis-flow" },
      { name: "Jigsol OS ETL", desc: "Ingests data from every third-party integration, transforms it, and loads it into PostgreSQL as the system of record. Feeds every report and dashboard in Jigsol OS.", customComponent: "etl-flow" },
      { name: "E-commerce BI & Forecasting", desc: "Analytics reports, dashboards, and predictive models built for e-commerce clients. Covers inventory trends, sales forecasting, and demand planning.", customComponent: "ecommerce-bi-flow" },
      { name: "Stock Monitoring System", desc: "Watches inventory levels across 20+ e-commerce stores. Fires alerts when stock drops below thresholds so nothing goes out of stock unnoticed.", customComponent: "stock-flow" },
      { name: "Image Data Pipeline", desc: "Reads names from an Excel sheet, fetches images from Google, filters and ranks them by colour and resolution, and writes the results back to Excel.", customComponent: "image-pipeline-flow" },
    ],
  },
  {
    title: "Consumer & Personal Tools",
    items: [
      { name: "Best-Fit Haircut Detection", desc: "Take a selfie, get ranked haircut suggestions. Fine-tuned ViT classifier, MediaPipe facial geometry, full training pipeline, celebrity star-match database. Runs entirely offline.", customComponent: "haircut-flow" },
      { name: "Game Pass Search", desc: "Browses the full Xbox Game Pass catalog of 600+ games with AI genre tags, color-coded theme filters, and tier badges. Runs offline, no API key needed.", customComponent: "gamepass-flow" },
      { name: "Gig Radar", desc: "Upwork job intelligence: syncs jobs, profile, and contracts via OAuth2 and GraphQL. Scores each job with an editable rule engine and shows a receipt-style breakdown of which rules fired.", customComponent: "gig-radar-flow" },
      { name: "FormForge", desc: "Upload a scanned paper form, draw boxes over each field, and generate filled copies. Works for Arabic and English in the same form. Bulk-fill hundreds from an Excel sheet.", customComponent: "formforge-flow" },
      { name: "pycaps", desc: "Adds animated CSS-styled subtitles to videos. Give it a video and a style, get back a file ready for TikTok, YouTube Shorts, or Instagram Reels.", customComponent: "pycaps-flow" },
      { name: "worldmonitor", desc: "Real-time global intelligence dashboard. Live news, geopolitical map, AI-powered instability scoring, conflict zones, military activity, and country risk index.", customComponent: "worldmonitor-flow" },
      { name: "YouTube Automation", desc: "Automates a YouTube channel end to end: content scheduling, description generation, thumbnail creation, and upload — so the channel runs without anyone doing it manually.", customComponent: "youtube-flow" },
    ],
  },
  {
    title: "PlayStation Platform",
    items: [
      { name: "PlayStation Cafe Manager", desc: "Full management system for a PlayStation gaming cafe. Book rooms, track sessions with live timers, manage PS4/PS5 devices, run a kitchen, handle stock, and generate daily financial reports. Arabic RTL interface.", customComponent: "ps-platform-flow" },
    ],
  },
  {
    title: "Cybersecurity & Reverse Engineering",
    items: [
      { name: "NoPhishyZeta", desc: "Scans incoming emails for phishing URLs using an ML model. Moves malicious emails to trash automatically so the inbox stays clean.", customComponent: "phishing-flow" },
      { name: "MalwareDB", desc: "Downloads malware sample feeds daily, extracts them, hashes every file with MD5/SHA1/SHA256, and organises the collection into a searchable, hash-indexed local dataset.", customComponent: "malwaredb-flow" },
    ],
  },
  {
    title: "Infrastructure & Monitoring",
    items: [
      { name: "Grafana Dashboards", desc: "Production observability across every API integration: span rates, p95 latency, error rates, and distributed traces per service. Covers Xero, Glofox, JISR, and WorkflowMax pipelines live.", customComponent: "grafana-flow" },
      { name: "F5 VPN Container", desc: "Containerised F5 BIG-IP VPN client. Runs the F5 session entirely inside Docker so the VPN is isolated from the host system and can be scripted and automated.", customComponent: "vpn-flow" },
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
      "ETL pipelines and data infrastructure for Jigsol OS. ingestion, transformation, and reporting with PostgreSQL; third-party API layer (jigsolos_data) documented in Confluence",
      "HMRC-compliant payroll module (FPS/CIS submissions) on FastAPI + Docker (jigsolOS_payroll)",
      "Jagent. headless, multi-tenant AI agent service (jigsolos_agent): persistent memory, isolated per-session code execution, credential vault, MCP host with stdio + streamable-HTTP transports",
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
      "autari-landing: Next.js 15 validation landing page with Stripe deposit flow and Google Sheets survey capture. deployed on Netlify at autari.co.uk",
      "autari-web-portal: Customer + staff web portal (Next.js BFF). account dashboard, billing, device-locked license management, staff admin console with fulfill/revoke/refund flows",
      "autari-license-server: Python license backend. seat management, device-locking, signed activation tokens, payments",
      "autari-desktop: Tauri + React desktop app with per-device activation",
      "autari-brain: AI Query Engine (MindsDB fork). natural-language queries over connected data sources via HTTP :47334 and MySQL :47335",
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
      "Python/Airflow ETL system integrating BigChange field service platform with Xero accounting. automating job, quote, invoice, and purchase-order workflows end to end",
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
      "ET System (above). telecom portal automation with Go+Python worker split and resilient proxy pool",
      "Full automation suite for the BigChange field service platform. job scheduling, quoting, invoicing",
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
  { name: "AI Engineer for Developers. Associate", issuer: "DataCamp", url: "https://www.datacamp.com/certificate/AIEDA0010363096562" },
  { name: "Data Visualization with Python", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/U6HCZ8Q9XA5X" },
  { name: "Data Analysis with Python", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/V9GRVQ7DBQMV" },
  { name: "Applied Data Science Capstone", issuer: "IBM / Coursera", date: "Aug 2020", url: "https://www.coursera.org/account/accomplishments/certificate/3QVGKBYTLUWG" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM / Coursera", date: "Jul 2020", url: "https://www.coursera.org/account/accomplishments/certificate/PNA2U45KH689" },
  { name: "Software Engineering Programme", issuer: "ALX Africa", date: "2023", url: undefined },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */


/* ── 13 new card components ── */

function CannabisFlow() {
  const pills = ["Python", "Pandas", "Matplotlib", "Seaborn", "Stata"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Market concentration · HHI analysis</span><div className="h-px flex-1 bg-spark/20" /></div>
      <svg viewBox="0 0 320 120" width="100%" style={{ display: "block" }}>
        <defs><linearGradient id="hhi-g" x1="0" x2="0" y1="1" y2="0"><stop offset="0%" stopColor="#0E7C66"/><stop offset="100%" stopColor="#19D3A2"/></linearGradient></defs>
        {[60,90,75,110,85,130,100,140,120,160].map((h, i) => (
          <rect key={i} x={10+i*30} y={120-h} width={20} height={h} rx={3} fill="url(#hhi-g)" opacity={0.7+(i*0.03)} />
        ))}
        <polyline points="20,60 50,30 80,45 110,10 140,25 170,5 200,20 230,0 260,15 290,5" fill="none" stroke="#19D3A2" strokeWidth={2} strokeDasharray="4 2" />
        <text x="4" y="115" fontSize="9" fill="rgba(234,242,239,0.4)" fontFamily="system-ui">HHI</text>
        <text x="4" y="10" fontSize="8" fill="rgba(234,242,239,0.3)" fontFamily="system-ui">Concentration trend 2018–2024</text>
      </svg>
      <div className="flex flex-wrap gap-1.5">{pills.map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
    </div>
  );
}

function ETLFlow() {
  const steps = [
    { label: "Source APIs", flow: "Xero, Glofox, JISR, WorkflowMax — pulled on schedule" },
    { label: "Transform", flow: "Clean, normalise, and validate each payload" },
    { label: "Load to PostgreSQL", flow: "System of record for every report and dashboard" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · FastAPI · PostgreSQL · Docker</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex items-center gap-2">
        {["APIs", "→", "Transform", "→"].map((s, i) => (
          s === "→" ? <svg key={i} viewBox="0 0 16 10" width="16" height="10" className="shrink-0"><line x1="0" y1="5" x2="12" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/><polygon points="10,2 14,5 10,8" fill="rgba(25,211,162,0.5)"/></svg>
          : <div key={i} className="flex-1 flex items-center justify-center glass rounded-lg py-2"><span className="text-[11px] font-semibold text-fga/70">{s}</span></div>
        ))}
        <div className="flex-1 flex items-center justify-center gap-1.5 glass rounded-lg py-2 px-2">
          <img src="/media/portfolio/mcp-query/postgresql.svg" alt="PostgreSQL" className="h-4 w-4 object-contain" />
          <span className="text-[10px] font-semibold text-fga/70">PostgreSQL</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">{steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
          <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i+1}</span>
          <span className="text-[10px] font-semibold text-fga/70 w-28 shrink-0">{s.label}</span>
          <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
        </div>
      ))}</div>
    </div>
  );
}

const ECOMBI_SCREENSHOTS = [
  { src: "/media/portfolio/analytics/metabase-dashboard.webp", caption: "BI dashboard: revenue trends, order volumes, and product performance over time" },
];
function EcommerceBIFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Pandas · NumPy · Matplotlib · Seaborn</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 flex-1">
          <img src="/media/portfolio/analytics/pandas.svg" alt="Pandas" className="h-5 w-5 object-contain" />
          <span className="text-[10px] font-semibold text-fga/70">Pandas</span>
        </div>
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 flex-1">
          <img src="/media/portfolio/analytics/numpy.svg" alt="NumPy" className="h-5 w-5 object-contain" />
          <span className="text-[10px] font-semibold text-fga/70">NumPy</span>
        </div>
      </div>
      <Carousel images={ECOMBI_SCREENSHOTS} />
    </div>
  );
}

function StockFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · Shopify API · REST APIs</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5">
        <img src="/media/portfolio/stock/shopify.svg" alt="Shopify" className="h-5 w-5 object-contain" />
        <span className="text-[10px] font-semibold text-fga/70">20+ stores monitored</span>
      </div>
      <svg viewBox="0 0 300 80" width="100%" style={{ display: "block" }}>
        {[
          { x: 10, h: 55, label: "Store 1", ok: true },
          { x: 110, h: 20, label: "Store 2", ok: false },
          { x: 210, h: 60, label: "Store 3", ok: true },
        ].map(s => (
          <g key={s.x}>
            <rect x={s.x} y={75-s.h} width={80} height={s.h} rx={4} fill={s.ok ? "rgba(25,211,162,0.35)" : "rgba(239,68,68,0.5)"} />
            <text x={s.x+40} y={74} textAnchor="middle" fontSize="8" fill="rgba(234,242,239,0.5)" fontFamily="system-ui">{s.label}</text>
            {!s.ok && <text x={s.x+40} y={55} textAnchor="middle" fontSize="8" fill="#EF4444" fontFamily="system-ui">⚠ LOW</text>}
          </g>
        ))}
      </svg>
      <div className="flex flex-wrap gap-1.5">{["Python","Shopify API","REST APIs","Alerts"].map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
    </div>
  );
}

function ImagePipelineFlow() {
  const steps = [
    { label: "Read Excel", flow: "Load names from the first three columns" },
    { label: "Fetch images", flow: "Google Image search per name" },
    { label: "Filter & rank", flow: "Sort by colour match and resolution" },
    { label: "Write Excel", flow: "Ranked image URLs written back to output file" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · Pandas · Pillow · Google Search</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex flex-col gap-2">{steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
          <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i+1}</span>
          <span className="text-[10px] font-semibold text-fga/70 w-24 shrink-0">{s.label}</span>
          <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
        </div>
      ))}</div>
    </div>
  );
}

function HaircutFlowCard() {
  const pills = ["Python","PyTorch","HuggingFace","MediaPipe","OpenCV"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Fine-tuned ViT · offline · CPU-only</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="bg-ink-800 rounded-xl overflow-hidden"><HaircutPipelineSVG /></div>
      <div className="flex flex-wrap gap-1.5">{pills.map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
    </div>
  );
}

function GigRadarFlow() {
  const logos = [
    { src: "/media/portfolio/gig-radar/github.svg", label: "OAuth2" },
    { src: "/media/portfolio/gig-radar/graphql.svg", label: "GraphQL" },
    { src: "/media/portfolio/gig-radar/react.svg", label: "React" },
    { src: "/media/portfolio/gig-radar/sqlite.svg", label: "SQLite" },
  ];
  const steps = [
    { label: "Sync", flow: "Jobs, profile, and contracts fetched via OAuth2 + GraphQL" },
    { label: "Store", flow: "Everything saved to a local SQLite database" },
    { label: "Score", flow: "Rule engine: field, operator, weight — fully editable" },
    { label: "Browse", flow: "React frontend with receipt-style score breakdown per job" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">FastAPI · React · SQLite · GraphQL</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="grid grid-cols-4 gap-2">{logos.map(l => (
        <div key={l.label} className="flex flex-col items-center gap-1 glass rounded-xl py-2.5 px-2">
          <img src={l.src} alt={l.label} className="h-5 w-5 object-contain" />
          <span className="text-[9px] text-fga/50">{l.label}</span>
        </div>
      ))}</div>
      <div className="flex flex-col gap-2">{steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
          <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i+1}</span>
          <span className="text-[10px] font-semibold text-fga/70 w-16 shrink-0">{s.label}</span>
          <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
        </div>
      ))}</div>
    </div>
  );
}

const PYCAPS_SCREENSHOTS = [
  { src: "/media/portfolio/pycaps/demo-1.gif", caption: "Animated styled subtitles on a vertical video" },
  { src: "/media/portfolio/pycaps/demo-2.gif", caption: "Different subtitle style on the same clip" },
];
function PycapsFlow() {
  const pills = ["Python","CSS","Playwright","ffmpeg"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · CSS subtitles · TikTok/Shorts/Reels</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex flex-wrap gap-1.5">{pills.map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
      <Carousel images={PYCAPS_SCREENSHOTS} />
    </div>
  );
}

const WORLDMONITOR_SCREENSHOTS = [
  { src: "/media/portfolio/worldmonitor/dashboard.png", caption: "Global situation map: conflict zones, intel hotspots, live news, AI strategic posture, country instability index" },
];
function WorldMonitorFlow() {
  const pills = ["TypeScript","React","AI insights","Live data"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">TypeScript · React · Live geopolitical data</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex flex-wrap gap-1.5">{pills.map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
      <Carousel images={WORLDMONITOR_SCREENSHOTS} />
    </div>
  );
}


function PhishingFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · scikit-learn · Gmail API · ML</span><div className="h-px flex-1 bg-spark/20" /></div>
      <svg viewBox="0 0 300 90" width="100%" style={{ display: "block" }}>
        <rect x="10" y="20" width="80" height="50" rx="8" fill="rgba(25,211,162,0.12)" stroke="rgba(25,211,162,0.3)" strokeWidth="1"/>
        <text x="50" y="42" textAnchor="middle" fontSize="11" fill="rgba(234,242,239,0.7)" fontFamily="system-ui">✉</text>
        <text x="50" y="58" textAnchor="middle" fontSize="8" fill="rgba(234,242,239,0.4)" fontFamily="system-ui">Email in</text>
        <line x1="92" y1="45" x2="118" y2="45" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
        <polygon points="116,42 121,45 116,48" fill="rgba(25,211,162,0.4)"/>
        <rect x="120" y="20" width="80" height="50" rx="8" fill="rgba(14,124,102,0.2)" stroke="rgba(25,211,162,0.4)" strokeWidth="1"/>
        <text x="160" y="40" textAnchor="middle" fontSize="8" fill="rgba(234,242,239,0.6)" fontFamily="system-ui">ML Classifier</text>
        <text x="160" y="56" textAnchor="middle" fontSize="7" fill="rgba(234,242,239,0.35)" fontFamily="system-ui">URL analysis</text>
        <line x1="202" y1="35" x2="215" y2="25" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5"/>
        <line x1="202" y1="55" x2="215" y2="65" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
        <rect x="216" y="10" width="72" height="28" rx="6" fill="rgba(25,211,162,0.12)" stroke="rgba(25,211,162,0.3)" strokeWidth="1"/>
        <text x="252" y="29" textAnchor="middle" fontSize="8" fill="rgba(25,211,162,0.8)" fontFamily="system-ui">✓ Inbox</text>
        <rect x="216" y="52" width="72" height="28" rx="6" fill="rgba(239,68,68,0.12)" stroke="rgba(239,68,68,0.4)" strokeWidth="1"/>
        <text x="252" y="71" textAnchor="middle" fontSize="8" fill="rgba(239,68,68,0.8)" fontFamily="system-ui">🗑 Trash</text>
      </svg>
      <div className="flex flex-wrap gap-1.5">{["Python","scikit-learn","Gmail API","ML"].map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
    </div>
  );
}

function MalwareDBFlow() {
  const steps = [
    { label: "Download", flow: "Daily feed from MalwareBazaar, date range or full history" },
    { label: "Extract", flow: "Unzip with default password, prompt if it fails" },
    { label: "Hash", flow: "MD5, SHA1, and SHA256 computed per sample" },
    { label: "Organise", flow: "Files renamed by SHA256 hash, indexed for search" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · multithreading · SHA256 · MalwareBazaar</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex flex-col gap-2">{steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
          <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i+1}</span>
          <span className="text-[10px] font-semibold text-fga/70 w-20 shrink-0">{s.label}</span>
          <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
        </div>
      ))}</div>
    </div>
  );
}

function VPNFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2"><div className="h-px flex-1 bg-spark/20" /><span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Docker · F5 BIG-IP · Shell</span><div className="h-px flex-1 bg-spark/20" /></div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-3 flex-1">
          <img src="/media/portfolio/analytics/docker.svg" alt="Docker" className="h-5 w-5 object-contain" />
          <div>
            <div className="text-[10px] font-semibold text-fga/70">Docker container</div>
            <div className="text-[9px] text-fga/40">Isolated VPN session</div>
          </div>
        </div>
        <svg viewBox="0 0 24 10" width="24" height="10" className="shrink-0"><line x1="0" y1="5" x2="18" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/><polygon points="16,2 21,5 16,8" fill="rgba(25,211,162,0.5)"/></svg>
        <div className="glass rounded-xl px-4 py-3 flex-1">
          <div className="text-[10px] font-semibold text-fga/70">F5 BIG-IP</div>
          <div className="text-[9px] text-fga/40">VPN client inside</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">{["Docker","F5 BIG-IP","Shell","Scriptable"].map(t => <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>)}</div>
    </div>
  );
}

const XERO_SCREENSHOTS = [
  { src: "/media/portfolio/bigchange-xero/bigchange-scheduling.png", caption: "BigChange: job scheduling and field team dispatch" },
  { src: "/media/portfolio/bigchange-xero/bigchange-invoices.png", caption: "BigChange: invoices generated automatically after job completion" },
  { src: "/media/portfolio/bigchange-xero/bigchange-quotes.png", caption: "BigChange: quotes created and sent without manual entry" },
  { src: "/media/portfolio/bigchange-xero/xero-dashboard.jpg", caption: "Xero: accounting dashboard updated automatically" },
  { src: "/media/portfolio/bigchange-xero/xero-po-create.svg", caption: "Xero: purchase orders created and tracked" },
];

const INVOICE_SCREENSHOTS = [
  { src: "/media/portfolio/bigchange-xero/bigchange-invoices.png", caption: "Invoice raised automatically in BigChange when the job is marked complete" },
  { src: "/media/portfolio/bigchange-xero/bigchange-quotes.png", caption: "Quote generated and sent without anyone typing it up" },
  { src: "/media/portfolio/bigchange-xero/xero-po-create.svg", caption: "Purchase order created and tracked in Xero without manual entry" },
  { src: "/media/portfolio/bigchange-xero/xero-dashboard.jpg", caption: "Xero accounting dashboard updated in real time as jobs complete" },
];

function InvoicePOFlow() {
  const flows = [
    { label: "Quotes", logo: "/media/portfolio/bigchange-xero/bigchange-logo.svg", bg: "#003B6B", flow: "Generated and sent when a job is scoped" },
    { label: "Invoices", logo: "/media/portfolio/bigchange-xero/bigchange-logo.svg", bg: "#003B6B", flow: "Raised automatically when a job is completed" },
    { label: "Purchase Orders", logo: "/media/portfolio/bigchange-xero/xero.svg", bg: "#fff", flow: "Created and tracked in Xero without manual entry" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Billing layer</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="flex flex-col gap-2">
        {flows.map((f) => (
          <div key={f.label} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <div className="shrink-0 w-20 h-9 flex items-center justify-center rounded-lg px-2" style={{ background: f.bg }}>
              <img src={f.logo} alt={f.label} className="max-h-6 w-auto object-contain" />
            </div>
            <svg viewBox="0 0 24 10" width="24" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="18" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/>
              <polygon points="16,2 21,5 16,8" fill="rgba(25,211,162,0.6)"/>
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-fga/70 mb-0.5">{f.label}</div>
              <div className="text-[10px] text-fga/40 leading-snug">{f.flow}</div>
            </div>
          </div>
        ))}
      </div>
      <Carousel images={INVOICE_SCREENSHOTS} />
    </div>
  );
}

function BigChangeXeroFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* Logo row: BigChange → Airflow → Xero */}
      <div className="flex items-center gap-2">
        {/* BigChange */}
        <div className="flex-1 flex flex-col items-center gap-1.5">
          <div className="w-full flex items-center justify-center bg-[#003B6B] rounded-lg px-3 py-2 h-12">
            <img src="/media/portfolio/bigchange-xero/bigchange-logo.svg" alt="BigChange" className="h-6 w-auto object-contain" />
          </div>
          <span className="text-[9px] text-fga/40 tracking-wide">Field service</span>
        </div>
        {/* Airflow middle */}
        <div className="flex flex-col items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 6 12" width="6" height="12"><line x1="3" y1="0" x2="3" y2="12" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5"/><polygon points="0,9 3,12 6,9" fill="rgba(25,211,162,0.4)"/></svg>
            <div className="flex flex-col items-center justify-center bg-[#017CEE]/15 border border-[#017CEE]/40 rounded-lg px-3 py-2 h-12">
              <img src="/media/portfolio/bigchange-xero/airflow-logo.svg" alt="Apache Airflow" className="h-6 w-6 object-contain" />
            </div>
            <svg viewBox="0 0 6 12" width="6" height="12"><line x1="3" y1="0" x2="3" y2="12" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5"/><polygon points="0,9 3,12 6,9" fill="rgba(25,211,162,0.4)"/></svg>
          </div>
          <span className="text-[9px] text-[#017CEE]/70 tracking-wide">Airflow</span>
        </div>
        {/* Xero */}
        <div className="flex-1 flex flex-col items-center gap-1.5">
          <div className="w-full flex items-center justify-center bg-white rounded-lg px-3 py-2 h-12">
            <img src="/media/portfolio/bigchange-xero/xero.svg" alt="Xero" className="h-6 w-auto object-contain" />
          </div>
          <span className="text-[9px] text-fga/40 tracking-wide">Accounting</span>
        </div>
      </div>
      {/* Screenshot carousel */}
      <Carousel images={XERO_SCREENSHOTS} />
    </div>
  );
}

const YOUTUBE_SCREENSHOTS = [
  { src: "/media/portfolio/youtube/demo.gif", caption: "YouTube automation in action: end-to-end channel management running automatically" },
];

function YoutubeFlow() {
  const steps = [
    { label: "Schedule content", flow: "Decide what goes up and when, once" },
    { label: "Generate descriptions", flow: "AI writes the copy for every upload" },
    { label: "Create thumbnails", flow: "Thumbnails produced automatically" },
    { label: "Upload and publish", flow: "Video goes live without anyone touching it" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · YouTube API · AI</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
            <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i + 1}</span>
            <span className="text-[10px] font-semibold text-fga/70 w-32 shrink-0">{s.label}</span>
            <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
          </div>
        ))}
      </div>
      <Carousel images={YOUTUBE_SCREENSHOTS} />
    </div>
  );
}

const GRAFANA_SCREENSHOTS = [
  { src: "/media/portfolio/grafana/grafana-013838.png", caption: "Dashboard library: Glofox, JISR, WorkflowMax, and Xero request pipelines with OTel traces and RED metrics" },
  { src: "/media/portfolio/grafana/grafana-013848.png", caption: "Glofox pipeline: span rate, p95 latency, error rate, and live distributed traces" },
  { src: "/media/portfolio/grafana/grafana-013857.png", caption: "Xero pipeline: API span rate by service, p95 duration per operation, error traces" },
  { src: "/media/portfolio/grafana/grafana-013914.png", caption: "Service RED metrics: rate, errors, and latency across all Jigsol OS services" },
  { src: "/media/portfolio/grafana/grafana-013924.png", caption: "Infrastructure hosts: system-level metrics across production servers" },
];

function GrafanaFlow() {
  const services = ["Xero", "Glofox", "JISR", "WorkflowMax", "PostgreSQL", "Infra"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Grafana · OpenTelemetry · RED metrics</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {services.map((s) => (
          <div key={s} className="glass rounded-xl px-3 py-2 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-spark/70 shrink-0" />
            <span className="text-[10px] font-semibold text-fga/70">{s}</span>
          </div>
        ))}
      </div>
      <Carousel images={GRAFANA_SCREENSHOTS} />
    </div>
  );
}

const FORMFORGE_SCREENSHOTS = [
  { src: "/media/portfolio/formforge/demo.gif", caption: "FormForge filling a registration form: Full Name, Date of Birth with separate day/month/year cells, ID number cells, and gender checkboxes" },
];

function FormForgeFlow() {
  const steps = [
    { label: "Upload template", flow: "Scan or photograph the blank paper form" },
    { label: "Draw field boxes", flow: "Click to place boxes over each field in the UI" },
    { label: "Paste your data", flow: "Type one entry or load an Excel sheet for bulk" },
    { label: "Get filled copies", flow: "Each row becomes a completed form, ready to print" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Python · Pillow · Arabic RTL + English</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
            <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i + 1}</span>
            <span className="text-[10px] font-semibold text-fga/70 w-28 shrink-0">{s.label}</span>
            <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
          </div>
        ))}
      </div>
      <Carousel images={FORMFORGE_SCREENSHOTS} />
    </div>
  );
}

const GAMEPASS_SCREENSHOTS = [
  { src: "/media/portfolio/gamepass/demo.gif", caption: "Full catalog browser: 626 games, genre filters, tier badges, live counts" },
  { src: "/media/portfolio/gamepass/screenshot-browse.png", caption: "Browse view: AI-classified genre and theme tags, paginated grid with artwork" },
  { src: "/media/portfolio/gamepass/screenshot-filter.png", caption: "Faceted filtering: include or exclude genres and themes simultaneously" },
  { src: "/media/portfolio/gamepass/screenshot-modal.png", caption: "Game detail: full description, tags, and tier information" },
];

function GamepassFlow() {
  const tech = ["Electron", "React", "SQLite", "Transformers.js", "Xbox API"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <img src="/media/portfolio/gamepass/icon.svg" alt="Game Pass" className="h-8 w-8 object-contain" />
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Desktop · Offline · 600+ games</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="flex flex-wrap gap-1.5">
        {tech.map((t) => (
          <span key={t} className="text-[10px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{t}</span>
        ))}
      </div>
      <Carousel images={GAMEPASS_SCREENSHOTS} />
    </div>
  );
}

const PS_SCREENSHOTS = [
  { src: "/media/portfolio/ps-platform/ps-012448.png", caption: "Rooms: live session timers, single and multiplayer modes, device selector per room" },
  { src: "/media/portfolio/ps-platform/ps-012504.png", caption: "Devices: PS4 and PS5 inventory with per-room assignment and pricing" },
  { src: "/media/portfolio/ps-platform/ps-012510.png", caption: "Kitchen: menu items with quantities and prices, PDF print button" },
  { src: "/media/portfolio/ps-platform/ps-012456.png", caption: "Store: invoice creation with food and drinks added per session" },
  { src: "/media/portfolio/ps-platform/ps-012539.png", caption: "Reports: daily financial summary with discounts and net profit" },
  { src: "/media/portfolio/ps-platform/ps-012602.png", caption: "Stock: warehouse inventory management with original vs current price" },
  { src: "/media/portfolio/ps-platform/ps-012515.png", caption: "Accounting panel" },
  { src: "/media/portfolio/ps-platform/ps-012522.png", caption: "Expenses tracking" },
  { src: "/media/portfolio/ps-platform/ps-012556.png", caption: "Invoices list" },
  { src: "/media/portfolio/ps-platform/ps-012609.png", caption: "Admin dashboard" },
];

function PSPlatformFlow() {
  const modules = [
    { ar: "الغرف", en: "Rooms" },
    { ar: "الأجهزة", en: "Devices" },
    { ar: "المطبخ", en: "Kitchen" },
    { ar: "المخزن", en: "Stock" },
    { ar: "التقارير", en: "Reports" },
    { ar: "الفواتير", en: "Invoices" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Arabic RTL · Node.js + JavaScript</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {modules.map((m) => (
          <div key={m.en} className="glass rounded-xl px-3 py-2.5 flex flex-col items-end gap-0.5">
            <span className="text-sm font-bold text-fga/80">{m.ar}</span>
            <span className="text-[9px] text-fga/40">{m.en}</span>
          </div>
        ))}
      </div>
      <Carousel images={PS_SCREENSHOTS} />
    </div>
  );
}

const AUTARI_BRAIN_SCREENSHOTS = [
  { src: "/media/portfolio/autari-brain/mysql-sql-editor.gif", caption: "MySQL Workbench connected to Autari Brain: write SQL, get AI-powered results from any data source" },
  { src: "/media/portfolio/autari-brain/mysql-performance.png", caption: "Performance dashboard: monitor queries, connections, and throughput in real time" },
];

function AutariBrainFlow() {
  const interfaces = [
    { label: "HTTP :47334", desc: "REST API — any client" },
    { label: "MySQL :47335", desc: "Any SQL tool connects" },
  ];
  const sources = ["Databases", "Spreadsheets", "APIs", "Files"];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* Header: MindsDB fork + interfaces */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 glass rounded-xl px-3 py-2.5 shrink-0">
          <img src="/media/portfolio/autari-brain/mindsdb-logo.png" alt="MindsDB" className="h-6 w-6 rounded object-cover" />
          <span className="text-[10px] font-semibold text-fga/70">MindsDB fork</span>
        </div>
        <svg viewBox="0 0 16 10" width="16" height="10" className="shrink-0">
          <line x1="0" y1="5" x2="12" y2="5" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
          <polygon points="10,2 14,5 10,8" fill="rgba(25,211,162,0.4)"/>
        </svg>
        <div className="flex flex-col gap-1.5 flex-1">
          {interfaces.map((iface) => (
            <div key={iface.label} className="flex items-center gap-2 glass rounded-lg px-3 py-1.5">
              <img src="/media/portfolio/autari-brain/mysql.svg" alt="MySQL" className="h-4 w-4 object-contain" />
              <span className="text-[9px] font-mono text-spark/80">{iface.label}</span>
              <span className="text-[9px] text-fga/40">{iface.desc}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Connected sources */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] text-fga/40 shrink-0">connects to</span>
        <div className="flex flex-wrap gap-1.5 flex-1">
          {sources.map((s) => (
            <span key={s} className="text-[9px] font-semibold text-fga/60 border border-white/10 rounded-full px-2.5 py-1">{s}</span>
          ))}
        </div>
      </div>
      <Carousel images={AUTARI_BRAIN_SCREENSHOTS} />
    </div>
  );
}

const GIG_COPILOT_SCREENSHOTS = [
  { src: "/media/portfolio/gig-copilot/telegram-inline-keyboard.png", caption: "Approve, revise, or reject — one tap in Telegram decides what happens to the draft" },
  { src: "/media/portfolio/gig-copilot/telegram-bot-interface.png", caption: "The bot sends the artifact, you reply. No dashboards, no logins, just Telegram" },
];

function GigCopilotFlow() {
  const stack = [
    { label: "Telegram", logo: "/media/portfolio/gig-copilot/telegram.svg", bg: "#0088CC20", border: "#0088CC40", desc: "Review interface" },
    { label: "GitHub", logo: "/media/portfolio/gig-copilot/github.svg", bg: "#ffffff10", border: "#ffffff25", desc: "Activity watcher" },
    { label: "FastAPI", logo: "/media/portfolio/gig-copilot/fastapi.svg", bg: "#00968820", border: "#00968840", desc: "Backend & queue" },
  ];
  const steps = [
    { label: "GitHub activity detected", flow: "New commit, PR, or push triggers the watcher" },
    { label: "AI drafts the artifact", flow: "Case study, summary, or task written automatically" },
    { label: "You get a Telegram message", flow: "Approve keeps it. Revise sends feedback. Reject drops it." },
    { label: "Approved artifacts saved", flow: "Land in SQLite, ready to use or publish" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        {stack.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-center justify-center gap-2 rounded-lg px-2 py-2 h-12" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                <img src={s.logo} alt={s.label} className="h-5 w-5 object-contain" />
                <span className="text-[10px] font-semibold text-fga/70">{s.label}</span>
              </div>
              <span className="text-[9px] text-fga/40">{s.desc}</span>
            </div>
            {i < stack.length - 1 && (
              <svg viewBox="0 0 16 10" width="16" height="10" className="shrink-0 mb-3">
                <line x1="0" y1="5" x2="12" y2="5" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
                <polygon points="10,2 14,5 10,8" fill="rgba(25,211,162,0.4)"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
            <span className="shrink-0 text-[10px] font-bold text-spark/70 w-5">{i + 1}</span>
            <span className="text-[10px] font-semibold text-fga/70 w-36 shrink-0">{s.label}</span>
            <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
          </div>
        ))}
      </div>
      <Carousel images={GIG_COPILOT_SCREENSHOTS} />
    </div>
  );
}

const AURONEXUS_SCREENSHOTS = [
  { src: "/media/portfolio/auronexus/auronexus-agents-chat.png", caption: "AI agents working in a channel: claude finds the bug, codex reviews the code, gemini runs the security scan" },
];

function AuronexusFlow() {
  const agents = [
    { role: "Designer", name: "claude", color: "#7C5CFF" },
    { role: "Reviewer", name: "codex", color: "#19D3A2" },
    { role: "Security", name: "gemini", color: "#FF5A50" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* CrewAI powered */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 flex-1">
          <img src="/media/portfolio/auronexus/crewai.svg" alt="CrewAI" className="h-5 w-5 object-contain" />
          <span className="text-[11px] font-semibold text-fga/70">Powered by CrewAI</span>
        </div>
        <div className="flex items-center gap-2 glass rounded-xl px-4 py-2.5 flex-1">
          <span className="text-[11px] text-fga/50">Visual agent builder</span>
        </div>
      </div>
      {/* Agent roles */}
      <div className="flex flex-col gap-2">
        {agents.map((a) => (
          <div key={a.name} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ background: a.color }}>
              {a.name[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-semibold text-fga/75">{a.name}</span>
              <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded-full border" style={{ color: a.color, borderColor: a.color + "40" }}>{a.role}</span>
            </div>
            <svg viewBox="0 0 24 10" width="24" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="18" y2="5" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
              <polygon points="16,2 21,5 16,8" fill="rgba(25,211,162,0.4)"/>
            </svg>
            <span className="text-[10px] text-fga/40">picks up jobs in channel</span>
          </div>
        ))}
      </div>
      <Carousel images={AURONEXUS_SCREENSHOTS} />
    </div>
  );
}

const MCP_SCREENSHOTS = [
  { src: "/media/portfolio/mcp-query/nlq-demo.gif", caption: "Natural language querying in action: type a question, get results back immediately" },
  { src: "/media/portfolio/mcp-query/pgadmin-dashboard.webp", caption: "PostgreSQL live: server sessions, transactions per second, and block I/O monitored in real time" },
  { src: "/media/portfolio/mcp-query/pgadmin-activity.webp", caption: "Active query sessions: every connection tracked live, query start times and wait events visible" },
];

function MCPQueryFlow() {
  const stack = [
    { label: "PostgreSQL", logo: "/media/portfolio/mcp-query/postgresql.svg", bg: "#1a1a2e", desc: "Connected data source" },
    { label: "MCP Protocol", logo: "/media/portfolio/mcp-query/anthropic.svg", bg: "#191919", desc: "Tool connection layer" },
    { label: "Python", logo: "/media/portfolio/ocr/python-logo.svg", bg: "#1a2035", desc: "Execution runtime" },
  ];

  const steps = [
    { label: "Read schema", flow: "Checks which tables and columns exist before writing any SQL" },
    { label: "Plan queries", flow: "Breaks the question into ordered, validated SQL or Python steps" },
    { label: "Run it", flow: "Executes against the real database — no simulated data" },
    { label: "Report back", flow: "Writes the result in chat with charts if they help" },
  ];

  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* Stack row */}
      <div className="flex items-center gap-2">
        {stack.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col items-center justify-center rounded-lg px-2 py-2 h-12 gap-1" style={{ background: s.bg }}>
                <img src={s.logo} alt={s.label} className="h-5 w-auto object-contain" />
              </div>
              <span className="text-[9px] text-fga/40">{s.desc}</span>
            </div>
            {i < stack.length - 1 && (
              <svg viewBox="0 0 16 10" width="16" height="10" className="shrink-0 mb-3">
                <line x1="0" y1="5" x2="12" y2="5" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5" strokeDasharray="3 2"/>
                <polygon points="10,2 14,5 10,8" fill="rgba(25,211,162,0.4)"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Pipeline steps */}
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3 glass rounded-xl px-4 py-2.5">
            <span className="shrink-0 text-[10px] font-bold text-spark/70 w-6">{i + 1}</span>
            <span className="text-[10px] font-semibold text-fga/70 w-24 shrink-0">{s.label}</span>
            <span className="text-[10px] text-fga/45 leading-snug flex-1">{s.flow}</span>
          </div>
        ))}
      </div>
      <Carousel images={MCP_SCREENSHOTS} />
    </div>
  );
}

const JAGENT_SCREENSHOTS = [
  { src: "/media/portfolio/jagent/jagent-dashboard-chat.png", caption: "Jagent embedded in a live analytics dashboard — ask questions while looking at the data" },
  { src: "/media/portfolio/jagent/jagent-tables.png", caption: "Plain English question, structured table back — office locations and active staff counts from the database" },
  { src: "/media/portfolio/jagent/jagent-charts.png", caption: "Ask for charts, get charts — Jagent picks the right visualisation automatically" },
  { src: "/media/portfolio/jagent/jagent-office-query.png", caption: "Drill into the data across turns — each answer cites the exact SQL source it used" },
];

function JagentFlow() {
  const features = [
    { label: "Natural language", flow: "Type a question, get a table or chart — no SQL needed" },
    { label: "Persistent memory", flow: "Remembers context across turns in the same session" },
    { label: "Credential vault", flow: "Secrets stay out of the LLM context entirely" },
    { label: "MCP tools", flow: "Connects to any MCP server as a native tool" },
  ];
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">AI agent service</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>
      <div className="flex flex-col gap-2">
        {features.map((f) => (
          <div key={f.label} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <div className="shrink-0 w-32 flex items-center justify-center">
              <span className="text-[10px] font-semibold text-spark/80">{f.label}</span>
            </div>
            <svg viewBox="0 0 24 10" width="24" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="18" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/>
              <polygon points="16,2 21,5 16,8" fill="rgba(25,211,162,0.6)"/>
            </svg>
            <div className="text-[10px] text-fga/50 leading-snug flex-1">{f.flow}</div>
          </div>
        ))}
      </div>
      <Carousel images={JAGENT_SCREENSHOTS} />
    </div>
  );
}

const BIGCHANGE_SCREENSHOTS = [
  { src: "/media/portfolio/bigchange-xero/bigchange-tracking.webp", caption: "Live tracking: see every engineer on the map in real time" },
  { src: "/media/portfolio/bigchange-xero/bigchange-crm.png", caption: "Customer records: contact, location, and job history in one place" },
  { src: "/media/portfolio/bigchange-xero/bigchange-sales.png", caption: "Sales pipeline: every opportunity tracked automatically" },
  { src: "/media/portfolio/bigchange-xero/bigchange-alerts.png", caption: "Alerts: the system flags issues before anyone misses them" },
];

const OCR_SCREENSHOTS = [
  { src: "/media/portfolio/ocr/invoice-ocr-1.jpg", caption: "Automated invoice processing: image in, structured data out, no manual entry" },
  { src: "/media/portfolio/ocr/invoice-ocr-2.jpg", caption: "Traditional vs automated: human reviewers replaced by a validated extraction pipeline" },
  { src: "/media/portfolio/ocr/ocr-process.jpg", caption: "The pipeline: scanned documents and PDFs go in, text and database records come out" },
];

const API_SCREENSHOTS = [
  { src: "/media/portfolio/api-integrations/automation-trigger-action.jpg", caption: "Every integration follows the same logic: something happens in one system, something happens automatically in another" },
  { src: "/media/portfolio/api-integrations/automation-outline.jpg", caption: "The workflow before we automate it — people filling in blanks by hand. After: nothing to fill in." },
];

function APIPlatformsFlow() {
  const platforms = [
    { label: "Xero", logo: "/media/portfolio/api-integrations/xero.svg", bg: "#fff", flow: "Invoices, bills, POs sync automatically" },
    { label: "WorkflowMax", logo: "/media/portfolio/api-integrations/wfm.svg", bg: "#0A2F28", flow: "Jobs and timesheets pulled into reports" },
    { label: "Glofox", logo: "/media/portfolio/api-integrations/glofox.svg", bg: "#0d0d1a", flow: "Member data and bookings synced out" },
    { label: "Acorn", logo: "/media/portfolio/api-integrations/acorn.svg", bg: "#111", flow: "Learning records and completions tracked" },
    { label: "JISR", logo: "/media/portfolio/api-integrations/jisr.webp", bg: "#1B2B5C", flow: "Payroll and HR data pulled and reconciled" },
  ];

  return (
    <div className="w-full bg-ink-800 rounded-xl p-5 flex flex-col gap-3">
      {/* Label */}
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-spark/20" />
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-spark/60">Integration layer</span>
        <div className="h-px flex-1 bg-spark/20" />
      </div>

      {/* Platform rows */}
      <div className="flex flex-col gap-2">
        {platforms.map((p) => (
          <div key={p.label} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
            <div className="shrink-0 w-20 h-9 flex items-center justify-center rounded-lg px-2" style={{ background: p.bg }}>
              <img src={p.logo} alt={p.label} className="max-h-6 w-auto object-contain" />
            </div>
            <svg viewBox="0 0 24 10" width="24" height="10" className="shrink-0">
              <line x1="0" y1="5" x2="18" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5" strokeDasharray="3 2"/>
              <polygon points="16,2 21,5 16,8" fill="rgba(25,211,162,0.6)"/>
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-fga/70 mb-0.5">{p.label}</div>
              <div className="text-[10px] text-fga/40 leading-snug">{p.flow}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Automation concept carousel */}
      <Carousel images={API_SCREENSHOTS} />
    </div>
  );
}

function OCRPipelineFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* Tool row */}
      <div className="flex items-center gap-2">
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-2 py-2 h-12">
            <img src="/media/portfolio/ocr/opencv-logo.png" alt="OpenCV" className="h-7 w-auto object-contain" />
          </div>
          <span className="text-[9px] text-fga/40">OpenCV</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-2 py-2 h-12">
            <span className="text-sm font-bold text-fga/80">Tesseract</span>
          </div>
          <span className="text-[9px] text-fga/40">OCR engine</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-2 py-2 h-12">
            <span className="text-sm font-bold text-fga/80">PyMuPDF</span>
          </div>
          <span className="text-[9px] text-fga/40">PDF parser</span>
        </div>
      </div>
      {/* Flow: PDF → Read → Extract → Data */}
      <div className="flex items-center gap-1">
        {[
          { label: "PDF in" },
          { label: "Read" },
          { label: "Extract" },
          { label: "Data out" },
        ].map((s, i, arr) => (
          <React.Fragment key={s.label}>
            <div className="flex-1 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg py-2 px-1">
              <span className="text-[11px] font-semibold text-fga/70">{s.label}</span>
            </div>
            {i < arr.length - 1 && (
              <svg viewBox="0 0 14 10" width="14" height="10" className="shrink-0">
                <line x1="0" y1="5" x2="10" y2="5" stroke="rgba(25,211,162,0.4)" strokeWidth="1.5"/>
                <polygon points="8,2 12,5 8,8" fill="rgba(25,211,162,0.4)"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      <Carousel images={OCR_SCREENSHOTS} />
    </div>
  );
}

function BigChangeFlow() {
  return (
    <div className="w-full bg-ink-800 rounded-xl p-4 flex flex-col gap-4">
      {/* BigChange logo */}
      <div className="flex items-center justify-center bg-[#003B6B] rounded-lg px-4 py-3 h-14">
        <img src="/media/portfolio/bigchange-xero/bigchange-logo.svg" alt="BigChange" className="h-7 w-auto object-contain" />
      </div>
      {/* Flow: Jobs → Quotes → Invoices */}
      <div className="flex items-center gap-1">
        {["Jobs", "Quotes", "Invoices"].map((label, i) => (
          <React.Fragment key={label}>
            <div className="flex-1 flex items-center justify-center bg-[#003B6B]/40 border border-[#003B6B]/60 rounded-lg py-2 px-1">
              <span className="text-[11px] font-semibold text-fga/80">{label}</span>
            </div>
            {i < 2 && (
              <svg viewBox="0 0 16 10" width="16" height="10" className="shrink-0">
                <line x1="0" y1="5" x2="12" y2="5" stroke="rgba(25,211,162,0.5)" strokeWidth="1.5"/>
                <polygon points="10,2 14,5 10,8" fill="rgba(25,211,162,0.5)"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      <Carousel images={BIGCHANGE_SCREENSHOTS} />
    </div>
  );
}

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
      {/* Portfolio-specific nav — replaces section anchors with site links */}
      <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <div className="flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 glass-strong">
          <a href="/" aria-label="autari home" className="flex items-center pl-1">
            <img src="/logo_dark.png" alt="autari" className="h-7 w-auto object-contain" />
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="/" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">autari.co.uk</a>
            <a href="/#what-we-do" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">What we do</a>
            <a href="/#how-it-works" className="text-[11px] font-medium uppercase tracking-[0.14em] text-fga/60 hover:text-fga transition-colors">How it works</a>
          </div>
          <a href="/" className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] bg-spark text-ink shadow-[0_0_40px_-6px_rgba(25,211,162,0.5)] hover:bg-mint transition-all duration-300">
            Book a call
          </a>
        </div>
      </nav>

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
              Automation systems, AI agents, ETL pipelines, and full-stack products. built for UK and international clients since 2021.
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
                  <div className={`grid gap-5 ${"cols" in cat && cat.cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                    {cat.items.map((item) => (
                      <div key={item.name} className="glass glass-hover rounded-2xl overflow-hidden flex flex-col">
                        {"customComponent" in item && item.customComponent === "bigchange-xero" && (
                          <div className="p-4"><BigChangeXeroFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "bigchange-flow" && (
                          <div className="p-4"><BigChangeFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "ocr-flow" && (
                          <div className="p-4"><OCRPipelineFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "api-platforms" && (
                          <div className="p-4"><APIPlatformsFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "invoice-po-flow" && (
                          <div className="p-4"><InvoicePOFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "jagent-flow" && (
                          <div className="p-4"><JagentFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "mcp-query-flow" && (
                          <div className="p-4"><MCPQueryFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "auronexus-flow" && (
                          <div className="p-4"><AuronexusFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "gig-copilot-flow" && (
                          <div className="p-4"><GigCopilotFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "autari-brain-flow" && (
                          <div className="p-4"><AutariBrainFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "ps-platform-flow" && (
                          <div className="p-4"><PSPlatformFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "gamepass-flow" && (
                          <div className="p-4"><GamepassFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "formforge-flow" && (
                          <div className="p-4"><FormForgeFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "grafana-flow" && (
                          <div className="p-4"><GrafanaFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "youtube-flow" && (
                          <div className="p-4"><YoutubeFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "cannabis-flow" && (
                          <div className="p-4"><CannabisFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "etl-flow" && (
                          <div className="p-4"><ETLFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "ecommerce-bi-flow" && (
                          <div className="p-4"><EcommerceBIFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "stock-flow" && (
                          <div className="p-4"><StockFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "image-pipeline-flow" && (
                          <div className="p-4"><ImagePipelineFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "haircut-flow" && (
                          <div className="p-4"><HaircutFlowCard /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "gig-radar-flow" && (
                          <div className="p-4"><GigRadarFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "pycaps-flow" && (
                          <div className="p-4"><PycapsFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "worldmonitor-flow" && (
                          <div className="p-4"><WorldMonitorFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "phishing-flow" && (
                          <div className="p-4"><PhishingFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "malwaredb-flow" && (
                          <div className="p-4"><MalwareDBFlow /></div>
                        )}
                        {"customComponent" in item && item.customComponent === "vpn-flow" && (
                          <div className="p-4"><VPNFlow /></div>
                        )}
                        {"images" in item && Array.isArray(item.images) && item.images.length > 0 && (
                          <Carousel images={item.images as { src: string; caption: string }[]} />
                        )}
                        <div className="px-5 py-4">
                          <div className="text-sm font-semibold text-fga mb-0.5">{item.name}</div>
                          {"subtitle" in item && <div className="text-[10px] text-spark mb-1.5">{item.subtitle as string}</div>}
                          <div className="text-xs leading-relaxed text-fga/50">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                  Started freelancing in automation and data engineering on Upwork in 2021. Over five years that grew from scripts and dashboards into full ETL systems, AI agent services, and a consultancy. Autari. that runs production automation for businesses across the UK.
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
