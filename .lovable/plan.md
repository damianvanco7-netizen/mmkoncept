

## Plan

### 1. Fix blur in Origin section (`PhilosophySection.tsx`)

The cleanup function `ScrollTrigger.getAll().forEach((t) => t.kill())` kills all ScrollTrigger instances globally, which can cause cross-section interference. Fix by tracking only this section's triggers and killing only those. Also explicitly set `filter: 'none'` on word elements to ensure no residual blur from any source.

### 2. Slide-up effect for Flagship Platform (`VirtualVillageIntro.tsx`)

The Vectura "Smarter teams" effect works like this: the previous section (Origin) stays pinned/static, and the next section (Flagship Platform) scrolls up over it naturally. This is achieved by:

- Origin section already has `pin: true` — it stays fixed while user scrolls
- Make VirtualVillageIntro `position: relative` with `z-index` higher than Origin so it naturally covers it as user scrolls past the pinned area
- The `rounded-t-[2.5rem]` + slight negative margin creates the visual overlap effect
- No additional GSAP needed on VirtualVillageIntro — the pin on Origin + z-index stacking handles it

**Changes to PhilosophySection.tsx:**
- Replace global `ScrollTrigger.getAll().forEach` cleanup with specific trigger references
- Add explicit `filter: 'none'` to initial word styles to prevent any blur
- Adjust pin end to work seamlessly with the slide-up effect

**Changes to VirtualVillageIntro.tsx:**
- Add `relative z-20` and negative top margin (`-mt-16`) to slide over the pinned Origin section
- Ensure `bg-warm-white` is opaque so it fully covers Origin when overlapping

### Files to modify
- `src/components/PhilosophySection.tsx` — fix cleanup, remove any blur possibility, adjust pin
- `src/components/VirtualVillageIntro.tsx` — add z-index and negative margin for slide-up effect

