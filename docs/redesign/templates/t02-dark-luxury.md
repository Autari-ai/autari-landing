# t02 — hero-dark-luxury

**Source / Duration / Orientation**
Source: `https://figma-templates-en.vercel.app/assets/template%202/hero-dark-luxury.webm`. Duration: 9.53s (confirmed via `ffmpeg` probe: 40 frames, ~4.3fps GIF capture of the clip). Orientation: desktop/landscape. Presented in the template gallery inside a laptop-mockup-on-a-sofa environment shot — the laptop/couch/room is the *gallery presentation wrapper*, not part of the actual landing-page design; the real design is only what renders on the laptop screen.

This doc was produced by decoding the actual animated GIF frame-by-frame (extracted all 40 frames with `ffmpeg -i t02.gif -vsync 0 f_%03d.png` and read ~20 of them across the timeline), not from a single static frame, so the Motion section below is an observed transcript, not an inference.

## Brand & story

An eco/nature product template — a design-led catalog for sustainable home goods, built around quiet-luxury photography rather than feature lists. Nav confirms the product range: **Home / Stove / Contact** — "Stove" ties directly to the "EcoStove" product card, so this is a small artisanal sustainable-goods brand (home décor + an eco stove line, at minimum). Tone: near-black canvas, one dramatic 3D hero object (museum-lit moss-covered driftwood), a soft rounded organic serif for the emotional headline, minimal sans-serif utility text everywhere else. The brand promise (copy: "Find your inner green," "Nature's beauty is boundless," "Nurturing green spaces, cultivating sustainable solutions, and inspiring a greener tomorrow for all.") is calm, grounded, sustainable living — sold through atmosphere/materiality, not specs (aside from one wink of a spec chip).

## Layout — zone by zone

**Nav bar** (top edge, thin single row, transparent-over-dark):
- Logo mark: small icon top-left, subtle green tint — reads as a leaf/sprout-style glyph consistent with the eco branding (too small to resolve with full certainty even in the clearest extracted frames, but the green tint and nature theme make a sprout/leaf mark the confident best reading).
- Nav links, left-of-center: **"Home"** (active — solid white, full opacity, slightly bolder), **"Stove"** (muted gray, ~50–60% opacity), **"Contact"** (muted gray, same opacity as Stove). Exactly three items, evenly spaced.
- Far right: **"Login"** — a plain small text link (not a button/pill), muted white, right-aligned at the nav's far edge.

**Eyebrow / label**: no standalone eyebrow above the headline; that role is instead carried by each card's own caption ("About", "EcoStove").

**Hero headline** (exact words, left column, two stacked lines):
> **"Find your**
> **inner green"**

Large soft/rounded organic serif, tight leading, left-aligned, white/off-white, positioned left of center beneath the nav, roughly vertically centered in the upper-middle of the frame.

**Subheadline** (right column, opposite the headline, small sans-serif, gray, three lines) — now fully confirmed verbatim from a clean wide frame:
> **"Nurturing green spaces, cultivating sustainable solutions, and inspiring a greener tomorrow for all."**

**Primary CTA**: pill/rounded outline button sitting directly beneath the subheadline in the **right** column (not under the headline) — a small 4-square/grid icon to the left of the label, thin light stroke, transparent fill. Exact label: **"Our Products."**

**Secondary CTA**: none — a single large circular **play button** (see "Hero subject/visual" below) is the only other interactive invitation, not a second text button.

**Hero subject/visual**: a photoreal 3D-rendered driftwood branch, fully covered in thick green moss with hanging root tendrils, bent into a wide S-curve/near-infinity shape, resting on a dark reflective floor plane. Single dramatic side-light rakes across the moss, catching individual tufts. Full width of the screen, center-right-weighted.

**Floating "play" button**: a large (~70–90px) circle sitting directly on the hero visual, left-of-center, roughly mid-height, overlapping the branch's left hump — thin white ring outline + solid white filled inner disc containing a dark play-triangle glyph. Reads unambiguously as a "watch video/showreel" trigger placed right on top of the product shot, not a decorative marker.

**Glass stat/spec chip** (exact number + unit + label): top-right corner, small pill on a translucent dark-glass background, containing a thin circular ring/loader-style icon plus:
- Label: **"Titanium"**
- Value: **"282 G"** (282 grams) — a material + weight spec callout, product-datasheet style.

