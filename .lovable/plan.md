
Cieľ: prerobím mobilné pill slidery v sekciách `TechTabs` a `LeadershipTeam` na skutočný carousel s rovnakou logikou ovládania ako funguje fotogaléria/mobile carousel, aby sa dali spoľahlivo swipeovať, aby prvý pill bol vždy celý viditeľný a aby sa po kliknutí aktívny pill automaticky posunul do stredu.

1. Zruším aktuálny natívny `overflow-x-auto` scroll pre pill buttony
- V `src/components/TechTabs.tsx` a `src/components/LeadershipTeam.tsx` odstránim dnešný horizontálny scroll wrapper so `snap-x`, `overflow-x-auto` a ručným `scrollTo`.
- Tento prístup je teraz príčina problému: wrapper sa bije so sekčným spacingom a pill buttony sa na mobile správajú nepredvídateľne.

2. Nahradím ho carousel patternom
- Oba zoznamy pill buttonov prerobím na carousel logiku rovnakého typu, aký sa už používa v `src/components/MobileCarousel.tsx`.
- Na mobile budú pills rozdelené do “stránok” a používateľ sa medzi nimi bude posúvať swipe gestom doľava/doprava.
- Na desktope nechám dnešné správanie bez zmeny: normálne zobrazené všetky pills naraz.

3. Zachovám klikateľnosť pill buttonov aj animáciu obsahu
- Klik na pill stále prepne aktívny obsah sekcie.
- Keď je aktívny pill na inej carousel stránke, slider sa po kliknutí/prepnutí presunie na správnu stránku, aby bol pill viditeľný.
- Tým sa splní aj požiadavka, že selected button má byť dobre viditeľný a nie mimo viewportu.

4. Opravím initial stav na mobile
- Pri načítaní sekcie bude carousel začínať od prvej stránky, takže prvý pill bude celý viditeľný.
- Nebudú tam asymetrické okraje ani useknutie na pravej strane, lebo layout už nebude závisieť od problematického full-bleed scroll kontajnera.

5. Zjednotím vizuál s existujúcim carousel správaním
- Použijem rovnaký swipe threshold, animácie prechodu a prípadne aj rovnaký štýl navigácie ako v existujúcom mobile carouseli, aby bolo ovládanie konzistentné naprieč webom.
- Samotné pill buttony vizuálne ostanú rovnaké.

Technické detaily
- Súbory na úpravu:
  - `src/components/TechTabs.tsx`
  - `src/components/LeadershipTeam.tsx`
  - pravdepodobne menšia refaktorizácia v `src/components/MobileCarousel.tsx` alebo vytvorenie ľahkej zdieľanej varianty pre pill navigáciu
- Referencia:
  - `src/components/MobileCarousel.tsx`
  - mobilná galéria vo `src/pages/VirtualVillage.tsx`

QA po implementácii
- Otestujem mobile správanie v oboch sekciách:
  - swipe doľava/doprava funguje
  - prvý pill je po príchode do sekcie celý viditeľný
  - klik na pill prepne obsah a pill zostane viditeľný
  - pravá strana už nie je useknutá
  - desktop layout ostane nezmenený
