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
//                 src={item.image}
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

const RoomSlider = ({ items, currentIndex }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Link
        to={`/stay`}
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
        }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="w-1/3 px-2 flex-shrink-0">
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-full h-96 object-cover shadow-lg group-hover:scale-110 transition-all duration-300 ease-linear"
              />
              <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 opacity-0 group-hover:opacity-40 transition-all duration-300 ease-linear" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">{item.title}</h3>
            <p className="line-clamp-1">{item.subtitle}</p>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default RoomSlider;
