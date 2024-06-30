import React from "react";
import { withDataFetching } from "../../constants/data";

const Video = ({ data, videoClassName }) => {
  const { video, poster } = data;

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

export default withDataFetching(Video, "/api/videoApi.json");
