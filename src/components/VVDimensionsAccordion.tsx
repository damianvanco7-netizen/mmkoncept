import iconCity from "@/assets/icons/city_and_services.svg";
import iconHealth from "@/assets/icons/health.svg";
import iconEducation from "@/assets/icons/education.svg";
import iconCulture from "@/assets/icons/culture.svg";
import iconSport from "@/assets/icons/sport.svg";
import iconFood from "@/assets/icons/food_dining.svg";
import iconShopping from "@/assets/icons/shopping_services.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const VVDimensionsAccordion = () => {
  return (
    <section className="py-20 md:py-28 section-padding">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left — label + title */}
        <div className="flex flex-col items-start">
          <p className="text-xs font-semibold tracking-widest text-foreground/60 uppercase mb-4">
            Modular Architecture
          </p>
          <h3 className="heading-h3 text-foreground/80">
            Virtual Village is built on a modular architecture designed to harmonize every aspect of modern daily life.
          </h3>
        </div>

        {/* Right — accordion list */}
        <div>
          <Accordion type="single" collapsible className="w-full">
            {dimensions.map((dim) => (
              <AccordionItem
                key={dim.title}
                value={dim.title}
                className="border-b border-foreground/10"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={dim.icon}
                      alt={dim.title}
                      className="w-8 h-8 opacity-60"
                    />
                    <span className="text-foreground/80 text-base font-semibold">
                      {dim.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/60 text-sm leading-relaxed pl-12">
                    {dim.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VVDimensionsAccordion;
