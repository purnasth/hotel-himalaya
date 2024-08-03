import React from "react";
import { IconRenderer } from "../constants/data";

const Amenities = ({ amenities }) => {
  return (
    <div className="mt-24 md:mt-40">
      <h3 className="text-center text-2xl xl:text-3xl leading-snug xl:leading-snug mb-20">
        Hall Amenities
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <IconRenderer
              iconName={amenity.icon}
              className="text-3xl text-gold"
            />
            <span className="text-sm md:text-base">{amenity.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
