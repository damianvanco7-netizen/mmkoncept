

## Plan: 6 Visual Adjustments

### 1. NetworkCanvas — trailing dots connect to cluster (not just single chain)
Currently the 3 trailing dots connect via a single chain (closest node → dot0 → dot1 → dot2). Per the screenshot, each trailing dot should also connect to nearby cluster nodes (like the cluster nodes connect to each other), creating a branching effect rather than a single line.

**File**: `src/components/NetworkCanvas.tsx`
- In the draw loop, after drawing cluster-to-cluster connections, add logic for each trailing dot to connect to the nearest 3-5 cluster nodes with the same line style
- Keep the dot-to-dot connections as well

### 2. Larger gap between "More than a platform" and "One Intuitive Space"
**File**: `src/pages/VirtualVillage.tsx` (line 115)
- Change `-mt-28` to `mt-8` or `mt-16` to add visible spacing

### 3. Leadership "Diversity is Our Power" — larger gap between title and photo
**File**: `src/components/LeadershipTeam.tsx` (line 52)
- Add `mb-12` (or larger) to the h2 heading (currently `mb-4`)

### 4. Virtual Village footer — remove dark background, use dark text
**File**: `src/pages/VirtualVillage.tsx` (lines 158-161)
- Remove the `<div style={{ background: "linear-gradient(...)" }}>` wrapper around Footer
- Render `<Footer variant="light" />` or similar

**File**: `src/components/Footer.tsx`
- Add a `variant` prop (`"dark" | "light"`) defaulting to `"dark"`
- When `variant="light"`, use `text-foreground` and `text-foreground/60` instead of `text-warm-white` and `text-warm-taupe`

### 5. Consulting subtitle — match "heading-h3" size
**File**: `src/pages/Consulting.tsx` (line 60)
- Change `text-sm md:text-base` to `heading-h3 font-normal` to match Virtual Village's subtitle size

### 6. Consulting services — wrap content in glass circles
**File**: `src/pages/Consulting.tsx` (lines 64-78)
- Wrap each service item in a circular `liquid-glass-circle` container (similar to the Connect button style)
- Place icon, title, and description inside each circle
- Use `clamp(200px, 22vw, 280px)` for width/height, `rounded-full`, with the existing `liquid-glass-circle` class

### Technical summary

| File | Change |
|------|--------|
| `NetworkCanvas.tsx` | Trailing dots connect to multiple cluster nodes |
| `VirtualVillage.tsx` | Increase section gap; remove dark footer wrapper |
| `LeadershipTeam.tsx` | Increase title-to-photo gap |
| `Footer.tsx` | Add light variant with dark text |
| `Consulting.tsx` | Larger subtitle; glass circle service cards |

