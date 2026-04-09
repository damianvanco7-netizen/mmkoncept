

## Problem

The network animation on the Consulting page looks different from the hero section because the CTA section container is much smaller (`py-28 md:py-36`) than the hero (`min-h-screen`). Since the node positions are calculated as proportions of the container's width/height, a smaller container produces a visually different (compressed) network.

## Solution

Make the Consulting CTA section `min-h-screen` so the NetworkCanvas has the same dimensions as the hero section. This will make the cluster and connections look identical since the proportional coordinates are already the same.

### Changes

**`src/pages/Consulting.tsx`** (line 79):
- Change the CTA section from `py-28 md:py-36` to `min-h-screen flex flex-col justify-center` so it matches the hero section's height
- Keep `section-padding` and `overflow-hidden`

**`src/components/NetworkCanvas.tsx`** — no changes needed. The consulting variant already uses the same cluster parameters as hero (position `w * 0.22, h * 0.45`, radius `Math.min(w,h) * 0.35`, 120 nodes, same `rFactor`). Only the trailing dots direction differs (bottom-left for Connect vs bottom-right for Our Portfolio), which is correct.

