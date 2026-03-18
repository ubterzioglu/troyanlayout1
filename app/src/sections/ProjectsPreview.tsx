import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

interface ProjectsPreviewProps {
  onNavigate?: (section: string) => void;
}

const projects = [
  {
    id: 1,
    title: 'Kaya Kent Sitesi',
    category: 'Konut Projesi',
    location: 'Karacaören, Çanakkale',
    year: '2024',
    image: '/projects/kaya-kent-1.jpg',
    description: '100 daire ve ticari alanlardan oluşan, toplam 16.000 m² inşaat alanına sahip modern konut projesi.',
  },
  {
    id: 2,
    title: 'Keskin City Sitesi',
    category: 'Konut Projesi',
    location: 'Çanakkale',
    year: '2023',
    image: '/projects/keskin-city-1.jpg',
    description: 'Çanakkale\'de konforlu yaşam alanları sunan, modern mimariye sahip konut sitesi projesi.',
  },
  {
    id: 3,
    title: 'ON4 Villas',
    category: 'Villa Projesi',
    location: 'Tepeören, Tuzla - İstanbul',
    year: '2023',
    image: '/projects/on4-villas-1.jpg',
    description: '14 villalık özel site projesi. Toplam 8.400 m² inşaat alanı ile lüks villa yaşamı.',
  },
];

const ProjectsPreview = ({ onNavigate }: ProjectsPreviewProps) => {
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

  const handleNavClick = () => {
    if (onNavigate) {
      onNavigate('projects');
    }
  };

  return (
    <section ref={sectionRef} id="projects-preview" className="py-24 lg:py-32 bg-cream">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <span className="text-bronze text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
              Projelerimiz
            </span>
            <h2 className="section-title-left font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-charcoal">
              Son Tamamlanan
              <span className="block text-bronze mt-2">Projelerimiz</span>
            </h2>
          </div>
          <button
            onClick={handleNavClick}
            className="btn-outline-dark mt-8 lg:mt-0 group self-start"
          >
            Tüm Projeler
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-bronze text-white text-xs font-semibold uppercase tracking-wider px-4 py-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div
                  className={`absolute -z-10 w-full h-full bg-bronze/10 ${
                    index % 2 === 1
                      ? '-top-4 -right-4'
                      : '-bottom-4 -left-4'
                  }`}
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4 text-concrete text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-bronze" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-bronze" />
                    {project.year}
                  </span>
                </div>
                
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4 hover:text-bronze transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h3>
                
                <p className="text-concrete text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <button
                  onClick={handleNavClick}
                  className="inline-flex items-center text-bronze font-semibold text-sm uppercase tracking-wider group/btn"
                >
                  Detayları Gör
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
