

## Plan: Network Canvas Changes + Footer Unification

### 1. Remove logo from Homepage Hero
**File:** `src/components/HeroSection.tsx`
- Remove the `<img>` element (lines 18-27) showing `mmconceptLogo` above the title
- Remove the unused import on line 3

### 2. Create mirrored NetworkCanvas component
**File:** `src/components/NetworkCanvasMirrored.tsx` (new)
- Copy NetworkCanvas but mirror it horizontally — cluster on the RIGHT side instead of left
- Change `clusterCenterX` from `w * 0.28` to `w * 0.72`
- Adjust dot positions to start from right and go left
- Adjust exit node sorting to favor left-side nodes
- This creates a mirrored version for CTA sections

### 3. Add mirrored network to Virtual Village CTA
**File:** `src/pages/VirtualVillage.tsx` (lines 189-224)
- Import `NetworkCanvasMirrored`
- Add `<NetworkCanvasMirrored />` inside the "Be Part of the Digital Evolution" section as absolute background

### 4. Add mirrored network to Consulting CTA
**File:** `src/pages/Consulting.tsx` (lines 131-152)
- Import `NetworkCanvasMirrored`
- Remove the `darkBg` background image
- Replace with dark gradient background matching Virtual Village/homepage (`#272727 → #615F5D`)
- Add `<NetworkCanvasMirrored />` as absolute background

### 5. Unify Consulting footer & CTA with Virtual Village style
**File:** `src/pages/Consulting.tsx`
- Wrap CTA section + Footer in a `<div>` with the same dark gradient as Virtual Village: `linear-gradient(180deg, #272727 0%, #3a3937 30%, #4a4745 60%, #615F5D 100%)`
- Replace the "Contact" pill button with the same circle button style as Virtual Village ("Connect")
- Remove unused `darkBg` import

