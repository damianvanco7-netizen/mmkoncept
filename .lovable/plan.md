

## Problem
The horizontal pill sliders on mobile still clip buttons on the right side. The outer container spans full viewport width (`w-screen`), but the inner flex track (`w-max`) has no horizontal padding, so the last button is cut off at the right edge.

## Fix
Add horizontal padding (`px-6 md:px-0`) to the inner flex container in both `TechTabs.tsx` and `LeadershipTeam.tsx`. This gives the first and last buttons equal breathing room from the screen edges on mobile, while keeping desktop layout unchanged.

### Files to edit:

**`src/components/TechTabs.tsx` (line 160)**
Change the inner flex div from:
```
flex w-max min-w-max gap-4 md:min-w-0 md:w-full md:flex-wrap md:justify-center
```
to:
```
flex w-max min-w-max gap-4 px-6 md:px-0 md:min-w-0 md:w-full md:flex-wrap md:justify-center
```

**`src/components/LeadershipTeam.tsx` (line 80)**
Change the inner flex div from:
```
flex w-max min-w-max gap-3 md:min-w-0 md:w-full md:flex-wrap md:justify-center
```
to:
```
flex w-max min-w-max gap-3 px-6 md:px-0 md:min-w-0 md:w-full md:flex-wrap md:justify-center
```

This matches the left-side spacing and ensures buttons are never clipped on either edge.

