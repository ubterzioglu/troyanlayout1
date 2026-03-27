import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Yukarı çık"
      className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-charcoal/85 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal ${
        isVisible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <img
        src="/horse-head.png"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 object-contain"
      />
    </button>
  );
};

export default ScrollToTopButton;
