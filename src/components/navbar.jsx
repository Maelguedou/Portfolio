import { useState } from 'react';
import { LanguageToggle } from './LanguageToggle'
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e,href) =>{

    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const navLinks = [
    { label: t('nav.home'), href: '#hero' },
    {label: t('nav.about'), href: '#about'},
    { label: t('nav.skills'), href: '#technologies' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (

    

    <header className="sticky top-0 z-50 bg- border-b-2  border-yellow-400  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Marque */}
          <a href="#hero" className="text-xl font-bold text-secondary tracking-tight">
            <span className="text-white"><span className="text-yellow-400">Maël </span>GUEDOU</span>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className=" text-yellow-400 font-bold hover:text-primary  text-sm transition-colors hover:underline-offset-6 hover:underline hover:font-bold"
                    onClick={(e)=>handleScroll(e,link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              
            </ul>

            {/* Bouton d'action principal */}
            <a
              href="#contact"
              className="bg-background-secondary-light  text-surface px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm"
            >
              {t('nav.contactMe')}
            </a>
            <LanguageToggle />
          </nav>

          {/* Bouton Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-text-secondary-light  p-2 rounded-md focus:outline-none"
              aria-label={t('nav.openMenu')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu Déroulant Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg- border-b border-secondary-light/20 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-text-secondary-light hover:text-primary py-2 font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-background-secondary-light hover:bg-primary-hover text-surface px-4 py-2 rounded-lg font-medium transition-colors shadow-sm"
            >
              {t('nav.contactMe')}
            </a>
          </div>
          <div className="pt-1 flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
