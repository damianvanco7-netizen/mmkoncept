

## Plán: Nastaviť nový favicon

Používateľ nahral SVG súbor (`fav_cicon.svg`) ako favicon.

### Kroky
1. Skopírovať `user-uploads://fav_cicon.svg` do `public/favicon.svg`
2. Odstrániť existujúci `public/favicon.ico` ak existuje
3. Aktualizovať `index.html` — pridať `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`

### Technické detaily
- Súbory: `public/favicon.svg` (nový), `index.html` (editovaný)

