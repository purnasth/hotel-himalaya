import React from "react";
import GalleryComponent from "../components/GalleryComponent";

const GalleryPage = () => {
  return (
    <>
      <main className="">
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24 mb-12">
            <span className="uppercase">Making 10,000+ happy faces</span>
            <h3 className="text-5xl leading-snug">Glimpse of Hotel</h3>
            <p className="text-base max-w-lg mx-auto">
              Comfortable accommodation directly in the hotel with extensive
              Wellness and exceptional gastronomy.
            </p>
          </div>
        </div>
        <GalleryComponent />
      </main>
    </>
  );
};

export default GalleryPage;
