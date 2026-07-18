# t38 — hero-amethyst

**Source:** `https://figma-templates-en.vercel.app/assets/template%2038/hero-amethyst.webm`
**Duration:** ~17.8s
**Orientation:** Landscape / desktop widescreen (~16:9, full-viewport browser hero)
**Local refs:** motion GIF `scratchpad/gifs/t38.gif`; full-size frames `t38-a.jpeg` (flat hero, top of page), `t38-b.jpeg` (tilted/scrolled state, mid-scroll)

## Brand & story

Fictional luxury-EV marque. Wordmark top-left reads as a short automotive brand lockup (small circular badge icon + condensed sans wordmark, legible as **"GSmotors"**-style naming — a stylized car-brand mark, not a real company). The story is "supercar meets enchanted nature": a photoreal violet supercar is shot dead-center on a wet cobblestone/path road that cuts through a **bioluminescent alien-fantasy forest** — glowing mushrooms, glowing flowers, drifting light-particles, wet reflective ground. The copy leans into performance-meets-refinement: "elegance, power and thrilling drives with a luxury car that redefines performance." Overall tone: nocturnal, mysterious, opulent, slightly sci-fi/fantasy rather than clinical-tech — violet instead of the usual EV blue/white signals "premium and otherworldly" rather than "efficient."

## Layout — zone by zone

**Top nav bar** (full-width, transparent over the scene, sits directly on the forest background — no bar fill):
- Far left: small circular badge/icon + wordmark ("GSmotors"-style lockup), small caps, tight tracking.
- Center-left cluster of nav pills, left-aligned rather than centered: **Home** (shown as an active/filled pill — the only highlighted item), then **Model(s)**, **Performance**, **Technology**, **Gallery**, **Contact** — six items total, small uppercase-ish sans, tightly spaced, low-contrast off-white on the dark scene.
- Far right: a **"Login"** pill (light/outlined, rounded) and, immediately beside it, a circular icon button with concentric/horizontal ring linework — reads as a **wireframe-globe** icon (could double as a hamburger/menu affordance) — the hamburger/globe combo mentioned in the brief.

**Hero headline block** (left third of frame, vertically centered-upper):
- Big uppercase display headline, white, tight leading, ranged left, breaking across four lines as rendered:
  `THE PERFECT` / `BALANCE` / `OF INDUSTRIAL` / `SPEED`
  (underlying copy is the sentence "The Perfect Balance of Industrial Speed" — the ALL-CAPS look is a CSS text-transform on a normally-cased string, not the literal authored casing.)
- Directly beneath the headline, small: a tiny horizontal **wireframe capsule/ellipse icon** (looks like a minimal 3D spinner or emblem) sitting left of the body copy.
- Body copy (two short lines, small grey/off-white, low emphasis): *"Experience elegance, power and thrilling drives with a luxury car that redefines performance."*

**CTA row** (below body copy):
- **"View More"** — solid off-white/cream rounded pill, dark text, with a small circular arrow (↗) button immediately to its right (separate hit target, same visual weight).

**Stat-chip row** (bottom-left, under the CTA, four items left-to-right):
1. Dark-glass chip: big bold **"32"** + small superscript unit **"KM"**, small label beneath: **"Range"**.
2. A small rounded-square **image chip** — a thumbnail photo of the car (three-quarter/side angle, violet-lit) inline in the same row as the stat chips — functions as a visual "swap/gallery" cue rather than a stat.
3. Dark-glass chip: big bold **"150"** + small superscript unit **"KM"**, label: **"Top speed"**.
4. Dark-glass chip: big bold **"75"** + small superscript unit **"KWH"**, label: **"Battery Capacity"**.
All four sit on near-black frosted-glass rounded-rectangle backgrounds, evenly spaced, same height, forming one continuous horizontal band.

**Hero subject:** the car itself — a violet-white supercar shot head-on/slightly-front-three-quarter, centered-right of frame, parked/rolling on a glossy wet cobblestone path, blue-white LED running-light strip across the nose, dark glasshouse, glossy reflective paint that picks up the surrounding violet/magenta glow. Ground shows pooled reflections of the forest lighting.

