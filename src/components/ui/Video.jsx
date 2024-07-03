import React, { useRef } from "react";
import { withDataFetching } from "../../constants/data";

const Video = ({ data, videoClassName }) => {
  const { video, poster } = data;

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

  return (
    <>
      <div className="relative">
        <video
          ref={videoRef}
          className={videoClassName}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          preload="auto"
        >
          <source src={video} type="video/mp4" />
          <track
            src="#"
            kind="captions"
            srcLang="en"
            label="english_captions"
          ></track>
          The video of the Hotel Himalaya portrays the beauty of the hotel and
          the surrounding area.
        </video>
      </div>
    </>
  );
};

export default withDataFetching(Video, "/api/videoApi.json");
