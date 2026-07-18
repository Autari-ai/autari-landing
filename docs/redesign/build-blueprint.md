# Autari Build Blueprint — the templates, translated into our site

This is the PLAN FOR WHAT WE BUILD. The 15 studied templates are not decoration — they define the LOOK,
LAYOUT, and MOTION of each section, translated into Autari's dark-cinematic + green-glow direction and the
book-a-call model. Every section below names the template(s) it is built to feel like, and how.

**North star:** the site should feel like a AAA product film — the quality of t08 (dark AI), t28 (crystal
glass), t22 (smart-product 3D), t38 (glowing-environment) — recolored to Ink + Pine→Spark green, telling
one continuous story (the "Core"). **Positioning (NOT "AI employees"):** Autari **automates businesses and
work processes** — done-for-you automation of the repetitive tasks and workflows across any field (finance,
ops, support, sales, admin, engineering…). Frame: *"we build automations that run your busywork."* One CTA:
**Book a call → noor@autari.co.uk**.

---

## 1. Design system (derived from the study)

### Color tokens (globals.css `@theme`)
```
--ink-900:#0B0E12  (page base)     --ink-800:#101722   --ink-700:#14181F (current bark)
--pine:#0E7C66     --spark:#19D3A2  --mint:#5FF3C9 (bright tip)
--violet:#7C5CFF   (secondary rim accent, sparingly)
--glass-border: rgba(255,255,255,.10)   --glass-fill: rgba(255,255,255,.04)
--text: #EAF2EF    --text-dim: rgba(234,242,239,.62)   --text-faint: rgba(234,242,239,.40)
--glow-green: 0 0 80px rgba(25,211,162,.25)
```
Grain overlay (SVG/feTurbulence, ~3% opacity, fixed) over the whole page. Radial pine→spark aurora blobs,
very slow drift, behind the hero and CTA.

### Typography
- **Display:** Space Grotesk. Huge tight headlines `clamp(2.5rem, 7vw, 6.5rem)`, tracking `-0.03em`.
- **Eyebrow/label:** Space Grotesk, UPPERCASE, thin, wide `letter-spacing:.28em`, small — the t08/t21 look.
- **Numbered markers:** monospace/`tabular-nums`, `[001]` style — t08/t38.
- **One emotional serif headline** allowed (the problem or CTA line) — t28/t37 elegance. (Optional: a serif like "Instrument Serif" italic for one word.)
- **Body:** Inter, `text-dim`.

### Glass surface recipe (the aqua-glass/crystal look — t21/t28/t22)
`background: var(--glass-fill); backdrop-filter: blur(20px) saturate(120%); border:1px solid var(--glass-border);
border-radius:20px; box-shadow: inset 0 1px 0 rgba(255,255,255,.12), var(--glow-green);` + a faint top-edge
highlight. Hover: border brightens to spark, glow intensifies.

### Motion primitives (framer-motion) — all gated by `prefers-reduced-motion`
- **Reveal** — fade + 24px rise + slight blur-out, `whileInView`, staggered. (every section)
- **Parallax loop** — background media/gifs drift slower than scroll via `useScroll`+`useTransform`. (hero, problem, stats)
- **TiltPanel** — element enters rotated in 3D perspective (`rotateX/Y` ~8°) → settles flat on scroll. (t21/t22/t37) 
- **Scrub video** — a `<video>` whose `currentTime` is driven by scroll progress. (day-in-life; t01/t06 scene-morph)
- **Marquee** — infinite horizontal loop. (tools row; t06 rail idea)
- **Counter** — count-up when in view, `tabular-nums`. (stats; t09/t28/t38 chips)
- **Magnetic button + cursor glow** — CTA follows cursor slightly; a soft green glow trails the cursor. 
- **Ambient color-bleed backdrop** — a blurred, scaled copy of a section's media sits behind it, tinted green. (t27/t37/t38)
- **Living micro-motion** — floating chips/cards never fully rest: infinite tiny y/rotate drift. (OV/t38)
- **Text-behind-subject** — headline z-index between the media background and a cut-out foreground layer. (t24/t09/t01)

