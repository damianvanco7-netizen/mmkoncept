

## Problem

The preview is completely blank because `@react-three/fiber@^9.5.0` was installed, which requires **React 19**. This project uses **React 18**, causing a runtime crash: `Cannot read properties of undefined (reading 'S')` inside the fiber reconciler.

## Fix

Downgrade the dependency versions in `package.json`:
- `@react-three/fiber`: change from `^9.5.0` to `^8.18.0`
- Verify `three` is at a compatible version (>=0.133)

No other code changes are needed — the `Silk.tsx` component and `HeroSection.tsx` are fine. The issue is purely a version incompatibility.

## Scope

One file change: `package.json` — update the `@react-three/fiber` version to `^8.18.0`.

