
import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from 'framer-motion';
export default function CEOMessage() {
     const { t } = useTranslation();
     useEffect(() => {
         AOS.init({
           duration: 1000,
           easing: "ease-in-out",
           once: true,
           offset: 300,
         })
     
         AOS.refresh()
       }, [])
  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-2">
           <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="inline-block"
                    >
                      <h2 className="text-4xl  font-bold text-[#1f3059] mb-2">
                        {t("message_from_ceo.title")}
                      </h2>
                      <motion.div
                        className="h-1 bg-gradient-to-r from-[#1f3059] to-[#ff7858] mt-4 mx-auto"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                    </motion.div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto my-6">{t('message_from_ceo.subtitle')}</p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#1f3059] to-[#ff7858] mx-auto rounded-full"></div>
        </motion.div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-up">
          <div className="md:flex">
            {/* CEO Image */}
            <div className="md:w-1/3 bg-gradient-to-br from-[#ff7858] to-[#1f3059] flex items-center justify-center p-8">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <img
                    src="/assets/images/ceo-image.jpg"
                    alt="CEO Portrait"
                    className="w-28 h-28 rounded-full object-cover border-4 border-white/30"
                  />
                </div>
              
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text mb-1 tracking-wide drop-shadow-lg animate-pulse">
                  {t("message_from_ceo.signature.name")}
                </h3>
              </div>
            </div>

            {/* Message Content */}
            <div className="md:w-2/3 p-8 lg:p-12">
              <div className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 text-6xl text-blue-200 font-serif">"</div>

                <div className="relative z-10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t("message_from_ceo.content.part1")}
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t("message_from_ceo.content.part2")}

                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   {t("message_from_ceo.content.part3")}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                   {t("message_from_ceo.content.part4")}
                 </p>
                  {/* Signature */}
                  <div className="border-t border-gray-300 pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl font-semibold text-[#1f3059]">{t("message_from_ceo.signature.name")}</p>
                        <p className="text-gray-600">{t("message_from_ceo.signature.position")}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        
      </div>
    </section>
  )
}
