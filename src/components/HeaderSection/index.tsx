"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"
import { ArrowRight, Headphones } from 'lucide-react'
import Navbar from "../Navbar"

// import Navbar from "../Navbar" // Navbar is imported in the original code but not used in this component. Keeping it commented out as it might be part of a larger application.

export default function Header() {
  const { t } = useTranslation(); // The 't' function from useTranslation is not used in the provided JSX, but the hook is kept as it was in the original code.

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
   <section className="w-full  bg-gradient-to-br from-[#000000] to-[#0b2448]  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-2 pt-12">
          {/* Left section - Content */}
          <div className="text-white space-y-6 md:space-y-8 md:w-1/2 lg:w-[45%] pl-4"  data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t("hero.title")} <br />
             
              {t("hero.subtitle")}
            </h1>
            <p className="text-base  text-gray-300 max-w-md">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 text-lg">
               {t("hero.button")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-md">
                <Headphones className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="text-yellow-400 text-sm font-semibold">09032881899</p>
                  <p className="text-gray-300 text-xs">info@jsys-tech.com</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right section - Image */}
          <div className="w-full md:w-1/2 lg:w-[55%] relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden" data-aos="fade-left">  
         
            <img
              src="/assets/images/Herosection.png"
              alt="hero"
              className="absolute inset-0 w-full h-full object-cover  "
            />
          </div>
        </div>
      </div>
    </section></>
    
  )
}
