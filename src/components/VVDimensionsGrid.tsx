import iconCity from "@/assets/icons/city_and_services.svg";
import iconHealth from "@/assets/icons/health.svg";
import iconEducation from "@/assets/icons/education.svg";
import iconCulture from "@/assets/icons/culture.svg";
import iconSport from "@/assets/icons/sport.svg";
import iconFood from "@/assets/icons/food_dining.svg";
import iconShopping from "@/assets/icons/shopping_services.svg";

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

const DimensionCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="flex items-start gap-5">
    <div
      className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full liquid-glass-circle flex items-center justify-center"
    >
      <img src={icon} alt={title} className="w-8 h-8 md:w-10 md:h-10 opacity-60" />
    </div>
    <div className="pt-1">
      <h3 className="heading-h4 text-foreground/70 mb-1">{title}</h3>
      <p className="text-sm md:text-base text-foreground/60 leading-relaxed max-w-[250px]">{description}</p>
    </div>
  </div>
);

const VVDimensionsGrid = () => {
  const topRow = dimensions.slice(0, 4);
  const bottomRow = dimensions.slice(4);

  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="w-full">
        <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase mb-4">
          Modular Architecture
        </p>
        <h2 className="heading-h2 text-foreground/80 max-w-4xl mb-20 text-center mx-auto">
          Virtual Village is built on a modular architecture designed to harmonize every aspect of modern daily life.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-16">
          {topRow.map((dim) => (
            <DimensionCard key={dim.title} {...dim} />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 md:max-w-[75%] md:mx-auto">
          {bottomRow.map((dim) => (
            <DimensionCard key={dim.title} {...dim} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VVDimensionsGrid;
