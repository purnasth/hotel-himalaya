import React from "react";
import Slider from "../components/Slider";
import Facilities from "../components/Facilities";
import About from "../components/About";
import Hall from "../components/Hall";
import Stay from "../components/Stay";
import Testimonials from "../components/Testimonials";
import SocialOffers from "../components/SocialOffers";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";

const Home = () => {
  const { data, loading, error } = useFetchData("/api/heroSlides.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { slides } = data;

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
      <About />
      <Stay />
      <Facilities />
      <Hall />
      <Testimonials />
      {/* <Offers /> */}
      <SocialOffers />
      {/* <OffersContainer /> */}
      {/* <Accommodation /> */}
      {/* <FilterButton /> */}

      {/* <Slider
        slides={slides}
        containerClassName="w-1/3 h-96 overflow-hidden relative mx-auto mt-10 group"
        buttonClassName="room-slider-button"
        imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
        trueClassName="opacity-100 scale-100 translate-y-0"
        falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
      /> */}
    </>
  );
};

export default Home;
