import { Helmet } from 'react-helmet-async'

interface Props {
  datenschutz?: boolean
  agb?: boolean
}

const pageMeta = {
  impressum: {
    title: 'Impressum | Physio Athlete by Lea',
    description: 'Impressum von Physio Athlete by Lea Kurbitz – Anbieterkennzeichnung gemäß § 5 TMG.',
    path: '/impressum',
  },
  datenschutz: {
    title: 'Datenschutzerklärung | Physio Athlete by Lea',
    description: 'Datenschutzerklärung von Physio Athlete by Lea Kurbitz – Informationen zur Verarbeitung deiner personenbezogenen Daten.',
    path: '/datenschutz',
  },
  agb: {
    title: 'AGB | Physio Athlete by Lea',
    description: 'Allgemeine Geschäftsbedingungen von Physio Athlete by Lea Kurbitz für Physiotherapie, Personal Training, Workshops und Vereinsbetreuung.',
    path: '/agb',
  },
}

export default function ImpressumPage({ datenschutz = false, agb = false }: Props) {
  const meta = agb ? pageMeta.agb : datenschutz ? pageMeta.datenschutz : pageMeta.impressum

  return (
    <div className="container-text">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://physio-athlete.de${meta.path}`} />
      </Helmet>
      {agb ? <AGB /> : datenschutz ? <Datenschutz /> : <Impressum />}
    </div>
  )
}

function Impressum() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="font-heading font-bold text-[var(--color-text-primary)] text-2xl mb-8">
        Impressum
      </h1>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Angaben gemäß § 5 TMG</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Lea Kurbitz<br />
          Physio Athlete by Lea<br />
          Brentanostr 31<br />
          41352 Korschenbroich<br />
          Deutschland
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Kontakt</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Telefon: <a href="tel:+4915785742140" className="text-[var(--color-accent)] hover:underline">+49 1578 5742140</a><br />
          E-Mail: <a href="mailto:leakurbitz@physio-athlete.de" className="text-[var(--color-accent)] hover:underline">leakurbitz@physio-athlete.de</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Berufsbezeichnung: Physiotherapeutin<br />
          Verliehen in: Deutschland
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Haftung für Inhalte</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Urheberrecht</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </article>
  )
}

function Datenschutz() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="font-heading font-bold text-[var(--color-text-primary)] text-2xl mb-8">
        Datenschutzerklärung
      </h1>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Verantwortliche Person</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Lea Kurbitz<br />
          Brentanostr 31<br />
          41352 Korschenbroich<br />
          E-Mail: <a href="mailto:leakurbitz@physio-athlete.de" className="text-[var(--color-accent)] hover:underline">leakurbitz@physio-athlete.de</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Hosting</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel kann beim Aufruf der Website Server-Logfiles erfassen (IP-Adresse, Browser, Betriebssystem, Uhrzeit). Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website). Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">vercel.com/legal/privacy-policy</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Kontaktformular</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Das Kontaktformular auf dieser Website nutzt den Dienst Web3Forms (Hemito Digital, Kerala, India). Die im Formular eingegebenen Daten (Name, E-Mail, Telefon, Nachricht) werden an Web3Forms übermittelt und von dort per E-Mail an die Inhaberin weitergeleitet. Eine Speicherung der Daten über die Übermittlung hinaus findet nicht statt. Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Nutzung des Formulars). Weitere Informationen: <a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">web3forms.com/privacy</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Kontaktaufnahme per E-Mail oder Telefon</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Wenn du per E-Mail oder Telefon Kontakt aufnimmst, werden die übermittelten Daten zur Bearbeitung deiner Anfrage verwendet und gespeichert. Diese Daten werden nicht ohne deine Zustimmung an Dritte weitergegeben.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Buchungssystem Cituro</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Für die Terminbuchung wird das externe System Cituro genutzt. Beim Aufruf des Buchungslinks verlässt du diese Website. Es gelten die Datenschutzbestimmungen von Cituro.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Deine Rechte</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Wende dich dazu an: <a href="mailto:leakurbitz@physio-athlete.de" className="text-[var(--color-accent)] hover:underline">leakurbitz@physio-athlete.de</a>.
        </p>
      </section>
    </article>
  )
}