**Environment:** dense fantasy forest flanking the road on both sides — dark violet tree canopy/trunks receding into haze at the back; in the foreground, clusters of **glowing blue-violet flowers** (radial bioluminescent bloom centers) and at least one **oversized glowing mushroom** (right side, pale lilac cap with speckled bioluminescent spots, glowing blue stem-base) sit at car-height, framing the vehicle like a proscenium. Countless small sparkle/bokeh particles hang in the air throughout, denser near the ground and light sources.

**Top-right feature card:** a white-bordered rounded card floating over the scene, containing a tight violet-toned close-up photo (car headlight/fender detail with a glowing blue light strip) and, beneath the image inside the same card, black uppercase text **"EXPERIENCE LUXURY ON WHEELS"** with a small arrow-up-right (↗) icon at the end of the line.

**Bottom edge — section markers:** at the very bottom of the hero, cut off by the viewport edge (a teaser of the next scroll section), two numbered markers are visible: left side small index **"[001]"** above the word **PERFORMANCE**; right side small index **"[005]"** above the word **ELEGANCE** — implying a five-part numbered section system `[001]…[005]` running PERFORMANCE → … → ELEGANCE down the page (only the first and last are visible in-frame; the three middle markers are inferred from the pattern, not directly legible in the captured frames).

**Bottom-right:** a circular outlined **scroll-down button** (thin ring, downward chevron/arrow glyph inside), sitting just above the `[005] ELEGANCE` marker.

## Palette

Approximate hex sampled from the frames (violet/amethyst bioluminescent-forest palette):

| Hex | Role |
|---|---|
| `#1A1024` | Deepest background — canopy shadow, far tree silhouettes, page black-point |
| `#3B2560` | Mid-depth violet haze — tree trunks / atmosphere at middle distance |
| `#6B3FA0` | Core amethyst — dominant forest/foliage violet, the "brand" hue of this template |
| `#9B7EDE` | Light violet-lavender — mushroom caps, secondary foliage highlights |
| `#5AC8FA` | Bioluminescent cyan-blue — flower glow centers, car LED strip, mushroom stem glow |
| `#D946A8` | Magenta-pink — wet ground/path reflections, rim-light on cobblestones |
| `#E4DDF5` | Pale lilac-white — hero car body paint |
| `#15101F` | Near-black violet glass — stat-chip and card backgrounds (frosted, ~70–80% opacity) |
| `#F5F3FA` | Off-white — headline type, "View More" pill fill |
| `#B8AFC9` | Muted lavender-grey — body copy, secondary/nav text |
| `#7C5CFF` | Saturated violet accent — the closest single swatch to "brand violet" if picking one hex for Autari's secondary accent |

Overall read: near-black base, everything else is a violet-to-magenta-to-cyan bioluminescent gradient — no green, no warm neutrals; white is reserved strictly for UI chrome (headline, pills, card borders) so it pops out of the saturated scene.

## Typography

- **Display/headline:** big uppercase geometric/grotesk sans, tight letter-spacing, tight leading between the four stacked lines, medium-bold weight (not ultra-black) — reads industrial and confident, not delicate.
- **Nav / eyebrow / labels:** small sans, wide-ish tracking, low contrast (translucent white) against the busy background so it recedes behind the hero content.
- **Body copy:** small regular-weight sans, muted grey-lavender, generous line-height for its short two-line block.
- **Stat numbers:** large bold sans for the number ("32", "150", "75"), tiny superscript-style unit immediately after it (KM/KWH) at a fraction of the size, then an even smaller label word below in low-emphasis grey — same 3-tier hierarchy on every chip.
- **Feature-card caption:** small bold uppercase sans, black-on-white, high contrast, short line + trailing arrow glyph.
- **Section markers:** small tracked-out uppercase numerals in brackets (`[001]`) paired with a larger tracked-out section-name word (PERFORMANCE / ELEGANCE) — the number is quiet, the word is the visual anchor.

## Motion — every element

