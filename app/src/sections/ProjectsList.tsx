import { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin, Maximize } from 'lucide-react';
import ProjectMediaCarousel from '@/components/ProjectMediaCarousel';
import { projects } from '@/data/projects';

const ProjectsList = () => {
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
    <section ref={sectionRef} className="bg-cream py-16 lg:py-24">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 items-center gap-8 transition-all duration-700 lg:grid-cols-2 lg:gap-16 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ProjectMediaCarousel media={project.media} title={project.title} />

                <div
                  className={`absolute -z-10 h-full w-full bg-bronze/10 ${
                    index % 2 === 1 ? '-top-4 -right-4' : '-bottom-4 -left-4'
                  }`}
                />
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-concrete">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-bronze" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-bronze" />
                    {project.year}
                  </span>
                </div>

                <h3 className="mb-4 font-display text-2xl font-bold text-charcoal transition-colors duration-300 hover:text-bronze lg:text-3xl">
                  {project.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-concrete">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4">
                    <div className="mb-1 flex items-center gap-2 text-bronze">
                      <Maximize className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wider">Alan</span>
                    </div>
                    <span className="font-display text-lg font-bold text-charcoal">
                      {project.area}
                    </span>
                  </div>
                  <div className="bg-white p-4">
                    <div className="mb-1 flex items-center gap-2 text-bronze">
                      <Building className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-wider">Kapasite</span>
                    </div>
                    <span className="font-display text-lg font-bold text-charcoal">
                      {project.capacity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
