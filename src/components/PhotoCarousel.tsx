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
  
  // Photos in order
  const photos = [
    { path: "/1.JPG", showHeart: true },
    { path: "/2.jpg", showHeart: false },
    { path: "/3.jpg", showHeart: true },
    { path: "/4.PNG", showHeart: false },
    { path: "/5.jpg", showHeart: true },
    { path: "/6.JPG", showHeart: false },
    { path: "/7.JPG", showHeart: true },
    { path: "/8.jpg", showHeart: false },
    { path: "/9.jpg", showHeart: true },
    { path: "/10.jpg", showHeart: false },
    { path: "/11.jpg", showHeart: true },
    { path: "/12.JPG", showHeart: false },
    { path: "/13.PNG", showHeart: true },
    { path: "/14.jpg", showHeart: false },
    { path: "/15.jpg", showHeart: true },
    { path: "/16.JPG", showHeart: false },
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
      
      <div className="max-w-6xl mx-auto">
        <div className={cn(
          "transition-all duration-1000 ease-out transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-handwriting text-pine-dark">
            Mountain Memories
          </h2>
          
          <div className="relative pb-12">
            <Carousel 
              opts={{ 
                loop: true,
                startIndex: 0
              }} 
              className="w-full mx-auto"
            >
              <CarouselContent className="px-2">
                {photos.map((photo, index) => (
                  <CarouselItem key={index} className="px-1 sm:px-2 md:px-3 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg border-2 border-pine-light h-full relative group">
                      <div className="overflow-hidden rounded-md h-80 sm:h-96 md:h-112">
                        <img 
                          src={photo.path} 
                          alt={`Mountain memory ${index + 1}`} 
                          className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                        />
                      </div>
                      {photo.showHeart && (
                        <div className="absolute -bottom-3 -right-3 bg-green-100 w-10 h-10 sm:w-12 sm:h-12 -rotate-12 flex items-center justify-center rounded transition-transform duration-300 group-hover:rotate-0">
                          <span className="text-xs font-medium text-pine-dark rotate-12 group-hover:rotate-0">💚</span>
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 md:left-2 lg:-left-12 bg-white/90 hover:bg-white shadow-lg border border-gray-200 w-10 h-10 md:w-12 md:h-12 z-10" />
              <CarouselNext className="right-0 md:right-2 lg:-right-12 bg-white/90 hover:bg-white shadow-lg border border-gray-200 w-10 h-10 md:w-12 md:h-12 z-10" />
            </Carousel>

          <div className="mt-8 text-center">
              <p className="text-pine-dark/70 italic">Scroll through our memories while waiting for your order ❤️</p>
              
              {/* Mobile/tablet dots navigation */}
              <div className="flex justify-center items-center mt-4 md:mt-6 space-x-1">
                {[...Array(Math.min(5, photos.length))].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-pine-light/60 mx-1"></div>
                ))}
                <div className="w-3 h-3 rounded-full bg-pine-dark mx-1"></div>
                {[...Array(Math.min(5, photos.length))].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-pine-light/60 mx-1"></div>
                ))}
              </div>
              
              {/* Swipe indicator for mobile/tablet */}
              <div className="mt-3 flex justify-center items-center text-pine-dark/60">
                <span className="text-xs">← Swipe →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;