- **Entrance:** page opens already inside the glowing forest with the car in frame — no black-slate or logo-first slate observed; UI chrome (nav, headline, CTA, stat chips, feature card) reveals with a soft fade/slight-rise-in over the establishing forest shot, staggered left-to-right / top-to-bottom (nav first, then headline, then CTA row, then stat chips, then the top-right feature card last).
- **Ambient / idle loop:** the forest is never static — bioluminescent flower centers and mushroom-spot clusters **pulse/twinkle** on independent, slightly-offset cycles (not synchronized, so the scene reads as "alive" rather than strobing); fine particle bokeh continuously **drifts upward and sideways** at a lazy, wind-like drift speed; the wet ground holds a faint **shimmer** in its reflections as if light is still moving across it; the car itself holds still (no idle rotation) — all ambient motion lives in the environment, not the product, which is the inverse of most other templates in this set (e.g. T22, T28 rotate the hero object instead).
- **Transitions:** the whole hero panel executes a **3D perspective tilt** between the flat, head-on establishing shot (t38-a) and an angled, "looking down into the scene" perspective (t38-b) — consistent with the tilt-reveal technique used elsewhere in this template family (T21, T37); during the tilt, the UI layer (feature card, scroll button, nav fragments) rides along with the perspective transform rather than staying screen-locked, reinforcing that it's a single tilting "photo/stage" rather than independent 2D-overlaid UI.
- **Scroll / parallax PUSH-IN into the scene:** scrolling drives a **camera push-in** — the viewpoint moves forward/down through the forest (as seen in t38-b, where the same flowers and mushroom from the establishing shot are now much closer/larger and cropped tighter, with the feature card and scroll button having slid down and now overlapping the lower-right foliage) — i.e. scroll = travel deeper into the glowing forest, not a simple vertical pan; the section markers `[001] PERFORMANCE … [005] ELEGANCE` are the anchors this push-in scrubs toward, implying each numbered section is a further "depth" into the same continuous forest environment rather than a hard cut to a new background.
- **Per-element motion:**
  - Stat chips (32km / 150km / 75kWh): gentle **fade+float-in** on load, sit static afterward; likely a slight idle bob is present (consistent with the "floating glass stat chip" pattern used across this template family) though not distinguishable at high confidence from the two static frames alone.
  - Feature card (top-right → mid-right on scroll): fades/scales in on load, then **translates with the tilt/push-in** during scroll, staying pinned to the same relative spot in the 3D scene rather than the 2D viewport.
  - "View More" pill + arrow button: static hover-only target; no ambient motion observed.
  - Ambient color-bleed: the violet/magenta glow of the scene is the page's only background — there is no separate blurred-duplicate backdrop layer outside the framed hero (unlike T27/T37 which blur the media out beyond its frame); here the "frame" and the "backdrop" are the same full-bleed forest.
  - Scroll-down circular button: static glyph, standard hover/click affordance, repositions with the tilt as scroll progresses.

## Reusable techniques

1. **Dark, saturated hero over a glowing fantasy environment** — the product sits inside a fully-realized glowing biome instead of a studio/gradient backdrop; the environment itself carries all the "wow," letting the product stay comparatively still.
2. **Row of dark-glass stat chips** (number + tiny unit + label), 3-tier type hierarchy, evenly spaced in one horizontal band directly under the primary CTA.
3. **`[001]…[005]` bracketed numeric section markers** paired with a single uppercase section-name word, teased at the very bottom edge of the hero to promise the scroll journey ahead.
4. **Whole-hero 3D perspective tilt** between a flat "cover" state and an angled "in-scene" state, with UI riding the same transform — makes 2D screen content feel staged inside a 3D volume.
5. **Scroll-as-camera-push-in** — scrolling reads as moving forward through the environment rather than swapping panels, unifying hero and next-section as one continuous space.
6. **Independent, staggered ambient pulses** on many small light sources (flowers, mushroom spots) rather than one synchronized pulse — reads as organic/alive rather than mechanical.
7. **Secondary small image-chip inline with stat chips** — a compact product thumbnail dropped into the stat row as an implicit "more views" affordance, without breaking the row's rhythm.
8. **Circular scroll-down affordance** with a simple down-chevron, minimal ring button, bottom-right.
9. **Login pill + circular globe/menu icon** pairing on the far right of an otherwise transparent nav bar.

