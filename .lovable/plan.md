
Plan: Fix the Consulting subtitle so it stays on exactly 2 lines

1. Update the subtitle markup in `src/pages/Consulting.tsx`
- Right now the text already has a manual `<br />`, but the first line is still wrapping before that break.
- I’ll replace the plain text + `<br />` with two explicit block lines so the split is controlled directly.

2. Adjust desktop wrapping behavior
- The current subtitle uses `heading-h3` together with `max-w-2xl`, which is too narrow for that first sentence on a 15" laptop.
- I’ll widen the centered subtitle container and add desktop-only no-wrap to the first line so it cannot collapse into 3 lines on larger screens.
- On smaller screens, normal wrapping will stay allowed so nothing overflows.

3. Verify on the Consulting page layout
- Check `/consulting` at the current desktop viewport to confirm:
  - exactly 2 lines
  - no third-line wrap
  - centered alignment still looks correct

Technical details
- File to update: `src/pages/Consulting.tsx`
- Root cause: `heading-h3` at desktop size (`lg:text-3xl`) + `max-w-2xl` is still too narrow, so the first line breaks before the manual line break
- Best fix: explicit two-line spans + wider container + desktop-only nowrap for the intended first line
