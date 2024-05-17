import React, { useState } from "react";
import Slider from "./Slider";

const FilterButton = () => {
  const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const halls = [
    { id: "filter1", name: "Hall 1" },
    { id: "filter2", name: "Hall 2" },
    { id: "filter3", name: "Hall 3" },
    { id: "filter4", name: "Hall 4" },
  ];

  const hallImages = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/KN2OQ-event01.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/OB5Aq-skyline2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/C0Ne4-rato.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/R3YEn-regent4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/SFYSu-pdr4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/VyxO5-green4.jpg",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-10 space-x-4">
        <div className="space-x-8">
          {halls.map((hall) => (
            <button
              key={hall.id}
              className={`px-4 py-2 border border-gray-300 rounded ${
                activeFilter === hall.id ? "bg-gradient text-black" : ""
              }`}
              onClick={() => handleFilterClick(hall.id)}
            >
              {hall.name}
            </button>
          ))}
        </div>

        <div className="w-3/4 h-[80vh] mx-auto overflow-hidden relative">
          {halls.map((hall) => (
            <div
              key={hall.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
                activeFilter === hall.id ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              {activeFilter === hall.id && (
                <>
                  <h3>{hall.name}</h3>
                  <Slider
                    slides={hallImages}
                    containerClassName="w-full h-full"
                    buttonClassName="room-slider-button"
                    imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
                    trueClassName="opacity-100 scale-100"
                    falseClassName="opacity-0 rotate-3 scale-80"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FilterButton;