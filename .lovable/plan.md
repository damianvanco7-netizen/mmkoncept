

## Plan

### 1. Zväčšiť guľôčky o 10% a zachovať medzery

**Súbor:** `src/pages/Consulting.tsx`

Aktuálne rozmery: `clamp(200px, 22vw, 300px)` → nové: `clamp(220px, 24vw, 330px)`

Zároveň zvýšim gap z `md:gap-8` na `md:gap-12`, aby sa medzery zachovali aj pri väčších kruhoch.

### 2. Pridať prepojenia trailing bodiek aj na druhú guľôčku

**Súbor:** `src/components/NetworkCanvas.tsx`

Aktuálne sa trailing bodky (dot0, dot1, dot2) prepájajú len postupne: dot0→dot1, dot1→dot2. Pridám ďalšie čiary:
- dot0→dot2 (prvá na tretiu)

Tým vznikne hustejšia sieť medzi trailing bodkami — každá bude prepojená aj s druhou, nielen s najbližšou susednou.

### Technické detaily

- `Consulting.tsx` riadok 73-74: zmeniť clamp hodnoty
- `Consulting.tsx` riadok 67: zmeniť gap
- `NetworkCanvas.tsx` riadky 262-269: rozšíriť prepojenia trailing bodiek — namiesto len `i → i+1` pridať aj `i → i+2` (ak existuje)

