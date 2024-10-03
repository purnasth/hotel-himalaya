import React from "react";

import { Slider, IconRenderer } from "../constants/data";
import { Link } from "react-router-dom";

const PackageComponent = ({ content, exelyRoom }) => {
  const { id, title, description, image, details, amenities } = content;

  return (
    <section id={id} className="mt-16 md:mt-20 xl:px-24">
      {image && (
        <Slider
          slides={image.map((img) => ({ url: img.src, alt: img.alt }))}
          containerClassName="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[32rem] xl:h-screen"
          buttonClassName="stay-slider-button hover-outline"
          imgClassName="outline outline-1 outline-white -outline-offset-[12px] group-hover:outline-offset-0 w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0 -z-10"
        />
      )}

      <div className="container px-6 lg:px-12 xl:px-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-12 xl:gap-16 mt-12">
        <div className="col-span-2 space-y-6">
          <h3 className="text-xl xl:text-2xl leading-snug underline">
            {title}
          </h3>
          <p className="text-justify md:text-pretty text-sm md:text-base font-medium md:font-light">
            {description}
          </p>
          {details && (
            <ul className="flex items-center justify-between mt-6 py-2">
              {Object.entries(details).map(([key, detail]) => (
                <li
                  key={key}
                  className="flex items-center md:gap-1 text-xs md:text-xs lg:text-base"
                >
                  <IconRenderer
                    iconName={detail.icon}
                    className="text-base sm:text-xl text-black mr-2"
                  />
                  {detail.value}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative z-auto col-span-1 bg-amber-100 p-4 pb-8 px-8 md:-mt-28 outline outline-black/0 outline-1 -outline-offset-8">
          <Link
            to={exelyRoom}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full scale-100 translate-y-0 bg-gradient px-6 py-2 rounded-full hover-outline flex items-center justify-center gap-2 transition-all duration-500 ease-in-out"
            title="Reserve"
            aria-label="Reserve"
          >
            Reserve
          </Link>

          {/* <Reservation
            enquiryFormFields={enquiryFormFields}
            prefill={{ room: title }}
          /> */}

          <div className="mt-6 z-10">
            <h5 className="text-lg text-center mb-6 hidden sm:block">
              Room Amenities
            </h5>
            <ul className="list-decimal list-inside font-light text-base space-y-3 max-h-40 md:max-h-60 overflow-y-auto">
              {amenities &&
                amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-base md:text-xs lg:text-base"
                  >
                    <IconRenderer
                      iconName={amenity.icon}
                      className="text-xl text-black"
                    />
                    {amenity.title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageComponent;
