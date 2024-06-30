import React, { useState } from "react";
import NextPrevButton from "./NextPrevButton";

const DynamicSlider = ({ items, itemsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
        }}
      >
        {items.concat(items).map((item, index) => (
          <div
            key={index}
            className={`w-1/${itemsPerSlide} px-2 flex-shrink-0`}
            style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
          >
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover shadow-lg group-hover:scale-110 transition-all duration-300 ease-linear"
              />
              <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 opacity-0 group-hover:opacity-40  transition-all duration-300 ease-linear" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">{item.title}</h3>
            <p className="line-clamp-1">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 my-8">
        <NextPrevButton
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          buttonClassName="py-1 px-5 rounded-full flex items-center gap-2 bg-goldDark text-goldLight outline outline-2 outline-goldLight pointer-events-auto hover-outline"
        />
      </div>
    </div>
  );
};

export default DynamicSlider;
