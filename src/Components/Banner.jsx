import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner1.webp';
import Banner2 from '../assets/banner2.jpg';
import Banner3 from '../assets/banner3.webp';

const bannerData = [
  { id: 1, img: Banner1 },
  { id: 2, img: Banner2 },
  { id: 3, img: Banner3 },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? bannerData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  return (
    <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[550px] overflow-hidden rounded-xl shadow-md mb-8">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex justify-between items-center px-2 sm:px-4 md:px-6">
        <button
          onClick={handlePrev}
          className="btn btn-xs sm:btn-sm md:btn-md btn-circle text-white bg-black bg-opacity-30 hover:bg-opacity-60"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="btn btn-xs sm:btn-sm md:btn-md btn-circle text-white bg-black bg-opacity-30 hover:bg-opacity-60"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
