

## Plán: Vrátiť Chrome do funkčného stavu, Safari akceptovať s orezaním

### Problém
Posledné úpravy zjednotili mobilnú vetvu pre Chrome aj Safari, ale niečo sa rozbilo na oboch. Používateľ chce:
- **Chrome**: 100% funkčný animovaný gradient (desktop) a kvalitný snapshot (mobile) — ako predtým
- **Safari**: rovnaký WebGL snapshot ako Chrome mobile, akceptovať prípadné orezanie zo spodu

### Zmeny

**1. `src/components/Grainient.css`**
- Odstrániť triedu `.grainient-ios-fullpage` (tá mení `position: absolute` a `height: auto`, čo rozbíja layout)
- Odstrániť `::after` pseudo-element z `.grainient-static` (pridáva zbytočné overlaye)
- Ponechať `.grainient-container` s `position: fixed` pre všetky platformy
- Odstrániť `-60px` hack z `bottom` — nahradiť čistým `bottom: 0`

**2. `src/components/Grainient.tsx`**
- Odstrániť celú iOS-špecifickú vetvu (`grainient-ios-fullpage` class)
- Všetky mobilné zariadenia (Chrome aj Safari) idú rovnakou cestou: WebGL snapshot → `toDataURL('image/png')` → `background-image` na container
- Neaplikovať background na `html`/`body` — iba na container element (tým sa eliminuje duplicitné pozadie)
- Ponechať `preserveDrawingBuffer: true` pre mobile
- Ponechať redukciu grain pre snapshot
- Desktop: bez zmeny — animovaný WebGL loop

**3. Výsledok**
- Chrome desktop: animovaný gradient (bez zmeny)
- Chrome mobile: statický PNG snapshot z WebGL (bez zmeny)
- Safari mobile: rovnaký PNG snapshot ako Chrome mobile, `position: fixed`, prípadné orezanie zo spodu je akceptované
- Žiadne CSS fallbacky, žiadne extra overlaye, žiadne `position: absolute` hacky

