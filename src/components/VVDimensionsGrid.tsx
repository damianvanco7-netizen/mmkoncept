import iconCity from "@/assets/icons/city_and_services.svg";
import iconHealth from "@/assets/icons/health.svg";
import iconEducation from "@/assets/icons/education.svg";
import iconCulture from "@/assets/icons/culture.svg";
import iconSport from "@/assets/icons/sport.svg";
import iconFood from "@/assets/icons/food_dining.svg";
import iconShopping from "@/assets/icons/shopping_services.svg";
import vvKruh from "@/assets/vv-kruh.png";
import ShinyText from "@/components/ShinyText";

const dimensions = [
  {
    icon: iconCity,
    title: "City",
    description: "Your connection to local services, governance, and what's happening around you.",
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
    icon: iconCulture,
    title: "Culture",
    description: "Discover events, arts, and the unique rhythm of your community.",
  },
  {
    icon: iconHealth,
    title: "Health",
    description: "Personalized access to wellness, care, and trusted medical resources.",
  },
  {
    icon: iconEducation,
    title: "Education",
    description: "A space for lifelong learning — from local schools to personal growth.",
  },
  {
    icon: iconShopping,
    title: "Shopping",
    description: "Smart, local commerce — convenient, relevant, and community-driven.",
  },
];

const VVDimensionsGrid = () => {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="w-full flex flex-col items-center">
        <h2 className="heading-h2 text-foreground/80 mb-2 text-center">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            One Intuitive Space
          </ShinyText>
        </h2>
        <h2 className="heading-h2 text-foreground/80 mb-12 text-center">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            7 Life Dimensions
          </ShinyText>
        </h2>

        {/* Centered two-column: image + dimensions list */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Left — image */}
          <div className="shrink-0">
            <img
              src={vvKruh}
              alt="Virtual Village ecosystem — 7 Life Dimensions"
              className="w-full max-w-[420px]"
            />
          </div>

          {/* Right — 7 dimensions list */}
          <div className="flex flex-col gap-6">
            {dimensions.map((dim, i) => (
              <div key={dim.title} className="flex items-start gap-4">
                <img src={dim.icon} alt={dim.title} className="w-8 h-8 opacity-50 mt-1 shrink-0" />
                <div>
                  <h4 className="text-base md:text-lg font-bold leading-tight">
                    <ShinyText
                      speed={4}
                      color="hsl(var(--foreground) / 0.5)"
                      shineColor="hsl(var(--foreground))"
                      spread={120}
                    >
                      {i + 1}. {dim.title}
                    </ShinyText>
                  </h4>
                  <p className="text-xs md:text-sm text-foreground/50 leading-relaxed max-w-[280px] mt-1">
                    {dim.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VVDimensionsGrid;
