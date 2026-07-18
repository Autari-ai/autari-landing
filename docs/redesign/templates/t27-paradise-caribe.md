# t27 — hero-paradise-caribe

**Source / Duration / Orientation**
- Source: `https://figma-templates-en.vercel.app/assets/template%2027/hero-paradise-caribe.webm`
- Duration: 25.5s (measured exactly 25.66s / 77 frames @ 3.03fps from the studied GIF export)
- Orientation: the template is a **wide, desktop-first cinematic composition** — the full-size reference frame (`t27-a.jpeg`, 1600×1000) shows the true desktop layout: a dark browser-style frame with top nav bar, a horizontal three-panel slider, and a dark footer bar, all floating on a soft ambient backdrop. The motion GIF studied for this doc (`t27.gif`) is a **narrow mobile/portrait-viewport capture** (340×453, DAR≈0.74) of the same running sequence — same content, cropped to a phone-width column, which is why headline/media fill more of the frame there and the triptych reads as a single big media rectangle. Both were used together to reconstruct the full behavior.

## Brand & story
- Fictional brand: **"Findoly"** — a travel/destinations discovery site. Wordmark "FINDOLY" set in tracked-out small caps sans, sitting next to a small circular compass/globe glyph in the top-left of the nav.
- Concept: a **destination-of-the-moment hero** that auto-cycles through 5 travel destinations, each rendered as a full-bleed cinematic "postcard" (giant serif destination name + poetic subhead + short body blurb), separated by a **horizontal filmstrip/slider transition** that visually confirms "there are 4 more of these" via peeking neighbor thumbnails before the next destination takes over the whole frame.
- The 5 destinations, in cycle order, each with its exact on-screen copy:
  1. **PARADISE / CARIBE** — eyebrow "PARADISE", headline "CARIBE", subhead "ENDLESS BLUE HORIZONS", index "01——05". Media: tropical beach, turquoise breaking waves, palm fronds top-right, deep blue sky with soft clouds.
  2. **AURORA / TROMSO** — eyebrow "AURORA", headline "TROMSO", subhead "NORTHERN LIGHTS JOURNEY", index "02——05". Media: night-time aurora borealis (magenta/violet + cyan-teal ribbons, warm amber glow beneath) over a still lake, silhouetted pine trees, mirror-water reflection.
  3. **WILD / AMAZON** — eyebrow "WILD", headline "AMAZON", subhead "INTO WILD NATURE", index "03——05". Media: aerial/top-down river shot through a mossy-green rainforest delta, three small wooden canoes with paddlers threading between lush green islets.
  4. **OCEAN / MALDIVA** — eyebrow "OCEAN", headline "MALDIVA", subhead "BENEATH CRYSTAL WATERS", index "04——05". Media: underwater scene, a scuba diver silhouette swimming toward a shaft of surface light, coral reef (vivid red/magenta and gold coral clusters) in the foreground, small fish schools.
  5. **WINTERS / ALASKA** — eyebrow "WINTERS", headline "ALASKA", subhead "BEYOND FROZEN HORIZONS", index "05——05". Media: snow-capped mountain range, storm-grey clouds rolling over glacier ice, cool pale-blue palette.
  - Body copy under each subhead is a short (2–3 line) descriptive sentence in small light-grey sans type — legible as filler/marketing copy (e.g. under Amazon: "...rainforest, exotic wildlife and mysterious...immersive experiences surrounded [by un]touched beauty and powerful natural [wonders] everywhere.") but not the focal content — the destination name + subhead + numbered index are what carry the design.
- Nav (identical across all 5 states — persistent chrome, not part of the slide content): circular compass glyph + **"FINDOLY"** wordmark (left) · **"DESTINATIONS"  "EXPERIENCES"  "GALLERY"** (center, tracked small-caps sans, a thin vertical divider between the last two) · magnifying-glass search icon + hamburger/grid icon (right). Sits on a solid near-black bar.

