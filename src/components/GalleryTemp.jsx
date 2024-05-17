import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "",
    },
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "",
    },
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "",
    },
  ];

  return (
    <>
      <div className="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8">
        {galleryImages.map((image) => (
          <img
            src={image.url}
            alt={image.alt}
            className="min-h-64 object-cover cursor-pointer my-5"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
