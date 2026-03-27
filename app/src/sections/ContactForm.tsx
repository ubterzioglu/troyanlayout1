import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const contactCards = [
  {
    title: 'Adres',
    value: 'Karacaören Mah., Karacaören Cad. No:16/1-3, 17000 Çanakkale Merkez',
    href: 'https://maps.google.com/?q=Karacaören+Mah.+Karacaören+Cad.+No:16/1-3+17000+Çanakkale+Merkez',
    icon: MapPin,
    isExternal: true,
  },
  {
    title: 'Telefon',
    value: '+90 532 540 05 17',
    href: 'tel:+905325400517',
    icon: Phone,
  },
  {
    title: 'WhatsApp',
    value: '+90 532 540 05 17',
    href: 'https://wa.me/905325400517',
    icon: MessageCircle,
    isExternal: true,
  },
  {
    title: 'E-posta',
    value: 'info@troyaninsaat.com',
    href: 'mailto:info@troyaninsaat.com',
    icon: Mail,
  },
];

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-12 text-center">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
              İletişim Bilgileri
            </span>
            <h2 className="font-display text-3xl font-bold text-charcoal lg:text-4xl">
              Bize Ulaşın
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noreferrer' : undefined}
                  className="group flex min-h-[250px] flex-col items-center justify-center rounded-[1.9rem] border border-bronze/16 bg-white p-8 text-center shadow-[0_16px_38px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-bronze/35 hover:shadow-[0_24px_56px_rgba(0,0,0,0.12)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-bronze/10 shadow-[0_12px_28px_rgba(184,115,51,0.12)]">
                    <Icon className="h-7 w-7 text-bronze" />
                  </div>
                  <h4 className="mb-3 font-display text-xl font-bold text-charcoal lg:text-[1.75rem]">
                    {card.title}
                  </h4>
                  <p
                    className={`leading-relaxed text-concrete transition-colors duration-300 group-hover:text-charcoal ${
                      card.title === 'Adres' ? 'text-[0.98rem] lg:text-base' : 'text-base lg:text-lg'
                    }`}
                  >
                    {card.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
