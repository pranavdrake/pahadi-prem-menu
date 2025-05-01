
import { Heart, TreePine } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative">
      <div className="absolute bottom-0 left-0 w-full flex justify-between pointer-events-none">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="relative">
            <TreePine 
              size={30 + (index * 10)} 
              className="text-pine-dark/70 opacity-70 animate-sway" 
              style={{ animationDelay: `${index * 0.3}s` }}
            />
          </div>
        ))}
      </div>
      
      <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-accent/30">
          <Heart className="text-accent h-8 w-8 mx-auto mb-4" />
          
          <h2 className="text-2xl md:text-3xl mb-4 font-handwriting text-pine-dark">
            Love was always on the menu
          </h2>
          
          <p className="text-lg font-sans text-pine-dark">
            Aaj finally order de diya. 💚
          </p>
          
          <div className="mt-8 pt-6 border-t border-dashed border-accent/30 text-sm text-pine-dark/70">
            <div className="flex justify-center items-center">
              <TreePine size={18} className="mr-2" />
              <p>Made with love in the mountains</p>
              <TreePine size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
