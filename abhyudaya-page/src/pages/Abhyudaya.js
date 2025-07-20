import React, { useState } from "react";
import Hero3D from "../components/3D/Hero3D";

const Abhyudaya = () => {
  const [activeTab, setActiveTab] = useState("competitions");

  const competitions = [
    {
      name: "Robowars",
      description: "Ultimate robot combat championship",
      prize: "₹50,000",
      icon: "🤖",
    },
    {
      name: "Coding Marathon",
      description: "24-hour coding challenge",
      prize: "₹30,000",
      icon: "💻",
    },
    {
      name: "Innovation Expo",
      description: "Showcase your revolutionary ideas",
      prize: "₹40,000",
      icon: "💡",
    },
    {
      name: "Tech Quiz",
      description: "Test your technical knowledge",
      prize: "₹15,000",
      icon: "🧠",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Delhi",
      text: "Abhyudaya was life-changing! The competitions were challenging and the networking opportunities were incredible.",
      avatar: "👩‍🎓",
    },
    {
      name: "Rahul Verma",
      college: "NIT Trichy",
      text: "Won the Robowars competition and made lifelong friends. Best festival experience ever!",
      avatar: "👨‍🎓",
    },
    {
      name: "Sneha Patel",
      college: "BITS Pilani",
      text: "The innovation expo platform helped me present my startup idea to amazing mentors.",
      avatar: "👩‍💻",
    },
  ];

  const memories = [
    { id: 1, title: "Opening Ceremony", category: "ceremony" },
    { id: 2, title: "Robowars Arena", category: "competition" },
    { id: 3, title: "Cultural Night", category: "cultural" },
    { id: 4, title: "Award Distribution", category: "ceremony" },
    { id: 5, title: "Tech Talks", category: "workshop" },
    { id: 6, title: "Food Festival", category: "cultural" },
  ];

  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Hero3D />
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse-slow">
            ABHYUDAYA
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
            Where Innovation Meets Excellence
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-xl font-semibold">
              March 15-17, 2024
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-xl font-semibold">
              Engineering India Campus
            </div>
          </div>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
            Register Now
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">
                5000+
              </div>
              <div className="text-gray-300">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-300">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Events</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">₹5L+</div>
              <div className="text-gray-300">Prize Money</div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Competitions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-4">{comp.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-purple-300">
                  {comp.name}
                </h3>
                <p className="text-gray-300 mb-4">{comp.description}</p>
                <div className="text-xl font-bold text-green-400">
                  Prize: {comp.prize}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-blue-300">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400">{testimonial.college}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Gallery Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Memories & Moments
          </h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "competition", "ceremony", "cultural", "workshop"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === category
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                      : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {memories
              .filter(
                (memory) => activeTab === "all" || memory.category === activeTab
              )
              .map((memory) => (
                <div
                  key={memory.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 aspect-square"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📸</div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-white font-semibold">{memory.title}</h3>
                    <p className="text-gray-300 text-sm capitalize">
                      {memory.category}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to Join Abhyudaya?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Don't miss out on the most exciting tech festival of the year!
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-10 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Register for Competitions
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abhyudaya;
