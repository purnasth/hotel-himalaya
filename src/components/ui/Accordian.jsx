import React, { useState } from "react";
import {
  AccordianContact,
  IconRenderer,
  HiChevronDown,
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
            className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
            onClick={() => toggleAccordian(index)}
          >
            <div className="flex items-center justify-start gap-12">
              <IconRenderer
                iconName={accordian.icon}
                className="text-3xl text-goldDark"
              />
              <div className="flex items-start justify-center gap-4 flex-col">
                <h4 className="text-3xl font-medium">{accordian.category}</h4>
                <p className="">{accordian.description}</p>
              </div>
            </div>
            <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
              {activeIndex === index ? (
                <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
              ) : (
                <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
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
