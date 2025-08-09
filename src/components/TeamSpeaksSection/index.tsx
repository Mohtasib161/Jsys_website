import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"

function TeamSpeaksSection() {
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


  return (
    <section className="w-full bg-gradient-to-br from-[#0A1128] to-[#0D1833] py-16 lg:py-24 px-4" id="teamSpeaksSection">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          {/* Left Content - Image and Dotted Pattern */}
          <div className="relative flex justify-center lg:justify-end" data-aos="fade-right">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none aspect-[4/5] overflow-hidden rounded-lg bg-[#f8b716]">
              {/* Yellow background with subtle pattern */}
              <img 
                src="assets/images/logo white png.png" 
                alt="JSYS pattern background" 
                className="absolute   inset-0 w-auto h-auto opacity-15 "
              />
              {/* Main image of Zahid Chaudhry */}
              <img 
                src="assets/images/image 42.png" 
                alt="Zahid Chaudhry CEO JSYS Technologies" 
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </div>
            {/* Dotted pattern */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px] opacity-100 z-0 transform translate-x-[-50%] translate-y-[50%] lg:translate-x-[-20%] lg:translate-y-[20%]"></div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <p className="text-[#f8b716] text-sm font-medium tracking-wider uppercase mb-4">
                {t("message_from_ceo.title")}
              </p>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
               {t("message_from_ceo.subtitle")}
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 text-sm leading-relaxed md:text-base">
              <p>
                {t("message_from_ceo.content.part1")}
              </p>
              <p>
                {t("message_from_ceo.content.part2")}
              </p>
              <p>
                {t("message_from_ceo.content.part3")}
              </p>
              <p>
               {t("message_from_ceo.content.part4")}
              </p>
            </div>

            <div>
              <h3 className="text-[#f8b716] text-xl font-bold">
               {t("message_from_ceo.signature.name")}
              </h3>
              <p className="text-gray-400 text-sm">
                CEO, JSYS Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSpeaksSection;