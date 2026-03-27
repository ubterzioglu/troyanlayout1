import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export interface ProjectMediaItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
}

interface ProjectMediaCarouselProps {
  media: ProjectMediaItem[];
  title: string;
  heightClassName?: string;
}

const AUTOPLAY_DELAY_MS = 10000;

const ProjectMediaCarousel = ({
  media,
  title,
  heightClassName = 'h-[300px] lg:h-[400px]',
}: ProjectMediaCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    handleSelect();
    api.on('select', handleSelect);
    api.on('reInit', handleSelect);

    return () => {
      api.off('select', handleSelect);
      api.off('reInit', handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || media.length <= 1) return;

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [api, media.length]);

  return (
    <div className="group relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: media.length > 1,
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {media.map((item, index) => (
            <CarouselItem key={`${item.src}-${index}`} className="pl-0">
              <div className={`relative overflow-hidden bg-charcoal ${heightClassName}`}>
                {item.type === 'video' ? (
                  <>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={item.poster}
                      className="h-full w-full object-cover"
                      aria-label={item.alt || `${title} tanıtım videosu`}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-charcoal/82 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                      <Play className="h-3.5 w-3.5 fill-current" />
                      Video
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `${title} görseli ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-charcoal/16" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-charcoal/82 text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/65 hover:bg-charcoal"
            aria-label="Önceki medya"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/35 bg-charcoal/82 text-white shadow-[0_12px_34px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/65 hover:bg-charcoal"
            aria-label="Sonraki medya"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-charcoal/72 px-3.5 py-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            {media.map((item, index) => (
              <button
                key={`${item.src}-indicator`}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? 'w-8 bg-bronze shadow-[0_0_0_1px_rgba(255,255,255,0.15)]'
                    : 'w-2.5 bg-white/75 hover:bg-white'
                }`}
                aria-label={`${index + 1}. medyaya git`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectMediaCarousel;
