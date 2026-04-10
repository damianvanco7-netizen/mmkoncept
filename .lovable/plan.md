

## Plán: Zmeniť meno odosielateľa na "mm concept"

Jednoduchá zmena v Edge Function `send-contact-email/index.ts` — zmeniť `from` pole z `MM Concept <noreply@mmconcept.sk>` na `mm concept <noreply@mmconcept.sk>`.

### Technické detaily
- **Súbor:** `supabase/functions/send-contact-email/index.ts`
- **Riadok:** cca 53 — zmena `'MM Concept <noreply@mmconcept.sk>'` → `'mm concept <noreply@mmconcept.sk>'`
- Deploy edge function po zmene