---

## 2. Component library (each maps to a template)

| Component | Built to feel like | What it is |
|-----------|--------------------|------------|
| `GlassNav` | t08 (chevron+MENU), t21 (centered icons) | sticky top pill nav; shrinks + blurs on scroll; right side = **Book a call** pill (magnetic) |
| `Eyebrow` | t08, t21 | thin wide uppercase label with a pulsing spark dot (reuse current `SectionLabel`) |
| `NumberedMarker` | t08 `[001]`, t38 `[001]…[005]` | mono index for steps/features |
| `StatChip` | t22 "24/7", t28 "164", t38 stat row, t29 gauge | glass chip: big number + tiny unit + small label; floats w/ micro-motion |
| `TiltPanel` | t21, t22, t37 | wrapper that does the 3D perspective tilt-in |
| `ServiceCard` | t06 carousel, t26 feature stack | glass card w/ cinematic thumbnail, title, "takes off your plate" line, tools row; hover tilt+glow |
| `ColorBleedBackdrop` | t27, t37, t38 | blurred scaled media behind a frame, green-tinted |
| `ScrollBadge` | t28/t37 "SCROLL DOWN", t21 radial "motion loop" | circular badge; the radial-dotted variant = "24/7 always-on" |
| `Marquee` | t06 rail | infinite tool-logo row |
| `ScrubVideo` | t01/t06 scene-morph | scroll-driven `<video>` |
| `MagneticButton` | (modern standard) | the Book-a-call CTA (mailto) |
| `AuroraGrain` | t08/t38 atmosphere | fixed aurora blobs + grain overlay |

---

## 3. Page blueprint — section by section

### 3.1 Nav — like **t08** + **t21**
Sticky glass pill. Left: Autari mark + wordmark. Center (desktop): How it works · What it does · FAQ.
Right: **Book a call** pill (mailto, magnetic). On scroll: height shrinks, blur + border appear. Mobile: mark + hamburger → glass sheet.

### 3.2 Hero — like **t08** (dark AI 3D) + **t22** (rounded card + stat chips) + **t24** (text-behind-subject)
- Full-bleed **`hero.mp4`** Core loop as background (parallax, muted, loop, poster fallback), with `AuroraGrain` + green god-ray gradient.
- Left negative space: `Eyebrow` (exact copy TBD by user) → headline built from the user's exact words: **"Automated work for your business and work processes."** → subhead (user to supply exact copy) → **Book a call** + "See how it works" (dual CTA, t37) → trust line.
- COPY RULE: use the user's exact wording. Do NOT invent taglines. Autari = automated work for businesses and work processes. Placeholder copy in constants.ts, user edits to their exact text.
- Floating `StatChip`s over the video (living micro-motion): **"40+ hrs/mo saved"**, **"runs 24/7"**, **"0 manual steps"**.
- `ScrollBadge` bottom.

### 3.3 Tool marquee — like **t06** rail
Thin line: eyebrow "Works inside the tools you already use" + infinite `Marquee` of monochrome tool logos (Teams, Jira, Slack, Gmail, Sheets, QuickBooks, HubSpot, Notion). Faint green data-stream loop behind (Scene 2). This is what broadens us past engineering.

### 3.4 The problem — like **t24** (text-behind-subject) + **t09** (crash-zoom emphasis) + color-bleed
- `ScrubVideo`/parallax of **Scene 1** (admin debris dissolving into green particles).
- Serif emotional headline: *"You didn't start your business to spend your days on admin."* with one italic word (t37/t24).
- Short copy: the repetitive work that eats your week — invoicing, data entry, ticket triage, chasing updates — quietly handled.

### 3.5 What it does — across fields — like **t06** (service carousel) + **t26** (feature stack) + **t38** (glowing vignettes)
Grid/carousel of 6 `ServiceCard`s, each with its **Scene 3** cinematic thumbnail (green-tinted, cohesive) + micro-loop on hover, a `NumberedMarker`, title, one-line "what it takes off your plate", and the tools it lives in:
Finance & bookkeeping · Customer support · Ops & admin · Engineering (draft review) · Sales & CRM · Something else.
Hover = tilt + glow (t06/t26). This section is the core of the broadened positioning.

