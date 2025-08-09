import { ArrowRight } from "lucide-react";
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"

function CallToActionSection() {
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
    <section className="w-full bg-blue-600 py-16 lg:py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
        <h2 className="text-white text-3xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
          {t("calltoaction.title")}
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed opacity-90">
         {t("calltoaction.subtitle")}
        </p>
        <button className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-6 p md:px-8 py-3 rounded-sm font-semibold transition-colors duration-200 text-base">
          {t("calltoaction.button")}
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

export default CallToActionSection;