
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"
function OurServices2() {
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
      title: "services.service1.title",
      image: "/assets/images/Rectangle 19.jpg",
      alt: "AI and Machine Learning"
    },
    {
      title: "services.service1.title2", 
      image: "/assets/images/Rectangle 22.jpg",
      alt: "Cybersecurity Solutions"
    },
    {
      
      title: "services.service1.title3", 
       image: "/assets/images/Rectangle 11-1.jpg",
      alt: "Custom Application Development"
    },
    {
      title: "services.service1.title4",
      image: "/assets/images/Rectangle 23.jpg",
      alt: "DevOps Services"
    },
    {
      title: "services.service1.title5",
      image: "/assets/images/Rectangle 17.jpg",
      alt: "Agile Development Support"
    },
    {
      title: "services.service1.title6",
      image: "/assets/images/Rectangle 14.jpg",
      alt: "Business Consulting"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#0A1128] to-[#0b2448] py-16 lg:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <p className="text-[#f8b715] text-sm font-medium tracking-wider uppercase mb-4">
            {t("services.title")}
          </p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("services.subtitle")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" >
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-orange-400/50 transition-colors duration-300" data-aos="fade-up"
            >
              <div className="flex items-center gap-8" >
                <div className="flex-shrink-0">
                  <img 
                    src={service.image || "/placeholder.svg"}
                    alt={service.alt}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#f8b715] text-lg sm:text-xl font-semibold">
                    {service.title ? t(service.title) : ""}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices2;