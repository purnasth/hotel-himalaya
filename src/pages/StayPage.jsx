import React from "react";

import {
  withDataFetching,
  Banner,
  Summary,
  PackageComponent,
} from "../constants/data";

const StayPage = ({ data }) => {
  const {
    banner,
    title,
    subtitle,
    description,
    slogan,
    roomsCategories,
    video,
    exely,
  } = data;

  return (
    <>
      <Banner
        banner={banner}
        video={video}
        title={title}
        description={description}
        page="Accommodation"
      />

      <main>
        <div className="container space-y-32">
          <div className="text-center space-y-6 px-24">
            <span className="uppercase">{slogan}</span>
            <h3 className="text-3xl leading-snug">{subtitle}</h3>
          </div>
        </div>
        <div className="container space-y-32">
          {roomsCategories.map((room) => (
            <>
              <PackageComponent
                key={room.id}
                page="Stay"
                content={room}
                exelyRoom={room.exelyRoom}
              />
            </>
          ))}
        </div>
      </main>
      <Summary
        poster={banner}
        video={video}
        quote="Take a break. Recharge your batteries. Find inspiration."
        link={exely}
      />
    </>
  );
};

export default withDataFetching(StayPage, "/api/accommodationData.json");
