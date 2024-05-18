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

const RoomSlider = ({ items, currentIndex }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="w-1/3 px-2 flex-shrink-0">
            <div className="">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-6 mb-2">{item.title}</h3>
              <p className="line-clamp-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSlider;
