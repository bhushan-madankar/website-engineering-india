import React from 'react';
import arrow from '../../assets/arrow.png';
import ImageSlider from '../ImageSlider/ImageSlider';

const Hero = () => {
  return (
  <div className="w-full max-h-screen bg-[rgba(173,216,230,0.35)] backdrop-blur-md text-black font-dosis flex flex-row md:flex-row">
    
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-15 text-center">
      <h1 className="text-4xl md:text-6xl font-semibold">
        <span className="text-[4.5rem] text-[#1d0e4e] font-extrabold tracking-wider">ENGINEERING</span>
        <br />
        <span className="flex justify-center items-center mt-2">
          <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-3 mx-1 bg-[#fe8308]">I</span>
          <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-3 mx-1 bg-[#fe9124]">N</span>
          <span className="text-[rgb(128,0,128)] text-[3.5rem] font-black px-[0.5rem] py-3 mx-1 bg-[#f9f8f9]">D</span>
          <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-3 mx-1 bg-[#138808]">I</span>
          <span className="text-[#FFFFFF] text-[3.5rem] font-black px-[0.5rem] py-3 mx-1 bg-[#0b6623]">A</span>
        </span>
      </h1>

      <p className="text-[2rem] md:text-7xl max-w-[900px] mt-5 leading-tight font-[poppins] font-bold text-center">
      Think <span className="text-[#00008b] font-bold">Nationally</span>, Act <span className="text-[#059669] font-bold">Locally</span>
      </p>
      <button className="w-[160px] h-[40px] rounded-full bg-gradient-to-br from-[#faf5f3] to-[#d2f2fc] shadow-[0_20px_30px_-6px_rgba(238,103,97,0.5)] mt-6 text-black text-[1rem] font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[3px] hover:shadow-none active:opacity-50">
        About Us <img src={arrow} alt="arrow" />
      </button>
    </div>

    {/* Right Side: Image Slider */}
    <div className="w-full md:w-1/2 flex flex-row justify-center px-5 py-4 ">
      <ImageSlider />
    </div>

  </div>
);



};

export default Hero;
