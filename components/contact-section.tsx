"use client"

import {  Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "../hooks/use-in-view"

export default function ContactSection() {
  const { ref, isInView } = useInView()

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/engineeringindia" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/engineeringindia" },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-100 text-gray-800 text-center">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Connect With Engineering India
        </h2>

        <p
          className={`text-lg text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          Join our community of engineers and tech enthusiasts. Be part of the movement to create positive social change
          through technology and innovation.
        </p>

        {/* Social Media Links */}
        <div
          className={`flex justify-center space-x-6 mb-12 transition-all duration-700 delay-400 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className="bg-white border-blue-300 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open(social.href, "_blank")}
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </Button>
          ))}
        </div>

        {/* Contact Information */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-600 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="flex items-center justify-center space-x-3 hover:text-blue-600 transition-colors cursor-pointer">
            <Mail className="h-5 w-5" />
            <span>engineeringindia047@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3 hover:text-blue-600 transition-colors cursor-pointer">
            <Phone className="h-5 w-5" />
            <span>+91 9923155346</span>
          </div>
          <div className="flex items-center justify-center space-x-3 hover:text-blue-600 transition-colors">
            <MapPin className="h-5 w-5" />
            <span>Maharashtra, India</span>
          </div>
        </div>
      </div>
    </section>
  )
}
