

## Fix: iOS Safari scroll flicker on mobile

### Root cause
The `ResizeObserver` on the Grainient container fires every time iOS Safari shows/hides its toolbar during scrolling. Each resize triggers `renderer.setSize()` which recreates the WebGL framebuffer — causing the visible flash/flicker.

### Approach
Keep everything identical visually (gradient, animation, blur) but prevent resize-triggered redraws during scroll on mobile. No changes to navbar or cookie banner blur.

### Changes

**1. `src/components/Grainient.tsx` — Debounce/stabilize resize on mobile**

Replace the `ResizeObserver` → `setSize` logic with a mobile-aware approach:
- On mobile, set the canvas size once using `window.innerHeight` (the maximum viewport height) instead of tracking `getBoundingClientRect()` which fluctuates with toolbar show/hide
- Use `100lvh` concept: size to `window.screen.height` (or a stable max) so the canvas never needs resizing during scroll
- Keep `ResizeObserver` only for desktop where toolbar toggling doesn't happen
- Add a debounce (300ms) as a safety net for any remaining resize events on mobile

**2. `src/components/Grainient.css` — GPU compositing hints**

Add to `.grainient-container`:
```css
transform: translateZ(0);
will-change: transform;
backface-visibility: hidden;
-webkit-backface-visibility: hidden;
```

This forces the canvas onto its own GPU compositing layer, preventing repaints from propagating to/from the scrolling content layer.

### What stays the same
- Full gradient animation on mobile
- All blur effects (navbar, cookie banner) unchanged
- Visual appearance identical on both platforms
- No "orezanie" — the container still extends into safe areas with negative insets

### Technical detail
The key insight: on mobile Safari, we size the canvas to `window.screen.availHeight` (the full screen height including toolbar area) once at mount, and skip all subsequent resize events. The fixed container with negative safe-area insets already covers the full viewport, so a stable oversized canvas just works without any visible cropping.

