import React, { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"
function WhoWeAre() {
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
  const services = [
    {
      number: "whatWeDo.item1.number",
      title: "whatWeDo.item1.title",
      description: "whatWeDo.item1.description"
    },
    {
      number: "whatWeDo.item2.number", 
      title: "whatWeDo.item2.title",
      description: "whatWeDo.item2.description"
    },
    {
      number: "whatWeDo.item3.number",
      title: "whatWeDo.item3.title", 
      description: "whatWeDo.item3.description"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-t from-[#0A1128] to-[#0b2448] py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8" >
            <div data-aos="fade-up">
              <p className="text-[#f8b715] text-sm font-medium tracking-wider uppercase mb-4">
                {t("whatWeDo.title")}
              </p>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl tracking-normal font-semibold leading-tight">
               {t("mission.title")}
                <span className="block pt-2">{t("mission.title1")}</span>
              </h2>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4" data-aos="fade-up">
                  <div className="flex-shrink-0">
                    <span className="text-[#f8b715] text-xl font-bold">
                      {t(service.number)}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[#f8b715] text-lg font-semibold">
                      {t(service.title)}
                    </h3>
                    <p className=" lg:w-2/3 text-gray-300 text-sm leading-relaxed">
                      {t(service.description)}
                    </p>
                    <div className="h-[2px] w-full bg-gray-700 rounded-full mt-2"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4" >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center gap-2">
                {t("hero.button")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-4">
            <div className="relative" data-aos="fade-up">
              <img 
                src="/assets/images/aboutus1.jpg" 
                alt="AI Brain Innovation" 
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4" data-aos="fade-up">
              <img 
                src="/assets/images/Mask group.jpg" 
                alt="Data Analytics Work" 
                className="w-full h-32 sm:h-40 object-cover rounded-lg"
              />
              <img 
                src="/assets/images/Rectangle 11.jpg" 
                alt="Digital Innovation" 
                className="w-full h-32 sm:h-40 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default WhoWeAre;