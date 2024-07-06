import React from "react";
import { BreadCrumb, VideoPlayer } from "../constants/data";

const Banner = ({ banner, title, description, page, video }) => {
  return (
    <div className="responsive-banner relative w-full h-80 md:h-full lg:h-screen overflow-hidden group">
      {video ? (
        <VideoPlayer
          poster={banner}
          video={video}
          videoClassName="h-[110vh] w-full object-cover z-10"
        />
      ) : (
        <img src={banner} alt={title} className="w-full h-full object-cover" />
      )}
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/50 to-black/20"></div>
      <div className="absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
        <div className="max-w-xl text-gradient mx-auto space-y-4 py-12">
          <h3 className="text-4xl leading-snug">{title}</h3>
          <p className="px-8 text-sm">{description}</p>
        </div>
        <BreadCrumb page={page} />
      </div>
    </div>
  );
};

export default Banner;