## Autari adaptation

Autari's system is Dark Ink `#0B0E12` background with Pine `#0E7C66` → Spark `#19D3A2` as the primary glow (green, "always-on AI employee" energy). This template's violet/amethyst `#7C5CFF`-family palette is the natural **secondary accent** already earmarked in the Autari system (it also matches the user's own reference image), so the goal here is *not* to replace green with violet, but to let violet do a narrow, specific job alongside it:

- **Blend rule:** keep violet strictly out of primary CTAs, primary glow, and the "hero energy core" — those stay green (Spark `#19D3A2`) so the brand identity doesn't fork. Use violet only as an **environmental/ambient accent** — e.g., a cooler rim-light or secondary particle color inside the glowing hero scene, the way this template uses cyan-blue (`#5AC8FA`) as a *second* glow color against its violet base. Concretely: Autari's hero "glowing world" can be 80–90% green/teal bioluminescence with a violet undertone in the deep shadows/haze (swap this template's `#1A1024`/`#3B2560` deep-violet canopy for a near-black-teal, but let a thin violet rim (`#7C5CFF` at low opacity) bleed at the edges of glow sources) — this mirrors exactly how the template layers cyan-blue highlights on top of its violet base, just with the two hues swapped in dominance.
- **Direct steal — stat-chip row:** rebuild the "32km Range / 150km Top speed / 75kWh Battery Capacity" row verbatim in structure (dark-glass chip, big number + tiny unit + small label, evenly spaced band under the CTA) but swap the content to Autari's actual proof points: e.g. **"40+ hrs/mo saved"**, **"24/7 always-on"**, **"1 human review at first"** — same 3-tier type hierarchy, same near-black frosted-glass chip (`#15101F`-equivalent, e.g. Ink `#0B0E12` at ~75% with a hairline green-tinted border instead of white).
- **Direct steal — glowing-environment hero:** replace the violet bioluminescent forest with a green/teal bioluminescent "AI workspace" or abstract energy-field environment (already aligned with the existing `hero_v1`/`hero.mp4` liquid-chrome-and-emerald-core asset in the broader Autari asset set) — keep this template's density of small glowing particles and the independent/staggered pulse timing on ambient light sources, since that's what makes the scene feel alive rather than static.
- **Numbered markers:** reuse `[001]…[005]` bracket-and-word format for Autari's how-it-works: `[001] Tell us the role` · `[002] We build it to your firm` · `[003] It starts working` (extend to five if a five-step narrative is wanted, teased at the hero's bottom edge exactly as t38 does).
- **Headline swap:** structurally mirror "The Perfect Balance of Industrial Speed" (big four-line stacked uppercase, left-aligned, tight leading) but reposition for Autari's actual pitch — something like "AI EMPLOYEES FOR ANY FIELD" as the stacked headline, with the small body line underneath doing the explaining, mirroring this template's headline/subhead pairing exactly.
- **CTA swap:** "View More" pill + arrow → **"Book a call"** pill + arrow, linking to `mailto:noor@autari.co.uk`, in the same solid off-white pill + separate circular-arrow-button pairing seen here.
- **Feature card swap:** the top-right "EXPERIENCE LUXURY ON WHEELS ↗" card becomes a short proof/positioning card, e.g. "AI EMPLOYEES ACROSS ANY FIELD ↗", same white-bordered card + close-up visual + black caption + arrow format, positioned top-right of the hero exactly as here.
- **3D tilt + push-in scroll:** carry over the whole-hero tilt-then-push-in scroll behavior for Autari's hero-to-how-it-works transition — scrolling should feel like moving deeper into the glowing green world toward `[001]`, not a hard section cut, reinforcing the "living, always-on" brand feeling the stat chips also promise.
- **Nav pill:** "Login" → keep as-is if Autari ever needs a client portal login, otherwise drop it and keep only the circular globe/menu icon paired with the primary "Book a call" pill.
