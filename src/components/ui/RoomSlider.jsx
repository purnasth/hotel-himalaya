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
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {items.concat(items).map((item, index) => (
          <div key={index} className="w-1/3 px-2 flex-shrink-0">
            <div className="relative group cursor-pointer overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover shadow-lg group-hover:scale-110 transition-all duration-300 ease-linear"
              />
              <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 opacity-0 group-hover:opacity-40  transition-all duration-300 ease-linear" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-2">{item.title}</h3>
            <p className="line-clamp-1">{item.description}</p>
          </div>
        ))}

        {/* {galleryImages.map((image) => (
          <>
            <div
              key={image.id}
              className="relative mb-5 group cursor-pointer overflow-hidden"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="min-h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
              />
              <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-60  transition-all duration-300 ease-linear" />
              <h5 className="absolute bottom-0 text-center w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 group-hover:translate-x-24 transition-all duration-300 ease-linear">
                {image.alt}
              </h5>
            </div>
          </>
        ))} */}
      </div>
    </div>
  );
};

export default RoomSlider;
