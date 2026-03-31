

## Plan: New Logo + Glass Header + Heading System

### 1. Replace Navbar logo with uploaded SVG
**File:** `src/assets/logo-mmconcept-new.svg` (overwrite) or new file
- Copy `user-uploads://logo_mmconcept-2.svg` to `src/assets/logo-mmconcept-2.svg`
- Update import in `src/components/Navbar.tsx` to use the new logo

### 2. Glassmorphism header effect
**File:** `src/components/Navbar.tsx`

The FluidGlass component from reactbits requires Three.js, react-three/fiber, react-three/drei, and GLB model files — this is extremely heavy (~500KB+) just for a navbar background and would hurt performance significantly.

**Recommended approach:** CSS `backdrop-filter: blur()` glassmorphism that achieves a similar frosted glass look without the 3D overhead:
- When scrolled: `backdrop-blur-xl bg-white/5 border-b border-white/10` (on dark pages) or `bg-black/5 border-b border-black/10` (on light pages like VV)
- Smooth transition on scroll
- This gives the "fluid glass" translucent blur effect natively with zero dependencies

### 3. Define heading hierarchy (H1-H4)
**File:** `src/index.css` (add utility classes) + update all pages

Based on current usage:

| Level | Reference | Sizes |
|-------|-----------|-------|
| **H1** | "Life, just simplified." | `clamp(3.5rem, 9vw, 10.5rem)`, font-semibold, tracking-tight, leading-[1.15] |
| **H2** | "Bridging Precision and Humanity" | `text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]`, font-semibold, tracking-tight, leading-[1.15] |
| **H3** | "A companion. A guide..." | `text-xl md:text-2xl lg:text-3xl`, font-bold, leading-tight |
| **H4** | Icon section titles in VV dimensions | `text-base md:text-lg`, font-semibold |

Create Tailwind `@apply` classes `.heading-h1` through `.heading-h4` in `src/index.css` and apply them consistently across all pages.

### 4. Ensure "Bridging Precision and Humanity" uses `<h2>` tag
**File:** `src/components/FounderSection.tsx`
- Already uses `<h2>` — just ensure it has the standardized H2 class

### Files to edit
1. `src/assets/logo-mmconcept-2.svg` — copy new logo
2. `src/components/Navbar.tsx` — new logo import + glass blur effect
3. `src/index.css` — heading utility classes
4. `src/components/HeroSection.tsx` — apply `.heading-h1`
5. `src/components/FounderSection.tsx` — apply `.heading-h2`
6. `src/pages/VirtualVillage.tsx` — apply heading classes consistently
7. `src/components/VVDimensionsGrid.tsx` — apply `.heading-h4`
8. `src/pages/Consulting.tsx` — apply heading classes

