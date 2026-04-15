

## Problem Analysis

The iOS Safari cropping at top and bottom is caused by the browser's dynamic UI elements (address bar, bottom toolbar) overlapping your content. Your `index.html` viewport meta tag is:

```
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

It's missing `viewport-fit=cover`, which tells iOS Safari to extend the web content into the safe area (behind the status bar, home indicator, etc.). Without it, Safari constrains your content but the dynamic toolbars can still visually overlap edges.

The second site (veloxsro.sk) likely either uses `viewport-fit=cover` with proper safe-area padding, or has enough natural padding that the overlap isn't noticeable.

## Plan

### 1. Add `viewport-fit=cover` to viewport meta tag
**File:** `index.html`

Change the viewport meta to:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

### 2. Add safe-area padding to the page layout
**File:** `src/index.css`

Add safe-area inset padding to the body/root so content respects the notch, status bar, and home indicator:
```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

### 3. Adjust Hero section bottom spacing
**File:** `src/components/HeroSection.tsx`

Update the "Our Portfolio" button's bottom position on mobile to account for the safe area:
```css
bottom: calc(2rem + env(safe-area-inset-bottom))
```

This ensures the button stays visible above the iOS home indicator bar.

### Summary
- `viewport-fit=cover` lets your content use the full screen
- `env(safe-area-inset-*)` padding prevents content from hiding behind iOS system UI
- The network canvas and button positions will naturally adjust within the safe area

