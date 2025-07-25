"use client"

import Image from "next/image"
import { useInView } from "../hooks/use-in-view"

const testimonials = [
  {
    quote: " As the member of Engineering India, I am thrilled to reflect on our progress and achievements over the past year. Our club, dedicated to social development, bring up the patriotic feeling in an individual which will eventually lead to the progress of our nation and oneself. We has seen tremendous growth and success, thanks to the dedication and enthusiasm of our members and leadership team.",
    author: " Om Deshmukh",
    title: " YCCE ",
    image: "/placeholder.svg",
  },
  {
    quote: " Engineering India was a launchpad for my growth, offering a platform to develop leadership, teamwork, and communication skills. Organizing large-scale events honed my project management abilities. The club’s mentorship and camaraderie fostered a supportive environment for learning and experimentation.",
    author: " Jayesh Kshirsagar",
    title: " Defence Aspirant",
    image: "/placeholder.svg",
  },
  {
    quote: " My involvement with the Engineering India Club has been deeply fulfilling, allowing me to engage in social work and support underprivileged children.Through our Rangeetalim initiative and lapto based skill development programs, we've empowered young minds. It’s rewarding to see my  childhood dream of helping others take shape in tangible ways. I firmly believe nurturing talent is key to India's progress",
    author: " Siddhi Khodankar",
    title: "Software Developer at Capgemini",
    image: "/placeholder.svg",
  },
]

export default function TestimonialsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          What Our Members Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-lg rounded-xl p-8 border border-blue-200 hover:bg-white/90 hover:shadow-lg transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6">
                <p className="text-lg leading-relaxed italic text-gray-700">"{testimonial.quote}"</p>
                <div className="absolute -top-4 -left-2 text-6xl text-blue-200 font-serif">"</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">{testimonial.author}</h5>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
