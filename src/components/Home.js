import React, { useEffect, useState } from "react";
import { FaUsers, FaUniversity, FaGraduationCap, FaHandshake } from "react-icons/fa";

const images = [
  "/images/aboutpage.avif",
  "/images/image2.png",
  "/images/image3.png",
  "/images/RASHTRABHIMAN.avif",
];

const Page = () => {
  return (
    <div className="w-full max-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black flex flex-row md:flex-row">
      {/* Left Side: Text Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-15 text-center mr-[3rem]">
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
        <button className="w-[160px] h-[40px] rounded-full bg-gradient-to-br from-[#faf5f3] to-[#d2f2fc] shadow-[0_20px_30px_-6px_rgba(238,103,97,0.5)] mt-6 text-black text-[1rem] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[3px] hover:shadow-none active:opacity-50">
          About Us <img src="/images/arrow.png" alt="arrow" />
        </button>
      </div>

      {/* Right Side: Image Slider */}
      <div className="w-full md:w-1/2 flex flex-row justify-center px-5 py-4 ">
        <ImageSlider />
      </div>
    </div>
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
    <div className="flex justify-center items-center py-[50px] mt-[40px] mr-[7rem] ">
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

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-20 bg-[rgba(240,240,240,0.6)] backdrop-blur-[10px] shadow-sm">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 py-2">
          {/* Logo */}
          <img src="/images/logo.png" alt="Logo" className="w-[180px]" />

          <div className=" items-center flex gap-[2.5rem] text-[22px]">
            <ul className=" flex gap-[2.5rem] list-none">
              {["Home", "Our Events", "Gallery", "About Us"].map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Join Us Button */}
            <button className=" relative text-[#f8f5f5] text-[18px] font-medium rounded-[30px] bg-[#0d023b] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,_-6px_-6px_12px_#ffffff] px-[1.5em] py-[0.6em] min-h-[3vh] overflow-hidden z-10 hover:text-white hover:border-[#009087] active:text-[#666] active:shadow-[inset_4px_4px_12px_#53f0d3,_inset_-4px_-4px_12px_#53f0d3] before:absolute before:content-[''] before:left-1/2 before:top-full before:transform before:-translate-x-1/2 before:scale-y-100 before:scale-x-[1.25] before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-full before:block before:transition-all before:duration-[0.5s] before:delay-[0.1s] before:ease-[cubic-bezier(0.55,0,0.1,1)] before:z-[-1] hover:before:top-[-35%] hover:before:bg-[#009087] hover:before:scale-y-[1.3] hover:before:scale-x-[0.8] after:absolute after:content-[''] after:left-[55%] after:top-[180%] after:transform after:-translate-x-1/2 after:scale-y-100 after:scale-x-[1.45] after:w-[160%] after:h-[190%] after:bg-[#009087] after:rounded-full after:block after:transition-all after:duration-[0.5s] after:delay-[0.1s] after:ease-[cubic-bezier(0.55,0,0.1,1)] after:z-[-1] hover:after:top-[-45%] hover:after:bg-[#009087] hover:after:scale-y-[1.3] hover:after:scale-x-[0.8]">
              Join Us
            </button>
          </div>
        </div>
      </nav>
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
    <section className="flex justify-around flex-wrap gap-[0.8rem] py-10 px-5 bg-[rgba(173,216,230,0.35)] backdrop-blur-md ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#ffffff] mb-[2rem] py-10 px-5 rounded-[12px] shadow-[0_15px_30px_rgba(0,0,0,0.1)] text-center flex flex-col justify-center w-[280px] h-[230px] transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-52 w-56 hover:shadow-xl font-poppins">
          <div className="text-[3rem] mb-[1rem] flex justify-center items-center">{stat.icon}</div>
          <div className="text-[2rem] text-[#040007] mb-[0.5rem] font-bold ">{stat.value}</div>
          <div className="text-[1.4rem] text-black font-semibold">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
};


export { Navbar, Page, StatsSection };
