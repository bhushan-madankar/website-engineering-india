import React, { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Users,
  Target,
  Heart,
  Award,
  Globe,
  BookOpen,
  Lightbulb,
  Star
} from "lucide-react";
import { FaUsers, FaUniversity, FaGraduationCap, FaHandshake, FaBars, FaTimes } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Navbar } from "./Home";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black overflow-hidden">
      <Navbar />
      
      {/* Subtle animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-black/10 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-black/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-black/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-black/10 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-black/15 rounded-full animate-pulse delay-300"></div>

        {/* Very subtle floating elements */}
        <div className="absolute -top-20 -right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Hero Section - Added top padding to account for fixed navbar */}
      <section className="relative pt-24 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold animate-fadeInUp">
            <span className="text-[4.2rem] text-[#1d0e4e] font-extrabold tracking-wider drop-shadow-sm hover:drop-shadow-md transition-all duration-500">
              ABOUT
            </span>
            <br />
            <span className="flex justify-center items-center mt-2 animate-slideInUp delay-300">
              <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#ea7707] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">U</span>
              <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#fe9124] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">S</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-4xl max-w-[900px] mt-8 leading-tight font-bold text-center animate-fadeInUp delay-500">
            Think <span className="text-[#00008b] font-bold hover:scale-105 transition-transform duration-300 inline-block">Nationally</span>, Act <span className="text-[#059669] font-bold hover:scale-105 transition-transform duration-300 inline-block">Locally</span>
          </p>
          
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#ea7707] to-[#fe9124] mx-auto rounded-full animate-fadeInUp delay-700"></div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1d0e4e] animate-fadeInUp">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/30 to-transparent rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-full"></div>
                
                {/* Placeholder for images */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/60 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-sm font-medium">Journey Photo {i + 1}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Vision & Mission Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-fadeInUp">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00008b] to-[#0066cc] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#1d0e4e]">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                To create a world where global thinking meets local action, fostering sustainable communities that drive innovation and positive change across the nation.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-bl-full"></div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl hover:scale-105 transition-all duration-500 animate-fadeInUp delay-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#059669] to-[#10b981] rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-[#1d0e4e]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                We are committed to empowering local communities through strategic initiatives aligned with national goals, building bridges between academia and real-world impact.
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-green-200/20 to-transparent rounded-bl-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1d0e4e] mb-4 animate-fadeInUp">Our Core Values</h2>
            <p className="text-xl text-gray-600 font-medium animate-fadeInUp delay-200">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                number: "1", 
                title: "Community First", 
                gradient: "from-[#ea7707] to-[#fe9124]",
                icon: <Users className="w-8 h-8" />,
                description: "Every decision we make prioritizes the well-being and growth of our local communities, fostering collaboration and mutual support."
              },
              { 
                number: "2", 
                title: "Sustainable Impact", 
                gradient: "from-[#059669] to-[#10b981]",
                icon: <Lightbulb className="w-8 h-8" />,
                description: "We focus on creating lasting change that benefits both present and future generations through innovative solutions."
              },
              { 
                number: "3", 
                title: "Collaborative Growth", 
                gradient: "from-[#00008b] to-[#0066cc]",
                icon: <Award className="w-8 h-8" />,
                description: "We believe in the power of partnerships and collective action to achieve greater goals and drive meaningful change."
              },
            ].map(({ number, title, gradient, icon, description }, index) => (
              <div 
                key={number} 
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {icon}
                  <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {number}
                  </span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-[#1d0e4e] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                  {title}
                </h4>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {description}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-16 px-4 bg-[#1d0e4e] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp">Connect With Us</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg font-medium animate-fadeInUp delay-200">
            Join our community and stay updated with our latest initiatives. Together, we can make a difference.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp delay-300">
            {[
              { Icon: Facebook, name: "Facebook", color: "hover:bg-blue-600" },
              { Icon: Twitter, name: "Twitter", color: "hover:bg-blue-400" },
              { Icon: Instagram, name: "Instagram", color: "hover:bg-pink-600" },
              { Icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-700" }
            ].map(({ Icon, name, color }, i) => (
              <button
                key={i}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 text-white ${color} hover:text-white rounded-full p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">{name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm animate-fadeInUp delay-400">
            {[
              { Icon: Mail, text: "contact@engineeringindia.com", gradient: "from-red-500 to-pink-500" },
              { Icon: Phone, text: "+91 (555) 123-4567", gradient: "from-green-500 to-emerald-500" },
              { Icon: MapPin, text: "Nagpur, Maharashtra, IN", gradient: "from-blue-500 to-indigo-500" }
            ].map(({ Icon, text, gradient }, i) => (
              <div key={i} className="group flex items-center justify-center space-x-3 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('about');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    interest: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.college.trim()) newErrors.college = 'College is required';
    if (!formData.year.trim()) newErrors.year = 'Year is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            college: '',
            year: '',
            interest: ''
          });
          setJoinModalOpen(false);
        }, 2000);
      }, 1500);
    }
  };

  const navItems = [
    { name: "Home", route: "/index.js", fileName: "index.js" },
    { name: "Our Colleges", route: "/ClgSec", fileName: "ClgSec.js" },
    { name: "About Us", route: "/About", fileName: "About.js" },
    { name: "Abhyudaya", route: "/Abhyudaya", fileName: "Abhyudaya.js" },
    { name: "Magazine", route: "/Magazine", fileName: "Magazine.js" }
  ];

  const handleNavigation = (route, name, fileName) => {
    setCurrentPage(name.toLowerCase().replace(' ', ''));
    setMobileMenuOpen(false);
    
    // In a real React app, you would use React Router for navigation
    // For now, we'll just show which file should be opened
    console.log(`Navigate to: ${fileName} at route: ${route}`);
    
    // You can implement actual navigation based on your routing setup
    // Example with React Router: navigate(route);
    // Or window.location.href = route; for simple navigation
  };

  return (
    <>
      {/* Fixed Navbar with higher z-index */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavigation("/", "Home", "index.js")}>
              <img src="/images/logo.png" alt="Engineering India" className="w-[180px] md:w-[180px] hover:scale-105 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 text-2xl z-30 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-lg">
            <ul className="flex gap-8 list-none">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`cursor-pointer font-medium transition-all duration-300 hover:scale-105 relative group ${
                    currentPage === item.name.toLowerCase().replace(' ', '') 
                      ? 'text-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => handleNavigation(item.route, item.name, item.fileName)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                    currentPage === item.name.toLowerCase().replace(' ', '')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </li>
              ))}
            </ul>

            {/* Join Us Button */}
            <button
              onClick={() => setJoinModalOpen(true)}
              className="relative text-[#f8f5f5] text-[18px] font-medium rounded-[30px] bg-[#0d023b] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,_-6px_-6px_12px_#ffffff] px-[1.5em] py-[0.6em] min-h-[3vh] overflow-hidden z-10 hover:text-white hover:border-[#009087] hover:scale-105 active:text-[#666] active:shadow-[inset_4px_4px_12px_#53f0d3,_inset_-4px_-4px_12px_#53f0d3] transition-all duration-300"
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Fixed positioning */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-[rgba(240,240,240,0.98)] backdrop-blur-[15px] z-40 flex flex-col items-center justify-center gap-8 pt-20">
            <ul className="flex flex-col gap-8 list-none">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  className={`cursor-pointer font-medium transition-all duration-300 hover:scale-105 relative group text-center text-xl ${
                    currentPage === item.name.toLowerCase().replace(' ', '') 
                      ? 'text-indigo-600' 
                      : 'text-gray-700 hover:text-indigo-600'
                  }`}
                  onClick={() => handleNavigation(item.route, item.name, item.fileName)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                    currentPage === item.name.toLowerCase().replace(' ', '')
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setJoinModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-[#f8f5f5] text-[1.2rem] font-medium rounded-[30px] bg-[#0d023b] px-6 py-3 transition-all duration-300 hover:bg-[#0d023b]/90"
            >
              Join Us
            </button>
          </div>
        )}
      </nav>

      {/* Join Us Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            <button
              onClick={() => setJoinModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-center text-[#0d023b] mb-6">
                Join Engineering India
              </h2>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`pl-10 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]`}
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`pl-10 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`pl-10 block w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]`}
                          placeholder="9876543210"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>

                    {/* College Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        College/University
                      </label>
                      <input
                        type="text"
                        name="college"
                        value={formData.college}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border ${errors.college ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]`}
                        placeholder="Your college name"
                      />
                      {errors.college && <p className="mt-1 text-sm text-red-600">{errors.college}</p>}
                    </div>

                    {/* Year Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Year of Study
                      </label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className={`block w-full rounded-md border ${errors.year ? 'border-red-500' : 'border-gray-300'} shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]`}
                      >
                        <option value="">Select your year</option>
                        <option value="First Year">First Year</option>
                        <option value="Second Year">Second Year</option>
                        <option value="Third Year">Third Year</option>
                        <option value="Final Year">Final Year</option>
                      </select>
                      {errors.year && <p className="mt-1 text-sm text-red-600">{errors.year}</p>}
                    </div>

                    {/* Interests Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Areas of Interest (Optional)
                      </label>
                      <textarea
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        rows={3}
                        className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0d023b] focus:border-[#0d023b]"
                        placeholder="Technical, cultural, social work, etc."
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0d023b] hover:bg-[#0d023b]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d023b] transition-colors duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : 'Submit Application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const stats = [
  { label: "Coordinators", value: "250+", icon: <FaUsers size={45} />, color: "from-blue-500 to-blue-600" },
  { label: "Colleges Collaborated", value: "5+", icon: <FaUniversity size={45} />, color: "from-green-500 to-green-600" },
  { label: "Alumni Chapters", value: "15+", icon: <FaGraduationCap size={45} />, color: "from-purple-500 to-purple-600" },
  { label: "Volunteers", value: "250+", icon: <FaHandshake size={45} />, color: "from-orange-500 to-orange-600" },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white/60 backdrop-blur-sm relative overflow-hidden"
    >
      <div id="stats-section" className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1d0e4e] to-[#00008b] mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 font-medium">Numbers that tell our story</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                inView ? 'animate-fadeInUp opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1d0e4e] group-hover:to-[#00008b] transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/30 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-white/30 to-transparent rounded-tr-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-2xl"></div>
    </section>
  );
};

// Footer Component - Sticky at bottom
const Footer = () => {
  return (
    <footer className="sticky top-[100vh] bg-white border-t mt-5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <img src="/images/logo.png" alt="Logo" className="w-30 h-20 mb-6" />

          <div className="flex flex-wrap justify-center gap-8 text-gray-600 text-lg">
            <a href="#about" className="hover:text-[#1d0e4e] transition-colors duration-300">About</a>
            <a href="#events" className="hover:text-[#1d0e4e] transition-colors duration-300">Events</a>
            <a href="#blog" className="hover:text-[#1d0e4e] transition-colors duration-300">Blog</a>
            <a href="#team" className="hover:text-[#1d0e4e] transition-colors duration-300">Team</a>
            <a href="#contact" className="hover:text-[#1d0e4e] transition-colors duration-300">Contact</a>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>&copy; 2024 Engineering India. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutPage;