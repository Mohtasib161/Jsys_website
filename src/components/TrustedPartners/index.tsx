import { useTranslation } from "react-i18next"
import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, Globe, CheckCircle } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  location: string
  rating?: number
  image?: string
}

interface Partner {
  name: string
  logo: string
}

export default function TrustedPartners() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // 1. First try to get the complete section data
  const sectionData = t("trustedSection", { returnObjects: true }) as {
    title?: string
    subtitle?: string
    testimonials?: Testimonial[]
    partners?: Partner[]
    footerText?: string
    stats?: { value: string; label: string }[]
  }

  // 2. If that fails, try getting just the testimonials
  let testimonials: Testimonial[] = []
  if (sectionData?.testimonials) {
    testimonials = sectionData.testimonials
  } else {
    // Fallback to direct testimonials access
    try {
      const testimonialsData = t("trustedSection.testimonials", { returnObjects: true })
      if (Array.isArray(testimonialsData)) {
        testimonials = testimonialsData as Testimonial[]
      }
    } catch (error) {
      console.error("Couldn't load testimonials:", error)
    }
  }

  // 3. Final fallback to hardcoded data if nothing works
  if (testimonials.length === 0) {
    testimonials = [
      {
        quote:
          "Our partnership with JSYS Technology has been a game-changer for our business. Their innovative solutions and dedicated team have helped us transform our digital presence and streamline operations.",
        name: "Chikara Tanigaki",
        title: "CEO",
        company: "Rehsaku",
        location: "Japan",
        rating: 5,
      },
      {
        quote:
          "Working with JSYS Technology has consistently exceeded our expectations. Their attention to detail, technical expertise, and commitment to our success have made them an invaluable partner in our growth journey.",
        name: "Ahmad Masood",
        title: "CEO",
        company: "Zenex Inc.",
        location: "Japan",
        rating: 5,
      }
     
    ]
  }

  // Partner logos fallback
  const partners = sectionData?.partners || [
    { name: "Rehsaku", logo: "/assets/logos/partner1.png" },
    { name: "Zenex Inc", logo: "/assets/logos/partner2.png" },
    { name: "TechVision", logo: "/assets/logos/partner3.png" },
    { name: "Global Solutions", logo: "/assets/logos/partner4.png" },
    { name: "Meridian", logo: "/assets/logos/partner5.png" },
    { name: "Avon College", logo: "/assets/logos/partner6.png" },
  ]

  // Stats fallback
  const stats = sectionData?.stats || [
    { value: "50+", label: "Global Clients" },
    { value: "100+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "10+", label: "Years Experience" },
  ]

  // Get title with fallback
  const title = sectionData?.title || t("trustedSection.title") || "Trusted by Industry Leaders"
  const subtitle = sectionData?.subtitle || t("trustedSection.subtitle") || "What our clients say about us"

  // Get footer text with fallback
  const footerText =
    sectionData?.footerText || t("trustedSection.footerText") || "Building lasting partnerships worldwide"

  // Navigation functions for testimonial slider
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.hidden) {
        nextTestimonial()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff7858]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1f3059]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl max-h-5xl bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f3059] mb-4">{title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">{subtitle}</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#1f3059] to-[#ff7858] mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-md border border-gray-100"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#1f3059] mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <div className="mb-20 relative">
          {/* Desktop View - Grid */}
          {!isMobile && (
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          )}

          {/* Mobile/Tablet View - Carousel */}
          {isMobile && (
            <div className="relative">
              <div className="absolute top-1/2 -left-4 z-10 transform -translate-y-1/2">
                <button
                  onClick={prevTestimonial}
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#1f3059] hover:bg-[#1f3059] hover:text-white transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                <button
                  onClick={nextTestimonial}
                  className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#1f3059] hover:bg-[#1f3059] hover:text-white transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div ref={sliderRef} className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <TestimonialCard testimonial={testimonial} index={index} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-[#ff7858] w-6" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Partners Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-center text-xl font-semibold text-[#1f3059] mb-8 flex items-center justify-center">
            <Globe className="w-5 h-5 mr-2" />
            Our Global Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-24 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative w-full h-full">
                  {/* Fallback for missing images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold text-gray-400">{partner.name}</span>
                  </div>

                  {/* This would display the actual logo if available */}
                  {/* 
                  <img 
                    src={partner.logo || "/placeholder.svg"} 
                    alt={partner.name} 
                    className="object-contain p-2 w-full h-full" 
                  />
                  */}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
        
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="h-full group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl relative">
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-[#1f3059] to-[#ff7858]"></div>

        <div className="p-8">
          {/* Quote icon */}
          <div className="mb-6 flex justify-between items-start">
            <Quote className="w-10 h-10 text-[#ff7858]/20" />

            {/* Star rating */}
            <div className="flex">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>

          {/* Quote text */}
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">"{testimonial.quote}"</blockquote>

          {/* Author info */}
          <div className="border-t border-gray-100 pt-6 flex items-center">
            {testimonial.image ? (
              <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <div className="w-14 h-14 bg-gradient-to-br from-[#1f3059] to-[#ff7858] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-md">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
            )}

            <div>
              <div className="font-bold text-[#1f3059] text-lg">{testimonial.name}</div>
              <div className="text-[#ff7858] font-medium text-sm">{testimonial.title}</div>
              <div className="text-gray-500 text-sm flex items-center">
                <span>{testimonial.company}</span>
                <span className="mx-1.5">•</span>
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}