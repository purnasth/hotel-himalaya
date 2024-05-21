import React from "react";
import DynamicSlider from "./ui/DynamicSlider";

const SocialOffers = () => {
  const offers = [
    {
      image: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      title: "Junior Suite",
      description: "Description of Junior Suite...",
    },
    {
      image: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      title: "Junior Suite",
      description: "Description of Junior Suite...",
    },
    {
      image: "https://mayurstay.com/hotelhimalaya/images/slideshow/GDLNu-03.jpg",
      title: "Junior Suite",
      description: "Description of Junior Suite...",
    },
  ];

  return (
    <main className="px-0">
      <div className="container pb-16">
        <div className="flex items-center justify-center text-center gap-8">
          <div className="space-y-2">
            <span className="uppercase">125 Well Appointed Rooms</span>
            <h3 className="text-5xl leading-snug">Boutique Accommodation</h3>
            <p className="text-base">
              In a realm where tranquility and beauty intertwine, find yourself
              nestled in the embrace of an enchanting haven.
            </p>
          </div>
        </div>
      </div>
      <div>
        <DynamicSlider items={offers} itemsPerSlide={5} />
      </div>
    </main>
  );
};

export default SocialOffers;
