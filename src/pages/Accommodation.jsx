import React from "react";
import RoomCard from "../components/ui/RoomCard";

const Accommodation = () => {
  const roomData = [
    {
      name: "Deluxe Room",
      type: "deluxe",
      description:
        "The Deluxe Room offers a comfortable stay with modern amenities and elegant decoration.",
    },
    {
      name: "Super Deluxe Room",
      type: "super deluxe",
      description:
        "Experience luxury and sophistication in our Super Deluxe Room, featuring splendid interiors and top-notch facilities.",
    },
    {
      name: "Premium Room",
      type: "premium room",
      description:
        "Indulge in luxury and comfort with our Premium Room, designed to offer a lavish experience for our guests.",
    },
    {
      name: "Junior Suite",
      type: "junior suite",
      description:
        "Our Junior Suite offers spacious accommodation with a cozy living room, perfect for relaxation and comfort.",
    },
    {
      name: "Executive Suite",
      type: "executive suite",
      description:
        "Elegance meets comfort in our Executive Suite, featuring a large bedroom and a separate living room for your convenience.",
    },
  ];

  const roomImages = [
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/km7M2-room3.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/banner/8GSHn-room-banner.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/Q3Wun-room2.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/AhKbK-room06.jpg",
    },
    {
      url: "https://mayurstay.com/hotelhimalaya/images/package/galleryimages/ykMee-c.jpeg",
    },
  ];

  return (
    <>
      {roomData.map((room, index) => (
        <RoomCard key={index} room={room} packageImages={roomImages} />
      ))}
    </>
  );
};

export default Accommodation;
