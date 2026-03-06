

# mm concept × Virtual Village — Premium Landing Page

## Brand System (from your assets)

- **Font**: Montserrat (Google Fonts) — all headings and body
- **Colors**:
  - `#EAE3D9` — warm beige (primary background, Virtual Village sections)
  - `#0D0400` — near-black (dark sections, text, mm concept technical areas)
  - `#C5BEB4` — muted taupe (secondary/accent backgrounds)
  - Gradient: `#EAE3D9` → `#C5BEB4` for transitions
- **Button style**: Neumorphic rounded pill buttons with subtle gradient overlay and stroke, inspired by your button design spec (stable/hover states)
- **Visual tone**: The warm beige/taupe palette throughout, with near-black for contrast sections

## Reference images usage
- App mockup screenshots (12.jpg, 13.jpg, 15.jpg) → embed as product showcase visuals in STAR Pro and Virtual Village sections
- 3D village render (11.jpg) → use as visual in the Virtual Village intro section
- Button spec (10.jpg) → replicate the neumorphic pill button style in CSS
- Logo treatment (9.jpg) → reference for the pill-shaped brand element

## File Structure

```text
src/
  assets/           ← brand images copied here
  components/
    Navbar.tsx
    HeroSection.tsx
    PhilosophySection.tsx
    VirtualVillageIntro.tsx
    StrategicPillars.tsx
    EcosystemSection.tsx
    WhyMmConcept.tsx
    TrustTechSection.tsx
    FounderSection.tsx
    RoadmapSection.tsx
    CtaSection.tsx
    Footer.tsx
  pages/
    Index.tsx        ← assembles all sections
  index.css          ← updated with brand CSS variables + Montserrat import
```

## Implementation Details

**CSS / Design System**:
- Import Montserrat via Google Fonts in index.html
- Override CSS variables with brand HSL equivalents of #EAE3D9, #0D0400, #C5BEB4
- Custom button component: pill-shaped, gradient background, subtle border, neumorphic shadow on hover

**Section backgrounds progression**:
1. Hero — white/#EAE3D9
2. Philosophy — white
3. Virtual Village Intro — #EAE3D9 with 3D village image
4. Strategic Pillars — white → gradient cards
5. Ecosystem — #EAE3D9
6. Why mm concept — #0D0400 (dark, technical)
7. Trust/Tech — #0D0400 continuing
8. Founder — #EAE3D9 warm
9. Roadmap — white
10. CTA — #EAE3D9 warm close

**Key visual elements**:
- STAR Pro section: embed app mockup images (12.jpg, 13.jpg) inside CSS phone frames
- Virtual Village intro: use 3D village render (11.jpg) as hero visual
- Product showcase (15.jpg): use in ecosystem or intro section
- All pill buttons follow the neumorphic spec from 10.jpg

**Sections** — all 10 sections as previously approved, built as individual components, assembled in Index.tsx. Navbar is fixed with backdrop-blur, "mm concept" left, section anchors right.

## Scope
- Full implementation of all 10 sections + navbar + footer
- Responsive (desktop-first, mobile-friendly)
- Brand images embedded from src/assets
- No animations yet — structure only
- CTAs are visual-only (no routing/forms)

