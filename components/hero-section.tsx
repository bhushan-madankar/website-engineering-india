"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/20 z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto">
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 text-gray-800 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Engineering India
        </h1>
        <p
          className={`text-xl md:text-2xl mb-4 text-blue-600 font-medium transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Connecting Engineers & Tech Enthusiasts Across India
        </p>
        <p
          className={`text-lg md:text-xl italic mb-8 text-gray-700 transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          "Think Nationally, Act Locally"
        </p>
        <div
          className={`w-24 h-1 bg-blue-500 mx-auto rounded-full transition-all duration-1000 delay-500 ${isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
        />
      </div>
    </section>
  )
}
