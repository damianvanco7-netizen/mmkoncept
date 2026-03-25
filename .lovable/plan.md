

## Plan: Update Philosophy Section

### Changes to `src/components/PhilosophySection.tsx`

1. **Remove "Discover our portfolio" as a standalone `<p>` subtitle** (line 43) — delete it entirely from that position.

2. **Convert it into a styled button/pill above the circles** — add a clickable button-style element with the text "Discover our portfolio" positioned between the heading and the circles. It will be styled as a subtle bordered pill/button (similar to how "explore our two core pillars:" was previously styled).

3. **Increase spacing between the two circles** — change `gap-4 md:gap-8` on line 46 to `gap-8 md:gap-16` for more breathing room between the circles.

### Technical Details

- Line 43: Remove the `<p>` element
- Add a new styled element (non-interactive label/button shape) with "Discover our portfolio" text before the circles div
- Line 46: Update gap classes from `gap-4 md:gap-8` to `gap-8 md:gap-16`

