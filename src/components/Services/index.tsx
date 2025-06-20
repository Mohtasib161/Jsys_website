/* eslint-disable @next/next/no-img-element */
"use client"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function Services() {
   const { t, ready: tReady } = useTranslation();

  const services = [
    {
      icon: "/assets//logos/icon2.png",
      title: t("services.service1.title"),
      description: t("services.service1.description"),
    },
    {
      icon: "/assets/logos/icon.png",
      title: t("services.service2.title"),
      description: t("services.service2.description"),
    },
    {
      icon: "/assets/logos/icon3.png",
      title: t("services.service3.title"),
      description: t("services.service3.description"),
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50" id="services" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 id="services-heading" className="text-[#1f3059] font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-[#1f3059] mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full"
    >
      <div className="p-6 sm:p-8 flex flex-col h-full">
        <div className="bg-gray-50 p-4 rounded-xl inline-block mb-6">
          <motion.img
            src={icon}
            alt=""
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1f3059] group-hover:text-[#1f3059]/80 transition-colors">
          {title}
        </h3>

        <p className="text-[#5f6368] text-base sm:text-lg flex-grow">{description}</p>

        <motion.div
          className="mt-6 w-12 h-1 bg-gray-200 group-hover:bg-[#1f3059] transition-colors duration-300"
          initial={{ width: "12px" }}
          whileHover={{ width: "48px" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f3059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}
