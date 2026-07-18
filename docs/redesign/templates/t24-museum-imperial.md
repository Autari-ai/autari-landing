# t24 — hero-museum-imperial

**Source / Duration / Orientation**
- Source: https://figma-templates-en.vercel.app/assets/template%2024/hero-museum-imperial.webm
- Template ID: t24
- Slug: hero-museum-imperial
- Duration: ~34s (looped ambient hero, single scene — no scroll-driven scene change captured, i.e. the hero is a self-contained looping animation rather than a multi-section scrollytelling sequence)
- Orientation: Landscape / desktop widescreen (16:9-ish wide canvas, ~1600×1000 captured aspect). Content is horizontally centered with generous letterboxing margins at very wide viewports.
- Reference stills studied: `t24-a.jpeg` (tight/zoomed crop, early dissolve state, nav partially cropped at edges), `t24-b.jpeg` (full-width crop, later dissolve state, full nav visible), `t24.gif` (motion loop, most-dissolved state with visible floating particles)

## Brand & story

Fictional brand: an art-museum / classical-antiquities institution presenting itself under the exhibition title **"HIDDEN TREASURE."** The story being told in a single hero shot: a pristine white marble bust of a classical figure (styled like a Greco-Roman portrait bust — thick sculpted curls, idealized profile, cut off at chest/shoulders, resting on a round white plinth/pedestal) is caught mid-transformation, dissolving/melting from cold white stone into molten liquid gold. The gold appears to originate at the chest/base and creep upward through the neck into the jaw, cheek and hair, as if the statue is either being "unveiled" (revealing the treasure hidden inside ordinary stone) or restored/gilded in real time. This single visual conceit — ordinary marble concealing extraordinary gold — is the literal illustration of the headline "HIDDEN TREASURE," and it is also the museum's implied value proposition: what looks like a plain artifact conceals something precious, so come explore the collection to find out what. The nav items ("Collection," "Sculptures," "Restoration," "History," and a final right-most item) and the "Restoration" callouts reinforce a narrative of conservation/restoration science paired with classical-antiquities display — a premium, editorial, gallery-catalogue tone (not a ticketing/tourism tone). The numbered 01——05 slider plus the vertical rail of four circular sculpture thumbnails signal this hero is slide 1 of a 5-artifact rotating showcase (a hero carousel where each slide reveals a different sculpture/treasure).

## Layout — zone by zone

**1. Centered symmetric top nav (full-bleed header bar, transparent/on-image, sits directly over the hero art)**
Reading strictly left → right as captured across both stills:
- Far left: a small square icon button — a 4-line "hamburger / menu" glyph (four horizontal bars stacked, no visible label) — sits at the far left edge of the bar.
- Left nav cluster (sans-serif, title-case, letter-spaced, small/uppercase-adjacent size, dark charcoal-black on light background): **"Collection"**, **"Sculptures"**, **"Restoration"** — three links, evenly spaced, running left-to-right toward the center.
- Dead-center: the **logo mark** — a small white square "chip"/tile sitting slightly proud of the nav bar (raised on its own white card with a soft shadow, breaking the horizontal nav line), containing a black glyph of a classical **temple/museum pediment with three columns** (a simplified Greek-temple icon — pediment triangle + 3 vertical column strokes), rendered small and centered. This is the visual and literal center-point of the whole symmetric composition — nav items and the hero art both balance around this single fixed point.
- Right nav cluster (same type style as the left): **"Restoration"**, **"History"**, and a third right-most item that is cropped at the frame edge in the tighter still (legible start "A…", most likely **"Admission"** given museum context — flagged here as a best-effort reading since the source frame truncates it; treat as approximate).
- Far right: a small circular/square **search icon** (magnifying glass) mirroring the hamburger icon on the far left — completing the left/right symmetry (icon–links–logo–links–icon).

The nav is a single horizontal row perfectly mirrored around the center logo chip: same number of link-groups on each side, same icon-bookend treatment on each side. This is the "centered symmetric nav" pattern — the logo is not top-left as in 95% of sites; it's the literal fulcrum of the page.

