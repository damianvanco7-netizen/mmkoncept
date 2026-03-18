
Problem:
Karty tam v kóde sú, ale aktuálne sú prakticky skryté layoutom a animáciou v `PhilosophySection.tsx`.

Čo som overil:
- `src/pages/Index.tsx` už obsahuje len: `HeroSection -> PhilosophySection -> FounderSection -> Footer`
- teda problém už nie je v odstránených sekciách ako `Flagship Platform`
- v `src/components/PhilosophySection.tsx` sú obe karty normálne vyrenderované:
  - `Virtual Village`
  - `Consulting & Strategy`

Prečo ich nevidíš:
1. Celá sekcia má `h-screen` a `overflow-hidden`
2. Karty sú vložené pod hlavným textom v tom istom pinned kontajneri
3. GSAP ich na začiatku nastaví na:
   - kontajner kariet: `opacity: 0, y: 60`
   - jednotlivé karty: `opacity: 0, y: 30`
4. Následne sa vnútorný kontajner posúva hore cez `y: "-50%"`
5. Výsledok: karty sa síce renderujú, ale vo viewporte sa objavia príliš neskoro alebo ostanú odrezané mimo viditeľnej časti sekcie

Čo upravím:
- zjednoduším `Projects & Services` sekciu tak, aby boli karty vždy reálne viditeľné
- zachovám reveal efekt hlavného textu
- odstránim/zmiernim posun `innerRef` nahor, ktorý teraz obsah odsúva mimo viewport
- upravím rozloženie pinned sekcie takto:
  ```text
  [ label ]
  [ reveal text ]
  [ cards: Village | Consulting ]
  ```
- karty nechám animovať len cez jemný fade/slide-in, nie cez agresívny posun celej sekcie
- ponechám poradie:
  - Village vľavo
  - Consulting vpravo
- pod každým textom ostane button podľa tvojho zadania

Technický plán:
- `src/components/PhilosophySection.tsx`
  - upraviť GSAP trigger timing
  - odstrániť alebo výrazne znížiť `y: "-50%"`
  - spraviť layout s dostatočným vertikálnym priestorom pre text aj karty v rámci `h-screen`
  - prípadne zmeniť `justify-center` na rozloženie, kde text ostane hore/stred a karty sa ukážu pod ním bez cropnutia
  - zachovať `grid-cols-1 md:grid-cols-2`, aby na desktop viewporte boli dve kolóny vedľa seba

Očakávaný výsledok:
- pri scrollovaní sa najprv odkryje headline
- hneď potom budú viditeľné obe karty
- Village bude naľavo, Consulting napravo
- buttony pod textami budú viditeľné bez toho, aby ich odrezal viewport

Poznámka:
Momentálne je problém už čisto vo vnútri `PhilosophySection`, nie v ďalšej sekcii pod ňou.
