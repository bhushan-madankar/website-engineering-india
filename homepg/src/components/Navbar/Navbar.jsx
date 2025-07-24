import React from 'react';
import logo from '../../assets/logo.png'; // Assuming you have a logo image in assets

const Navbar = () => {
  return (
    <>
    <nav className="w-full fixed top-0 left-0 z-20 bg-[rgba(240,240,240,0.6)] backdrop-blur-[10px] shadow-sm">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-[180px]" />

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
          <button className="mr-[2rem] relative text-[#f8f5f5] text-[18px] font-medium rounded-[30px] bg-[#0d023b] border border-[#e8e8e8] shadow-[6px_6px_12px_#c5c5c5,_-6px_-6px_12px_#ffffff] px-[1.5em] py-[0.6em] min-h-[3vh] overflow-hidden z-10 hover:text-white hover:border-[#009087] active:text-[#666] active:shadow-[inset_4px_4px_12px_#53f0d3,_inset_-4px_-4px_12px_#53f0d3] before:absolute before:content-[''] before:left-1/2 before:top-full before:transform before:-translate-x-1/2 before:scale-y-100 before:scale-x-[1.25] before:w-[140%] before:h-[180%] before:bg-[rgba(0,0,0,0.05)] before:rounded-full before:block before:transition-all before:duration-[0.5s] before:delay-[0.1s] before:ease-[cubic-bezier(0.55,0,0.1,1)] before:z-[-1] hover:before:top-[-35%] hover:before:bg-[#009087] hover:before:scale-y-[1.3] hover:before:scale-x-[0.8] after:absolute after:content-[''] after:left-[55%] after:top-[180%] after:transform after:-translate-x-1/2 after:scale-y-100 after:scale-x-[1.45] after:w-[160%] after:h-[190%] after:bg-[#009087] after:rounded-full after:block after:transition-all after:duration-[0.5s] after:delay-[0.1s] after:ease-[cubic-bezier(0.55,0,0.1,1)] after:z-[-1] hover:after:top-[-45%] hover:after:bg-[#009087] hover:after:scale-y-[1.3] hover:after:scale-x-[0.8]">
            Join Us
          </button>
        </div>

        
      </div>
    </nav>
    </>
  );
};

export default Navbar;
