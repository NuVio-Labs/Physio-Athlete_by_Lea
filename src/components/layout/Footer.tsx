import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-section)] text-white/60">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-10">

          {/* Brand */}
          <div>
            <p className="font-heading font-bold text-white text-base mb-1">
              Physio Athlete <span className="text-[var(--color-accent)]">by Lea</span>
            </p>
            <p className="text-xs text-white/40 mb-4">Lea Kurbitz</p>
            <p className="text-sm leading-relaxed">
              Sportphysiotherapie, Leistungsdiagnostik und persönliche Betreuung – mobil in Leverkusen, Köln, Mönchengladbach und Viersen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-4">Navigation</p>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Leistungen',      href: '#leistungen' },
                { label: 'Über mich',       href: '#ueber-mich' },
                { label: 'Qualifikationen', href: '#qualifikationen' },
                { label: 'Kontakt',         href: '#kontakt' },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="font-heading font-semibold text-white text-xs uppercase tracking-widest mb-4">Kontakt</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="tel:+4915785742140" className="hover:text-white transition-colors">
                  015785742140
                </a>
              </li>
              <li>
                <a href="mailto:lea.kurbitz@gmail.com" className="hover:text-white transition-colors">
                  lea.kurbitz@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/physio_athlete_by_lea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @physio_athlete_by_lea
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://app.cituro.com/booking/5310318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-accent-mid)] transition-colors font-medium"
                >
                  Termin buchen →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Lea Kurbitz · Physio Athlete by Lea</p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
