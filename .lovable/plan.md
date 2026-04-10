

## Plán: Zmeniť farbu favicon na tmavú

Aktuálne má favicon `fill="white"`, čo je neviditeľné na svetlom pozadí (napr. záložka v Chrome light mode).

### Zmena
- **Súbor:** `public/favicon.svg`
- Zmeniť `fill="white"` na tmavú farbu zodpovedajúcu brand palete — `fill="hsl(18, 100%, 3%)"` (near-black z vášho dizajnu), čo je prakticky `#0F0200`

### Poznámka
SVG favicon nepodporuje automatické prepínanie light/dark v záložke prehliadača. Zvolíme tmavú farbu, ktorá bude viditeľná na svetlom aj tmavom pozadí záložiek (na tmavom pozadí bude menej kontrastná, ale stále viditeľná). Alternatívne sa dá použiť stredne tmavá farba pre lepší kompromis.

