import React from "react";
import { Nearby } from "../constants/data";

const NearbyPage = () => {
  return (
    <main>
      <div className="md:container mt-12">
        <div className="text-center space-y-3 md:space-y-6 px-3 md:px-24 mb-12 md:mb-24">
          <span className="text-xs md:text-base uppercase">
            Making 10,000+ happy faces
          </span>
          <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
            Nearby Places
          </h3>
          <p className="text-sm text-justify md:text-base md:text-center max-w-lg mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            aperiam accusantium sed doloremque molestias nisi.
          </p>
        </div>
      </div>

      <Nearby />
    </main>
  );
};

export default NearbyPage;