## Layout — zone by zone
- **Outer ambient backdrop**: the entire browser viewport behind the media frame is filled with a huge, heavily gaussian-blurred color wash sampled from the current destination's imagery (see Palette/Motion). A faint dither/grain texture is visible over it (prevents banding on such a large soft blur).
- **Dark cinematic media frame**: a rounded-corner(ish)/hard-edge dark rectangle inset from the viewport edges (visible margin of ambient backdrop around all 4 sides), containing everything below. This frame is effectively a "glass" window onto the current destination.
- **Nav bar** (top strip of the frame, ~50-60px tall in the desktop crop): compass glyph + "FINDOLY" left · "DESTINATIONS · EXPERIENCES · GALLERY" centered · search + hamburger icons right. Solid near-black background, thin/no border, sits above the media.
- **Hero media area** (bulk of the frame): full-bleed video/photo of the current destination, with text overlaid directly on top of the image (no glass card behind the text — the imagery itself is the background):
  - Tiny tracked-out **eyebrow word** (e.g. "P A R A D I S E") in thin serif small caps, wide letter-spacing, sitting just above the headline.
  - **Giant serif headline** = the destination name (e.g. "CARIBE"), set enormous, filling most of the frame width, in a high-contrast thin-serif display face — bright white, slightly translucent/blended over the busy photo behind it.
  - **Subhead eyebrow-caps line** (e.g. "ENDLESS BLUE HORIZONS") — small, tracked, bold sans caps, positioned lower-left.
  - **Short body paragraph** (2-3 lines, small light-grey sans) directly beneath the subhead, lower-left.
  - **Numbered slide indicator**, lower-right: large serif current number (e.g. "01"), a short horizontal tick/rule, then a small muted "05" (total count) — reads "01——05" / "02——05" etc. Updates only once a destination fully takes over the frame (see Motion).
  - **Circular interaction badge**, lower-right near the index (seen clearly on the Amazon slide): a thin-ring circular badge with small rotating rim micro-copy reading approximately **"CLICK AND [DRAG]···"** wrapped around the circle, and a downward-arrow glyph at its center — the slider's drag/scroll affordance cue (same family as the "SCROLL DOWN" circular badges used in T21/T24/T28/T37).
- **Horizontal slider / peeking-neighbor transition state** (appears between destinations, not a separate page — a transitional layout of the SAME frame): the nav bar and a dark footer bar remain fixed top/bottom; the hero media area splits into **three side-by-side panels**: a narrow **left panel** peeking the outgoing destination's image, a wide **center panel** (the incoming/active destination, image-only, no text yet) and a narrow **right panel** peeking the next-up destination's image. Panels are separated by thin gaps of the dark frame background showing between them.
- **Footer bar** (only visible during the triptych/slider state, sits below the 3-panel strip): solid near-black strip holding the large serif numbered index bottom-right (e.g. "02——05").
- **Scroll cue**: the circular "CLICK AND DRAG↓" badge doubles as the scroll/drag affordance — there is no separate chevron/"SCROLL DOWN" text element beyond this badge in the studied sequence.

## Palette
Two layers: a fixed **UI-chrome palette** (constant across all slides) and 5 **destination accent palettes** that cycle through, each one also driving that slide's ambient color-bleed backdrop. Hex values below are sampled/estimated directly from the studied frames (compressed GIF/JPEG stills — treat as representative, not pixel-exact).

*UI chrome (constant):*
| Hex | Role |
|---|---|
| `#1D1F1E` | Nav bar & footer bar background (near-black, not pure black) |
| `#F5F3EC` | Headline / eyebrow / index "01" — warm off-white serif type |
| `#8B9195` | Muted grey — inactive "05" total-count numeral, tick/rule between numbers |

*01 — Caribe (tropical blue):*
| Hex | Role |
|---|---|
| `#123A5E` | Deep sky blue behind headline |
| `#3E8CA6` | Ocean/turquoise wave color — dominant ambient-bleed source hue |
| `#274A38` | Palm frond green, foreground accent |
| `#D8CDB4` | Sand / sea-foam highlight |

*02 — Tromso (aurora night):*
| Hex | Role |
|---|---|
| `#0A2038` | Night navy base / sky |
| `#B23FA0` | Aurora magenta-violet ribbon (brightest accent, ambient-bleed source) |
| `#2FC7C2` | Aurora cyan-teal ribbon |
| `#E8823C` | Warm amber glow beneath the aurora |

*03 — Amazon (rainforest):*
| Hex | Role |
|---|---|
| `#4C7A45` | Moss/canopy green — dominant hue, ambient-bleed source |
| `#1C2A1A` | Dark river water in shadow |
| `#6B4A2E` | Canoe wood-brown accent |

