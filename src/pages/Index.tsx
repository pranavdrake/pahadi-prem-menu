
import { useEffect } from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import PhotoCarousel from '../components/PhotoCarousel';
import Footer from '../components/Footer';

const menuData = [
  {
    title: "Mohabbat ki Pehli Bhook – Shuruat Siddu aur Momo se",
  subtitle: "The first taste of love, wrapped in warmth and spice",
    items: [
      {
        name: "Siddu",
        description: "Steamed wheat buns stuffed with love and spice, a Himachali hug in every slice.",
        personalNote: "Like your warm hands on cold days — soft, filling, and made for me."
      },
      {
        name: "Momo",
        description: "Juicy dumplings wrapped in joy, spicy enough to make you coy.",
        personalNote: "Our midnight momo runs — now served with love and chutney!"
      }
    ]
  },
  {
    title: "Dil Se Bana Bhoj",
    subtitle: "Main courses cooked with heart and soul",
    items: [
      {
        name: "Chilli Mushroom",
        description: "A fiery stir-fry with mountain bloom, bold like your eyes in a crowded room.",
        personalNote: "Just like us — a little spicy, totally addictive."
      },
      {
        name: "Noodles",
        description: "Twisty, tangle-y and fun to slurp, like our talks that never end with a burp.",
        personalNote: "We’re like these noodles — tangled, but always together."
      }
    ]
  },
  {
    title: "Pyar ki Meethi Baatien",
    subtitle: "Desserts that melt hearts and sweeten moments",
    items: [
      {
        name: "Ras Malai",
        description: "Soft, creamy, and oh-so-indulgent, just like the way you make my heart feel.",
        personalNote: "Each bite is a taste of heaven, just like every moment with you."
      },
      {
        name: "Brownie",
        description: "Warm, rich, and fudgy — a perfect treat, just like our perfect moments together.",
        personalNote: "Like us — a little messy, but always sweet and satisfying."
      }
    ]
  },
  {
    title: "Meethi Pyaali, Bubbly Baatein",
    subtitle: "Sweet endings with a dash of sparkle",
    items: [
      {
        name: "Sangria",
        description: "Sweet, citrusy, and lightly buzzed — like your giggles after one glass.",
        personalNote: "Let’s get tipsy on this and each other 💚"
      },
      {
        name: "Mosqato",
        description: "Bubbly and bright with a fruity kiss, just like your smile I can’t miss.",
        personalNote: "Soft, sweet, and dangerously cute — like you when you pout."
      }
    ]
  },
  {
    title: "Two peas in a pod? ",
    subtitle: "Aadat-E-Ishq",
    items: [
      {
        name: "Twin Pod",
        description: "Two puffs, one heart — perfect for partners who hate being apart.",
        personalNote: "You light it, I hold it. We’ve always shared more than just smoke."
      },
      {
        name: "Mix Pod",
        description: "A little bit of everything, just like the way love finds its way — smoky, sweet, and full of surprises.",
        personalNote: "Like us on a hilltop — We might not always be perfect, but each puff from this mix pod reminds me of the beautiful mess we are."
      }
    ]
  }
];


const Index = () => {
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
    <div className="min-h-screen">
      <Hero />
      {menuData.map((section, index) => (
        <MenuSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          items={section.items}
          index={index}
        />
      ))}
      <PhotoCarousel />
      <Footer />
    </div>
  );
};

export default Index;
