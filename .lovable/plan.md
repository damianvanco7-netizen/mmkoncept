

## Plan: Zjednotenie glass efektu s headerom

### Problém
`.liquid-glass-circle-light` v CSS má rovnaký `backdrop-filter: blur(28px) saturate(1.6)` ako header, ale navyše obsahuje:
- `::before` pseudo-element — biely gradient odlesk zhora
- `::after` pseudo-element — tmavé radial gradienty + animácia `liquid-caustic`

Tieto extra vrstvy pridávajú viditeľné tmavé škvrny a odlesky, ktoré header nemá, preto elementy vyzerajú inak.

### Riešenie
Odstrániť `::before` a `::after` pseudo-elementy z `.liquid-glass-circle-light` a ponechať len čistý glass efekt identický s headerom:

**Súbor: `src/index.css`**
- `.liquid-glass-circle-light` — ponechať background, border, backdrop-filter, box-shadow (už sú takmer 1:1 s headerom)
- Odstrániť celý blok `::before` (riadky 325-343)
- Odstrániť celý blok `::after` (riadky 345-356)
- Mierne zvýšiť background opacity na presne rovnaké hodnoty ako header: `rgba(255,255,255,0.30)` → `rgba(255,255,255,0.15)` 

Výsledok: kruhy aj pill buttony budú mať presne rovnaký čistý glass blur ako header pill shape.

### Súbory na úpravu
1. `src/index.css` — úprava `.liquid-glass-circle-light` a odstránenie pseudo-elementov

