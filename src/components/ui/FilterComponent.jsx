import React, { useState } from "react";

import {
  Slider,
  TbUsersGroup,
  TbClock,
  MdOutlineBrunchDining,
} from "../../constants/data";

const FilterComponent = ({ dineImages, contents }) => {
  const [selectedItem, setSelectedItem] = useState(contents[0]);
  const [isVisible, setIsVisible] = useState(true);

  const handleItemClick = (item) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedItem(item);
      setIsVisible(true);
      // Scroll to the display section
      const displaySection = document.getElementById(
        "filtered-content-display"
      );
      if (displaySection) {
        displaySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white sticky top-0 flex justify-between flex-nowrap gap-4 md:gap-6 xl:gap-8 max-w-full overflow-x-auto py-3 md:py-6 z-20">
        {contents.map(({ id, title }) => (
          <button
            key={id}
            onClick={() =>
              handleItemClick(contents.find((item) => item.id === id))
            }
            className={`w-52 sm:w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 ${
              selectedItem.id === id ? "bg-gradient hover-outline" : ""
            }`}
            title={title}
            aria-label={title}
          >
            <h3 className="w-44 sm:w-56 py-2 px-4 text-sm md:text-base text-center line-clamp-1">
              {title}
            </h3>
          </button>
        ))}
      </div>
      <div className="">
        <div
          id="filtered-content-display"
          className={`${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          } transition-all duration-700 scroll-mt-0 md:scroll-mt-32`}
        >
          <div key={selectedItem.id} className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 lg:place-items-center lg:gap-12">
              <div className="col-span-4 space-y-8">
                <h3 className="text-xl md:text-2xl xl:text-3xl leading-snug xl:leading-snug underline">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-justify md:text-base xl:text-lg md:text-pretty">
                  {selectedItem.description}
                </p>
              </div>
              <ul className="col-span-1 flex items-start lg:justify-center lg:flex-col gap-6 md:gap-14 lg:gap-4 mt-6 md:mt-10 lg:mt-16">
                <li className="flex items-center justify-start gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
                  <TbUsersGroup /> {selectedItem.occupancy}
                </li>
                <li className="flex items-center justify-start gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
                  <TbClock /> {selectedItem.time}
                </li>
                <li className="flex items-center justify-start gap-2 md:gap-4 text-xs sm:text-sm md:text-base">
                  <MdOutlineBrunchDining /> {selectedItem.cuisine}
                </li>
              </ul>
            </div>
          </div>
          {selectedItem && (
            <Slider
              slides={selectedItem.dineImages}
              containerClassName="w-full h-64 sm:h-96 lg:h-[36rem] xl:h-[85vh] relative mx-auto group"
              buttonClassName="absolute top-1/2 -translate-y-1/2 rounded-full p-3 border bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-75 transition-all duration-1000"
              imgClassName="w-full h-64 sm:h-96 lg:h-[36rem] xl:h-[85vh] object-cover absolute inset-0 transition-all duration-[1s]"
              trueClassName="opacity-100"
              falseClassName="opacity-0 translate-y-6 -z-10"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
