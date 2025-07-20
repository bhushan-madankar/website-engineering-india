import React, { useEffect, useState } from "react";
import Hero3D from "../components/3D/Hero3D";

const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300 hover-lift"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <button className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
          Learn More →
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <Hero3D />

        <div
          className={`text-center z-10 px-6 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Engineering India
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed font-semibold">
            Think Nationally, Act Locally
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            A student-driven social community connecting engineers from colleges
            across India to create meaningful impact through collaboration and
            innovation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25">
              Explore Projects
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
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
              icon="�"
              title="National Network"
              description="Connect with engineering students from colleges across India and build lasting professional relationships."
              delay={0}
            />

            <FeatureCard
              icon="�"
              title="Student Projects"
              description="Collaborate on innovative projects that solve real-world problems and make a social impact."
              delay={200}
            />

            <FeatureCard
              icon="🤝"
              title="Community Support"
              description="Get mentorship, share knowledge, and grow together in a supportive peer-to-peer environment."
              delay={400}
            />

            <FeatureCard
              icon="🏆"
              title="Abhyudaya Festival"
              description="Our flagship community event bringing together talented students from across the nation."
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">200+</h3>
              <p className="text-gray-300">Partner Colleges</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">
                15,000+
              </h3>
              <p className="text-gray-300">Community Members</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-pink-400 mb-2">500+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">25+</h3>
              <p className="text-gray-300">States Represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join Engineering India and connect with like-minded students who are
            passionate about creating positive change in their communities and
            beyond.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Become a Member
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
