import { Helmet } from 'react-helmet-async'
import Button from '../components/ui/Button'
import imgHero from '../assets/images/hero-behandlung.webp'
import imgPortrait from '../assets/images/portrait-lea.webp'
import imgTrainingSenioren from '../assets/images/training-senioren.webp'
import imgTrainingHighfive from '../assets/images/training-highfive.webp'
import imgPhysiobox from '../assets/images/einblicke-physiobox.webp'
import imgSportfest from '../assets/images/einblicke-sportfest.webp'
import imgSpagat from '../assets/images/einblicke-spagat.webp'

// ─── Daten ────────────────────────────────────────────────────────────────────

const services = [
  {
    id: 'physiotherapie',
    title: 'Physiotherapie',
    description:
      'Individuelle Behandlung bei Beschwerden und Bewegungseinschränkungen. Aktiv, praxisnah und auf dich abgestimmt.',
  },
  {
    id: 'diagnostik',
    title: 'Leistungsdiagnostik',
    description:
      'Analyse deiner Bewegungsmuster, Belastbarkeit und körperlichen Leistungsfähigkeit als Grundlage für eine gezielte, individuelle Trainings- und Therapieplanung.',
  },
  {
    id: 'praevention',
    title: 'Präventionskurse § 20',
    description:
      'Zertifizierte Präventionskurse nach § 20 SGB V, von der Krankenkasse bezuschusst. Bewegung, Stabilität und Gesundheit in aktiven Gruppenformaten.',
  },
  {
    id: 'personal',
    title: 'Personal Training',
    description:
      'Persönliche Trainingsbegleitung, die zu deinen Zielen, deinem Alltag und deinem Körper passt. Strukturiert, nachhaltig und mit echtem Fokus auf deine Entwicklung.',
  },
  {
    id: 'verein',
    title: 'Vereinsbetreuung',
    description:
      'Professionelle Betreuung von Vereinen und Teams direkt auf dem Trainingsgelände. Von der Prävention über Schnelldiagnostik bis zur Begleitung im Wettkampfbetrieb.',
  },
]

const audiences = [
  {
    title: 'Sportlich motivierte Menschen',
    body: 'Die ihren Körper gezielt unterstützen und langfristig leistungsfähig bleiben wollen.',
  },
  {
    title: 'Aktive mit Beschwerden',
    body: 'Die trotz Schmerzen oder Einschränkungen wieder Sicherheit und Belastbarkeit aufbauen möchten.',
  },
  {
    title: 'Wiedereinstieg nach Verletzung',
    body: 'Schritt für Schritt zurück in Bewegung, Training und den Alltag. Mit klarer Begleitung.',
  },
  {
    title: 'Prävention & Entwicklung',
    body: 'Wer frühzeitig Stabilität und Funktion stärken will, bevor Beschwerden größer werden.',
  },
]

const qualifications = [
  { year: '2021', label: 'Staatliches Examen Physiotherapie' },
  { year: '2023', label: 'Sport-Physiotherapie – SPT Education' },
  { year: '',     label: 'KGG – Krankengymnastik am Gerät' },
  { year: '',     label: 'MLD – Manuelle Lymphdrainage' },
  { year: '',     label: 'C-Trainer Breitensport / Fitnesstrainer' },
  { year: '',     label: 'Übungsleiter B Reha & Orthopädie' },
  { year: '',     label: 'ZPP-Zulassung – Präventionskurse § 20' },
]

const regions = [
  { name: 'Leverkusen',     note: 'Schwerpunkt' },
  { name: 'Köln',           note: '' },
  { name: 'Mönchengladbach',note: '' },
  { name: 'Viersen',        note: '' },
]

// ─── Komponente ───────────────────────────────────────────────────────────────

