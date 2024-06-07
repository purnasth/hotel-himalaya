import React from "react";

const Video = ({ videoClassName, poster, video }) => {
  return (
    <>
      <video
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
        The video of the Hotel Himalaya portrays the beauty of the hotel and the
        surrounding area.
      </video>
    </>
  );
};

export default Video;
