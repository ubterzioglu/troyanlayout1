import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL || '/hero/hero-video.mp4';
const HERO_POSTER_URL = import.meta.env.VITE_HERO_POSTER_URL || '/hero/hero-poster.jpg';

const Hero = ({ onNavigate }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay can be blocked until user interaction.
      });
    }
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about-preview');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster={HERO_POSTER_URL}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,26,0.34)_0%,rgba(26,26,26,0.5)_38%,rgba(26,26,26,0.24)_72%,transparent_100%)]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 bg-charcoal/36" />
      </div>

      <div className="relative z-10 w-full px-6 pt-24 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 animate-fadeInUp">
            <img
              src="/logo.png"
              alt="Troyan İnşaat"
              className="hero-logo mx-auto h-64 sm:h-80 lg:h-96"
            />
          </div>

          <h1 className="animate-fadeInUp delay-200 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Güvenli, Sağlam ve
            <span className="mt-2 block text-bronze">Uzun Ömürlü Yapılar</span>
          </h1>

          <p className="mx-auto mb-10 mt-6 max-w-3xl animate-fadeInUp delay-300 text-base leading-relaxed text-white/80 lg:text-lg">
            Mühendislik disiplini, kalite anlayışı ve profesyonel yaklaşımıyla sektörde faaliyet
            gösteriyoruz.
          </p>

          <div className="animate-fadeInUp delay-400 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => handleNavClick('projects')}
              className="btn-bronze btn-uniform group"
            >
              Projelerimiz
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn-outline btn-uniform"
            >
              <Phone className="mr-2 h-4 w-4" />
              İletişime Geç
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-6 z-10 animate-bounce text-white/60 transition-colors duration-300 hover:text-white lg:left-12 xl:left-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
