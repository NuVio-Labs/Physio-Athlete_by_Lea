interface Props {
  datenschutz?: boolean
}

export default function ImpressumPage({ datenschutz = false }: Props) {
  return (
    <div className="container-text">
      {datenschutz ? <Datenschutz /> : <Impressum />}
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
