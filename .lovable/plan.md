

## Plan: Aktualizácia Grainient komponentu podľa referenčného kódu

### Rozdiely medzi aktuálnym a referenčným kódom

Shader kód (vertex + fragment) je **identický**. Rozdiely sú len v TypeScript časti:

| Čo | Aktuálne | Referencia |
|---|---|---|
| Default hodnoty props | `timeSpeed=0.15`, `warpFrequency=3.0`, `warpSpeed=1.0`, `grainAmount=0.05`, `grainAnimated=true`, `contrast=1.3`, `saturation=0.8` | `timeSpeed=0.25`, `warpFrequency=5.0`, `warpSpeed=2.0`, `grainAmount=0.1`, `grainAnimated=false`, `contrast=1.5`, `saturation=1.0` |
| useEffect deps | `[]` (empty) | Všetky props v dependency array |
| Resize logika | `container.clientWidth/Height` → `renderer.setSize` | `getBoundingClientRect` → `renderer.setSize` → `gl.drawingBufferWidth/Height` do resolution |
| Animation loop | `requestAnimationFrame` pred renderom | `requestAnimationFrame` po renderi |
| Cleanup | Odstraní canvas + `loseContext()` | Len `removeChild` v try/catch |
| Container styling | Inline `position:fixed; inset:0` | CSS trieda `grainient-container` |
| Container className | `className` prop | `grainient-container ${className}` |

### Zmeny v súbore `src/components/Grainient.tsx`

1. **Zmeniť default prop hodnoty** na referenčné (`timeSpeed=0.25`, `warpFrequency=5.0`, `warpSpeed=2.0`, `grainAmount=0.1`, `grainAnimated=false`, `contrast=1.5`, `saturation=1.0`, default farby `#FF9FFC`, `#5227FF`, `#B19EEF`)
2. **Pridať všetky props do useEffect dependency array** — aby sa efekt reinicializoval pri zmene props
3. **Aktualizovať resize logiku** — použiť `getBoundingClientRect()` a `gl.drawingBufferWidth/Height`
4. **Aktualizovať animation loop** — `raf = requestAnimationFrame(loop)` po renderi
5. **Zjednodušiť cleanup** — try/catch `removeChild`, bez `loseContext()`
6. **Zmeniť container na CSS triedu** — odstrániť inline style, pridať `grainient-container` CSS triedu
7. **Pridať `src/components/Grainient.css`** s `.grainient-container` štýlmi (position fixed, inset 0, overflow hidden)

### Zmeny v stránkach

Stránky (Index, Consulting, VirtualVillage, Gdpr) už odovzdávajú vlastné farby a parametre cez props — tieto **ostanú nezmenené**, pretože override default hodnoty.

### Súbory na úpravu/vytvorenie
1. `src/components/Grainient.tsx` — prepísať na 1:1 kópiu referenčného kódu (s TypeScript typmi)
2. `src/components/Grainient.css` — nový súbor pre container štýly

