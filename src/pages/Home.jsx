import React from "react";

import {
  useFetchData,
  Loader,
  Slider,
  About,
  Stay,
  Facilities,
  Hall,
  Testimonials,
} from "../constants/data";

const Home = () => {
  const {
    data: heroSlidesData,
    loading: heroSlidesLoading,
    error: heroSlidesError,
  } = useFetchData("/api/heroSlides.json");

  const {
    data: aboutData,
    loading: aboutLoading,
    error: aboutError,
  } = useFetchData("/api/aboutData.json");

  if (heroSlidesLoading || aboutLoading) {
    return <Loader />;
  }

  if (heroSlidesError || aboutError) {
    return <div>Error: {heroSlidesError || aboutError}</div>;
  }

  const { slides } = heroSlidesData;

  return (
    <>
      <Slider
        slides={slides}
        containerClassName="w-full h-64 sm:h-[50vh] sm:min-h-96 lg:h-screen"
        buttonClassName="hero-slider-button"
        imgClassName="w-full h-64 sm:h-[50vh] sm:min-h-96 lg:h-screen object-cover absolute inset-0 transition-all duration-[2s]"
        trueClassName="opacity-100"
        falseClassName="opacity-0"
      />
      <About data={aboutData} />
      <Stay />
      <Facilities />
      <Hall />
      <Testimonials />
    </>
  );
};

export default Home;
