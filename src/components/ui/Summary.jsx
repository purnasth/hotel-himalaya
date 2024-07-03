import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { logoMark } from "../../constants/data";

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
      <div className="font-luxury text-center absolute inset-0 flex items-center justify-center flex-col gap-8 size-full container text-custom-white z-20">
        <span className="font-bold text-2xl text-gradient">Hotel Himalaya</span>
        <h5 className="font-light text-4xl leading-snug">{quote}</h5>
        <Link
          to={link}
          className="overflow-hidden relative font-notoSerif mt-4 bg-black/20 backdrop-blur-sm outline outline-1 outline-white/30 px-6 py-3 rounded-full hover-outline hover:outline-goldLight/50 transition-all duration-500 ease-in-out"
          title="Reserve"
          aria-label="Reserve"
        >
          <span className="font-merriweather-sans text-gradient text-lg font-bold flex items-center justify-center gap-4 z-auto">
            <img src={logoMark} alt="Logo" className="size-6" />
            Reservation
            <img src={logoMark} alt="Logo" className="size-6" />
          </span>
        </Link>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleFullscreen}
            className="bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all duration-300"
            title="Fullscreen"
            aria-label="Fullscreen"
          >
            Fullscreen
          </button>
          <button
            onClick={handlePiP}
            className="bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-all duration-300"
            title="Picture-in-Picture"
            aria-label="Picture-in-Picture"
          >
            PiP Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
