"use client"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import { useTranslation } from "react-i18next"
import Navbar from "../Navbar"

export default function Header() {
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

  return (
    <>
    <Navbar />
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-22">
            {/* Left section - Content */}
            <div className="w-full md:w-1/2 space-y-6" data-aos="fade-right">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1f3059] leading-tight">
                  {t("hero.title")}
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#ff7858] leading-tight">
                  {t("hero.subtitle")}
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                {t("hero.description")}
              </p>

              <div className="pt-4">
                <button className="px-8 py-3.5 rounded-full text-white font-medium bg-[#ff7858] hover:bg-[#ff7858]/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  Get Started
                </button>
              </div>
            </div>

            {/* Right section - Image */}
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/images/finalhero.jpg"
                  alt="hero"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1f3059]/10 to-transparent mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
