import React, { useEffect, useState } from "react";
import { FaUsers, FaUniversity, FaGraduationCap, FaHandshake, FaBars, FaTimes } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const images = [
  "/images/aboutpage.avif",
  "/images/image2.png",
  "/images/image3.png",
  "/images/RASHTRABHIMAN.avif",
];

const Page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black overflow-hidden">
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

        {/* Container for main section */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
          {/* Left Side: Text Content - full width on mobile, half on desktop */}
          <div id="home" className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-20 md:py-15 text-center md:mr-[3rem] mt-24">
            <h1 className="text-4xl md:text-6xl font-semibold animate-fadeInUp">
              <span className="text-[4.2rem] text-[#1d0e4e] font-extrabold tracking-wider drop-shadow-sm hover:drop-shadow-md transition-all duration-500">
                ENGINEERING
              </span>
              <br />
              <span className="flex justify-center items-center mt-2 animate-slideInUp delay-300">
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#ea7707] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#fe9124] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">N</span>
                <span className="text-[rgb(128,0,128)] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#f9f8f9] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">D</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#138808] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#0b6623] rounded-sm shadow-md transform hover:scale-105 hover:shadow-lg transition-all duration-300">A</span>
              </span>
            </h1>

            <p className="text-[0.8rem] md:text-4xl max-w-[900px] mt-5 leading-tight font-[poppins] font-bold text-center animate-fadeInUp delay-500">
              Think <span className="text-[#00008b] font-bold hover:scale-105 transition-transform duration-300 inline-block">Nationally</span>, Act <span className="text-[#059669] font-bold hover:scale-105 transition-transform duration-300 inline-block">Locally</span>
            </p>
            
            <button
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-[160px] h-[40px] rounded-full bg-gradient-to-br from-[#faf5f3] to-[#d2f2fc] shadow-[0_20px_30px_-6px_rgba(238,103,97,0.5)] mt-6 text-black text-[1rem] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[3px] hover:shadow-none active:opacity-50"
            >
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative z-10">Our Events</span>
              
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <img src="/images/arrow.png" alt="arrow" className="group-hover:scale-110 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Right Side: Image Slider - hidden on mobile (md:flex) */}
          <div className="hidden md:flex md:w-1/2 md:flex-row md:justify-center md:px-5 md:py-4">
            <ImageSlider />
          </div>
        </div>

        {/* Image Slider for mobile - shown below content on mobile only */}
        <div className="block md:hidden w-full px-2 py-4">
          <MobileImageSlider />
        </div>
      </div>

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
        
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s linear infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
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
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 scale-100 blur-0" 
                    : "opacity-0 scale-105 blur-sm"
                }`}
              />
              {/* Image overlay for better contrast */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
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
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex 
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
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
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
                className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  index === currentIndex 
                    ? "opacity-100 scale-100 blur-0" 
                    : "opacity-0 scale-105 blur-sm"
                }`}
              />
              {/* Mobile image overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
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
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex 
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
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
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

  return (
    <>
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Logo" className="w-[180px] md:w-[180px]" />
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
              {["Home", "Our Colleges", "About Us", "Abhyudaya", "Magazine"].map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item === "Our Colleges" ? (
                    <Link to="/clgsec">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : ["Home", "Abhyudaya", "Magazine"].includes(item) ? (
                    <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <span
                      onClick={() => {
                        const id = item === "Our Events" ? "events" : item.toLowerCase().replace(" ", "");
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  )}
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
            <ul className="flex flex-col gap-8 list-none">
              {["Home", "Our Colleges", "About Us", "Abhyudaya", "Magazine"].map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-105 relative group"
                >
                  {item === "Our Colleges" ? (
                    <Link to="/clgsec">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : ["Home", "Abhyudaya", "Magazine"].includes(item) ? (
                    <Link to={`/${item.toLowerCase().replace(" ", "")}`}>
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <span
                      onClick={() => {
                        const id = item === "Our Events" ? "events" : item.toLowerCase().replace(" ", "");
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  )}
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
              className="absolute top 4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
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
      className="py-20 px-6 bg-[rgba(173,216,230,0.35)] relative overflow-hidden"
    >
      <div id="stats-section" className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Our Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${inView ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
