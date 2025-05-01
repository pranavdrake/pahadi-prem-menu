
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 text-center relative">
      <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <Heart className="text-green-500 h-8 w-8 mx-auto mb-4" />
          
          <h2 className="text-2xl md:text-3xl mb-4 font-handwriting text-pine-dark">
            Love was always on the menu
          </h2>
          
          <p className="text-lg font-sans text-pine-dark/90">
            Aaj finally order de diya. 💚
          </p>
          
          <div className="mt-8 pt-6 border-t border-dashed border-gray-200 text-sm text-gray-500">
            <p>If this menu touched your heart,
            come back soon and we'll never be apart.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
