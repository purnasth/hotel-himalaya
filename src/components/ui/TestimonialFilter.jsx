import React, { useState } from "react";

const TestimonialFilter = ({ contents }) => {
  const [selectedItem, setSelectedItem] = useState(contents[0]);
  const [isVisible, setIsVisible] = useState(true);

  const handleItemClick = (item) => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedItem(item);
      setIsVisible(true);
      const displaySection = document.getElementById(
        "filtered-content-display"
      );
      if (displaySection) {
        displaySection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 400);
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
      <div className="sticky top-0 flex justify-between flex-nowrap gap-3 sm:gap-6 md:gap-12 max-w-full overflow-x-auto mt-5 md:mt-0 p-1 md:p-8 z-20 bg-white">
        {contents.map(({ id, title, image, source }) => (
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
            <div className="flex items-center justify-between px-4 w-44 sm:w-56">
              <img
                src={image}
                alt={source}
                className="w-auto h-8 object-contain p-[0.6rem] sm:p-2"
                draggable="false"
              />
              <p className="text-sm sm:text-sm md:text-base line-clamp-1">
                - {title}
              </p>
            </div>
          </button>
        ))}
      </div>
      <div className="w-full max-h-96 overflow-y-auto">
        <div
          id="filtered-content-display"
          className={`px-3 md:px-4 ${
            isVisible ? "scale-100 translate-y-0" : "scale-0 -translate-y-full"
          } transition-all duration-700 scroll-mt-0 md:scroll-mt-80`}
        >
          <div key={selectedItem.id} className="md:px-6">
            <p className="text-justify md:text-pretty text-base md:text-xl">
              {selectedItem.description}
            </p>
            <div className="flex items-center justify-between gap-12 mt-8 md:mt-12">
              <p className="text-base md:text-xl font-medium">
                - {selectedItem.title}
              </p>
              <p className="text-sm md:text-base">
                - via {selectedItem.source}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFilter;
