import React, { useState } from "react";
import { TbUsersGroup, TbClock } from "react-icons/tb";
import { RiBowlLine } from "react-icons/ri";
import Slider from "../Slider";

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
    <div className="flex flex-col gap-24">
      <div className="sticky top-0 flex justify-between flex-nowrap gap-12 max-w-full overflow-x-auto py-6 z-20">
        {contents.map(({ id, title }) => (
          <button
            key={id}
            onClick={() =>
              handleItemClick(contents.find((item) => item.id === id))
            }
            className={`w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 ${
              selectedItem.id === id ? "bg-gradient hover-outline" : ""
            }`}
            title={title}
            aria-label={title}
          >
            <h3 className="w-56 py-2 px-4 text-sm md:text-base text-center line-clamp-1">
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
            <div className="grid grid-cols-5 place-items-center gap-12">
              <div className="col-span-4 space-y-8 ">
                <h3 className="text-3xl leading-snug underline">
                  {selectedItem.title}
                </h3>
                <p className="text-justify md:text-pretty text-lg">
                  {selectedItem.description}
                </p>
              </div>
              <ul className="col-span-1 flex items-statt justify-center flex-col gap-4 mt-16">
                <li className="flex items-center justify-start gap-4">
                  <TbUsersGroup /> {selectedItem.occupancy}
                </li>
                <li className="flex items-center justify-start gap-4">
                  <TbClock /> {selectedItem.time}
                </li>
                <li className="flex items-center justify-start gap-4">
                  <RiBowlLine /> {selectedItem.cuisine}
                </li>
              </ul>
            </div>
          </div>
          {selectedItem && (
            <Slider
              slides={selectedItem.dineImages}
              containerClassName="w-full h-[85vh] relative mx-auto group"
              buttonClassName="absolute top-1/2 -translate-y-1/2 rounded-full p-3 border bg-black/20 text-white cursor-pointer group-hover:scale-100 scale-75 transition-all duration-1000"
              imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
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
