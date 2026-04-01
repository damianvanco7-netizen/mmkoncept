

## Plan: Liquid Glass efekt na bledom pozadí (Modular Architecture)

### Problém
Aktuálny `.liquid-glass-circle` používa biele (`rgba(255,255,255,...)`) highlights, bordery a gradienty — tie sú navrhnuté pre tmavé pozadie. Na bledom/béžovom pozadí sekcie Modular Architecture sú tieto efekty prakticky neviditeľné.

### Riešenie
Vytvoríme novú CSS triedu `.liquid-glass-circle-light` optimalizovanú pre svetlé pozadie:

**Súbor: `src/index.css`**
- Nová trieda `.liquid-glass-circle-light` s týmito odlišnosťami oproti dark variante:
  - **Background gradient** — jemný mix tmavších a svetlejších tónov namiesto čisto bielych (`rgba(0,0,0,0.04)` až `rgba(255,255,255,0.5)`)
  - **Border** — tmavší, viditeľnejší: `rgba(0,0,0,0.08)` + biely inner glow
  - **Box-shadow** — outer shadow s tmavými tieňmi (`rgba(0,0,0,0.12)`), inner specular s bielou
  - **Backdrop-filter** — rovnaký blur(24px), saturácia, brightness
  - **`::before`** — specular highlight zostáva biely (na svetlom pozadí stále funguje ako odlesk)
  - **`::after`** — caustic efekty s mix bielych a tmavých radiálnych gradientov pre lepší kontrast
  - **Hover** — výraznejší shadow + lift

**Súbor: `src/components/VVDimensionsGrid.tsx`**
- Zmeniť triedu kruhov z `liquid-glass-circle` na `liquid-glass-circle-light`

### Výsledok
Kruhy v sekcii Modular Architecture budú mať viditeľný glass efekt — jemné tiene, specular odlesky a hĺbku — rovnako výrazný ako na tmavom pozadí homepage, ale prispôsobený svetlému béžovému pozadiu.

