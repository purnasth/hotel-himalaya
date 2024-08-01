import React from "react";
import { VideoPlayer } from "../constants/data";

const About = ({ data }) => {
  const { slogan, home_title, home_description, poster, video } = data;

  return (
    <main className="group overflow-hidden">
      <div className="absolute inset-0 bg-gold/20 size-full h-3/4 -z-10"></div>
      <div className="md:container">
        <div className="text-left md:text-center space-y-5 md:space-y-8 px-6 sm:px-12">
          <span className="text-xs md:text-base uppercase">{slogan}</span>

          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
            {home_title}
          </h3>

          <p className="text-sm text-justify md:text-base md:text-center">
            {home_description}
          </p>
        </div>

        <div className="overflow-hidden">
          <VideoPlayer
            poster={poster}
            video={video}
            videoClassName="size-full object-cover mt-12 md:mt-24 outline outline-1 outline-white -outline-offset-[10px]"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
