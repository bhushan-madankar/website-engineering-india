import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./Home";
import {
  // Facebook,
  // Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

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

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated, options]);

  return [elementRef, isVisible];
};

// Animation wrapper component
const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [ref, isVisible] = useIntersectionObserver();

  const getTransformClass = () => {
    const baseClasses = "transition-all duration-1000 ease-out";

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} transform translate-y-20 opacity-0`;
        case "down":
          return `${baseClasses} transform -translate-y-20 opacity-0`;
        case "left":
          return `${baseClasses} transform -translate-x-20 opacity-0`;
        case "right":
          return `${baseClasses} transform translate-x-20 opacity-0`;
        case "scale":
          return `${baseClasses} transform scale-90 opacity-0`;
        default:
          return `${baseClasses} transform translate-y-20 opacity-0`;
      }
    }

    return `${baseClasses} transform translate-y-0 translate-x-0 scale-100 opacity-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
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

  // Handle PDF opening in same window
  const handlePDFClick = (link) => {
    window.location.href = link;
  };

  return (
    <>
      {/* Include the navbar */}
      <Navbar />

      {/* Main content with top padding to account for fixed navbar */}
      <div className="bg-[rgba(173,216,230,0.35)] backdrop-blur-md min-h-screen text-gray-800 pt-20">
        {/* Hero Section */}
        <div className="relative w-full bg-gradient-to-br from-[rgba(173,216,230,0.35)] to-[rgba(173,216,230,0.55)] py-20 overflow-hidden">
          <AnimatedSection direction="scale" className="max-w-6xl mx-auto text-center px-6">
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
            <AnimatedSection direction="up" delay={300} className="mt-8 px-4">
              <p className="text-[#B22222] text-xl md:text-2xl font-bold tracking-wide">
                || यः करोति मनोभूत्यानि न तस्यास्ति दुष्कृतम् ||
              </p>
              <p className="text-[#2D1B69] text-lg md:text-xl mt-2 font-semibold italic">
                "One who acts with pure intentions never faces failure"
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto mt-8 leading-relaxed font-medium text-[#1d0e4e]">
                Discover stories of <span className="text-[#ea7707] font-bold">Innovation</span>, celebrate <span className="text-[#138808] font-bold">Excellence</span>, and explore the future of engineering
              </p>
            </AnimatedSection>
          </AnimatedSection>
        </div>

        <main className="py-16 px-6">
          {/* Featured Articles Section */}
          <AnimatedSection direction="up" className="max-w-6xl mx-auto mb-20">
            <section>
              <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">
                Featured Articles
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                Dive deep into the stories that shape our engineering community
              </p>
              <AnimatedSection direction="scale" delay={200} className="bg-white rounded-3xl shadow-xl p-8">
                <Slider {...sliderSettings}>
                  {magazineData.map((mag, idx) => (
                    <div key={idx} className="px-4">
                      <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                        <div className="h-2 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full mb-6"></div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1d0e4e] leading-tight">{mag.title}</h3>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed">{mag.desc}</p>
                        <button
                          onClick={() => handlePDFClick(mag.link)}
                          className="inline-flex items-center bg-gradient-to-r from-[#1d0e4e] to-[#3b82f6] text-white px-6 py-3 rounded-full font-semibold hover:from-[#3b82f6] hover:to-[#1d0e4e] transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                        >
                          Read Article
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* Event Highlights Section */}
          <AnimatedSection direction="up" className="max-w-6xl mx-auto mb-20">
            <section>
              <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">Event Highlights</h2>
              <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                Capturing moments that define our engineering journey
              </p>
              <AnimatedSection direction="scale" delay={200} className="bg-white rounded-3xl shadow-xl p-8">
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
              </AnimatedSection>
            </section>
          </AnimatedSection>

          {/* Why Read Section */}
          <AnimatedSection direction="up" className="max-w-6xl mx-auto mb-16">
            <section>
              <h2 className="text-4xl font-bold text-center text-[#1d0e4e] mb-4">
                Why Read Engineering India?
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                Your gateway to innovation, inspiration, and excellence
              </p>
              <AnimatedSection direction="left" delay={200} className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-8">
                  <AnimatedSection direction="right" delay={400} className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#ea7707] to-[#fe9124] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1d0e4e]">Inspiring Excellence</h3>
                  </AnimatedSection>
                  <AnimatedSection direction="up" delay={600}>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      Dive into stories that celebrate innovation, capture youth spirit, and spotlight technological brilliance from across Vidarbha. Whether you're looking for inspiration, student achievements, or the future of engineering, this issue has something for everyone.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Join us in amplifying the voices shaping India's engineering future. Be curious, be inspired — and discover the full spectrum in the complete issue.
                    </p>
                  </AnimatedSection>
                </div>
              </AnimatedSection>
            </section>
          </AnimatedSection>
        </main>

        {/* Scroll to Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-[#1d0e4e] to-[#3b82f6] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 z-30 animate-bounce"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}

      </div>
      <AnimatedSection direction="up">
        <Footer />
      </AnimatedSection>
    </>
  );
};

export default Magazines;


const Footer = () => {
  return (
    <footer className="border-t mt-5 py-5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-30 h-20 mb-6" />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-2 animate-fadeInUp delay-300">
            {[
              // { Icon: Facebook, name: "Facebook", color: "hover:bg-blue-600", link: "https://facebook.com/yourpage" },
              // { Icon: Twitter, name: "Twitter", color: "hover:bg-blue-400", link: "https://twitter.com/yourhandle" },
              { Icon: Instagram, name: "Instagram", color: "hover:bg-pink-600", link: "https://www.instagram.com/engineering_india2047?igsh=MTNpaWthOWRvajI4eA==" },
              { Icon: Linkedin, name: "LinkedIn", color: "hover:bg-blue-700", link: "https://www.linkedin.com/company/engineeringindia-2047/" }
            ].map(({ Icon, name, color, link }, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gray-100 border border-gray-300 text-gray-700 ${color} hover:text-white rounded-full p-4 transition-all duration-300 hover:scale-110 hover:shadow-lg`}
              >
                <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">{name}</span>
              </a>
            ))}
          </div>


          {/* Copyright */}
          <div className="mt-8 text-center text-gray-500">
            <p>&copy; 2024 Engineering India. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Magazines, Footer };