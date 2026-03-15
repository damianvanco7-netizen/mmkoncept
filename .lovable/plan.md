

## Plan: Vectura-inspired Flagship Platform Redesign + Layout Adjustments

### Summary of Changes

Three main areas of work:

1. **Flagship Platform section** -- complete redesign inspired by Vectura's "Smarter teams" section
2. **Origin section** -- left-align and increase text size to H2
3. **Global width & alignment** -- wider content containers, left-aligned logo/navbar

---

### 1. VirtualVillageIntro.tsx -- Vectura-style Redesign

**Visual effect:** The section will have a dark background (`bg-card` / near-black) with rounded top corners that visually "slides up" over the previous section using negative margin or sticky/scroll effect similar to Vectura.

**Layout (Vectura-inspired):**

```text
┌─────────────────────────────────────────────────────────┐
│  (dark rounded container, slides up over prev section)  │
│                                                         │
│  Virtual Village                                        │
│  One Ecosystem. Clear Structure.                        │
│  Contextual Intelligence.                    (left H2)  │
│                                                         │
│  "Virtual Village is a modular AI-powered..."           │
│  (subtext, like the Daniel Chen quote area)             │
│                                                         │
│  ┌──────┐ ┌──────┐ ┌──────┐                            │
│  │Munic.│ │Health│ │Educ. │   (3-col grid,             │
│  │Serv. │ │care  │ │      │    6 cards total,          │
│  └──────┘ └──────┘ └──────┘    2 rows x 3)             │
│  ┌──────┐ ┌──────┐ ┌──────┐                            │
│  │Mobil.│ │Cult. │ │Local │                             │
│  │      │ │      │ │Econ. │                             │
│  └──────┘ └──────┘ └──────┘                             │
└─────────────────────────────────────────────────────────┘
```

**Implementation:**
- Dark background with `border-radius` on top (rounded-t-3xl or similar)
- Negative top margin to overlap previous section, creating "slide up" effect
- Large left-aligned heading: "Virtual Village — One Ecosystem. Clear Structure. Contextual Intelligence."
- Description text positioned below heading (left-aligned, lighter color)
- 6 module cards in 3x2 grid with dark neumorphic card style (`neu-card-dark`)
- Each card: icon + title + short description
- Remove the mockup image and pill-shape tags from this section
- Remove `ConcentricCircles` background (dark section doesn't need it)

---

### 2. PhilosophySection.tsx -- Left-align + Larger Text

- Change `max-w-4xl mx-auto` to left-aligned container matching hero's alignment (remove `mx-auto`, use same padding as hero)
- Increase text from `text-xl md:text-2xl lg:text-3xl` to H2 size: `text-2xl md:text-3xl lg:text-4xl xl:text-5xl`
- Keep "Origin" label and scroll-reveal animation intact

---

### 3. Global Width & Alignment

**Navbar (`Navbar.tsx`):**
- Change `max-w-7xl` to a wider container or remove max-width cap, so logo aligns with hero content edge-to-edge within `section-padding`

**All sections:**
- Currently using mix of `max-w-6xl` and `max-w-7xl` -- standardize to wider containers where appropriate to use more horizontal space

---

### Files to Modify
- `src/components/VirtualVillageIntro.tsx` -- complete rewrite
- `src/components/PhilosophySection.tsx` -- alignment + text size
- `src/components/Navbar.tsx` -- wider container alignment