**2. Hero stage — the marble bust (full-height focal subject, centered, cut off top of frame)**
- A large-scale bust sculpture is placed dead-center horizontally, vertically anchored to the bottom third of the viewport (its round marble/plinth base sits just above the very bottom edge; the top of the hair is cropped by the viewport top / sits just under the nav).
- The bust is shown in a 3/4-to-profile turn (face turned left in the stills), thick individually-sculpted marble curls on top and around the face, smooth carved neck and bare chest/shoulder plane (no drapery/clothing carved — a plain classical bust cut, like a study bust rather than a named god/emperor).
- The bust sits on a simple round white cylindrical plinth/pedestal, visible at the very bottom edge of the frame.

**3. TEXT-BEHIND-SUBJECT headline (full-bleed, layered directly behind/through the bust — see Motion section for exact mechanics)**
- Exact words, all caps, stacked two lines, centered behind the bust: **"HIDDEN"** / **"TREASURE"** (line 1 "HIDDEN", line 2 "TREASURE" — matches the brand story above).
- The type is set at a scale larger than the bust itself — the letterforms extend beyond the bust's silhouette on both sides, so the outer strokes of "HIDDEN" and "TREASURE" are fully visible floating in the plain background to the left and right of the bust, while the strokes that fall directly under the bust's opaque silhouette are occluded/hidden, and strokes that cross the semi-dissolved/gold-particle edge of the bust show through faintly broken/textured (see Motion).

