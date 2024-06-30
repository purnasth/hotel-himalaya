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
        <div className="container">
          <div className="text-center mb-24">
            <span className="uppercase">{slogan}</span>
            <h5 className="text-2xl text-center leading-snug mt-6 mb-12">
              {page_description}
            </h5>
          </div>
          <FilterComponent contents={diningOptions} />
        </div>
      </main>

      <Summary
        video={video}
        quote="Reserve your table today & elevate your dining experience."
        link="#"
      />
    </>
  );
};

export default withDataFetching(DinePage, "/api/dineData.json");
