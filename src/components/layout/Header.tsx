import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Leistungen',      href: '#leistungen' },
  { label: 'Über mich',       href: '#ueber-mich' },
  { label: 'Qualifikationen', href: '#qualifikationen' },
  { label: 'Kontakt',         href: '#kontakt' },
]

function scrollTo(id: string) {
  const el = document.querySelector(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

interface HeaderProps {
  minimal?: boolean
}

export default function Header({ minimal = false }: HeaderProps) {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const { pathname }              = useLocation()
  const isHome                    = pathname === '/' || pathname === ''

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const bgClass = scrolled || !isHome || minimal
    ? 'bg-white/95 backdrop-blur-sm shadow-sm'
    : 'bg-transparent'

  const textClass = scrolled || !isHome || minimal
    ? 'text-[var(--color-text-primary)]'
    : 'text-white'

  function handleNavClick(href: string) {
    setMenuOpen(false)
    if (!isHome) {
      window.location.href = '/' + href
      return
    }
    setTimeout(() => scrollTo(href), 50)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            to="/"
            className={`font-heading font-bold text-base tracking-tight transition-colors hover:opacity-70 ${textClass}`}
          >
            Physio Athlete<span className="text-[var(--color-accent)]"> by Lea</span>
          </Link>

          {/* Desktop Nav */}
          {!minimal && (
            <nav className="hidden md:flex items-center gap-7" aria-label="Hauptnavigation">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer bg-transparent border-0 p-0 hover:text-[var(--color-accent)] ${
                    scrolled || !isHome ? 'text-[var(--color-text-secondary)]' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://app.cituro.com/booking/5310318"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white text-sm font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Termin buchen
              </a>
            </nav>
          )}

          {/* Mobile Burger */}
          {!minimal && (
            <button
              className={`md:hidden p-2 -mr-2 ${textClass}`}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="block w-6 h-px bg-current mb-1.5 transition-all origin-center"
                style={menuOpen ? { transform: 'translateY(5px) rotate(45deg)' } : {}} />
              <span className="block w-6 h-px bg-current mb-1.5 transition-all"
                style={menuOpen ? { opacity: 0 } : {}} />
              <span className="block w-6 h-px bg-current transition-all origin-center"
                style={menuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!minimal && menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <nav className="container py-8 flex flex-col gap-1" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block text-left w-full py-4 text-lg font-medium border-b border-[var(--color-border-soft)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors cursor-pointer bg-transparent"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://app.cituro.com/booking/5310318"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-6 py-4 rounded-full bg-[var(--color-accent)] text-white font-semibold text-center hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Termin buchen
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
