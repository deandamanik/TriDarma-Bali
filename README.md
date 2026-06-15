# TriDarma Bali

**AI-Powered Cultural Tourism Education Platform for Overtourism Mitigation and Local Economic Empowerment**

---

![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

> A civic technology initiative submitted as an Innovation Work for **Badung Festival Inovasi 2026**, Universitas Udayana. TriDarma Bali is a web-based platform that delivers preventive cultural education to tourists in real-time, provides adat village operators with digital management tools, and equips the Bali Provincial Tourism Office with a data-driven policy instrument - all within a single, installation-free responsive interface.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Problem Statement and Solution](#problem-statement-and-solution)
- [Key Features](#key-features)
- [System Architecture and Workflow](#system-architecture-and-workflow)
- [Tech Stack](#tech-stack)
- [Directory Structure](#directory-structure)
- [Installation and Getting Started](#installation-and-getting-started)
- [Future Roadmap](#future-roadmap)
- [Contributors and Acknowledgments](#contributors-and-acknowledgments)

---

## Live Demo

The prototype is currently deployed on Vercel. All data displayed is mock data intended for prototype validation purposes.

| View | URL |
|---|---|
| Public Landing Page | `https://tri-darma-bali.vercel.app/` |
| Adat Village Operator Dashboard | `https://tri-darma-bali.vercel.app/operator-dashboard` |
| Government Monitoring Dashboard | `https://tri-darma-bali.vercel.app/gov-dashboard` |

---

## Problem Statement and Solution

### The Overtourism Crisis in Bali

Bali's tourism sector has experienced extraordinary growth, receiving **6.33 million international visitors in 2024 alone**. While this growth reflects the island's enduring cultural and natural appeal, it has simultaneously produced a governance crisis of significant proportion - one rooted in the absence of preventive digital information infrastructure reaching tourists at the point of decision.

The consequences manifest across three distinct dimensions:

**Cultural Integrity:** The lack of accessible, real-time adat (customary law) education has contributed to a marked rise in ceremonial violations. In 2024, **412 foreign nationals were deported** from Bali, a figure directly attributable to behavioral infractions within sacred temple precincts. These incidents do not represent isolated events but a systemic failure to communicate cultural boundaries proactively.

**Environmental Degradation:** Visitor concentration at sacred sites has created severe ecological pressure. At Pura Besakih, Bali's most important Hindu temple, waste generation data illustrates the scale of the crisis: average daily waste volume stands at **5.06 m³**, but surges to **46.71 m³ during active ceremonial periods** - a nearly tenfold increase driven by uncoordinated visitor flow and absent crowd management systems.

**Economic Exclusion:** Local micro, small, and medium enterprises (MSMEs) operating within and adjacent to cultural tourism zones remain largely disconnected from the digital tourism supply chain, unable to capture economic value from the visitor traffic passing through their communities.

### The Regulatory Context

The Government of Bali Province has responded with **Provincial Governor Circular Letter No. 7 of 2025 on a New Order for Foreign Tourists** (*SE Gubernur Bali No. 7 Tahun 2025 tentang Tatanan Baru bagi Wisatawan Asing*). While this regulation represents a meaningful policy commitment, it currently lacks the digital information infrastructure necessary to reach tourists preventively - before violations occur, not after.

### The TriDarma Bali Solution

TriDarma Bali is designed to close this infrastructure gap. Operating as a **web-based civic technology platform requiring no installation**, it delivers contextual cultural education and real-time operational data to tourists at the moment they plan or undertake visits to sacred sites. Simultaneously, it returns digital agency to adat village communities and transforms enforcement data into a structured policy resource for the provincial government.

The platform's design philosophy is grounded in **Tri Hita Karana**, the Balinese Hindu principle governing harmonious relationships between humans and the divine (*Parahyangan*), humans and fellow humans (*Pawongan*), and humans and the natural environment (*Palemahan*). Each feature of TriDarma Bali operationalizes one or more of these relationships.

### Alignment with the Sustainable Development Goals

TriDarma Bali directly contributes to two United Nations Sustainable Development Goals:

- **SDG 11 - Sustainable Cities and Communities:** By enabling smarter, more equitable access to cultural and sacred sites, the platform supports inclusive and sustainable urban and heritage tourism management.
- **SDG 15 - Life on Land:** By reducing environmental pressure on ecologically sensitive sacred sites through visitor flow education and ceremonial calendar transparency, the platform contributes to the protection of terrestrial ecosystems intertwined with Bali's cultural landscape.

---

## Key Features

### Interactive Temple Map

The platform's central navigational module renders an interactive, marker-based map of temple locations across Bali. Each marker is supplemented with a structured information panel displaying:

- **Real-time visit status indicators** (Open, Closed, Ceremony in Progress) updated directly by authorized adat village operators
- **Operational hours** and access restrictions
- **Dress code requirements** and behavioral guidelines specific to each temple precinct
- **Nearest local MSME directory**, surfacing artisan vendors, warungs, and cultural guides within the immediate temple catchment area

The map serves as the primary spatial interface for tourists planning itineraries, ensuring culturally informed decisions before arrival.

### Balinese Cultural Ceremony Calendar

A monthly calendar system built on the **Pawukon calendrical system** - the 210-day sacred Balinese cycle that governs ceremonial life. Key architectural characteristics include:

- Automatic synchronization between ceremony schedule data and the operational status of corresponding temples on the interactive map
- Cultural annotations explaining the significance, ritual requirements, and behavioral expectations of each ceremony type
- Tourist behavioral guidelines contextualized to specific ceremonial periods, enabling respectful and informed visits

### Cultural Encyclopedia and AI Assistant 'Bli Darma'

A structured educational module providing depth content on Balinese customs, sacred traditions, temple etiquette, and adat law. The module is augmented by **Bli Darma**, an AI-powered virtual assistant widget that:

- Answers natural language queries about Balinese customs, temple protocols, and adat regulations in real time
- Provides contextual responses calibrated to the specific site or ceremonial context a tourist is navigating
- Operates as a conversational interface over the encyclopedic content layer, reducing the barrier to cultural literacy for international visitors

### Adat Violation Reporting System

An implementation of participatory civic technology enabling users to document and submit reports of observed violations within sacred areas. The reporting form captures:

- **Violation category** (behavioral, environmental, access restriction)
- **Incident description** with structured narrative fields
- **Automatic geolocation detection** identifying and attaching the precise coordinates of the observed violation
- **Photographic evidence upload**, providing verifiable documentation to support administrative review

All submitted reports are routed to the Government Monitoring Dashboard, where they contribute to a structured dataset for policy analysis and enforcement prioritization.

---

## System Architecture and Workflow

TriDarma Bali is designed around three distinct user roles, each interacting with the platform through purpose-built interfaces and permission scopes.

### Actor 1: Tourist (Public Guest)

The primary end-user of the platform. Tourists access all core functionality - the interactive map, ceremony calendar, cultural encyclopedia, Bli Darma chatbot, and violation reporting form - without registration or authentication. The friction-free access model is intentional: preventive education must be maximally accessible to be effective. The tourist's journey through the platform is designed as a progressive cultural orientation, moving from spatial awareness (the map) to temporal context (the calendar) to conceptual depth (the encyclopedia and Bli Darma).

### Actor 2: Adat Village Operator

Authenticated operators representing individual desa adat (customary villages) or temple management bodies. Following login, operators access a dedicated dashboard through which they:

- Update the real-time visit status of temples within their jurisdiction
- Modify operational hours and access restriction data
- Publish and update upcoming ceremony schedules
- Manage MSME directory listings for vendors within their territory

The operator role restores digital sovereignty to adat village communities, ensuring that the authoritative voice on temple status and local commercial opportunity belongs to the community itself, not to third-party aggregators.

### Actor 3: Super Admin (Dinas Pariwisata Provinsi Bali)

The provincial government monitoring role, representing the Office of Tourism of Bali Province. The Super Admin dashboard provides:

- System-wide data monitoring across all active temple nodes and operator accounts
- Aggregated violation report inbox with category filtering, geographic distribution analysis, and temporal trend visualization
- A structured data environment designed to function as an evidence base for policy development, enforcement deployment, and regulatory refinement under SE No. 7/2025

The three-actor architecture creates a closed information loop: tourists receive education, operators maintain the accuracy of that education, and the government captures the feedback signal - violations - to continuously refine policy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Library | React 18+ |
| Build Tool | Vite 5+ |
| Styling Framework | Tailwind CSS v4 |
| Client-side Routing | React Router DOM |
| Deployment Platform | Vercel |
| Data Layer (current) | Static mock data modules (JSON/JS) |

---

## Directory Structure

The project follows a **Feature-Based Architecture**, organizing all source code by operational domain rather than by technical type. This structure ensures that each platform feature (temple map, calendar, encyclopedia, etc.) is a self-contained module with co-located assets, components, and page views - maximizing readability and maintainability as the codebase scales.

```
tridarma-bali/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── auth/
│   │   ├── calendar/
│   │   ├── cultural-encyclopedia/
│   │   ├── home/
│   │   ├── report-violations/
│   │   ├── temple-map/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   ├── tridarma-logo.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── auth/
│   │   ├── calendar/
│   │   ├── cultural-encyclopedia/
│   │   ├── gov-dashboard/
│   │   ├── home/
│   │   ├── layouts/
│   │   ├── operator-dashboard/
│   │   ├── profile/
│   │   ├── report-violations/
│   │   ├── temple-map/
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   ├── articles.js
│   │   ├── balineseCalendarData.js
│   │   ├── govDashboardData.js
│   │   ├── operatorDashboardData.js
│   │   ├── profile.js
│   │   └── templeMapData.js
│   ├── pages/
│   │   ├── auth/
│   │   ├── calendar/
│   │   ├── cultural-encyclopedia/
│   │   ├── gov-dashboard/
│   │   ├── home/
│   │   ├── operator-dashboard/
│   │   ├── profile/
│   │   ├── report-violations/
│   │   └── temple-map/
│   ├── routes/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   ├── balineseCalendarService.js
│   │   └── balineseHolidayRules.js
│   ├── utils/
│   │   ├── exportCsv.js
│   │   └── slugify.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
└── vite.config.js
```

### Directory Annotations

**`src/assets/`**
Static image and icon assets, organized by operational module domain. Co-locating visual resources with their respective feature directories eliminates ambiguity during asset resolution and reduces maintenance overhead when features are updated or removed.

**`src/components/`**
Modular, reusable UI components organized strictly by operational sub-feature. Each subdirectory contains the constituent presentational and interactive components for a given platform domain (e.g., `temple-map/` contains the map marker, info panel, status badge, and filter components). The `ScrollToTop.jsx` utility is included here as a global behavioral component shared across all routes.

**`src/data/`**
Static local mock data modules that underpin all prototype functionality prior to backend integration. This directory contains structured JavaScript objects representing encyclopedia articles (`articles.js`), Balinese calendar data (`balineseCalendarData.js`), simulated government dashboard analytics (`govDashboardData.js`), operator dashboard state (`operatorDashboardData.js`), user profile data (`profile.js`), and geo-referenced temple coordinate records (`templeMapData.js`). Isolating mock data in a dedicated directory ensures clean extraction and replacement when a live database layer is introduced.

**`src/pages/`**
Top-level page view components, each representing a routable application view. Pages are organized by actor context - public-facing pages (home, temple map, calendar, encyclopedia, report violations) and role-gated pages (operator dashboard, government dashboard, auth flows, profile) - directly mirroring the three-actor system architecture.

**`src/routes/`**
Centralized navigation and URL mapping, implemented in `AppRouter.jsx` using React Router DOM. All route definitions, protected route wrappers, and navigation logic are managed from this single module, maintaining a single source of truth for the application's routing topology.

**`src/services/`**
Internal computation logic and domain rule engines. `balineseCalendarService.js` implements the algorithmic conversion between the Gregorian calendar and the Pawukon cycle, enabling the dynamic generation of ceremony schedules. `balineseHolidayRules.js` encodes the rule set governing adat holiday classification and its downstream effects on temple operational status.

**`src/utils/`**
Global helper utility functions shared across the application. `exportCsv.js` provides the data serialization and download trigger logic used by the government dashboard to export violation report datasets. `slugify.js` generates URL-safe string identifiers for encyclopedia articles and temple detail routes.

---

## Installation and Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Clone the Repository

```bash
git clone https://github.com/deandamanik/tridarma-bali.git
cd tridarma-bali
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Build for Production

```bash
npm run build
```

The compiled output will be placed in the `dist/` directory, ready for deployment to any static hosting provider or CDN. For Vercel deployment, the `vercel.json` configuration file at the repository root handles SPA routing rewrites automatically.

### Preview the Production Build Locally

```bash
npm run preview
```

---

## Future Roadmap

The current release represents a validated frontend prototype. The following phases outline the planned progression toward a production-grade system.

**Phase 2 - Dynamic Backend Integration**
Transition from static mock data to a live backend architecture with a relational database. This phase will introduce a REST or GraphQL API layer, real-time temple status synchronization, persistent violation report storage, and authenticated session management for operator and government accounts.

**Phase 3 - Multilingual Support**
Expand the platform's language coverage beyond English and Indonesian to include **Mandarin**, **Russian**, and **Japanese** - the three largest non-English international visitor segments in Bali. All educational content, UI labels, and Bli Darma responses will be localized under this initiative.

**Phase 4 - AI Vision Moderation**
Integrate an AI computer vision pipeline for automated moderation of photo evidence submitted through the violation reporting form. The system will screen uploads for relevance, detect inappropriate content, and generate preliminary violation classification signals to support government reviewers.

**Phase 5 - Temple Visit Quota Management**
Develop a capacity planning and quota management system enabling adat village operators to set and communicate daily visitor limits per temple. Integration with the interactive map will surface real-time occupancy indicators, enabling tourists to make informed decisions about timing and alternative site selection before departure.

**Phase 6 - Offline-First Progressive Web App (PWA)**
Convert the platform to a Progressive Web App with service worker-based caching, enabling core functionality - particularly the cultural encyclopedia and dress code guidelines - to remain accessible in areas with limited network connectivity.

---

## Contributors and Acknowledgments

### Project Team

This project was conceived, designed, and developed by the following team from Universitas Udayana:

| Name | Role |
|---|---|
| Ketut Anca Wikan Prastika | Project Lead |
| I Gusti Putu Chandra Putra Artha Kusuma | UI/UX Designer and Frontend Developer |
| Dean Ivan Ryando Damanik | Frontend Developer |

### Competition

TriDarma Bali was submitted as an Innovation Work (*Karya Inovasi*) to the **Badung Festival Inovasi 2026**, organized in the context of academic and civic innovation initiatives supported by Universitas Udayana.

### Acknowledgments

The team extends gratitude to the adat village community representatives who provided contextual guidance on Balinese ceremonial protocol and temple governance, and to the faculty advisors at Universitas Udayana whose mentorship shaped the project's civic technology orientation.

---

*TriDarma Bali - Harmonizing Tourism, Culture, and Community through Technology.*