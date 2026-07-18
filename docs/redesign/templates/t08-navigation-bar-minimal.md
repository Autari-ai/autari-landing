# t08 — navigation-bar-minimal
**Source / Duration / Orientation**
- Source: https://figma-templates-en.vercel.app/assets/template%208/navigation-bar-minimal.webm
- Duration: ~26.7s
- Orientation: Vertical/portrait capture (tall crop, ~9:16-ish framing in the source recording) showing a single-column dark hero that transitions into a slate-grey content panel on scroll/reveal.
- Reference frames studied: motion GIF (ambient hero loop, tight crop on the 3D energy sculpture only), frame A (`t08-a.jpeg`, full hero at ~0s), frame B (`t08-b.jpeg`, scrolled/revealed content section).

## Brand & story
This is a dark cyber/security/AI-infrastructure brand built entirely around the phrase **"AUTONOMOUS NETWORK CONTROL"**. The visual language is: black void + brushed-chrome wireframe sculpture + bleeding red laser/energy light, evoking a hacked network, a defense-grid AI, or an autonomous cybersecurity system taking control of a distributed network. Fictional company names used as filler copy (AdaptiveCore Labs, NeuroGrid Systems, QuantumShield Tech) confirm the story: a family/portfolio of AI-network-control products, each described by one of the three numbered columns. The tone is aggressive, technical, minimal — almost no color other than black/white/grey plus a single hot-red accent, which is exactly the kind of "one accent color carries all the energy" system Autari should copy (swapping red for green).

## Layout — zone by zone
Reading top-to-bottom as captured across frame A (hero) and frame B (first scrolled content section):

1. **Top navigation bar (revealed on scroll, frame B)** — a thin horizontal strip pinned above the content panel, only ~40px tall:
   - Left ~55% of the strip: a horizontal gradient/texture bar fading from bright red-and-black wire texture (a cropped sliver of the hero sculpture) on the far left into flat dark on the right — essentially a "bleed" of the hero art used as a decorative nav-bar background rather than a solid color.
   - Center: a small dark charcoal square logo tile straddling the nav bar and the content panel below it (it overlaps both zones, anchoring the transition), containing a white minimal icon that reads as a stylized bird/wing or "V" chevron mark — the template's brand mark.
   - Right: small red/white nebula-textured swatch (another sliver of hero art), then the word **"MENU"** in thin white uppercase letters followed by a short horizontal dash/line glyph standing in for a hamburger icon (not three full bars — just a single minimal line next to the word, consistent with the "minimal nav" name of the template).

2. **Hero zone (frame A, top of page / 0s)** — full-bleed black background filled by the 3D energy sculpture (see Motion section). Overlaid elements:
   - Top-right corner: a small index/eyebrow number, **"001"** (partially cropped by the viewport edge in the captured frame), in thin light-grey/white uppercase, sitting alone with no visible label — a page/slide counter.
   - Center-left, vertically centered in the frame: a **square play button** rendered as a rotated-square (diamond) thin outline containing a smaller, non-rotated solid white square, which itself contains a black right-pointing play triangle. This is the "watch/play" affordance over the ambient hero video/reel.
   - Bottom area: the main headline, **"AUTONOMOUS NETWORK CONTROL"**, set in three stacked lines of thin, wide, uppercase white sans-serif type, left-aligned, sitting directly on top of the dark art with no background plate.
   - Bottom-right, next to/below the headline: an **asterisk/starburst mark** — an 8-pointed thin-line star/burst icon in white, used as a decorative full-stop / logo-adjacent glyph next to the headline (echoes the "energy burst" theme).

