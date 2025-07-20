import React, { useEffect, useState } from "react";
import Hero3D from "../components/3D/Hero3D";

const FeatureCard = ({ icon, title, description, delay, gradient }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300 hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-8 w-1 h-1 bg-pink-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10">
        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4">{description}</p>
        <div className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold cursor-pointer">
          <span>Learn More</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showFAB, setShowFAB] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);

      // Show welcome notification after loading
      // setTimeout(() => {
      //   // setShowNotification(true);
      //   setTimeout(() => setShowNotification(false), 5000);
      // }, 1000);
    }, 2500);

    // Handle scroll events
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setShowFAB(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Enhanced Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-30"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-50"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="text-center relative z-10">
          <div className="relative mb-8">
            {/* Engineering India Logo */}
            <div className="flex justify-center mb-6">
              <img
                src="/engineering-india-logo.svg"
                alt="Engineering India Logo"
                className="h-24 md:h-32 w-auto hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
              />
            </div>

            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Engineering India
            </div>
            <div className="absolute -top-2 -right-2 flex gap-1">
              <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce shadow-lg shadow-orange-500/50"></div>
              <div
                className="w-4 h-4 bg-white rounded-full animate-bounce shadow-lg shadow-white/50"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-4 h-4 bg-green-500 rounded-full animate-bounce shadow-lg shadow-green-500/50"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div
              className="w-4 h-4 bg-purple-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.3s" }}
            ></div>
            <div
              className="w-4 h-4 bg-pink-400 rounded-full animate-pulse"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>

          <p className="text-gray-300 text-xl mb-4 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent font-semibold">
            Think Nationally, Act Locally
          </p>

          <div className="text-gray-400 text-sm animate-pulse">
            Connecting engineers across India...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <Hero3D />

        {/* Floating India Map Animation */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="25%"
              y1="25%"
              x2="66%"
              y2="33%"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10;0"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="66%"
              y1="33%"
              x2="33%"
              y2="66%"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10;0"
                dur="4s"
                repeatCount="indefinite"
                begin="1s"
              />
            </line>
            <line
              x1="33%"
              y1="66%"
              x2="75%"
              y2="75%"
              stroke="rgba(236, 72, 153, 0.3)"
              strokeWidth="1"
              strokeDasharray="5,5"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;10;0"
                dur="4s"
                repeatCount="indefinite"
                begin="2s"
              />
            </line>
          </svg>
        </div>

        <div
          className={`text-center z-10 px-6 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight relative group cursor-pointer">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300% group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-500">
              Engineering India
            </span>
            {/* Indian Flag Colors Accent */}
            <div className="absolute -top-2 -right-2 flex gap-1">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce group-hover:shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-300"></div>
              <div
                className="w-3 h-3 bg-white rounded-full animate-bounce group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-bounce group-hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all duration-300"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </h1>

          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-bold">
              <span className="bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                Think Nationally, Act Locally
              </span>
              <span className="animate-pulse text-blue-400 ml-2">|</span>
            </p>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group">
                <span className="text-blue-400 group-hover:scale-110 transition-transform">
                  🌐
                </span>
                <span className="text-sm text-blue-300 font-medium">
                  National Vision
                </span>
              </div>
              <div className="text-2xl animate-pulse">↔️</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-orange-500/20 rounded-full border border-green-400/30 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 group">
                <span className="text-green-400 group-hover:scale-110 transition-transform">
                  🏠
                </span>
                <span className="text-sm text-green-300 font-medium">
                  Local Action
                </span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              A student-driven social community connecting engineers from
              colleges across India to create meaningful impact through
              collaboration and innovation
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span>🤝</span> Join Our Community
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500"></div>
            </button>

            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25 flex items-center gap-2">
              <span>🚀</span> Explore Projects
            </button>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2">
            <div className="text-xs text-gray-400 font-medium mb-2">
              Scroll to explore
            </div>
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
                <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
                {/* Mouse wheel animation */}
                <div className="absolute top-3 w-1 h-2 bg-white/60 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="flex gap-1 mt-2">
              <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-ping"></div>
              <div
                className="w-1 h-1 bg-purple-400/60 rounded-full animate-ping"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1 h-1 bg-pink-400/60 rounded-full animate-ping"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Community Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon="🌐"
              title="National Network"
              description="Connect with engineering students from colleges across India and build lasting professional relationships."
              delay={0}
              gradient="bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
            />

            <FeatureCard
              icon="🏠"
              title="Local Impact"
              description="Collaborate on innovative projects that solve real-world problems and make a social impact in your community."
              delay={200}
              gradient="bg-gradient-to-br from-green-500/10 to-emerald-500/10"
            />

            <FeatureCard
              icon="🤝"
              title="Community Support"
              description="Get mentorship, share knowledge, and grow together in a supportive peer-to-peer environment."
              delay={400}
              gradient="bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            />

            <FeatureCard
              icon="🏆"
              title="Abhyudaya Festival"
              description="Our flagship community event bringing together talented students from across the nation."
              delay={600}
              gradient="bg-gradient-to-br from-orange-500/10 to-yellow-500/10"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 px-6 bg-black/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl mr-2">🏛️</span>
                <h3 className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  200+
                </h3>
              </div>
              <p className="text-gray-300 font-medium">Partner Colleges</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl mr-2">👥</span>
                <h3 className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                  15,000+
                </h3>
              </div>
              <p className="text-gray-300 font-medium">Community Members</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl mr-2">🚀</span>
                <h3 className="text-4xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                  500+
                </h3>
              </div>
              <p className="text-gray-300 font-medium">Projects Completed</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <span className="text-2xl mr-2">🗺️</span>
                <h3 className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                  25+
                </h3>
              </div>
              <p className="text-gray-300 font-medium">States Represented</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Engineering India and connect with like-minded students who are
            passionate about creating positive change in their communities and
            beyond.
          </p>
          <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              <span>✨</span> Become a Member
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-full bg-white opacity-20 scale-0 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500"></div>
          </button>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="py-6 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-y border-white/10 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              🎉{" "}
              <span className="font-semibold text-blue-400">
                Arjun from IIT Bombay
              </span>{" "}
              just joined the community
            </span>
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              🚀{" "}
              <span className="font-semibold text-purple-400">
                New tech project
              </span>{" "}
              launched in Bangalore
            </span>
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              📈{" "}
              <span className="font-semibold text-green-400">
                150+ students
              </span>{" "}
              collaborated this week
            </span>
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              🏆{" "}
              <span className="font-semibold text-pink-400">
                Hackathon winner
              </span>{" "}
              from NIT Trichy
            </span>
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              💡{" "}
              <span className="font-semibold text-orange-400">
                Innovation hub
              </span>{" "}
              opened in Delhi
            </span>
            <span className="text-gray-300 mx-8 flex items-center gap-2">
              🤝{" "}
              <span className="font-semibold text-cyan-400">
                Mentorship program
              </span>{" "}
              helping 500+ students
            </span>
          </div>
        </div>
      </section>

      {/* Welcome Notification */}
      {/* <div
        className={`fixed top-24 right-8 z-50 transition-all duration-500 ${
          showNotification
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg shadow-2xl border border-green-400/30 backdrop-blur-sm max-w-sm">
          <div className="flex items-center gap-3">
            <div className="text-2xl animate-bounce">🎉</div>
            <div className="flex-1">
              <div className="font-semibold">Welcome to Engineering India!</div>
              <div className="text-sm text-green-100">
                Join 15,000+ students making a difference
              </div>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-green-100 hover:text-white transition-colors p-1"
            >
              ✕
            </button>
          </div>
        </div>
      </div> */}

      {/* Floating Action Button */}
      <div
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${
          showFAB ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="relative group">
          {/* Main FAB */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-blue-500/50 group">
            <span className="text-2xl">💬</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Need help? Chat with us!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
          </div>

          {/* Pulse effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Quick Actions Mini Menu */}
      <div
        className={`fixed bottom-24 right-8 z-40 transition-all duration-500 ${
          showFAB ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
          >
            <span className="text-xl">⬆️</span>
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Back to Top
            </div>
          </button>
          <button className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group">
            <span className="text-xl">📞</span>
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Contact
            </div>
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group">
            <span className="text-xl">📧</span>
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Newsletter
            </div>
          </button>
          <button className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group">
            <span className="text-xl">🌟</span>
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Feedback
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
