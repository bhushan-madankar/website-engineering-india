"use client"

import Image from "next/image"
import { useInView } from "../hooks/use-in-view"

const galleryImages = [
  { src: "/placeholder.svg", alt: "Placeholder image 1" },
  { src: "/placeholder.svg", alt: "Placeholder image 2" },
  { src: "/placeholder.svg", alt: "Placeholder image 3" },
]

export default function PhotoGallery() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Our Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative h-64 rounded-xl overflow-hidden shadow-lg group transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
