// import React from "react";

// const RoomSlider = ({ items, currentIndex }) => {
//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-500"
//         style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
//       >
//         {items.map((item, index) => (
//           <div key={index} className="w-1/3 px-2 flex-shrink-0">
//             <div className="">
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 className="w-full h-96 object-cover shadow-lg"
//               />
//               <h3 className="text-xl font-semibold mt-6 mb-2">{item.title}</h3>
//               <p className="line-clamp-1">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RoomSlider;

import React from "react";
import { Link } from "react-router-dom";
import { IconRenderer } from "../../constants/data";

const RoomSlider = ({ items, currentIndex }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
        }}
      >
        {items.concat(items).map((item, index) => {
          const { id, image, title, subtitle, amenities, details } = item;
          const startingPrice = details["Starting Price"]?.value || "";

          return (
            <Link
              key={index}
              to={`/stay#${id}`}
              className="w-full lg:w-1/3 px-2 flex-shrink-0"
            >
              <div className="relative group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 size-full outline outline-1 outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear" />
                <div className="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                  <ul className="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                    {amenities.slice(0, 4).map((amenity, idx) => (
                      <li key={idx} className="text-xl">
                        <IconRenderer
                          iconName={amenity.icon}
                          className="text-white"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                    <h3 className="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                      {title}
                    </h3>
                    <p className="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                      {subtitle}
                    </p>
                  </div>
                  <span className="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">
                    {startingPrice}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RoomSlider;
