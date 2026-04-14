
Cieľ: upravím oba mobilné pill slidery na `/virtual-village` tak, aby sa správali rovnako ako slider s fotkami v Product Gallery: plná šírka, bez useknutia vpravo, s prvým buttonom hneď plne viditeľným a s aktívnym buttonom po kliknutí zarovnaným do stredu alebo aspoň kompletne do view.

1. Zjednotím mobile wrapper s Product Gallery sliderom
- V `src/components/TechTabs.tsx` a `src/components/LeadershipTeam.tsx` nahradím aktuálny mobile wrapper `w-screen / translate-x` rovnakým full-bleed patternom, aký je v `src/pages/VirtualVillage.tsx` pri Product Gallery.
- Padding presuniem zo `w-max` tracku na samotný scroll container, aby ľavý a pravý okraj boli symetrické a nič sa na pravej strane neodsekávalo.
- Desktop štýly nechám bez zmeny.

2. Opravím scroll správanie po kliknutí na button
- Súčasné `scrollIntoView(... nearest)` na mobile nahradím presnejším scroll výpočtom, ktorý aktívny pill vycentruje v rámci viditeľnej šírky slidera.
- Ak je pill na začiatku alebo na konci, scroll sa korektne “clampne”, aby button zostal celý viditeľný a slider nešiel mimo hraníc.

3. Zabezpečím správny initial stav sekcie
- Pri prvom zobrazení sekcie ostane slider na začiatku tak, aby bol prvý button viditeľný celý.
- Overím aj posledný button, aby mal na pravej strane rovnaký priestor ako prvý na ľavej.

Technické detaily
- Súbory: `src/components/TechTabs.tsx`, `src/components/LeadershipTeam.tsx`
- Referenčný pattern: mobile carousel v `src/pages/VirtualVillage.tsx`
- Implementačne:
  - full-bleed scroll container podľa gallery
  - vnútorný track bez extra `px-6`
  - mobile auto-scroll cez výpočet pozície a `scrollTo`, nie cez `nearest`

QA po implementácii
- Otestujem oba slidery na mobile viewport:
  - prvý button po načítaní sekcie
  - klik na stredný button
  - klik na posledný button
  - swipe doľava/doprava
- Skontrolujem, že pravá strana je vizuálne presne rovnaká ako ľavá a že desktop ostal nezmenený.
