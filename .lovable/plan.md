

## Plan: Match right column stagger to left column diagonal

The issue is that the right column (items 5, 6, 7) currently staggers using `marginRight` (pushing from the right edge inward), while the screenshot shows both columns staggering in the same diagonal direction — items shifting progressively to the right from top to bottom.

### Change in `src/components/VVDimensionsGrid.tsx`

**DimensionItem component** (lines 64-94): Change the right column offset from `marginRight` to `marginLeft`, so both columns stagger in the same direction (left-to-right, top-to-bottom):

- Left column: `marginLeft: index * 3rem` (0, 3, 6, 9) — unchanged
- Right column: `marginLeft: index * 3rem` (0, 3, 6) — same diagonal direction as left

This single change makes both columns flow diagonally like the screenshot reference.

