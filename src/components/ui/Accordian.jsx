import React, { useState } from "react";
import {
  AccordianContact,
  IconRenderer,
  TbChevronDown,
} from "../../constants/data";

const Accordian = ({ accordians }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-0 overflow-x-hidden">
      {accordians.map((accordian, index) => (
        <div
          key={index}
          className="group border rounded-m d shad bow-md overflow-hidden transition-all duration-300"
        >
          <button
            className="p-4 md:p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
            onClick={() => toggleAccordian(index)}
          >
            <div className="flex items-center justify-start gap-4 md:gap-8 lg:gap-12">
              <IconRenderer
                iconName={accordian.icon}
                className="text-xl md:text-2xl lg:text-3xl text-goldDark"
              />
              <div className="flex items-start justify-center gap-2 md:gap-4 flex-col">
                <h4 className="text-xs sm:text-base md:text-xl lg:text-3xl font-bold md:font-medium">
                  {accordian.category}
                </h4>
                <p className="text-left text-[0.6em] sm:text-xs md:text-base">
                  {accordian.description}
                </p>
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
              {activeIndex === index ? (
                <TbChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
              ) : (
                <TbChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
              )}
            </span>
          </button>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              activeIndex === index ? "max-h-screen" : "max-h-0"
            }`}
          >
            <AccordianContact accordiansContact={accordian} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
