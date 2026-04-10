

## Plán: Opraviť štýl inputov a toast notifikácie

### 1. Odstrániť bledý fill z inputov vo formulári

Problém: Prehliadač (Chrome/Safari) automaticky pridáva svetlomodrý/biely background na autofilled inputy. Toto nie je náš CSS — je to natívny `-webkit-autofill` štýl.

**Súbor:** `src/index.css`
- Pridať CSS pravidlo na potlačenie autofill pozadia pre inputy v `.liquid-glass-dialog`
- Použijem `-webkit-autofill` pseudoselektor s `box-shadow: inset` trikom na prekrytie pozadia transparentnou farbou

### 2. Toast notifikácia s liquid glass efektom

**Súbor:** `src/components/ui/toast.tsx`
- Zmeniť default variant z `border bg-background text-foreground` na liquid glass štýl
- Pridať `backdrop-filter: blur(24px) saturate(1.6)`, polopriehľadné pozadie, biely text
- Rounded corners na `rounded-2xl`
- Odstrániť solid border, nahradiť jemným `rgba(255,255,255,0.15)` border

### Technické detaily
- `src/index.css`: pridať `.liquid-glass-dialog input:-webkit-autofill` pravidlá (~10 riadkov)
- `src/components/ui/toast.tsx` riadok 30: zmeniť default variant na glass štýl s backdrop-filter a transparentným pozadím

