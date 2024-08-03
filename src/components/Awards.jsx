import React from "react";

import {
  FloatingButtonWithNavbar,
  TbTrophy,
  sata,
  tripaward,
} from "../constants/data";

const Awards = () => {
  return (
    <FloatingButtonWithNavbar
      buttonIcon={<TbTrophy className="size-6" />}
      buttonStyles="fixed bottom-4 md:bottom-8 left-4 md:left-8 size-11 scale-75 sm:scale-100 z-20 bg-goldDark text-goldLight outline outline-2 outline-offset-2 outline-goldLight rounded-full shadow-lg flex items-center justify-center"
      afterHomeClass="scale-0 translate-y-20"
      navbarStyles="bg-white px-2"
      title="Awards"
      ariaLabel="Awards"
    >
      <div className="flex items-center justify-center flex-col gap-6">
        <img
          src={sata}
          alt="Winner Sata 2023"
          className="size-52 object-contain p-2"
          draggable="false"
        />
        <img
          src={tripaward}
          alt="Tripadvisor Award 2024"
          className="size-52 object-contain"
          draggable="false"
        />
      </div>
    </FloatingButtonWithNavbar>
  );
};

export default Awards;
