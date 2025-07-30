import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const magazineData = [
  {
    title: "Engineering India: Empowering Minds",
    desc: "How Engineering India nurtures innovation & leadership.",
    link: "/articles/article1.pdf",
  },
  {
    title: "Vidarbha Vaibhav Unveiled",
    desc: "A Glimpse into the excellence from Vidarbha region.",
    link: "/articles/article2.pdf",
  },
  {
    title: "Campus Chronicles",
    desc: "Event highlights from colleges across the region.",
    link: "/articles/article3.pdf",
  },
];

const eventGallery = [
  { 
    src: "/images/event1.png",
    title: "Trail of Ingenuity",
    description: "Organic farming awareness session at Gaushala, Devtapar near Ramtek Gadhmandir. Sanchalak highlighted sustainable practices combining traditional methods with modern knowledge."
  },
  { 
    src: "/images/event2.png",
    title: "Rangeet Talim",
    description: "Educational outreach program where coordinators teach underprivileged students from slum areas, providing quality education to those who cannot afford it."
  },
  { 
    src: "/images/event3.png",
    title: "Yodhini - Self Defense Workshop",
    description: "Multi-college self-defense training program where certified instructors teach essential safety techniques to students across Engineering India chapters."
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

// Magazine Navbar Component
const MagazineNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
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
  
  const navigate = useNavigate();

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
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
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

  const handleNavigation = (item) => {
    if (item === "Magazine") {
      // Already on magazine page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === "Home") {
      navigate('/');
    } else {
      // Navigate to home and then scroll to section
      navigate('/');
      setTimeout(() => {
        if (item === "Our Events") {
          document.getElementById("events")?.scrollIntoView({ behavior: 'smooth' });
        } else {
          document.getElementById(item.toLowerCase().replace(" ", ""))?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-20 bg-[rgba(240,240,240,0.6)] backdrop-blur-[10px] shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2 md:px-2 md:py-2">
          {/* Logo */}
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="w-[180px] md:w-[180px] cursor-pointer" 
            onClick={() => navigate('/')}
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#0d023b] text-2xl z-30"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[2.5rem] text-[22px]">
            <ul className="flex gap-[2.5rem] list-none">
              {["Home", "Our Events", "Gallery", "About Us", "Magazine"].map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => handleNavigation(item)}
                  className={`cursor-pointer transition-transform duration-300 hover:scale-110 ${
                    item === "Magazine" ? "text-[#1e3a8a] font-semibold" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Join Us Button */}
            <button 
              onClick={() => setJoinModalOpen(true)}
              className="relative text-[#f8f5f5] text-[18px] font-medium rounded-[30px] bg-[#0d023b] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,_-6px_-6px_12px_#ffffff] px-[1.5em] py-[0.6em] min-h-[3vh] overflow-hidden z-10 hover:text-white hover:border-[#009087] active:text-[#666] active:shadow-[inset_4px_4px_12px_#53f0d3,_inset_-4px_-4px_12px_#53f0d3]"
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-[rgba(240,240,240,0.95)] backdrop-blur-[10px] z-20 flex flex-col items-center justify-center gap-8 pt-20">
            <ul className="flex flex-col items-center gap-8 text-[1.5rem] list-none">
              {["Home", "Our Events", "Gallery", "About Us", "Magazine"].map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => {
                    handleNavigation(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer transition-transform duration-300 hover:scale-110 ${
                    item === "Magazine" ? "text-[#1e3a8a] font-semibold" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => {
                setJoinModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-[#f8f5f5] text-[1.2rem] font-medium rounded-[30px] bg-[#0d023b] px-6 py-3"
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
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
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

const Magazines = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Include the navbar */}
      <MagazineNavbar />
      
      {/* Main content with top padding to account for fixed navbar */}
      <div className="bg-[rgba(173,216,230,0.35)] backdrop-blur-md min-h-screen text-gray-800 pt-20">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-[rgba(173,216,230,0.35)] to-[rgba(173,216,230,0.55)] py-20">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#2D1B69] font-extrabold tracking-wider">ENGINEERING</span>
              <br />
              <span className="flex justify-center items-center mt-6">
                <span className="text-[#FFFFFF] text-[3.5rem] md:text-[4rem] font-black px-[0.8rem] py-2 bg-gradient-to-r from-[#FF8C00] to-[#FF6347] rounded-lg shadow-lg">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] md:text-[4rem] font-black px-[0.8rem] py-2 bg-gradient-to-r from-[#FF8C00] to-[#FF6347] rounded-lg mx-1 shadow-lg">N</span>
                <span className="text-[#800080] text-[3.5rem] md:text-[4rem] font-black px-[0.8rem] py-2 bg-gradient-to-r from-[#F5F5DC] to-[#FFFAF0] rounded-lg shadow-lg">D</span>
                <span className="text-[#FFFFFF] text-[3.5rem] md:text-[4rem] font-black px-[0.8rem] py-2 bg-gradient-to-r from-[#228B22] to-[#32CD32] rounded-lg mx-1 shadow-lg">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] md:text-[4rem] font-black px-[0.8rem] py-2 bg-gradient-to-r from-[#006400] to-[#228B22] rounded-lg shadow-lg">A</span>
              </span>
            </h1>
            
            {/* Sanskrit Quote */}
            <div className="mt-8 px-4">
              <p className="text-[#B22222] text-xl md:text-2xl font-bold tracking-wide">
                || यः करोति मनोभूत्यानि न तस्यास्ति दुष्कृतम् ||
              </p>
              <p className="text-[#2D1B69] text-lg md:text-xl mt-2 font-semibold italic">
                "One who acts with pure intentions never faces failure"
              </p>
            </div>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mt-8 leading-relaxed font-medium text-[#1d0e4e]">
              Discover stories of <span className="text-[#ea7707] font-bold">Innovation</span>, celebrate <span className="text-[#138808] font-bold">Excellence</span>, and explore the future of engineering
            </p>
          </div>
        </div>

        <main className="py-16 px-6">
          {/* Featured Articles Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">
              Featured Articles
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
              Dive deep into the stories that shape our engineering community
            </p>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <Slider {...sliderSettings}>
                {magazineData.map((mag, idx) => (
                  <div key={idx} className="px-4">
                    <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                      <div className="h-2 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full mb-6"></div>
                      <h3 className="text-2xl font-bold mb-4 text-[#1d0e4e] leading-tight">{mag.title}</h3>
                      <p className="text-gray-600 mb-6 text-base leading-relaxed">{mag.desc}</p>
                      <a
                        href={mag.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-[#1d0e4e] to-[#3b82f6] text-white px-6 py-3 rounded-full font-semibold hover:from-[#3b82f6] hover:to-[#1d0e4e] transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Read Article
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Event Highlights Section */}
          <section className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">Event Highlights</h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
              Capturing moments that define our engineering journey
            </p>
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <Slider {...sliderSettings}>
                {eventGallery.map((event, idx) => (
                  <div key={idx} className="px-4">
                    <div 
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                      onMouseEnter={() => setHoveredEvent(idx)}
                      onMouseLeave={() => setHoveredEvent(null)}
                    >
                      <img
                        src={event.src}
                        alt={event.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      
                      {/* Overlay with modern glassmorphism effect */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 ${hoveredEvent === idx ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                            <h3 className="text-white font-bold text-lg mb-2">{event.title}</h3>
                            <p className="text-white/90 text-sm leading-relaxed">{event.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Modern hover indicator */}
                      <div className={`absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 transition-all duration-300 ${hoveredEvent === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </section>

          {/* Why Read Section */}
          <section className="max-w-6xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">
              Why Read Engineering India?
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
              Your gateway to innovation, inspiration, and excellence
            </p>
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
              <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1d0e4e]">Inspiring Excellence</h3>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Dive into stories that celebrate innovation, capture youth spirit, and spotlight technological brilliance from across Vidarbha. Whether you're looking for inspiration, student achievements, or the future of engineering, this issue has something for everyone.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Join us in amplifying the voices shaping India's engineering future. Be curious, be inspired — and discover the full spectrum in the complete issue.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#1d0e4e] to-[#3b82f6] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

        {/* Footer */}
        <footer className="bg-white border-t mt-16 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center">
              <img src="/footer-logo.png" alt="Logo" className="w-20 h-20 mb-6" />
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
      </div>
    </>
  );
};

export default Magazines;