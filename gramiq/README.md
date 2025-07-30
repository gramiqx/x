# GRAMIQ – Open-Source MRV for Rural Climate Projects

A low-cost, offline-first digital MRV system for NGOs, carbon developers, and governments.

## Features
- 📱 Offline mobile data collection
- 🛰️ Satellite monitoring (GEE)
- 🗺️ Map-based project management
- 📄 Automated reports
- 🔐 Role-based access

## Tech Stack
- Frontend: HTML + Tailwind + Leaflet
- Backend: Node.js + PostgreSQL + PostGIS
- Hosting: Vercel (web), Railway (API)

## Run Locally
1. `cd api && npm install`
2. Setup PostgreSQL + run `schema.sql`
3. `node server.js`
4. Open `web/index.html` via local server

## Deploy
- Frontend: [Vercel](https://vercel.com)
- Backend: [Railway](https://railway.app)

## License
MIT — Free for NGOs and open climate action.