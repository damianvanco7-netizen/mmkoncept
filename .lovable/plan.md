

## Problém
Na iOS Safari pozadie preblikáva, lebo:
1. `.grainient-container` má `position: fixed; top:0; bottom:0` + `min-height: 100vh/100lvh`. Keď Safari na scrolle skrýva/odhaľuje URL bar, **viewport mení výšku** a fixed element sa resizuje. Pri zmene rozmerov sa `background-size: cover` preškáluje a vznikne viditeľný "flash"/skok obrázka.
2. `BrowserChromeTheme` mení `body.backgroundColor` cez `useEffect` → na route change je krátky moment, kedy je telo prefarbené pred načítaním obrázka.
3. Statický PNG snapshot je urobený raz pri mounte pre konkrétny rozmer viewportu — pri rotácii / zmene výšky toolbaru sa nikdy neprepočíta, ale `cover` ho roztiahne inak.

Cieľ: gradient vyzerá presne ako teraz, ale neprebliká.

## Plán

**1. `src/components/Grainient.css` — stabilizovať fixed layer na iOS**
- Pre statický mobil variant použiť **pevnú výšku** namiesto `bottom: 0` + `min-height: 100lvh`. Použijeme `height: 100lvh` (largest viewport height — Safari ju nemení pri toggle toolbaru) a odstránime `bottom: 0`, aby sa element nenaťahoval pri zmenách viewportu.
- Pridať `-webkit-transform: translate3d(0,0,0)` a vynútiť vlastnú compositing vrstvu, aby Safari nereparsoval pozadie pri scroll evente.
- `background-attachment` ponechať default (scroll) — `fixed` je na iOS nestabilný.

**2. `src/components/Grainient.tsx` — eliminovať flash pri mounte**
- Renderovať statický snapshot pri **největšej možnej výške** (`screen.height * dpr`) namiesto aktuálnej `visualViewport.height`. Tým snímok pokryje aj stav, keď je Safari toolbar skrytý a zobrazený — žiadne preškálovanie.
- Pridať krátky guard: kým snapshot nie je pripravený, container nech je transparentný (žiadny medzi-stav).

**3. `src/App.tsx` — neprebíjať background na route change**
- `BrowserChromeTheme` aktuálne na každú route zmenu prekreslí `body.backgroundColor`, čo na Safari spôsobí frame medzi farbou a obrázkom. Inicializujeme background-color len **raz** pri mount stránky v rámci `<html>` cez `meta[name=theme-color]` a nemeníme inline style na body, aby pod gradientom nebol kontrast prebliku. (Body si necháme so statickou tmavou farbou matchujúcou gradient.)

**4. Žiadna zmena na desktop renderingu** — animovaný WebGL loop ostáva.

## Súbory
- `src/components/Grainient.css`
- `src/components/Grainient.tsx`
- `src/App.tsx`

## Výsledok
Gradient na iOS Safari ostane vizuálne identický (rovnaký WebGL snapshot), ale prestane preblikávať pri scrolle a route change.

