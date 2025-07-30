import React, { useEffect, useState } from "react";
import { FaUsers, FaUniversity, FaGraduationCap, FaHandshake, FaBars, FaTimes } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add this import

const images = [
  "/images/aboutpage.avif",
  "/images/image2.png",
  "/images/image3.png",
  "/images/RASHTRABHIMAN.avif",
];

const Page = () => {
  return (
    <>
      <div className="relative w-full min-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black">
        {/* Container for main section */}
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Left Side: Text Content - full width on mobile, half on desktop */}
          <div id="home" className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-20 md:py-15 text-center md:mr-[3rem]">
            <h1 className="text-4xl md:text-6xl font-semibold">
              <span className="text-[4.2rem] text-[#1d0e4e] font-extrabold tracking-wider">ENGINEERING</span>
              <br />
              <span className="flex justify-center items-center mt-2">
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#ea7707]">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#fe9124]">N</span>
                <span className="text-[rgb(128,0,128)] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#f9f8f9]">D</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#138808]">I</span>
                <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-2 bg-[#0b6623]">A</span>
              </span>
            </h1>

            <p className="text-[0.8rem] md:text-4xl max-w-[900px] mt-5 leading-tight font-[poppins] font-bold text-center">
              Think <span className="text-[#00008b] font-bold">Nationally</span>, Act <span className="text-[#059669] font-bold">Locally</span>
            </p>
            <button 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
              className="w-[160px] h-[40px] rounded-full bg-gradient-to-br from-[#faf5f3] to-[#d2f2fc] shadow-[0_20px_30px_-6px_rgba(238,103,97,0.5)] mt-6 text-black text-[1rem] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[3px] hover:shadow-none active:opacity-50"
            >
              About Us <img src="/images/arrow.png" alt="arrow" />
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
    </>
  );
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center py-[50px] mt-[40px] mr-[7rem]">
      <div className="relative w-[180vw] max-w-[850px] h-[550px] overflow-hidden rounded-[20px] shadow-[0_10px_40px_rgba(17,1,1,0.15)]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover rounded-[20px] transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0"}`}
          />
        ))}
      </div>
    </div>
  );
};

const MobileImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-full max-w-[480px] h-[250px] overflow-hidden rounded-[15px] shadow-[0_10px_20px_rgba(17,1,1,0.1)]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover rounded-[15px] transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0"}`}
          />
        ))}
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
  
  const navigate = useNavigate(); // Add this hook

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

  // Updated navigation handler
  const handleNavigation = (item) => {
    if (item === "Magazine") {
      navigate('/magazine');
    } else if (item === "Our Events") {
      document.getElementById("events").scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(item.toLowerCase().replace(" ", "")).scrollIntoView({ behavior: 'smooth' });
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
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
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
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
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

const stats = [
  { label: "Coordinators", value: "250+", icon: <FaUsers size={45} /> },
  { label: "Colleges Collaborated", value: "30+", icon: <FaUniversity size={45} /> },
  { label: "Alumni Chapters", value: "15+", icon: <FaGraduationCap size={45} /> },
  { label: "Volunteers", value: "1000+", icon: <FaHandshake size={45} /> },
];

const StatsSection = () => {
  return (
    <section id="about" className="flex justify-around flex-wrap gap-[0.8rem] py-10 px-5 bg-[rgba(173,216,230,0.35)] backdrop-blur-md">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#ffffff] mb-[2rem] py-10 px-5 rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] text-center flex flex-col justify-center w-[280px] h-[230px] transform transition duration-300 hover:scale-110 hover:shadow-xl font-poppins"
        >
          <div className="text-[3rem] mb-[1rem] flex justify-center items-center">{stat.icon}</div>
          <div className="text-[2rem] text-[#040007] mb-[0.5rem] font-bold">{stat.value}</div>
          <div className="text-[1.4rem] text-black font-semibold">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export { Navbar, Page, StatsSection };