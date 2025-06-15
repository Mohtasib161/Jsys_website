"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { useTranslation } from "react-i18next"

// Mock translation function - replace with your actual useTranslation hook


const projects = [
  {
    id: 1,
    company: "project.companyname.name1",
    title: "project.projectheading.heading1",
    description: "project.projectdec.description1",
    image: "/assets/images/REHASAKU.PNG",
    link: "#",
    status: "development",
    developmentPhase: "project.status.status1",
    features: [
      "project.keyfeature.Projectfeatures1.name1",
      "project.keyfeature.Projectfeatures1.name2",
      "project.keyfeature.Projectfeatures1.name3",
      "Financial Management",
      "Marketing Automation",
    ],
    category: "project.projecttitle.title1",
  },
  {
    id: 2,
    company: "project.companyname.name2",
    title: "project.projectheading.heading2",
    description: "project.projectdec.description1",
    image: "/assets/images/project.PNG",
    link: "https://avoncollege.com/index.html",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures2.name2",
      "project.keyfeature.Projectfeatures2.name1",
      "project.keyfeature.Projectfeatures1.name3",
      "Educational Resources",
      "Assessment Tools",
    ],
    category: "project.projecttitle.title1",
  },
  {
    id: 3,
    company: "project.companyname.name3",
    title: "project.projectheading.heading3",
    description: "project.projectdec.description1",
    image: "/assets/images/project2.PNG",
    link: "https://www.meridianhigh.school/index.html",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures3.name1",
      "project.keyfeature.Projectfeatures3.name2",
      "project.keyfeature.Projectfeatures3.name3",
      "Digital Learning",
      "School Portal",
    ],
    category: "project.projecttitle.title2",
  },
  {
    id: 4,
    company: "project.companyname.name4",
    title: "project.projectheading.heading4",
    description: "project.projectdec.description1",
    image: "/assets/images/project3.PNG",
    link: "https://mena1.consulting/",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures4.name1",
      "project.keyfeature.Projectfeatures4.name2",
      "project.keyfeature.Projectfeatures4.name3",
      "Education Laws",
      "Business Solutions",
    ],
    category: "project.projecttitle.title3",
  },
  {
    id: 5,
    company: "project.companyname.name5",
    title: "project.projectheading.heading5",
    description: "project.projectdec.description1",
    image: "/assets/images/project.PNG",
    link: "https://agripakgroup.com/",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures5.name1",
      "project.keyfeature.Projectfeatures5.name2",
      "project.keyfeature.Projectfeatures5.name3",
      "Dealer Locator",
      "Contact/Inquiry System",
    ],
    category: "project.projecttitle.title4",
  },
  {
    id: 6,
    company: "project.companyname.name6",
    title: "project.projectheading.heading6",
    description: "project.projectdec.description1",
    image: "/assets/images/Project5.PNG",
    link: "https://torontocondomania.ca/",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures6.name1",
      "project.keyfeature.Projectfeatures6.name2",
      "project.keyfeature.Projectfeatures6.name3",
      "Virtual Tours",
      "Agent Contact System",
    ],
    category: "project.projecttitle.title5",
  },
  {
    id: 7,
    company: "project.companyname.name7",
    title: "project.projectheading.heading7",
    description: "project.projectdec.description1",
    image: "/assets/images/project7.PNG",
    link: "https://tahirmangatt.com/",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures7.name1",
      "project.keyfeature.Projectfeatures7.name2",
      "project.keyfeature.Projectfeatures7.name3",
      "Buyer/Seller Guides",
      "Lead Capture & Contact Form",
    ],
    category: "project.projecttitle.title5",
  },
  {
    id: 8,
    company: "project.companyname.name8",
    title: "project.projectheading.heading8",
    description: "project.projectdec.description1",
    image: "/assets/images/project8.PNG",
    link: "https://alz.org.pk/",
    status: "live",
    developmentPhase: "project.status.status2",
    features: [
      "project.keyfeature.Projectfeatures8.name1",
      "project.keyfeature.Projectfeatures8.name2",
      "project.keyfeature.Projectfeatures8.name3",
      "Donation & Volunteer Portal",
      "Contact & Helpline Information",
    ],
    category: "project.projecttitle.title1",
  },
]

