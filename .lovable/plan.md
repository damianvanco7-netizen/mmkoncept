

## Plan: Odosielanie kontaktného formulára emailom na martina.masarykova@mmconcept.sk

### Čo sa zmení
Keď niekto vyplní kontaktný formulár, namiesto otvárania emailového klienta (mailto:) sa správa odošle priamo na email martina.masarykova@mmconcept.sk. Používateľ uvidí potvrdenie "Správa bola odoslaná".

### Ako to funguje
Použijeme **Lovable Cloud** (Supabase) — je zadarmo a už integrovaný v Lovable. Vytvoríme Edge Function, ktorá prijme dáta z formulára a odošle email cez Lovable's built-in email infraštruktúru.

### Kroky

1. **Aktivovať Lovable Cloud** — ak ešte nie je zapnutý, aktivujeme ho (je zadarmo)
2. **Nastaviť emailovú doménu** — skontrolujeme stav a prípadne nastavíme
3. **Nastaviť emailovú infraštruktúru** — vytvoríme databázové tabuľky a queue systém
4. **Vytvoriť email šablónu** — React Email template s obsahom správy (meno, email, správa)
5. **Vytvoriť Edge Function** — `send-transactional-email` na odosielanie
6. **Upraviť ContactFormDialog.tsx** — nahradiť `mailto:` za volanie Edge Function cez `supabase.functions.invoke()`
7. **Pridať Supabase klienta** — ak ešte neexistuje, nastaviť integráciu
8. **Otestovať** — overiť, že email príde na martina.masarykova@mmconcept.sk

### Technické detaily

- **ContactFormDialog.tsx**: Zmení sa `handleSubmit` — namiesto `window.location.href = mailto:...` sa zavolá `supabase.functions.invoke('send-transactional-email', { body: { templateName: 'contact-form-notification', recipientEmail: 'martina.masarykova@mmconcept.sk', templateData: { name, email, message } } })`
- **Email šablóna**: Zobrazí meno odosielateľa, jeho email a text správy
- **Supabase client**: Pridá sa `src/integrations/supabase/client.ts` ak neexistuje

