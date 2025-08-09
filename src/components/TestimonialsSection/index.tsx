
import { useTranslation } from "react-i18next"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

function TestimonialsSection() {
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
  const testimonials = [
    {
      id: 1,
      name: "trustedSection.testimonials.0.name",
      title: "trustedSection.testimonials.0.title",
      avatar: "assets/images/team2.png",
      rating: 5,
      text: "trustedSection.testimonials.0.quote"
    },
    {
      id: 2,
      name: "trustedSection.testimonials.1.name",
      title: "trustedSection.testimonials.1.title",
      avatar: "assets/images/team.jpg",
      rating: 5,
      text: "trustedSection.testimonials.1.quote"
    },
    
    {
      id: 3,
      name: "trustedSection.testimonials.2.name",
      title: "trustedSection.testimonials.2.title",
      avatar: "assets/images/team2.png",
      rating: 5,
      text: "trustedSection.testimonials.2.quote"
    }
  ];


  return (
    <section className="w-full bg-gradient-to-br from-[#0A1128] to-[#0D1833] py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <p className="text-[#f8b715] text-sm font-medium tracking-wider uppercase mb-4">
           {t("trustedSection.subtitle")}
          </p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            {t("trustedSection.title")}
          </h2>
        </div>

        {/* Testimonial Cards Grid/Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
               >
            {testimonials.map((testimonial, index) => (
              <div 
              data-aos="fade-up"
                key={testimonial.id} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2" // Adjust width for responsiveness
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar || "/placeholder.svg"} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                        ))}
                      </div>
                      <h3 className="text-gray-900 font-semibold text-lg">
                        {t(testimonial.name)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(testimonial.title)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {t(testimonial.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default TestimonialsSection;