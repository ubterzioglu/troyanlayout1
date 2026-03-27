import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate?: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Ana Sayfa' },
  { id: 'about', label: 'Hakkımızda' },
  { id: 'projects', label: 'Projeler' },
  { id: 'contact', label: 'İletişim' },
];

const contactItems = [
  {
    label: 'Adres',
    href: 'https://maps.google.com/?q=Karacaören+Mah.+Karacaören+Cad.+No:16/1-3+17000+Çanakkale+Merkez',
    icon: MapPin,
    external: true,
  },
  {
    label: 'Telefon',
    href: 'tel:+905325400517',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/905325400517',
    icon: MessageCircle,
    external: true,
  },
  {
    label: 'E-posta',
    href: 'mailto:info@troyaninsaat.com',
    icon: Mail,
  },
];

const Footer = ({ onNavigate }: FooterProps) => {
  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  const brandDivider = (
    <span className="hidden h-16 w-px bg-gradient-to-b from-transparent via-bronze/55 to-transparent lg:block" />
  );

  return (
    <footer className="relative bg-charcoal text-white">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-bronze to-transparent" />

      <div className="w-full px-6 pb-8 pt-10 lg:px-12 lg:pb-10 lg:pt-12 xl:px-20">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-5 text-center lg:min-h-[96px] lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:text-left">
              <img
                src="/logo.png"
                alt="Troyan İnşaat"
                className="h-16 brightness-0 invert lg:h-20"
              />
              {brandDivider}
              <div className="flex flex-col justify-center leading-none">
                <span className="font-display text-2xl font-semibold text-white lg:text-3xl">
                  Troyan
                </span>
                <span className="mt-1 font-display text-2xl font-semibold text-white lg:text-3xl">
                  İnşaat
                </span>
              </div>
              {brandDivider}
              <p className="max-w-[44rem] text-base leading-relaxed text-white/68 lg:self-center lg:text-[1.08rem] lg:leading-[1.7]">
                <span className="block">Güvenli, sağlam ve uzun ömürlü yapılar inşa ediyoruz.</span>
                <span className="block">Mühendislik disipliniyle kalıcı değer taşıyan projeler hayata geçiriyoruz.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 py-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className="group flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-bronze/30 bg-bronze/12 text-bronze shadow-[0_0_22px_rgba(184,115,51,0.18),0_12px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-bronze/60 hover:bg-bronze/18 hover:text-white hover:shadow-[0_0_34px_rgba(184,115,51,0.34),0_16px_34px_rgba(0,0,0,0.3)]"
                >
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-8 text-sm text-white/55">
            {navItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="transition-colors duration-300 hover:text-bronze"
                >
                  {item.label}
                </button>
                {index < navItems.length - 1 && <span className="h-4 w-px bg-white/18" />}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex items-center justify-center">
              <p className="text-center text-sm text-white/40">
                © 2026 Troyan İnşaat. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
