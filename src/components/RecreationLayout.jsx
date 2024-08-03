import React from "react";
import {
  LightGallery,
  lgZoom,
  lgVideo,
  lgThumbnail,
  lgFullscreen,
} from "../constants/library";

const RecreationLayout = ({ recreationsData }) => {
  return (
    <>
      <section className="mt-24 xl:mt-0 xl:p-8 xl:pt-0 py-0">
        {recreationsData.map((recreation, index) => (
          <div
            className="grid grid-cols-1 xl:grid-cols-3 content-center gap-y-12 xl:gap-16 xl:p-8"
            key={index}
          >
            <div
              className={`col-span-1 content-center w-full ${
                index % 2 === 0 ? "" : "xl:order-last"
              }`}
            >
              <h3 className="text-xl md:text-2xl xl:text-3xl md:leading-normal xl:leading-snug">
                {recreation.title}
              </h3>
              <p className="text-sm text-justify md:text-base mt-4 mb-8 md:mb-20">
                {recreation.description}
              </p>
              <h3 className="text-xl md:text-2xl mb-6">Facilities</h3>

              <ul className="flex items-center gap-3 md:gap-6 flex-wrap">
                {recreation.facilities.map((facility, facilityIndex) => (
                  <li
                    key={facilityIndex}
                    className={`px-4 py-2 rounded-2xl relative overflow-hidden text-xs md:text-base`}
                    style={{ backgroundColor: recreation.facilitiesColor }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 opacity-30 -z-10 pointer-events-none"></div>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            <LightGallery
              plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
              mode="lg-fade"
              options={{
                thumbnail: true,
                autoplay: true,
              }}
              elementClassNames={`col-span-2 grid grid-cols-5 gap-4 md:gap-8 ${
                index % 2 === 0 ? "" : "xl:order-first"
              } md:mt-16 xl:mt-24 ${
                index === recreationsData.length - 1
                  ? "mb-0"
                  : "mb-28 lg:mb-44 xl:mb-6"
              }`}
            >
              {recreation.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  data-src={image.url}
                  className={`col-span-${image.colSpan || 1} ${
                    imageIndex % 2 === 0 ? "content-end" : ""
                  } group overflow-hidden transition-all duration-200 ease-linear cursor-pointer`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="contrast-100 group-hover:contrast-150 object-cover rounded-2xl transition-all duration-300 ease-linear cursor-pointer"
                    draggable="false"
                  />
                </div>
              ))}
            </LightGallery>
          </div>
        ))}
      </section>
    </>
  );
};

export default RecreationLayout;
