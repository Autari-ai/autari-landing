# Higgsfield Prompt Bible — Autari cinematic asset set

Follows the `higgsfield-cinematic-prompting` skill. Every asset is a SCENE in ONE film with the SAME
protagonist, SAME world, SAME grade. Prompts are exhaustive (every zone of the frame + every motion) so
output is cohesive and never hallucinates stray text. All rendered assets get a green monochrome tint.

---

## 0. World Bible (reuse verbatim in every prompt)

**Protagonist ("the Core"):** a sculptural form of flowing liquid black chrome intertwined with frosted
crystal glass, suspended in mid-air, with a glowing **emerald-to-mint green energy core** pulsing at its
center. It is the visual embodiment of Autari's AI intelligence. (Already generated: `hero_v1.png`, job
`d565e9f5-8ddd-4055-9740-8ba53c746b2d`.)

**World:** a dark near-black studio void (hex `#0B0E12`) with faint volumetric haze, drifting dust motes,
and soft green god rays. Every scene lives in this same void; "workstations" and objects materialize from
green light within it.

**GLOBAL STYLE BLOCK** (prepend to EVERY image + video prompt, verbatim):
> Cinematic, deep teal-and-green color grade, near-black background hex 0B0E12, emerald-to-mint green
> energy accents (hex 0E7C66 to 19D3A2), volumetric god rays cutting through faint haze, drifting dust
> motes, anamorphic lens flares, ultra-detailed reflections and refractions, shallow depth of field,
> 24fps film look, subtle film grain, premium, elegant, futuristic, high-end.

