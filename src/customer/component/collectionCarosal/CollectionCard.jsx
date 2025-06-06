import React, { useState, useEffect } from "react";
import ProductGrid from "../../pages/Category/ProductGrid.jsx";

function Carousel() {
  const slides = [
    { id: 1, image: "/assets/images/t_shirts/Slider1.png" },
    { id: 2, image: "/assets/images/t_shirts/Slider2.png" },
    { id: 3, image: "/assets/images/t_shirts/Slider3.png" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoplay) {
        handleNext();
      }
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(intervalId);
  }, [autoplay, currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full top-6 h-[500px] overflow-hidden"> {/* Increase height here */}
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="w-full flex-shrink-0 h-[500px]" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
    
  );
}

export default Carousel;

