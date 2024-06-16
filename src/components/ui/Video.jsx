import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../Loader";

const Video = ({ videoClassName }) => {
  const { data, loading, error } = useFetchData("/api/videoApi.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

export default Video;
