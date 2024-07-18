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
        description={description}
        page="Events"
      />
      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{description}</h3>
          </div>
        </div>
        <div className="space-y-32 grid grid-cols-2 gap-12">
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
