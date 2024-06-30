import React from "react";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "../../constants/data";

const NextPrevButton = ({ prevSlide, nextSlide, buttonClassName }) => {
  return (
    <>
      <button onClick={prevSlide} className={`left-5 ${buttonClassName}`}>
        <TbArrowNarrowLeft />
      </button>
      <button onClick={nextSlide} className={`right-5 ${buttonClassName}`}>
        <TbArrowNarrowRight />
      </button>
    </>
  );
};

export default NextPrevButton;
