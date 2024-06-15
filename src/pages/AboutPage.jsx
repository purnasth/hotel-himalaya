import React from "react";
import Banner from "../components/Banner";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import About from "../components/About";
import Slider from "../components/Slider";
import BreadCrumb from "../components/ui/BreadCrumb";

const AboutPage = () => {
  const { data, loading, error } = useFetchData("/api/aboutData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { banner, title, description, slides, aboutSlides } = data;

  return (
    <>
      <div className="relative">
        <Slider
          slides={slides.map((slide) => ({
            url: slide.url,
            title: slide.title,
          }))}
          containerClassName="w-full h-screen"
          buttonClassName="hero-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0"
        />

        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/30 to-black/0"></div>
        <div className="absolute left-0 bottom-0 text-center bg-gradient-to-t from-black/80 to-black/0 w-full py-4">
          <div className="max-w-xl text-gradient mx-auto space-y-4 py-12">
            <h3 className="text-4xl leading-snug">{title}</h3>
            <p className="px-8 text-sm">{description}</p>
          </div>
          <BreadCrumb page="About" />
        </div>
      </div>

      <About data={data} />

      <main className="mt-0 pt-0">
        <div className="container p-8 space-y-10 text-center">
          <h5 className="text-3xl leading-relaxed">
            Situated in the epicenter of Kathmandu Valley, offering great value
            for money with superb rooms and a wonderful dining experience. Come
            and stay with us and allow us to make you feel at home with true
            Nepalese hospitality!
          </h5>
          <p>
            Our 126 well-appointed rooms offer every comfort the traveler may
            need and we have a full range of amenities for our distinguished
            guests. You can enjoy a 180-degree panoramic view of the majestic
            Himalayan range from our garden. We offer the finest cuisine in our
            international restaurant ‘Café Horizon’ as well as In-Room dining
            for a more private meal. For our active guests, we have a superb
            long tennis court, swimming pool, and health club to keep you in
            shape and tone your body. The food served is hygienic and timely.
            The culinary chef uses their best skills to serve a delight on your
            table. You can enjoy the delicious recipes of Indian, Continental,
            and Chinese Cuisine.
          </p>
          <Slider
            slides={aboutSlides.map((slide) => ({
              url: slide.url,
              title: slide.title,
            }))}
            containerClassName="w-full h-[90vh] overflow-hidden relative mx-auto mt-10 group"
            buttonClassName="stay-slider-button"
            imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
            trueClassName="opacity-100 scale-100 translate-y-0"
            falseClassName="opacity-0 scale-90 -translate-y-4 -z-10"
          />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
