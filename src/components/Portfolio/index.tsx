import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ExternalLink, CheckCircle, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

// Project data remains the same as in your original component
const projects = [
  {
    id: 1,
    company: "Rehsaku (Japan)",
    title: "Rehabsuite – The Ultimate Clinic Reservation & Management Platform",
    description:
      "A fully integrated, 360-degree clinic management system designed for long-term growth and innovation. Over a 5+ year development journey, this platform will unify critical functions including CRM, Finance, Accounts, Payroll, Electronic Medical Records (EMR), Marketing, and cutting-edge AI-driven features to optimize operations, improve patient care, and empower clinic administrators with real-time insights.",
    image: "/assets/images/REHASAKU.PNG",
    link: "#",
    status: "development",
    developmentPhase: "5+ Year Development Journey",
    features: ["CRM Integration", "EMR System", "AI-Driven Analytics", "Financial Management", "Marketing Automation"],
    category: "healthcare",
  },
  {
    id: 2,
    company: "Meridian High School",
    title: "Web Application",
    description:
      "Avon College is the learning solution for today's fast-paced life. Avon College offers high quality online programs of independent study for individuals, educators, students, and professionals.",
    image: "/assets/images/project.PNG",
    link: "https://avoncollege.com/index.html",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: ["Online Learning", "Student Portal", "Course Management", "Educational Resources", "Assessment Tools"],
    category: "education",
  },
  {
    id: 3,
    company: "Avon College",
    title: "Web Application",
    description:
      "Meridian High School is dedicated to the belief that equal educational opportunity and a strong education system are crucial cornerstones of an autonomous society. Ipsa Scientia Potestas Est (Knowledge is Power) is our motto.",
    image: "/assets/images/project2.PNG",
    link: "https://www.meridianhigh.school/index.html",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: ["Educational Platform", "Student Management", "Academic Resources", "Digital Learning", "School Portal"],
    category: "education",
  },
  {
    id: 4,
    company: "MENA ONE Consulting",
    title: "Web Application",
    description:
      "Our consulting firm is dedicated to helping you navigate the complexities of education, ISO certification, curriculum development, and education laws. Let us guide you through the details, so you can focus on what really matters - achieving your educational goals.",
    image: "/assets/images/project3.PNG",
    link: "https://mena1.consulting/",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: [
      "Consulting Services",
      "ISO Certification",
      "Curriculum Development",
      "Education Laws",
      "Business Solutions",
    ],
    category: "consulting",
  },
  {
    id: 5,
    company: "AgriPak",
    title: "Web Application",
    description:
      "The one step solution to all your agricultural machinery requirements. AgriPak is a twenty year old establishment, a leading manufacturer of AGRI machinery with a specialty in the supply of world's finest AGRI & Massey Ferguson Tractors.",
    image: "/assets/images/project.PNG",
    link: "https://agripakgroup.com/",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: [
      "Agricultural Machinery Catalog",
      "Tractor Showcase",
      "Product Specifications",
      "Dealer Locator",
      "Contact/Inquiry System",
    ],
    category: "agriculture",
  },
  {
    id: 6,
    company: "TORONTO",
    title: "Web Application",
    description: "Discover GTA's Top Real Estate Properties All in One Place",
    image: "/assets/images/Project5.PNG",
    link: "https://torontocondomania.ca/",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: [
      "Property Listings",
      "Advanced Search Filters",
      "Interactive Map View",
      "Virtual Tours",
      "Agent Contact System",
    ],
    category: "real-estate",
  },
  {
    id: 7,
    company: "TAHIR MANGATT",
    title: "Web Application",
    description:
      "Tahir Mangatt is One of the Top Real Estate Agents in Canada. As a multi-award-winning realtor with years of experience in Ontario, Tahir has earned a reputation as one of the top Canadian realtors.",
    image: "/assets/images/project7.PNG",
    link: "https://tahirmangatt.com/",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: [
      "Agent Profile & Achievements",
      "Client Testimonials",
      "Property Portfolio",
      "Buyer/Seller Guides",
      "Lead Capture & Contact Form",
    ],
    category: "real-estate",
  },
  {
    id: 8,
    company: "Alzheimer's Pakistan",
    title: "Web Application",
    description:
      "Alzheimer's Pakistan is the National Organization of Alzheimer's and related dementias. It is registered with Punjab Social Welfare Department and the main objective of this Non Government Community Organization is to work towards the welfare of people with dementia and their care givers. Since its inception in 1999, Alzheimer's Pakistan has been in the forefront to create mass awareness about Dementias.",
    image: "/assets/images/project8.PNG",
    link: "https://alz.org.pk/",
    status: "live",
    developmentPhase: "Successfully Delivered",
    features: [
      "Dementia Awareness Resources",
      "Caregiver Support Guides",
      "Events & Workshops Calendar",
      "Donation & Volunteer Portal",
      "Contact & Helpline Information",
    ],
    category: "healthcare",
  },
]

export default function RecentWork() {
  const { t } = useTranslation() // Assuming you have translations for this section
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [visibleProjects, setVisibleProjects] = useState(projects)

  // Filter categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "healthcare", label: "Healthcare" },
    { id: "education", label: "Education" },
    { id: "real-estate", label: "Real Estate" },
    { id: "consulting", label: "Consulting" },
    { id: "agriculture", label: "Agriculture" },
  ]

  // Filter projects when activeFilter changes
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
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-grey-50" id="projects">
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
              {t("project.title") || "Explore Our Innovation"}
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-[#1f3059] to-[#ff7858] mt-4 mx-auto"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            {t("project.subtitle") ||
              "Discover our portfolio of successful projects across various industries, showcasing our expertise and commitment to excellence."}
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-[#1f3059]" />
            <h3 className="text-lg font-semibold text-[#1f3059]">{t("ProjectFilter") || "Filter Projects"}</h3>
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
                {category.label}
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

          {/* Projects container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 space-x-6 scroll-smooth hide-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setIsDragging(false)}
          >
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
                        In Development
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-3.5 w-3.5" />
                        Live Project
                      </>
                    )}
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-10 bg-[#ff7858]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>

                  {/* Project image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
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
                      <div className="text-sm font-semibold text-[#1f3059]">{project.company}</div>
                      <div className="text-xs text-[#ff7858] font-medium bg-orange-50 px-2.5 py-1 rounded-md border border-orange-100">
                        {project.developmentPhase}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 leading-tight text-gray-900">{project.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">{project.description}</p>

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
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200">
                            +{project.features.length - 3} more
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
                          View Project
                          <ExternalLink className="h-4 w-4 ml-1.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center px-4 py-2 bg-[#1f3059] text-white rounded-lg text-sm font-medium">
                          Coming Soon
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

        {/* View all projects button */}
        
      </div>

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  )
}