import React, { useState, useEffect } from "react";
import Hero3D from "../components/3D/Hero3D";

const Abhyudaya = () => {
  const [activeTab, setActiveTab] = useState("competitions");
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Countdown timer for the event
    const eventDate = new Date("2024-03-15T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />

        {/* Floating festival elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 text-6xl opacity-20 animate-float-up-down">
            🎪
          </div>
          <div
            className="absolute top-32 right-32 text-4xl opacity-30 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            🎯
          </div>
          <div
            className="absolute bottom-40 left-40 text-5xl opacity-25 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            🏆
          </div>
          <div
            className="absolute bottom-32 right-20 text-4xl opacity-20 animate-float-up-down"
            style={{ animationDelay: "1.5s" }}
          >
            🎨
          </div>
        </div>

        <div
          className={`relative z-10 text-center max-w-6xl mx-auto px-4 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {/* Main title with enhanced effects */}
          <div className="relative mb-4 mt-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 hover:scale-105 transition-transform duration-500 cursor-pointer relative z-10 text-center text-white leading-tight">
              ABHYUDAYA
            </h1>
            {/* Colored gradient overlay */}
            <h1 className="absolute top-0 left-0 right-0 text-5xl md:text-6xl font-bold mb-2 text-center -z-10 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ABHYUDAYA
              </span>
            </h1>
            {/* Glowing effect behind title */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-3xl -z-20"></div>
          </div>

          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300 animate-pulse">
            Where Innovation Meets Excellence
          </p>

          {/* Enhanced event info with countdown */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <div className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
              <span className="flex items-center gap-2">
                📅 March 15-17, 2024
              </span>
            </div>
            <div className="group bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              <span className="flex items-center gap-2">
                📍 Engineering India Campus
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-xl text-gray-300 mb-6">Event Countdown</h3>
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">
                  {countdown.days}
                </div>
                <div className="text-sm text-gray-300">Days</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">
                  {countdown.hours}
                </div>
                <div className="text-sm text-gray-300">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-400/30 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-pink-400">
                  {countdown.minutes}
                </div>
                <div className="text-sm text-gray-300">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-400">
                  {countdown.seconds}
                </div>
                <div className="text-sm text-gray-300">Seconds</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                🚀 Register Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500"></div>
            </button>

            <button className="px-12 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 flex items-center gap-2">
              📄 Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500"></div>
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Festival by Numbers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-2">👥</span>
                <div className="text-5xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  5000+
                </div>
              </div>
              <div className="text-gray-300 font-medium">Participants</div>
              <div className="mt-3 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-2">🏛️</span>
                <div className="text-5xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                  50+
                </div>
              </div>
              <div className="text-gray-300 font-medium">Colleges</div>
              <div className="mt-3 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-2">🎯</span>
                <div className="text-5xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  100+
                </div>
              </div>
              <div className="text-gray-300 font-medium">Events</div>
              <div className="mt-3 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-2">💰</span>
                <div className="text-5xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  ₹5L+
                </div>
              </div>
              <div className="text-gray-300 font-medium">Prize Money</div>
              <div className="mt-3 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Competitions Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Competitions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Challenge yourself in these exciting competitions and showcase
              your skills to win amazing prizes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competitions.map((comp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                </div>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {comp.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                    {comp.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {comp.description}
                  </p>

                  {/* Prize section with enhanced styling */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-green-400 group-hover:text-green-300 transition-colors">
                      Prize: {comp.prize}
                    </div>
                    <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🏆
                    </div>
                  </div>

                  {/* Register button */}
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-semibold transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    Register Now
                  </button>

                  {/* Progress bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 text-8xl opacity-5 animate-float-up-down">
            💭
          </div>
          <div
            className="absolute bottom-20 right-20 text-6xl opacity-10 animate-bounce"
            style={{ animationDelay: "2s" }}
          >
            ⭐
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What Students Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our amazing participants who made unforgettable memories
              at Abhyudaya
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-4xl text-blue-400/30 group-hover:text-blue-400/50 transition-colors">
                  "
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  {/* Avatar with enhanced styling */}
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-blue-300 text-lg group-hover:text-blue-200 transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {testimonial.college}
                      </div>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-gray-300 text-lg italic leading-relaxed group-hover:text-gray-200 transition-colors">
                    "{testimonial.text}"
                  </p>

                  {/* Star rating */}
                  <div className="flex items-center mt-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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

          {/* Enhanced Gallery Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {memories
              .filter(
                (memory) => activeTab === "all" || memory.category === activeTab
              )
              .map((memory, index) => (
                <div
                  key={memory.id}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 aspect-square backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                  {/* Photo placeholder with enhanced styling */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-500/10 to-purple-500/10">
                    <div className="text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300">
                      📸
                    </div>
                    {/* Floating photo effect */}
                    <div className="absolute top-4 right-4 text-2xl opacity-0 group-hover:opacity-60 transition-all duration-300 animate-bounce">
                      ✨
                    </div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg group-hover:text-pink-300 transition-colors">
                        {memory.title}
                      </h3>
                      <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {memory.category === "competition" && "🏆"}
                        {memory.category === "ceremony" && "🎊"}
                        {memory.category === "cultural" && "🎨"}
                        {memory.category === "workshop" && "🔧"}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm capitalize mb-3 group-hover:text-gray-200 transition-colors">
                      {memory.category}
                    </p>

                    {/* View button */}
                    <button className="w-full py-2 bg-gradient-to-r from-pink-500/80 to-purple-500/80 hover:from-pink-500 hover:to-purple-500 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-sm">
                      View Full Size
                    </button>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-30"></div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="mb-8">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Join Abhyudaya?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Don't miss out on the most exciting tech festival of the year!
              Register now and be part of an unforgettable experience.
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                🚀 Register for Competitions
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500"></div>
            </button>

            <button className="group relative border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-12 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                📄 Download Brochure
              </span>
              <div className="absolute inset-0 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                📧
              </div>
              <div className="text-sm text-gray-300">Contact Us</div>
              <div className="text-purple-300 font-medium">
                info@abhyudaya.in
              </div>
            </div>

            <div className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <div className="text-sm text-gray-300">Call Us</div>
              <div className="text-purple-300 font-medium">+91 98765 43210</div>
            </div>

            <div className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                🌐
              </div>
              <div className="text-sm text-gray-300">Follow Us</div>
              <div className="text-purple-300 font-medium">@abhyudaya_fest</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abhyudaya;
