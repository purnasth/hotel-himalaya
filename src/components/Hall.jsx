import React from "react";
import Slider from "./Slider";

const Hall = () => {
  const hallImages = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/KN2OQ-event01.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/OB5Aq-skyline2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/C0Ne4-rato.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/R3YEn-regent4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/SFYSu-pdr4.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/VyxO5-green4.jpg",
    },
  ];
  return (
    <>
      <main className="pb-0 px-0">
        <div className="container px-24 pb-24">
          <div className="text-center space-y-8 px-12">
            <span className="uppercase">Trusted by 10,000+ happy faces</span>

            <h3 className="text-5xl leading-snug">
              Auspicious Events Center
            </h3>

            <p className="text-base">
              Our conference and meeting halls have seen and hosted many
              international conventions, workshops and special banquets. Our
              clienteles include many NGO's and INGO's like the UN, corporate
              houses and prominent families seeking special venue / menu for
              their celebration. Whether a corporate conference, convention or a
              lavish banquet, our team is on hand to help you create a uniquely
              tailored event to suit your needs.
            </p>
          </div>
          <div className="my-24 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-2xl font-medium">For Corporates</h4>
              <p className="text-pretty line-clamp-4">
                Engage in professional gatherings that redefine ambiance,
                offering exquisite venues, superior accommodations, and gourmet
                cuisine.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-medium">For Weddings</h4>
              <p className="text-pretty line-clamp-4">
                Experience the epitome of luxury and romance at Hotel Himalaya,
                where every detail is crafted to perfection for your
                unforgettable wedding day amidst stunning grandeur.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-2xl font-medium">For Personal Events</h4>
              <p className="text-pretty line-clamp-4">
                Elevate your milestones with unparalleled luxury at Hotel
                Himalaya, where every event is a treasured memory in the making,
                meticulously crafted for perfection.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-gradient px-6 py-2 rounded-full">
              View More
            </button>
          </div>
        </div>

        <Slider
          slides={hallImages}
          containerClassName="w-full h-[95vh]"
          buttonClassName="hall-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[2s]"
          trueClassName="opacity-100"
          falseClassName="opacity-0"
        />
        {/* <Slider
          slides={hallImages}
          containerClassName="w-full h-[90vh]"
          buttonClassName="hall-slider-button"
          imgClassName="w-full h-full object-cover absolute inset-0 transition-all duration-[1s]"
          trueClassName="opacity-100 scale-100"
          falseClassName="opacity-0 rotate-3 scale-80"
        /> */}
      </main>
    </>
  );
};

export default Hall;