3. **Content panel (frame B, first scroll section)** — background switches from pure black to a flat **slate blue-grey** panel (a hard cut/reveal, not a gradient), which is the "page" surface the nav bar and copy sit on:
   - **Headline**, left-aligned, three lines, same thin wide uppercase treatment as the hero: **"CHANNELS ENCRYPTED DEPLOYED"**.
   - To the right of the headline: a **small square product/preview image** — a dark thumbnail showing a zoomed-in detail of the red energy core/particle burst (a cropped detail of the same 3D sculpture used in the hero), floating as a standalone card with no border, acting as a decorative "product shot" callout.
   - Further right, vertically centered next to that thumbnail: a second **index number, "003"**, again thin white/grey uppercase, flanked above and below by small tick/dash marks (reading as a minimal scroll/slide-position indicator, e.g. progress ticks rather than dots).
   - **Numbered feature row**, below the headline, three columns evenly spaced left-to-right, each with: a bold-ish uppercase 3-line heading on the left of the column, a smaller grey body paragraph to its right (same column, right-hand half), and a bracketed index tag beneath the heading. Exact verbatim transcription:
     - **[001]** Heading: "EVOLVING NETWORK CONTROL" — Body: "AdaptiveCore Labs builds resilient cyber frameworks to monitor, adapt, and optimize complex infrastructures in real time."
     - **[002]** Heading: "DATA FLOW SYNCED" — Body: "NeuroGrid Systems develop intelligent architectures to analyze, predict, and orchestrate large-scale digital operations seamlessly."
     - **[003]** Heading: "EVOLVING NETWORK CONTROL" — Body: "QuantumShield Tech creates autonomous environments to secure, expand, and regulate distributed network ecosystems globally."
     - Note: columns [001] and [003] share the identical heading text "EVOLVING NETWORK CONTROL" in the source template — this is filler/placeholder copy reused across cards (the template author did not bother varying it), not a transcription error. When adapting for Autari, all three headings should obviously be made unique.
   - **Scroll cue / footer**: not visible in either supplied frame — frame A is the 0s hero state and frame B is the first content reveal reached by scrolling; nothing below the three-column row or a page-bottom footer was captured in these two stills or the ambient GIF (which only loops the hero art itself). Treat the template as documented through "hero → first numbered-columns section" for structural purposes; footer content is unknown and should be designed fresh for Autari rather than guessed at.

## Palette
| Hex (approx.) | Role |
|---|---|
| `#0A0A0C` | Hero background — near-black void behind the 3D sculpture |
| `#1A1D21` | Logo tile background (dark charcoal square housing the white wing/chevron mark) |
| `#59636C` (approx `#5B6670`) | Content-panel background (slate blue-grey) — the surface for the "CHANNELS ENCRYPTED DEPLOYED" section and numbered columns |
| `#F5F5F2` / `#FFFFFF` | Primary headline & UI text (thin uppercase white) |
| `#9CA3A8` / `#A8ACAF` | Secondary/body copy grey (the small paragraph text under each numbered heading) |
| `#E8ECEE` (light grey) | Wire/chrome sculpture highlights — the thin metallic filament strands |
| **`#FF1E2D`–`#FF5A4E`** | **RED energy accent** — the glowing laser blade, embers, and particle bleed inside the sculpture, plus the nav-bar texture sliver. This is the single saturated color in an otherwise monochrome UI, and it is the accent Autari will replace with green. |
| `#000000` | Play-button triangle glyph (black-on-white icon) |

The whole system is intentionally near-monochrome (black / white / grey) with exactly one hot accent color doing 100% of the emotional/energy work — a template structure that maps cleanly onto Autari swapping red for green.

## Typography
- **Headlines** ("AUTONOMOUS NETWORK CONTROL", "CHANNELS ENCRYPTED DEPLOYED"): thin-weight (Light/Thin, ~300 or lower), wide/geometric grotesque-style uppercase sans-serif, generous letter-spacing (noticeably tracked-out vs. body text), set in 3 stacked lines, left-aligned, no italics, no color other than white.
- **Nav/menu label** ("MENU"): same thin uppercase family, much smaller size, tight-ish tracking, paired with a single minimal dash/line glyph instead of a hamburger icon — reinforcing the "minimal nav" concept.
- **Column headings** ("EVOLVING NETWORK CONTROL", "DATA FLOW SYNCED"): same thin uppercase font family as the headline but at a much smaller size (roughly body-adjacent scale), stacked 2–3 lines, bold-leaning weight relative to the ultra-thin hero headline (a heavier weight than the display type but still not a heavy/black weight — more of a Regular/Medium).
- **Body copy** (feature descriptions): small, sentence-case (not uppercase), light-grey, tighter line-height, noticeably smaller point size than any heading — a plain, quiet reading font, secondary to the display type.
- **Index tags** ("[001]", "[002]", "[003]", "001", "003"): same thin uppercase/monospace-flavored treatment, small size, square-bracket-wrapped for the column tags, bare (no brackets) for the top-corner page-position numbers, always paired with small tick/dash marks when used as a position indicator.
- Overall type system = exactly two "voices": (1) ultra-thin, wide-tracked, large uppercase for display headlines, and (2) small, tighter, quiet grey/white for everything else (nav, labels, body, index numbers).

