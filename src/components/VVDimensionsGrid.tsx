import iconCity from "@/assets/icons/city_and_services.svg";
import iconHealth from "@/assets/icons/health.svg";
import iconEducation from "@/assets/icons/education.svg";
import iconCulture from "@/assets/icons/culture.svg";
import iconSport from "@/assets/icons/sport.svg";
import iconFood from "@/assets/icons/food_dining.svg";
import iconShopping from "@/assets/icons/shopping_services.svg";
import { LiquidGlass } from "@specy/liquid-glass-react";

const dimensions = [
  {
    icon: iconEducation,
    title: "Education",
    description: "A space for lifelong learning — from local schools to personal growth.",
  },
  {
    icon: iconFood,
    title: "Food",
    description: "Explore local flavors, sustainable options, and places to enjoy together.",
  },
  {
    icon: iconSport,
    title: "Sport",
    description: "Stay active with local activities, training, and sports communities.",
  },
  {
    icon: iconShopping,
    title: "Shopping",
    description: "Smart, local commerce — convenient, relevant, and community-driven.",
  },
  {
    icon: iconCulture,
    title: "Culture",
    description: "Discover events, arts, and the unique rhythm of your community.",
  },
  {
    icon: iconCity,
    title: "City",
    description: "Your connection to local services, governance, and what's happening around you.",
  },
  {
    icon: iconHealth,
    title: "Health",
    description: "Personalized access to wellness, care, and trusted medical resources.",
  },
];

const DimensionCircle = ({ dim }: { dim: typeof dimensions[number] }) => (
  <div style={{ width: 250, height: 250 }}>
    <LiquidGlass
      glassStyle={{
        depth: 0.8,
        segments: 64,
        radius: 0.5,
        transmission: 0.95,
        roughness: 0.05,
      }}
      style={`
        width: 250px;
        height: 250px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 32px 28px;
      `}
    >
      <img src={dim.icon} alt={dim.title} className="w-10 h-10 md:w-12 md:h-12 opacity-60 mb-3" />
      <span className="text-foreground/80 text-sm md:text-base font-semibold mb-1 leading-tight">
        {dim.title}
      </span>
      <span className="text-foreground/50 text-xs leading-relaxed max-w-[85%]">
        {dim.description}
      </span>
    </LiquidGlass>
  </div>
);

const VVDimensionsGrid = () => {
  const topRow = dimensions.slice(0, 4);
  const bottomRow = dimensions.slice(4);

  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="w-full flex flex-col items-center">
        <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase mb-4">
          Modular Architecture
        </p>
        <h2 className="heading-h2 text-foreground/80 mb-20 text-center mx-auto" style={{ maxWidth: '60rem' }}>
          Virtual Village is built on a modular architecture designed to harmonize every aspect of modern daily life.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8">
          {topRow.map((dim) => (
            <DimensionCircle key={dim.title} dim={dim} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {bottomRow.map((dim) => (
            <DimensionCircle key={dim.title} dim={dim} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VVDimensionsGrid;
