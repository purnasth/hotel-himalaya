import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const timeoutId = setTimeout(scrollToHash, 200);

    return () => clearTimeout(timeoutId);
  }, [location, roomsCategories]);

  return (
    <>
      <Banner
        banner={banner}
        video={video}
        title={title}
        description={description}
        page="Accommodation"
      />

      <main className="px-4 md:px-12 xl:px-4">
        <div className="md:container">
          <div className="text-center space-y-3 md:space-y-6 px-3 md:px-24">
            <span className="text-xs md:text-base uppercase">{slogan}</span>
            <h3 className="text-base sm:text-xl md:text-2xl xl:text-3xl leading-snug xl:leading-snug text-justify xl:text-center">
              {subtitle}
            </h3>
          </div>
        </div>
        <div className="space-y-16 md:space-y-32">
          {roomsCategories.map((room) => (
            <PackageComponent
              key={room.id}
              page="Stay"
              content={room}
              exelyRoom={room.exelyRoom}
            />
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
