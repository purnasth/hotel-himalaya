import React from "react";
import RoomCard from "../components/ui/RoomCard";

const Hall = () => {
  const hallData = [
    {
      name: "Grand Hall",
      type: "grand-hall",
      description:
        "Our Grand Hall is perfect for hosting large events and gatherings. With spacious interiors and state-of-the-art facilities, it provides an unforgettable experience for all occasions.",
    },
    {
      name: "Banquet Hall",
      type: "banquet-hall",
      description:
        "Experience luxury and sophistication in our Banquet Hall, featuring splendid interiors and top-notch facilities. It's the ideal venue for weddings, receptions, and other special events.",
    },
    // Add more hall data as needed
  ];

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
      {hallData.map((hall, index) => (
        <RoomCard key={index} room={hall} packageImages={hallImages} />
      ))}
    </>
  );
};

export default Hall;
