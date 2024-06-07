import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-md shadow-md overflow-hidden transition-all duration-300"
        >
          <button
            className="p-12 flex justify-between items-center w-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
            onClick={() => toggleAccordian(index)}
          >
            <div className="flex items-center justify-start gap-8">
              <span className="text-lg font-medium">{item.icon}</span>
              <div className="flex items-start justify-center gap-4 flex-col">
                <h4 className="text-3xl font-medium">{item.title}</h4>
                <p className="">{item.subtitle}</p>
              </div>
            </div>
            <span className="text-2xl">
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
            <div className="p-4 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