**Floating cards** (glass UI cards layered on the hero object, staggered depth, photo-top + text-bottom):
- **Card 1 ("About")** — upper-right-of-center. Photo-top swatch shows a moss/branch detail shot whose crop/zoom subtly shifts between moments (an internal pan on the card's own image, independent of the main camera — see Motion). Cream/off-white text panel below reads:
  - Eyebrow: **"About"**
  - Headline: **"Nature's beauty is boundless."**
  - A small round white icon-button overlaps the card's bottom-right corner, containing a dark 4-point/asterisk-like glyph (an "expand/more" affordance).
- **Card 2 ("EcoStove")** — lower and further right, staggered behind/trailing Card 1 (different z-depth), same photo-top/cream-panel construction (photo shows a moss-covered rock rather than branch):
  - Eyebrow: **"EcoStove"**
  - Headline: **"Heat for Life"** — now fully confirmed complete (a wider-crop frame shows the whole phrase, correcting the earlier partial "Heat for L…" read).

**Numbered markers / circular badges**: correcting an earlier read from a low-resolution thumbnail — there are **no separate small plain hotspot dots** on the 3D object. On closer, higher-resolution frame inspection the only circular elements present are (a) the large play-button described above and (b) Card 1's small round icon-button. Treat this as the accurate reading; anything suggesting extra unlabeled dot markers was a resolution artifact.

**Side rails**: none — no secondary vertical nav/thumbnail rail; the two staggered cards are the only secondary content, sitting center-right.

**Scroll cue**: bottom-left corner, a thin vertical white line running upward with **"SCROLL"** set vertically (rotated, letter-spaced small caps) beside it.

**Footer**: not visible — the entire 9.53s clip stays within the hero viewport.

## Palette

| Hex (approx) | Role |
|---|---|
| `#0C0F0E` | Base near-black background |
| `#14140F` | Warm-dark vignette at frame edges |
| `#6B7A45` | Lit moss green (top-lit tufts) |
| `#333D22` | Moss shadow green (recessed moss) |
| `#8C7355` | Driftwood mid-brown (exposed bark) |
| `#4A3B2A` | Driftwood dark brown (shadowed wood) |
| `#1A1A18` | Reflective ground/floor plane |
| `#EFEBE2` | Card panel cream/off-white |
| `#2B2A26` | Card headline text (near-black on cream) |
| `#8C8880` | Eyebrow/caption gray, muted nav links ("Stove", "Contact") |
| `#F4F2ED` | Hero headline white, active "Home" nav, scroll-cue white |
| `#A9A69C` | Subheadline muted gray body text |
| `rgba(255,255,255,.35)` | Button/play-ring outline stroke |
| `rgba(255,255,255,.08)` | Glass-chip translucent background |
| `#4A4A46` | Gallery-wrapper sofa/room gray (presentation chrome only) |

Overall logic: near-black canvas + one saturated organic accent (moss green) + warm neutral wood + cream card surfaces. No brand accent hue — the "color" is the photographic/3D hero subject itself.

## Typography

- **Headline / card headlines** ("Find your inner green", "Nature's beauty is boundless.", "Heat for Life"): a soft, rounded-terminal organic serif with fairly even stroke weight (Fraunces/Recoleta/Lora-class rather than a sharp high-contrast Didone) — warm and organic, matching the nature brand, upright, medium-bold, tight leading.
- **Body / UI sans**: a neutral grotesk (Inter/Helvetica-class) for nav links, subheadline, button label, eyebrow captions, spec-chip text, and "SCROLL". Small sizes, light-to-regular weight, generous letter-spacing on the all-caps bits.
- Pairing logic: serif = emotional/brand voice (headline moments only), sans = every functional string. Only two families in the whole hero.

## Motion — every element

This is a transcript of the actual decoded animation (40 extracted frames, ~0.24s apart, covering the full 9.53s), not a guess.

- **Entrance** (~t 0.0–1.5s): clip opens on the wide laptop-in-room establishing shot with the page already loaded (t≈0.0s). It then cuts/zooms straight into the screen to a full-bleed flat page view (t≈0.2s), at which point the actual page-load animation plays: the headline types on character-by-character — "Find" appears first, then "your", then "inner", then "green" builds in over roughly the next second — while simultaneously the 3D moss/driftwood object slides in from the right edge of the frame, materializing under a thin horizontal white **scan-line** that sweeps across it as it assembles (a "being rendered into existence" effect), not yet in its final resting pose. By ~t=0.7–1.5s the object has settled into its full S-curve pose, the subheadline paragraph fades in as a block, the "Our Products" button and the large play-circle button fade/scale in, the two glass cards ("About", "EcoStove") fade/slide in staggered (About first, EcoStove trailing), and the spec chip + "SCROLL" cue fade in last — completing the "hero at rest" composition.
- **Ambient / idle loop**: comparing frames within both the mid-clip "hold near the cards" stretch and the final wide "resting" stretch shows only very small, continuous drift (consistent with a slow camera breathing/settle), not a distinct per-element bob/pulse loop. This template spends its motion budget on one choreographed camera move rather than separate idle animations per element.
- **Transitions**: the clip is otherwise one continuous eased path, but there is exactly one hard accent beat around t≈2.6–3.1s: a bright blown-out white flash/flare sweeps across the frame (only the "Login" nav text survives, barely, at the very top edge) immediately followed by an extreme macro close-up on the branch's mossy tip, sparkling with fine particle/glint highlights and a repeat of the horizontal scan-line — read as a deliberate "hero money-shot" accent insert, not a scene cut to a different screen.
- **Scroll / parallax / 3D tilt**: no literal user-driven scroll is depicted (no scrollbar, no vertical content translation past a fixed nav). What reads as "parallax/tilt" is entirely a virtual camera dollying through a staged, depth-separated 3D scene: after the entrance settle (~t 1.5s), the camera slowly pushes in toward the card cluster (t≈1.5–2.6s), progressively revealing full card copy/photo detail and the spec chip/SCROLL cue in close-up; after the t≈2.6–3.1s flare/macro accent, the camera eases back out (from ~t 3.5s onward) to a medium-wide framing showing the complete nav, full two-line headline, full three-line subheadline, "Our Products" button, play-button, and the entire branch end-to-end — and holds there, essentially unchanged, through the rest of the sampled timeline (to t≈9.5s), positioned to cut cleanly back to the opening wide laptop shot on loop.
- **Per-element motion**:
  - Logo/nav: fades in during the settle beat; static afterward. "Home" stays solid-white/active throughout; "Stove"/"Contact" stay muted; "Login" persists even through the bright flash accent.
  - Headline: character-by-character typewriter reveal on entrance (~1s to complete); fully static afterward.
  - Subheadline: fades in as a whole block once the headline finishes typing; static afterward.
  - "Our Products" button: fades/scales in after the subheadline, positioned in the right column beneath it, grid-icon + label together.
  - Large play-circle button: fades/scales in over the branch's left hump during the settle beat; static afterward (no pulse observed in sampled frames).
  - 3D moss/driftwood object: slides in from off-frame right with a scan-line "materialize" effect on entrance → settles into resting S-curve pose → is the literal subject of the camera push-in/pull-back for the remainder of the clip → briefly shown in extreme macro with sparkle particles + a repeat scan-line during the flare accent.
  - Card 1 "About" / Card 2 "EcoStove": fade/slide in staggered during the settle beat (About first, EcoStove trailing/behind). Card 1's internal photo swatch pans/zooms subtly and independently of the main camera move — its crop differs measurably between frames taken seconds apart, i.e. a small Ken-Burns move living inside the card, layered under the outer camera dolly. The round icon-button on Card 1 is static once placed.
  - Spec chip ("Titanium / 282 G"): fades in last alongside the SCROLL cue; static afterward.
  - Scroll cue "SCROLL": fades in last; no additional pulse/animation observed beyond the entrance fade in the sampled frames.

## Reusable techniques

- **Device-mockup gallery framing**: laptop-on-sofa environment shot bookending the demo clip, making a flat design feel lived-in, separate from actual page chrome.
- **One continuous camera move for the whole demo clip**: wide mockup → cut into the screen → typewriter/assemble entrance → slow dolly toward content → brief macro/flare accent → pull back to a resting wide frame — a way to show a hero's full depth and detail inside one short clip without hard scene cuts.
- **Typewriter headline reveal paired with a scan-line "materializing" 3D object**: a distinctive, cohesive entrance pairing (text builds character-by-character exactly as the hero object assembles under a sweeping light-line) rather than two independently-timed fades.
- **Photo-top / text-bottom glass card**, staggered z-depth stacking between two cards rather than a flat grid.
- **Independent internal motion inside a card's photo** (a subtle pan/zoom on the card's own image, decoupled from the outer camera) — adds richness without adding extra UI chrome.
- **Spec/material chip** (icon + label + numeric value pill) floating independently of the cards, surfacing one hard "fact" compactly.
- **One oversized circular play button dropped directly onto the hero visual** (not tucked into a nav or corner) as the singular, unmistakable secondary interactive invitation, paired with one primary text CTA — deliberately not two competing text buttons.
- **Vertical rotated "SCROLL" + line cue**, standard unobtrusive bottom-corner affordance.
- **Serif-for-emotion / sans-for-function** type pairing, restricted to exactly two families, serif chosen soft/organic to match the brand rather than a cold luxury Didone.
- **Single saturated organic hero subject against a near-black canvas** as the entire color strategy — no accent brand hue needed.
- **A brief blown-out flare/macro accent mid-clip** as a "hero money-shot" beat, used once, sparingly, rather than as a repeating idle effect.

