import React from "react";
import BreadCrumb from "./ui/BreadCrumb";

const Banner = ({ banner }) => {
  return (
    <div className="responsive-banner relative w-full h-80 md:h-full lg:h-screen">
      <img
        src="https://s3-alpha-sig.figma.com/img/768f/7e1f/d49cd3ddfce19581c959d4800854ec35?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BAR8B2Od1XY8NWAyG5fn2011mAZMPYal77TeniFMan-wN123yyRSWQO3mofgxN9X~30ShD76SMMCHOKq7-NTr9dgtwe4j2VFRROoUvlwEADuQEKQuI1BNWPlwlugFRJEuhN8R-KHgvwyjlYt5xtzLNpOoQZoB0UxIGlI~YsRzLTJpoMMJOfevhF3PLH2AqKtPl-VgeEEt~Y4JzaARir5hKu5vTRpjmwH5tUPzSYHFfSiIp94JLOoBhVoIvx3sF8RlZJ-d~fTuUdgPgwOZSrrFeVHjvisYCms8lDyLuA2azu1Y5DwpmZVlK35Ei9eW1XSJlSJH-~6VT4-msKBKYMC-w__"
        alt="About Hotel Himalaya"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
        <div className="max-w-lg text-gradient mx-auto space-y-4 py-12">
          <h3 className="text-4xl leading-snug">About Hotel Himalaya</h3>
          <p className="text-sm">
            The stay at Hotel Himalaya means enjoying every moment. Relax. Find
            inspiration. Be fascinated.
          </p>
        </div>
        <BreadCrumb page="About Hotel"  />
      </div>
    </div>
  );
};

export default Banner;
