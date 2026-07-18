# t22 — hero-smart-product-3d

**Source / Duration / Orientation**
- Source: https://figma-templates-en.vercel.app/assets/template%2022/hero-smart-product-3d.webm
- Duration: ~15.4s (looping preview clip)
- Orientation: Desktop landscape, wide 16:9-ish browser/monitor mockup, rendered as a single rounded "device card" floating in a dark void — not a full-bleed browser screenshot. The card itself has a thin white/light rounded border (radius ~16–20px) and drop shadow, so the whole hero reads as a product shot of a screen rather than a flat webpage.

## Brand & story

Product: "Atmos" (wordmark top-left, small orbit/ring glyph icon before it). Sub-brand/SKU shown in body copy: "Atmos Pro." Category: a smart ring wearable ("YOUR SMART RING FOR EVERYDAY USE"). Story is a premium-tech / near-future wellness gadget pitch: a dark, moody, almost sci-fi atmosphere (misty alien landscape, crackling energy, glossy chrome hardware) used to sell a small piece of jewelry-like hardware as something powerful and almost magical — "daily assistance and convenience" plus "24/7 Real-time Monitoring" grounds the sci-fi visual in a concrete health/tracking value prop. Tone: nocturnal, premium, mysterious, minimal-text — the product does the talking, copy is short and confident.

## Layout — zone by zone

- **Outer stage**: pure black background outside the card (in the tilt/GIF shots this reads as the card floating in empty space); this is a presentation frame, not part of the live site itself.
- **Hero card**: large rounded-rectangle panel (white ~2px border, soft outer glow/shadow) containing the entire hero. Background inside the card is a dark navy-to-slate gradient (deep space blue at top, lightening into a lit mist/fog band across the lower third — like ground fog catching light from the glowing product).
- **Top nav bar** (inside card, ~64px tall): 
  - Far left: small circular "orbit/ring" glyph + wordmark **"ATMOS"**.
  - Center-left cluster of nav links (small caps, light grey/white, generously letter-spaced): **"Why Atmos"**, **"How it Works"**, **"Technology"**, **"Ecosystem"**.
  - Far right: a small **"+"** icon (expand/menu affordance), and just below/right of it a vertical numbered index stack **"01" / "02" / "03"** in tiny thin type — reads as a slide/section progress counter for the hero (echoing a carousel of hero states).
- **Headline block** (left-aligned, upper-middle of card, roughly 40% width column):
  - Four stacked lines, all caps:
    - "YOUR SMART" — "YOUR" regular weight, **"SMART" bold italic** (heavier + slanted for emphasis)
    - "RING FOR" — **"RING" bold italic**, "FOR" regular weight
    - "EVERYDAY" — regular weight
    - "USE." — regular weight, period included
  - Net effect: only the words "SMART" and "RING" (the product-defining phrase) are bold-italicized; everything else is a lighter, upright display weight — a classic mixed-weight/italic emphasis pattern that visually isolates the product category.
