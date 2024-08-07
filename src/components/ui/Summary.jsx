import React from "react";
import { Link } from "react-router-dom";
import { logoMark, VideoPlayer } from "../../constants/data";

const Summary = ({ poster, video, quote, link }) => {
  return (
    <div className="relative group">
      <VideoPlayer
        poster={poster}
        video={video}
        // videoClassName="h-[70vh] w-full object-cover z-10"
        videoClassName="w-full min-h-96 sm:h-96 lg:h-[36rem] xl:h-[70vh] w-full object-cover z-10"
        withGradient={true}
      />
      <div className="font-luxury text-center absolute inset-0 flex items-center justify-center flex-col gap-3 size-full container text-custom-white z-20">
        <span className="text-base md:text-xl xl:text-2xl capitalize md:uppercase font-bold text-gradient font-luxury">
          Hotel Himalaya
        </span>
        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-snug font-light font-luxury">
          {quote}
        </h5>
        <Link
          to={link}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden relative font-notoSerif my-8 bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 px-6 py-3 rounded-full hover-outline hover:outline-goldLight/50 transition-all duration-500 ease-in-out"
          title="Reserve"
          aria-label="Reserve"
        >
          <span className="font-merriweather-sans text-gradient text-sm sm:text-base md:text-lg font-bold flex items-center justify-center gap-4 z-auto ">
            <img
              src={logoMark}
              alt="Logo"
              className="size-4 md:size-6 transition-all duration-200 ease-linear "
            />
            Reservation
            <img
              src={logoMark}
              alt="Logo"
              className="size-4 md:size-6 transition-all duration-200 ease-linear"
            />
          </span>
        </Link>

        <div className="flex items-center justify-center flex-col gap-2 font-merriweather-sans">
          <span className="text-gray-300 text-xs sm:text-sm font-merriweather-sans">
            or call us directly
            <Link
              rel="noopener noreferrer"
              className="text-sm sm:text-base ml-3 underline-link hover:text-gradient transition-all duration-300 font-merriweather-sans"
              to="tel:+977015423900"
              target="_blank"
            >
              +977 01-5423900
            </Link>
          </span>
          <Link
            rel="noopener noreferrer"
            className="text-sm sm:text-base underline-link hover:text-gradient transition-all duration-300 font-merriweather-sans"
            to="mailto:info@hotelhimalaya.com"
            target="_blank"
          >
            info@hotelhimalaya.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;
