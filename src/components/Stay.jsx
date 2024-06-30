import React, { useState } from "react";

import {
  withDataFetching,
  RoomSlider,
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "../constants/data";

const Stay = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { home_slogan, home_title, home_description, roomsCategories } = data;
  const totalItems = roomsCategories.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  const sliderItems = roomsCategories.map((room) => ({
    ...room,
    image: room.image[0],
  }));

  return (
    <main className="pt-8 px-0">
      <div className="container pb-16">
        <div className="flex items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="uppercase">{home_slogan}</span>
            <h3 className="text-5xl leading-snug">{home_title}</h3>
            <p className="text-base">{home_description}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="bg-gradient py-1 px-5 rounded-full hover-outline"
              onClick={handlePrevClick}
            >
              <HiOutlineArrowLongLeft className="text-lg" />
            </button>
            <button
              className="bg-gradient py-1 px-5 rounded-full hover-outline"
              onClick={handleNextClick}
            >
              <HiOutlineArrowLongRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
      <div className="translate-x-36">
        <RoomSlider items={sliderItems} currentIndex={currentIndex} />
      </div>
    </main>
  );
};

export default withDataFetching(Stay, "/api/accommodationData.json");
