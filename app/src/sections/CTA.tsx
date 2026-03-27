import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate?: (section: string) => void;
}

const CTA = ({ onNavigate }: CTAProps) => {
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

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(45deg, transparent 40%, rgba(184, 115, 51, 0.1) 40%, rgba(184, 115, 51, 0.1) 60%, transparent 60%)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/5" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-bronze/5" />

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Hayalinizdeki Projeyi
            <span className="mt-2 block text-bronze">Birlikte Hayata Geçirelim</span>
          </h2>

          <p className="mx-auto mb-12 max-w-4xl text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
            Ücretsiz keşif ve fiyat teklifi için bize ulaşın. Uzman ekibimiz projenizi dinlemeye hazır.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-bronze btn-uniform group"
            >
              İletişim
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
