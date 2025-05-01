
import { useEffect } from 'react';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import PhotoCarousel from '../components/PhotoCarousel';
import Footer from '../components/Footer';

const menuData = [
  {
    title: "Pahadon Se Pyaar Tak – Shuruaat",
    subtitle: "Our beginning, like the first light on mountains",
    items: [
      {
        name: "Pahadi Aloo Tikki",
        description: "Crispy potato patties with mountain herbs",
        personalNote: "Remember our first picnic? You loved these!"
      },
      {
        name: "Himachali Paneer Pakode",
        description: "Soft cottage cheese fritters with mint chutney",
        personalNote: "Made with the local cheese you always talk about"
      },
      {
        name: "Buransh Sharbat",
        description: "Sweet rhododendron flower drink",
        personalNote: "Like the flowers we saw on our first hike together"
      },
      {
        name: "Madra Chaat",
        description: "Chickpeas in yogurt with pahadi spices",
        personalNote: "As warming as your smile on cold evenings"
      }
    ]
  },
  {
    title: "Dil Se Bana Bhoj",
    subtitle: "Main courses cooked with heart and soul",
    items: [
      {
        name: "Siddu with Ghee",
        description: "Steamed wheat buns filled with walnuts and spices",
        personalNote: "Reminds me of when we got caught in the rain"
      },
      {
        name: "Chana Madra",
        description: "Chickpeas cooked in yogurt gravy with local spices",
        personalNote: "You said this was comfort food after our long hikes"
      },
      {
        name: "Patrode with Pahadi Twist",
        description: "Colocasia leaves with mountain herbs",
        personalNote: "As complex and beautiful as our journey"
      },
      {
        name: "Lingri Saag",
        description: "Wild forest fern with cumin and garlic",
        personalNote: "Remember when we foraged for these together?"
      }
    ]
  },
  {
    title: "Meethi Baatien",
    subtitle: "Sweet endings to savory beginnings",
    items: [
      {
        name: "Aktori",
        description: "Buckwheat pancake with wild honey",
        personalNote: "Sweet like the words we whisper to each other"
      },
      {
        name: "Mittha Bhat",
        description: "Sweet rice with dry fruits and saffron",
        personalNote: "Golden like our sunsets at the mountain peak"
      },
      {
        name: "Babroo",
        description: "Fermented sweet bread with jaggery",
        personalNote: "Warm like your hand in mine on cold nights"
      },
      {
        name: "Khajoor Pinni",
        description: "Date and walnut energy balls",
        personalNote: "For all our future adventures together"
      }
    ]
  },
  {
    title: "Garam Jazbaat",
    subtitle: "Hot drinks to warm the soul",
    items: [
      {
        name: "Kehwa Chai",
        description: "Saffron tea with almonds and cardamom",
        personalNote: "To celebrate all our nights under the stars"
      },
      {
        name: "Badam Doodh",
        description: "Warm almond milk with cinnamon",
        personalNote: "Comfort in a cup, just like your presence"
      },
      {
        name: "Buransh ka Kaadha",
        description: "Rhododendron bark herbal tea",
        personalNote: "Healing like your love has been for me"
      },
      {
        name: "Adrak Chai",
        description: "Spiced ginger tea with mountain herbs",
        personalNote: "Strong and warming, like our connection"
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
