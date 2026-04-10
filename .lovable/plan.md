

## Plan: Kontaktný formulár cez Resend

### Aktuálny stav
Formulár ukladá dáta do `contact_submissions` tabuľky (funguje) a volá `send-transactional-email` Edge Function, ktorá používa Lovable Email infraštruktúru cez subdoménu `notify.mmconcept.sk`. DNS verifikácia stále čaká, preto emaily neodchádzajú.

### Čo spravím

**Krok 1: Pripojiť Resend konektor**
- Resend je dostupný ako konektor v Lovable. Prepojím ho s projektom -- budeš vyzvaný na zadanie Resend API kľúča.
- Potrebuješ mať Resend účet s overenou doménou (napr. `mmconcept.sk` alebo iná). Overenie domény v Resend je cez DKIM/SPF záznamy (nie NS delegácia).

**Krok 2: Vytvoriť novú Edge Function `send-contact-email`**
- Jednoduchá funkcia, ktorá prijme meno, email a správu z formulára.
- Pošle email cez Resend connector gateway na `martina.masarykova@mmconcept.sk`.
- Bude obsahovať CORS, validáciu vstupov a error handling.

**Krok 3: Upraviť `ContactFormDialog.tsx`**
- Nahradiť volanie `send-transactional-email` volaním novej `send-contact-email` funkcie.
- Zachovám ukladanie do `contact_submissions` tabuľky ako fallback.

**Krok 4: Deploynúť a otestovať**

### Dôležité
- V Resend dashboarde musíš mať overenú doménu, z ktorej chceš posielať (napr. `mmconcept.sk`). Overenie v Resend je cez DNS záznamy typu DKIM/SPF/MX -- nie NS delegácia ako v Lovable.
- Existujúca Lovable Email infraštruktúra zostane nedotknutá (pre prípad, že by si ju chcel v budúcnosti použiť).

### Technické detaily
- Nový súbor: `supabase/functions/send-contact-email/index.ts`
- Editovaný súbor: `src/components/ContactFormDialog.tsx`
- Connector: Resend (connector gateway pattern)
- Secrets: `RESEND_API_KEY` + `LOVABLE_API_KEY` (automaticky)

