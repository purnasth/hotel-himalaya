import React from "react";
import GalleryComponent from "../components/GalleryComponent";

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
      category: "Dine",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Hotel Himalaya",
      category: "Room",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
      category: "Exterior",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Hall",
      category: "Hall",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Interior",
      category: "Interior",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
      category: "Recreation",
    },
    {
      id: 7,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
      category: "Dine",
    },
    {
      id: 8,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Hotel Himalaya",
      category: "Room",
    },
    {
      id: 9,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
      category: "Exterior",
    },
    {
      id: 10,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
      category: "Exterior",
    },
    {
      id: 11,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Hotel Himalaya",
      category: "Hall",
    },
    {
      id: 12,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Hotel Himalaya",
      category: "Interior",
    },
    {
      id: 13,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Hotel Himalaya",
      category: "Interior",
    },
    {
      id: 14,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
      category: "Recreation",
    },
    {
      id: 15,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
      category: "Recreation",
    },
    {
      id: 16,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 17,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 18,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 19,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 20,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 21,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 22,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
    },
  ];
  return (
    <>
      <main className="">
        <div className="container mt-12">
          <div className="text-center space-y-6 px-24 mb-12">
            <span className="uppercase">Making 10,000+ happy faces</span>
            <h3 className="text-5xl leading-snug">Glimpse of Hotel</h3>
            <p className="text-base max-w-lg mx-auto">
              Where fleeting moments are captured and cherished. It's a
              sanctuary for the past, holding echoes of laughter and whispers of
              dreams.
            </p>
          </div>
        </div>
        <GalleryComponent galleryImages={galleryImages} />
      </main>
    </>
  );
};

export default GalleryPage;
