import React from "react";
import Slider from "../components/Slider";
import Facilities from "../components/Facilities";
import About from "../components/About";
import Hall from "../components/Hall";
import Stay from "../components/Stay";
import Testimonials from "../components/Testimonials";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";

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
        containerClassName="w-full h-screen"
        buttonClassName="hero-slider-button"
        imgClassName="w-full h-screen object-cover absolute inset-0 transition-all duration-[2s]"
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
