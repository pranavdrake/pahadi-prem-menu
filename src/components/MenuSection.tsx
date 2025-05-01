
import { useEffect } from 'react';
import { Heart } from 'lucide-react';

interface MenuItemProps {
  name: string;
  description: string;
  personalNote: string;
}

interface MenuSectionProps {
  title: string;
  subtitle: string;
  items: MenuItemProps[];
  index: number;
}

const MenuItem = ({ name, description, personalNote }: MenuItemProps) => {
  return (
    <div className="menu-card bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-handwriting mb-2 flex items-center">
        {name}
        <Heart className="text-green-500 h-4 w-4 ml-2" />
      </h3>
      <p className="text-gray-700 mb-3 text-sm">{description}</p>
      <p className="text-pine-dark italic border-t border-dashed border-gray-200 pt-2 mt-2 text-sm font-medium">"{personalNote}"</p>
    </div>
  );
};

const MenuSection = ({ title, subtitle, items, index }: MenuSectionProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            background: index % 2 === 0 ? 'linear-gradient(135deg, #F2FCE2 0%, #FFFFFF 100%)' : 'linear-gradient(135deg, #FFFFFF 0%, #F2FCE2 100%)'
          }}
        ></div>
      </div>
      
      <div className="max-w-4xl mx-auto reveal" style={{ transitionDelay: '0.2s' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-3">{title}</h2>
          <p className="text-pine-dark/70 font-sans">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${0.2 + i * 0.1}s` }}>
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
