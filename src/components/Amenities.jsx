import React from "react";
import IconRenderer from "./IconRenderer";

const Amenities = ({ amenities }) => {
  return (
    <div className="mt-40">
      <div className="text-center space-y-6 px-24">
        <h3 className="text-3xl leading-snug mb-20">Hall Amenities</h3>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <IconRenderer
              iconName={amenity.icon}
              className="text-3xl text-gold"
            />
            <span>{amenity.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
