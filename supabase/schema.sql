-- =====================================================================
--  Service & Support Dashboard Pro — helloTV
--  Supabase schema (Fase 2 datamodel). Run in de Supabase SQL editor.
--  Spiegelt 1-op-1 het datamodel van het prototype.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---- Filialen ----
create table if not exists filialen (
  id          uuid primary key default gen_random_uuid(),
  naam        text not null,                         -- Doetinchem, Breda, Winterswijk, Online
  created_at  timestamptz default now()
);

-- ---- Klanten ----
create table if not exists klanten (
  id          uuid primary key default gen_random_uuid(),
  naam        text not null,
  adres       text,
  telefoon    text,
  email       text,
  created_at  timestamptz default now()
);

-- ---- Reparatie-orders (de digitale reparatiebon) ----
create type repair_status as enum (
  'aangemeld','troubleshoot','goedgekeurd','onderweg',
  'reparatie','eta','retour','doa','akkoord','afgerond'
);

create table if not exists reparaties (
  id            text primary key,                    -- ordernummer, bijv. 251195109
  merk          text not null,
  type          text not null,
  serienummer   text,
  klacht        text not null,                       -- nooit alleen 'nakijken' / 'defect'
  accessoires   text,
  garantie      boolean default false,
  leenapparaat  boolean default false,
  doa           boolean default false,
  route         text,                                -- CE-Repair, Sonos, Samsung, LG, ODM …
  status        repair_status not null default 'aangemeld',
  eta           date,
  progress      int default 0,
  klant_id      uuid references klanten(id),
  filiaal_id    uuid references filialen(id),
  medewerker    text,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- ---- Statusverloop (proactieve timeline + automatische klantcommunicatie) ----
create table if not exists status_events (
  id              uuid primary key default gen_random_uuid(),
  reparatie_id    text references reparaties(id) on delete cascade,
  titel           text not null,
  omschrijving    text,
  klant_geinformeerd boolean default false,          -- triggert proactieve update
  soort           text default 'done',               -- done | current | alert | todo
  created_at      timestamptz default now()
);

-- ---- Media (Cloudinary public_id's, geen bestanden in de DB) ----
create table if not exists media (
  id            uuid primary key default gen_random_uuid(),
  reparatie_id  text references reparaties(id) on delete cascade,
  cloudinary_id text not null,
  soort         text,                                -- defect_foto | factuur | label
  created_at    timestamptz default now()
);

-- ---- ODM-lijst (Open Doos Modellen — vervangt de Excel) ----
create type odm_status as enum ('op-vrrd','doorgestuurd','afgehandeld');

create table if not exists odm (
  id          uuid primary key default gen_random_uuid(),
  merk        text not null,
  type        text not null,
  serienummer text,
  herkomst    text,
  locatie     text,
  status      odm_status default 'op-vrrd',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ---- Merkvergoedingen (centraal claimen i.p.v. losse sheet) ----
create type claim_status as enum ('open','ingediend','ontvangen','afgewezen');

create table if not exists merkvergoedingen (
  id            uuid primary key default gen_random_uuid(),
  merk          text not null,
  reparatie_id  text references reparaties(id),
  status        claim_status default 'open',
  deadline      date,
  created_at    timestamptz default now()
);

-- ---- Realtime: zet replicatie aan voor live dashboard + bot ----
-- (in Supabase: Database → Replication → voeg deze tabellen toe)
-- alter publication supabase_realtime add table reparaties, status_events, odm;

-- ---- Handige index ----
create index if not exists idx_reparaties_serie on reparaties(serienummer);
create index if not exists idx_status_events_rep on status_events(reparatie_id);