### 3.6 How it works — like **t08** numbered columns + **t22** 3D tilt
Three `TiltPanel` steps with `NumberedMarker` `[001][002][003]` and their **Scene 4** loops, joined by a green line that draws itself on scroll:
`[001] Tell us the process` (the repetitive workflow you want gone) · `[002] We build the automation` (mapped to your tools + rules) · `[003] It runs on autopilot` (handles the work 24/7, flags a human only when something needs judgment).

### 3.7 Day in the life — the showpiece — like **t01/t06 scene-morph** (scrub) + **OV living motion**
Full-viewport pinned section. **Scene 5** clip is **scroll-scrubbed**: scrolling advances the AI employee through a day — panels light up as tasks complete, one escalates to a human node. Captions fade in per beat. Reduced-motion → static still + text list. This is the "gifs move as you scroll" moment.

### 3.8 Proof / stats — like **t09/t28/t38** floating chips + **t27** color-bleed
Big count-up numbers on floating `StatChip`s over **Scene 6** ambient field: hours saved / tasks handled / always-on / human-reviewed. `ColorBleedBackdrop` green.

### 3.9 Survey → Book a call — restyle current `Survey.tsx`, dark glass
Keep the 60-sec one-question-per-screen survey (re-skinned to dark glass + progress), **questions broadened to be field-agnostic** (not just engineering). Still POSTs to the Google Sheet. **Final screen → "Book a call"** (mailto with the answers prefilled into the body) instead of Stripe. No pricing anywhere.

### 3.10 FAQ — restyle current `FAQ.tsx`, dark glass accordion
Update answers: remove deposit/refund/pricing language; add consult framing ("we scope it on a call, then build it to your firm"). Keep data-safety, "vs Copilot", "what if it's wrong", "can I cancel".

### 3.11 Final CTA — like **t37/t28** elegance + **Scene 7** pull-back
Full-bleed **Scene 7** (Core, camera eases back, rays open). Serif headline *"Let's find the work to take off your plate."* + big **Book a call** magnetic button + email shown. `AuroraGrain`.

### 3.12 Footer — keep current, dark glass
Mark, one-liner, **UK Companies House trust signal** (keep), nav, `noor@autari.co.uk`.

---

## 4. Implementation
- Stays **Next.js 15 static export** (Netlify/autari.co.uk unchanged). framer-motion for all motion. Assets in `public/media/` as compressed `webm`+`mp4` + poster; lazy-load below-the-fold; IntersectionObserver play/pause; `prefers-reduced-motion` fallbacks.
- New/changed files: `globals.css` (dark theme tokens + grain/aurora), `lib/constants.ts` (broadened copy + roles + survey, remove Stripe), `lib/submitForm.ts` (keep sheet, drop Stripe route), new `components/ui/{StatChip,TiltPanel,ColorBleedBackdrop,ScrollBadge,Marquee,MagneticButton,AuroraGrain,ScrubVideo,NumberedMarker}.tsx`, new sections `{ToolMarquee,Problem,UseCases,DayInLife,Proof}.tsx`, rework `{Navbar,Hero,HowItWorks,Survey,FAQ,Footer}.tsx`.
- Perf budget: one autoplaying hero loop; everything else plays on view; posters everywhere; total hero media kept lean.

## 5. Build phases
1. **Theme + primitives** — dark tokens, grain/aurora, glass, motion primitives, nav. (reviewable live)
2. **Sections w/ hero + placeholders** — full page structure using `hero.mp4` and tasteful placeholders for the not-yet-generated scenes.
3. **Generate asset set** — Scenes 1,3(×6),4(×3),5,6,7 per the prompt bible (consistent Core via reference-passing), review as GIFs for cohesion.
4. **Wire assets + scrub + polish** — drop in real media, scroll-scrubbing, color-bleed, micro-motion, perf + reduced-motion pass.
5. **Deploy** — Netlify → autari.co.uk.
