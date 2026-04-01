

## Plan: Kontaktný formulár s liquid glass popup

### Prehľad
Vytvoríme kontaktný popup (Dialog) s liquid glass efektom, ktorý sa otvorí po kliknutí na "Contact" v navbar a "Connect" button na Consulting stránke. Formulár odošle email na martina.masarykova@mmconcept.sk.

### 1. Vytvorenie ContactFormDialog komponentu

**Nový súbor: `src/components/ContactFormDialog.tsx`**

- Radix Dialog (z existujúceho `ui/dialog.tsx`) s custom liquid glass štýlom
- Overlay: tmavý blur backdrop
- Content panel: liquid glass efekt (backdrop-filter blur, gradient, border, shadows — rovnaký vzor ako navbar/buttony)
- Formulárové polia:
  - **Meno a Priezvisko** (input, required)
  - **E-mail** (input type=email, required)
  - **Správa** (textarea, required)
  - **Checkbox** — súhlas so spracovaním osobných údajov s odkazom na GDPR podstránku
  - **Send button** — liquid glass štýl ako ostatné buttony
- Validácia na client-side (required fields, email format)
- Po odoslaní: toast notifikácia (úspech/chyba)

### 2. Email odosielanie

**Nový súbor: `supabase/functions/send-contact-email/index.ts`** (Edge Function)

- Prijme POST s menom, emailom, správou
- Validácia vstupov (zod)
- Odošle email na `martina.masarykova@mmconcept.sk` cez Resend alebo SMTP
- CORS headers pre webový klient

**Poznámka:** Pre odosielanie emailu bude potrebný email service. Keďže projekt nemá Lovable Cloud / Supabase pripojené, najjednoduchšie riešenie je použiť `mailto:` link alebo integrovať email API (napr. Resend). Overím dostupnosť Supabase/Cloud a podľa toho zvolím prístup.

### 3. Napojenie na existujúce buttony

**Súbor: `src/components/Navbar.tsx`**
- "Contact" button (desktop aj mobile) → namiesto scrollTo("footer") otvorí ContactFormDialog
- Navbar bude držať stav `contactOpen` a renderovať `<ContactFormDialog />`

**Súbor: `src/pages/Consulting.tsx`**
- "Connect" button → namiesto scrollTo footer otvorí ContactFormDialog
- Pridať stav a renderovanie dialogu

### 4. Liquid glass CSS pre dialog

**Súbor: `src/index.css`**
- Nová trieda `.liquid-glass-dialog` — backdrop-filter blur(20px), gradient background s tmavými tónmi, border, shadows, specular highlights (::before/::after) — konzistentné s existujúcim liquid glass systémom

### Súbory na úpravu/vytvorenie
1. `src/components/ContactFormDialog.tsx` — nový komponent
2. `src/index.css` — nová `.liquid-glass-dialog` trieda
3. `src/components/Navbar.tsx` — Contact otvára popup
4. `src/pages/Consulting.tsx` — Connect otvára popup

### Technické detaily
- Dialog používa existujúci Radix `Dialog` z `ui/dialog.tsx`
- Formulár: react-hook-form + zod validácia (obe knižnice sú v projekte)
- Email: overím dostupnosť Supabase — ak je k dispozícii, Edge Function; ak nie, `mailto:` fallback alebo pripojíme email service

