"use client"

import { useState, useEffect } from "react"
import HeroSection from "./hero-section"
import AboutSection from "./about-section"
/*import PhotoGallery from "./photo-gallery"*/
import VisionMission from "./vision-mission"
import ValuesSection from "./values-section"
import StatsSection from "./stats-section"
import TestimonialsSection from "./testimonials-section"
import ContactSection from "./contact-section"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-slate-50 to-white transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <ValuesSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-200 text-gray-700 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="mb-2">&copy; 2025 Engineering India.</p>
          <p className="italic text-gray-600">"Think Nationally, Act Locally"</p>
        </div>
      </footer>
    </div>
  )
}
