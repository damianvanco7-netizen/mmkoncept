

## Fix: iOS Safari bottom cropping — static gradient snapshot on mobile

### Problem
On iOS Safari, the fixed WebGL canvas gets cropped at the bottom because the browser dynamically resizes the viewport when the toolbar appears/disappears. Even with stable sizing, the `position: fixed` container still gets clipped by iOS's visual viewport behavior.

### Solution
On mobile, render the WebGL gradient once (a single frame), capture it as a static image (`canvas.toDataURL()`), then stop the WebGL animation loop and replace the canvas with a CSS `background-image`. A static background image behaves like a photo — iOS Safari handles it correctly with no cropping or flicker.

Content scrolls over this static gradient naturally, creating the parallax-like effect you described.

Desktop keeps the full animated WebGL gradient unchanged.

### Changes

**1. `src/components/Grainient.tsx`**

- Detect mobile device at mount
- On mobile:
  - Initialize WebGL, render exactly one frame to generate the gradient
  - Call `canvas.toDataURL('image/jpeg', 0.9)` to capture the frame as a static image
  - Set the captured image as `background-image` on the container div
  - Destroy the WebGL renderer and canvas immediately (no animation loop, no RAF)
  - Add the `grainient-static` CSS class to the container
- On desktop: keep everything as-is (animated WebGL loop)

**2. `src/components/Grainient.css`**

- Update `.grainient-container` to use `height: 100vh` plus `-webkit-fill-available` for iOS stability
- The existing `.grainient-static` class already handles `background-size: cover` and the subtle radial gradient overlay

### What stays the same
- Desktop: full animated gradient, identical to current
- Mobile: visually identical gradient (same colors, same shader output), just frozen as a static image
- All blur effects (navbar, cookie banner) unchanged
- Safe-area inset coverage unchanged

### Why this works
iOS Safari never crops a CSS `background-image` on a fixed element the way it clips a WebGL canvas. The gradient looks the same because it's literally a screenshot of the same shader — just not animating. The subtle animation on mobile was barely noticeable anyway due to the slow `timeSpeed`.

