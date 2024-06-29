import React from "react";
import logoMark from "../../assets/logo-mark.svg";
import { Link } from "react-router-dom";

const Summary = ({ video, quote, link }) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-black/60 to-black/40 z-0 opacity-90 mix-blend-darken" />
      {/* <div className="pointer-events-none absolute inset-0 size-full outline outline-1 outline-white/50 -outline-offset-[10px]" /> */}
      <video
        className="h-[70vh] w-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
        // poster={poster}
        preload="auto"
      >
        <source src={video} type="video/mp4" />
        <track
          src="#"
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
        The video of the Hotel Himalaya portrays the beauty of the hotel and the
        surrounding area.
      </video>
      <div className="font-luxury absolute inset-0 flex items-center justify-center flex-col gap-8 size-full container text-custom-white z-20">
        <span className="font-bold text-2xl text-gradient">Hotel Himalaya</span>
        <h5 className="font-ight text-4xl leading-snug">{quote}</h5>
        <Link
          to={link}
          className="overflow-hidden relative font-notoSerif mt-4 bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 px-6 py-3 rounded-full hover-outline hover:outline-goldLight/50 transition-all duration-500 ease-in-out"
          title="Reserve"
          aria-label="Reserve"
        >
          <span className="font-merriweather-sans text-gradient text-lg font-bold flex items-center justify-center gap-4 z-auto">
            <img
              src={logoMark}
              alt="Logo"
              className="size-6"
              // style={{
              //   filter:
              //     "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              // }}
            />
            Reservation
            <img
              src={logoMark}
              alt="Logo"
              className="size-6"
              // style={{
              //   filter:
              //     "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7449%) hue-rotate(190deg) brightness(107%) contrast(96%)",
              // }}
            />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