**Secondary accent:** a subtle violet (hex `7C5CFF`) rim light may appear at edges for depth (nods to the
user's reference image + template t38). Green always dominates.

**NEGATIVE (append to every prompt):** no text, no lettering, no words, no logos, no invented brand names,
no watermarks, no UI chrome, no signature, no captions.

**Continuity:** same key light from upper-left, same green core as the light source of each scene, same
haze density, same lens. Camera moves are slow and singular (one move per shot). Everything has gentle
never-fully-static ambient motion.

**Cohesion/tint rule:** if a scene must show a real object (paper, a desk, a person's hands), render it in
the same dark void graded green — monochrome brand-tint — so all assets read as one film.

---

## The story spine (scenes = page sections)

| Scene | Page section | The beat |
|-------|--------------|----------|
| 0 | Hero | The Core awakens — we meet Autari's intelligence. |
| 1 | The problem | Repetitive admin chaos swirls, then dissolves into green particles drawn into the Core. |
| 2 | Tool marquee | (real logos; optional ambient data-stream loop) The Core's energy threads through familiar tools. |
| 3 | What it does (6 fields) | The Core projects six glowing "workstations" — finance, support, ops, engineering, sales, custom. |
| 4 | How it works (3 steps) | The Core forms a role panel → assembles an employee from energy → the employee posts an update. |
| 5 | Day in the life (scrub) | One continuous shot: the employee clears tasks; one escalates to a human node. |
| 6 | Proof / stats | Ambient green data field rising behind the numbers. |
| 7 | Final CTA | The Core, wide; camera eases back and green rays open outward — an invitation. |

---

## SCENE 0 — HERO (DONE)
- **Image:** `hero_v1.png` (nano_banana_pro, 16:9) — job `d565e9f5-8ddd-4055-9740-8ba53c746b2d`.
- **Video:** `hero.mp4` (kling2_6 i2v, 5s, slow dolly-in) — job `2ac8748c-e43a-440f-a4e8-8b00bdcd7b7c`.
- **Page role:** full-bleed hero background loop, content panel + headline overlaid on the left negative space.

## SCENE 1 — THE PROBLEM ("you didn't start your business to do admin")
**Image (nano_banana_pro, 16:9):**
> [GLOBAL STYLE BLOCK] Wide shot inside the dark near-black studio void. FOREGROUND: a slow chaotic swirl
> of translucent, desaturated office ephemera — sheets of paper, faint spreadsheet grids, invoice forms,
> tiny notification bubbles, envelope shapes — all rendered as ghostly green-tinted glass, tumbling in a
> loose vortex. MIDGROUND: the swirl begins to break apart into fine emerald-green particles streaming
> toward the right. BACKGROUND: deep black void, faint green god rays from the right edge, drifting dust.
> Empty negative space upper-left for a headline. LIGHTING: cold, cluttered on the left resolving to warm
> green glow on the right. Mood: overwhelm turning to relief. [NEGATIVE]
**Motion (kling2_6 i2v, 5s):**
> Camera holds nearly still with a whisper-slow push-in. The tumbling paper/spreadsheet debris on the left
> keeps swirling, then progressively DISSOLVES into a stream of emerald-green particles that flow rightward
> off-frame toward the Core. Haze drifts, green rays flicker softly. Seamless, hypnotic, no sudden motion,
> no new objects, no text. [grade/lens/grain from global block]
- **Page role:** parallax band behind the problem copy; particles drift as you scroll.

## SCENE 2 — TOOL MARQUEE (mostly real logos)
Use real monochrome tool logos (Teams, Jira, Slack, Gmail, Sheets, QuickBooks, HubSpot, Notion) in the DOM.
**Optional ambient loop (kling2_6 i2v from a generated still):**
> [GLOBAL STYLE BLOCK] A horizontal river of fine green light-threads flowing left to right across the
> black void, like data moving between nodes, soft bokeh, very subtle. [NEGATIVE]
- **Page role:** faint background behind the scrolling logo row.

## SCENE 3 — WHAT IT DOES (6 field vignettes)
Same void, same green key light, each a distinct **holographic workstation** projected by the Core. Render
as 6 images (nano_banana_pro, 4:3 or 1:1 for cards); optionally animate each into a 3-4s micro-loop.
Shared preamble for all six: `[GLOBAL STYLE BLOCK] Medium shot in the dark studio void. A single glowing
emerald-green holographic workstation floats in frame, projected in light, ultra-detailed glass and
particles, one human silhouette-of-work implied but no faces. [NEGATIVE]`

1. **Finance & bookkeeping:** floating translucent ledgers, coin/receipt glyphs, a reconciling grid of numbers rendered as green glass, a calculator-like panel, gentle particle flow balancing two columns.
2. **Customer support:** a cluster of floating chat-bubble glass panels, a headset motif in green light, tickets resolving (bubbles brighten then fade), a queue shrinking.
3. **Ops & admin:** a calendar/schedule lattice, task cards sliding into "done" columns, a data-entry stream pouring into an orderly grid, a clock motif.
4. **Engineering (draft review):** a translucent technical drawing / blueprint hologram with green check-marks sweeping across it, a redline turning green, a CAD-like wireframe.
5. **Sales & CRM:** a pipeline of glass stages, contact cards flowing along a funnel, an upward green trend arc, follow-up envelopes pinging.
6. **Custom / "something else":** an abstract modular set of green glass building-blocks assembling into a bespoke shape — signalling "we build what you need."
**Motion (each, kling2_6 i2v, 3-4s):** the workstation's elements drift and complete their small task (grid balances / bubble resolves / card slides to done), green particles rise, one slow parallax breath. Seamless loop, no text. [global block]
- **Page role:** service-card thumbnails; hover = tilt + glow; optional autoplay micro-loop.

## SCENE 4 — HOW IT WORKS (3 steps, numbered [001][002][003])
**[001] Tell us the role — image + 4s loop:**
> [GLOBAL STYLE BLOCK] A single frosted-glass selector panel forms in the void from green light, with soft
> empty slots/rows suggesting choices (no readable text), a green cursor-glow hovering. Camera slow push-in.
> Motion: the panel materializes edge-first, rows illuminate one by one, particles settle. [NEGATIVE]

**[002] We build it to your firm — image + 4s loop:**
> [GLOBAL STYLE BLOCK] The Core at center emits streams of emerald energy that assemble into a luminous,
> abstract humanoid "employee" silhouette made of green glass and particles — no face, no text. Camera slow
> orbit a few degrees. Motion: energy threads weave the figure together, core pulses, haze drifts. [NEGATIVE]

**[003] It starts working — image + 4s loop:**
> [GLOBAL STYLE BLOCK] The green-glass employee figure faces a floating frosted-glass activity panel (like a
> chat/board) where a new update-card lights up green and a single connecting thread reaches out to a small
> distinct human-node (a warm violet-white dot) — signalling "@mentions a human only when needed." No
> readable text. Camera locked, slow push. Motion: the update-card blooms, the thread draws itself to the
> human-node, particles rise. [NEGATIVE]
- **Page role:** three step blocks with a connecting line that draws on scroll.

## SCENE 5 — DAY IN THE LIFE (the scroll-scrubbed showpiece)
**Longer clip (kling2_6 i2v, 10s) or a sequence stitched from stills:**
> [GLOBAL STYLE BLOCK] Continuous shot in the void: the green-glass employee figure surrounded by a
> semicircle of floating frosted task-panels. One by one, panels light up green and dim (tasks completing),
> particles flowing between them. Midway, ONE panel pulses amber-violet and a thread reaches to a human-node
> (escalation). Camera slowly arcs left-to-right across the whole scene. Everything drifts with living
> micro-motion. Seamless, no readable text, no sudden cuts. [NEGATIVE]
- **Page role:** its `currentTime` is scrubbed by scroll position (scroll down = day progresses). Reduced-motion fallback = a single still.

## SCENE 6 — PROOF / STATS
**Ambient bg (nano_banana_pro still → optional 6s loop):**
> [GLOBAL STYLE BLOCK] A calm field of rising green data-particles and faint horizontal grid lines receding
> into the black void, soft bokeh, lots of empty space for large numbers to sit over. [NEGATIVE]
- **Page role:** behind the animated stat counters on glass chips.

## SCENE 7 — FINAL CTA ("let's find the work to take off your plate")
**Image + 6s loop (kling2_6 i2v):**
> [GLOBAL STYLE BLOCK] The Core centered and slightly distant, calm and inviting. Camera eases slowly
> BACKWARD as soft green god rays open outward from the core toward the viewer, haze parting, an open,
> welcoming feeling. Generous empty space for a headline + Book a call button. Motion: gentle pull-back,
> rays widen, core pulses once slowly. Seamless. [NEGATIVE]
- **Page role:** full-bleed final CTA band background.

---

## Generation plan & params
- **Images:** `generate_image` params `{model:"nano_banana_pro", prompt, aspect_ratio, count}`. Hero/bands 16:9; service cards 1:1 or 4:3; run `count:2` for choice on key assets.
- **Video:** `generate_video` params `{model:"kling2_6", prompt, medias:[{value:<image job_id>, role:"start_image"}], aspect_ratio, duration, sound:false}`. If a preset is suggested, retry with `declined_preset_id`.
- **Consistency by reference (important):** to keep the Core identical everywhere, pass the hero still as a
  reference element into scenes that feature it. Add `medias:[{value:"d565e9f5-8ddd-4055-9740-8ba53c746b2d", role:"image"}]`
  (or the model's `element`/`reference` role — check `models_explore(action:'get', model_id).medias[].roles`)
  to the Core-bearing scenes (1, 4-[002], 5, 7). Same for any object we want repeated across shots. See the
  `higgsfield-cinematic-prompting` skill → "Reusing existing elements as references".
- **Order:** generate all stills first, review for cohesion + green tint, THEN animate the approved stills. Poll `job_status sync:true`.
- **Budget:** Higgsfield Max, ~1684 credits. Full set ≈ 1 hero (done) + 1 problem + 6 fields + 3 steps + 1 day-in-life + 2 ambient ≈ 13 stills + ~11 clips. Comfortably within budget; re-roll any that break cohesion.
- **View before wiring:** convert each mp4 → gif (fps 10, 480px) and Read it to verify motion/cohesion.
- **Tint pass:** if any asset drifts off-hue, re-grade green in ffmpeg or re-roll with a stronger green emphasis.
