import React from "react";
import Hero3D from "../components/3D/Hero3D";

const StatCard = ({ number, label, icon }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105">
    <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="text-3xl font-bold text-white mb-2 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {number}
    </div>
    <div className="text-gray-400 text-center font-medium">{label}</div>
  </div>
);

const FeatureCard = ({ title, description, icon, gradient }) => (
  <div className="group relative">
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      <div
        className={`text-5xl mb-6 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
        {description}
      </p>
    </div>
    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-blue-400/0 group-hover:from-purple-400/5 group-hover:via-pink-400/5 group-hover:to-blue-400/5 rounded-2xl transition-all duration-500 -z-10"></div>
  </div>
);

const TeamMember = ({ name, role, image, description }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group hover:scale-105">
    <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
      {image || name.charAt(0)}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-purple-400 transition-colors">
      {name}
    </h3>
    <p className="text-purple-400 text-center font-medium mb-3">{role}</p>
    <p className="text-gray-400 text-sm text-center leading-relaxed">
      {description}
    </p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-12">
            <img
              src="/engineering-india-logo.svg"
              alt="Engineering India Logo"
              className="h-20 md:h-24 w-auto mx-auto mb-8 hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Engineering India is a vibrant student-driven social community
              that bridges the gap between academic excellence and real-world
              impact across the nation.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
              "Think Nationally, Act Locally"
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission embodies the spirit of unity in diversity that defines
              India. We believe in fostering national-level thinking while
              empowering local action, creating a network of engineering
              students who are passionate about innovation, social impact, and
              community development.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="50+" label="Partner Colleges" icon="🏛️" />
            <StatCard number="10K+" label="Active Students" icon="👥" />
            <StatCard number="100+" label="Events Organized" icon="🎉" />
            <StatCard number="25+" label="Cities Reached" icon="🌍" />
          </div>
        </section>

        {/* What We Do Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Technical Excellence"
              description="We organize workshops, hackathons, and coding competitions to enhance technical skills and promote innovation among engineering students."
              icon="💻"
              gradient="from-blue-400 to-cyan-400"
            />
            <FeatureCard
              title="Community Building"
              description="Creating strong networks between students across different colleges and cities, fostering collaboration and knowledge sharing."
              icon="🤝"
              gradient="from-purple-400 to-pink-400"
            />
            <FeatureCard
              title="Industry Connect"
              description="Bridging the gap between academia and industry through internship programs, career guidance, and mentorship opportunities."
              icon="🏢"
              gradient="from-orange-400 to-red-400"
            />
            <FeatureCard
              title="Social Impact"
              description="Encouraging students to use their engineering skills for social good through community projects and sustainable development initiatives."
              icon="🌱"
              gradient="from-green-400 to-emerald-400"
            />
            <FeatureCard
              title="Cultural Exchange"
              description="Celebrating India's diverse culture through festivals like Abhyudaya, promoting unity and cultural understanding."
              icon="🎭"
              gradient="from-indigo-400 to-purple-400"
            />
            <FeatureCard
              title="Leadership Development"
              description="Empowering students with leadership skills through various roles, responsibilities, and leadership training programs."
              icon="⭐"
              gradient="from-yellow-400 to-orange-400"
            />
          </div>
        </section>

        {/* Vision & Values */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To become India's largest and most impactful engineering student
                community, where every member is empowered to contribute to
                national development while making meaningful changes in their
                local communities.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Values
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Excellence in Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Unity in Diversity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Social Responsibility</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Innovation & Creativity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Collaborative Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Arjun Patel"
              role="Founder & President"
              description="Computer Science student passionate about building communities and driving social change through technology."
            />
            <TeamMember
              name="Priya Sharma"
              role="Vice President"
              description="Mechanical Engineering student focused on sustainable development and women empowerment in STEM."
            />
            <TeamMember
              name="Rahul Kumar"
              role="Technical Head"
              description="Software Engineering enthusiast leading our technical initiatives and innovation programs."
            />
            <TeamMember
              name="Ananya Singh"
              role="Events Coordinator"
              description="Event management expert organizing impactful programs that bring students together nationwide."
            />
            <TeamMember
              name="Vikram Gupta"
              role="Industry Relations"
              description="Building bridges between academia and industry to create better opportunities for students."
            />
            <TeamMember
              name="Sneha Reddy"
              role="Community Manager"
              description="Fostering meaningful connections and ensuring every member feels valued in our growing community."
            />
          </div>
        </section>

        {/* Join Us Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of engineering students across India who are
              already making a difference. Together, we can build a better
              future for our nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
                🚀 Join Our Community
              </button>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105">
                📧 Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* Footer spacing */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default About;
