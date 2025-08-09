import React from 'react';
import { useTranslation } from "react-i18next"

export default function StateSections() {
  const { t } = useTranslation();
  
  const stats = [
  {
    number: "StateSection.client number",
    label: "StateSection.client"
  },
  {
    number: "StateSection.project number",
    label: "StateSection.project"
  },
  {
    number: "StateSection.satisfaction number",
    label: "StateSection.satisfaction"
  },
  {
    number: "StateSection.experience number",
    label: "StateSection.experience"
  }
];


  return (
    <section className="w-full bg-[#0b63e5] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0" >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center text-white ${
                index < stats.length - 1 ? 'lg:border-r lg:border-white/20' : ''
              } px-4 lg:px-8`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 tracking-tight">
               {t(stat.number)}
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium opacity-90 tracking-wide">
                {t(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
