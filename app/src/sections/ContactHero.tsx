import { useEffect, useRef, useState } from 'react';

const ContactHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-charcoal pb-16 pt-32"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(184, 115, 51, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="absolute left-10 top-1/3 h-24 w-px bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />
      <div className="absolute bottom-1/3 right-10 h-24 w-px bg-gradient-to-b from-transparent via-bronze/50 to-transparent" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Projeniz İçin
            <span className="mt-2 block text-bronze">Bizimle İletişime Geçin</span>
          </h1>

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
            Ücretsiz keşif ve fiyat teklifi için formu doldurun veya doğrudan bize ulaşın.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
