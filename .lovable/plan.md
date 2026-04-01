

## Plan: Vylepšenie Liquid Glass efektu podľa referencie

Referenčný obrázok ukazuje čisté sklenené objekty s výrazným **tenkým bielym border/edge highlight**, jemným **vnútorným tieňom (inset shadow)** a takmer **transparentným pozadím** — sklo je priesvitné, nie mliečne. Kľúčové rozdiely oproti aktuálnemu stavu:

1. **Aktuálny problém**: Príliš veľa bielej výplne (opacity), nedostatočný border highlight, slabý vnútorný tieň
2. **Cieľ**: Skutočne transparentné sklo s ostrým edge highlight a jemným depth shadow

### Zmeny v `src/index.css`

**`.liquid-glass-circle` (tmavé pozadie):**
- Background gradient — znížiť opacity na minimum (0.03–0.06) pre skutočnú transparentnosť
- Border — zvýrazniť na ~0.8px, `rgba(255,255,255,0.35)` pre ostrý edge
- Box-shadow — pridať výraznejší inset shadow po celom obvode pre „vhĺbený" glass efekt, jemný outer glow
- `::before` — zúžiť specular highlight, zvýšiť kontrast (top edge reflection)
- Odstrániť animáciu caustics (na referencii nie je)

**`.liquid-glass-circle-light` (svetlé pozadie):**
- Background gradient — takmer transparentný (opacity 0.08–0.15)
- Border — tenký ale viditeľný, `rgba(0,0,0,0.12)` + jemný biely inner edge
- Box-shadow — výrazný inset tieň okolo vnútorného okraja (~`inset 0 2px 8px rgba(0,0,0,0.08)`) + outer drop shadow
- `::before` — top specular edge highlight ako na referencii
- Rovnako bez caustic animácie

### Súbory
- `src/index.css` — prepísať obe triedy `.liquid-glass-circle` a `.liquid-glass-circle-light`

