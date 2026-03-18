

## Interactive Network Visualization in Hero Section

### Concept
A canvas-based particle network that visually represents the brand metaphor: **chaos becoming order**. On the left side, nodes are densely interconnected (tangled mesh). Toward the right, nodes spread out into a clean, simplified line with fewer connections — mirroring the uploaded image and the "Life, just simplified" tagline.

The network reacts to the mouse cursor — nodes gently repel/attract when hovered, creating a subtle interactive effect.

### Technical Approach

**New component: `src/components/NetworkCanvas.tsx`**
- Pure HTML5 `<canvas>` element (no Three.js/WebGL overhead — lightweight)
- Renders behind the hero text as an absolute-positioned layer
- Implements:
  1. **Node generation**: ~80-120 particles distributed with a density gradient (dense/tangled on left → sparse/ordered on right)
  2. **Connection lines**: Draw lines between nearby nodes; threshold decreases toward the right so left side appears chaotic, right side clean
  3. **Right-side alignment**: Rightmost ~5 nodes snap to a horizontal line (like the image)
  4. **Mouse interaction**: Track cursor position; nodes within a radius gently push away or wobble, then drift back to their base position
  5. **Animation loop**: `requestAnimationFrame` for smooth 60fps rendering
- Colors: Use muted grays (`#999`, `#bbb`) with varying opacity to match the warm beige aesthetic
- Responsive: Canvas resizes with container via `ResizeObserver`

**Edit: `src/components/HeroSection.tsx`**
- Import and place `<NetworkCanvas />` as an absolute background layer behind the text content
- Text stays on top with `z-10`, canvas sits at `z-0`

### Visual Behavior
- Nodes have slight ambient drift (slow random movement)
- On cursor proximity (~100px radius): nodes shift away softly, spring back when cursor leaves
- Left cluster: many overlapping connections, organic feel
- Right trail: 4-5 dots on a gentle curve/line, minimal connections
- Subtle opacity — doesn't overpower the text

### File Changes
1. **Create** `src/components/NetworkCanvas.tsx` — self-contained canvas component (~150 lines)
2. **Edit** `src/components/HeroSection.tsx` — add NetworkCanvas behind content

