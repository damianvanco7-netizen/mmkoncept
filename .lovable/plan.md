

## Plan

### 1. Galéria — výmena obrázkov

Skopírovať 3 nahrané fotky do `src/assets/` a nahradiť existujúce obrázky v galérii:

| Pozícia | Aktuálny súbor | Nový súbor |
|---------|---------------|------------|
| Ľavý horný roh (square1) | gallerySquare1 | vv_photo_2_1.png |
| Malá fotka vpravo (square2) | gallerySquare2 | vv_photo_3_1.png |
| Dolná široká vľavo (wide) | galleryWide | vv_photo_1_1.png |
| Veľká vpravo (featured) | galleryFeatured | **bez zmeny** |

**Súbor:** `src/pages/VirtualVillage.tsx` — nové importy a výmena src v galérii.

---

### 2. Cookie oznámenie + funkcionalita

**Nový komponent: `src/components/CookieConsent.tsx`**
- Fixný banner na spodku stránky (cookie bar)
- Liquid glass štýl konzistentný s dizajnom webu
- Text: informácia o používaní cookies s odkazom na GDPR podstránku
- Tlačidlá: **Accept All** / **Reject** (príp. **Manage Preferences**)
- Po kliknutí: uloží voľbu do `localStorage` a banner zmizne
- Pri ďalšej návšteve: ak je voľba uložená, banner sa nezobrazí

**Funkcionalita cookies:**
- Cookie kategórie: **Necessary** (vždy aktívne), **Analytics** (voliteľné)
- Ak používateľ odmietne analytics cookies, žiadne tracking skripty sa nenačítajú
- Helper funkcia `getCookieConsent()` na čítanie stavu kdekoľvek v appke

**Súbor: `src/App.tsx`**
- Pridať `<CookieConsent />` do layoutu (zobrazuje sa na všetkých stránkach)

### Súbory na úpravu/vytvorenie
1. `src/assets/vv-photo-2-1.png` — skopírovaný upload
2. `src/assets/vv-photo-3-1.png` — skopírovaný upload
3. `src/assets/vv-photo-1-1.png` — skopírovaný upload
4. `src/pages/VirtualVillage.tsx` — nové importy v galérii
5. `src/components/CookieConsent.tsx` — nový komponent
6. `src/App.tsx` — pridanie CookieConsent

