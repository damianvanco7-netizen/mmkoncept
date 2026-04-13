

## Plán: Úpravy Consulting CTA buttonu a Mobile verzie Homepage

### 1. Consulting — CTA button "Start the conversation" na dva riadky
**Súbor:** `src/pages/Consulting.tsx`
- Rozdeliť text v buttone na dva `<span className="block">` riadky: "Start the" / "conversation"
- Mierne zväčšiť font na `text-base md:text-lg`

### 2. Mobile flickering pri scrollovaní
**Súbor:** `src/pages/Index.tsx`
- Problém: Hero sekcia má `z-index: 1` a sekcie pod ňou (Philosophy, Founder) majú `z-index: 0`. Na mobile hero zaberie celý viewport a prekrýva obsah pod ním, čo spôsobuje preblikávanie
- Riešenie: Odstrániť rozdielne z-indexy — dať všetok obsah do jedného wrapperu s rovnakým z-indexom, alebo zabezpečiť, že hero nemá `position: relative` s vyšším z-indexom, ktorý prekrýva nasledujúci obsah

### 3. Sieť v hero sekcii — väčšia a menej hustá na mobile
**Súbor:** `src/components/NetworkCanvas.tsx`
- Zvýšiť `clusterRadius` z `0.35` na ~`0.50` (viac roztiahnuť uzly)
- Znížiť `clusterCount` z `50` na ~`35` (menej hustota)

### 4. Pozadie pod fotkou — len za kruhom, nie cez celý screen
**Súbor:** `src/components/FounderSection.tsx`
- Na mobile `backdrop-blur-md` na vonkajšom kruhovom dive sa vizuálne prejavuje príliš výrazne
- Odstrániť `backdrop-blur-md` na mobile a ponechať len na desktop: zmeniť na `md:backdrop-blur-md`
- Alternatívne nahradiť blur statickým semi-transparentným pozadím

### 5. Navbar na mobile pri scrollovaní — šírka obsahu
**Súbor:** `src/components/Navbar.tsx`
- Keď je scrolled na mobile, namiesto `max-w-3xl rounded-full px-8` použiť `section-padding` šírku
- Zmeniť mobilné správanie: na mobile zachovať `section-padding` a `rounded-2xl` namiesto `rounded-full`, aby navbar mal rovnakú šírku ako obsah stránky
- Na desktop ponechať súčasné správanie (`max-w-3xl rounded-full`)

### Technické detaily
- Súbory na úpravu: `Consulting.tsx`, `Index.tsx`, `NetworkCanvas.tsx`, `FounderSection.tsx`, `Navbar.tsx`
- Žiadne nové závislosti

