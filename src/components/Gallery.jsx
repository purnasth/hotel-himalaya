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
      id: 1,
      url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
      alt: "",
    },
    {
      id: 4,
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
      alt: "",
    },
  ];

  return (
    <div className="p-5 columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&img:not(:first-child)]:mt-5 lg:[&img:not(:first-child)]:mt-8">
      {galleryImages.map((image) => (
        <img
          src={image.url}
          alt={image.alt}
          className="min-h-64 mb-5 object-cover"
        />
      ))}
    </div>
  );
};

export default Gallery;


// import React, { useEffect, useState } from "react";

// const Gallery = () => {
//   const galleryImages = [
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "",
//     },
//     {
//       id: 5,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/w7fbd-2.jpg",
//       alt: "",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "",
//     },
//     {
//       id: 6,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/mxXP9-2.jpg",
//       alt: "",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "",
//     },
//     {
//       id: 2,
//       url: "https://mayurstay.com/hotelhimalaya/images/mservices/mBk0x-1.jpg",
//       alt: "",
//     },
//     {
//       id: 3,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "",
//     },
//     {
//       id: 1,
//       url: "https://mayurstay.com/hotelhimalaya/images/slideshow/m9TAT-1.jpg",
//       alt: "",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
//       alt: "",
//     },
//     {
//       id: 4,
//       url: "https://mayurstay.com/hotelhimalaya/images/package/banner/GJ05P-banner.jpeg",
//       alt: "",
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
