
Cieľ

- Na mobile Safari mať fullscreen pozadie bez spodného orezu, ale vizuálne čo najbližšie tomu, čo dnes vidíš v Chrome.

Prečo to teraz nevyzerá rovnako

- V kóde sa Safari a Chrome už teraz nerenderujú rovnako:
  - Chrome/mobile ide cez reálny shader snapshot z canvasu (`toDataURL('image/png')`)
  - iOS Safari ide cez úplne inú vetvu: ručne poskladaný CSS fallback (`buildStaticGradientBackground(...)`)
- Preto Safari dnes neukazuje “ten istý gradient”, ale iba jeho približnú náhradu.
- Tento fallback vznikol preto, lebo iOS Safari má problémovú kombináciu:
  - `position: fixed`
  - WebGL/canvas snapshot
  - dynamické spodné/vrchné toolbary
  - safe-area
  - `backdrop-filter`
- Výsledok: buď sa spodok orezával, alebo snapshot/farby/blur vyzerali zle.
- Čiže problém nie je, že Safari “nevie gradient”, ale že kvôli stabilite tam dnes používame iný renderer než v Chrome.
- Úplne 100% pixel-perfect rovnaký blur cez sklenené elementy nemusí byť nikdy garantovaný, lebo WebKit kompozituje `backdrop-filter` trochu inak než Chrome. Samotný podklad však vieme spraviť prakticky rovnaký.

Plán opravy

1. Zrušiť iOS Safari CSS gradient fallback
- Odstrániť použitie `buildStaticGradientBackground(...)` pre iOS Safari.
- Namiesto aproximácie použiť rovnaký vizuálny zdroj ako v Chrome: statický obrázok vytvorený z reálneho shaderu.

2. Pre Safari použiť skutočný fullscreen background image
- Pripraviť vysokokvalitný retina asset z aktuálneho grainientu.
- Pravdepodobne 2 varianty:
  - tmavý pre homepage / consulting / legal
  - svetlejší pre `/virtual-village`
- Tento asset nasadiť ako fixný fullscreen background layer, nad ktorým bude scrollovať obsah.

3. Upraviť layout vrstiev, aby sa už nič nerezalo
- Safari background držať ako samostatnú fullscreen vrstvu viazanú na viewport, nie ako gradient rozťahovaný cez celý dokument.
- Obsah bude mať vyšší stacking context a pôjde ponad obrázok.
- Zachovať safe-area správanie, ale bez spodného “hacku”, ktorý rozbíjal vizuál.

4. Vyčistiť Safari-specific efekty, ktoré obraz kazia
- Odstrániť alebo výrazne stlmiť:
  - `.grainient-ios-gradient::after`
  - dodatočný `filter: saturate(...) contrast(...)`
  - prípadné overlaye, ktoré robia pozadie ploché alebo mliečne
- Cieľ je, aby blur/glass elementy brali podklad z reálneho obrázka, nie z umelej CSS vrstvy.

5. Zachovať Chrome/Desktop bez zmeny
- Chrome dnes vyzerá správne, preto jeho vetvu nechám tak.
- Zmena bude cielená len na mobile Safari.

Technické detaily

- Hlavné súbory na úpravu:
  - `src/components/Grainient.tsx`
  - `src/components/Grainient.css`
  - prípadne pridať 1–2 assety do `public/` alebo `src/assets/`
- Dôležitý bod: aktuálny Safari branch v `Grainient.tsx` je dôvod mismatchu. Kým Safari používa CSS fallback a Chrome PNG snapshot, rovnaký výsledok nebude.
- Ak budeme chcieť čo najpresnejšiu zhodu, najspoľahlivejšie riešenie je “rovnaké pixely”:
  - nie CSS gradient
  - ale predgenerovaný obrázok z toho istého shaderu

Očakávaný výsledok

- Safari už nebude orezávať spodok
- pozadie bude výrazne bližšie Chrome verzii
- glass/blur efekt bude fungovať lepšie, lebo dostane kvalitný podklad
- malé rozdiely v samotnom blur správaní môžu ostať kvôli WebKit engine, ale gradient ako taký môže vyzerať takmer rovnako