export default function OnepagerPage() {
  return (
    <>
      <Helmet>
        <title>Lea Kurbitz | Sportphysiotherapie & Personal Training in Leverkusen, Köln, MG</title>
        <meta
          name="description"
          content="Sportphysiotherapie, Leistungsdiagnostik, Präventionskurse und Personal Training in Leverkusen, Köln, Mönchengladbach und Viersen. Jetzt Termin buchen."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://leakurbitz.de/" />
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* Variante C: oben Text, unten Bild */}
      <section
        id="hero"
        className="relative flex flex-col min-h-[100svh] bg-[var(--color-dark-section)] overflow-hidden"
        aria-label="Einleitung"
      >
        {/* ── Obere Hälfte: Text ── */}
        <div className="relative z-10 flex flex-col justify-end flex-1 pb-10 md:pb-14">
          {/* Hintergrund */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, #0f0a0a 0%, #1a0a0a 60%, #111111 100%)' }}
            aria-hidden="true"
          />
          {/* Dezentes Raster */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          {/* Maroon Glow */}
          <div
            className="absolute right-0 bottom-0 w-2/3 h-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 80%, #8B1A1A 0%, transparent 60%)' }}
            aria-hidden="true"
          />

          <div className="relative container pt-28 md:pt-36">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Physio Athlete by Lea Kurbitz
            </p>
            <h1
              className="font-heading font-bold text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Sportphysiotherapie.<br />
              <span className="text-[var(--color-accent)]">Persönlich.</span> Mobil.
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Aktive Betreuung für sportliche Menschen in Leverkusen, Köln, Mönchengladbach und Viersen. Bei dir zuhause, im Verein oder outdoors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://app.cituro.com/booking/5310318" external size="lg">
                Termin buchen
              </Button>
              <Button
                href="#leistungen"
                variant="light"
                size="lg"
                className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20"
              >
                Leistungen ansehen
              </Button>
            </div>
          </div>
        </div>

        {/* ── Untere Hälfte: Bild ── */}
        <div className="relative w-full" style={{ height: 'clamp(280px, 45vh, 520px)' }}>
          {/* Oberer Übergang: Dunkel ins Bild */}
          <div
            className="absolute inset-x-0 top-0 h-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #111111 0%, transparent 100%)' }}
            aria-hidden="true"
          />
          <img
            src={imgHero}
            alt="Lea Kurbitz – Sportphysiotherapeutin bei der aktiven Betreuung"
            className="w-full h-full object-cover object-top opacity-70"
          />
          {/* Unterer Fade ins Weiß der nächsten Section */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, #ffffff 100%)' }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── ÜBER MICH ────────────────────────────────────────────────────── */}
      <section id="ueber-mich" className="section-py bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Über mich
              </p>
              <h2
                className="font-heading font-bold text-[var(--color-text-primary)] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Hi, ich bin Lea.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                Als Sportphysiotherapeutin und Trainerin begleite ich Menschen, die aktiv an sich arbeiten wollen. Nicht nur kurzfristig Beschwerden loswerden, sondern den Körper langfristig stärken und belastbarer machen.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Ich arbeite mobil: bei dir zuhause, auf Vereinsgeländen, im Freien oder in gemieteten Räumen. Kein starrer Praxisrahmen, sondern Betreuung, die zu deinem Alltag passt.
              </p>
              <Button
                href="https://app.cituro.com/booking/5310318"
                external
              >
                Termin buchen
              </Button>
            </div>

            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] max-w-sm mx-auto md:mx-0 md:ml-auto rounded-2xl overflow-hidden">
                <img
                  src={imgPortrait}
                  alt="Lea Kurbitz – Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ───────────────────────────────────────────────────── */}
      <section id="leistungen" className="section-py bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="max-w-xl mb-12 md:mb-16">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Leistungen
            </p>
            <h2
              className="font-heading font-bold text-[var(--color-text-primary)] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Was ich anbiete
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Preis­informationen findest du direkt im Buchungssystem. Hier erkläre ich kurz, wofür die einzelnen Angebote gedacht sind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((service, i) => (
              <article
                key={service.id}
                className="group bg-white rounded-2xl p-6 border border-[var(--color-border-soft)] hover:border-[var(--color-accent)]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center mb-4" aria-hidden="true">
                  <span className="text-[var(--color-accent)] text-xs font-bold">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-semibold text-[var(--color-text-primary)] text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Button
              href="https://app.cituro.com/booking/5310318"
              external
              size="lg"
            >
              Alle Angebote und Preise ansehen
            </Button>
          </div>
        </div>
      </section>

      {/* ── FÜR WEN ──────────────────────────────────────────────────────── */}
      <section id="fuer-wen" className="section-py bg-white">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Für wen
            </p>
            <h2
              className="font-heading font-bold text-[var(--color-text-primary)] mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Das Beste aus dir herausholen
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Egal ob jung oder erfahren, Leistungssportler oder Einsteiger: der gemeinsame Nenner ist der Wille, sich aktiv weiterzuentwickeln.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex gap-4 p-5 rounded-2xl bg-[var(--color-bg-warm)] border border-[var(--color-border-soft)]"
              >
                <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-accent)] flex items-center justify-center" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-semibold text-[var(--color-text-primary)] text-sm mb-1">{a.title}</p>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALIFIKATIONEN ──────────────────────────────────────────────── */}
      <section id="qualifikationen" className="section-py bg-[var(--color-dark-section)]">
        <div className="container">
          <div className="max-w-xl mb-12">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Ausbildung & Qualifikationen
            </p>
            <h2
              className="font-heading font-bold text-white mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Fachliche Grundlage
            </h2>
            <p className="text-white/50 leading-relaxed">
              Kontinuierliche Weiterbildung und spezialisierte Zusatzqualifikationen sind die Basis für eine moderne, evidenzbasierte Betreuung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {qualifications.map((q) => (
              <div
                key={q.label}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-[var(--color-accent)] opacity-80" aria-hidden="true" />
                <div>
                  <p className="text-white text-sm font-medium leading-snug">{q.label}</p>
                  {q.year && (
                    <p className="text-white/30 text-xs mt-0.5">{q.year}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EINSATZORTE / REGIONEN ───────────────────────────────────────── */}
      <section id="regionen" className="section-py bg-[var(--color-accent-soft)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Einsatzgebiete
              </p>
              <h2
                className="font-heading font-bold text-[var(--color-text-primary)] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Ich komme zu dir
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Kein Pendelstress, keine Praxissuche. Ich arbeite mobil und komme zu dir: bei dir zuhause, auf dem Vereinsgelände, outdoors oder in einem Raum deiner Wahl.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {regions.map((r) => (
                  <span
                    key={r.name}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[var(--color-border-soft)] text-sm font-medium text-[var(--color-text-primary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                    {r.name}
                    {r.note && <span className="text-[var(--color-accent)] text-xs">&nbsp;·&nbsp;{r.note}</span>}
                  </span>
                ))}
              </div>
              <Button
                href="https://app.cituro.com/booking/5310318"
                external
              >
                Termin anfragen
              </Button>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={imgTrainingSenioren}
                alt="Lea Kurbitz beim mobilen Training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EINBLICKE ────────────────────────────────────────────────────── */}
      <section id="einblicke" className="section-py bg-white">
        <div className="container">
          <div className="max-w-xl mb-10">
            <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Einblicke
            </p>
            <h2
              className="font-heading font-bold text-[var(--color-text-primary)]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
            >
              Echte Arbeit. Echte Bilder.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: imgTrainingHighfive, alt: 'Lea Kurbitz beim Personal Training', offset: false },
              { src: imgPhysiobox,        alt: 'Gruppentraining in der PhysioBox MG', offset: true },
              { src: imgSportfest,        alt: 'Lea Kurbitz bei der Vereinsbetreuung', offset: false },
              { src: imgSpagat,           alt: 'Lea Kurbitz zeigt Beweglichkeit', offset: true },
            ].map((img) => (
              <div
                key={img.src}
                className={`aspect-[3/4] rounded-2xl overflow-hidden${img.offset ? ' md:mt-8' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUCHUNGS-CTA ─────────────────────────────────────────────────── */}
      <section id="buchen" className="section-py bg-[var(--color-accent)]">
        <div className="container text-center">
          <h2
            className="font-heading font-bold text-white mb-5"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed max-w-lg mx-auto mb-10">
            Buche direkt deinen Termin. Preise und freie Slots findest du im Buchungssystem, unkompliziert und ohne lange Wartezeit.
          </p>
          <Button
            href="https://app.cituro.com/booking/5310318"
            external
            size="lg"
            variant="light"
          >
            Jetzt Termin buchen →
          </Button>
        </div>
      </section>

      {/* ── KONTAKT ──────────────────────────────────────────────────────── */}
      <section id="kontakt" className="section-py bg-[var(--color-bg-warm)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* Links: Info */}
            <div>
              <p className="text-[var(--color-accent)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                Kontakt
              </p>
              <h2
                className="font-heading font-bold text-[var(--color-text-primary)] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
              >
                Fragen? Meld dich.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Ob Fragen zum Angebot, zur Abrechnung mit der Krankenkasse oder zur Vereinsbetreuung: schreib einfach oder ruf an. Ich antworte in der Regel innerhalb von 1 bis 2 Werktagen.
              </p>

              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="tel:+4915785742140"
                    className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors group"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors" aria-hidden="true">
                      <svg className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="font-medium">015785742140</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lea.kurbitz@gmail.com"
                    className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors group"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors" aria-hidden="true">
                      <svg className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="font-medium">lea.kurbitz@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/physio_athlete_by_lea"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors group"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--color-accent-soft)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors" aria-hidden="true">
                      <svg className="w-4 h-4 text-[var(--color-accent)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.75" />
                        <circle cx="12" cy="12" r="4" strokeWidth="1.75" />
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
                      </svg>
                    </span>
                    <span className="font-medium">@physio_athlete_by_lea</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Rechts: Buchungs-CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border-soft)]">
                <h3 className="font-heading font-bold text-[var(--color-text-primary)] text-xl mb-3">
                  Direkt Termin buchen
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                  Im Buchungssystem findest du alle aktuellen Leistungen, Preise und freien Termine. Einfach auswählen und buchen.
                </p>
                <a
                  href="https://app.cituro.com/booking/5310318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Termin buchen →
                </a>
                <p className="text-center text-[var(--color-text-secondary)] text-xs mt-4">
                  Öffnet das Cituro-Buchungssystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