**4. CTA button — "EXPLORE"**
- Placed lower-left-of-center, overlapping the bust's chest/gold-dissolve area (sits partly on top of the bust, partly on the plain background) — roughly where headline line 2 and the bust's gold patch meet.
- Rectangular button, filled with the same liquid-gold texture/color as the dissolve effect (textured, hammered-metal look, not a flat solid), label **"EXPLORE"** in white/cream small-caps sans, plus a right-pointing arrow icon (→) after the label.
- No visible border/outline treatment beyond the gold fill itself in the captured stills (it reads as a solid gold "ingot" chip rather than a thin gold-outline ghost button — note this against the brief's description of "gold outline CTA": the captured stills show a filled gold block button, not a hollow/outline button; document both possibilities and default to the filled reading since it's what's directly visible).

**5. Numbered slider index — large "01" + "——" + "05"**
- Bottom-left corner of the hero, sitting to the left of/below the bust's plinth.
- A large-scale serif **"01"** (matching the headline's serif family, tall/high-contrast strokes) rendered big — this is the current-slide index.
- Immediately after it, a thin horizontal rule/underline (the "——" divider).
- A small serif **"05"** sits at the baseline after the rule — the total-slide count. Together it reads as the classic "01 —— 05" carousel counter (slide 1 of 5).

**6. Vertical thumbnail rail**
- Right edge of the hero, vertically centered, roughly aligned with the bust's head/shoulder height.
- A stacked column of small circular thumbnail chips (4 visible in the captured stills), each containing a cropped close-up photo of a different bust/sculpture (grayscale marble and gold-toned variants among them) — these are the other slides in the 01——05 rotation, presented as a persistent mini-nav/preview rail rather than plain dots.
- Chips are evenly spaced, uniform small diameter, simple circular crop, no visible active/inactive state differentiation beyond position order in the captured stills (the topmost is closest to the bust's shoulder line).

**7. Scroll cue**
- Not clearly visible as a distinct element in the two captured stills or the gif thumbnail (no down-arrow/mouse-scroll glyph observed at the bottom-center). Given the hero reads as a single fixed looping animation (34s ambient loop) rather than a scroll-triggered scene, the "scroll cue" is likely either absent, or a very subtle element not resolved at this capture resolution — documented here as unconfirmed rather than invented.

**8. Background**
- Flat, very light warm grey field behind everything (gallery-wall grey), with a fine grain/noise texture overlay across the whole frame (subtle photographic grain, not a clean flat vector fill) — this grain is visible across all three captured assets and gives the whole hero a soft, matte, print-like texture rather than a glossy digital gradient.

## Palette

| Hex (approx.) | Role |
|---|---|
| `#DAD8D4` | Primary background — warm light gallery-wall grey, covers ~70% of the frame |
| `#F4F3F1` | Marble highlight — brightest lit facets of the bust (forehead, cheekbone, curl tips) |
| `#B8B6B2` | Marble midtone — shaded stone planes (neck shadow, curl undersides) |
| `#8A8884` | Marble shadow / core dark — deepest carved recesses (ear canal, curl grooves, under-chin) |
| `#D89B2E` | Liquid gold — primary dissolve color, mid-tone molten gold |
| `#F0C15A` | Liquid gold highlight — brightest specular gold (where light hits the "wet" gold surface) |
| `#8B5A0F` | Liquid gold shadow — deep amber/bronze in the gold's recessed/shadowed dissolve zones |
| `#FFFFFF` | Headline type ("HIDDEN TREASURE") — solid white, full opacity |
| `#1A1A1A` | Nav link text and logo glyph — near-black charcoal on the light background |
| `#FFFFFF` | Logo chip background — small raised white square housing the column icon |

Overall palette logic: a near-monochrome warm-grey/white "gallery" base (background + marble) punctuated by a single warm accent (the gold), plus pure black/white for UI chrome (nav text, logo). Two-tone contrast (neutral stone vs. warm metal) is the entire color story — there is no third competing hue anywhere in the frame.

## Typography

- **Display/headline serif** ("HIDDEN TREASURE", the "01"/"05" slide counter): a tall, high-contrast serif with thin hairline serifs and pronounced thick/thin stroke contrast — reads like a classical transitional/Didone-adjacent display serif (aesthetically in the family of faces like Canela, GT Sectra, or Playfair Display at very large optical sizes, but drawn slightly narrower/condensed than a typical Didone). Set in full capitals, tight letter-spacing within each word, huge type size (the two headline words each span nearly the full hero width). This serif is the single loudest typographic signal on the page and is doing the "museum/classical/prestige" positioning work by itself.
- **Nav / UI sans-serif** ("Collection", "Sculptures", "Restoration", "History", "EXPLORE" label): a small, clean grotesk/geometric sans, title case (not full caps) for nav links, with generous letter-spacing/tracking that gives it a refined, quiet, editorial feel rather than a bold commercial-nav feel. Very restrained weight (looks like Regular/Medium, not Bold) so it doesn't compete with the headline serif.
- Pairing logic: one loud classical display serif (the "art" voice) + one quiet modern grotesk (the "institution/UI" voice) — a two-typeface system, no third face detected.

## Motion — every element

- **Entrance**: Not directly observable from the two stills (both are mid-loop states) or the gif thumbnail with certainty, but the compositional logic of a "dissolve" hero strongly implies the entrance state is the *fully white marble bust with no gold visible at all* and the headline fully hidden/occluded behind solid stone — i.e., the loop's start point is "pure marble, treasure not yet revealed," which then animates into the gold dissolve. Document this as the inferred entrance state rather than a directly confirmed one.
- **Ambient / idle loop — the core effect (bust dissolve + gold reveal)**: This is the headline animation of the whole template, running continuously across the ~34s duration:
  - A liquid-gold "tide" rises from the base of the bust (chest/shoulder plane) upward through the neck into the jaw, cheek, ear and hairline. In `t24-a.jpeg` the gold has only reached the lower neck/upper chest with a few outlying gold flecks starting on the jaw. In `t24-b.jpeg` (later in the loop) the gold has climbed substantially further — covering most of the visible cheek, jaw and a large portion of the hair on the near side. This confirms directional upward propagation of the gold across the loop, not a static overlay.
  - The boundary between "still marble" and "now gold" is not a hard clean edge — it is rendered as an irregular, organic **splatter/dissolve edge**: ragged fragments, paint-drip-like tendrils, and scattered fleck/speck particles of gold bleeding into the grey stone (and vice versa — a few grey marble flecks appear stranded inside gold zones), giving the impression of material dissolving/disintegrating into liquid rather than a simple color-wipe or opacity crossfade.
  - Fine particulate specks (tiny gold-toned dust/ember motes) are scattered in the surrounding background air near the bust in the gif's most-advanced state — these appear to drift/float, reinforcing the "molten/evaporating" material metaphor (bits of the statue turning to gold dust and lifting off into the air).
  - Net read: the bust is continuously "melting upward" from stone into gold and (implied, to complete a loop) presumably resets or reverses back to full marble to loop seamlessly over the 34s cycle.
- **Transitions**: No slide-to-slide transition was captured directly (only slide 01 of the 01——05 set was recorded), but the presence of the numbered counter and thumbnail rail implies a standard carousel-style crossfade/slide transition to the next artifact bust when navigated, likely re-using the same dissolve mechanic (marble ⇄ gold) as the transition device between slides rather than a plain cut/fade.
- **Scroll / parallax**: No distinct scroll-driven parallax was observable across the two stills — the nav bar position and bust position are static/consistent between the two captures aside from the dissolve progression, suggesting this hero is a fixed, non-scrolling stage (parallax, if any, is not evidenced in the captured material).
- **Per-element motion — TEXT-BEHIND-SUBJECT reveal (exact mechanics)**: The headline "HIDDEN" / "TREASURE" sits on a z-layer *behind* the bust and *in front of* the plain background:
  1. Where the bust's opaque marble silhouette overlaps a letter stroke, that portion of the letter is fully hidden (bust wins the z-order — e.g., in both stills, the crossbar of "H", most of "IDDEN" and the "REASU" of "TREASURE" are substantially masked by the head/hair silhouette).
  2. Where a letter stroke falls in the plain background outside the bust's silhouette (left/right margins, the gap between neck and shoulder, etc.), it renders at full solid white opacity with a crisp edge.
  3. Critically, where a letter stroke falls under the **gold-dissolve boundary zone** (the ragged splatter edge described above, not solid stone and not solid gold), the type shows through **partially/brokenly** — visible in fragments through the porous, particulate part of the dissolve, rather than either fully hidden or fully shown. This is what sells the "the type is truly behind a semi-transparent, disintegrating object" illusion rather than a flat two-layer cutout: the reveal amount of the text tracks the *material state* of the subject at that exact pixel, not just a static silhouette mask.
  4. Because the gold tide rises over the course of the loop, the amount of headline text that is revealed-through-dissolve versus hidden-under-solid-stone actually changes over time too — earlier in the loop (more solid marble, `t24-a.jpeg`) more of the lower headline strokes are hidden; later (more gold/dissolve coverage migrating upward, `t24-b.jpeg`) different strokes become newly exposed as their overlapping stone converts to porous gold-splatter. The text-behind-subject effect is therefore coupled to the dissolve animation, not an independent static layer.
  5. The "01" index number and thumbnail rail are not part of this text-behind-subject treatment — they sit in the plain background zone to the side of the bust and are always fully visible, undimmed, un-occluded.

## Reusable techniques

1. **Text-behind-subject reveal**: put the headline on a middle z-layer between the background and a large foreground hero subject (photo/render/video), so the subject visually "pierces" or "wears" the type. Requires: (a) a subject asset with a clean alpha/silhouette (or a matte/rotomask if using video), (b) headline type sized larger than the subject so both fully-visible and fully-occluded portions exist simultaneously (the effect fails if the type is small enough to hide entirely behind the subject, or big enough to entirely surround it with no overlap), (c) optional: drive the mask by a *material/opacity* property of the subject (like the gold-dissolve edge here) rather than a static silhouette, so the reveal amount animates over time and feels alive rather than a one-time layout trick.
2. **Centered symmetric nav with the logo as the fulcrum**: instead of logo-left/links-right, place the logo dead-center and mirror an equal number of nav items and bookend icons on each side. Communicates poise/prestige and works especially well over a centered hero subject (the bust and the logo share the same vertical axis, reinforcing "this is a temple, and you are looking straight at the altar").
3. **Numbered ghost-index slider ("01 —— 05")**: an oversized, low-contrast-but-legible serif number in a corner, paired with a thin rule and the total count, doing double duty as both a wayfinding device (which slide am I on) and a decorative typographic flourish that reinforces the display serif's presence outside the headline.
4. **Vertical thumbnail rail as carousel nav**: replace generic dot-indicators with small circular photographic previews of the other slides, stacked vertically beside the hero subject — raises perceived production value versus plain dots at almost no extra layout cost, and previews content instead of just position.
5. **Material-metaphor dissolve as the entire animation budget**: rather than animating many small independent elements (nav fade-ins, staggered text lines, floating shapes), this template spends its whole motion budget on one continuous, high-craft transformation of the single hero subject (stone → gold). One expensive, well-executed effect reads as more premium than five cheap simultaneous ones — a good principle to steal even if the specific material (gold) changes.
6. **Two-typeface, two-material palette discipline**: one loud display serif + one quiet UI sans; one neutral base tone (stone/grey) + one single accent metal/color (gold). Restraint in both type and color count is what makes the one accent (gold) and the one effect (dissolve) feel expensive.

## Autari adaptation

**Positioning**: "AI employees across ANY field, sold via consultation." CTA: **"Book a call"** → `noor@autari.co.uk`.

**Palette swap** — replace the stone/gold two-tone with Autari's dark-glass/energy two-tone:
- Background: `#0B0E12` (Dark Ink) replaces the `#DAD8D4` gallery grey — flip the whole hero from light-gallery to dark-stage, which also better sells a "glowing energy" dissolve than gold-on-light-grey would.
- "Marble" role → a dark, matte, unlit **obsidian/graphite bust or humanoid form** (an abstracted AI-avatar figure — e.g., a faceted, low-poly or brushed-graphite humanoid silhouette/bust rather than a literal classical statue, to avoid the museum reference while keeping the "cold, inert material" read) rendered in dark greys (`#2A2E33` shadow, `#4A5058` mid, `#6B7278` highlight — all cool dark neutrals instead of warm marble).
- "Liquid gold" role → **Pine `#0E7C66` → Spark `#19D3A2` green energy dissolve**: the same rising-tide/splatter-edge mechanic, but the material converting the dark graphite figure isn't molten metal, it's **luminous green energy/data-plasma** — glowing from within, particle/ember specks the same green, casting a soft green glow/bloom onto the surrounding dark background (something gold-on-grey never needed, since dark-on-dark benefits from the accent actually emitting light). This is the literal "gold → green energy" swap called for.
- Optional secondary accent: **Violet `#7C5CFF`** — use sparingly as a secondary particle color inside the dissolve (a few violet flecks among the green, or a violet rim-light on the figure's edge) to avoid a flat single-hue glow, echoing how the original used pure gold with darker/lighter gold variants rather than a flat fill.
- CTA button: swap the filled-gold "EXPLORE" ingot for a **green-glass button** — dark translucent glass panel with a Spark-green glow border/inner-glow and the label **"Book a call"** (same right-arrow glyph), linking to `mailto:noor@autari.co.uk` (or a booking-calendar link if one exists). Keep the "sits partly on the subject, partly on background" placement — it reads as "grown out of" the energy dissolve exactly like the gold button grew out of the gold zone.

**The two key steals, explained for our green-glass hero:**
1. **Text-behind-subject** → Put the Autari headline (something like "AN EMPLOYEE FOR ANY FIELD" or a shorter "HIDDEN POTENTIAL"/"BEYOND HUMAN"-style two-liner matching the museum doc's cadence — pick final copy separately) on the z-layer behind the AI-avatar figure, sized so it overflows the figure's silhouette on both sides exactly as "HIDDEN"/"TREASURE" did. Drive the reveal mask off the **green-dissolve edge**, not a static silhouette: where the figure is still solid dark graphite, the headline is hidden; where it has already converted to porous green energy-splatter, the headline shows through in broken, glowing fragments (the green glow bleeding through the gaps in the headline strokes would look especially good — the "revealed" letters could pick up a faint green rim/bloom from being adjacent to the energy, unifying text and effect). This directly visualizes "hidden treasure → hidden potential": the AI capability is inside the inert dark form, and it's the green energy dissolve that proves the "employee" is already awake underneath.
2. **Centered symmetric nav** → Put the Autari logo dead-center in a raised chip exactly like the museum's column-icon tile, with mirrored nav groups either side (e.g., left: "Platform / Industries / Pricing", right: "How it works / Docs / Contact") and bookend icons (menu-left, search-right). On a dark `#0B0E12` bar this reads as a HUD/control-panel rather than a gallery placard, but the underlying symmetry principle — logo as fulcrum, equal-weight link groups, the nav axis aligned with the hero subject's center axis — transfers directly and reinforces the "this is a precise, engineered system" tone Autari wants versus a generic logo-left SaaS nav.

**Slider mapping**: repurpose the "01 —— 05" numbered slider + vertical thumbnail rail as a rotation through 5 AI-employee roles/industries (e.g., 01 Sales, 02 Support, 03 Legal, 04 Finance, 05 Ops), each thumbnail a small circular render of that role's avatar/icon in the same dark-graphite-to-green materials, so switching slides is switching which "employee" is mid-dissolve behind the headline — reuses the single expensive dissolve effect across all 5 slides instead of building 5 different animations (steal #5 from Reusable techniques above).
