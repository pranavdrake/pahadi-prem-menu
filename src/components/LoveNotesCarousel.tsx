
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const notes = [
  "Tumhare saath har pal ek yaadgar safar hai",
  "Tum mere favourite adventure ho",
  "Tumhari aankhon mein puri duniya dekh sakta hoon",
  "Pahaadon ki tarah, mera pyaar bhi atal hai",
  "Chahe kitni bhi door jaaun, tumhare paas hi lautna hai",
];

const LoveNotesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const element = document.querySelector('.notes-carousel');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % notes.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative notes-carousel overflow-hidden">
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
            Pahadi Prem Patr
          </h2>
          
          <div className="overflow-hidden relative h-[300px] md:h-64 flex items-center justify-center">
            {notes.map((note, index) => (
              <div
                key={index}
                className={cn(
                  "absolute w-full max-w-md transition-all duration-500 ease-out transform bg-white p-6 rounded-lg shadow-lg border-2 border-pine-light",
                  index === activeIndex 
                    ? "opacity-100 scale-100 rotate-0 z-20" 
                    : index === (activeIndex + 1) % notes.length 
                    ? "opacity-40 scale-90 rotate-3 translate-x-20 z-10"
                    : index === (activeIndex - 1 + notes.length) % notes.length 
                    ? "opacity-40 scale-90 rotate-[-3deg] -translate-x-20 z-10"
                    : "opacity-0 scale-80 z-0"
                )}
                style={{
                  transitionDelay: index === activeIndex ? '0ms' : '0ms'
                }}
              >
                <div className="text-center">
                  <Heart className="text-green-500 h-6 w-6 mx-auto mb-4" />
                  <p className="text-lg font-handwriting">"{note}"</p>
                </div>
                <div className="absolute -bottom-3 -right-3 bg-yellow-100 w-12 h-12 -rotate-12 flex items-center justify-center">
                  <span className="text-xs font-medium text-pine-dark rotate-12">❤️</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {notes.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-pine-dark scale-110" : "bg-pine-dark/30"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to note ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesCarousel;
