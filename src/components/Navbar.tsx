import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/content';
import { useScrollSpy } from '@/components/Reveal';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useScrollSpy();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-sand-50/95 shadow-lg shadow-sand-900/5 backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-wide flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center"
          >
            <img
              src="/assets/new%20V-logos/victoria%20light%20BG%20logo.png"
              alt="Victoria Expeditions"
              className="h-8 lg:h-14 xl:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    scrolled
                      ? active === link.href.slice(1)
                        ? 'text-primary-700'
                        : 'text-sand-700 hover:text-primary-600'
                      : active === link.href.slice(1)
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.href.slice(1) && (
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full transition-all duration-300 ${
                        scrolled ? 'bg-primary-600' : 'bg-white'
                      }`}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary"
            >
              Plan Your Safari
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled ? 'text-sand-900 hover:bg-sand-200' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`absolute inset-0 bg-sand-950/60 backdrop-blur-sm transition-opacity duration-400 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-sand-50 px-6 pt-24 pb-8 shadow-2xl transition-transform duration-500 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active === link.href.slice(1)
                      ? 'bg-primary-600/10 text-primary-700'
                      : 'text-sand-800 hover:bg-sand-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-primary w-full"
            >
              Plan Your Safari
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
