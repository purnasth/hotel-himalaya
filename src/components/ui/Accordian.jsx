// import React, { useState } from "react";
// import { HiChevronDown } from "react-icons/hi";
// import AccordianContact from "./AccordianContact";

// const Accordian = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordian = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="space-y-4">
//       {items.map((item, index) => (
//         <div
//           key={index}
//           className="group border rounded-md shadow-md overflow-hidden transition-all duration-300"
//         >
//           <button
//             className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
//             onClick={() => toggleAccordian(index)}
//           >
//             <div className="flex items-center justify-start gap-12">
//               {typeof item.icon === "function" ? (
//                 <item.icon className="text-3xl text-goldDark" />
//               ) : (
//                 <img src={item.icon} alt="icon" />
//               )}

//               <div className="flex items-start justify-center gap-4 flex-col">
//                 <h4 className="text-3xl font-medium">{item.title}</h4>
//                 <p className="">{item.subtitle}</p>
//               </div>
//             </div>
//             <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
//               {activeIndex === index ? (
//                 <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
//               ) : (
//                 <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
//               )}
//             </span>
//           </button>
//           <div
//             className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
//               activeIndex === index ? "max-h-screen" : "max-h-0"
//             }`}
//           >
//             {/* <div className="p-4 bg-white">{item.content}</div> */}
//             <AccordianContact />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordian;

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdOutlineBed, MdOutlineBrunchDining } from "react-icons/md";
import { TbCalendarEvent, TbCoffee } from "react-icons/tb";
import AccordianContact from "./AccordianContact";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordian = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <div className="group border rounded-md shadow-md overflow-hidden transition-all duration-300">
        <button
          className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
          onClick={() => toggleAccordian(0)}
        >
          <div className="flex items-center justify-start gap-12">
            <MdOutlineBed className="text-3xl text-goldDark" />
            <div className="flex items-start justify-center gap-4 flex-col">
              <h4 className="text-3xl font-medium">
                Accommodation Booking & Information
              </h4>
              <p>Contacts for booking rooms and information</p>
            </div>
          </div>
          <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
            {activeIndex === 0 ? (
              <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
            ) : (
              <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
            )}
          </span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndex === 0 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <AccordianContact />
        </div>
      </div>

      <div className="group border rounded-md shadow-md overflow-hidden transition-all duration-300">
        <button
          className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
          onClick={() => toggleAccordian(1)}
        >
          <div className="flex items-center justify-start gap-12">
            <TbCalendarEvent className="text-3xl text-goldDark" />
            <div className="flex items-start justify-center gap-4 flex-col">
              <h4 className="text-3xl font-medium">
                Group Reservation & Events
              </h4>
              <p>Hall booking for corporate events and family occasions</p>
            </div>
          </div>
          <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
            {activeIndex === 1 ? (
              <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
            ) : (
              <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
            )}
          </span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <AccordianContact />
        </div>
      </div>

      <div className="group border rounded-md shadow-md overflow-hidden transition-all duration-300">
        <button
          className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
          onClick={() => toggleAccordian(2)}
        >
          <div className="flex items-center justify-start gap-12">
            <MdOutlineBrunchDining className="text-3xl text-goldDark" />
            <div className="flex items-start justify-center gap-4 flex-col">
              <h4 className="text-3xl font-medium">
                Dine & Recreation Booking
              </h4>
              <p>Table booking and recreation facilities information</p>
            </div>
          </div>
          <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
            {activeIndex === 2 ? (
              <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
            ) : (
              <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
            )}
          </span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <AccordianContact />
        </div>
      </div>

      <div className="group border rounded-md shadow-md overflow-hidden transition-all duration-300">
        <button
          className="p-12 flex justify-between items-center w-full bg-goldDark/10 hover:bg-goldDark/20 focus:outline-none"
          onClick={() => toggleAccordian(3)}
        >
          <div className="flex items-center justify-start gap-12">
            <TbCoffee className="text-3xl text-goldDark" />
            <div className="flex items-start justify-center gap-4 flex-col">
              <h4 className="text-3xl font-medium">
                Patan Museum Cafe Booking
              </h4>
              <p>Cafe booking and information</p>
            </div>
          </div>
          <span className="text-2xl outline outline-1 outline-goldDark text-goldDark p-2 rounded-full group-hover:bg-goldDark group-hover:text-goldLight transition-all duration-300 ease-linear">
            {activeIndex === 3 ? (
              <HiChevronDown className="rotate-180 transition-all duration-200 ease-linear" />
            ) : (
              <HiChevronDown className="rotate-0 transition-all duration-200 ease-linear" />
            )}
          </span>
        </button>
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            activeIndex === 3 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <AccordianContact />
        </div>
      </div>
    </div>
  );
};

export default Accordian;
