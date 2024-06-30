import React from "react";
import { Video } from "../constants/data";

const About = ({ data }) => {
  const { slogan, home_title, home_description } = data;

  return (
    <main>
      <div className="absolute inset-0 bg-gold/20 size-full h-3/4 -z-10"></div>
      <div className="container">
        <div className="text-center space-y-8 px-12">
          <span className="uppercase">{slogan}</span>

          <h3 className="text-5xl leading-snug">{home_title}</h3>

          <p className="text-base">{home_description}</p>
        </div>

        <Video videoClassName="w-full h-full object-cover mt-24" />
      </div>
    </main>
  );
};

export default About;
