import React from "react";

import {
  withDataFetching,
  Banner,
  Summary,
  FilterComponent,
} from "../constants/data";

const DinePage = ({ data }) => {
  const {
    banner,
    video,
    slogan,
    title,
    description,
    page_description,
    diningOptions,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        // video={video}
        title={title}
        description={description}
        page="Dine"
      />
      <main id="dine">
        <div className="">
          <div className="md:container text-center mb-16 md:mb-24">
            <span className="text-xs md:text-base uppercase">{slogan}</span>
            <h5 className="text-base sm:text-lg md:text-xl xl:text-2xl leading-snug xl:leading-snug text-justify xl:text-center mt-6 mb-12">
              {page_description}
            </h5>
          </div>
          <FilterComponent contents={diningOptions} />
        </div>
      </main>

      <Summary
        poster={banner}
        video={video}
        quote="Reserve your table today & elevate your dining experience."
        link="/enquiry-review"
      />
    </>
  );
};

export default withDataFetching(DinePage, "/api/dineData.json");
