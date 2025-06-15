import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define types
type FadeDirection = "up" | "right" | "left";

interface Position {
  x: number;
  y: number;
  fadeDirection: FadeDirection;
}

const initialPositions: Position[] = [
  { x: 0, y: 0, fadeDirection: "up" },
  { x: 0, y: 0, fadeDirection: "right" },
  { x: 0, y: 0, fadeDirection: "left" },
];

export default function AboutSection() {
  const { t } = useTranslation();
  const { t: t2 } = useTranslation();

  const [positions, setPositions] = useState<Position[]>(initialPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map(() => {
          const directions: FadeDirection[] = ["up", "right", "left"];
          const fadeDirection =
            directions[Math.floor(Math.random() * directions.length)];

          return {
            x: Math.random() * 100 - 40,
            y: Math.random() * 100 - 40,
            fadeDirection,
          };
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getTransform = (position: Position): string => {
    switch (position.fadeDirection) {
      case "up":
        return `translate(${position.x}%, calc(-50% + ${position.x}%))`;
      case "right":
        return `translate(calc(-50% + ${position.y}%), ${position.y}%)`;
      case "left":
        return `translate(calc(-50% + ${position.x}%), calc(-50% + ${position.y}%))`;
      default:
        return "translate(-50%, -50%)";
    }
  };

  const items = [
    {
      title: t2("whatWeDo.item1.title"),
      description: t2("whatWeDo.item1.description"),
    },
    {
      title: t2("whatWeDo.item2.title"),
      description: t2("whatWeDo.item2.description"),
    },
    {
      title: t2("whatWeDo.item3.title"),
      description: t2("whatWeDo.item3.description"),
    },
  ];

  return (
    <div
      className="h-auto flex items-center justify-center p-4 md:p-8 my-[60px]"
      id="aboutus"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 px-6">
        {/* Image Section */}
        <div className="w-1/2 relative flex justify-center lg:justify-start">
          <div className="hidden md:block relative w-full h-full max-w-xs lg:max-w-md">
            {["about.png", "about2.avif", "about3.avif"].map((src, index) => (
              <img
                key={index}
                src={`/assets/images/${src}`}
                width={index === 0 ? 400 : 300}
                height={index === 0 ? 350 : 250}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-xl absolute top-1/2 left-1/2 transition-all duration-[3000ms] ease-in-out"
                style={{
                  transform: getTransform(positions[index]),
                  opacity: 0.9,
                }}
              />
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div
          className="w-full space-y-6 text-center lg:text-left"
          data-aos="fade-left"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#1f3059] leading-tight">
            {t("mission.title")}
          </h1>
          <p className="text-base md:text-lg text-gray-600">{t("mission.description")}</p>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1f3059] leading-tight mb-8">
              {t2("whatWeDo.title")}
            </h2>
            <ul className="space-y-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start justify-center lg:justify-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-[#ff7858] mt-1 flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <span className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                      {item.title}
                    </span>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className="sm:w-auto bg-[#ff7858] text-white hover:bg-white hover:text-[#ff7858] border-2 border-[#ff7858] px-6 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
