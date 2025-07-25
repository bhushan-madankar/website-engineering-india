"use client"

import { useInView } from "../hooks/use-in-view"

const values = [
  {
    icon: "🤝",
    title: "Collaboration",
    description:
      "Bringing together the best minds from premier technological institutes to work on shared social causes and innovative solutions.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "Leveraging cutting-edge technology and creative thinking to address complex societal challenges with sustainable solutions.",
  },
  {
    icon: "🌍",
    title: "Social Impact",
    description:
      "Focusing on projects that create meaningful positive change in society, with a commitment to improving lives across India.",
  },
  {
    icon: "🔗",
    title: "Connection",
    description:
      "Building bridges between institutions, students, and communities to create a network of change-makers across the nation.",
  },
]

export default function ValuesSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