- **App-icon squircle** (below headline, left column): a rounded-square "stack of cards" icon in soft pastel gradient tones (pink/lavender/sky-blue layered squares fanned slightly, like 2–3 stacked app-icon cards) with a bold dark **"C"** centered on the frontmost card. Reads as a companion-app badge/logo distinct from the dark hero palette — the one warm/pastel accent in an otherwise cold, dark scene.
- **Subhead / body copy** (bottom-left, small, muted grey): "Atmos Pro is your ultimate smart ring for daily assistance and convenience."
- **Primary CTA** (bottom-left, right under the body copy): white/light rounded pill button, dark text, label **"Pre Order"** with a small **">"** chevron at the trailing edge.
- **3D product + energy orb** (right two-thirds of the card, the dominant visual): a large glossy, near-black chrome ring/orb-like hero object hovering above a misty ground plane, rendered with two small embedded blue glowing points on its surface (like lit sensor windows). In a separate captured moment (the tilted/close-up frame) the same space instead shows a bright crackling cyan-blue plasma/energy sphere with jagged light-crack texture across its surface — the product and the energy orb are two states of the same hero visual (see Motion below for how they relate). Fine sparkle/dust particles (bokeh dots of varying size and blur) float throughout this entire right-hand zone, denser near the object and thinning toward the card edges.
- **Ground/mist plane**: bottom band of the card, lit fog/mist rolling across a dark rocky/sandy ground, catching cool blue-white light from the glowing object above it; adds depth and a horizon line under the floating product.
- **Glass stat chip** (bottom-right corner): a small frosted/glass rounded-rectangle panel containing a small circular product thumbnail (the ring photographed on its own, silver/black) beside two lines of text: **"24/7"** in bold white, **"Real-time Monitoring"** in smaller grey type underneath.
- **Scroll cue**: no dedicated scroll-mouse or chevron-down icon is visible in either static frame. The scroll/entry cue in this template is structural rather than iconographic — the whole hero card itself performs a 3D perspective tilt-to-flat move (see Motion), which functions as the "scroll in" cue, and the "01/02/03" index in the top-right doubles as a progress/position indicator that a viewer would associate with scroll- or slide-driven advancement.

## Palette