*04 — Maldiva (reef):*
| Hex | Role |
|---|---|
| `#1A84A5` | Reef water cyan-blue — ambient-bleed source |
| `#C6394F` | Vivid coral red/magenta — most saturated accent in the whole template |
| `#D3A23E` | Secondary gold coral cluster |
| `#0B1620` | Diver silhouette near-black |

*05 — Alaska (glacier):*
| Hex | Role |
|---|---|
| `#7B93B0` | Storm sky blue-grey — ambient-bleed source |
| `#A8BFD4` | Glacier ice pale-blue highlight |
| `#33455C` | Foreground mountain-shadow mass |

## Typography
- **Display/headline (serif)**: a high-contrast, thin-hairline transitional/didone-leaning serif (visually in the family of Playfair Display / GT Sectra / Canela) used for: (a) the giant destination headline ("CARIBE", "TROMSO"...) set at enormous size, tight/near-zero letter-spacing, all-caps; (b) the tiny eyebrow word above it, same family, but at ~10-14px with very wide tracking (e.g. "P A R A D I S E" reads like individually spaced letters); (c) the numbered slide index ("01", "05") — same serif, the current number large, the total small and muted.
- **Nav & UI sans**: a clean geometric/grotesk sans (Inter/Neue Montreal-like) for nav items ("DESTINATIONS", "EXPERIENCES", "GALLERY"), the subhead eyebrow-caps line ("ENDLESS BLUE HORIZONS"), the small circular badge's rim micro-copy, and the short body paragraph (small, light-grey, ~1.4-1.5 line-height).
- Overall type pairing: **one elegant emotional serif statement per slide + minimal tracked sans for everything utilitarian** — a clear "one hero word, everything else quiet" hierarchy.

## Motion — every element

