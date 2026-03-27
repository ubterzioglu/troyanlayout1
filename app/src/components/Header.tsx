import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection?: string;
  onNavigate?: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Ana Sayfa' },
  { id: 'projects', label: 'Projeler' },
  { id: 'about', label: 'Hakkımızda' },
  { id: 'contact', label: 'İletişim' },
];

const Header = ({ currentSection = 'home', onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/95 py-3 shadow-lg backdrop-blur-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="relative w-full px-6 lg:px-12 xl:px-20">
        <div className="space-y-3">
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isScrolled ? 'max-h-24 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
            }`}
          >
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-3 text-left transition-opacity duration-300 hover:opacity-85 sm:gap-4"
                aria-hidden={!isScrolled}
                tabIndex={isScrolled ? 0 : -1}
              >
                <img src="/logo.png" alt="Troyan İnşaat" className="h-9 w-auto sm:h-11" />
                <span className="text-[11px] font-medium tracking-[0.03em] text-charcoal/78 sm:text-sm sm:tracking-[0.04em]">
                  Troyan İnşaat: Güvenli, sağlam ve uzun ömürlü yapılar.
                </span>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between lg:justify-center">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center overflow-hidden transition-all duration-300 lg:hidden ${
                isScrolled
                  ? 'max-w-[160px] opacity-100'
                  : 'pointer-events-none max-w-0 opacity-0'
              }`}
              aria-hidden={!isScrolled}
              tabIndex={isScrolled ? 0 : -1}
            >
              <img src="/logo.png" alt="Troyan İnşaat" className="h-11 w-auto" />
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <nav className="flex items-center justify-center gap-5">
                {navItems.map((item, index) => (
                  <div key={`${item.id}-${item.label}`} className="flex items-center gap-5">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`relative text-base font-medium tracking-[0.01em] transition-colors duration-300 ${
                        currentSection === item.id
                          ? 'text-bronze'
                          : isScrolled
                            ? 'text-charcoal hover:text-bronze'
                            : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {currentSection === item.id && (
                        <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-bronze" />
                      )}
                    </button>
                    {index < navItems.length - 1 && (
                      <span
                        className={`h-4 w-px ${
                          isScrolled ? 'bg-charcoal/20' : 'bg-white/20'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className={`rounded-full border px-3 py-2 transition-all duration-300 lg:hidden ${
                isScrolled
                  ? 'border-charcoal/15 bg-white text-charcoal shadow-sm'
                  : 'border-white/25 bg-charcoal/15 text-white backdrop-blur-sm'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={`absolute right-6 top-full mt-3 w-[min(20rem,calc(100vw-3rem))] origin-top-right rounded-2xl border border-charcoal/10 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? 'translate-y-0 scale-100 opacity-100'
              : 'pointer-events-none -translate-y-3 scale-95 opacity-0'
          }`}
        >
          <nav className="flex flex-col p-3">
            {navItems.map((item, index) => (
              <button
                key={`${item.id}-${item.label}`}
                onClick={() => handleNavClick(item.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium tracking-[0.02em] transition-colors duration-200 ${
                  currentSection === item.id
                    ? 'bg-bronze/8 text-bronze'
                    : 'text-charcoal hover:bg-charcoal/4'
                }`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
