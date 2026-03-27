import { useEffect, useRef, useState } from 'react';

interface AboutProps {
  onNavigate?: (section: string) => void;
}

const HERO_VIDEO_URL = import.meta.env.VITE_HERO_VIDEO_URL || '/hero/hero-video.mp4';
const HERO_POSTER_URL = import.meta.env.VITE_HERO_POSTER_URL || '/hero/hero-poster.jpg';

const features = [
  {
    title: 'Yönetmeliklere uygun yapılar',
    image: '/about/feature-blueprint.jpg',
    alt: 'Genel mimari planlama görseli',
  },
  {
    title: 'Depreme dayanıklı konstrüksiyon',
    image: '/about/feature-structure.jpg',
    alt: 'Genel yapı strüktürü görseli',
  },
  {
    title: 'Kaliteli malzeme seçimi',
    image: '/about/feature-material.jpg',
    alt: 'Genel malzeme dokusu görseli',
  },
  {
    title: 'Zamanında teslimat',
    image: '/about/feature-time.jpg',
    alt: 'Genel zaman kavramını temsil eden görsel',
  },
] as const;

const paragraphClassName =
  'text-justify text-[0.96rem] leading-[1.72] text-concrete lg:text-[0.98rem] lg:leading-[1.62]';

const About = (props: AboutProps) => {
  void props;

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about-preview" className="bg-cream py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="mb-4 block text-center text-sm font-semibold uppercase tracking-[0.2em] text-bronze">
            Hakkımızda
          </span>
          <h2 className="section-title mx-auto mb-0 max-w-4xl font-display text-3xl font-bold text-charcoal lg:text-4xl xl:text-5xl">
            Güvenli ve Sağlam
            <span className="mt-2 block text-bronze">Yapılar İnşa Ediyoruz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div
            className={`transition-all duration-1000 lg:h-[500px] ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-4 lg:flex lg:h-full lg:flex-col lg:justify-between lg:space-y-[1.125rem]">
              <p className={paragraphClassName}>
                TROYAN İNŞAAT Şirketi, güvenli, sağlam ve uzun ömürlü yapılar inşa etme hedefiyle
                kurulmuş; mühendislik disiplini, kalite anlayışı ve profesyonel yaklaşımıyla yapı
                sektöründe faaliyet gösteren bir inşaat firmasıdır.
              </p>
              <p className={paragraphClassName}>
                Kurulduğumuz günden bu yana, her projeyi yalnızca bir yapı değil, aynı zamanda
                kalıcı bir değer olarak ele alıyoruz. Projelerimizin temelinde doğru planlama,
                güçlü mühendislik ve kaliteli malzeme seçimi yer alır. Konut, ticari yapı ve
                kentsel dönüşüm projelerinde; güncel yönetmeliklere uygun, depreme dayanıklı ve
                modern yaşam ihtiyaçlarını karşılayan çözümler üretiriz. Tüm süreçlerimiz,
                alanında uzman teknik kadromuz tarafından titizlikle yönetilir.
              </p>
              <p className={paragraphClassName}>
                TROYAN İNŞAAT olarak şeffaflık, güven ve sürdürülebilirlik ilkelerini ön planda
                tutarız. Proje başlangıcından anahtar teslimine kadar her aşamada müşterilerimizle
                yakın iletişim içinde çalışır, beklentileri doğru analiz eder ve çözüm odaklı bir
                yaklaşım benimseriz. Zamanında teslim ve yüksek işçilik kalitesi, değişmeyen
                önceliklerimizdendir. Mimari estetik ile fonksiyonelliği bir araya getirerek,
                yalnızca bugüne değil geleceğe de değer katan yapılar inşa etmeyi amaçlıyoruz.
                Kaynakları verimli kullanan, çevreye duyarlı ve uzun vadede yüksek performans sunan
                projelerle sektörde güvenilir bir marka olma yolunda ilerliyoruz.
              </p>
              <p className={paragraphClassName}>
                TROYAN İNŞAAT olarak, attığımız her temelde sorumluluğumuzun bilinciyle hareket
                ediyor; sağlam, güvenli ve nitelikli yapılarla yaşam alanlarını geleceğe taşıyoruz.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all delay-200 duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={HERO_POSTER_URL}
                  className="h-[400px] w-full object-cover lg:h-[500px]"
                  aria-label="Troyan İnşaat tanıtım videosu"
                >
                  <source src={HERO_VIDEO_URL} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-charcoal/10 to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 border-2 border-bronze/30" />
              <div className="absolute -right-6 -top-6 -z-10 h-24 w-24 bg-bronze/10" />
            </div>
          </div>
        </div>

        <div
          className={`relative mt-28 -mx-6 overflow-hidden bg-charcoal py-16 transition-all delay-300 duration-1000 lg:mt-36 lg:-mx-12 lg:min-h-[42rem] lg:py-20 xl:-mx-20 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
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
          <div className="absolute left-0 top-0 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10" />
          <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-bronze/10" />

          <div className="relative z-10 px-6 lg:flex lg:min-h-[42rem] lg:items-center lg:px-12 xl:px-20">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="overflow-hidden rounded-[1.5rem] border border-white/8 bg-white shadow-[0_24px_56px_rgba(0,0,0,0.28)]"
                >
                  <div className="aspect-square">
                    <div className="relative h-1/2 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-charcoal/5 to-transparent" />
                    </div>
                    <div className="flex h-1/2 items-center justify-center px-4 py-5 text-center lg:px-5">
                      <span className="text-base font-medium leading-snug text-charcoal lg:text-lg">
                        {feature.title}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