## Autari adaptation

Dark Ink `#0B0E12` bg, Pine `#0E7C66` → Spark `#19D3A2` green glow primary, optional Violet `#7C5CFF` secondary.
Positioning: "AI employees that run repetitive work across ANY field, sold via a consultation."
CTA: "Book a call" → `noor@autari.co.uk`.

**Note the palette coincidence**: this template's own copy literally reads "Find your inner green," and its entire hero visual *is* a mossy, glowing green 3D object lit against near-black — this is our single closest palette cousin of the templates surveyed. The moss-green-on-near-black relationship maps almost directly onto Pine `#0E7C66` → Spark `#19D3A2` on Dark Ink `#0B0E12`; we're not inventing a green-on-black hero mood, we're recoloring one that already exists in this exact shape.

Specific swaps:
- **3D hero object**: replace the moss-covered driftwood with an abstract flowing/organic 3D form (a smooth ribbon, liquid mesh, or neural-node cluster) rendered in a Pine→Spark gradient with a soft emissive glow along its ridgeline, on the same dark reflective ground-plane. Keep the S-curve silhouette, the single dramatic side-light, and — importantly — keep the **scan-line "materialize" entrance effect**, since it maps perfectly onto an AI-employee narrative (the object visibly assembling/booting up reads as "spinning up an AI worker").
- **Headline entrance**: keep the character-by-character typewriter reveal verbatim as a technique — it's a natural fit for an "AI employee typing/introducing itself" motif. Replace "Find your inner green" with a line built around the positioning, e.g. "Meet your first AI employee" (same two-line serif treatment, left column).
- **Subheadline**: replace "Nurturing green spaces, cultivating sustainable solutions, and inspiring a greener tomorrow for all." with a one-sentence version of the positioning statement, right column, same placement/size: "AI employees that run repetitive work across any field — deployed after a quick consultation, not a self-serve signup."
- **Primary CTA**: "Our Products" → **"Book a call"**, linking to `mailto:noor@autari.co.uk`, same right-column placement beneath the subheadline, same icon+label pill treatment.
- **Play button**: keep the oversized circular play button over the hero visual as-is — repurpose it to launch a short explainer/demo video of an AI employee at work; this is a strong, ready-made secondary CTA slot we don't need to invent.
- **Floating cards**: replace "About / Nature's beauty is boundless." and "EcoStove / Heat for Life" with proof/feature cards, e.g. Card 1 eyebrow **"Live"** / headline **"Handles the tickets your team doesn't have time for."**, Card 2 eyebrow **"Case study"** / headline **"Cut manual ops time 70%."** Swap each card's photo swatch for a soft glowing UI/data snippet (with the same subtle internal pan/zoom motion the source template already does); keep the round "expand" icon-button on Card 1.
- **Spec chip**: "Titanium / 282 G" → a metric relevant to the product, e.g. **"Uptime / 99.9%"** or **"Tasks handled / 12,400 mo"**, same glass-chip treatment, top-right.
- **Nav bar**: keep the structure (logo mark, three-item link row, plain "Login"-style text link at far right) — relabel links to Autari's actual nav (e.g. Home / How it works / Consultation), keep "Login" as a plain text link rather than a button, matching the source's restraint.
- **Scroll cue**: keep the vertical "SCROLL" + line unchanged — it's palette-neutral and works as-is on Dark Ink.
- **Cards' panel color**: keep a light/frosted panel (off-white or a very light Dark-Ink-tinted glass) rather than dark-on-dark, preserving the proven high-contrast "card pops off the moody background" effect; use Spark `#19D3A2` only as a small accent (eyebrow color or icon tint), not as the panel fill.
- **Camera choreography**: keep the whole one-shot structure (wide establishing → push into content → brief flare/macro accent → pull back to resting wide) as the template for our own hero demo video — it's a strong, proven way to show headline + proof cards + CTA + hero visual inside one short autoplaying clip.
