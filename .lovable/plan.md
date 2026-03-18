

## Problem

The two service cards (Virtual Village, Consulting & Strategy) exist in the code but are **invisible** because of the overlay architecture:

1. `PhilosophySection` renders two sections: a pinned `h-screen` claim + a separate cards section below it
2. `VirtualVillageIntro` has `className="-mt-[100vh]"` which pulls it up to overlay the pinned section
3. The cards section sits between the pinned section and VirtualVillageIntro — it gets completely covered by the overlay

```text
┌─────────────────────────┐
│  Pinned claim (h-screen)│  ← visible during scroll
├─────────────────────────┤
│  Cards section          │  ← EXISTS but covered
├─────────────────────────┤
│  VirtualVillageIntro    │  ← slides over with -mt-[100vh]
│  (overlays everything)  │
└─────────────────────────┘
```

## Solution

Move the cards **inside** the pinned section so they appear as part of the same pinned viewport. During the pin scroll (which lasts `+=200%`), the cards will fade in after the text reveal completes.

### Changes to `PhilosophySection.tsx`

1. Remove the separate cards `<section>` — merge cards into the single pinned `<section>`
2. Place the cards grid below the claim text, inside the same pinned container
3. Adjust GSAP timeline: after word reveal finishes (~60% of pin), animate cards to fade in and slide up within the remaining pin duration
4. Use `position: absolute` or flex layout to position cards below the claim text within the `h-screen` container — cards start hidden and animate into view as text scrolls up or fades
5. Alternatively, increase the section height and use `overflow: hidden` with GSAP-driven vertical translate to scroll the content within the pinned frame (claim scrolls up, cards scroll in from below)

### Recommended approach

- Keep the pinned section as `h-screen` with `overflow: hidden`
- Wrap claim + cards in an inner container
- Use GSAP to translate the inner container upward during the later phase of the pin, sliding the claim out and the cards in
- Cards animate with staggered fade-in as they enter the viewport area

This preserves the overlay effect with VirtualVillageIntro while making the cards visible during the scroll interaction.

