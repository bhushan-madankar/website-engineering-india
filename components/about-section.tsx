"use client"

import { useInView } from "../hooks/use-in-view"

export default function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          About Engineering India
        </h2>

        <div className="text-center space-y-8">
          <p
            className={`text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-700 delay-200 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
           Engineering India is an innovative initiative that ignites creativity
 and unlocks the full potential of students, shaping them into
 future leaders and innovators. By offering a rich array of
 activities, 
it 
fosters self-confidence, teamwork, and
 collaborative problem-solving in an engaging and nurturing
 environment. This transformative journey is guided by Vidarbha
 Vaibhav, a distinguished organization celebrated for its
 dedication to educational excellence and community
 development. Embracing Swami Vivekananda’s wisdom, "Arise,
 awake, and stop not till the goal is reached," Engineering India
 inspires students to work together, build meaningful
 connections, and strive for extraordinary achievements.
 Through its visionary approach, Engineering India paves the
 way for personal growth and impactful accomplishments.

          </p>
        </div>
      </div>
    </section>
  )
}
