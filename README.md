# Service & Support Dashboard Pro — helloTV

End-to-end prototype voor de afdeling Service & Reparatie (Doetinchem). Van een
gefragmenteerd, handmatig proces naar één proactief dashboard: realtime
statusverloop voor de klant, automatische API-doorzet naar merken/CE-Repair,
een interne AI-assistent en een gecentraliseerde ODM-lijst.

> Dit is een **statisch prototype** om de visie te tonen aan Heleen & Chaima
> (helloTV) en Joep (Viesa). Alle data zit als demo in de browser. De échte
> uitwerking (Supabase, Cloudinary, API-koppelingen) gebeurt in de volgende fase
> — dit project is daar volledig op voorbereid.

## Wat zit erin

| Onderdeel | Beschrijving |
|---|---|
| **Overzicht** | KPI's, contactmomenten-trend, statusverdeling, "aandacht vereist" |
| **Reparaties** | Lijst + filters → digitale reparatiebon met proactief statusverloop |
| **Nieuwe aanmelding** | Gestandaardiseerd intakeformulier met verplichte troubleshoot (NDF-bewaking) |
| **Retouren & logistiek** | QR-inname, dag-keuze i.p.v. tijdvak, PostNL/winkel/thuis |
| **Interne AI-assistent** | Vraag een orderstatus op via de servicebot (WhatsApp-stijl) |
| **ODM-lijst** | Open Doos Modellen, live gesynchroniseerd — geen Excel meer |
| **SLA & merkvergoedingen** | Turnaround Times + te claimen vergoedingen bewaakt |
| **Klantportaal** | Wat de klant ziet: einde van het "zwarte gat" |

## Lokaal draaien

```bash
npm run dev      # serveert /public op http://localhost:3000
```

Of open simpelweg `public/index.html` (of het losse
`Service-and-Support-Dashboard-Pro.html`) in de browser.

## Deployen naar Vercel

Het prototype is een statische site. Importeer de repo in Vercel — `vercel.json`
serveert de map `public/`. Geen build-stap nodig voor de demo.

## Sleutels / credentials

Dit prototype heeft **geen** sleutels nodig; alles draait op demo-data.
Voor de echte uitwerking staat in **`.env.example`** elke benodigde sleutel met
de plek waar je die ophaalt (Supabase, Cloudinary, Gemini/Anthropic, CE-Repair,
VMS/Vendit, Vercel). Kopieer naar `.env.local` en vul je eigen waarden in.

> Echte sleutels worden hier bewust **niet** gegenereerd of meegeleverd — die
> komen uit je eigen accounts. Commit `.env.local` nooit naar GitHub.

## Stack (volgende fase)

- **Frontend:** Next.js op Vercel
- **Data & realtime:** Supabase (`supabase/schema.sql` bevat het datamodel)
- **Media:** Cloudinary (foto's van defecten, facturen, labels)
- **AI-assistent:** Gemini of Anthropic via API
- **Integraties:** CE-Repair + merken (API), VMS/Magento (Commerced), Vendit (voorraad)

Zie **`docs/HANDOVER.md`** voor de overdracht naar Antigravity/Gemini.
