import React from "react";
import FloatingButtonWithNavbar from "./ui/FloatingButtonWithNavbar";
import { RiTrophyLine } from "react-icons/ri";
import sata from "../assets/awards/sata.webp";
import tripaward from "../assets/awards/tripaward.webp";

const Awards = () => {
  return (
    <FloatingButtonWithNavbar
      buttonIcon={<RiTrophyLine className="w-6 h-6 text-navy" />}
      buttonStyles=" fixed bottom-8 left-8 size-11 z-20 bg-goldDark text-goldLight outline outline-2 outline-offset-2 outline-goldLight rounded-full shadow-lg flex items-center justify-center"
      afterHomeClass="scale-0 translate-y-20"
      navbarStyles="bg-white px-2"
      title="Awards"
      ariaLabel="Awards"
    >
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
    </FloatingButtonWithNavbar>
  );
};

export default Awards;