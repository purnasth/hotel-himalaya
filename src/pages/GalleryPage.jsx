import React from "react";
import GalleryComponent from "../components/GalleryComponent";

import g1 from "/images/banner/about.webp";
import g2 from "/images/banner/rooms.webp";
import g3 from "/images/banner/dine.webp";
import g4 from "/images/banner/pdr.webp";
import g5 from "/images/banner/swimming.webp";
import g6 from "/images/banner/dalaan.webp";
import g7 from "/images/hero/1.webp";
import g8 from "/images/hero/2.webp";
import g9 from "/images/stay/dr1.webp";
import g10 from "/images/dine/horizon1.webp";
import g11 from "/images/stay/er1.webp";
import g12 from "/images/hero/3.webp";
import g13 from "/images/dine/pmc1.webp";
import g14 from "/images/halls/gr/1.webp";
import g15 from "/images/recreation/steam/4.webp";
import g16 from "/images/halls/hgbr/1.webp";
import g17 from "/images/stay/er2.webp";
import g18 from "/images/recreation/tennis/4.webp";
import g19 from "/images/stay/dr2.webp";
import g20 from "/images/recreation/gym/3.webp";
import g21 from "/images/dine/bcb2.webp";
import g22 from "/images/halls/tg/1.webp";
import g23 from "/images/dine/btw3.webp";
import g24 from "/images/halls/pdr/1.webp";
import g25 from "/images/dine/tcs2.webp";
import g26 from "/images/dine/tcs3.webp";
import g27 from "/images/halls/rb/4.webp";
import g28 from "/images/halls/rh/2.webp";
import g29 from "/images/halls/sh/1.webp";
import g30 from "/images/halls/br/1.webp";
import g31 from "/images/stay/js2.webp";
import g32 from "/images/recreation/steam/1.webp";

const GalleryPage = () => {
  const galleryImages = [
    {
      id: 1,
      url: g7,
      alt: "Hotel Himalaya",
    },
    {
      id: 2,
      url: g1,
      alt: "Drone Shot",
    },
    {
      id: 3,
      url: g2,
      alt: "Junior Suite Room",
      category: "Room",
    },
    {
      id: 4,
      url: g3,
      alt: "By the Waterfall",
      category: "Dine",
    },
    {
      id: 5,
      url: g4,
      alt: "PDR III",
      category: "Hall",
    },
    {
      id: 6,
      url: g5,
      alt: "Swimming Pool Deck",
      category: "Recreation",
    },
    {
      id: 7,
      url: g6,
      alt: "Dalaan",
      category: "Dine",
    },
    {
      id: 8,
      url: g8,
      alt: "Hotel Himalaya",
    },
    {
      id: 9,
      url: g9,
      alt: "Deluxe Room",
      category: "Room",
    },
    {
      id: 10,
      url: g10,
      alt: "The Cafe Horizon",
      category: "Dine",
    },
    {
      id: 11,
      url: g11,
      alt: "Executive Room",
      category: "Room",
    },
    {
      id: 12,
      url: g18,
      alt: "Lawn Tennis Court",
      category: "Recreation",
    },
    {
      id: 13,
      url: g13,
      alt: "Patan Museum Cafe",
      category: "Dine",
    },
    {
      id: 14,
      url: g14,
      alt: "Green Room",
      category: "Hall",
    },
    {
      id: 15,
      url: g15,
      alt: "Jacuzzi",
      category: "Recreation",
    },
    {
      id: 16,
      url: g16,
      alt: "Himalayan Grand Ball",
    },
    {
      id: 17,
      url: g17,
      alt: "Executive Twin Room",
      category: "Room",
    },
    {
      id: 18,
      url: g12,
      alt: "Swimming Pool Deck",
      category: "Recreation",
    },
    {
      id: 19,
      url: g19,
      alt: "Deluxe Twin Room",
      category: "Room",
    },
    {
      id: 20,
      url: g20,
      alt: "Gym",
      category: "Recreation",
    },
    {
      id: 21,
      url: g21,
      alt: "Base Camp Bar",
      category: "Dine",
    },
    {
      id: 22,
      url: g22,
      alt: "Temple Garden",
      category: "Hall",
    },
    {
      id: 23,
      url: g23,
      alt: "By the Waterfall",
      category: "Dine",
    },
    {
      id: 24,
      url: g24,
      alt: "PDR I",
      category: "Hall",
    },
    {
      id: 25,
      url: g25,
      alt: "The Cake Shop",
      category: "Dine",
    },
    {
      id: 26,
      url: g26,
      alt: "The Cake Shop",
      category: "Dine",
    },
    {
      id: 27,
      url: g27,
      alt: "Rato Baithak",
      category: "Hall",
    },
    {
      id: 28,
      url: g28,
      alt: "Regent Hall",
      category: "Hall",
    },
    {
      id: 29,
      url: g29,
      alt: "Skyline Hall",
      category: "Hall",
    },
    {
      id: 30,
      url: g30,
      alt: "Board Room",
      category: "Hall",
    },
    {
      id: 31,
      url: g31,
      alt: "Junior Suite Room",
      category: "Room",
    },
    {
      id: 32,
      url: g32,
      alt: "Steam",
      category: "Recreation",
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
