"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useTranslation } from "react-i18next"

type ButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  ariaLabel: string
}

type AvatarProps = {
  src?: string
  alt?: string
  fallback: string
}

type CardProps = {
  children: React.ReactNode
}

const testimonials = [
  {
    name: "Muhammad Kamran Ismlaily",
    profession: "Marketing Executive, AgriPak Gen Trading LLC (UAE)",
    rating: 5,
    profile: "/assets/images/team2.png",
    description: "testimonials.quotes.text1",  // Reference to translation key
    author: "testimonials.quotes.author1"
  },
  {
    name: "Tahir Mangatt",
    profession: "CEO & Founder, Toronto Condomania – Toronto, Canada",
    rating: 5,
    profile: "/assets/images/team2.png",
    description: "testimonials.quotes.text2",  // Reference to translation key
    author: "testimonials.quotes.author2"
  },
  {
    name: "Zahid Khan",
    profession: "CEO, Mena One Consultant",
    rating: 5,
    profile: "/assets/images/team.jpg",
    description: "testimonials.quotes.text3",  // Reference to translation key
    author: "testimonials.quotes.author3"
  }
]


// Button component
const Button: React.FC<ButtonProps> = ({ children, onClick, ariaLabel }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-full"
  >
    {children}
  </button>
)

// Avatar component
const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback }) => (
  <div className="w-16 h-16 rounded-full overflow-hidden" id="testimonial">
    {src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="w-full h-full object-cover" src={src || "/placeholder.svg"} alt={alt} />
    ) : (
      <div className="flex items-center justify-center w-full h-full bg-gray-200">
        <span className="text-lg font-bold">{fallback}</span>
      </div>
    )}
  </div>
)

// Card component
const Card: React.FC<CardProps> = ({ children }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">{children}</div>
)

// CardContent component
const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="p-6">{children}</div>

export default function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#1f3059] sm:text-5xl text-left">
            {t("testimonials.title")}
            <br />
            <span className="font-serif text-4xl inline-block text-[#ff7858]">{t("testimonials.title2")}</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <div className="relative mr-4">
                      <Avatar
                        src={testimonials[currentIndex].profile}
                        alt={`Avatar of ${testimonials[currentIndex].name}`}
                        fallback={testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-dotted border-purple-500 animate-spin-slow"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].profession}</p>
                    </div>
                  </div>
                  <div className="relative mb-6">
                    <Quote className="absolute top-0 left-0 text-purple-200 h-8 w-8 -mt-3 -ml-2" />
                    {/* Apply translation using keys */}
                    <p className="text-gray-600 italic pl-6">{t(testimonials[currentIndex].description)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4">
            <Button onClick={handlePrev} ariaLabel="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4">
            <Button onClick={handleNext} ariaLabel="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>
    </div>
  )
}
