

# Velka redizajn zmena - Vectura-inspired layout

## Prehlad zmien

Zachovame branding mm concept (farby, neumorphism, font Montserrat) ale preberieme layout, prechody a UX efekty z Vectura.

---

## 1. Hero sekcia - Fullscreen background

**Sucasny stav:** Split layout (text vlavo, 3D village vpravo) na svetlom pozadi.

**Novy stav:**
- Fullscreen hero s `hero-village.png` ako background image (cover, centered)
- Dark overlay gradient (zdola hore) pre citatelnost textu
- Headline, subheadline a CTA centrovane v spodnej polovici
- Dva buttony vedla seba: "Explore Virtual Village" (pill-button) + "Contact" (pill-button-dark)
- Zachovat existujuci obsah textu
- Navbar zostava transparentny s blur efektom

---

## 2. Strategic Pillars - Vectura tab layout

**Sucasny stav:** Centrovane tabs hore, jedna velka karta pod tym.

**Novy stav (ako Vectura "Everything your finance team needs"):**
- Headline zarovnany vpravo (right-aligned alebo center-right)
- Pod headline je description text
- Layout: 2-column grid
  - **Lava strana:** 3 clickable tab polozky vertikalne (Contextual AI Layer, System Modularity, Ethical Data Environment) - aktivna ma bold text + arrow ikonu, neaktivne su muted
  - **Prava strana:** Velka neu-card s obsahom aktivneho pillar (title, description, tags)
- Plynula transition pri prepinani tabov (opacity + slide)

---

## 3. Why mm concept - Vectura "Designed for real-world" layout

**Sucasny stav:** 4 male karty v rade + challenges box pod tym, gradient pozadie.

**Novy stav:**
- Rounded top corners na celej sekcii (border-radius na container) - tmava sekcia "vkracuje" do svetlej
- Layout: grid s 5 kartami
  - **Lava velka karta (span 2 riadky):** "Platform Architecture Challenges" - vyssia karta s ikonou, nadpisom a zoznamom challenges, tmavsi gradient pozadie
  - **4 mensie karty (2x2 grid):** Visionary Leadership, Architecture-First Design, AI-Driven Infrastructure, Ecosystem Partnerships - kazda s ikonou, nadpisom a popisom
- Zachovat gradient pozadie `#181818` do `#C5BEB4`
- Zachovat neu-card-dark styling

---

## 4. Light-to-dark section transition

**Novy efekt:**
- Pred Why mm concept sekciou: tmava sekcia ma `border-radius: 2rem 2rem 0 0` na top corners
- Predchadzajuca svetla sekcia (Ecosystem) nema bottom padding - tmava sekcia vizualne prekryva
- Negatívny margin-top alebo relative positioning pre overlap efekt

---

## 5. Dalsie layout harmonizacie z Vectury

- **Vacsie spacing** medzi sekciami (py-32 md:py-44)
- **Karty v Ecosystem sekcii** - zachovat ale zvacist padding pre konzistenciu
- **CTA sekcia** - zachovat ale pridat vizualnu konzistenciu

---

## Dotknuté súbory

1. `src/components/HeroSection.tsx` - fullscreen bg layout
2. `src/components/StrategicPillars.tsx` - Vectura tab layout (vlavo tabs, vpravo content)
3. `src/components/WhyMmConcept.tsx` - 5-card bento grid + rounded top transition
4. `src/components/EcosystemSection.tsx` - minor spacing adjustments
5. `src/index.css` - nova utility trieda pre rounded section transition

