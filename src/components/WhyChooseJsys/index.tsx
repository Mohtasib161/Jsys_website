import { Lightbulb, Target, Layers } from "lucide-react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export default function WhyChooseJSYS() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Lightbulb,
      title: t("whyChooseUs.item1.title"),
      description: t("whyChooseUs.item1.description"),
    },
    {
      icon: Target,
      title: t("whyChooseUs.item2.title"),
      description: t("whyChooseUs.item2.description"),
    },
    {
      icon: Layers,
      title: t("whyChooseUs.item3.title"),
      description: t("whyChooseUs.item3.description"),
    },
  ]

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 text-gray-800 overflow-hidden"
      id="why-choose-us"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900">{t("whyChooseUs.title")} </span>
            <span className="bg-gradient-to-r from-black to-[#ff7858] bg-clip-text text-transparent">
              {t("whyChooseUs.title2")}
            </span>
          </h2>
         
          <div className="w-32 h-1.5 bg-gradient-to-r from-black to-[#ff7858] mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group h-full"
              >
                <div
                  className="relative h-full bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 
                  hover:shadow-xl border border-gray-100 overflow-hidden"
                >
                  {/* Background decoration */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/5 to-[#ff7858]/5 
                    rounded-bl-[100px] rounded-tr-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10 mb-8"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                  >
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-black to-[#ff7858] rounded-2xl 
                      flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 
                      group-hover:text-[#ff7858] transition-colors duration-300"
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                    <div
                      className="mt-6 w-12 h-0.5 bg-gray-200 group-hover:w-24 group-hover:bg-[#ff7858] 
                      transition-all duration-300"
                    ></div>
                  </div>

                  {/* Bottom decoration */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-[#ff7858] 
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  ></div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}