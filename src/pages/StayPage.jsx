import React from "react";
import Banner from "../components/Banner";
import PackageComponent from "../components/PackageComponent";

const StayPage = () => {
  const accommodationContents = {
    id: "Stay",
    banner: "https://mayurstay.com/hotelhimalaya/images/subpackage/9Lgh2-1.jpg",
    title: "Stay with Us",
    description:
      "Indulge in serene luxury with meticulously curated rooms, modern amenities, and breathtaking views for an unforgettable tailored stay.",
    roomsCategories: [
      {
        id: "deluxe",
        title: "Deluxe Rooms",
        type: "deluxe",
        description:
          "The Deluxe Room offers a comfortable stay with modern amenities and elegant decoration.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/4m0u8-room05.jpg",
            alt: "Deluxe Room",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
            alt: "Junior Suite",
          },
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
            alt: "Executive Suite",
          },
        ],
      },
      {
        id: "juniorsuite",
        title: "Junior Suites",
        type: "junior suite",
        description:
          "Our Junior Suite offers spacious accommodation with a cozy living room, perfect for relaxation and comfort.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/km7M2-room3.jpg",
            alt: "Junior Suite",
          },
        ],
      },
      {
        id: "executivesuite",
        title: "Executive Suite",
        type: "executive suite",
        description:
          "Elegance meets comfort in our Executive Suite, featuring a large bedroom and a separate living room for your convenience.",
        image: [
          {
            src: "https://hotelhimalaya.com/images/package/galleryimages/UvnAe-a.jpeg",
            alt: "Executive Suite",
          },
        ],
      },
    ],
  };

  const { banner, title, description } = accommodationContents;
  return (
    <>
      <Banner
        banner={banner}
        title={title}
        description={description}
        page="Accommodation"
      />

      {/* send the images of the roomCategories to the Package Component */}

      <PackageComponent page="Stay" contents={accommodationContents} />
    </>
  );
};

export default StayPage;
