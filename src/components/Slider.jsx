import React, { useState } from "react";
import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";

const Slider = ({
  slides,
  containerClassName,
  imgClassName,
  buttonClassName,
  trueClassName,
  falseClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${containerClassName} relative group`}>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          className={`${imgClassName} ${
            index === currentIndex ? trueClassName : falseClassName
          }`}
        />
      ))}
      <button onClick={prevSlide} className={`left-5 ${buttonClassName}`}>
        <HiOutlineArrowLongLeft className="text-2xl" />
      </button>
      <button onClick={nextSlide} className={`right-5 ${buttonClassName}`}>
        <HiOutlineArrowLongRight className="text-2xl rotate-" />
      </button>
    </div>
  );
};

export default Slider;
