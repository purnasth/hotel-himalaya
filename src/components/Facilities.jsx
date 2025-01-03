import React from "react";
import { withDataFetching } from "../constants/data";
import { Link } from "react-router-dom";

const Facilities = ({ data }) => {
  const { hotelFacilities } = data;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:mt-8">
      {hotelFacilities.map(
        ({ id, title, subtitle, description, icon, router }) => (
          <div key={id} className="relative overflow-hidden group">
            <img
              src={icon}
              alt={title}
              className="w-full min-h-96 h-[75vh] sm:h-96 md:h-[32rem] lg:h-screen shadow-md transition-all duration-700 ease-linear group-hover:scale-150 object-cover"
              draggable="false"
            />
            <div className="pointer-events-none absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] w-full h-full"></div>
            <div className="pointer-events-none group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
              <div className="p-4 pointer-events-auto">
                <h3 className="text-2xl md:text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">
                  {title}
                </h3>
                <h4 className="opacity-0 group-hover:opacity-100 text-2xl md:text-3xl font-cursive text-gradient font-medium mt-24 group-hover:mt-8 md:group-hover:mt-12 transition-all duration-300">
                  {subtitle}
                </h4>
                <p className="text-white mt-2 md:mt-4 mb-12">{description}</p>
                <Link
                  to={router}
                  className="text-black bg-gradient px-6 py-2 rounded-full hover-outline"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default withDataFetching(Facilities, "/api/facilitiesData.json");
