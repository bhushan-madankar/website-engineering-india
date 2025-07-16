import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const images = [
  "/Images/image.png",
  "/Images/image2.png",
  "/Images/image3.png",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-wrapper">
        <div className="slider-card">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}
      </div>
    </div>

  );
};

export default ImageSlider;
