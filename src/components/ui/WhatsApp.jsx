import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
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

  return (
    <a
      href="https://wa.me/+9779851339602"
      target="_blank"
      rel="noreferrer"
      className={`${
        showButton ? "scale-100 translate-y-0" : "scale-0 translate-y-20"
      } size-11 z-20 fixed bottom-24 left-8 bg-goldDark text-goldLight outline outline-2 outline-offset-2 outline-goldLight rounded-full shadow-lg flex items-center justify-center transition-all duration-500 ease-in-out`}
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsApp;
