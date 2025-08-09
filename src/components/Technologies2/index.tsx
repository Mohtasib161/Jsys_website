import React, { useEffect } from 'react';
import { 
  SiJavascript, 
  SiReact, 
  SiAngular, 
  SiFlutter, 
  SiNodedotjs,
} from "react-icons/si";
import AOS from "aos"
import "aos/dist/aos.css"
import { FaLaravel } from "react-icons/fa6";
import { BsMicrosoft } from "react-icons/bs";
import { useTranslation } from "react-i18next"

function TechnologiesSection() {
  const { t } = useTranslation();
   useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          offset: 200,
        })
    
        AOS.refresh()
      }, [])
  const technologies = [
    {
      name: "technologiesSection.technologies.0.name",
      icon: BsMicrosoft,
      iconColor: "text-blue-600" // Microsoft blue
    },
    {
      name: "technologiesSection.technologies.0.name2", 
      icon: SiReact,
      iconColor: "text-cyan-500" // React cyan
    },
    {
       name: "technologiesSection.technologies.0.name3", 
      icon: SiNodedotjs,
      iconColor: "text-green-600" // Node.js green
    },
    {
       name: "technologiesSection.technologies.0.name4", 
      icon: FaLaravel,
      iconColor: "text-red-500" // Laravel red
    },
    {
       name: "technologiesSection.technologies.0.name5", 
      icon: SiJavascript,
      iconColor: "text-yellow-500" // JavaScript yellow
    },
    {
      name: "technologiesSection.technologies.0.name6", 
      icon: SiFlutter,
      iconColor: "text-blue-400" // Flutter blue
    },
    {
       name: "technologiesSection.technologies.0.name7", 
      icon: SiAngular,
      iconColor: "text-red-600" // Angular red
    }
  ];

  return (
    <section className="w-full bg-slate-900 py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto"> {/* Changed to max-w-6xl */}
        {/* Header */}
        <div className="mb-12 lg:mb-16" data-aos="fade-up">
          <p className="text-[#f8b715] text-sm font-medium tracking-wider uppercase mb-4">
           {t("technologiesSection.subtitle")}
          </p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {t("technologiesSection.title")} <br /> {t("technologiesSection.title2")}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl">
           {t("technologiesSection.description")}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-4 lg:space-y-6">
          {/* Top Row - 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6" data-aos="fade-up">
            {technologies.slice(0, 4).map((tech, index) => {
              const IconComponent = tech.icon; // Get the React component
              return (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-orange-400/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded flex items-center justify-center bg-white"> {/* White background for icon container */}
                      <IconComponent className={`w-6 h-6 ${tech.iconColor}`} /> {/* Render icon with color */}
                    </div>
                    <span className="text-white text-sm font-medium">
                      {t(tech.name)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Second Row - 3 items centered */}
          <div className="flex justify-start" > {/* Flex container to center the grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full max-w-3xl" data-aos="fade-up"  >
              {technologies.slice(4, 7).map((tech, index) => {
                const IconComponent = tech.icon; // Get the React component
                return (
                  <div 
                    key={index + 4}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-orange-400/50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded flex items-center justify-center bg-white"> {/* White background for icon container */}
                        <IconComponent className={`w-6 h-6 ${tech.iconColor}`} /> {/* Render icon with color */}
                      </div>
                      <span className="text-white text-sm font-medium">
                        {t(tech.name)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechnologiesSection;