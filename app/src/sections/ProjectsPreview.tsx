import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import ProjectMediaCarousel from '@/components/ProjectMediaCarousel';
import { projects } from '@/data/projects';

interface ProjectsPreviewProps {
  onNavigate?: (section: string) => void;
}

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
    <section ref={sectionRef} id="projects-preview" className="bg-cream py-24 lg:py-32">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="mb-16 text-center lg:mb-20">
          <h2 className="section-title mx-auto max-w-4xl font-display text-3xl font-bold text-charcoal lg:text-4xl xl:text-5xl">
            Projelerimiz
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 items-center gap-8 transition-all duration-1000 lg:grid-cols-2 lg:gap-16 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ProjectMediaCarousel media={project.media} title={project.title} />

                <div
                  className={`absolute -z-10 h-full w-full bg-bronze/10 ${
                    index % 2 === 1 ? '-right-4 -top-4' : '-bottom-4 -left-4'
                  }`}
                />
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="mb-4 flex items-center gap-4 text-sm text-concrete">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-bronze" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-bronze" />
                    {project.year}
                  </span>
                </div>

                <h3 className="mb-4 cursor-pointer font-display text-2xl font-bold text-charcoal transition-colors duration-300 hover:text-bronze lg:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-concrete">
                  {project.description}
                </p>

                <button
                  onClick={handleNavClick}
                  className="group/btn inline-flex items-center text-sm font-semibold uppercase tracking-wider text-bronze"
                >
                  Detayları Gör
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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
