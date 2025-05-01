
import { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const PhotoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Photos will need to be uploaded by the user
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector('.photo-carousel');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="py-20 px-4 relative photo-carousel overflow-hidden">
      <div className="absolute inset-0 bg-pine-gradient -z-10 opacity-50"></div>
      
      {/* Prayer flags decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full">
        <div className="flex space-x-2">
          {['bg-red-400', 'bg-yellow-300', 'bg-green-400', 'bg-blue-400', 'bg-white'].map((color, index) => (
            <div 
              key={index}
              className={`${color} h-16 w-12 animate-flutter`} 
              style={{ 
                animationDelay: `${index * 0.3}s`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className={cn(
          "transition-all duration-1000 ease-out transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-handwriting text-pine-dark">
            Mountain Memories
          </h2>
          
          <div className="relative">
            <Carousel opts={{ loop: true }} className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={index} className="px-1">
                    <div className="bg-white p-3 rounded-lg shadow-lg border-2 border-pine-light">
                      <div className="overflow-hidden rounded-md h-64 md:h-80">
                        <img 
                          src={photo} 
                          alt={`Mountain memory ${index + 1}`} 
                          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 bg-yellow-100 w-12 h-12 -rotate-12 flex items-center justify-center rounded">
                        <span className="text-xs font-medium text-pine-dark rotate-12">❤️</span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 md:-left-12 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-1 md:-right-12 bg-white/80 hover:bg-white" />
            </Carousel>

            <div className="mt-8 text-center">
              <p className="text-pine-dark/70 italic">Scroll through our memories while waiting for your order ❤️</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
