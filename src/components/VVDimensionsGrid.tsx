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

const leftColumn = dimensions.slice(0, 4);
const rightColumn = dimensions.slice(4);

const DimensionItem = ({
  dim,
  index,
  column,
}: {
  dim: (typeof dimensions)[0];
  index: number;
  column: "left" | "right";
}) => {
  const number = column === "left" ? index + 1 : index + 5;
  const offsetRem = column === "left" ? index * 3 : index * 3;

  return (
    <div
      className="flex items-center gap-5"
      style={{
        marginLeft: `${offsetRem}rem`,
      }}
    >
      <div
        className="rounded-full flex items-center justify-center shrink-0 liquid-glass-circle-light"
        style={{ width: 100, height: 100 }}
      >
        <img src={dim.icon} alt={dim.title} className="w-10 h-10 opacity-60" />
      </div>
      <div>
        <h4 className="text-base md:text-lg font-bold leading-tight">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.5)"
            shineColor="hsl(var(--foreground))"
            spread={120}
          >
            {number}. {dim.title}
          </ShinyText>
        </h4>
        <p className="text-xs md:text-sm text-foreground/50 leading-relaxed max-w-[280px] mt-1">
          {dim.description}
        </p>
      </div>
    </div>
  );
};

const VVDimensionsGrid = () => {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="w-full flex flex-col items-start">
        <h2 className="heading-h2 text-foreground/80 mb-12">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            One Intuitive Space.
          </ShinyText>
        </h2>

        <div className="w-full flex justify-center mb-20">
          <img
            src={vvKruh}
            alt="Virtual Village ecosystem — 7 Life Dimensions"
            className="w-full max-w-[650px]"
          />
        </div>

        <h2 className="heading-h2 text-foreground/80 mb-16">
          <ShinyText
            speed={4}
            color="hsl(var(--foreground) / 0.35)"
            shineColor="hsl(var(--foreground))"
            spread={140}
          >
            7 Life Dimensions.
          </ShinyText>
        </h2>

        {/* Staggered two-column layout matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0 w-full">
          {/* Left column — items 1-4, staggered right */}
          <div className="flex flex-col gap-10">
            {leftColumn.map((dim, i) => (
              <DimensionItem key={dim.title} dim={dim} index={i} column="left" />
            ))}
          </div>
          {/* Right column — items 5-7, staggered left, icon on left */}
          <div className="flex flex-col gap-10 mt-8 md:mt-20">
            {rightColumn.map((dim, i) => (
              <DimensionItem key={dim.title} dim={dim} index={i} column="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VVDimensionsGrid;
