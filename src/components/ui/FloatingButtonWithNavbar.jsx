import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const FloatingButtonWithNavbar = ({
  buttonIcon,
  buttonText,
  buttonStyles,
  navbarStyles,
  children,
  title,
  ariaLabel,
  afterHomeClass,
}) => {
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
          showButton ? "scale-100 translate-y-0" : `${afterHomeClass}`
        } ${buttonStyles} transition-all duration-500 ease-in-out`}
        onClick={toggleNavbar}
        title={title}
        aria-label={ariaLabel}
      >
        {buttonIcon}
        {buttonText && <span className="ml-2">{buttonText}</span>}
      </button>
      <Navbar
        showNavbar={showNavbar}
        onClose={() => setShowNavbar(false)}
        navbarStyles={navbarStyles}
        formTitle={title}
      >
        {children}
      </Navbar>
    </div>
  );
};

const Navbar = ({ showNavbar, onClose, children, navbarStyles, formTitle }) => {
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
        className={`ml-auto w-80 h-screen overflow-y-auto transition-all duration-${duration} ease-in-out ${
          showNavbar
            ? "scale-100 translate-x-0 opacity-100"
            : "scale-100 translate-x-full opacity-0"
        } ${navbarStyles}`}
        onClick={handleFormClick}
      >
        <div className="sticky top-0 flex justify-between px-3 py-6 bg-white z-20">
          <h4 className="text-2xl">{formTitle}</h4>
          <button
            className="-mr-4"
            onClick={onClose}
            title="Close"
            aria-label="Close"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <div className="mx-auto p-4">{children}</div>
      </div>
    </div>
  );
};

export default FloatingButtonWithNavbar;