| Hex | Role |
|---|---|
| `#0A1018` | Deepest background navy, top of card gradient / outer stage black |
| `#23324A` | Mid-tone slate blue, card background gradient midpoint |
| `#5C7690` | Lit mist/fog band across the lower ground plane |
| `#14181F` | Product body — near-black gunmetal/chrome of the ring |
| `#4A5A6E` | Chrome specular highlight on the ring surface |
| `#29C5F2` | Energy-orb glow / crackling plasma cyan (also the ring's embedded "eye" glow dots) |
| `#0B4C7C` | Energy-orb deep core blue (shadow side of the orb) |
| `#FFFFFF` | Headline text, nav "+" icon, particle sparkles |
| `#D7DEE6` | Nav link text (light grey-white) |
| `#A9B4BE` | Body/subhead copy (muted grey) |
| `#F5F7FA` | "Pre Order" pill background |
| `#0C1016` | "Pre Order" pill text (near-black) |
| `#F3B8D6` | App-icon squircle, pastel pink card layer |
| `#C6B4EE` | App-icon squircle, pastel lavender card layer |
| `#A6D8F5` | App-icon squircle, pastel sky-blue card layer |
| `#202B3D` | App-icon "C" glyph (dark navy) |
| `rgba(255,255,255,0.08)` fill / `rgba(255,255,255,0.15)` border | Glass stat chip (frosted panel over the dark scene) |

Overall palette logic: everything is desaturated dark navy/charcoal except one glowing accent hue (electric cyan-blue) used exclusively on the hero product/orb, plus a single warm pastel accent confined to the small app-icon badge. White is reserved for text and the CTA pill so it reads as "UI" against the "environment."

## Typography

- Headline: tight, all-caps, geometric/grotesque sans display face. Mixed-weight emphasis technique: base words set in a lighter/regular upright weight, the two product-defining words ("SMART", "RING") bumped to a bold weight AND italicized simultaneously — the combination of heavier stroke + slant is what carries the emphasis, not color.
- Nav links: small, uppercase-adjacent sentence case, light weight, wide letter-spacing, low-contrast grey-white so they recede behind the headline.
- Body/subhead: small, regular weight, sentence case, muted grey — clearly secondary to the display headline.
- CTA label ("Pre Order"): small, medium weight, dark-on-light, sentence case.
- Stat chip: "24/7" set noticeably bolder/larger than its own caption line ("Real-time Monitoring"), the same big-number + small-caption pairing pattern used across these templates for trust/metric chips.
- Index numerals ("01/02/03"): very small, thin/light weight, generous vertical spacing — deliberately whisper-quiet, secondary wayfinding rather than a design focal point.

## Motion — every element

- **Entrance**: The hero card enters already large/central and performs a 3D perspective correction — it starts rotated in space (tilted on both X and Y axes, as if viewed from below and to the side, floating against pure black) and animates toward a flat, frontal, screen-parallel resting position. This is confirmed by comparing the two captured frames: the tilted frame shows the card's white border running at an angle with visible foreshortening (top edge narrower/receding, bottom-right corner closest to camera), while the frontal frame shows the same card perfectly flat and fully legible.
- **Ambient / idle loop**:
  - Ring/product: slow continuous rotation and gentle vertical hover/bob, keeping its glossy chrome highlights sweeping across the surface.
  - Energy orb: continuous crackle/pulse — the jagged light-crack texture on its surface visibly flickers and re-traces, and the whole sphere pulses in brightness (breathing glow), never fully static.
  - Mist/fog: slow horizontal drift across the ground plane, thickening and thinning in soft waves.
  - Particles: fine sparkle/dust motes drift slowly upward and sideways through the product zone, looping continuously at varying depths (parallax speeds — nearer particles move faster/blurrier, distant ones slower/sharper).
- **Transitions**: The product visual itself transitions between two states — a crackling energy-orb form and the solid glossy ring form — read together as a single "energy condenses into hardware" reveal beat rather than two unrelated shots; the blue glow embedded in the finished ring's surface is the visual residue of the orb state, tying the two together.
- **Scroll / parallax / 3D perspective tilt of the hero card**: This is the template's signature move — the entire rounded card is treated as a 3D object in space and is tilted away from / rotated back to camera-facing as the animation (and, on the live site, presumably scroll position) progresses, rather than the more common flat parallax-layers-only approach. Foreground elements (headline, pill, chip) stay pinned to the card's own plane and tilt rigidly with it — only the product/orb and particles suggest independent depth within the card.
- **Per-element motion**:
  - App-icon squircle: subtle independent float/bob (slightly different phase/speed than the ring), reinforcing it as a separate "widget" floating in front of the dark backdrop rather than flat UI.
  - Stat chip (bottom-right glass panel): likely a soft fade/slide-in on entrance with a gentle idle pulse on the "24/7" numerals (consistent with the breathing-glow treatment used elsewhere in the scene); sits static relative to the card otherwise.
  - Pre Order pill: static placement; likely a hover/press micro-interaction (not captured in the still frames, but standard for this pill-CTA pattern).
  - Nav + index numerals: static, no visible animation beyond being part of the rigid card tilt.

## Reusable techniques

- Presenting the entire hero as a bordered, drop-shadowed "device card" floating in pure black, then animating that whole card through a 3D tilt-to-flat move, is a strong, portable way to make a static hero feel like a cinematic product reveal without any real scroll-jacking complexity — it's one rigid transform on one wrapping element.
- Mixed-weight + italic emphasis on the 1–2 words that name the product category (inside an otherwise plain all-caps headline) is a cheap, high-impact way to add typographic hierarchy without extra color or size jumps.
- A glowing "energy state" that resolves into the literal hardware render lets one 3D asset carry both an abstract "power/technology" beat and a concrete "here's the product" beat, in one continuous motion.
- Small pastel/warm accent icon (app badge) deliberately breaking the otherwise monochrome-cold palette makes that one element (the companion app) memorable and gives the eye a resting point.
- Bottom-right "glass stat chip" pairing a tiny product thumbnail with a big-number + small-caption metric is a compact trust-builder that reads instantly without competing with the headline.
- Numbered index (01/02/03) as a whisper-quiet secondary wayfinding device in the nav corner signals "there's more" (a sequence/carousel/story) without needing visible arrows or dots.

## Autari adaptation

- **Palette swap**: replace the deep-space navy/steel-blue scene with Dark Ink `#0B0E12` as the card/page background. Replace the cyan-blue energy-orb glow (`#29C5F2` / `#0B4C7C`) with Pine `#0E7C66` → Spark `#19D3A2` as the primary glow gradient — this becomes our signature green energy core instead of their blue orb. Keep a cold-to-warm rim option: Violet `#7C5CFF` can be used sparingly as a secondary accent glow (e.g., a faint violet rim-light opposite the green core, echoing the way t22 uses a single warm pastel accent against an otherwise cold scene) but green stays dominant. Chrome/gunmetal product tones (`#14181F`, `#4A5A6E`) can stay as-is since they're neutral and will read fine against either accent.
- **Product swap**: t22's tangible smart-ring hardware doesn't map 1:1 to Autari (we sell AI employees/services, not a wearable) — so instead of a literal product render, the "3D product + energy orb" beat maps to our liquid-glass green core/orb as the hero centerpiece: a translucent, glassy sphere or blob with the Spark-green internal glow, using the same crackle-then-resolve motion beat (energy pulses/crackles, then settles into a calm steady glow) to signal "the AI is alive and working," rather than "here is the physical device."
- **Headline swap**: keep the exact mixed-weight/italic technique (plain word — BOLD ITALIC emphasis word(s) — plain word) but rewrite copy toward positioning: e.g. "YOUR AI *EMPLOYEES* FOR EVERY FIELD." or "HIRE AN AI *EMPLOYEE* FOR ANY ROLE." — bold-italicize the noun phrase that most needs emphasis ("EMPLOYEES" / "EMPLOYEE"), same way t22 bold-italicizes "SMART RING."
- **Subhead swap**: replace "Atmos Pro is your ultimate smart ring for daily assistance and convenience." with something like "Autari builds AI employees across any field — matched to your business through a short consultation." Keeps the same short, confident, single-sentence value prop slot.
- **CTA swap**: replace the white "Pre Order" pill with a "Book a call" pill (same white rounded-pill-with-chevron treatment), linking to a `mailto:noor@autari.co.uk` or booking link — since Autari sells via consultation rather than checkout/pre-order, "Book a call" is the direct functional equivalent of "Pre Order" as the single hero CTA.
- **Stat chip swap**: the "24/7 Real-time Monitoring" glass chip maps directly to our "24/7 always-on" claim — reuse the exact layout (small thumbnail/icon + bold big label + small grey caption) as "24/7" + "Always-On AI" or "24/7" + "Always Working," swapping the ring thumbnail for a small glowing-core icon or a minimal AI/agent glyph.
- **App-icon squircle swap**: repurpose this slot for an Autari "workspace/integration" badge (e.g., a small squircle with our own mark or a partner-tool glyph) — keep it as the one warm/bright accent against the dark scene, but shift its palette from pastel pink/lavender/sky toward a Spark-green-tinted glass card (or keep a soft neutral pastel if we want the same "one warm accent in a cold scene" contrast trick).
- **Nav swap**: replace "Why Atmos / How it Works / Technology / Ecosystem" with Autari's own sections, e.g. "How it Works / Roles / Pricing / Contact" — keep the same light-grey, small-caps, wide-tracking nav styling and the far-right "+"/index-counter treatment if we want a multi-slide hero.
- **Hero card + tilt swap**: keep the bordered "device card floating in black, 3D-tilts to flat on load/scroll" technique wholesale — it's palette-agnostic and works as well for a services/consultation pitch as for a hardware pre-order. This becomes our hero container treatment; the rounded white border can become a subtle Ink-on-Ink border (e.g., `1px rgba(255,255,255,0.12)`) to keep it legible against the dark theme rather than a stark white line.
- **Ground mist swap**: keep the drifting mist/fog band under the hero object for depth, but relight it with the green glow instead of blue (`#0E7C66`-tinted fog) so the whole scene reads as "Autari green" rather than a reskin of Atmos's blue.