function AGB() {
  return (
    <article className="prose prose-sm max-w-none">
      <h1 className="font-heading font-bold text-[var(--color-text-primary)] text-2xl mb-8">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>

      <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm mb-8 italic">
        Gültig ab: 27. August 2026
      </p>

      <AGBSection title="§ 1 Anwendungsbereich">
        <p>Diese AGB gelten für sämtliche Verträge zwischen Physio Athlete by Lea Kurbitz (Brentanostraße 31, 41352 Korschenbroich) und Privatkunden sowie Geschäftskunden über den Onlineshop auf <a href="https://app.cituro.com/booking/5310318" className="text-[var(--color-accent)] hover:underline">https://app.cituro.com/booking/5310318</a> oder per E-Mail/WhatsApp.</p>
        <p>Der Umfang der angebotenen Dienstleistungen umfasst: Personal Training, Physiotherapie, Workshops und Lehrgänge, Sportveranstaltungen.</p>
      </AGBSection>

      <AGBSection title="§ 2 Vertragsabschluss">
        <p><strong>Angebot und Vertragsschluss:</strong> Die Präsentation der Dienstleistungen im Onlineshop stellt kein rechtlich bindendes Angebot dar. Du gibst ein verbindliches Angebot ab, indem du den Bestellprozess durchläufst und „Jetzt buchen" anklickst. Der Kaufvertrag kommt erst durch eine ausdrückliche Annahmebestätigung per E-Mail oder durch die Erbringung der Dienstleistung zustande.</p>
        <p><strong>Kundenvorgaben:</strong> Du musst mindestens 16 Jahre alt sein. Die Angebote richten sich ausschließlich an Kunden mit einer Lieferanschrift innerhalb der Europäischen Union.</p>
      </AGBSection>

      <AGBSection title="§ 3 Widerrufsrecht">
        <p><strong>Widerrufsrecht für Privatkunden:</strong> Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen. <strong>Ausnahme:</strong> Veranstaltungen, die an nur einem bestimmten Wochenende stattfinden, sind vom Widerrufsrecht ausgeschlossen.</p>
        <p>Um dein Widerrufsrecht auszuüben, musst du Lea Kurbitz per E-Mail (<a href="mailto:leakurbitz@physio-athlete.de" className="text-[var(--color-accent)] hover:underline">leakurbitz@physio-athlete.de</a>) oder Brief über deine Rücktrittsabsicht informieren.</p>
        <p><strong>Folgen des Widerrufs:</strong> Im Falle eines Widerrufs wird die Zahlung unverzüglich und spätestens 14 Tage nach Zugang der Widerrufsmitteilung zurückzahlt. Du musst erbrachte Dienstleistungen nicht zurückgeben.</p>
        <p><strong>Widerrufsrecht für Geschäftskunden:</strong> Geschäftskunden haben kein gesetzliches Widerrufsrecht. Verträge sind bindend und können nur nach gesetzlichen Bestimmungen storniert werden.</p>
      </AGBSection>

      <AGBSection title="§ 4 Ausschluss des Widerrufsrechts">
        <p>Das Widerrufsrecht besteht nicht bei Verträgen zur Erbringung von Dienstleistungen, wenn die Dienstleistung vollständig erbracht wurde und du deine ausdrückliche Zustimmung gegeben hast mit dem Verständnis, dass du dein Widerrufsrecht bei vollständiger Vertragserfüllung verlierst.</p>
      </AGBSection>

      <AGBSection title="§ 5 Preise">
        <p>Alle angegebenen Preise enthalten die gesetzliche Mehrwertsteuer (sofern nicht die Kleinunternehmer-Regelung in Kraft ist). Es gelten die zum Zeitpunkt der Bestellung angegebenen Preise.</p>
      </AGBSection>

      <AGBSection title="§ 6 Zahlungsbedingungen">
        <p><strong>Zahlung:</strong> Die Zahlung ist mit Vertragsabschluss fällig. Folgende Zahlungsmethoden sind verfügbar:</p>
        <ul className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          <li><strong>Vorkasse:</strong> Rechnung innerhalb von 1 Kalendertag nach Bestelleingang</li>
          <li><strong>PayPal:</strong> Zahlung nach Weiterleitung zu PayPal</li>
          <li><strong>Rechnung:</strong> Zahlung innerhalb von 7 Tagen nach Erhalt der Buchungsbestätigung</li>
        </ul>
        <p className="mt-4"><strong>Zahlungsverzug:</strong> Bei Zahlungsverzug oder Rücklastschrift behalte ich mir vor, Verzugsschäden (Mahngebühren, Verzugszinsen, Rückbuchungsgebühren) geltend zu machen.</p>
      </AGBSection>

      <AGBSection title="§ 7 Gewährleistung">
        <p><strong>Für Privatkunden:</strong> Es gelten die gesetzlichen Gewährleistungsrechte. Zusätzlich zu einer 30-Tage-Rückgabegarantie hast du ein gesetzliches Gewährleistungsrecht von zwei Jahren ab Erbringung der Dienstleistung.</p>
        <p><strong>Für Geschäftskunden:</strong> Ein Mangel wird durch Nachbesserung behoben. Die Verjährungsfrist beträgt ein Jahr. Dies gilt nicht für Schadensersatzansprüche aus Verletzung von Leben, Körper oder Gesundheit sowie bei Vorsatz oder grober Fahrlässigkeit.</p>
      </AGBSection>

      <AGBSection title="§ 8 Haftung">
        <p>Meine Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Dies gilt nicht für Verletzungen von Leben, Körper und Gesundheit, wesentliche Vertragspflichten oder Verzugsschäden.</p>
        <p>Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist meine Haftung auf den typischerweise vorhersehbaren Schaden begrenzt. Im Fall von Verzug beträgt die maximale Haftung 5% des Auftragswertes.</p>
      </AGBSection>

      <AGBSection title="§ 9 Datenschutz">
        <p>Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß DSGVO. Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben, es sei denn, du hast ausdrücklich zugestimmt oder es besteht eine gesetzliche Verpflichtung.</p>
        <p>Du hast das Recht, jederzeit Auskunft über deine gespeicherten Daten zu erhalten sowie deren Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen.</p>
        <p>Weitere Informationen findest du in der <a href="/datenschutz" className="text-[var(--color-accent)] hover:underline">Datenschutzerklärung</a>.</p>
      </AGBSection>

      <AGBSection title="§ 10 Benutzerkonto">
        <p><strong>Registrierung:</strong> Bei der Registrierung musst du vollständige und wahrheitsgemäße Angaben machen. Du musst deine Zugangsdaten (Benutzername und Passwort) sicher aufbewahren und vor dem Zugriff Dritter schützen.</p>
        <p><strong>Datenaktualisierung:</strong> Du musst Änderungen deiner persönlichen Daten unverzüglich im Benutzerkonto aktualisieren.</p>
        <p><strong>Konto-Sperrung:</strong> Ich behalte mir das Recht vor, dein Benutzerkonto zu sperren oder zu löschen, wenn Anhaltspunkte für missbräuchliche Nutzung vorliegen, du gegen diese AGB verstößt oder du unrichtige Angaben bei der Registrierung gemacht hast.</p>
      </AGBSection>

      <AGBSection title="§ 11 Stornierungsbedingungen">
        <p><strong>Einzeltermine:</strong> Müssen mindestens 24 Stunden vor dem Termin abgesagt werden.</p>
        <p><strong>Gruppentermine</strong> (z.B. Camps, Workshops): Müssen mindestens 7 Tage vor dem Termin abgesagt werden.</p>
        <p><strong>Stornierungsgebühren:</strong> Stornierungen innerhalb der genannten Fristen sind kostenlos. Bei zu kurzfristiger Absage werden 75% des Terminpreises als Ausfallrechnung berechnet.</p>
      </AGBSection>

      <AGBSection title="§ 12 Änderungen der AGB">
        <p>Ich behalte mir das Recht vor, diese AGB jederzeit mit Wirkung für die Zukunft zu ändern. Änderungen werden dir mindestens 4 Wochen vor Inkrafttreten per E-Mail mitgeteilt. Wenn du den Änderungen nicht innerhalb von 4 Wochen nach Zugang widersprichst, gelten die Änderungen als angenommen.</p>
      </AGBSection>

      <AGBSection title="§ 13 Anwendbares Recht">
        <p>Für alle Rechtsbeziehungen zwischen mir und dir gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch der durch zwingende Bestimmungen des Rechts deines Heimatlandes gewährte Schutz nicht entzogen wird.</p>
      </AGBSection>

      <AGBSection title="§ 14 Schlussbestimmungen">
        <p><strong>Sprache:</strong> Vertragssprache ist Deutsch.</p>
        <p><strong>Unwirksamkeit:</strong> Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
        <p><strong>Schriftform:</strong> Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform.</p>
      </AGBSection>

      <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          <strong>Kontakt:</strong><br />
          Lea Kurbitz<br />
          Brentanostraße 31<br />
          41352 Korschenbroich<br />
          Telefon: <a href="tel:+4915785742140" className="text-[var(--color-accent)] hover:underline">+49 1578 5742140</a><br />
          E-Mail: <a href="mailto:leakurbitz@physio-athlete.de" className="text-[var(--color-accent)] hover:underline">leakurbitz@physio-athlete.de</a>
        </p>
      </div>
    </article>
  )
}

function AGBSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">{title}</h2>
      <div className="text-[var(--color-text-secondary)] leading-relaxed text-sm space-y-3">
        {children}
      </div>
    </section>
  )
}
