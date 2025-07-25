"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "../hooks/use-in-view"

export default function VisionMission() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Vision & Mission
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">V</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To unite top tech students to drive social change, share ideas, and foster social responsibility.
                Empowering all students, especially the underconfident, to grow and shape a brighter future.
              </p>
            </CardContent>
          </Card>

          <Card
            className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-700 delay-200 hover:-translate-y-2 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="font-bold text-xl">M</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower students to drive social change through knowledge, skills, and collaboration.
                We foster a network of passionate individuals, raise awareness, and support community projects,
                leveraging technical expertise to make a lasting impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
