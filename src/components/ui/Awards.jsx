import React, { useState, useEffect } from "react";
import sata from "../../assets/awards/sata.webp";
import tripaward from "../../assets/awards/tripaward.webp";
import { IoClose } from "react-icons/io5";
import { RiTrophyLine } from "react-icons/ri";

const Awards = () => {
  const [showButton, setShowButton] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

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

  const toggleNavbar = () => {
    setShowNavbar((prevShowNavbar) => !prevShowNavbar);
  };

  return (
    <div>
      <button
        className={`${
          showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
        } size-11 z-20 fixed bottom-8 left-8 bg-goldDark text-goldLight outline outline-2 outline-offset-2 outline-goldLight rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out`}
        onClick={toggleNavbar}
        title="Awards"
        aria-label="Awards"
      >
        <RiTrophyLine className="w-6 h-6 text-navy" />
      </button>
      <AwardsNavbar
        showNavbar={showNavbar}
        onClose={() => setShowNavbar(false)}
      />
    </div>
  );
};

const AwardsNavbar = ({ showNavbar, onClose }) => {
  const duration = 500;

  const handleClose = () => {
    onClose();
  };

  const handleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 w-full h-screen overflow-x-hidden overflow-y-auto bg-black/20 z-[60] transition-all duration-${duration} ease-linear ${
        showNavbar
          ? "backdrop-blur-sm opacity-100"
          : "backdrop-blur-0 opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`ml-auto w-64 h-screen overflow-y-auto bg-white px-2 transition-all duration-${duration} ease-in-out ${
          showNavbar
            ? "scale-100 translate-x-0 opacity-100"
            : "scale-100 translate-x-full opacity-0"
        }`}
        onClick={handleFormClick}
      >
        <div className="sticky top-0 bg-white flex justify-between p-6">
          <h4 className="text-2xl">Awards</h4>
          <button
            className="-mr-4"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <div className="mx-auto p-4">
          <img
            src={sata}
            alt="Winner Sata 2023"
            className="size-60 object-contain"
          />
          <img
            src={tripaward}
            alt="Tripadvisor Award 2024"
            className="size-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
