import React from "react";

import { withDataFetching, Slider } from "../constants/data";
import { Link } from "react-router-dom";

const Hall = ({ data }) => {
  const { title, slogan, details, forCategories, buttonText, hallImages } =
    data;

  return (
    <>
      <main className="pb-0 px-0">
        <div className="md:container pb-16 md:px-24">
          <div className="text-left md:text-center space-y-5 md:space-y-8 px-6 sm:px-12">
            <span className="text-xs md:text-base uppercase">{slogan}</span>

            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
              {title}
            </h3>
            <p className="text-sm text-justify md:text-base md:text-center">
              {details}
            </p>
          </div>
          <div className="hidden md:grid px-6 md:px-0 my-24 grid-cols-1 md:grid-cols-3 gap-12">
            {forCategories.map((category, index) => (
              <div key={index} className="space-y-6">
                <h4 className="text-2xl font-medium">{category.title}</h4>
                <p className="text-pretty line-clamp-4">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:pt-0 text-center">
            <Link
              to="/events"
              className="bg-gradient px-6 py-2 rounded-full hover-outline"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        <Slider
          slides={hallImages}
          containerClassName="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh]"
          buttonClassName="hall-slider-button"
          imgClassName="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100 translate-y-0"
          falseClassName="opacity-0 translate-y-16 -z-10"
        />
      </main>
    </>
  );
};

export default withDataFetching(Hall, "/api/hallData.json");
