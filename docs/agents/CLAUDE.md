# CLAUDE.md – Physio Athlete by Lea

## Projektstand (Mai 2026)
Die Website ist live unter **physio-athlete.de**, gehostet auf **Vercel**, verbunden mit dem GitHub Repo `NuVio-Labs/Physio-Athlete_by_Lea`.

## Techstack
- React 19 + Vite 6 + TypeScript 5.8
- Tailwind CSS 3.4
- React Router 7
- react-helmet-async (SEO)
- Web3Forms (Lead-Formular, API-Key aktiv für leakurbitz@physio-athlete.de)
- Cituro (externes Buchungssystem: app.cituro.com/booking/5310318)

## Hosting & Domain
- **Hosting:** Vercel (NuVio-Labs Team, Hobby Plan)
- **Domain:** physio-athlete.de (IONOS, DNS auf Vercel gezeigt)
- **DNS:** A-Record @ → 216.198.79.1, CNAME www → 2f83fc6417c1b4cc.vercel-dns-017.com
- **CNAME-Datei:** public/CNAME enthält `physio-athlete.de`
- **E-Mail:** leakurbitz@physio-athlete.de (IONOS, Weiterleitung auf Gmail)

## Seitenstruktur
Onepager mit React Router für Unterseiten:

- `/` — Onepager (Hero, Über mich, Leistungen, Für wen, Qualifikationen, Regionen, Einblicke, Anfrage-Funnel, Buchungs-CTA, Kontakt)
- `/impressum` — Impressum
- `/datenschutz` — Datenschutzerklärung

## Kontaktdaten (Impressum)
- **Name:** Lea Kurbitz / Physio Athlete by Lea
- **Adresse:** Brentanostr 31, 41352 Korschenbroich
- **Tel:** +49 1578 5742140
- **E-Mail:** leakurbitz@physio-athlete.de
- **Instagram:** @physio_athlete_by_lea

## Farbsystem (Maroon/Weiß/Schwarz)
- `--color-accent`: #8B1A1A (Maroon)
- `--color-accent-hover`: #7A1515
- `--color-accent-soft`: #F5EAEA
- `--color-dark-section`: #111111 (Hero, Qualifikationen, Anfrage-Funnel)
- `--color-bg-warm`: #F7F6F2
- `--color-text-primary`: #1F252B
- `--color-text-secondary`: #5D6772

## Bildmaterial (src/assets/images/)
Alle Bilder als WebP konvertiert. Kategorien:
- **Behandlung:** behandlung-knie, behandlung-zelt, behandlung-liege
- **Training:** training-bosu-senior, training-korrektur-gym, training-bosu-ball, training-medball, training-straddle, training-bosu-squad, training-spagat, training-medball-bosu
- **Verein:** verein-football-team/spiel/wiese/jugend/offiziell, verein-grossgruppe, verein-handball-mg/gross/team, verein-jugend-fussball, verein-rugby-damen/herren/event
- **Portrait:** portrait-schlitten, portrait-rasen, portrait-sportplatz, portrait-trikot
- **Hero/Sonstige:** hero-behandlung, portrait-lea, training-senioren

## Lead-Funnel (Anfrage-Section)
5-stufiges Formular in OnepagerPage.tsx (`LeadFunnel` Komponente):
1. Ziel (Chips: Abnehmen, Zunehmen, Muskelaufbau, Gesündere Lebensweise, Running, Hyrox, Triathlon, Football, Handball, Andere)
2. Geschlecht
3. Alter (14–18 bis 45+)
4. Freitext (Ziel + bisherige Probleme)
5. Kontaktdaten (Vorname, Nachname, Beruf-Dropdown, Tel, E-Mail)

Web3Forms Endpoint: `https://api.web3forms.com/submit`, Key: `c0affb53-cb99-4cba-986f-d18b46f5456d`

## Qualifikationen (aktuell)
- 2016: C-Trainer Breitensport / Fitnesstrainer
- 2026: ZPP-Zulassung – Präventionskurse § 20
- 2019: Übungsleiter B Reha & Orthopädie
- 2021: Staatliches Examen Physiotherapie
- 2022: KGG – Krankengymnastik am Gerät
- 2022: MLD – Manuelle Lymphdrainage
- 2023: Sport-Physiotherapie – SPT Education
- 2025: Concussion Therapeutin

## Wichtige Arbeitsregeln
- Keine unnötigen Gedankenstriche im Fließtext
- Alle E-Mail-Adressen → leakurbitz@physio-athlete.de
- Farbsystem ist Maroon/Weiß/Schwarz, nicht Petrol
- Mobile First — clamp()-Werte müssen auf 390px-Screens geprüft werden
- Commits immer mit aussagekräftiger Message + Push
- Kein `basename` im BrowserRouter (Vercel, nicht GitHub Pages)
- vite.config.ts base ist `/`
