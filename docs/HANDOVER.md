# Handover — van prototype naar productie (Antigravity / Gemini)

Doel van dit document: een agent of developer kan hiermee het statische
prototype omzetten naar een werkend systeem zonder de context te missen.

## 1. Architectuur (afgesproken)

```
Klant ─┐                         ┌─ CE-Repair / merk-API's
       ├─ Klantportaal (Next.js) ┤
Winkel ┤        │                └─ Vendit (voorraad) / VMS / Magento
       │        ▼
Support┤   Supabase  ◀── realtime ──▶  Intern dashboard (Next.js/Vercel)
       │   (Postgres)                          │
       └─ AI-assistent ◀── Gemini/Anthropic ───┘
                 │
            Cloudinary (media)
```

## 2. Wat is mock vs. echt

| In het prototype | In productie |
|---|---|
| `ORDERS`, `ODM`, `CLAIMS` arrays in `app.js` | rijen in Supabase (`schema.sql`) |
| Statusverloop hardcoded per order | `status_events`-tabel + realtime subscription |
| Foto-placeholders | Cloudinary unsigned upload + `media`-tabel |
| Bot-antwoorden uit `botReply()` | API-route → Supabase-query + Gemini voor vrije tekst |
| "Push naar merk"-knop (toast) | API-route → CE-Repair/merk-endpoint |
| Klantbericht-preview | trigger op `status_events.klant_geinformeerd = true` |

## 3. Datamodel

Staat in `supabase/schema.sql`. Tabellen: `filialen`, `klanten`, `reparaties`,
`status_events`, `media`, `odm`, `merkvergoedingen`. De enum `repair_status`
komt overeen met de statussen in het prototype (`STATUS`-object in `app.js`).

## 4. Te bouwen integraties (Fase 3)

1. **API-push** — bij goedkeuring van een aanmelding: data via API naar
   CE-Repair of het betreffende merk. Vervangt het handmatig overkloppen.
2. **ETA-sync** — wijzigt het merk de ETA, dan een `status_event` met
   `soort='alert'` + `klant_geinformeerd=true` (proactief, geen verrassing).
3. **Voorraad** — Vendit-API levert voorraad per filiaal (bevestigd: ja).
4. **Interne AI-assistent** — ordernummer → Supabase-query; vrije vragen →
   taalmodel met de orderdata als context.
5. **QR-inname** — label genereren bij aanmelding; scan in Doetinchem zet de
   status om en triggert de klantupdate.

## 5. Belangrijke regels uit de business case

- **Verplichte troubleshoot vooraf** blijft staan om de "No Defect Found"-
  correctie te voorkomen.
- **Tijdvak → dagkeuze** bij ophaling, om valse verwachtingen te vermijden.
- **ODM** wordt automatisch bijgewerkt (ingeboekt → voorraad → doorgestuurd →
  afgehandeld); nooit meer handmatig in een sheet.
- **Merkvergoedingen** centraal loggen i.p.v. losse Google Doc/Excel.

## 6. Openstaande vragen voor Heleen & Chaima

- Welke merken hebben een werkende API-koppeling, welke niet?
- In welk systeem staat de terugkoppeling nu exact (vermoedelijk VMS)?
- Voorbeeld van de huidige "doc sheet" voor vergoedingen.
- Definitie/logica ODM-lijst tot in detail (randgevallen).
- Escalatielogica rond upsell-orders.

## 7. Niet vergeten

- `.env.local` invullen vanuit `.env.example` (sleutels uit eigen accounts).
- Realtime-replicatie aanzetten in Supabase voor `reparaties`, `status_events`, `odm`.
- Row Level Security instellen vóór go-live.
