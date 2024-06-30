import React from "react";
import { Nearby } from "../constants/data";

const NearbyPage = () => {
  return (
    <main>
      <div className="container mt-12">
        <div className="text-center space-y-6 px-24 mb-12">
          <span className="uppercase">Making 10,000+ happy faces</span>
          <h3 className="text-5xl leading-snug">Nearby Places</h3>
          <p className="text-base max-w-lg mx-auto">
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
