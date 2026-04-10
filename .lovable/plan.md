

## Plán: Opraviť kontaktný formulár aby fungoval HNEĎ

### Problém
DNS pre `notify.mmconcept.sk` nie je overená → emaily sa nedoručujú. Toto sa nedá obísť ani cez Resend (tiež vyžaduje DNS verifikáciu domény).

### Riešenie

**Krok 1: Overiť, či je edge funkcia vôbec nasadená**
- Deploynúť `send-transactional-email` a `process-email-queue` aby boli pripravené
- Otestovať volanie cez curl

**Krok 2: Skontrolovať DNS nastavenie**
- Používateľ musí overiť, že NS záznamy pre `notify.mmconcept.sk` sú správne nastavené u jeho DNS providera (smerujú na `ns3.lovable.cloud` a `ns4.lovable.cloud`)
- Toto je jediná vec, ktorá blokuje doručovanie

**Krok 3: Pridať fallback pre okamžité fungovanie (voliteľné)**
- Ak chceš aby formulár fungoval OKAMŽITE aj bez overenej domény, môžem zmeniť kontaktný formulár tak, aby dáta ukladal do databázy (nová tabuľka `contact_submissions`)
- Ty si ich budeš môcť pozrieť v backende
- Keď sa DNS overí, emaily sa automaticky začnú posielať popri tom

### Technické detaily
- **Súbory**: `src/components/ContactFormDialog.tsx`, prípadne nová migrácia pre `contact_submissions` tabuľku
- **Edge funkcie**: deploy `send-transactional-email`, `process-email-queue`
- Kontaktný formulár bude ukladať dáta DO databázy + posielať email (keď DNS bude ready, email pôjde; medzitým máš dáta v DB)

