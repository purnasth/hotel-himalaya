import React from "react";
import { BreadCrumb, VideoPlayer } from "../constants/data";

const Banner = ({ banner, title, description, page, video }) => {
  return (
    <div className="responsive-banner relative w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-screen overflow-hidden group">
      {video ? (
        <VideoPlayer
          poster={banner}
          video={video}
          videoClassName="h-[110vh] w-full object-cover z-10"
        />
      ) : (
        <img
          src={banner}
          alt={title}
          className="w-full h-80 sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-screen object-cover"
          draggable="false"
        />
      )}
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/50 to-black/20"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
        <div className="max-w-xl text-gradient mx-auto space-y-4 py-6 md:py-12">
          <h3 className="text-lg font-bold sm:font-medium sm:text-2xl md:text-4xl leading-snug">
            {title}
          </h3>
          <p className="hidden md:block px-8 text-sm">{description}</p>
        </div>
        <BreadCrumb page={page} />
      </div>
    </div>
  );
};

export default Banner;