## Motion — every element
- **Entrance**: Hero loads directly into the fully-formed 3D sculpture with the headline "AUTONOMOUS NETWORK CONTROL" and play button already composed — consistent with these templates' typical pattern of a brief fade/slide-up of headline text and a soft opacity fade-in of the UI chrome (index number, play button, starburst mark) over the first ~1s, while the background art is already mid-loop.
- **Ambient / idle loop (the 3D chrome/wire sculpture + red energy streaks)**: This is the centerpiece animation and loops continuously behind all hero content.
  - The sculpture reads as a dense tangle of thin, light-grey/chrome wire-like filaments (like brushed metal hair or fiber-optic strands) occupying the frame diagonally.
  - Bright red light is not static color-fill but **animated energy travelling along the filaments** — thin red "blade" or "laser" segments appear to flow/slide along the length of specific wires, like a pulse of light moving through a fiber-optic cable, brightening and fading as it travels (a marching-light / flowing-gradient effect rather than a simple glow-pulse).
  - Loose red **embers/particles** are scattered in the lower-left quadrant, flickering/twinkling at irregular intervals (small opacity pulses), suggesting sparks thrown off the main energy blade.
  - The wire strands themselves have a subtle sway/drift — like silk or hair caught in slow wind, never rigid — giving the sculpture a "breathing"/alive quality even where no red light is present.
  - A slow ambient camera drift/parallax (gentle dolly or rotation) very slightly re-angles the sculpture over the loop, so the composition never feels perfectly static, reinforcing the "network constantly recalculating" story.
  - The **starburst/asterisk mark** near the headline spins slowly and continuously (a full slow rotation loop), acting as a small perpetual-motion "system active" indicator.
  - The **play button** pulses gently (subtle scale/opacity breathing loop) to draw the eye without being distracting.
- **Transitions (hero → content panel)**: A hard cut/reveal from the black hero background to the flat slate-grey content panel — not a cross-fade of color, but a scroll-driven section change where the black art scrolls away and the grey panel scrolls into place, carrying the top nav bar (with its red-art sliver) along as a fixed/sticky element that bridges both zones.
- **Scroll / parallax**: 
  - The top nav bar's red/dark gradient sliver and the logo tile behave as a sticky element straddling the boundary between hero and content panel as the user scrolls, visually "cutting" a strip of the hero art into a persistent nav bar.
  - The index number increments as position changes ("001" in the hero corresponds to "003" once further content has scrolled into view), functioning as a live scroll/section-position counter with small tick marks animating alongside it.
  - The small product/preview thumbnail beside "CHANNELS ENCRYPTED DEPLOYED" likely has a subtle parallax float (moves at a slightly different speed than the surrounding text block) — standard for these templates' small inset imagery.
- **Per-element motion**:
  - **Headline reveal**: Each headline ("AUTONOMOUS NETWORK CONTROL", then "CHANNELS ENCRYPTED DEPLOYED") animates in with a line-by-line or block fade/slide-up as its section scrolls into view, consistent with the thin display type being the hero of each section.
  - **Numbered column reveal**: The three [001]/[002]/[003] columns reveal with a staggered fade/slide-up from left to right (001 first, then 002, then 003), each column's heading and body arriving together, with the bracketed index tag settling in last as a small final beat.
  - **Nav bar**: fixed/sticky, persists across the scroll transition rather than disappearing, its red-art sliver providing continuity between the hero's color story and the otherwise neutral content panel.

## Reusable techniques
- **One accent color, everything else monochrome**: black/white/grey UI chrome with a single saturated accent (red here) doing all emotional signaling — trivially portable to any accent swap (e.g. green for Autari) without touching layout.
- **Bleeding hero art into the nav bar**: using a literal cropped sliver of the hero background image/animation as nav-bar texture instead of a flat color bar — creates continuity between hero and chrome without extra design work.
- **Numbered/bracketed index system** (`[001]`, `[002]`, `[003]`, bare `001`/`003` with tick marks) used twice — once as a page/scroll-position indicator (top corner, small, no label) and once as a feature-column tag (bracketed, paired with heading+body) — a single numbering motif reused for two different purposes, reinforcing brand consistency.
- **Ultra-thin wide-tracked uppercase display type over dense, busy art**: because the 3D sculpture is visually chaotic, the headline type is kept extremely light-weight and high-contrast (pure white, thin strokes) so it reads cleanly without needing a background plate or scrim.
- **Asymmetric feature column**: heading stacked in 2–3 short lines on the left half of a column, body paragraph in the right half of the same column (not stacked below) — a compact way to fit heading+body+index into a narrow column width.
- **Diamond-in-square play button**: a rotated-square outline containing a straight square with a play triangle — a distinctive, on-brand alternative to a plain circular play button, reinforcing the geometric/angular brand language.
- **Sticky logo tile straddling two backgrounds**: the logo square is positioned to visually overlap both the hero/nav strip and the content panel edge, acting as a literal pivot point for the scroll transition.

