import React from "react";

import {
  withDataFetching,
  Banner,
  Summary,
  HallComponent,
  Amenities,
} from "../constants/data";

const HallPage = ({ data }) => {
  const {
    banner,
    video,
    title,
    subtitle,
    description,
    slogan,
    hallCategories,
    amenities,
    eventFormFields,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        // video={video}
        title={title}
        description={subtitle}
        page="Events"
      />
      <main className="px-4 md:px-12 xl:px-4">
        <div className="md:container">
          <div className="text-center space-y-3 md:space-y-6 px-3 md:px-24">
            <span className="text-xs md:text-base uppercase">{slogan}</span>
            <h3 className="text-base sm:text-xl md:text-2xl xl:text-3xl leading-snug xl:leading-snug text-justify xl:text-center">
              {description}
            </h3>
          </div>
        </div>

        <div className="space-y-16 xl:space-y-32 grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-20 xl:gap-12">
          {hallCategories.map((hall) => (
            <HallComponent
              key={hall.id}
              page="Hall"
              content={hall}
              enquiryFormFields={eventFormFields}
            />
          ))}
        </div>
        <Amenities amenities={amenities} />
      </main>
      <Summary
        poster={banner}
        video={video}
        quote="Mark the date & Create lasting memories."
        link="/enquiry-review"
      />
    </>
  );
};

export default withDataFetching(HallPage, "/api/hallData.json");
