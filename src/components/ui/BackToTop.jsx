import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "../../constants/data";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        showButton
          ? "scale-75 sm:scale-100 translate-y-0"
          : "scale-0 translate-y-20"
      } size-11 z-50 fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-goldDark text-goldLight outline outline-2 outline-offset-2 outline-goldLight rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out`}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <MdOutlineKeyboardDoubleArrowUp className="text-2xl" />
    </button>
  );
};

export default BackToTop;
