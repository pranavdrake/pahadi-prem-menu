
import { useState, useEffect } from 'react';
import { Heart, TreePine, CloudMoon } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-light/90 to-white/90 -z-10"></div>
      
      <div className="absolute top-10 left-10 animate-sway opacity-60">
        <TreePine size={40} className="text-pine-dark" />
      </div>
      
      <div className="absolute top-20 right-10 animate-float opacity-70">
        <CloudMoon size={30} className="text-pine-dark" />
      </div>
      
      {/* Prayer flags */}
      <div className="absolute top-0 left-0 right-0 flex justify-center w-full">
        <div className="flex space-x-2">
          {['bg-red-400', 'bg-blue-400', 'bg-yellow-300', 'bg-green-400', 'bg-white'].map((color, index) => (
            <div 
              key={index}
              className={`${color} h-16 w-12 animate-flutter`} 
              style={{ 
                animationDelay: `${index * 0.2}s`,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div 
        className={`max-w-3xl transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <h1 className="text-5xl md:text-7xl mb-4 text-pine-dark drop-shadow-sm">
          Sharma Bhojnalya
        </h1>
        
        <div className="flex items-center justify-center mb-6 space-x-2">
          <Heart className="text-green-500 animate-pulse" size={24} />
          <p className="text-xl md:text-2xl text-pine-dark font-handwriting">
            jahan khana bhi prem se pakta hai
          </p>
          <Heart className="text-green-500 animate-pulse" size={24} />
        </div>
        
        <p className="text-lg md:text-xl text-pine-dark/90 mb-8 font-sans font-light">
          Aaj raat sirf hum dono ke liye – Sharma Bhojnalya mein prem paros rahe hain.
        </p>
        
        <div className="inline-block animate-float">
          <button 
            onClick={() => window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            })}
            className="bg-pine-dark text-white font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center"
          >
            <span>Explore Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