export default function RecentWork() {
  const { t } = useTranslation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(projects)

  // Filter categories mapped to translation keys
  const categories = [
    { id: "all", label: "projectsTitle.project", categoryKey: "all" },
    { id: "project.projecttitle.title1", label: "projectsTitle.project1", categoryKey: "project.projecttitle.title1" },
    { id: "project.projecttitle.title2", label: "projectsTitle.project2", categoryKey: "project.projecttitle.title2" },
    { id: "project.projecttitle.title3", label: "projectsTitle.project4", categoryKey: "project.projecttitle.title3" },
    { id: "project.projecttitle.title4", label: "projectsTitle.project5", categoryKey: "project.projecttitle.title4" },
    { id: "project.projecttitle.title5", label: "projectsTitle.project3", categoryKey: "project.projecttitle.title5" },
  ]

  // Fixed filter logic to work with translation keys
  useEffect(() => {
    if (activeFilter === "all") {
      setVisibleProjects(projects)
    } else {
      setVisibleProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  // Scroll handling
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeftState(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeftState - walk
  }

  const scrollLeftFunc = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRightFunc = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f3059] uppercase tracking-tight">
              {t("project.title")}
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-[#1f3059] to-[#ff7858] mt-4 mx-auto"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">{t("project.subtitle")}</p>
        </div>

        {/* Category filters */}
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-[#1f3059]" />
            <h3 className="text-lg font-semibold text-[#1f3059]">{t("projectsTitle.subtitle")}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-[#1f3059] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {t(category.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects carousel with navigation */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeftFunc}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#1f3059] hover:bg-[#1f3059] hover:text-white transition-colors duration-300 hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRightFunc}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md text-[#1f3059] hover:bg-[#1f3059] hover:text-white transition-colors duration-300 hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects container - Fixed scrollbar issue */}
          <div
            ref={scrollRef}
            className="flex pb-4 -mx-4 px-4 space-x-6 overflow-x-auto"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* Internet Explorer 10+ */,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsDragging(false)}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <AnimatePresence>
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-[#1f3059]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                    {project.status === "development" ? (
                      <>
                        <Clock className="h-3.5 w-3.5" />
                        {t("project.deliverstatus.status")}
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        {t("project.deliverstatus.status1")}
                      </>
                    )}
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-10 bg-[#ff7858]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {t(project.category)}
                  </div>

                  {/* Project image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={t(project.title)}
                      className="w-full h-full object-cover object-top"
                      initial={{ scale: 1 }}
                      animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f3059]/80 via-transparent to-transparent" />
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-[#1f3059]">{t(project.company)}</div>
                      <div className="text-xs text-[#ff7858] font-medium bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                        {t(project.developmentPhase)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 leading-tight text-gray-900">{t(project.title)}</h3>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">{t(project.description)}</p>

                    {/* Features */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2.5 flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#ff7858] rounded-full mr-1.5"></span>
                        Key Features:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-blue-50 text-[#1f3059] px-2.5 py-1 rounded-full border border-blue-100"
                          >
                            {feature.startsWith("project.") ? t(feature) : feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">
                            +{project.features.length - 3} {t("project.count")}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action button */}
                    <motion.div
                      className="mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.status === "live" ? (
                        <a
                          href={project.link}
                          className="inline-flex items-center px-4 py-2 bg-[#1f3059] text-white rounded-lg hover:bg-[#1f3059]/90 transition-colors duration-300 text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t("project.deliverstatus.status1")}
                          <ExternalLink className="h-4 w-4 ml-1.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center px-4 py-2 bg-[#1f3059] text-white rounded-lg text-sm font-medium">
                          {t("project.deliverstatus.status")}
                          <Clock className="h-4 w-4 ml-1.5" />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1f3059] to-[#ff7858]"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
