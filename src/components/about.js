import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium italic">"Think Nationally, Act Locally"</p>
          <div className="mt-8 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Our team in action"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Community engagement"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Our workspace"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where global thinking meets local action, fostering sustainable communities that
                  thrive through innovative solutions and collaborative partnerships. We envision a future where every
                  local initiative contributes to national progress and global well-being.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to empowering local communities through strategic initiatives that align with
                  national objectives. Our mission is to bridge the gap between grassroots action and broader impact,
                  creating meaningful change that resonates from neighborhoods to the nation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Community First</h4>
              <p className="text-gray-600">
                Every decision we make prioritizes the well-being and growth of our local communities.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Sustainable Impact</h4>
              <p className="text-gray-600">
                We focus on creating lasting change that benefits both present and future generations.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Collaborative Growth</h4>
              <p className="text-gray-600">
                We believe in the power of partnerships and collective action to achieve greater goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and stay updated with our latest initiatives. Follow us on social media and be part of
            the change.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Your City, State</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-400 text-center">
        <p>&copy; 2024 Your Organization. All rights reserved.</p>
        <p className="mt-2 italic">"Think Nationally, Act Locally"</p>
      </footer>
    </div>
  )
}
