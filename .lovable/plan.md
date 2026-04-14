
Cieľ: prerobím mobilné pill buttony v `TechTabs` a `LeadershipTeam` na natívny horizontálny slider úplne rovnakého typu ako je foto slider v sekcii `Product Gallery` — teda `overflow-x-auto + snap-x + full-bleed wrapper`, nie stránkovaný carousel po dvojiciach.

1. Zruším aktuálny `PillCarousel` paging prístup na mobile
- Aktuálny komponent `src/components/PillCarousel.tsx` teraz stránkuje pills po 2 kusoch, preto sa nespráva ako foto slider.
- Tento mobile režim prerobím tak, aby namiesto interného “slideTo/page” systému používal rovnaký scroll model ako galéria s fotkami.

2. Nasadím presne rovnaký mobile wrapper ako v Product Gallery
- Na mobile použijem ten istý pattern:
  - `overflow-x-auto`
  - `snap-x snap-mandatory`
  - `scrollbar-hide`
  - `-mx-[clamp(1.5rem,5vw,6rem)] px-[clamp(1.5rem,5vw,6rem)]`
- Každý pill bude samostatný horizontálny item v jednom riadku, aby sa dal swipeovať úplne rovnako ako obrázky.

3. Upravím track a pill items pre správne správanie
- V mobile view zmením vnútorný layout z aktuálneho `flex-wrap justify-center` na jednoriadkový track bez zalamovania.
- Každý button dostane správny `flex-shrink-0` a podľa potreby `snap-start` alebo `snap-center`, aby bol prvý button po príchode do sekcie celý viditeľný a scroll zostal plynulý.

4. Zachovám desktop bez zmeny
- Desktop vetva v `PillCarousel` ostane klasický `flex-wrap justify-center`, takže sa nič nezmení mimo mobilu.

5. Zjednotím správanie kliknutia na aktívny button
- Po kliknutí na pill nechám prepnutie obsahu sekcie tak ako dnes.
- Mobile doplním o jednoduché dorovnanie aktívneho pillu do view cez ref na button/container, ale už bez rozbíjania natívneho scrollu.
- Cieľ je: slider ostane normálne ručne scrollovateľný a selected pill bude po kliknutí dobre viditeľný.

Technické detaily
- Súbory na úpravu:
  - `src/components/PillCarousel.tsx`
  - prípadne drobná úprava použitia v `src/components/TechTabs.tsx`
  - prípadne drobná úprava použitia v `src/components/LeadershipTeam.tsx`
- Referencia pre presnú implementáciu:
  - mobile galéria v `src/pages/VirtualVillage.tsx` (riadok s `overflow-x-auto snap-x snap-mandatory scrollbar-hide ...`)

QA po implementácii
- Overím na mobile viewport v oboch sekciách:
  - slider ide swipeovať presne ako foto galéria
  - prvý button je po príchode do sekcie celý viditeľný
  - pravá strana nie je useknutá
  - klik na pill prepne obsah a button ostane viditeľný
  - desktop layout ostane nezmenený
