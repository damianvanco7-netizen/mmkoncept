import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-10 md:py-14 section-padding">
      <div className="w-full flex flex-col items-center md:items-start">
        <h2 className="heading-h2 text-foreground/80 mb-2 text-center md:text-left">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            One Intuitive Space
          </ShinyText>
        </h2>
        <h2 className="heading-h2 text-foreground/80 mb-12 text-center md:text-left">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            7 Life Dimensions
          </ShinyText>
        </h2>

        {/* Two-column: image + dimensions accordion */}
        <div className="w-full flex flex-col md:flex-row items-start gap-12 md:gap-32">
          {/* Left — image */}
          <div className="shrink-0 md:-ml-4 flex justify-center md:justify-start">
            <img
              src={vvKruh}
              alt="Virtual Village ecosystem — 7 Life Dimensions"
              className="w-full max-w-[525px]"
            />
          </div>

          {/* Right — 7 dimensions accordion */}
          <div className="flex flex-col w-full md:max-w-[520px] md:ml-auto justify-between" style={{ minHeight: 630 }}>
            {dimensions.map((dim, i) => (
              <div key={dim.title} className="flex-1 flex flex-col justify-center">
                {i > 0 && (
                  <hr className="border-t border-foreground/10 my-2" />
                )}
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center gap-4 w-full py-2 text-left cursor-pointer group"
                >
                  <img src={dim.icon} alt={dim.title} className="w-7 h-7 opacity-50 shrink-0" />
                  <h4 className="text-base md:text-lg font-bold leading-tight flex-1">
                    <ShinyText
                      speed={4}
                      color="hsl(var(--foreground) / 0.5)"
                      shineColor="hsl(var(--foreground))"
                      spread={120}
                    >
                      {i + 1}. {dim.title}
                    </ShinyText>
                  </h4>
                  <ChevronDown
                    size={18}
                    className={`text-foreground/30 shrink-0 transition-transform duration-300 group-hover:text-foreground/50 ${
                      openIndex === i ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? "80px" : "0px",
                    opacity: openIndex === i ? 1 : 0,
                  }}
                >
                  <p className="text-sm md:text-sm text-foreground/50 leading-relaxed pl-11 pb-2">
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
