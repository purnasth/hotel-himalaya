import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { logoMark } from "../../constants/data";

import { MdOutlineFullscreenExit, MdPictureInPictureAlt } from "react-icons/md";

const Summary = ({ poster, video, quote, link }) => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handlePiP = async () => {
    try {
      if (videoRef.current !== document.pictureInPictureElement) {
        await videoRef.current.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error("Error in PiP mode:", error);
    }
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-black/60 to-black/40 z-0 opacity-90 mix-blend-darken" />
      <video
        ref={videoRef}
        className="h-[70vh] w-full object-cover z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
        <track
          src="#"
          kind="captions"
          srcLang="en"
          label="english_captions"
        ></track>
        Your browser does not support the video tag.
      </video>
      <div className="font-luxury text-center absolute inset-0 flex items-center justify-center flex-col gap-3 size-full container text-custom-white z-20">
        <span className="font-bold text-2xl text-gradient">Hotel Himalaya</span>
        <h5 className="font-light text-4xl leading-snug">{quote}</h5>
        <Link
          to={link}
          className="group overflow-hidden relative font-notoSerif my-8 bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 px-6 py-3 rounded-full hover-outline hover:outline-goldLight/50 transition-all duration-500 ease-in-out"
          title="Reserve"
          aria-label="Reserve"
        >
          <span className="font-merriweather-sans text-gradient text-lg font-bold flex items-center justify-center gap-4 z-auto ">
            <img
              src={logoMark}
              alt="Logo"
              className="size-6 group-hover:rotate-[360deg] transition-all duration-200 ease-linear "
            />
            Reservation
            <img
              src={logoMark}
              alt="Logo"
              className="size-6 group-hover:rotate-[360deg] transition-all duration-200 ease-linear"
            />
          </span>
        </Link>

        <div className="flex items-center justify-center flex-col gap-2 font-merriweather-sans">
          <span className="text-gray-300 text-sm">
            or call us directly
            <a
              rel="noopener noreferrer"
              className="ml-3 underline-link hover:text-gradient transition-all duration-300"
              href="tel:++977015423900"
              target="_blank"
            >
              +977 01-5423900
            </a>
          </span>
          <a
            rel="noopener noreferrer"
            className="underline-link hover:text-gradient transition-all duration-300"
            href="mailto:info@hotelhimalaya.com"
            target="_blank"
          >
            info@hotelhimalaya.com
          </a>
        </div>
      </div>
      <div className="flex gap-4 mt-4 absolute right-0 bottom-0 p-5 z-30">
        <button
          onClick={handlePiP}
          className="bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 hover-outline text-white/80 text-lg px-3 py-1 rounded-full hover:bg-black/40 transition-all duration-300"
          title="Picture-in-Picture"
          aria-label="Picture-in-Picture"
        >
          <MdPictureInPictureAlt />
        </button>
        <button
          onClick={handleFullscreen}
          className="bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 hover-outline text-white/80 text-2xl px-2 py-0 rounded-full hover:bg-black/40 transition-all duration-300"
          title="Fullscreen"
          aria-label="Fullscreen"
        >
          <MdOutlineFullscreenExit />
        </button>
      </div>
    </div>
  );
};

export default Summary;
