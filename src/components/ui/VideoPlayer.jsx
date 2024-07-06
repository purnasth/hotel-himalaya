import React, { useRef } from "react";
import { MdOutlineFullscreenExit, MdPictureInPictureAlt } from "react-icons/md";

const VideoPlayer = ({ poster, video, videoClassName, withGradient }) => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
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
      {withGradient && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-black/60 to-black/40 z-0 opacity-90 mix-blend-darken" />
      )}
      <video
        ref={videoRef}
        className={`${videoClassName}`}
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
      <div className="translate-y-12 group-hover:translate-y-0 flex gap-4 mt-4 absolute right-0 bottom-0 p-5 z-30 transition-all duration-300 ease-linear">
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

export default VideoPlayer;
