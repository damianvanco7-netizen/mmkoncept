

## Plan: Liquid Glass Light variant — realistický glass efekt podľa referencie

### Problém
Light varianta (`.liquid-glass-circle-light`) je na bledom pozadí takmer neviditeľná. Referenčný obrázok ukazuje na svetlom pozadí výrazný **3D vhĺbený tvar** — viditeľný cez:
- Silný **vnútorný tieň** (tmavý inset shadow po celom obvode, hlavne hore a po stranách)
- Jemný ale viditeľný **vonkajší drop shadow** pod objektom
- Takmer **žiadna výplň** — sklo je čisté, priesvitné
- Tenký **highlight edge** na hornom okraji (specular reflection)
- Na spodku jemný **svetlý odraz** (counter-shadow)

Aktuálna CSS má príliš slabé tiene a príliš veľa bielej výplne.

### Zmeny v `src/index.css`

**`.liquid-glass-circle-light` — kompletný prepis:**
- **Background**: takmer úplne transparentný — max `rgba(255,255,255,0.08)`, aby bolo vidno pozadie cez sklo
- **Border**: zvýšiť kontrast — `1px solid rgba(0,0,0,0.15)` + jemný biely inner highlight cez inset shadow
- **Box-shadow**: kľúčová zmena — výrazný viacvrstvový inset shadow:
  - `inset 0 4px 12px rgba(0,0,0,0.12)` — hlavný vnútorný tieň zhora
  - `inset 0 2px 4px rgba(0,0,0,0.08)` — bližší ostrý tieň
  - `inset 0 -2px 8px rgba(255,255,255,0.15)` — spodný svetlý odraz
  - `0 6px 20px rgba(0,0,0,0.10)` — vonkajší drop shadow
  - `0 2px 6px rgba(0,0,0,0.06)` — bližší vonkajší tieň
- **`::before`**: výraznejší top specular highlight — biely gradient s vyššou opacity (0.5–0.6)
- **`::after`**: jemný radiálny gradient pre glass depth
- **Hover**: zosilniť tiene + lift
- **Opraviť duplicitný hover selektor** (riadky 351–385 sú dva hovery — zlúčiť do jedného)

**`.liquid-glass-circle` (tmavé pozadie)** — jemné doladenie:
- Inset shadow trochu zvýrazniť pre lepšiu hĺbku (aktuálne je OK, len mierne posilniť)

### Súbory
- `src/index.css` — prepísať `.liquid-glass-circle-light` (riadky 301–385), doladiť `.liquid-glass-circle` (riadky 229–295)