- **Entrance** (inferred from the recurring loop transition, since the studied clip starts mid-cycle already on a settled Caribe hero): each destination's hero state is reached by the **triptych expanding back out to full-bleed** — the center panel of the 3-panel slider scales/crossfades up to fill the entire frame while the nav/footer bars retract, and the eyebrow + headline + subhead + body text **fade/crossfade in** over the now-full-bleed video roughly as it settles. The very first slide of the loop (Caribe) would enter the same way from an initial triptych/logo state.
- **Ambient / idle loop (push-in on active video)**: while a destination is "settled" in its full-bleed hero state, the background video runs its own ambient motion — waves roll in on Caribe, aurora ribbons shimmer/drift on Tromso, water ripples and canoes glide forward on Amazon, light shafts and fish drift on Maldiva, clouds roll over the glacier on Alaska — plus a slow, continuous **Ken-Burns push-in/zoom** on the active video (very subtle, a few percent scale over the hold). Text (headline/subhead/body/index) stays static during this hold — it does not bob or drift.
- **Transitions (horizontal slide advance)**: after a ~3-3.5s hold, the full-bleed hero **collapses inward** into the 3-panel triptych: the current hero shrinks/crossfades into the **center** panel, a **left** panel reveals a peek of the outgoing destination's image, and a **right** panel reveals a peek of the next-up destination's image — nav bar and a footer bar (holding the numbered index) appear/solidify around the strip. The strip then behaves like a **filmstrip advancing right-to-left**: the outgoing (left) panel narrows and slides fully off-frame, the center panel widens to absorb what was the right-peek, and a **new** right-peek (the destination two steps ahead) slides in from the right edge. This center panel then expands back to full-bleed, becoming the next destination's hero (see Entrance) — completing one cycle: **hero → collapse to triptych → filmstrip advance → expand to next hero**, repeating through all 5 destinations then looping back to Caribe.
- **Ambient color-bleed backdrop**: the soft, huge, blurred color wash filling the viewport around the dark media frame is **sampled from the currently-active destination's dominant hues** and **cross-fades to the next destination's hues in lock-step with the filmstrip transition** — e.g. blue/turquoise (Caribe) slowly bleeds into navy + magenta/cyan (Tromso), then into olive/moss green (Amazon), then into cyan-blue + hints of coral warmth (Maldiva), then into pale storm blue-grey (Alaska), then back to Caribe's blue. The backdrop is not a hard cut — the color shift is a slow continuous crossfade that spans the whole transition (collapse → filmstrip → expand), so the backdrop is often mid-blend between two destinations' palettes while the triptych is on screen. A visible fine grain/dither sits over the blur to avoid visible banding across such a large, low-frequency gradient.
- **Numbered index update**: the "01——05"-style counter does **not** update the moment the transition starts — it keeps showing the outgoing destination's number all through the triptych/filmstrip phase, and only ticks over to the new number once the incoming destination has **fully expanded back to full-bleed hero**. (Confirmed directly: a triptych frame with Amazon centered and Maldiva peeking right still displayed "02——05", i.e. Tromso's number, right up until Amazon's hero fully resolved and the counter became "03——05".)
- **Scroll / parallax**: no vertical-scroll-driven parallax was observed in the hero itself (it's a self-playing loop, not scroll-scrubbed); the circular badge's "CLICK AND DRAG" copy implies the filmstrip is also manually draggable by the user, but the studied capture shows only the automatic cycle.
- **Per-element motion summary**:
  - Nav bar: static, no motion, persistent through every state.
  - Headline/eyebrow/subhead/body: fade/crossfade only at hero entrance; static during hold; fade out as the hero collapses into the triptych.
  - Numbered index: static digits, but the *value* steps forward once per full cycle, timed to hero-expansion-complete, not to transition-start.
  - Circular "CLICK AND DRAG" badge: rim micro-copy appears to rotate/loop continuously (a looping marquee-around-a-circle), independent of the slide cycle.
  - Media/video: continuous ambient motion (waves/aurora/water/clouds) at all times, plus the slow push-in zoom during hero holds, plus the scale/crossfade/slide choreography during transitions.
  - Ambient backdrop: continuously and slowly hue-shifting, always in a soft blur-drift, never static, cross-dissolving between the two adjacent destination palettes during any transition.

## Reusable techniques
1. **Ambient color-bleed backdrop that tracks content** — not just a static blurred duplicate behind a frame, but one that **actively crossfades its hue as the foreground content changes**, turning the whole page chrome into a mood-light for whatever media is currently framed.
2. **Peeking-neighbor horizontal filmstrip** — a 3-panel (or 5-panel) coverflow-style slider where the center panel is a scaled-up "about to become hero" preview and the two side panels are genuine truncated peeks of prior/next content, not placeholder thumbnails.
3. **Hero ⇄ triptych breathing cycle** — the SAME UI element alternates between "full-bleed immersive hero" and "compact multi-item slider strip," rather than using two separate layouts/sections — an efficient way to imply "there's more" without ever leaving the hero.
4. **Numbered index that lags the transition** — updating the "01——05" counter only when the new content is fully settled (not at transition-start) reads as more deliberate/cinematic than an instant counter flip.
5. **Eyebrow + giant-serif-word + caps-subhead** headline stack — a reusable 3-tier text hierarchy (tiny tracked word / huge serif word / small bold caps line) that reads instantly and scales to any single-word "hero noun" (a place, a product, a role).
6. **Circular rotating-rim micro-copy badge** — a recurring device across many of these templates (SCROLL DOWN / Watch Demo / here CLICK AND DRAG) for a single, quiet interaction hint that doesn't compete with the hero text.
7. **Grain/dither over huge soft blurs** — a cheap, important detail: any full-viewport gaussian-blurred color wash needs visible fine noise on top or it bands badly at scale.

## Autari adaptation
**Direct steal = the ambient color-bleed backdrop.** This is the single most valuable technique in T27 for Autari, because our whole system (per the shared study's Autari mapping) is already built around one hero subject — the liquid black-chrome + crystal-glass form with a pulsing emerald core — and around **every generated asset being green/teal-graded**. That means we don't need 5 different destination palettes to make the backdrop technique work; we need the *mechanism*:
1. Take the currently-active hero video/render frame (or, per-slide, the currently-active AI-employee/testimonial clip).
2. Downsample it hard (e.g. to ~24-48px on the long edge) so only broad color blobs survive, then gaussian-blur heavily (radius large enough that no shapes are recognizable — pure color-soup) and upscale back to full viewport size.
3. Boost saturation slightly (the blurred average will look muddier than the source; push saturation +15-25% to keep it feeling alive rather than grey).
4. Overlay a subtle fine-grain/dither noise layer (2-4% opacity) to prevent banding across the huge gradient — this was directly observable as necessary in the T27 captures.
5. Because Autari's assets are already tinted into the **Pine `#0E7C66` → Spark `#19D3A2`** range, this backdrop will naturally stay in-family — every slide's bleed reads as "our green," never as a jarring rainbow cycle like T27's literal travel destinations. Reserve **Violet `#7C5CFF`** as an occasional secondary bleed-tint on exactly one slide (e.g. the "flagged for human review" or "premium/compliance" use-case) to nod to the violet reference without breaking cohesion — mirroring how T27 itself varies hue per destination but Autari should vary saturation/warmth within one hue family instead of swapping hue entirely.
6. Crossfade the backdrop in lock-step with the slider's transition (collapse → advance → expand), exactly as T27 does — never a hard cut.

**The horizontal slider maps to a use-case carousel (primary recommendation), with testimonials as a secondary section reusing the same mechanic:**
- **Use-case carousel** (recommended for the hero, because it directly sells "AI employees across ANY field"): 5 (or more) verticals cycle exactly like T27's 5 destinations:
  - Eyebrow (was "PARADISE"/"AURORA"/"WILD"/"OCEAN"/"WINTERS") → the **industry/vertical name**: "LEGAL", "FINANCE", "REAL ESTATE", "HEALTHCARE ADMIN", "LOGISTICS" (swap in whichever 5 verticals Autari is launching with).
  - Giant serif headline (was "CARIBE"/"TROMSO"/"AMAZON"/"MALDIVA"/"ALASKA") → the **AI-employee role name** for that vertical, e.g. "PARALEGAL", "CONTROLLER", "DISPATCHER", "CLAIMS CLERK", "SCHEDULER".
  - Subhead caps line (was "ENDLESS BLUE HORIZONS" etc., poetic) → an **outcome one-liner** in the same tracked-caps style: "NEVER MISSES A DEADLINE", "CLOSES THE BOOKS OVERNIGHT", "ALWAYS-ON DISPATCH", "AUDIT-READY BY MORNING", "ROUTES ITSELF AROUND DELAYS".
  - Body paragraph → 1-2 sentences on what the role actually does + what tools it plugs into, reusing the existing Autari line "Works in your tools" (Teams/Jira/QuickBooks/etc., named per vertical).
  - Media (was the destination video) → a real screen-capture-style or cinematic render of that AI employee's hero visual (the crystal-glass/emerald-core form, or a UI-mockup of it working), graded green per-asset as already planned.
  - Numbered index (was "01——05") → keep verbatim as "01——05" (or however many verticals launch), it's a clean, free "there are more of these" signal.
  - Circular badge (was "CLICK AND DRAG") → repurpose as **"SEE HOW IT WORKS"** or **"DRAG TO EXPLORE"**, same thin-ring rotating-rim treatment, still bottom-right of the hero.
  - T27 has **no explicit CTA button inside the hero itself** (it relies on the nav for action) — Autari should add one, since our CTA is the whole point: place a small ghost/outline pill **"Book a call →"** (`mailto:noor@autari.co.uk`) near the subhead/body block, persistent across all slides (doesn't need to change per-vertical).
- **Testimonials carousel** (secondary, lower on the page): same triptych/peeking-neighbor mechanic, but each "destination" becomes a client vignette — eyebrow = client's industry, giant serif word = a 1-2 word pull-quote fragment (or the client's result, e.g. "40 HOURS"), subhead = the outcome stat, body = the actual quote, media = a stylized/blurred still from that "day-in-the-life" section already planned. Numbered index becomes "01——0N" quote counter.

**Other concrete swaps:**
- Nav wordmark "FINDOLY" + compass glyph → **"AUTARI"** wordmark + a small pulsing emerald ring/dot mark (nods to the emerald-core hero subject).
- Nav items "DESTINATIONS · EXPERIENCES · GALLERY" → **"Roles · How it works · Book a call"** (or "Solutions · How it works · Pricing" if a pricing page exists); keep the thin vertical divider and the tracked small-caps styling. Keep the search icon only if a role-search/filter exists; otherwise drop it and keep just the hamburger for mobile.
- Background: T27's dark near-black `#1D1F1E` nav/footer chrome maps almost exactly onto Autari's **Ink `#0B0E12`** — reuse directly, no translation needed.
- Keep the "one elegant serif emotional headline per slide" typographic move (per the shared study's Autari type mapping: Space Grotesk display for everything utilitarian + one serif allowed) — use the serif specifically for the role name (e.g. "PARALEGAL"), exactly as T27 reserves its serif for the one-word destination name.
