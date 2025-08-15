import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaUniversity, FaGraduationCap, FaHandshake, FaBars, FaTimes } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const images = [
  "/images/aboutpage.avif",
  "/images/image2.png",
  "/images/image3.png",
  "/images/RASHTRABHIMAN.avif",
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};
const Page = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[rgba(210, 230, 250, 0.4)] backdrop-blur-xs min-h-screen text-gray-800 pt-18 relative overflow-hidden">
        
        {/* Interactive Particles Background */}
        {init && (
          <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10"
            options={{
              background: { color: "rgba(210, 230, 250, 0.4)" },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" }
                },
                modes: {
                  repulse: { distance: 100 },
                  push: { quantity: 4 }
                }
              },
              particles: {
                color: { value: "#1d0e4e" },
                links: {
                  color: "#1d0e4e",
                  distance: 150,
                  enable: true,
                  opacity: 0.3,
                  width: 1
                },
                move: { enable: true, speed: 2 },
                number: { value: 80 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 4 } }
              },
              detectRetina: true
            }}
          />
        )}

        <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row">
          {/* Left Text */}
          <motion.div
            id="home"
            className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-20 text-center md:mr-[3rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold"
            >
              <span className="text-[4.2rem] text-[#1d0e4e] font-extrabold tracking-wider drop-shadow-sm py-2">
                ENGINEERING
              </span>
              <br />
              <span className="flex justify-center items-center mt-2">
                {["I", "N", "D", "I", "A"].map((letter, index) => {
                  const colors = [
                    "#ea7707",
                    "#fe9124",
                    "#f9f8f9",
                    "#138808",
                    "#0b6623"
                  ];
                  const textColors = [
                    "#FFFFFF",
                    "#FFFFFF",
                    "rgb(128,0,128)",
                    "#FFFFFF",
                    "#FFFFFF"
                  ];
                  return (
                    <motion.span
                      key={letter}
                      variants={fadeUp}
                      custom={index + 1}
                      whileHover={{ scale: 1.1 }}
                      className={`text-[3.5rem] font-black px-[0.5rem] py-2 rounded-sm shadow-md`}
                      style={{
                        backgroundColor: colors[index],
                        color: textColors[index]
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={6}
              className="text-[0.8rem] md:text-4xl max-w-[900px] mt-5 leading-tight font-[poppins] font-bold text-center"
            >
              Think{" "}
              <span className="text-[#00008b] font-bold">Nationally</span>, Act{" "}
              <span className="text-[#059669] font-bold">Locally</span>
            </motion.p>

            <motion.button
              variants={fadeUp}
              custom={7}
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group w-[160px] h-[40px] rounded-full bg-gradient-to-br from-[#faf5f3] to-[#d2f2fc] shadow-[0_20px_30px_-6px_rgba(238,103,97,0.5)] mt-6 text-black text-[1rem] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[3px] hover:shadow-none active:opacity-50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Our Events</span>
              <span className="relative z-10">
                <img
                  src="/images/arrow.png"
                  alt="arrow"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </span>
            </motion.button>
          </motion.div>

          {/* Right Slider */}
          <motion.div
            className="hidden md:flex md:w-1/2 md:justify-center md:px-5 md:py-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageSlider />
          </motion.div>
        </div>

        {/* Mobile Slider */}
        <motion.div
          className="block md:hidden w-full px-2 py-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MobileImageSlider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StatsSection />
        </motion.div>
      </div>
    </>
  );
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // 2 seconds
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center py-[50px] mt-[40px] mr-[7rem]">
      <div className="relative w-[180vw] max-w-[850px] h-[550px] overflow-hidden rounded-[20px] shadow-[0_10px_40px_rgba(17,1,1,0.15)] group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-full"></div>

        {/* Main image container */}
        <div className="relative w-full h-full overflow-hidden rounded-[20px]">
          {images.map((img, index) => (
            <div key={index} className="absolute inset-0">
              <img
                src={img}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentIndex
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-105 blur-sm"
                  }`}
              />
              {/* Image overlay for better contrast */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}></div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-8 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/60 hover:bg-white/80 hover:scale-110"
                }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced slide counter with progress */}
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10">
          <div className="flex items-center space-x-2">
            <span>{currentIndex + 1} / {images.length}</span>
            <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 left-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-30 border border-white/10"
        >
          {isPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Image title overlay */}
        <div className="absolute bottom-16 left-6 right-6 text-center z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            <p className="text-white text-sm font-medium">Slide {currentIndex + 1}</p>
          </div>
        </div>

        {/* Loading progress bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-loading-bar"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const MobileImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // 2 seconds
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-[480px] h-[250px] overflow-hidden rounded-[15px] shadow-[0_10px_20px_rgba(17,1,1,0.1)] group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
        {/* Mobile decorative elements */}
        <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full"></div>

        {/* Main image container */}
        <div className="relative w-full h-full overflow-hidden rounded-[15px]">
          {images.map((img, index) => (
            <div key={index} className="absolute inset-0">
              <img
                src={img}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentIndex
                  ? "opacity-100 scale-100 blur-0"
                  : "opacity-0 scale-105 blur-sm"
                  }`}
              />
              {/* Mobile image overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}></div>
            </div>
          ))}
        </div>

        {/* Mobile navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Enhanced mobile navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {images.map((_, index) => (
            <button
              key={index}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${index === currentIndex
                ? "w-6 h-2 bg-white shadow-md"
                : "w-2 h-2 bg-white/60 hover:bg-white/80"
                }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Mobile slide counter */}
        <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded px-2 py-1 text-white text-xs font-medium z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
          {currentIndex + 1}/{images.length}
        </div>

        {/* Mobile play/pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-2 left-2 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100 z-30 border border-white/10"
        >
          {isPlaying ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Mobile loading progress bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30">
            <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-loading-bar"></div>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
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

  // Modified CDP handler to open in same tab
  const handleCDPClick = () => {
    window.location.href = "https://engineeringindia.co.in";
  };

  const navItems = [
    { name: "Home", route: "/", fileName: "Home.js" },
    { name: "Our Colleges", route: "/clgsec", fileName: "ClgSec.js" },
    { name: "About Us", route: "/about", fileName: "About.js" },
    { name: "Abhyudaya", route: "/abhyudaya", fileName: "Abhyudaya.js" },
    { name: "CDP", url: "https://engineeringindia.co.in", external: true, samePage: true },
    { name: "Magazine", route: "/magazine", fileName: "Magazine.js" }
  ];

  return (
    <>
      {/* Fixed Navbar with higher z-index */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => setCurrentPage('home')}>
              <img
                src="/images/logo.png"
                alt="Engineering India"
                className="w-[180px] md:w-[180px] hover:scale-105 transition-transform duration-300"
              />
            </Link>
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
                  className={`cursor-pointer font-medium transition-all duration-300 hover:scale-105 relative group ${currentPage === item.name.toLowerCase().replace(' ', '')
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                    }`}
                >
                  {item.external ? (
                    item.samePage ? (
                      <button 
                        onClick={handleCDPClick}
                        className="block"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a 
                        href={item.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {item.name}
                      </a>
                    )
                  ) : (
                    <Link to={item.route} onClick={() => setCurrentPage(item.name.toLowerCase().replace(' ', ''))}>
                      {item.name}
                    </Link>
                  )}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${currentPage === item.name.toLowerCase().replace(' ', '')
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
                <li key={idx} className="text-center">
                  {item.external ? (
                    item.samePage ? (
                      <button 
                        onClick={() => {
                          handleCDPClick();
                          setMobileMenuOpen(false);
                        }}
                        className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <a 
                        href={item.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )
                  ) : (
                    <Link 
                      to={item.route} 
                      onClick={() => { 
                        setCurrentPage(item.name.toLowerCase().replace(' ', '')); 
                        setMobileMenuOpen(false); 
                      }}
                      className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  )}
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
      id="stats-section"
      className="py-20 px-6 bg-white/60 backdrop-blur-xs relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
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
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

export { Navbar, Page, StatsSection };