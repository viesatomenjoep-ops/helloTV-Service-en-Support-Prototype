# Deployment Handleiding: helloTV Service & Reparatie

Deze repository bevat de productie-ready architectuur voor het helloTV Service & Reparatie platform. Het draait volledig op Docker en is ontworpen om on-premise of op een eigen Linux VM te draaien, onafhankelijk van Vercel of Supabase.

## Systeemvereisten
- Linux Server (bijv. Ubuntu 22.04 LTS)
- Minimaal 4GB RAM, 2 vCPU's
- Voldoende schijfruimte (aanbevolen: >100GB i.v.m. MinIO opslag voor 4K video's en schadefoto's)
- Docker & Docker Compose geïnstalleerd

## Configuratie
1. Kloon deze repository naar de doelserver.
2. Kopieer `.env.production` naar `.env` en vul de daadwerkelijke wachtwoorden in:
   ```bash
   cp .env.production .env
   nano .env
   ```
   > **Belangrijk:** Wijzig `POSTGRES_PASSWORD`, `N8N_BASIC_AUTH_PASSWORD`, `MINIO_ROOT_PASSWORD` en de API keys.

3. Zorg dat het domein `service.hellotv.nl` via DNS verwijst naar het IP-adres van deze server.

## SSL/HTTPS Configuratie (Optioneel maar verplicht voor Prod)
De huidige `nginx/default.conf` luistert naar poort 80. Gebruik Certbot (Let's Encrypt) om een SSL certificaat toe te wijzen en NGINX automatisch te laten updaten voor poort 443.

## Opstarten
Voer het volgende commando uit om de productie-omgeving op te bouwen en te starten:
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Architectuur Overzicht
- **NGINX:** Reverse Proxy (Verkeer verdeler).
- **Node API:** Serveert de frontend dashboard bestanden en communiceert met PostgreSQL via poort 3000 (intern).
- **PostgreSQL:** Hoofddatabase voor tickets, JSONB data, en SLA statussen.
- **Qdrant:** Vector database voor de Knowledge Base (RAG module).
- **n8n:** Automatisering en routering (Webhooks voor WhatsApp, Outlook e-mail integraties).
- **MinIO:** S3-compatible opslag voor grote bestanden.
