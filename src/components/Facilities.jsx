import React from "react";
import { withDataFetching } from "../constants/data";

const Facilities = ({ data }) => {
  const { hotelFacilities } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-28">
      {hotelFacilities.map(
        ({ id, title, subtitle, description, icon, router }) => (
          <div key={id} className="relative overflow-hidden group">
            <img
              src={icon}
              alt={title}
              className="w-full h-screen shadow-md transition duration-700 ease-in-out transform group-hover:scale-150 object-cover"
            />
            <div className="absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] w-full h-full"></div>
            <div className="group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
              <div className="p-4">
                <h3 className="text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {title}
                </h3>
                <h4 className="opacity-0 group-hover:opacity-100 text-3xl font-cursive text-gradient font-medium mt-24 group-hover:mt-12 transition-all duration-300">
                  {subtitle}
                </h4>
                <p className="text-white mt-4 mb-12">{description}</p>
                <a
                  href={router}
                  className="text-black bg-gradient px-6 py-2 rounded-full hover-outline"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default withDataFetching(Facilities, "/api/facilitiesData.json");
