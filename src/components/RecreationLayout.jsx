import React from "react";

const RecreationLayout = ({ recreationsData }) => {
  return (
    <>
      <section className="mt-4 p-8 py-0">
        {recreationsData.map((recreation, index) => (
          <div
            className="grid grid-cols-3 content-center gap-16 mt-28"
            key={index}
          >
            {index % 2 === 0 ? (
              <>
                <div className="col-span-1 content-center w-full">
                  <h3 className="text-3xl leading-snug">{recreation.title}</h3>
                  <p className="text-justify md:text-pretty text-base mt-4 mb-20">
                    {recreation.description}
                  </p>
                  <h3 className="text-2xl mb-6">Facilities</h3>
                  <ul className="flex items-center gap-6 flex-wrap">
                    {recreation.facilities.map((facility, facilityIndex) => (
                      <li
                        key={facilityIndex}
                        className={`px-4 py-2 rounded-2xl relative overflow-hidden`}
                        style={{ backgroundColor: recreation.facilitiesColor }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 opacity-30 -z-10 pointer-events-none"></div>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-2 grid grid-cols-5 gap-8 p-8">
                  {recreation.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`col-span-${image.colSpan || 1} ${
                        imageIndex % 2 === 0 ? "content-end" : ""
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2 grid grid-cols-5 gap-8 p-8">
                  {recreation.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`col-span-${image.colSpan || 1} ${
                        imageIndex % 2 === 0 ? "content-end" : ""
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
                <div className="col-span-1 content-center w-full">
                  <h3 className="text-3xl leading-snug">{recreation.title}</h3>
                  <p className="text-justify md:text-pretty text-base mt-4 mb-20">
                    {recreation.description}
                  </p>
                  <h3 className="text-2xl mb-6">Facilities</h3>
                  <ul className="flex items-center gap-6 flex-wrap">
                    {recreation.facilities.map((facility, facilityIndex) => (
                      <li
                        key={facilityIndex}
                        className={`px-4 py-2 rounded-2xl relative overflow-hidden`}
                        style={{ backgroundColor: recreation.facilitiesColor }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 opacity-30 -z-10 pointer-events-none"></div>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default RecreationLayout;