## Autari adaptation
- **Color swap**: Replace every instance of the red energy accent (`#FF1E2D`–`#FF5A4E` glow/blade/embers) with Autari's green system — Pine `#0E7C66` as the mid-tone and Spark `#19D3A2` as the bright glow/highlight core (i.e., wherever the template shows a white-hot red center fading to darker red at the edges, use a white-hot `#19D3A2` core fading to `#0E7C66`). Optionally use Violet `#7C5CFF` sparingly as a second energy strand color woven into the sculpture (e.g., one or two filaments carry violet instead of green) for depth, but keep green dominant so the accent reads as "one signature color" the way red does here.
- **Background swap**: Replace the near-black hero (`#0A0A0C`) with Dark Ink `#0B0E12`. Replace the slate-grey content panel (`#5B6670`) with a darker, more cinematic neutral (e.g., a deep charcoal `#12161B`–`#161C22`) rather than the template's lighter blue-grey — Autari's target aesthetic is darker/more cinematic than this template's mid-tone grey panel, so darken that second zone while keeping the same hard-cut structural transition from hero to content.
- **3D energy hero → Autari's liquid-glass green core**: Directly map the wire/chrome sculpture + flowing red energy blade to Autari's "liquid-glass green core" hero visual — keep the same behavior (light appears to travel along filament paths rather than just glow statically, embers drift and flicker, slow ambient camera drift, no rigid stillness) but render the "filaments" as glass/fluid ribbons instead of metallic wire, with the Spark green traveling through them the way red travels through wire here. Keep the slow-rotating starburst/asterisk mark as a literal small "system active" glyph near the headline — reskin in green/white.
- **Headline swap**: Replace "AUTONOMOUS NETWORK CONTROL" with Autari's hero line built around "AI employees across ANY field" — keep the exact same 3-line, thin, wide-tracked, uppercase, left-aligned treatment sitting directly on the dark art with no background plate. Replace "CHANNELS ENCRYPTED DEPLOYED" with an Autari mid-page line, e.g. "EMPLOYEES DEPLOYED INSTANTLY" or similar, in the same 3-line thin uppercase style.
- **Numbered columns → how-it-works [001]/[002]/[003]**: Map this template's [001]/[002]/[003] feature-column structure (short bold uppercase heading + small grey body sentence + bracketed index) directly onto Autari's "how it works" 3-step explainer:
  - `[001]` → step 1 heading e.g. "CONSULT & DESIGN" — body: describe the free consultation where Autari scopes an AI employee for the client's field.
  - `[002]` → step 2 heading e.g. "BUILD & TRAIN" — body: describe the AI employee being configured/trained for the specific role.
  - `[003]` → step 3 heading e.g. "DEPLOY & SCALE" — body: describe going live and scaling across the business.
  - Keep the asymmetric layout (heading stacked left, body right, index tag beneath) and the staggered left-to-right fade/slide-up reveal on scroll.
- **CTA / play button swap**: Repurpose the diamond-square play button as the video/demo-reel trigger for an Autari explainer reel; keep its geometric diamond-in-square shape (distinctive vs. generic circular play buttons) but recolor the inner triangle/accent hover state to Spark green. Add a primary text CTA "Book a call" linking to `noor@autari.co.uk` near the hero headline or as a persistent element in the sticky nav bar, replacing/augmenting the plain "MENU" label area (e.g., "MENU" stays as the nav label, "Book a call" becomes a second nav-bar element in the same thin uppercase treatment).
- **Nav bar**: Keep the "minimal nav" concept (small logo tile + MENU label + thin single-line icon instead of hamburger bars) but make the bleed-through texture sliver use Autari's green energy art instead of red, and keep it sticky/straddling the hero-to-content scroll transition exactly as in the template.
- **Index/position indicator**: Keep the bare-number-plus-tick-marks scroll position indicator (e.g. "003 —") as a subtle wayfinding device in the top-right/side margin throughout the Autari page, styled in white/grey with no color change needed (it's a neutral UI element in the source, not part of the red accent system).
