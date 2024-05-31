import React from "react";
import Banner from "../components/Banner";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/Loader";
import About from "../components/About";
import Slider from "../components/Slider";

const AboutPage = () => {
  const slides = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
    },
    {
      url: "https://hotelhimalaya.com/project/images/slideshow/id4vO-04.jpg",
    },
  ];

  const { data, loading, error } = useFetchData("/api/aboutData.json");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Banner
        banner={data.banner}
        title={data.title}
        description={data.description}
        page="About"
      />
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
            slides={slides}
            containerClassName="w-full h-[90vh] overflow-hidden relative mx-auto mt-10 group"
            buttonClassName="room-slider-button"
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
