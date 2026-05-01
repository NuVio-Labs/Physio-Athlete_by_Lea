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

      <div className="bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 rounded-xl p-5 mb-10 text-sm text-[var(--color-accent)]">
        <strong>Hinweis:</strong> Das Impressum wird vor dem Livegang mit den vollständigen Pflichtangaben befüllt.
      </div>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Angaben gemäß § 5 TMG</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Lea Kurbitz<br />
          [Straße und Hausnummer]<br />
          [PLZ] [Stadt]<br />
          Deutschland
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Kontakt</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Telefon: 015785742140<br />
          E-Mail: <a href="mailto:lea.kurbitz@gmail.com" className="text-[var(--color-accent)] hover:underline">lea.kurbitz@gmail.com</a>
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

      <div className="bg-[var(--color-accent-soft)] border border-[var(--color-accent)]/20 rounded-xl p-5 mb-10 text-sm text-[var(--color-accent)]">
        <strong>Hinweis:</strong> Die vollständige Datenschutzerklärung wird vor dem Livegang ergänzt. Insbesondere werden die Angaben zu Hosting, Cookies und Kontaktformular konkretisiert.
      </div>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Verantwortliche Person</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Lea Kurbitz<br />
          E-Mail: <a href="mailto:lea.kurbitz@gmail.com" className="text-[var(--color-accent)] hover:underline">lea.kurbitz@gmail.com</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Hosting</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Diese Website wird auf Servern in der Europäischen Union gehostet. Die Hostingdaten werden vor dem Livegang konkretisiert.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Kontaktaufnahme</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Wenn du per E-Mail oder Telefon Kontakt aufnimmst, werden die übermittelten Daten zur Bearbeitung deiner Anfrage verwendet und gespeichert. Diese Daten werden nicht ohne deine Zustimmung weitergegeben.
        </p>
      </section>

      <section>
        <h2 className="font-heading font-semibold text-[var(--color-text-primary)] text-lg mb-3">Buchungssystem Cituro</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
          Für die Terminbuchung wird das externe System Cituro genutzt. Beim Aufruf des Buchungslinks verlässt du diese Website. Es gelten die Datenschutzbestimmungen von Cituro.
        </p>
      </section>
    </article>
  )
}
