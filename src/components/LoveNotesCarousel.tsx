
import { useState, useEffect } from 'react';
import { Heart, TreePine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

// Photo paths - these need to be uploaded by the user to the public folder
const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
];

const LoveNotesCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector('.photos-carousel');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="py-20 px-4 relative photos-carousel overflow-hidden">
      <div className="absolute inset-0 bg-pine-gradient -z-10 opacity-70"></div>
      
      {/* Pine Trees Decoration */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="relative">
            <TreePine 
              size={40 + (index * 15)} 
              className="text-pine-dark opacity-70 animate-sway" 
              style={{ animationDelay: `${index * 0.3}s` }}
            />
          </div>
        ))}
      </div>
      
      {/* Prayer flags decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full">
        <div className="flex space-x-2">
          {['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'].map((color, index) => (
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
          <h2 className="text-3xl md:text-4xl mb-8 text-center font-handwriting">
            Pahadi Prem Patr
          </h2>
          
          <div className="relative mx-auto max-w-3xl">
            <Carousel 
              opts={{
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div className="overflow-hidden rounded-lg border-2 border-accent bg-pine-dark p-2 shadow-lg transition-all hover:scale-105">
                        <div className="aspect-square overflow-hidden">
                          <img 
                            src={photo} 
                            alt={`Memory ${index + 1}`} 
                            className="h-full w-full object-cover" 
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 bg-primary w-12 h-12 -rotate-12 flex items-center justify-center rounded-full">
                          <span className="text-xs font-medium text-primary-foreground rotate-12">💚</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-primary text-primary-foreground hover:bg-accent" />
              <CarouselNext className="absolute right-0 bg-primary text-primary-foreground hover:bg-accent" />
            </Carousel>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            <TreePine size={24} className="text-pine-light opacity-80" />
            <Heart className="text-primary h-6 w-6 mx-2" />
            <TreePine size={24} className="text-pine-light opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesCarousel;
