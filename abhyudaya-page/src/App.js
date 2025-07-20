import React, { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ABHYUDAYA
          </h1>
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("competitions")}
              className="hover:text-blue-400 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 relative"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
        </div>

        <div
          className={`text-center relative z-10 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-bold mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              ABHYUDAYA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Ultimate Student Festival Experience
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">VIEW HIGHLIGHTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25">
              REGISTER NOW
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Abhyudaya
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Abhyudaya is the largest student-driven fest of Central India,
                bringing together
                <span className="text-blue-400 font-semibold">
                  {" "}
                  2500+ participants
                </span>{" "}
                and
                <span className="text-purple-400 font-semibold">
                  {" "}
                  200+ coordinators
                </span>{" "}
                in an extraordinary celebration of talent and innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our festival encompasses a wide range of events across multiple
                technical and non-technical domains, offering a vibrant platform
                for students to showcase their talents and compete at the
                highest level.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover-lift">
                <h3 className="text-3xl font-bold text-blue-400 mb-2">2500+</h3>
                <p className="text-gray-300">Participants</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover-lift">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">
                  200+
                </h3>
                <p className="text-gray-300">Coordinators</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-red-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover-lift">
                <h3 className="text-3xl font-bold text-pink-400 mb-2">50+</h3>
                <p className="text-gray-300">Events</p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover-lift">
                <h3 className="text-3xl font-bold text-green-400 mb-2">3</h3>
                <p className="text-gray-300">Days of Fun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Competitions & Events
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing competitions designed to challenge your skills
              and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Hackathon",
                icon: "💻",
                color: "from-blue-500 to-cyan-500",
                desc: "48-hour coding challenge",
              },
              {
                name: "Ultimate Socio-Technocrat",
                icon: "🚀",
                color: "from-purple-500 to-pink-500",
                desc: "Tech meets social impact",
              },
              {
                name: "Creative Drawing",
                icon: "🎨",
                color: "from-green-500 to-blue-500",
                desc: "Express your artistic vision",
              },
              {
                name: "Painting",
                icon: "🖌️",
                color: "from-yellow-500 to-orange-500",
                desc: "Colors come alive",
              },
              {
                name: "Debate",
                icon: "🗣️",
                color: "from-red-500 to-pink-500",
                desc: "Battle of words and wits",
              },
              {
                name: "Drama",
                icon: "🎭",
                color: "from-indigo-500 to-purple-500",
                desc: "Stage your creativity",
              },
              {
                name: "Speech",
                icon: "🎤",
                color: "from-teal-500 to-green-500",
                desc: "Voice your thoughts",
              },
              {
                name: "Youth Parliament",
                icon: "🏛️",
                color: "from-orange-500 to-red-500",
                desc: "Democracy in action",
              },
            ].map((comp, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover-lift hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${comp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{comp.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {comp.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{comp.desc}</p>
                  <button className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to be part of something amazing? Join Abhyudaya 2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
              Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300">
              Follow Us
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-500">
              © 2025 Abhyudaya - Engineering India. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
