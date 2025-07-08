import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    image: "/assets/images/t_shirts/Slider1.png",
    title: "New Drop '25",
    subtitle: "Minimal. Clean. Confident.",
  },
  {
    id: 2,
    image: "/assets/images/t_shirts/Slider2.png",
    title: "Fresh Neutrals",
    subtitle: "Find your fit. Wear it loud.",
  },
  {
    id: 3,
    image: "/assets/images/t_shirts/Slider3.png",
    title: "Darkwear Season",
    subtitle: "Power meets style.",
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] xs:h-[300px] sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-[580px] overflow-hidden rounded-3xl shadow-[0_0_30px_#ff7a0010] mt-6"
    >
      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0.6, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.6, scale: 0.97 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 flex items-center justify-start px-2 xs:px-4 sm:px-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="text-left text-white max-w-xs xs:max-w-sm sm:max-w-md">
          <h2 className="text-base xs:text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 xs:mb-2 drop-shadow-lg">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-300 drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full z-20 transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-600 text-white p-2 sm:p-3 rounded-full z-20 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#333] z-20">
        <motion.div
          className="h-full bg-orange-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.3 }}
        />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === currentSlide
                ? "bg-orange-500 shadow-[0_0_8px_#ff7a00]"
                : "bg-gray-500 hover:bg-orange-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
