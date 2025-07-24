import React, { useEffect, useState } from "react";

const images = [
  "/aboutpage.avif",
  "/image2.png",
  "/image3.png",
];

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
    <div className="flex justify-center items-center py-[50px] mt-[40px]">
      <div className="relative w-[150vw] max-w-[800px] h-[550px] overflow-hidden rounded-[20px] shadow-[0_10px_40px_rgba(17,1,1,0.15)]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover rounded-[20px] transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
