import React, { useState } from "react";
import NextPrevButton from "./ui/NextPrevButton";

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
        <React.Fragment key={index}>
          <img
            src={slide.url}
            alt={slide.title || `Slide ${index}`}
            className={`${imgClassName} ${
              index === currentIndex ? trueClassName : falseClassName
            }`}
          />
          {index === currentIndex && (
            <>
              <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/10 to-black/0"></div>
              <h4
                className={`${
                  index === currentIndex ? trueClassName : falseClassName
                } pointer-events-none w-full h-24 py-20 px-12 absolute bottom-0 text-right text-white z-20 [text-shadow:2px_2px_#815f16]`}
              >
                {slide.title}
              </h4>
            </>
          )}
        </React.Fragment>
      ))}

      <NextPrevButton
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        buttonClassName={buttonClassName}
      />
    </div>
  );
};

export default Slider;
