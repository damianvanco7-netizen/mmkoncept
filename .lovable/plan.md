

## Plan

### 1. Remove Silk effect from Hero section (`HeroSection.tsx`)
- Remove `Silk` import and `<Silk />` component
- Add a dark background color (e.g. `bg-[#0D0400]`) to the section since Silk was providing the dark background
- Change heading to "Life, just simplified." (single line, no `<br />`)
- Keep subheading and button as-is

### 2. Update Hero heading (`HeroSection.tsx`)
- Replace multi-line "Designing / Human-Centric / Digital Ecosystems." with "Life, just simplified."

### 3. Update Philosophy/Origin section (`PhilosophySection.tsx`)
- Change the `lines` array to: `["At mm concept, we bridge the gap between high-level corporate strategy", "and human-centric digital solutions."]`
- Change the label text from "Origin" to "Projects & Services"

### 4. Update Navbar navigation (`Navbar.tsx`)
- **Origin** → anchor to `#hero` (hero section needs `id="hero"`)
- **Projects & Services** → anchor to `#philosophy` (the current Origin/Philosophy section)
- **About** → stays as-is (`#founder`)
- **Contact** button → anchor to `#footer` (footer needs `id="footer"`)
- Remove Virtual Village and Technology links
- Update both desktop and mobile menus

### 5. Add IDs
- Add `id="hero"` to HeroSection's `<section>`
- Add `id="footer"` to Footer's `<footer>`

