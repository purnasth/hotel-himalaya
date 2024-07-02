import React from "react";

const GalleryComponent = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 2,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 3,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 5,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 6,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 7,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 8,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 9,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 10,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "Hotel Himalaya",
    },
    {
      id: 11,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 12,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 13,
      url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 14,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
    },
    {
      id: 15,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
      alt: "Hotel Himalaya",
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
    <div className="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8">
      {galleryImages.map((image) => (
        <>
          <div key={image.id} className="relative mb-5 group cursor-pointer overflow-hidden">
            <img
              src={image.url}
              alt={image.alt}
              className="min-h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
            />
            <div className="absolute inset-0 w-full h-full p-8 text-white bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-60  transition-all duration-300 ease-linear" />
            <h5 className="absolute bottom-0 text-center w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 group-hover:translate-x-24 transition-all duration-300 ease-linear">{image.alt}</h5>
          </div>
        </>
      ))}
    </div>
  );
};

export default GalleryComponent;

// import React, { useEffect, useState } from "react";

// const Gallery = () => {
//   const galleryImages = [
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "Hotel Himalaya",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "Hotel Himalaya",
//     },
//   ];

//   const [gridItems, setGridItems] = useState([]);

//   useEffect(() => {
//     adjustGrid();
//   }, []);

//   const adjustGrid = () => {
//     const newGridItems = [];

//     for (let i = 0; i < galleryImages.length; i++) {
//       const image = galleryImages[i];

//       if (i === 0 || shouldAddBeforePortrait(i)) {
//         newGridItems.push(
//           <img
//             key={image.id}
//             src={image.url}
//             alt={image.alt}
//             className="min-h-64 object-cover cursor-pointer my-5"
//           />
//         );
//       } else {
//         newGridItems.push(<div key={`dummy-${i}`} className="min-h-64"></div>);
//       }
//     }

//     setGridItems(newGridItems);
//   };

//   const shouldAddBeforePortrait = (index) => {
//     if (index === 0) return false;

//     const currImage = galleryImages[index];
//     const prevImage = galleryImages[index - 1];

//     const currAspectRatio = currImage.width / currImage.height;
//     const prevAspectRatio = prevImage.width / prevImage.height;

//     return currAspectRatio > 1.5 && prevAspectRatio <= 1.5;
//   };

//   return (
//     <div className="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8">
//       {galleryImages.map((image) => (
//         <img
//           src={image.url}
//           alt={image.alt}
//           className="min-h-64 mb-5 object-cover"
//         />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
