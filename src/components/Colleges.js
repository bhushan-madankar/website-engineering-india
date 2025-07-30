import React, { useState, useEffect } from 'react';
import { Users, Globe, Star, Award, BookOpen, Zap } from 'lucide-react';

const CollegesSection = () => {
  const [animationClass, setAnimationClass] = useState('');
  const [hoveredCard, setHoveredCard] = useState(null);

  const colleges = [
    {
      name: "Cummins College of Engineering",
      shortName: "COEP",
      logo: "🏛️",
      socialMedia: "@engineering_india_ccewn",
      color: "bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200",
      borderColor: "border-rose-300",
      accentColor: "rose",
      description: "Excellence in Engineering Education",
      image: "./images/image1.png"
    },
    {
      name: "RBU (Ramdeobaba University)",
      shortName: "RBU",
      logo: "🎓",
      socialMedia: "@engineeringindia_rbu",
      color: "bg-gradient-to-br from-emerald-100 via-green-100 to-teal-200",
      borderColor: "border-emerald-300",
      accentColor: "emerald",
      description: "Innovation Through Education",
      image: "./images/rbu.jpg"
    },
    {
      name: "Yeshwantrao Chavan College of Engineering",
      shortName: "YCCE",
      logo: "⚡",
      socialMedia: "@engineering.india_ycce",
      color: "bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200",
      borderColor: "border-amber-300",
      accentColor: "amber",
      description: "Powering Future Engineers",
      image: "./images/YCCE.jpg"
    },
    {
      name: "G.H. Raisoni College of Engineering",
      shortName: "RAISONI",
      logo: "🚀",
      socialMedia: "@engineering_india.raisoni",
      color: "bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-200",
      borderColor: "border-violet-300",
      accentColor: "violet",
      description: "Launching Tomorrow's Leaders",
      image: "./images/Raisoni.jpg"
    },
    {
      name: "St. Vincent Pallotti College",
      shortName: "PALLOTTI",
      logo: "⭐",
      socialMedia: "@engineering.india_svpcet",
      color: "bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-200",
      borderColor: "border-sky-300",
      accentColor: "sky",
      description: "Shining Bright in Education",
      image: "./images/Pallotti.jpg"
    },
    {
      name: "K.D.K. College of Engineering",
      shortName: "KDK",
      logo: "💎",
      socialMedia: "@engineering.india_kdkce",
      color: "bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-200",
      borderColor: "border-yellow-300",
      accentColor: "yellow",
      description: "Crafting Precious Minds",
      image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400&h=300&fit=crop&crop=center"
    },
    {
      name: "Priyadarshini College of Engineering",
      shortName: "PRIYADARSHINI",
      logo: "🌟",
      socialMedia: "@engineering_india_pce",
      color: "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-200",
      borderColor: "border-indigo-300",
      accentColor: "indigo",
      description: "Illuminating Engineering Excellence",
      image: "./images/pce.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('animate-pulse');
      setTimeout(() => setAnimationClass(''), 1500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen py-20 px-6 relative overflow-hidden mt-24"
      style={{ backgroundColor: 'rgba(173,216,230,0.35)' }}
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-20 h-20 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-32 right-16 w-28 h-28 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-16 right-1/3 w-16 h-16 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-12 w-32 h-32 bg-gradient-to-br from-purple-300 to-violet-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Animated Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="mb-8">
          <h1 className={`text-7xl font-black text-blue-900 mb-6 tracking-tight ${animationClass}`}>
            OUR COLLEGES
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
            <Star className="text-purple-500 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          </div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Discover our network of premier engineering institutions, where innovation meets excellence
            and dreams transform into reality
          </p>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {colleges.map((college, index) => (
            <div
              key={index}
              className={`${college.color} ${college.borderColor} border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* College Header */}
              <div className="flex items-start mb-8">
                <div className={`text-5xl mr-4 animate-bounce transition-transform duration-300 ${hoveredCard === index ? 'scale-125' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}>
                  {college.logo}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 leading-tight mb-2">
                    {college.name}
                  </h2>
                  <p className="text-sm text-gray-600 italic font-medium">
                    {college.description}
                  </p>
                </div>
              </div>

              {/* College Details */}
              <div className="space-y-5 mb-8">
                <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-3 text-gray-600" />
                    <div>
                      <span className="font-bold text-lg">Engineering Team</span>
                      <p className="text-xs text-gray-500">Active Community</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl p-4 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex items-center text-gray-700">
                    <Globe className="w-5 h-5 mr-3 text-gray-600" />
                    <div>
                      <span className="font-bold text-lg">{college.socialMedia}</span>
                      <p className="text-xs text-gray-500">Social Media Handle</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* College Image */}
              <div className="mb-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-bold text-lg">{college.shortName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Premier Colleges", value: "7", icon: <BookOpen className="w-8 h-8" />, color: "from-pink-200 to-rose-300", textColor: "text-rose-700" },
            { label: "Engineering Teams", value: "7", icon: <Users className="w-8 h-8" />, color: "from-blue-200 to-sky-300", textColor: "text-sky-700" },
            { label: "Campus Locations", value: "7", icon: <Globe className="w-8 h-8" />, color: "from-green-200 to-emerald-300", textColor: "text-emerald-700" },
            { label: "Social Channels", value: "7", icon: <Zap className="w-8 h-8" />, color: "from-purple-200 to-violet-300", textColor: "text-violet-700" }
          ].map((stat, index) => (
            <div key={index} className={`bg-gradient-to-br ${stat.color} border-2 border-white/60 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm`}>
              <div className={`${stat.textColor} mb-4 flex justify-center animate-bounce`} style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
              </div>
              <div className={`text-4xl font-black ${stat.textColor} mb-2`}>{stat.value}</div>
              <div className={`text-sm ${stat.textColor} font-bold uppercase tracking-wide`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced About Our College Network Section */}
        <div className="bg-gradient-to-r from-white/50 via-blue-50/50 to-white/50 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border-2 border-white/40 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-black text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Our College Network
              </h2>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                <Award className="text-purple-500 animate-pulse w-6 h-6" />
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A constellation of excellence across Nagpur
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
                    <span className="text-4xl mr-4 animate-pulse">🌟</span>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-4">
                    Our mission is to inspire students to bring positive change in society by turning their technical knowledge into action. We believe in the power of teamwork, awareness, and creativity to solve real-world problems. By building a strong, passionate community, we aim to support local causes and make a lasting, meaningfulimpact.
                  </p>
                  
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/60 rounded-2xl p-8 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-3xl font-bold text-gray-800 flex items-center mb-6">
                    <span className="text-4xl mr-4 animate-bounce">🚀</span>
                    Our Achievements
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Engineering India is a forward-thinking initiative that empowers students to explore their creativity and leadership potential. Through interactive sessions and hands-on activities, it promotes confidence, teamwork, and real-world problem-solving. Backed by Vidarbha Vaibhav, the platform is known for its contribution to educational excellence and community development. Inspired by Swami Vivekananda’s call to action, it motivates students to collaborate, grow, and aim high — creating a strong foundation for innovation, connection, and personal success."
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start group">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-4 mt-2 group-hover:animate-ping"></div>
                        <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <p className="text-2xl font-bold italic leading-relaxed">
                  "Together, we're not just building engineering careers – we're architecting the future of technology, innovation, and human progress in India and beyond."
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" />
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" style={{ animationDelay: '0.2s' }} />
                  <Star className="text-yellow-300 animate-pulse w-6 h-6" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegesSection;