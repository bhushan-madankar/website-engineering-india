"use client"

import { useState, useEffect } from "react"
import { useInView } from "../hooks/use-in-view"

const stats = [
  { number: 8, label: "Partner Institutes" },
  { number: 250, label: "Active Members" },
  { number: 10, label: "Social Projects" },
]

function AnimatedCounter({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target, isVisible])

  return <span>{count}</span>
}

export default function StatsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-16 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8 place-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl font-extrabold text-blue-600 mb-2">
                <AnimatedCounter target={stat.number} isVisible={isInView} />
              </div>
              <div className="text-lg font-medium text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

