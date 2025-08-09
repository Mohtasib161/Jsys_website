import { AiFillThunderbolt } from "react-icons/ai";

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useTranslation } from "react-i18next"



function WhyChooseUs() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 200,
    });

    AOS.refresh();
  }, []);



  const features = [
    {
      title: "whyChooseUs.item1.title",
      description: "whyChooseUs.item1.description",
      icons: "AiFillThunderbolt",
     
    },
    {
      title: "whyChooseUs.item2.title",
      description: "whyChooseUs.item2.description",
      icons: "AiFillThunderbolt",
      
    },
    {
      title: "whyChooseUs.item3.title",
      description: "whyChooseUs.item3.description",
      icons: "AiFillThunderbolt",
     
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#0A1128] to-[#0b2448] py-16 lg:py-24 px-4"> {/* Updated background gradient */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Image and Badge */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-right">
            <img 
              src="/assets/images/WhyChooseUs.jpg" 
              alt="Why Choose Us blocks" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none h-auto object-contain rounded-lg"
            />
            <div className="absolute top-6 right-0 bg-white rounded-full px-4 py-4 shadow-lg flex items-center gap-2">
              <span className="text-blue-600 font-bold text-lg">{t("whyChooseUs.rightsection.text2")}</span>
              <span className="text-gray-600 text-sm">{t("whyChooseUs.rightsection.text")}</span>
              <div className="flex text-yellow-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
          </div>

          {/* Right Content - Text and Features */}
          <div className="space-y-8">
            <div >
              <p className="text-[#f8b715] text-sm font-medium tracking-wider uppercase mb-4">
               {t("whyChooseUs.subtitle")}
              </p>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                {t("whyChooseUs.title")}
              </h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-6" data-aos="fade-left">
                  <div className="flex-shrink-0 w-16 h-16 bg-yellow-400 rounded flex items-center justify-center">
                    {feature.icons === "AiFillThunderbolt" ? (
                      <AiFillThunderbolt className="w-4 h-4 text-black" />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {t(feature.title)}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t(feature.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;