import React from "react";
import Banner from "../components/Banner";
import aboutData from "../data/aboutData";

const AboutPage = () => {
  const { banner, title, description } = bannerData.about;
  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page="About"
      />
    </>
  );
};

export default AboutPage;
